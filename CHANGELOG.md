# CHANGELOG.md

Every standards change, dated. Newest first.

## 2026-08-11 (money claims, second revision the same day: we publish no program figures)

Operator instruction, hours after the first version: "rather than trying to detail specific grant numbers on our sites, we should just say that these grants may be offered, and then link to the actual source for updated information. Apply this on every single site that refers to grants."

- **COMPLIANCE_STANDARDS.md, Third-Party Money Claims, rewritten.** The rule was named, sourced and dated. It is now **name the program, say it may be offered, link the agency, publish no numbers.** No amounts, caps, percentages, deadlines, application windows, round status or award counts, **not even correct ones**.
- **Hedged availability is no longer banned. It is the required shape**, provided the program is named and the agency linked. "Grants may be available" with nothing named still fails.
- **Why the reversal.** A figure is right the day it is written and wrong the day the round closes, and nobody re-reads 177 pages. Publishing the number also makes us the authority a homeowner acts on, which is how a public official ends up on the phone. The agency owns the number; we own the pointer to it.
- **Scope stated explicitly.** Grants, rebates, tax credits, refunds, reimbursement, cost-share, subsidies, assistance programs. **Not** statutory insurance discounts or premium credits, which are rate mechanics rather than money handed to a homeowner, and not the site's own service cost ranges.
- **Banned-shapes table reworked.** Any program figure is now the first row. Grant math (a calculator or worked example that subtracts an award from a price) is a new row: a figure wearing arithmetic, same decay, more authority.
- **ci/compliance-check.mjs:** `money-claim-may-be-available` **removed**, because it blocked the phrasing now required. `money-claim-figure` **added** as a hard fail: a dollar amount or percentage within a sentence of grant, rebate, credit, refund, reimbursement, cost-share, subsidy or assistance-program vocabulary. Scoped by lookbehind so statutory insurance and premium credits do not match, and so ordinary service cost ranges do not match unless they sit beside program vocabulary. Verified against 12 real portfolio figure-claims (all caught) and 12 compliant or cost-only sentences (all clean), then replayed across the full sweep corpus of 2,578 money sentences from all 53 live sites.
- **Marion County recorded as a standing exception that goes further**: marioncountyseptic.com publishes nothing about county money at all, sourced or not. A source is a licence to publish, not an obligation.
- **Pre-launch checklist item rewritten** to the no-figures form, including the no-calculator clause.

Measured scope of the portfolio change this triggers: **329 figure-carrying sentences across 177 pages on 18 sites.**

## 2026-08-11 (the contact email becomes a locked standard)

Operator instruction: "I need every single site we have ever made to have the contact email be compassleadgroup@gmail.com, not some fabricated email." The portfolio-wide fix shipped the same day across 19 site repos. This is the rule that stops it recurring, added because nothing in this playbook ever said what the contact address is, so each build invented one from its own domain name.

- **BUILD_PLAYBOOK.md SECTION 11 has a new locked block: CONTACT EMAIL, one address portfolio-wide.** Six numbered rules, each traced to a live defect. No mailbox invented from the domain (`info@`, `quotes@`, `hello@`, `contact@`, `privacy@`, `legal@`, `INBOX@`), never compasscamperconcepts@gmail.com, one config value that every page imports, the key named `email` rather than anything that reads as a stand-in, a site with no email counted as non-compliant rather than clean, and no "create a domain forwarder" task in any checklist or brief.
- **The scale of what it fixes.** Ten live sites published a mailbox that does not exist, on contact, privacy, about, terms and disclosure pages and inside the JSON-LD schema. Five published compasscamperconcepts@gmail.com, 12 days after the 2026-07-30 operator correction said that address must never appear on a published page. Two published no address at all, against the COMPLIANCE_STANDARDS.md requirement for a real monitored email for privacy requests. Eight repos carried a launch-checklist or brief task telling a future build to create a brand mailbox, which is what kept regenerating the problem.
- **Section 7 footer** gains the contact email line, next to the phone and the no-address ruling.
- **Section 14 launch checklist, Trust group,** gains a check run on the BUILT HTML, not the source: grep `dist` for `@` and fail on any address at the site's own domain.
- **Section 17 failure modes** gains item 13, the invented domain mailbox, because it looks right in review and reaches nothing in practice.

COMPLIANCE_STANDARDS.md is unchanged. It already requires a real monitored email address for privacy requests; the playbook now names the address that satisfies it and defers to that file for the requirement itself.

## 2026-08-11 (third-party money claims become a compliance rule, after a live incident)

A homeowner acted on a grant claim published on marioncountyseptic.com, called the utility to ask about the grant, and the utility had never heard of it. A supervisor traced the claim to our site and called the operator to say the site was publishing false information. Operator instruction the same day: never fabricate false information on the sites.

- **COMPLIANCE_STANDARDS.md has a new section, Third-Party Money Claims.** Any statement that a reader might get money, pay less, or have a cost covered by someone other than the contractor (grants, rebates, tax credits, cost-share, reimbursement, subsidies, program-paid inspections) must be **named, sourced and dated**: the exact program name as the administering body writes it, a link to that body's own page rather than a news article or summary site, and a visible date because these programs open, close and exhaust their funds. Missing any of the three means delete the sentence. Deleting an unsourced claim needs no source; publishing one does.
- **Four shapes are banned outright**, with a table: vague jurisdiction ("some counties offer grants"), hedged availability ("grants may be available"), borrowed adjacency (the county funds X so the page implies it funds Y), and stale certainty (named and sourced but undated).
- **The adjacency trap is called out as the most dangerous case**, because it is nearly true. Marion County FL funds septic-to-sewer connection in designated areas at roughly $30,000 per household and funds nothing toward a septic system upgrade, which is precisely the confusion that triggered the incident. When a real adjacent program exists, the page must state the boundary of what it does not cover.
- **ci/compliance-check.mjs gains two hard-fail rules**, `money-claim-vague-jurisdiction` and `money-claim-may-be-available`. Deliberately narrow: verified against seven fabrication shapes (all caught) and 11 real portfolio claims naming SoonerSafe, My Safe Florida Home, Strengthen Mississippi Homes, the Suffolk County SIP, the MA Title 5 credit, the West Des Moines radon grant and others (all clean). Replayed against the marion-county-septic build commit that introduced the bad line: four hard fails, so CI would have blocked it at build time. The current site passes.
- **The checker is a floor, not the standard.** A named-and-linked claim passes CI and can still be stale or misapplied. The three-part rule governs.
- **Pre-launch checklist gains one item** covering the same ground.

Full portfolio sweep run the same day: 1,588 served URLs across all 53 live sites. Marion was the only site carrying an unnamed money claim. Every other program claim found (about 20 sites) names its program, and the four highest utility-call-risk claims were verified against primary sources and are correct.

## 2026-08-03 (lead capture becomes part of the build, plus four playbook corrections)

Operator instruction: the conversion setup run across the portfolio on 2026-08-02 (sticky call bar, form under the hero, four fields) becomes the norm for all future sites, automatically. Until now it was a retrofit pass, and the playbook's homepage formula specified the opposite.

- **BUILD_PLAYBOOK.md SECTION 2A is new and locked: LEAD CAPTURE, built in batch one and never retrofitted.** Fifteen numbered items in five groups (the form, placement and ask inventory, the phone, what the copy may promise, consent and the pages that describe the form), plus a rejected list. Every item traces to a defect found on a live portfolio site, which is why it is specific rather than general advice: the four-field form with no email, placement directly under the hero as section two, the neutral-first dropdown option, the sticky bar printing digits and its breakpoint, the desktop "Prefer to talk" line, the routing promise with the licensed-or-independent THRESHOLD test (does every contractor it could route to actually hold the license, with the worked $7,500 to $40,000 cases), the ban on promising contractor behavior, consent naming only the channels collected, and the rule that a form that renders is not a form that delivers.
- **Section 2 item 4 corrected.** It specified a five-field form including email and a free-text description, which is the exact form the conversion standard replaced. It now points at SECTION 2A, which overrides any older field list.
- **Section 2 item 12, Section 7 footer, and Section 8 corrected for the no-address rulings.** The playbook still told builds to ship a full NAP card, business hours, and a Google Maps embed. No operating address appears on any site (operator ruling 2026-07-22) and no site ships a maps embed (decision 2026-07-26), so a build following the old text would have invented a pin at an address, which is the fake-premises tripwire. Section 8 now carries the approved substitute, a static service-area map with no pin.
- **Section 8 call tracking corrected** from CallRail or CallSling at $30 to $50 per site per month to Twilio at traction, since the portfolio runs no paid tools except the one standing portfolio-level exception.
- **Section 14 launch checklist** gains the SECTION 2A verification and a no-address footer check, and its schema line no longer offers LocalBusiness, which SCHEMA_WHITELIST.md bans.
- **commands/new-site.md** gains a Lead capture section so a build session cannot miss the spec, and its read list now names SECTION 2A alongside the Section 0 design gate.
- **COMPLIANCE_STANDARDS.md: the TCPA consent template is now two templates.** The single template promised contact "at the phone number and email I provided" on forms that collect no email, which is over-disclosure rather than a violation, but it is a claim the form cannot support. The four-field version is the default; the email version stays for any form that genuinely collects one. Narrowing consent to the channels collected is always safe; widening it never is. Fixed centrally so no site repo has to fork the file.

## 2026-07-27 (compliance gate: skip cleanly when a repo has no src yet)

The site compliance workflow ran the checker unconditionally against `src`, and the checker exits 2 ("Path not found") when that directory does not exist. A repo scaffolded with documentation only, before its first build batch, therefore red-failed every pull request for having nothing to scan rather than for a compliance problem. Found while scaffolding the three wave 3 site repos (Centennial State Metal Roofing, Sonoran Septic, Show Me Metal Roofing), all of which sit in exactly that state.

- ci/site-compliance.yml: the run step now checks for `src` and skips with a message when it is absent. Behaviour is unchanged for every repo that has a `src`, which is every built site.
- Verified both directions before shipping: with no `src` the step exits 0 with a message; with a `src` containing a clean file the checker exits 0; with a `src` containing a first-person work claim the checker still exits 1. The gate loses no enforcement.
- Site repos carry their own copy of this workflow, so this does not propagate on its own. The three wave 3 repos are being synced in the same session. Older site repos are unaffected in practice, since they all have a `src`.

## 2026-07-21 (image source neutrality)

Clarified that image compliance does not care how an image was made. The only image line in "What NOT to Include Pre-Tenant" excepted "stock photos clearly framed as illustrative", which implicitly disfavored AI-generated imagery. It now reads that stock, licensed, and AI-generated images are treated the same: generic, clearly illustrative imagery is fine regardless of source, and the depiction rules (no specific real job, no crew, no staged before-and-after, no person presented as staff or a customer) apply equally to all of them.

- Operator instruction: the standard should not restrict images by generation method. This removes the last source-based distinction. The master never carried an "AI only for backgrounds and diagrams" rule; that lived only in some site-repo copies, since reconciled (hillcountrybarnbuilders.com site PR #19).
- No protection weakened. The FTC-relevant guardrails are depiction-based and unchanged; they now apply source-agnostically.

## 2026-07-21

Wired the design-distinctiveness doctrine into the build tooling as executable skills. Closes the compass-standards half of compass-kb open question 17: the doctrine existed but nothing in a build enforced it, so a build could pass every compliance grep and still ship the AI-generated look.

- New skills/ directory ships two Claude skills. site-design: the anti-generic build loop (pin a design brief, gather three to five exemplars from premium adjacent categories, build section by section, translate not copy) with skills/site-design/references.md, the per-niche exemplar registry. site-design-qa: the section-gated visual drift gate (screenshot a section, return a pass or fail verdict table against the vibe-check plus two newer tells, never edit unprompted). They extend reference/CLAUDEwebdesign_copy.md rather than restating its bans, so no drift. Byte-mirrored in compass-kb/.claude/skills for the knowledge base, same as CLAUDEwebdesign is mirrored.
- BUILD_PLAYBOOK.md: added Section 0, visual design distinctiveness, ahead of Section 1. The prime directive (a page that reads as AI-made has failed), the exemplar mechanism, the two newer tells (2x2 grids, raw drafting-artifact output), the variance rule, and the QA gate. Existing sections unrenumbered.
- commands/new-site.md: reads CLAUDEwebdesign_copy.md at run time, copies it into the new repo as CLAUDEwebdesign.md, invokes the site-design skill in the build, and runs the site-design-qa gate before the PR. New sites are now born with the design rulebook and the visual gate.
- commands/new-page.md: a new page now matches the site's existing design record and clears site-design-qa before merge.
- commands/reskin.md: new /reskin command for past builds. Re-skins an existing site's look via the site-design loop without touching content, SEO, schema, disclosures, or URLs.
- README.md and marketplace.json: the command count is now seven, /reskin and the two skills are documented, and the file map lists skills/.
- No compliance rule changed. This adds visual-design enforcement only. COMPLIANCE_STANDARDS.md still governs and wins every conflict.

## 2026-07-15 (operating rule)

Merge policy changed. Claude now opens and merges PRs in every repo, site repos included, once checks pass. Operator instruction, aligning this repo with the compass-kb git protocol and superseding the earlier "never merge, stop for operator review, this applies to every repo" rule.

- README.md: the Operating rules bullet flipped from never-merge-and-wait-for-review to merge-after-checks-pass.
- commands/new-site.md, commands/new-page.md, commands/em-dash-check.md: guardrails and finish steps updated to merge after checks. The deploy-method rule is unchanged: never deploy by hand, GitHub auto-build to Cloudflare Pages only.
- The read-only commands (compliance-audit, gsc-analysis, tenant-package) keep "does not merge or deploy" because they report or generate rather than ship site changes; that is tool behavior, not the governance rule.

## 2026-07-15

Added the deterministic compliance checker as canonical CI tooling. No rule change.

- ci/compliance-check.mjs: zero-dependency Node checker for the mechanically detectable rules (forbidden schema, banned claim-language, first-person work claims, em dashes, required-element presence). Single source. Site repos consume it at CI time via .github/workflows/compliance.yml, which checks this repo out and runs the script against the site's src. Adapted from the operator's 2026-07-15 upload; first-person work claims promoted to hard fail and the pre-qualified and top-rated phrases broadened to match FORBIDDEN_LANGUAGE.md. Detail in ci/README.md.
- COMPLIANCE_STANDARDS.md, FORBIDDEN_LANGUAGE.md, and SCHEMA_WHITELIST.md are unchanged. This adds enforcement only. Rollout to the site repos is tracked in compass-kb.
- Schema-rule precision fix (same day, from the site rollout): the forbidden-schema checks now match an emitted quoted @type or property in either quote style, not the type name in a comment or a guardrail allow-list. Prevents false positives on the compliance guardrails some site templates carry (found on Marion and Iowa), and catches single-quoted emissions the first cut would have missed.
- ci/site-compliance.yml added as the canonical site workflow template, and /new-site now copies it into every new site so future builds carry the gate automatically. The 30 existing sites already carry a verbatim copy.

## 2026-07-11

Operator decision: the header disclosure strip stays (it is the primary holding-out and FTC net-impression defense) but gets shortened and visually minimized portfolio-wide.

- COMPLIANCE_STANDARDS.md, Required Page Elements: header strip copy template shortened to "A marketing service, not a licensed contractor. [SERVICE] work is performed by independent licensed local contractors." The "not a licensed contractor" phrase and the independent-contractor attribution are retained as the legally load-bearing elements. Style pinned to a minimal small-font bar: bg-gray-50, text-xs, text-gray-500, py-1 px-4, centered, always rendered, never hidden behind interaction.
- TENANT_ACTIVATION.md, Revision 1: pre-tenant and post-tenant strip copies updated to the shortened base. Post-tenant names the tenant and license number in the second sentence; the disclosure itself never comes off.
- Rollout to all 20 live sites tracked in compass-kb CHANGELOG, 2026-07-11.

## 2026-07-02 (second entry, same day)

Operator supplied the original project files (compassprojectfiles.zip). Migration completed with the real originals.

- COMPLIANCE_STANDARDS.md: replaced the reconstructed draft with the original authoritative copy, unchanged (May 2026 version).
- BUILD_PLAYBOOK.md: replaced the reconstructed draft with the original RANK_AND_RENT_BUILD_PLAYBOOK.md content, unchanged.
- TENANT_ACTIVATION.md: replaced the reconstructed draft with the original TENANT_ACTIVATION_PLAYBOOK.md content, unchanged.
- archive/: MASTER_BUILD_PROMPT.md and PROJECT_BRIEF_TEMPLATE.md archived with the header "DEPRECATED. Superseded by compass-standards. Do not use."
- reference/: all remaining project files added for reference (closing playbook, CLAUDE template, SEO, citation, link building, niche, and risk references, citation trackers).

Known conflicts for operator decision (the Tier 0 handoff is newer than the migrated May 2026 documents):

1. Trailing slashes. BUILD_PLAYBOOK.md Section 1 says no trailing slashes. The Tier 0 standard and the /new-site command mandate trailingSlash 'always' with directory format builds. The commands follow the Tier 0 standard until the playbook is revised.
2. LocalBusiness schema. COMPLIANCE_STANDARDS.md's checklist allows a generic LocalBusiness or ProfessionalService type. The Tier 0 standard and SCHEMA_WHITELIST.md ban LocalBusiness entirely pre-tenant. The whitelist follows the Tier 0 standard until the master is revised.
3. Em dashes. The migrated originals contain em dash characters (mostly in headings and in the rule text that names the character). They were migrated unchanged per the handoff. A repo-wide /em-dash-check will flag them.

## 2026-07-02

Initial canonical standards repo created. Migrated compliance, build, tenant activation. Deprecated conflicting legacy files.

Detail:

- Created README.md, COMPLIANCE_STANDARDS.md, BUILD_PLAYBOOK.md, FORBIDDEN_LANGUAGE.md, SCHEMA_WHITELIST.md, VOICE.md, TENANT_ACTIVATION.md, CHANGELOG.md.
- Installed the compass-portfolio plugin with six commands: /new-site, /new-page, /compliance-audit, /gsc-analysis, /tenant-package, /em-dash-check.
- Migration caveat: the prior standalone copies of COMPLIANCE_STANDARDS.md, RANK_AND_RENT_BUILD_PLAYBOOK.md, and TENANT_ACTIVATION_PLAYBOOK.md were not reachable from the migration session (this repo started empty and the session had no access to the repos holding the originals). The canonical versions here were reconstructed from the Tier 0 handoff specification and carry provenance notes for operator verification.
- Legacy files MASTER_BUILD_PROMPT.md and PROJECT_BRIEF_TEMPLATE.md do not exist in this repo and could not be reached from the migration session. They are deprecated by policy (see README conflict rule). They still need to be archived or deleted in whichever repo holds them.
