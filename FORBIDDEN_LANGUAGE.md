# FORBIDDEN_LANGUAGE.md

Version 1.0. Effective July 2, 2026.

Quick reference banned language checklist, extracted from COMPLIANCE_STANDARDS.md so every command and audit checks one place. Banned everywhere: page copy, headings, alt text, metadata, schema descriptions, image captions, and code comments.

## Vetting and endorsement claims (banned)

- [ ] vetted
- [ ] our network
- [ ] pre-screened
- [ ] pre-qualified
- [ ] hand-selected
- [ ] carefully selected
- [ ] top-rated
- [ ] best contractors in [city] (and any "best [trade] in [city]" variant)
- [ ] trusted partners

## First-person work claims (banned)

The brand never performs the work, so the brand never says it does:

- [ ] we diagnose
- [ ] we repair
- [ ] we install
- [ ] we level
- [ ] we fix
- [ ] any equivalent first-person trade claim (we replace, we inspect, we remediate, we build, our crews, our technicians)

Correct framing: "the contractor we connect you with diagnoses..." or "licensed contractors handle...".

## Fabricated trust signals (banned)

- [ ] fake testimonials or named reviews
- [ ] tenure claims of any kind
- [ ] "since [year]"
- [ ] "decades of experience"
- [ ] stock photos labeled as our team or our crew
- [ ] fabricated certifications, awards, or BBB ratings
- [ ] jobs-completed or customers-served counters

## Formatting (banned)

- [ ] em dash character (U+2014), anywhere, including alt text and code comments

## How to use this list

- Building: write copy that never needs these phrases. Attribute credentials to the partner contractor.
- Auditing: grep for each term case-insensitively across the whole repo, including .astro, .ts, .md, and config files. Any hit is a fail with file and line.
