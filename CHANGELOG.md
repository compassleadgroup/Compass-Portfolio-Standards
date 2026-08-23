# CHANGELOG.md

Every standards change, dated. Newest first.

## 2026-08-23 (visual): the disclosure strip blends into the nav, and never sticks

Operator instruction: make the header strip the same colour as the menu bar so it reads as part of it, but keep it out of the sticky behaviour so it scrolls away.

**The rule.** The strip takes the nav's own background and drops any border against it. Keep `text-xs`, `py-1 px-4`, centered. It renders as a sibling immediately before `<header>`, never a child, because site headers are sticky and this line is not meant to follow the reader down the page.

**The text colour is chosen against the new background and measured, not carried over.** Minimum 4.5:1. This is the part that bites: on a site whose strip had been dark over a light nav, swapping only the background left `text-paper` on `bg-paper`, white on white, 1.0:1, an invisible disclosure. Every site in the 2026-08-23 sweep was measured; the range landed between 4.51:1 and 16.76:1.

**Four sites had the strip nested inside the sticky header** and were corrected in the same pass: cabincountryseptic.com, suncoastimpactwindows.com, onondagaleadservices.com, lilaccityadu.com. On those it had been following the reader down every page on tablet and desktop.

**What this does not change.** The wording is untouched. The strip still renders on every page without interaction, still carries `data-nosnippet`, and still must look like a legitimate disclosure rather than hidden styling. Muted is fine; invisible is not, which is what the contrast floor now enforces.

**Scope.** 54 sites. The two sites using the 2026-08-07 editorial-content exception (thegutterreport.com, insulationreport.com) have no header strip and were correctly left alone.


## 2026-08-23 (voice): the operating entity name is banned from marketing copy

Operator instruction, from a screenshot of tennesseevalleybarndominiums.com. The "What happens after you send it" block on every money page opened with "Calls and form submissions reach Compass Camper LLC directly." The operator's read: a homeowner about to send the form thinks "who the heck is Compass Camper LLC?" They only need to know the request reaches a builder. The operator ruled that the header and footer disclosure is enough.

**The rule.** "Compass Camper LLC" and "Compass Lead Group" appear in the governed disclosures and on the business-model pages, and nowhere else a buyer reads. Banned in page body text, FAQ answers, hero paragraphs, cost and response blocks, fine print near a form, and contact-page blurbs. Untouched: header disclosure strip, footer entity disclaimer, `/about/`, `/terms/`, `/privacy/`, `/disclosure/`, `/how-we-make-money/`, `/how-it-works/`, JSON-LD schema. The TCPA consent block names the site brand instead, per the forms entry below. Nothing in COMPLIANCE_STANDARDS.md required the name anywhere else, and `req-entity` is satisfied by the footer.

**This repo caused it again.** The money-page rollout doctrine modelled the response answer as a finished sentence, entity name included, and 55 sites copied it. That is the second instance of the same failure after the handoff-narration phrase. **Model the constraint, not the sentence.**

**Enforcement.** Written rule in VOICE.md plus self-test item 5. No new checker rule: the entity name is legitimately inside a component that renders on every page, so a regex over `src` would fire on all 64 sites and teach everyone to ignore it.

**Rollout.** All 55 built sites carrying the line were fixed and merged the same day, 2026-08-23. thegutterreport.com was already clean.

**Same-day companion.** The forms entry below is the other half of this: it takes the entity name out of the consent block and replaces it with the site brand. Between the two, the only places a buyer meets "Compass Camper LLC" are the header strip, the footer disclaimer and the business-model pages.

## 2026-08-23 (forms): the data-sharing line comes off, and the consent block names the site brand

Two operator instructions in one pass, both about the lead form.

**The data-sharing disclosure above the form is retired portfolio-wide.** The sentence "When you submit this form, your information is shared with a licensed [SERVICE] contractor for the purpose of scheduling your free [inspection/quote/assessment]." is gone from the standard and from every site. No site may add it back. The operator's reason is redundancy: the header disclosure strip, the footer entity disclaimer, /about, /privacy and the TCPA consent block directly above the submit button all already say the request goes to a contractor, and the consent block is in the same eyeline as the button.

**What this costs, recorded rather than hidden.** That sentence was the only plain-language notice naming the data transfer at the exact point of collection. What remains is a consent block, which discloses the contractor as a caller rather than the transfer as such, plus linked policy pages. If a state adds a point-of-collection notice requirement that a linked /privacy cannot satisfy, or a complaint turns on the net impression at the form itself, restoring the sentence is the first fix: operator decision plus a portfolio re-sweep, not a per-site edit.

**The consent block now names the site brand, not the operating entity.** "By submitting this form, I agree that Cabin Country Septic and a septic contractor may contact me at the phone number I provided..." replaces "Compass Camper LLC and a septic contractor". Compass Camper LLC is still named on the same page in the header strip and the footer disclaimer, and in full on /about, /privacy and /terms, so the entity stays disclosed to anyone who submits. The parties, the channels (phone calls only) and the opt-out are unchanged.

**Enforcement.** No new check. `req-entity` still requires "Compass Camper LLC" somewhere in the scanned source, and the header strip and footer satisfy it, so a site that drops the entity entirely is still caught. The checker never had a required rule for the data-sharing sentence, so nothing needed removing there; two stale comments that described the sentence as governed wording were corrected.

## 2026-08-22 (voice): sell the outcome, stop narrating the handoff

Operator instruction, after a conversion pass on hillcountrybarnbuilders.com: someone searching "pole barn builders" wants the work done, and copy that opens by explaining the business model gives them a reason to leave before they reach the form.

**The rule.** Marketing copy names who does the work and what the reader gets. It does not describe how the lead travels. Retired from marketing copy: "we connect you with", "the referral service", "the contractor we send your request to", and "we are a marketing and referral service, not a contractor" as a mid-paragraph aside. All four stay correct on `/about/`, `/disclosure/`, `/terms/`, and inside governed disclosure strings.

**This repo caused the problem.** VOICE.md line 44 modelled the phrase "the contractor we connect you with" as the house pattern, and FORBIDDEN_LANGUAGE.md repeated it as the correct framing. Every site built to the standard inherited it. Both lines are now corrected, which is the part that stops it recurring on site 65.

**The technique is subtraction, not rewriting.** The sentence almost always already contains the fact. Delete the clause: "An independent local contractor ~~we connect you with,~~ who works in Kendall County and provides the quote."

**What this does not relax.** First-person work claims stay banned outright: no "we build", "we install", "our crews". A signed tenant does not transfer the contractor's work to us; TENANT_ACTIVATION.md keeps naming the tenant, never "we". "We help you get the work done" is facilitation and is fine; "we do the work" is a licensing and liability claim and is not.

**Honest-limitation passages stay, reframed.** Refusing to quote a number is a trust asset and must not be deleted to reduce mechanism language. Put it on the real reason: "only a contractor standing on your site can price it", not "we are a marketing and referral service, so we cannot".

**Enforcement.** `ci/compliance-check.mjs` gains `mechanism-language` at WARN. WARN and not FAIL because the phrases are legitimate on the business-model pages and a FAIL would block every site at once. The pattern is deliberately narrow and was tested against the footer disclaimer, header strip and form disclosure: it does not fire on any of them, so no governed wording is put at risk.

## 2026-08-20 (visual design): the hero photograph becomes a fixed backdrop on every site

Operator instruction, after seeing it on septicindiana.com: make the hero image the background, fixed, with the rest of the page scrolling on top of it, and make that the standard.

**The rule.** One photograph sits behind the whole site, the hero band is a window onto it, and the content panel scrolls up over it. Not a banner in the flow, and not a different image per page.

**The build notes matter more than the rule, because the obvious implementation is broken on phones.** Use a `position: fixed` layer, never `background-attachment: fixed`, which iOS Safari ignores and Android repaints badly. Put the solid colour on `html` and make `body` transparent, or the body background paints over the layer and the effect silently disappears. Keep the content panel opaque. Add a scrim plus a text shadow on the hero type, because a photograph has bright patches wherever it likes and a long lede runs past the darkest part of a gradient on a narrow screen. Carry it on one layout prop rather than per-page markup. Mark the backdrop `alt=""` and `aria-hidden`, since it is decoration.

**Check it by rendering at desktop and mobile widths.** The mobile failure is legibility and it does not appear in the source. First reference implementation: septicindiana.com.

Changed: BUILD_PLAYBOOK.md Section 0 and reference/CLAUDEwebdesign_copy.md.

## 2026-08-20 (homepage imagery): five photographs on a homepage, minimum

Operator instruction after reviewing a freshly built site: "theres just one boring photo (fine) on the home page but no other septic related photos on the home page. this is bad and should be updated for future builds too. These sites need to be less boring."

**SECTION 2 gains a homepage imagery bar.** At least five photographs on the homepage, each placed beside the section whose question it answers, photographing the trade's real equipment in the market's real setting. A hero alone is a failure, fixed backdrop or not. Reuse from inner pages is allowed where the image belongs to the topic in both places.

Nothing about the image gates moves: no text, no crew, no performed-work read, anonymized people only, screen the pixels. Weight stays inside the existing 1.5 MB page budget, which five 900px WebP images do comfortably at around 500 KB.

The build-time check is a scroll: two full screens with no photograph means the page is not done.

## 2026-08-20 (lead capture): the playbook still specified Web3Forms, which the portfolio retired on 2026-08-11

Found while scaffolding a new site against these files. Every site was migrated to the portfolio's own lead endpoint nine days ago and the standards never caught up, so a build run from BUILD_PLAYBOOK.md or `/new-site` would have shipped a retired integration and then waited on an access key that nobody issues any more.

**What is true now.** Every site posts to `https://compass-leads.pages.dev/submit`, a Cloudflare Pages Function that writes the lead to our own database, serves its own branded thank-you page, and calls a Worker that emails the operator in about two seconds. There is no per-site access key. Cloudflare Turnstile does the spam check: the public site key sits in `site.ts`, the secret lives only in the endpoint keyed by host, and **a widget caps at 10 domains**, so a new site needs a slot on an existing widget or a new widget.

**What changed here.** BUILD_PLAYBOOK.md SECTION 2A item 15, the `/new-site` command's tech list and its done-gate, and the free-tier budget lines in the two MASTER reference prompts.

**The done-gate moved rather than relaxed.** There is no key to get wrong now, so the failures that remain are a missing Turnstile site key and a deployment that did not ship. A merged pull request is not a deployed site: one site served the retired form for four hours after its migration merged, because the deployment failed and nobody looked.

Background and the endpoint's own record: `wiki/build/lead-capture.md` in compass-kb.

## 2026-08-14 (money claims, revision): verified figures the operator approves may now be published

Operator instruction: "The rule only should apply to numbers that I do not specifically say should pass because of verification." The 2026-08-11 blanket ban on program figures gains a narrow, expiring exception.

**The default does not move.** No figures unless the operator has specifically approved that program, every figure was read at the administering body's own page or document, the verification date is shown to the reader, the figures sit in one owner file, and that file carries a `compass-approved-figures` block with `operator=`, `verified=` and `source=`.

**The exception decays, which is the point.** The ban existed because a figure is right the day it is written and wrong the day the round closes. **After 180 days without re-verification the approval stops working and the figures hard-fail again**, with the message naming the source to re-read. An operator approval does not make a stale number correct.

**Never covered by the exception:** unnamed money claims, since they name nothing to check; grant math in a calculator or worked example; a figure the administering body's own pages disagree on; and any standing silence such as Marion County.

**Enforcement.** `money-claim-figure` downgrades from FAIL to WARN in an approved, unexpired file, and only that rule. An incomplete or unparseable block approves nothing. Approved figures are reported as warnings on every run by design: a number nobody sees in CI is a number nobody re-verifies. Tested in all four states before merge, which is the standing bar here: no approval fails, a fresh approval warns, an expired one fails, a malformed one fails.

**One incident recorded in the same revision, because it is the more useful lesson.** On 2026-08-14 a page shipped figures the standard forbade at the time, and CI passed it. The rule looks for a figure and program vocabulary within a sentence of each other, and a table put "$3,500" and "grant" in separate cells. **A green check is not a compliance opinion.** The Enforcement section now says so. The same session also reported that this Third-Party Money Claims section did not exist, having read a site repo's stale local copy rather than this file. Both errors were corrected the same day, and the figures came down before the exception existed to allow them.

## 2026-08-11 (consent ruling, enforcement): text messaging is now blocked, not just removed

Operator instruction, after the checker fix: block the channel as well. The ruling said "no site may add it back", the documents said so, and the 54-site sweep applied it, but nothing stopped a future build typing it back in. Four rules in `ci/compliance-check.mjs` now enforce it.

- **`consent-text-agree`** and **`consent-text-contact`** (both FAIL) match the consent construction rather than the word "text": an agree or consent verb, or a contact permission, within one sentence of "text messages", "texting" or "SMS".
- **`consent-stop-keyword`** (FAIL) catches "reply STOP" and "replying STOP".
- **`consent-msg-data-rates-text`** (WARN) catches a rate disclosure that names text instead of the template's "Message and data rates may apply".

**Two calibration failures were caught before merge, which is the part worth recording.** The first version used a forward lookahead and silently matched nothing, because real consent copy puts the verb first ("I agree that we may contact you by ... text messages"). The second version matched "reply STOP" but not "replying STOP", which is exactly what the pre-ruling sonoranseptic.com copy said. **A rule that only ever passes is worthless**, so every rule here was tested in both directions.

Verified against real copy, not just fixtures: **passes** chicagowindowguide.com and the current sonoranseptic.com at zero warns, and **fails** the genuine pre-ruling consent line, recovered from a stale checkout, on three of the four rules. It also stays quiet on sentences a site should be free to write, including "we do not send text messages" and any use of "alt text".

## 2026-08-11 (consent ruling, checker follow-up): the CI rule still enforced the old opt-out

The same-day consent change updated COMPLIANCE_STANDARDS.md and BUILD_PLAYBOOK.md and swept all 54 sites, but **`ci/compliance-check.mjs` was not updated with them**. Its `req-tcpa-stop` rule still required the keyword STOP in consent copy, which every template had just been told to drop. Found while building the first site after the change: chicagowindowguide.com's consent copy matched the new canonical template exactly and the checker warned on it anyway.

- **`req-tcpa-stop` is replaced by `req-tcpa-optout`**, which requires the current opt-out language, "asking to be removed during any call".
- Verified both directions before merge: it passes chicagowindowguide.com (new copy) and the live sonoranseptic.com (swept to the new copy that day), both now at zero warns, and it still warns on a fixture whose consent block omits the opt-out entirely.

**The lesson worth keeping: a standards change is not finished when the documents change.** The checker is the only part of this repo that other repos execute, so a doc-only update leaves every site failing a rule the standards no longer hold. Any future change to consent, disclosure or claim language should grep `ci/compliance-check.mjs` for the rule it affects in the same pass.

**Not done here, and it is a live option rather than an oversight:** nothing yet *blocks* a site from adding text-message consent back. Enforcing the "no site may add it back" half of the ruling would need a new banned pattern, which is a policy addition rather than a fix, and it is the operator's call.

## 2026-08-11 (consent drops text messaging, portfolio-wide)

Operator instruction, after the texting sweep raised it as an open question: remove text. The published numbers do not send or receive texts, so consenting to a channel nobody uses is a claim the business cannot support, and the "reply STOP to any text" opt-out pointed at a mechanism that does not exist.

- **COMPLIANCE_STANDARDS.md: both TCPA consent templates lose "and text messages" and the STOP opt-out.** Consent now reads "including by automated phone calls and prerecorded messages", and the opt-out is "asking to be removed during any call". A note records that no site may add the channel back without an operator decision.
- **BUILD_PLAYBOOK.md SECTION 2A item 13** now says the consent block never names text messaging, and Section 11's consent sample matches.
- **Applied to all 54 built sites the same day**, 109 files. Wording had drifted a long way from the templates, so this was not one find-and-replace: consent copy, privacy pages, terms pages, disclosure pages and opt-out sentences each carried their own phrasing across roughly 25 distinct variants.

**What this costs, recorded rather than hidden.** Consent now covers calls only, so neither Compass Camper LLC nor the contractor receiving a lead may text the homeowner. Contractors commonly do text leads, so this may cost conversion or put a contractor outside the consent the site obtained. The operator was told this before the change and chose it. Restoring the channel is a template change here plus a portfolio re-sweep, not a per-site edit.

**Method note worth keeping.** Machine replacement across 54 repos produced eight broken sentences ("contact me by phone message", "calls, prerecorded messages, from", "by telling us ... or by telling us", a heading that became lowercase "calls"). They were caught by reading every changed line, not by any grep. On a copy change this wide, reading the diff is part of the job.

## 2026-08-11 (call, never text)

Operator instruction: the published phone numbers do not receive texts, so no site should suggest texting one. "It doesn't need to say to NOT text it, just don't recommend texting the number. Make it say to call the number."

- **BUILD_PLAYBOOK.md SECTION 2A gains item 8a: call, never text.** No `sms:` link anywhere on any site, ever. Covers the obvious forms ("Call or text", "Text us", "Or text your name to ...") and the implied ones, such as a privacy page listing "call and text records if you contact our phone number", because a reader takes that as permission.
- **Section 14 launch checklist and Section 17 failure modes** both point at it. The checklist item runs on built HTML: `grep -r "sms:" dist` must return nothing.
- **What it fixed.** marioncountyseptic.com carried an `sms:` link and an "Or text your name, address, and what the job is to ..." line under every ask, on all 27 published pages. Two privacy pages described inbound texting as a way to reach the site (charlotteharborpoolcages.com, marioncountyseptic.com). One privacy page listed texting as a contact channel (tennesseevalleybarndominiums.com). Every other live site was already clean. Verified by crawling every sitemap and fetching every published URL across all 54 sites: zero `sms:` links, zero texting invitations.
- **A text invitation is worse than a dead email address.** It fails silently. The homeowner texts, nothing arrives, nobody sees an error, and the lead is gone.

**Left open for an operator decision, deliberately.** The TCPA consent block on about 50 sites still says Compass Camper LLC and the contractor may contact the homeowner "including by ... text messages" at the number they provided. That is the opposite direction, us contacting them, and the contractor receiving a lead very likely does text homeowners. Narrowing consent is always safe in the abstract, but here it could strip coverage the contractor actually needs, so nothing was changed.

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
