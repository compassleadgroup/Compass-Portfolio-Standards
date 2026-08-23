# COMPLIANCE_STANDARDS.md — Master Reference for All Rank-and-Rent Sites

**Use:** Apply these standards to every new site built under Compass Camper LLC. This is the default state of a site BEFORE a tenant contractor is signed. Once a tenant is signed, layer in changes from TENANT_ACTIVATION_PLAYBOOK.md.

**Last updated:** May 2026
**Operating entity:** Compass Camper LLC (Oregon)

---

## Core Principle

Every site Compass Camper LLC operates is a marketing service that connects homeowners with licensed local contractors. Compass Camper LLC does not perform service work, does not employ tradespeople, and does not directly negotiate scope or pricing on jobs.

The footer disclaimer states this. The body copy must reinforce it. The FTC's "net impression" doctrine treats a site as deceptive if a reasonable consumer encounters body copy that contradicts the disclaimer, even if the disclaimer is technically present.

**The test:** Read the homepage hero, services section, and "Why Us" block out loud. If a casual reader could come away thinking "this company performs foundation/roofing/HVAC/etc. work," the copy is non-compliant.

---

## Language Rules

### Forbidden language (creates legal exposure)

Never use these on any Compass Camper LLC site, ever:
- "Vetted" / "vetted contractors" / "our vetted network"
- "Our network" / "our network of contractors"
- "Pre-screened" / "pre-qualified contractors"
- "Hand-selected" / "carefully selected"
- "Top-rated contractors" (unless backed by real, documented ranking criteria)
- "Best contractors in [city]" (unless backed by a documented best-of process)
- "Trusted partners" (creates implicit warranty obligations)
- First-person claims about performing work: "we diagnose," "we repair," "we install," "we level," "we fix"
- Fake testimonials, named customer reviews, or invented case studies
- Claims of company tenure or experience that don't reflect Compass Camper LLC's actual age
- Stock photos labeled as "our team" or "our crew"
- Fabricated certifications, awards, or BBB ratings
- "Since [year]" or "decades of experience" claims unless documented for Compass Camper LLC

### Allowed language (defensible and compelling)

These are honest, descriptive, and convert well:
- "Licensed local contractors"
- "A licensed contractor in your area"
- "Licensed and insured contractors"
- "The contractor you're matched with"
- "A foundation/roofing/HVAC specialist near you"
- "Independent licensed professionals"
- "We connect homeowners with..."
- "We help you find..."
- "Free, no-obligation inspection from a licensed contractor"
- Specific verifiable claims: "Licensed in [state]," "Carry general liability insurance," "Offer written warranties"

### Style consistency

- No em dashes (—). Use commas, periods, parens, or "to" instead.
- Numbers under 10 spelled out, 10+ as digits.
- Currency: $3,500 (no space after $).
- Phone numbers always formatted as (XXX) XXX-XXXX with tel: links as +1XXXXXXXXXX.
- Service names capitalized consistently within each site.

---

## Required Page Elements

### Header disclosure strip (every page, above main nav)

A thin, minimal gray bar with small but readable text. NOT footer-only.

**Copy template (operator decision 2026-07-11, shortened from the earlier two-sentence version; keeps the "not a licensed contractor" phrase and the independent-contractor attribution, which are the legally load-bearing elements):**
> "A marketing service, not a licensed contractor. [SERVICE] work is performed by independent licensed local contractors."

**Style (operator decision 2026-07-11, minimal small-font bar):** `bg-gray-50`, `text-xs`, `text-gray-500`, `py-1 px-4`, centered, single line on desktop. Muted is fine; hidden is not. It must render on every page without interaction (no dismissal, no collapse, no scripts) and stay readable against its background. Looks like a legitimate disclosure, not hidden styling.

**Why:** FTC net-impression doctrine requires a reasonable consumer to actually encounter the disclosure. Footer-only doesn't satisfy this when body copy is sales-pitchy.

#### Exception: editorial content properties (operator decision 2026-08-07)

**Narrow. It does not apply to any geo rank-and-rent site.** All 53 geo sites keep the header strip exactly as specified above.

A site may move the load-bearing disclosure from the header strip to the point of contact **only if every one of these is true**:

1. It is an editorial content property rather than a geo lead-gen site: deep informational pages written to answer a question, no city, county or state pages, no "hire us" framing in the body copy.
2. **Its body copy is not sales-pitchy.** This is the condition the "Why" above actually turns on. A site that reads as a sales pitch does not qualify, whatever else it is.
3. **The footer disclaimer still renders on every page, unchanged**, wrapped with `data-nosnippet`.
4. **Every lead form carries the load-bearing phrase above the fields**, in the same block as the form and visible without interaction: "A marketing service, not a licensed contractor. [SERVICE] work is performed by independent licensed local contractors." This is in addition to the information-sharing disclosure and the TCPA consent, not instead of either.
5. No page anywhere claims or implies the operator performs the work. The forbidden-language rules are unchanged and still govern.

**The reasoning.** Net impression is judged on what a reasonable consumer encounters. On a geo site every page is a pitch, so the disclosure has to lead. On an editorial property the reader is consuming a sourced reference, and the moment the relationship turns commercial is the form. Putting the disclosure there puts it where the consumer's decision actually is, and the footer disclaimer still appears on every page regardless.

**The risk this accepts, stated plainly.** A reader who consumes content and never reaches a form now meets the disclosure only in the footer. That is a real reduction in prominence, and accepting it is the operator's decision. It is defensible only while condition 2 holds. **If the body copy ever turns pitchy, this exception stops applying and the header strip goes back.**

**Sites currently using this exception:** insulationreport.com.

### Footer disclaimer (every page)

**Copy template:**
> "This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. [SITE_BRAND] is a marketing service that connects homeowners with independent, licensed [SERVICE] contractors. All [SERVICE] and related services are performed by independent licensed contractors. Compass Camper LLC is not a licensed contractor and does not perform [SERVICE] work directly. Contractor license numbers are available upon request."

This MUST appear on every page. Same wording across the site.

### Both disclosure blocks carry data-nosnippet (added 2026-07-31)

Put `data-nosnippet` on the element wrapping the header disclosure strip and on the element wrapping the footer disclaimer. A site using the 2026-08-07 editorial-content exception has no header strip, so this applies to the footer disclaimer alone.

```html
<div class="bg-gray-50 text-xs text-gray-500 py-1 px-4 text-center" data-nosnippet>
  A marketing service, not a licensed contractor. ...
</div>
```

Google honors the attribute on `div`, `section`, and `span`. It is NOT honored on a bare `<p>`, so tag the wrapping element or add one.

**Why:** without it, Google builds the search-result description out of the disclosure text instead of the page's own meta description. A live example on capecodsepticpros.com showed a guide page about cesspools whose search snippet read "Cape Cod Septic Pros is operated by Compass Camper LLC, doing business as Compass Lead Group. We are a referral and matching service and do not perform septic ...". The page's own description was already accurate and specific; Google quoted the footer anyway. Every page in the portfolio had the same exposure.

**This does not weaken the disclosure.** `data-nosnippet` affects snippet generation only. The text still renders on every page without interaction, is still crawled, and is still indexed. What a reasonable consumer encounters on the page is unchanged, which is what the net-impression test turns on. What changes is that the search snippet describes the page instead of repeating a disclaimer.

**Related copy rule.** A page's meta description leads with the service and the local specifics, not with the business model. "Free matching with independent licensed contractors for ...", "Get matched with a licensed ...", and "Connect with a licensed ..." are weak openers: the first thing a searcher reads should be the work they came for. Allowed language still governs the wording, and no description may claim or imply that Compass Camper LLC performs the work. Business-model pages (`/about/`, `/terms/`, `/privacy/`, `/how-we-make-money/`) are the exception and should describe the business model, because that is their subject.

### Form privacy/consent block (every form on the site)

Above every submit button. Not pre-checked. Not in popup. Not in fine print.

**The consent block names only the channels the form actually collects.** The standard lead form is four fields with no email (BUILD_PLAYBOOK.md SECTION 2A), so the four-field template below is the default. Narrowing consent to the channels collected is always safe; widening it is never safe. Never promise contact by a channel the form does not capture.

**TCPA consent copy template, four-field form (the default; no email field):**
> "By submitting this form, I agree that [SITE_BRAND] and a [SERVICE] contractor may contact me at the phone number I provided, including by automated phone calls and prerecorded messages, regarding [SERVICE] services. Consent is not a condition of any purchase. Message and data rates may apply. I may opt out at any time by asking to be removed during any call. See our Privacy Policy."

**TCPA consent copy template, only where a form genuinely collects an email address:**
> "By submitting this form, I agree that [SITE_BRAND] and a [SERVICE] contractor may contact me at the phone number and email I provided, including by automated phone calls and prerecorded messages, regarding [SERVICE] services. Consent is not a condition of any purchase. Message and data rates may apply. I may opt out at any time by asking to be removed during any call. See our Privacy Policy."

**No consent template names text messaging, and no site may add it back (operator instruction 2026-08-11).** The portfolio's published numbers do not send or receive texts, so consenting to a channel nobody uses is a claim the business cannot support, and the "reply STOP to any text" opt-out pointed at a mechanism that does not exist. Both came out of every template and every site on 2026-08-11. The opt-out is now asking to be removed during any call, plus email where the site collects one.

**What this costs, recorded rather than hidden.** Consent now covers calls only, so neither the site operator nor the contractor receiving a lead may text the homeowner. A contractor who texts a lead is outside the consent this site obtained. If that becomes a problem in practice, the fix is an operator decision to restore the channel in these templates and re-sweep the portfolio, not a per-site edit.

**The consent block names the site brand, not the operating entity (operator instruction 2026-08-23).** `[SITE_BRAND]` is the site's own name, exactly as it appears in the header logo and the footer, for example "Cabin Country Septic". Compass Camper LLC is not named in the consent block. It is still named on the same page in the header disclosure strip and the footer entity disclaimer, and in full on /about, /privacy and /terms, so the operating entity remains disclosed to any homeowner who submits the form. What changed is that the sentence a homeowner reads at the moment of consent uses the brand they came to the site for. Nothing else about the consent changes: the parties are the same two (the site and the matched contractor), the channels are the same (phone calls only), and the opt-out is the same.

Whichever template a site uses, the /privacy collected-data list must match the fields the form actually has. Added 2026-08-03: the single-template version of this rule promised email contact on every four-field form in the portfolio, which is over-disclosure rather than a violation, but it is a claim the form cannot support and it is corrected here centrally rather than patched per site.

"Privacy Policy" must be a real link to /privacy.

**Retired 2026-08-23: the separate data-sharing disclosure above the form.** Until this date the standard also required a sentence above every form reading "When you submit this form, your information is shared with a licensed [SERVICE] contractor for the purpose of scheduling your free [inspection/quote/assessment]." That sentence is retired portfolio-wide by operator instruction, and no site may add it back. The reason is redundancy, not a change of posture: every page already carries the header disclosure strip and the footer entity disclaimer, /about states the business model outright, /privacy lists contractors as a party the data goes to, and the TCPA consent block directly above the submit button already names the contractor as a party who may call. The homeowner is told, on the same screen and in the same eyeline, before they submit.

**What this costs, recorded rather than hidden.** The retired sentence was the only notice that named data sharing at the exact point of collection in plain language. The remaining notices are a consent block (which discloses the contractor as a caller, not the data transfer as such) and linked policy pages. If a state adds a point-of-collection notice requirement the linked /privacy page cannot satisfy, or if a complaint ever turns on the net impression at the form itself, restoring this sentence is the first fix, and it is an operator decision plus a portfolio re-sweep, not a per-site edit.

### About page required elements

Every Compass Camper LLC site's About page must include:

1. **Operating entity disclosure:** "[SITE_BRAND] is operated by Compass Camper LLC, an Oregon-registered marketing company. We are not a [SERVICE] contractor and do not perform [SERVICE] work."

2. **Business model explanation:** "We operate this website to connect [CITY]-area homeowners with licensed, insured [SERVICE] contractors. When you submit an inspection request, your information is forwarded to a licensed local contractor who can schedule your free [inspection/quote]."

3. **Contractor requirements (objective criteria only):**
   - Hold current [state] contractor licensing where required
   - Carry current general liability insurance
   - Offer written workmanship warranties on completed work
   - Provide transparent, itemized written estimates before performing any work

4. **NO fake team members.** No invented founders, named individuals with stock photos, or "Meet the Team" sections with fabricated bios.

5. **NO false experience claims.** Don't claim years in business, projects completed, customers served, or homes repaired unless those numbers reflect Compass Camper LLC's actual operating history.

---

## Schema Markup Standards

### LocalBusiness schema

Do NOT use contractor-specific categories ("Foundation Repair Contractor," "Roofing Contractor," "Plumber," etc.). These categories falsely represent Compass Camper LLC as performing the work.

**Use instead:**
- `@type: "ProfessionalService"` with description "Marketing and lead generation services for [INDUSTRY]"
- OR `@type: "Service"` with `provider` pointing to Compass Camper LLC and `serviceType: "[Service] contractor referral service"`

The schema description and category MUST accurately reflect that Compass Camper LLC is a marketing service.

### Organization schema (About page)

Must reference Compass Camper LLC with:
- Correct legal name: "Compass Camper LLC"
- Correct registered state: Oregon
- No address (see "Address Requirements" below: no operating address is displayed on any site, operator ruling 2026-07-22; never emit a fabricated or registered-agent address in schema)
- Correct phone (Call Rail or similar tracking number once live)

### Service schema (service pages)

`@type: "Service"` is fine. Description must clarify the service is "connecting homeowners with licensed contractors for [service type]" not "we perform [service type]."

### FAQPage schema

Apply to any page with FAQs. Ensure the JSON-LD answer text matches the new compliant copy. If the visible answer changes, the schema must change too.

### BreadcrumbList schema

Standard implementation. No compliance concerns.

### NEVER include these schemas before signing a tenant

- `AggregateRating` — implies aggregate customer reviews exist
- `Review` — each instance must correspond to a real, verifiable review
- `Rating` on individual items without underlying data

**FTC Reviews Rule (effective Oct 21, 2024)** treats fake review schema as a per-violation civil penalty up to $53,088. Until you have real reviews from real customers of an actual tenant contractor (or via your own Google Business Profile if you have one), zero review schema.

---

## Address Requirements

### Operating address

Operator ruling, 2026-07-22: no operating address is required on any site. Sites identify the operating entity (Compass Camper LLC, operating as Compass Lead Group, registered in Oregon) and provide a monitored email plus a phone number where one is live; a street address is not displayed. This replaces the earlier requirement that every site disclose an operating address on About or Contact.

What still holds, without exception:

- Never fabricate an address, a suite number, or a local office.
- Never present the Oregon registered-agent address as an operating location, on the site or on any directory listing.
- Never imply a physical office in the target market ("visit our showroom", map pins to an office, LocalBusiness schema).
- If a real address is ever added voluntarily (for example a leased commercial office), it must be real and identical everywhere it appears.

**Why the ruling is defensible:** the sites are disclosed marketing services, not contractors holding out a place of business; the deception risk UDAP statutes target is a fake or misrepresented location, which the rules above still prohibit. The honest posture is entity plus contact channels with no address, not an address that misdescribes where a one-operator online business "is".

### Display vs. hide

No address is displayed. Entity identification (legal name, Oregon registration, dba) stays on the About page and in the footer disclosure as before.

### Form addresses

Forms that ask for a property address from the customer are fine. Just make sure they're using a placeholder that doesn't suggest the form is from the company's perspective (e.g., the user's address, not "Our office address").

---

## DBA Filings

Every site brand operated under Compass Camper LLC must be filed as a DBA (or "fictitious name" or "assumed business name" depending on state).

**Required filings:**
1. Oregon (Compass Camper LLC's home state) — file the DBA with the Oregon Secretary of State
2. The state where the site targets customers — file the DBA with that state's Secretary of State

**Approximate cost:** $50-$150 per state, depending on jurisdiction.

**When to file:** Within 30 days of launching a new site, before any paid traffic.

**Why this matters:** Operating under a brand name that isn't legally registered to the LLC creates exposure if anyone challenges the business's right to use the name. It also strengthens defenses against UDAP claims because the DBA registration is an official acknowledgment of the marketing entity's existence.

---

## Privacy Policy Requirements

Every site needs a Privacy Policy at /privacy that includes:

1. **Operating entity disclosure:** Compass Camper LLC (Oregon)
2. **What data is collected:** Names, phone numbers, email addresses, property addresses, IP addresses, page-visit data
3. **How data is used:** To match homeowners with licensed contractors, to follow up on inquiries, to improve the service
4. **Who data is shared with:** Licensed local contractors who can fulfill the inspection request, third-party service providers (Cloudflare for hosting, Call Rail for call tracking, etc.)
5. **Data retention:** Reasonable retention period, typically 5+ years for TCPA defensibility on consent records
6. **User rights:** Right to opt out, right to request data deletion (CCPA/CPRA if applicable), right to access their data
7. **Contact info for privacy requests:** A real email address that's monitored

**Sensitive areas:**
- If targeting California residents, CCPA/CPRA disclosures required
- If targeting EU residents (unlikely for local US services), GDPR considerations
- TCPA consent retention: keep records for at least 5 years per FCC guidance

---

## Terms of Service Requirements

Every site needs a Terms of Service at /terms that includes:

1. **Operating entity:** Compass Camper LLC, Oregon
2. **Governing law:** Oregon
3. **Service description:** Marketing/lead generation service, NOT a contractor
4. **Disclaimer of liability for contractor work:** The site connects users with contractors; users contract directly with the contractor for any work performed
5. **No warranty:** The site doesn't warrant the work performed by any contractor
6. **Dispute resolution clause:** Optional arbitration clause, otherwise governed by Oregon courts
7. **Limitation of liability:** Reasonable cap on damages, typically the value of the lead or a nominal amount

---

## What NOT to Include Pre-Tenant

Until you have a signed contractor partner, do NOT include any of these on the site:

- **Customer testimonials** (real or invented)
- **Review widgets** (Google, Yelp, BBB embeds with reviews displayed)
- **AggregateRating or Review JSON-LD schema**
- **"As featured in" media logos** unless verifiable
- **Certifications, awards, BBB accreditation badges** unless Compass Camper LLC has earned them
- **Specific job photos presented as a real job** the site arranged. Generic, illustrative imagery is fine, and how it was made does not matter: stock, licensed, or AI-generated are treated the same. Illustrative imagery must stay generic (a building type, material, or setting, never a specific real job), show no crew or staged before-and-after, and never present a person as staff or a customer.
- **Named team members** with bios
- **"Years in business" counters or "Jobs completed" stats**
- **Specific pricing claims** ("Starting at $X" or "Most jobs run $X to $Y") unless you have data from your tenant to back these numbers

---

## Third-Party Money Claims (grants, rebates, tax credits, assistance programs)

Added 2026-08-11 after a live incident. See the incident record at the bottom of this section.

A third-party money claim is any statement that a reader might get money, pay less, or have a cost covered by someone other than the contractor: grants, rebates, tax credits, cost-share, reimbursement, subsidies, assistance programs, "free" inspections paid by a program.

**These are the highest-risk sentences on any site we operate.** Unlike a pricing range, which a reader treats as an estimate, a money claim causes the reader to act: they call a county office, a utility, or a state agency and ask for the money. If the program does not exist, or does not apply to them, a public employee finds out, traces the claim to our site, and the site's credibility is gone. That has already happened once.

### The rule

Revised 2026-08-11 by operator instruction, hours after the first version. The first version required a money claim to be named, sourced and dated. It permitted figures, and figures are the part that rots. **We no longer publish program figures at all.**

**Name the program. Say it may be offered. Link the agency. Publish no numbers.**

Four parts:

1. **Named.** The exact program name as the administering body writes it. "The Strengthen Mississippi Homes grant", not "a state grant". "The SoonerSafe Safe Room Rebate Program", not "a rebate".
2. **Hedged, deliberately.** "May be offered", "may be available", "you may qualify". Never a promise, never a stated entitlement.
3. **Linked.** A link to the administering body's own page: the county, city, utility, state agency, or the statute. Not a news article, not a contractor's blog, not a summary site. That link is the answer to every question the page no longer answers.
4. **No figures.** No dollar amounts, no caps, no percentages, no deadlines, no application windows, no round status, no award counts. Not even correct ones. Say that amounts and eligibility change and that the agency's page is current.

If a program cannot be named and linked, delete the sentence. **Deleting an unsourced claim needs no source. Publishing one does.**

**Why the reversal.** A figure is right on the day it is written and wrong the day the round closes, and nobody re-reads 177 pages. Publishing the number also makes us the authority a homeowner acts on, which is how a public official ends up on the phone. The agency owns the number; we own the pointer to it. This costs a little conversion copy and removes an entire class of recurring error.

**Scope.** Grants, rebates, tax credits, refunds, reimbursement, cost-share, subsidies and assistance programs. **Not** statutory insurance discounts or premium credits, which are rate mechanics rather than money handed to a homeowner, and not the site's own service cost ranges.

### The exception: figures the operator specifically approves, backed by verification

Added 2026-08-14 by operator instruction: "The rule only should apply to numbers that I do not specifically say should pass because of verification."

**The default stays no figures.** Point 4 above applies unless every condition below is met. This exception is opt-in per program, per file, and it expires.

A figure may be published only when all five hold:

1. **The operator specifically approved figures for that program.** Not a general permission, not an inference from a related approval. A dated instruction naming the program.
2. **Every figure was read at the administering body's own page or document**, in full, and the read date recorded. A summary site, a news article, an aggregator or another contractor is not verification. Two views of one publisher, such as an agency's page and that page's own PDF, are one source, which is enough when it is the authoritative one.
3. **The reader can see how fresh it is.** The verification date is published beside the figures, not just kept in a code comment.
4. **The figures live in one owner file per site**, so re-verification is one edit and cannot half-happen.
5. **The file carries a machine-readable approval block** so the gate can see it:

   ```
   compass-approved-figures: operator=YYYY-MM-DD verified=YYYY-MM-DD
   source=https://<administering body's own site>/...
   ```

**It decays on purpose.** The original reasoning for the ban was that a figure is right the day it is written and wrong the day the round closes. Still true, so the exception carries the same clock: **after 180 days without re-verification the approval stops working and the figures hard-fail again.** Re-read them at the source and bump `verified=`, or take them down. An operator approval does not make a stale number correct.

**What the exception never covers:**

- **Unnamed money claims.** "Some counties offer grants" is wrong no matter who approved it, because it names nothing a reader can check.
- **Grant math.** A calculator or worked example that subtracts an award is still banned. Approval covers publishing a figure, not doing arithmetic with it.
- **A figure the sources disagree on.** If the administering body's own pages contradict each other, publish neither and send the reader to the agency. Verification means the disagreement is resolved, not averaged.
- **Standing silences.** Where the operator has ruled that a site publishes nothing on a topic, such as Marion County below, that ruling wins.

**Approved figures stay visible in every gate run as warnings, never silent.** Deliberate: a number nobody sees in CI is a number nobody re-verifies.

**Standing approvals on record:**

| Site | Program | Operator approval | Owner file |
|---|---|---|---|
| oklahomastormshelterpros.com | SoonerSafe Safe Room Rebate Program (Oklahoma OEM) | 2026-08-14 | `src/data/soonersafe.ts` |
| oklahomastormshelterpros.com | Choctaw Storm Shelter Program, Chickasaw Homeowner Preparedness Grant, Oklahoma storm shelter ad valorem exemption | 2026-08-14 | `src/pages/funding/tribal-grants-and-tax-exemption.astro` |

### Never publish these shapes

| Shape | Example | Why it fails |
|---|---|---|
| Any program figure | "The grant pays up to $10,000", "reimburses 75% of cost" | Correct today, false when the round closes. The agency owns the number |
| Vague jurisdiction | "Some counties offer upgrade grants" | Names nothing, so the reader assumes their county. Unfalsifiable statewide, specific and wrong locally |
| Borrowed adjacency | The county funds X, so the page implies it funds Y | The reader cannot see the boundary you left implicit |
| Grant math | A calculator or worked example that subtracts an award from a price | A figure wearing arithmetic. Same decay, more authority |

**Hedged availability is no longer banned. It is the required shape**, provided the program is named and the agency is linked. "Grants may be available" alone still fails, because it names nothing to ask about.

### The adjacency trap

The most dangerous claim is one that is *nearly* true. A county may genuinely run a funded program for one thing while funding nothing for the adjacent thing the site sells. Marion County FL funds septic-to-**sewer connection** in designated program areas, and funds **nothing** toward a septic **system upgrade or replacement**. A page that mentions both without stating the boundary sends the reader to the utility asking for the wrong money.

**When a real adjacent program exists, name the boundary and route the reader to the agency.** What work it covers and what it does not, then the link. Do not price either side.

**Marion County is a standing exception and goes further.** After the incident below, operator instruction 2026-08-11: marioncountyseptic.com publishes nothing about county money at all, sourced or not. Where a topic has already produced real-world friction, silence beats a correct sentence. **A source is a licence to publish, not an obligation.**

### Enforcement

`ci/compliance-check.mjs` carries two hard-fail rules:

| Rule | Blocks |
|---|---|
| `money-claim-vague-jurisdiction` | "Some counties offer grants" and its variants, which name nothing |
| `money-claim-figure` | A dollar amount or percentage within a sentence of grant, rebate, credit, refund, reimbursement, cost-share, subsidy or assistance-program vocabulary |

`money-claim-may-be-available` was **removed** in the same revision, because the hedge it blocked is now the required phrasing.

`money-claim-figure` is scoped to avoid the two legitimate neighbours: statutory insurance credits and premium credits are excluded by lookbehind, and ordinary service cost ranges do not match unless they sit next to program vocabulary. Verified against 12 real portfolio figure-claims (all caught) and 12 compliant or cost-only sentences (all clean), then against the full sweep corpus of 2,578 money sentences across all 53 live sites.

**The approval block, added 2026-08-14 with the verified-figure exception.** A file whose first 40 lines carry

```
compass-approved-figures: operator=YYYY-MM-DD verified=YYYY-MM-DD source=https://...
```

downgrades `money-claim-figure` from FAIL to WARN, and only that rule. The block must carry all three fields; an incomplete or unparseable one approves nothing and the figures hard-fail. Past 180 days from `verified=` the approval expires and they hard-fail again, with the message naming the source to re-read. Approved figures are reported as warnings on every run by design, so they never disappear from view.

**The gate is a floor, not the standard.** `money-claim-figure` looks for a figure and program vocabulary within a sentence of each other, which means separating them defeats it. That happened on 2026-08-14: a page put "$3,500" in one table cell and "grant" in another, passed CI, and shipped figures that the standard forbade at the time. **A green check is not a compliance opinion.** Read the rule, not the regex.

**The checker is a floor, not the standard.** A named-and-linked claim passes CI and can still be misapplied. The four-part rule above governs.

### Incident record, 2026-08-11

marioncountyseptic.com published "Some Florida counties offer upgrade grants" in six places, including a "Grant programs, Down" row in a cost-guide price-driver table. The line named no program and cited no source; it was written at build time and never traced to anything. A homeowner read it, called the utility to ask about the grant, and the utility had no idea what they were describing. A supervisor investigated, found our site as the source, and called the operator to tell them the site was publishing false information.

Cost: the operator was scolded by a public official, and a county utility now associates one of our domains with false claims. No revenue was lost directly. The reputational exposure with a local government body is the real damage, and in a niche whose entire moat is a county regulatory mandate, that body is the last one to alienate.

Root cause: no rule required a money claim to carry a source, so a vague hedge read as safe. Removed in marion-county-septic PR #35; rule and CI check added here the same day.

---

## Off-Site Operational Requirements

These aren't code but are operator responsibilities on every site:

### Call answering

Whoever answers the site's phone number must identify the call correctly:
- Opening line: "[SITE_BRAND], how can I help?"
- If asked whether the answerer is a contractor: "We're a marketing service that connects homeowners with licensed [SERVICE] contractors. I can help schedule your free inspection."
- Never claim to be a contractor or to perform the work directly.

### Call recording and consent

Oregon is a one-party consent state for call recording. Tulsa/Oklahoma is also one-party. Most target markets for Compass Camper LLC are one-party consent. Verify per market.

When using Call Rail or similar, enable call recording with appropriate consent language in the IVR or opening greeting.

### Insurance (carry before any paid traffic or tenant signing)

- **General Liability:** $1M/$2M with media-liability endorsement
- **Errors & Omissions (E&O):** $1M/$2M for lead-gen activities
- **Cyber liability:** $1M for data breach exposure (TCPA penalties, consumer data)

Pre-revenue this can be deferred, but factor into the contractor outreach timeline. Should be in place before signing any tenant agreement.

### TCPA defensibility tools

Before any paid traffic, integrate one of:
- **TrustedForm** (ActiveProspect) — captures consent token with form submission
- **Jornaya LeadiD** — alternative consent token capture

Without these, TCPA defense relies only on form HTML, which is weak. Cost: ~$200-$500/month for a small operator.

Note: organic traffic alone has lower TCPA risk than paid lead-gen, but TrustedForm/Jornaya is still recommended once revenue exists.

---

## Compliance Audit Checklist for New Sites

Use this checklist before launching any new site. Every item must pass before the site goes live publicly (beyond a test environment).

### Pre-launch checklist

**Brand and entity:**
- [ ] DBA filed in Oregon
- [ ] DBA filed in target state
- [ ] No address displayed anywhere on the site; no fabricated or registered-agent address in copy, schema, or listings (operator ruling 2026-07-22)
- [ ] Phone number is real and answerable (TextNow acceptable pre-revenue, Call Rail required pre-outreach)

**Site content:**
- [ ] Header disclosure strip on every page (an editorial content property using the 2026-08-07 exception has none, and instead carries the load-bearing phrase above the fields of every lead form)
- [ ] Footer disclaimer on every page with correct entity and service references
- [ ] `data-nosnippet` on the wrapper of both disclosure blocks (check the built HTML, not the source). Under the 2026-08-07 exception there is no header strip, so this is the footer disclaimer alone
- [ ] Every page has its own meta description, leading with the service and the local specifics, not the matching pitch
- [ ] All body copy uses neutral "a licensed contractor" language, no first-person work claims
- [ ] No "vetted," "our network," "pre-screened," or similar claim-language
- [ ] No fake testimonials, named customer reviews, or invented case studies
- [ ] No fake team members or stock-photo bios
- [ ] No false experience claims, completed-jobs counters, or "since [year]" claims
- [ ] No certifications, awards, or accreditation badges unverified
- [ ] Every grant, rebate, tax credit or assistance claim names its program, says it may be offered, links the administering agency's own page, and publishes NO figures: no amounts, caps, percentages, deadlines or round status (see Third-Party Money Claims). No calculator or worked example subtracts an award
- [ ] Any figure published under the verified-figure exception has a dated operator approval naming the program, was read at the administering body's own page, shows its verification date to the reader, sits in one owner file, carries a complete `compass-approved-figures` block, and was verified within 180 days

**Forms:**
- [ ] TCPA consent language above submit button, not pre-checked, naming the site brand and not Compass Camper LLC
- [ ] Privacy Policy link in consent block is a real link
- [ ] TODO comment for TrustedForm/Jornaya integration before paid traffic

**Schema:**
- [ ] LocalBusiness or ProfessionalService schema, NOT contractor-specific category
- [ ] Organization schema references Compass Camper LLC correctly
- [ ] FAQPage schema matches visible compliant copy
- [ ] Service schema description clarifies "connecting homeowners with"
- [ ] NO AggregateRating schema anywhere
- [ ] NO Review schema anywhere

**Legal pages:**
- [ ] /privacy exists with required disclosures
- [ ] /terms exists with required clauses
- [ ] Both link from footer on every page

**Off-site:**
- [ ] Call answering script documented
- [ ] Phone number forwards to a person who can identify the business correctly
- [ ] Operator has a plan for what to do with leads BEFORE a tenant is signed (typically: respond honestly, set expectations, hold lead until tenant exists, or forward to a free Tulsa-area contractor as a goodwill referral)

### Insurance (before paid traffic OR tenant signing)

- [ ] General Liability $1M/$2M with media endorsement
- [ ] E&O $1M/$2M
- [ ] Cyber liability $1M

### TCPA tools (before paid traffic OR tenant outreach)

- [ ] TrustedForm or Jornaya integrated on all forms
- [ ] Consent records retention plan (5+ years)
- [ ] STOP keyword handling for SMS

---

## What This Document Does Not Cover

This is a compliance baseline, not a complete legal review. Before any specific high-risk action, consult a real attorney:
- Drafting tenant contractor agreements
- Class-action TCPA defense if a complaint surfaces
- Multi-state expansion compliance (some states have stricter UDAP statutes)
- Specific certification or licensing questions in regulated industries (HVAC, electrical, plumbing in certain jurisdictions)
- Tax structure decisions for the LLC

This document reflects general best-practice principles for marketing/lead-gen businesses operating under FTC, state UDAP, and TCPA rules as of May 2026. Regulatory environments change. Review annually.

---

## When to Layer in Tenant Activation Changes

Once a contractor is signed and an exclusive partnership agreement is executed, apply the standardized changes documented in TENANT_ACTIVATION_PLAYBOOK.md.

That playbook covers:
- What language can now be added ("our partner contractor")
- What review and rating content can now appear
- What schema upgrades become available
- What additional trust elements can be added
- What stays the same regardless of tenant status

Do NOT apply tenant-state changes before an actual partnership agreement is signed. Pre-tenant compliance is non-negotiable, even if it costs some conversion percentage.

---

End of COMPLIANCE_STANDARDS.md
