#!/usr/bin/env node
// compliance-ignore-file
//
// compliance-check.mjs
// Deterministic compliance gate for Compass Camper LLC rank-and-rent sites.
// Source of truth: COMPLIANCE_STANDARDS.md. This enforces the mechanically detectable
// rules only. Judgment-level review (net impression, unverifiable claims, fake-sounding
// testimonials) is handled by the compliance-gate subagent, not here.
//
// No dependencies. Node 22+. Runs in GitHub Actions or inside a Claude Code session.
//
// Usage:
//   node compliance-check.mjs [paths...] [--strict] [--config <path>]
//
//   paths     One or more files or directories to scan. Defaults to "src".
//   --strict  Promote "required element missing" findings from WARN to FAIL.
//             Use for pre-launch audits. Leave off for routine PR gating.
//   --config  Path to compliance.config.json. Defaults to ./compliance.config.json.
//
// Exit codes:
//   0  Pass. No hard fails (and, under --strict, no missing required elements).
//   1  Fail. At least one hard fail (or a missing required element under --strict).
//   2  Bad invocation (path not found, etc).
//
// Per-line override: put the token compliance-ignore in a line to suppress findings on it.
// Per-file override: put compliance-ignore-file within the first 5 lines to skip the file.
//
// Program-figure exception (operator ruling 2026-08-14). Program figures are still
// banned by default. They pass ONLY in a file carrying an approval block, and only
// while the verification behind them is fresh. Put this in the first 40 lines:
//
//   compass-approved-figures: operator=2026-08-14 verified=2026-08-14
//   source=https://oklahoma.gov/oem/.../rules-and-regulations.html
//
// operator=  the date the operator specifically approved figures for this program.
// verified=  the date every figure in the file was last read at the administering
//            body's own page or document. Re-read and bump it, or the file expires.
// source=    a URL on the administering body's own site. Not a news article, not a
//            summary site, not another contractor.
//
// An approved file downgrades money-claim-figure from FAIL to WARN, so the figures
// stay visible in every run and never go silent. After FIGURE_APPROVAL_MAX_AGE_DAYS
// the approval stops working and the figures hard-fail again: the rule's original
// worry was decay, so the exception decays too. Re-verify at the source and bump
// verified=, or take the figures down. A malformed or incomplete block does not
// approve anything.
//
// Config shape (all optional):
//   {
//     "tenantSigned": false,     // true relaxes tenant-allowed phrases per TENANT_ACTIVATION_PLAYBOOK.md
//     "tenantBrand": "",         // reserved for future checks
//     "ignorePhrases": []        // array of exact strings to never flag on this repo
//   }

import fs from "node:fs";
import path from "node:path";

const IGNORE_LINE = "compliance-" + "ignore";           // split so this file does not self-match
const IGNORE_FILE = "compliance-" + "ignore-file";
const FIGURE_APPROVAL = "compass-" + "approved-figures";
// How long a verification stays good. Program rounds turn over annually, so half a
// year is the outside edge of "somebody checked this recently".
const FIGURE_APPROVAL_MAX_AGE_DAYS = 180;
// Rules the approval block can downgrade. Only the figure rule: an unnamed money
// claim is wrong no matter who approved it, because it names nothing to verify.
const FIGURE_APPROVAL_COVERS = new Set(["money-claim-figure"]);
const SCAN_EXT = new Set([
  ".astro", ".html", ".md", ".mdx", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json",
]);
const SKIP_DIR = new Set([
  "node_modules", "dist", "build", ".git", ".astro", ".vercel", ".netlify", "coverage",
  ".github", ".changeset", "public",
]);
const SKIP_FILE = new Set(["compliance-check.mjs", "compliance.config.json"]);

// ---- Rule definitions ----------------------------------------------------------------
// severity: "fail" blocks. "warn" reports only. relaxIfTenant: dropped when tenantSigned.

const LINE_RULES = [
  // Style
  { id: "em-dash", severity: "fail", re: /\u2014/g,
    msg: "Em dash is banned. Use a comma, period, parentheses, or the word 'to'." },
  { id: "en-dash", severity: "warn", re: /\u2013/g,
    msg: "En dash present. Confirm it is intended (ranges only)." },

  // Schema: forbidden types and properties. These match an EMITTED node (a quoted
  // @type or property), not the type name written in a comment or a guardrail
  // allow-list. Both quote styles, because the Astro/TS sites use single quotes.
  { id: "schema-review-prop", severity: "fail", re: /["']review["']\s*:\s*[\[{]/gi,
    msg: "Review schema property is banned unless it maps to a real, documented review." },
  { id: "schema-forbidden-type", severity: "fail",
    re: /["']@type["']\s*:\s*["'](LocalBusiness|Review|Rating|AggregateRating|Contractor|GeneralContractor|HomeAndConstructionBusiness|Plumber|Electrician|HVACBusiness|RoofingContractor|FoundationRepairContractor|Locksmith)["']/gi,
    msg: "Forbidden schema @type. Allowed only: Organization, Service, ProfessionalService, BreadcrumbList, FAQPage." },

  // Forbidden claim-language (COMPLIANCE_STANDARDS.md, "never use these ever")
  // Consent channel, added 2026-08-11 on operator instruction, enforcing the
  // second half of the same-day consent ruling: "No consent template names text
  // messaging, and no site may add it back." The documents said it and the
  // 54-site sweep applied it, but nothing stopped a future build typing it back.
  //
  // These match the CONSENT CONSTRUCTION, not the word "text". A first attempt
  // used a forward lookahead and silently caught nothing, because real consent
  // copy puts the verb first ("I agree that we may contact you by ... text
  // messages"). Tested both directions before merge: it fires on reintroduced
  // consent copy and stays quiet on "we do not send text messages", which is a
  // sentence sites should be free to write, and on "alt text".
  { id: "consent-text-agree", severity: "fail",
    re: /\b(agree|consent)\b[^.!?]{0,200}\b(text messages?|text messaging|texting|SMS)\b/gi,
    msg: "Consent copy names text messaging. Banned portfolio-wide 2026-08-11: the published numbers do not send or receive texts, so consenting to that channel is a claim the business cannot support." },
  { id: "consent-text-contact", severity: "fail",
    re: /\b(contact|reach)\s+(me|you)\b[^.!?]{0,160}\b(text messages?|text messaging|texting|SMS)\b/gi,
    msg: "Contact-permission copy names text messaging. Banned portfolio-wide 2026-08-11." },
  // "reply STOP" and "replying STOP" both appeared in the pre-ruling copy. The
  // first version of this rule matched only the former and missed the live
  // sonoranseptic.com line, which said "by replying STOP to any text".
  { id: "consent-stop-keyword", severity: "fail", re: /\breply(ing)?\s+STOP\b/gi,
    msg: "The 'reply STOP' opt-out points at a text mechanism that does not exist. Retired 2026-08-11; the opt-out is asking to be removed during any call." },
  { id: "consent-msg-data-rates-text", severity: "warn", re: /\btext (message )?and data rates\b/gi,
    msg: "Rate disclosure names text. The template says 'Message and data rates may apply'." },

  { id: "phrase-vetted", severity: "fail", re: /\bvetted\b/gi,
    msg: "'Vetted' is banned. No documented vetting process exists." },
  { id: "phrase-our-network", severity: "fail", re: /\bour network\b/gi,
    msg: "'Our network' implies plural contractors you do not have." },
  { id: "phrase-prescreened", severity: "fail", re: /\bpre[-\s]?screened\b/gi,
    msg: "'Pre-screened' implies a screening process. Banned." },
  { id: "phrase-prequalified", severity: "fail", re: /\bpre[-\s]?qualified (contractors?|pros?|professionals?)\b/gi,
    msg: "'Pre-qualified' implies a qualification process you do not perform. Banned (FORBIDDEN_LANGUAGE.md)." },
  { id: "phrase-handselected", severity: "fail", re: /\bhand[-\s]?selected\b/gi,
    msg: "'Hand-selected' is a vague, indefensible claim. Banned." },
  { id: "phrase-carefully-selected", severity: "fail", re: /\bcarefully selected\b/gi,
    msg: "'Carefully selected' implies a selection process. Banned." },
  { id: "phrase-top-rated", severity: "fail", re: /\btop[-\s]?rated\b/gi,
    msg: "'Top-rated' implies a ranking you cannot document. Banned (FORBIDDEN_LANGUAGE.md)." },
  { id: "phrase-best-in", severity: "fail", re: /\bbest contractors? in\b/gi,
    msg: "'Best contractors in [city]' implies a best-of process. Banned." },
  { id: "phrase-trusted-partner", severity: "fail", re: /\btrusted partners?\b/gi, relaxIfTenant: true,
    msg: "'Trusted partner(s)' creates implied warranty. Allowed only after a tenant is signed." },

  // First-person work claims. FORBIDDEN_LANGUAGE.md bans these outright (holding out as a
  // contractor triggers state licensing statutes), so they FAIL, not WARN. There is no
  // judgment layer in CI to review a WARN, so the floor has to block them itself.
  { id: "work-verb", severity: "fail",
    re: /\bwe (repair|install|diagnose|level|fix|replace|inspect|waterproof|seal|mitigate|excavate)\b/gi,
    msg: "First-person work verb. Compass Camper LLC does not perform the work. Rephrase to 'a licensed contractor'." },
  { id: "our-crew", severity: "fail", re: /\bour (crew|crews|technicians|installers|specialists)\b/gi,
    msg: "Implies an owned workforce. Compass Camper LLC has none. Rephrase." },

  // Tenure and fabricated-stat claims (WARN)
  { id: "since-year", severity: "warn", re: /\bsince (19|20)\d{2}\b/gi,
    msg: "Tenure claim. Only allowed if it reflects Compass Camper LLC's real operating history." },
  { id: "years-experience", severity: "warn", re: /\b\d+\+?\s+years (of experience|in business)\b/gi,
    msg: "Experience claim. Must reflect Compass Camper LLC's actual age, not the contractor's." },
  { id: "jobs-completed", severity: "warn", re: /\b(jobs|projects)\s+completed\b/gi,
    msg: "Completed-work counter. Not allowed pre-tenant." },
  { id: "customers-served", severity: "warn", re: /\b(homes|customers|clients)\s+(served|repaired|helped)\b/gi,
    msg: "Served-count claim. Not allowed unless documented." },
  { id: "featured-in", severity: "warn", re: /\bas featured in\b/gi,
    msg: "'As featured in' requires verifiable media placement." },
  { id: "starting-at", severity: "warn", re: /\bstarting at \$\d/gi,
    msg: "Pricing claim requires documented tenant data." },
  // Third-party money claims. Operator ruling 2026-08-11: we do not publish program
  // figures at all. Name the program, link the agency, say terms change. The hedge
  // ("may be offered") is now the REQUIRED shape, so it is no longer flagged.
  { id: "money-claim-vague-jurisdiction", severity: "fail",
    re: /\b(some|certain|many|several|various)\s+(?:\w+\s+){0,3}(counties|cities|states|towns|areas|municipalities|utilities|jurisdictions|programs)\b[^.!?]{0,60}\b(grants?|rebates?|tax credits?|incentives?|subsidies|cost[-\s]shares?|reimbursements?)\b/gi,
    msg: "Unnamed money claim ('some counties offer grants'). Name the program and link the agency, or delete the sentence. COMPLIANCE_STANDARDS.md, Third-Party Money Claims." },
  { id: "money-claim-figure", severity: "fail",
    re: /\b(?:grants?|rebates?|(?<!insurance )(?<!premium )credits?|refunds?|reimburs\w*|cost[-\s]shares?|subsid\w*|assistance program)\b[^.!?]{0,60}(?:\$[\d,]+|\b\d{1,3}\s?(?:percent|%))|(?:\$[\d,]+|\b\d{1,3}\s?(?:percent|%))[^.!?]{0,60}\b(?:grants?|rebates?|(?<!insurance )(?<!premium )credits?|refunds?|reimburs\w*|cost[-\s]shares?|subsid\w*|assistance program)\b/gi,
    msg: "Program figure published (amount, cap or percentage tied to a grant, rebate, credit or refund). We do not publish these: they go stale and the agency owns them. Name the program, say terms change, link the agency's own page. COMPLIANCE_STANDARDS.md, Third-Party Money Claims." },
];

// Required elements: checked for PRESENCE anywhere in the scanned set.
// Absent => WARN, or FAIL under --strict.
const REQUIRED = [
  { id: "req-disclosure", re: /is not a licensed contractor/i,
    msg: "Header/footer disclosure string 'is not a licensed contractor' not found anywhere." },
  { id: "req-entity", re: /Compass Camper LLC/,
    msg: "Operating entity 'Compass Camper LLC' not found anywhere." },
  { id: "req-tcpa-consent", re: /consent is not a condition/i,
    msg: "TCPA consent line 'Consent is not a condition' not found. Required above every form submit." },
  // Updated 2026-08-11 to match the same-day consent ruling. The old rule
  // required the keyword STOP, which every template now omits: the portfolio's
  // numbers do not send or receive texts, so a "reply STOP to any text" opt-out
  // pointed at a mechanism that does not exist. The opt-out is now asking to be
  // removed during a call. COMPLIANCE_STANDARDS.md was updated for this the
  // same day; this checker was not, and warned on every compliant site until
  // now. See COMPLIANCE_STANDARDS.md, "No consent template names text
  // messaging, and no site may add it back".
  { id: "req-tcpa-optout", re: /asking to be removed/i,
    msg: "TCPA opt-out line 'asking to be removed during any call' not found in consent copy." },
  { id: "req-privacy-link", re: /\/privacy\b/,
    msg: "No link to /privacy found." },
  { id: "req-terms-link", re: /\/terms\b/,
    msg: "No link to /terms found." },
];

// ---- Arg parsing ---------------------------------------------------------------------

const args = process.argv.slice(2);
const strict = args.includes("--strict");
let configPath = "compliance.config.json";
const ci = args.indexOf("--config");
if (ci !== -1 && args[ci + 1]) configPath = args[ci + 1];
const paths = args.filter((a, i) => !a.startsWith("--") && !(ci !== -1 && i === ci + 1));
if (paths.length === 0) paths.push("src");

// ---- Config --------------------------------------------------------------------------

let config = { tenantSigned: false, tenantBrand: "", ignorePhrases: [] };
try {
  if (fs.existsSync(configPath)) {
    config = { ...config, ...JSON.parse(fs.readFileSync(configPath, "utf8")) };
  }
} catch (e) {
  console.error(`Could not parse ${configPath}: ${e.message}`);
  process.exit(2);
}
const activeLineRules = LINE_RULES.filter((r) => !(config.tenantSigned && r.relaxIfTenant));
const ignorePhrases = (config.ignorePhrases || []).map((s) => String(s).toLowerCase());

// ---- File collection -----------------------------------------------------------------

function collect(target, out) {
  let stat;
  try {
    stat = fs.statSync(target);
  } catch {
    console.error(`Path not found: ${target}`);
    process.exit(2);
  }
  if (stat.isDirectory()) {
    if (SKIP_DIR.has(path.basename(target))) return;
    for (const entry of fs.readdirSync(target)) collect(path.join(target, entry), out);
  } else {
    if (SKIP_FILE.has(path.basename(target))) return;
    if (SCAN_EXT.has(path.extname(target))) out.push(target);
  }
}

const files = [];
for (const p of paths) collect(p, files);

// ---- Program-figure approval ---------------------------------------------------------

// Reads the approval block out of a file header. Returns null when there is none,
// or when it is incomplete or malformed: a half-written block approves nothing.
// Returns { operator, verified, source, ageDays, expired } otherwise.
function readFigureApproval(lines, today) {
  const head = lines.slice(0, 40).join("\n");
  if (!head.includes(FIGURE_APPROVAL)) return null;
  const operator = /operator=(\d{4}-\d{2}-\d{2})/.exec(head)?.[1];
  const verified = /verified=(\d{4}-\d{2}-\d{2})/.exec(head)?.[1];
  const source = /source=(https?:\/\/\S+)/.exec(head)?.[1];
  if (!operator || !verified || !source) {
    return { malformed: true, operator, verified, source };
  }
  const verifiedAt = Date.parse(verified + "T00:00:00Z");
  if (Number.isNaN(verifiedAt)) return { malformed: true, operator, verified, source };
  const ageDays = Math.floor((today - verifiedAt) / 86400000);
  return {
    malformed: false,
    operator,
    verified,
    source,
    ageDays,
    expired: ageDays > FIGURE_APPROVAL_MAX_AGE_DAYS,
  };
}

const TODAY = Date.parse(new Date().toISOString().slice(0, 10) + "T00:00:00Z");

// ---- Scan ----------------------------------------------------------------------------

const findings = [];      // { severity, file, line, id, text, msg }
const requiredHits = new Set();

for (const file of files) {
  let content;
  try {
    content = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }
  const lines = content.split(/\r?\n/);

  // Per-file skip marker in first 5 lines
  if (lines.slice(0, 5).some((l) => l.includes(IGNORE_FILE))) continue;

  const approval = readFigureApproval(lines, TODAY);

  // Required-element presence (whole file)
  for (const req of REQUIRED) if (req.re.test(content)) requiredHits.add(req.id);

  // Per-line rules
  lines.forEach((line, idx) => {
    if (line.includes(IGNORE_LINE)) return;
    const lower = line.toLowerCase();
    if (ignorePhrases.some((p) => p && lower.includes(p))) return;

    for (const rule of activeLineRules) {
      rule.re.lastIndex = 0;
      let m;
      while ((m = rule.re.exec(line)) !== null) {
        let severity = rule.severity;
        let msg = rule.msg;

        if (FIGURE_APPROVAL_COVERS.has(rule.id) && approval) {
          if (approval.malformed) {
            msg =
              "Program figure in a file whose " + FIGURE_APPROVAL + " block is incomplete. " +
              "It needs all three of operator=YYYY-MM-DD, verified=YYYY-MM-DD and " +
              "source=<url on the administering body's own site>. Fix the block or remove the figure.";
          } else if (approval.expired) {
            msg =
              `Program figure last verified ${approval.verified}, which is ${approval.ageDays} days ` +
              `ago and past the ${FIGURE_APPROVAL_MAX_AGE_DAYS}-day limit. The approval has expired. ` +
              `Re-read every figure at ${approval.source}, bump verified=, or take the figures down.`;
          } else {
            severity = "warn";
            msg =
              `Program figure, approved by the operator on ${approval.operator} and verified ` +
              `${approval.verified} (${approval.ageDays} days ago) at ${approval.source}. ` +
              "Allowed under the verified-figure exception. Re-verify before it reaches " +
              `${FIGURE_APPROVAL_MAX_AGE_DAYS} days.`;
          }
        }

        findings.push({
          severity,
          file,
          line: idx + 1,
          id: rule.id,
          text: m[0].trim().slice(0, 80),
          msg,
        });
        if (m.index === rule.re.lastIndex) rule.re.lastIndex++; // avoid zero-width loop
      }
    }
  });
}

// Missing required elements
const missing = REQUIRED.filter((r) => !requiredHits.has(r.id)).map((r) => ({
  severity: strict ? "fail" : "warn",
  file: "(repo)",
  line: 0,
  id: r.id,
  text: "",
  msg: r.msg,
}));
const all = findings.concat(missing);

// ---- Report --------------------------------------------------------------------------

const hardFails = all.filter((f) => f.severity === "fail");
const warns = all.filter((f) => f.severity === "warn");

function printGroup(title, list) {
  if (list.length === 0) return;
  console.log(`\n${title} (${list.length})`);
  for (const f of list) {
    const loc = f.line ? `${f.file}:${f.line}` : f.file;
    const hit = f.text ? `  >> "${f.text}"` : "";
    console.log(`  [${f.id}] ${loc}\n     ${f.msg}${hit}`);
  }
}

console.log("Compass compliance check");
console.log(`Files scanned: ${files.length} | mode: ${strict ? "strict" : "standard"} | tenantSigned: ${config.tenantSigned}`);

printGroup("HARD FAIL", hardFails);
printGroup("WARN", warns);

console.log("\n----------------------------------------");
if (hardFails.length === 0) {
  console.log(`RESULT: PASS  (0 hard fails, ${warns.length} warns)`);
  if (warns.length > 0) console.log("Warns do not block, but the compliance-gate subagent must review them.");
  process.exit(0);
} else {
  console.log(`RESULT: FAIL  (${hardFails.length} hard fails, ${warns.length} warns)`);
  console.log("Fix every hard fail before this change can ship.");
  process.exit(1);
}
