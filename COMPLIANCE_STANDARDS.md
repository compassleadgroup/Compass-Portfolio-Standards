# COMPLIANCE_STANDARDS.md

Version 1.0. Effective July 2, 2026.

This is the master compliance rulebook for every Compass rank and rent site. It is the single authoritative copy. If any other file in any repo conflicts with this file, this file wins.

Provenance note: this version was assembled into the canonical repo from the Tier 0 handoff specification because the prior standalone copy was not reachable from the migration session. Operator: verify the exact copy templates in Section 3 against the prior authoritative copy before treating the wording as final, then remove this note.

## 1. Entity truth

- Every site is a marketing and lead generation service operated by Compass Camper LLC.
- The sites connect homeowners with independent licensed contractors. The sites do not perform, supervise, or guarantee any work.
- Nothing on any site may state or imply that the brand or Compass Camper LLC performs the work, employs the crews, or holds trade licenses.
- Any contractor credential (license, certification, insurance, years in trade) must be attributed to the partner contractor, never to the brand and never to Compass Camper LLC.

## 2. Required elements on every page

Every page on every site must carry all three of the following. A page missing any one of them fails audit.

1. Header disclosure strip, at the top of the page, visible without scrolling.
2. Footer disclaimer naming Compass Camper LLC as a marketing and lead generation company.
3. TCPA consent block directly above the submit button of every form on the page (if the page has a form).

## 3. Exact copy templates

Replace {BRAND_NAME} with the site brand. Do not reword these templates on individual sites. Wording changes happen here, by PR, and flow out to all sites.

### 3.1 Header disclosure strip

> {BRAND_NAME} is a free service that connects homeowners with independent licensed contractors. We are not a contractor and we do not perform the work.

### 3.2 Footer disclaimer

> {BRAND_NAME} is a marketing and lead generation service operated by Compass Camper LLC. {BRAND_NAME} is not a contractor, does not perform any of the services described on this site, and does not guarantee any contractor's work. All services are performed by independent third party contractors who are solely responsible for their own licensing, insurance, and workmanship. Homeowners should verify licensing and insurance directly with the contractor. Compass Camper LLC may receive compensation when a homeowner is connected with a contractor.

### 3.3 TCPA consent block

Placed directly above every form submit button, in readable body-size text, never in fine print:

> By submitting this form, you agree that {BRAND_NAME} and its partner contractors may contact you about your request by phone, text message, or email, including through automated technology, at the number and email you provided. Consent is not a condition of purchase. Message and data rates may apply. You can opt out at any time. See our [Privacy Policy](/privacy/) for details.

TCPA rules:

- If a consent checkbox is used, it must never be pre-checked.
- The /privacy/ link must resolve to a real privacy policy page on the same site.
- Consent language must not be hidden, collapsed, grayed out, or placed below the button.

## 4. Forbidden language

The full scannable checklist lives in FORBIDDEN_LANGUAGE.md. Summary of what is banned in all copy, alt text, metadata, and schema:

- Vetting and endorsement claims: vetted, our network, pre-screened, pre-qualified, hand-selected, carefully selected, top-rated, best contractors in [city], trusted partners.
- First-person work claims: we diagnose, we repair, we install, we level, we fix, and any equivalent phrasing that puts the brand in the trade.
- Fabricated trust signals: fake testimonials or named reviews, tenure claims, "since [year]", "decades of experience", stock photos labeled as our team or crew, fabricated certifications, awards, or BBB ratings.

## 5. Truth in content

- No fake reviews, testimonials, named customers, or invented case studies.
- No fake team members, staff bios, or stock photos presented as employees or crews.
- No invented company history, founding dates, jobs-completed counters, or service counts.
- No unverified awards, badges, ratings, or memberships.
- Real data only in any proof or performance claim. Anything unverified must be labeled as unverified or removed.

## 6. Schema rules

The full whitelist lives in SCHEMA_WHITELIST.md. Summary:

- Allowed pre-tenant: Organization, ProfessionalService, Service, FAQPage, BreadcrumbList. Nothing else.
- Banned pre-tenant, always: LocalBusiness, any contractor-specific category, Review, AggregateRating, Rating.
- ProfessionalService and Service descriptions must say the business connects homeowners with licensed contractors, not that it performs the work.
- Schema must match the visible copy on the page. No schema-only claims.

## 7. Style and formatting

- No em dashes (U+2014) anywhere: page copy, code comments, commit messages, alt text. Use commas, periods, parentheses, or "to".
- Every page uses a self-referencing canonical and trailing-slash URLs, per BUILD_PLAYBOOK.md.

## 8. Deploy and review policy

- Never merge and never deploy without operator review. Branch, commit, push, open a PR, stop.
- No Wrangler. No Cloudflare Direct Upload. GitHub auto-build to Cloudflare Pages is the only deploy path.

## 9. Change control

- This file changes only by PR to the compass-portfolio-standards repo, reviewed by the operator.
- Every change is recorded in CHANGELOG.md with a date.
- Commands and site builds read these files live at run time, so a merged change here is immediately authoritative everywhere.
