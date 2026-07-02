# BUILD_PLAYBOOK.md

Version 1.0. Effective July 2, 2026.

Site architecture, tech stack, and style rules for every Compass rank and rent build. On any conflict with COMPLIANCE_STANDARDS.md, COMPLIANCE_STANDARDS.md wins.

Provenance note: this version was assembled into the canonical repo from the Tier 0 handoff specification because the prior RANK_AND_RENT_BUILD_PLAYBOOK.md was not reachable from the migration session. Operator: verify against the prior copy and fold in anything missing, then remove this note.

## 1. Tech stack

- Astro 6.x, TypeScript strict, static output.
- Tailwind CSS v4 via the Vite plugin.
- Node 22.
- Web3Forms for the contact form, with the access key in site.ts (browser-visible by design).
- Lucide icons only. No other icon sets, no emoji icons in UI.

## 2. Config requirements

- trailingSlash 'always'.
- Directory format build (each page builds to its own directory with an index.html).
- Self-referencing canonical on every page.
- Sitemap auto-generated and referenced from robots.txt.

## 3. Site architecture

- 25 to 45 URLs at launch.
- Core pages: home, about, contact, services, privacy, terms.
- Service pages live at the root, flat. Example: /water-damage-repair not /services/water-damage-repair.
- City pages use /{city}-{state}. Example: /broken-arrow-ok.
- City pages are driven by a single [city].astro template fed by a cities.ts data file. No hand-built one-off city pages.
- Footer mega-nav links to every service page and every city page, on every page.

## 4. Compliance elements on every page

Per COMPLIANCE_STANDARDS.md, every page carries:

- The header disclosure strip.
- The footer disclaimer naming Compass Camper LLC as a marketing and lead generation company.
- A TCPA consent block above every form submit button.

Use the exact copy templates from COMPLIANCE_STANDARDS.md Section 3. Do not reword per site.

## 5. Schema

Only the types in SCHEMA_WHITELIST.md: Organization, ProfessionalService, Service, FAQPage, BreadcrumbList. Never LocalBusiness, Review, or AggregateRating on a pre-tenant site. Descriptions must state that the site connects homeowners with licensed contractors.

## 6. Content lanes and page strategy

- Model the SERP before writing. Look at the top 3 organic results for the target keyword, note their structure and subtopics, then match or beat that coverage.
- Cost pages are a proven winning lane. Cost searchers are warm buyers, so add a quote CTA.
- Informational pages are an AI Overview feed, not lead capture. Do not force a hard CTA on them.
- Money pages should target regional clusters, not single small-town keywords that rarely have search volume.

## 7. Internal linking

- Every service or city page links to at least 3 other service pages and 2 to 3 city pages in body copy or contextual modules.
- The footer mega-nav provides the full link mesh on every page.

## 8. Language and content rules

- Zero forbidden words. Full list in FORBIDDEN_LANGUAGE.md.
- No fake reviews, team photos, fabricated history, or invented trust signals.
- Attribute any contractor credential to the partner contractor, never to Compass Camper LLC.
- House voice per VOICE.md.
- No em dashes anywhere, including alt text, code comments, and commit messages.

## 9. Deploy policy

- GitHub auto-build to Cloudflare Pages is the only deploy path.
- No Wrangler. No Cloudflare Direct Upload. Ever.
- Never merge and never deploy. Branch, commit, push source, open a PR, and stop for operator review.
