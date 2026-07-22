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

### Footer disclaimer (every page)

**Copy template:**
> "This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. [SITE_BRAND] is a marketing service that connects homeowners with independent, licensed [SERVICE] contractors. All [SERVICE] and related services are performed by independent licensed contractors. Compass Camper LLC is not a licensed contractor and does not perform [SERVICE] work directly. Contractor license numbers are available upon request."

This MUST appear on every page. Same wording across the site.

### Form privacy/consent block (every form on the site)

Above every submit button. Not pre-checked. Not in popup. Not in fine print.

**TCPA consent copy template:**
> "By submitting this form, I agree that Compass Camper LLC and a [SERVICE] contractor may contact me at the phone number and email I provided, including by automated phone calls, prerecorded messages, and text messages, regarding [SERVICE] services. Consent is not a condition of any purchase. Message and data rates may apply. I may opt out at any time by replying STOP to any text or asking to be removed during any call. See our Privacy Policy."

"Privacy Policy" must be a real link to /privacy.

**Disclosure above the form:**
> "When you submit this form, your information is shared with a licensed [SERVICE] contractor for the purpose of scheduling your free [inspection/quote/assessment]."

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
- [ ] Header disclosure strip on every page
- [ ] Footer disclaimer on every page with correct entity and service references
- [ ] All body copy uses neutral "a licensed contractor" language, no first-person work claims
- [ ] No "vetted," "our network," "pre-screened," or similar claim-language
- [ ] No fake testimonials, named customer reviews, or invented case studies
- [ ] No fake team members or stock-photo bios
- [ ] No false experience claims, completed-jobs counters, or "since [year]" claims
- [ ] No certifications, awards, or accreditation badges unverified

**Forms:**
- [ ] TCPA consent language above submit button, not pre-checked
- [ ] Disclosure above form about contractor data sharing
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
