---
description: Scaffold a complete new rank and rent site to standards, ready for operator review
---

Scaffold a complete new Compass rank and rent site. The output is a full site source tree on a branch with an open PR, never a deploy.

## Guardrails (non-negotiable, apply to every step)

- Branch, commit, push source, open a PR, and merge it once both gates clear: the compliance CI and the site-design-qa visual gate (see Finish). Never deploy by hand (see the next rule).
- Do not use Wrangler. Do not use Cloudflare Direct Upload. GitHub auto-build to Cloudflare Pages is the only deploy path.
- No em dashes (U+2014) anywhere: page copy, code comments, commit messages, alt text.

## Read first (live, at run time)

Read the current versions of these files from the compass-standards repo (compassleadgroup/Compass-Portfolio-Standards, default branch). Use a local clone if one is present, otherwise fetch via the available GitHub tools. Do not rely on cached or remembered versions.

1. COMPLIANCE_STANDARDS.md (authoritative; on any conflict it wins)
2. BUILD_PLAYBOOK.md (Section 0 is the visual-design gate; do not skip it)
3. SCHEMA_WHITELIST.md
4. reference/CLAUDEwebdesign_copy.md (the design rulebook)

Also read reference/CLAUDE_TEMPLATE.md from the standards repo and use it to generate the site's CLAUDE.md.

## Ask the operator for

- Site brand name
- Domain
- Niche or service
- Target metro or region
- The city list

Do not start building until you have all five.

## Build

Tech (per BUILD_PLAYBOOK.md):

- Astro 6.x, TypeScript strict, Tailwind CSS v4 via the Vite plugin, static output, Node 22.
- Web3Forms for the contact form with the access key in site.ts (browser-visible by design).
- Lucide icons only.

Config:

- trailingSlash 'always', directory format build, self-referencing canonicals on every page.

Architecture:

- 25 to 45 URLs at launch.
- Core pages: home, about, contact, services, privacy, terms.
- Service pages at the root, flat. Example: /water-damage-repair not /services/water-damage-repair.
- City pages as /{city}-{state}. Example: /broken-arrow-ok.
- Drive city pages from a single [city].astro template fed by a cities.ts data file.
- Footer mega-nav that links to every service and every city, on every page.

Design (per Section 0 of BUILD_PLAYBOOK.md, and non-negotiable):

- Copy reference/CLAUDEwebdesign_copy.md from the compass-standards repo to CLAUDEwebdesign.md in the new site, verbatim, so the design rulebook rides in the repo.
- Invoke the `site-design` skill and run its loop: pin a design brief (palette, display-plus-body type pairing, one signature element, layout archetype) tied to this niche and metro, diffed against the sibling site's design record so no two sites share a lane; gather three to five exemplars from premium adjacent categories, never from other lead-gen sites; then build section by section against them, translating the treatment onto this site's own tokens, never copying.
- After each section, run the `site-design-qa` skill and clear its verdict table (every row PASS or an accepted WATCH) before starting the next section, so drift is caught while it is one section and cheap to fix. Save each section's audit file in the repo.
- Do not ship the model's autopilot look. If a page could be dropped onto another site in the portfolio unchanged, it is not done.

Compliance on every page:

- Header disclosure strip.
- Footer disclaimer naming Compass Camper LLC as a marketing and lead generation company.
- TCPA consent block above every form submit button.
- Use the exact copy templates from the Required Page Elements section of COMPLIANCE_STANDARDS.md. Do not reword them.

Schema:

- Only Organization, ProfessionalService, Service, FAQPage, BreadcrumbList.
- Never LocalBusiness, Review, or AggregateRating.
- Descriptions must state the site connects homeowners with licensed contractors.

Language:

- Zero forbidden words (check FORBIDDEN_LANGUAGE.md).
- No fake reviews, team photos, fabricated history, or invented trust signals.
- Attribute any contractor credential to the partner contractor, never to Compass Camper LLC.
- No em dashes anywhere, including alt text.

CI gate:

- Copy `ci/site-compliance.yml` from the compass-standards repo to `.github/workflows/compliance.yml` in the new site, verbatim. This is the deterministic compliance gate that runs the canonical checker on every pull request. Every existing site carries it and new sites must too.

## Finish

1. Run the `site-design-qa` skill once on the full assembled page (the per-section passes happened during the build). Clear its verdict table and commit the saved full-page audit file.
2. Record the site's design record (palette hexes, type pairing, signature element, layout archetype) on its compass-kb site page via /new_site_page, so the portfolio variance ledger stays current.
3. Branch, commit, push source, open a PR. Merge only after both gates clear: the compliance CI is green AND the site-design-qa audit files are committed with every row PASS or an accepted WATCH. The compliance CI does not check visual design, so the QA audit is the only trace that the visual gate ran; do not merge without it.
4. Never deploy by hand: no Wrangler, no Direct Upload. Merging to main triggers the GitHub auto-build to Cloudflare Pages.
5. Report the full URL list you built, the design record, and any decisions the operator needs to make.
