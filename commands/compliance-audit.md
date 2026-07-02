---
description: Run the pre-launch compliance checklist against a site and return pass or fail per item
---

Run the pre-launch compliance checklist against the current site repo and return a pass or fail verdict per item. This command reports; it does not fix or ship anything.

## Guardrails (non-negotiable)

- Do not fix anything automatically unless the operator explicitly asks.
- Do not merge. Do not deploy. No Wrangler. No Cloudflare Direct Upload.
- No em dashes (U+2014) in anything you write, including this report.

## Read first (live, at run time)

From the compass-standards repo (compassleadgroup/Compass-Portfolio-Standards, default branch), via local clone or the available GitHub tools:

1. COMPLIANCE_STANDARDS.md (authoritative)
2. FORBIDDEN_LANGUAGE.md
3. SCHEMA_WHITELIST.md

## Scan the whole site repo for

1. Forbidden language anywhere in copy or alt text. Use the full list in FORBIDDEN_LANGUAGE.md and grep case-insensitively across all source files (.astro, .ts, .md, config).
2. First-person work claims: we diagnose, we repair, we install, we level, we fix, and equivalents.
3. Wrong schema: any LocalBusiness, contractor-specific category, Review, AggregateRating, or Rating. Also check that ProfessionalService and Service descriptions say the business connects homeowners with licensed contractors.
4. Missing header disclosure strip, footer disclaimer, or TCPA consent block on any page. Check that the copy matches the exact templates in COMPLIANCE_STANDARDS.md Section 3.
5. Consent block issues: a pre-checked checkbox, a missing or broken /privacy link, or consent hidden in fine print or below the submit button.
6. Fake reviews, named testimonials, invented case studies, fake team members, stock-photo bios, "since [year]" or jobs-completed counters, unverified awards or badges.
7. Em dashes anywhere, including code comments and alt text (search for the U+2014 character).

## Output

A pass or fail table, one row per checklist item above. For each failure, list:

- The file
- The line number
- The exact fix

End with an overall verdict: READY or NOT READY for launch. Do not fix automatically unless the operator asks. Do not deploy.
