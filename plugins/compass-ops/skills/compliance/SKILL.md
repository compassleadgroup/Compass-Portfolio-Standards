---
name: compliance
description: Compass Camper LLC compliance rules for rank and rent sites. Use whenever writing or editing any site content, page copy, headlines, CTAs, forms, About or legal pages, schema markup, meta descriptions, or marketing language for any Compass site. Enforces the pre-tenant honest lead-gen standard.
---

# Compass Compliance Rules

Summary of COMPLIANCE_STANDARDS.md in the compassleadgroup/compass-portfolio-standards repo. That file is authoritative. Read it, plus FORBIDDEN_LANGUAGE.md (exact banned strings) and SCHEMA_WHITELIST.md, at run time before writing site copy or schema.

## Core principle

Every site is a marketing service operated by Compass Camper LLC (Oregon) that connects homeowners with independent licensed contractors. The company does not perform service work and does not employ tradespeople. The FTC net-impression test applies: if a casual reader of the hero, services section, or "Why Us" block could think the company performs the work, the copy is non-compliant, even with a disclaimer present.

## Forbidden language

FORBIDDEN_LANGUAGE.md holds the exact banned strings. The categories:

- Vetting or screening claims about contractors (any phrasing that implies contractors went through vetting, screening, pre-qualification, or hand or careful selection)
- Possessive network phrasing that claims the contractors as the company's own network
- Superlatives (top-rating or best-in-city claims) without documented, verifiable ranking criteria
- Partner-trust phrasing that implies warranty obligations for contractor work
- First-person work claims: "we diagnose", "we repair", "we install", "we level", "we fix"
- Fake testimonials, named customer reviews, invented case studies
- Tenure or volume claims (a founding year, multi-decade experience, jobs-completed counters) unless documented for Compass Camper LLC
- Stock photos labeled as the company's own team or crew
- Fabricated certifications, awards, or BBB ratings

Use instead: "licensed local contractors", "a licensed contractor in your area", "the contractor you're matched with", "independent licensed professionals", "we connect homeowners with...", "we help you find...", and specific verifiable claims (licensed in state, insured, written warranties).

Style: no em dashes anywhere. Numbers under 10 spelled out, 10 and up as digits. Currency as $3,500. Phones as (XXX) XXX-XXXX with tel: links as +1XXXXXXXXXX.

## Schema whitelist

SCHEMA_WHITELIST.md holds the full list. Allowed types:

- `ProfessionalService` described as marketing and lead generation for the industry, or `Service` with provider Compass Camper LLC and serviceType "[Service] contractor referral service"
- `Organization` (About page) with legal name Compass Camper LLC, Oregon, real operating address, tracking phone
- `Service` on service pages, described as "connecting homeowners with licensed contractors for [service type]"
- `FAQPage` where JSON-LD answers match the visible compliant copy
- `BreadcrumbList`

Never pre-tenant:

- Any review or rating schema types (aggregate or individual) without real underlying data. The FTC Reviews Rule carries per-violation penalties up to $53,088.
- Business-listing schema with contractor-specific categories (foundation repair, roofing, plumbing, etc.), which falsely presents the company as performing the work

## Disclosure requirements

Every page needs, with consistent wording site-wide:

1. **Header disclosure strip** above the main nav (not footer-only): "A marketing service connecting [CITY]-area homeowners with licensed [SERVICE] contractors. Compass Camper LLC is not a licensed contractor and does not perform [SERVICE] work."
2. **Footer disclaimer** naming Compass Camper LLC (Oregon) as operator, stating all work is performed by independent licensed contractors, with license numbers available on request.
3. **Forms:** TCPA consent block above every submit button (not pre-checked, not in a popup) covering automated calls and texts, opt out via STOP, with a real link to /privacy. Plus a disclosure above the form that the information is shared with a licensed contractor to schedule the free inspection or quote.
4. **About page:** operating entity disclosure, business model explanation, objective contractor requirements only (licensing, insurance, written warranties, itemized estimates). No fake team members, no false experience claims.
5. **Legal pages:** /privacy and /terms exist and are linked from the footer on every page.

## Pre-tenant restrictions

Until a contractor partner is signed: no testimonials, no review widgets, no review or rating schema, no unverifiable badges or media logos, no named team members, no years-in-business or jobs-completed stats, no specific pricing claims without tenant data. Apply TENANT_ACTIVATION.md changes only after a partnership agreement is executed.
