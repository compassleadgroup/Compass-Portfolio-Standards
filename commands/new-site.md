---
description: Scaffold a complete new rank and rent site to standards, ready for operator review
---

Scaffold a complete new Compass rank and rent site. The output is a full site source tree on a branch with an open PR, never a deploy.

## Guardrails (non-negotiable, apply to every step)

- Branch, commit, push source, open a PR, and merge it once its checks pass (operator instruction, 2026-07-15). Never deploy by hand (see the next rule).
- Do not use Wrangler. Do not use Cloudflare Direct Upload. GitHub auto-build to Cloudflare Pages is the only deploy path.
- No em dashes (U+2014) anywhere: page copy, code comments, commit messages, alt text.

## Read first (live, at run time)

Read the current versions of these files from the compass-standards repo (compassleadgroup/Compass-Portfolio-Standards, default branch). Use a local clone if one is present, otherwise fetch via the available GitHub tools. Do not rely on cached or remembered versions.

1. COMPLIANCE_STANDARDS.md (authoritative; on any conflict it wins)
2. BUILD_PLAYBOOK.md
3. SCHEMA_WHITELIST.md

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

1. Branch, commit, push source, open a PR, and merge it once its checks pass.
2. Never deploy by hand: no Wrangler, no Direct Upload. Merging to main triggers the GitHub auto-build to Cloudflare Pages.
3. Report the full URL list you built and any decisions the operator needs to make.
