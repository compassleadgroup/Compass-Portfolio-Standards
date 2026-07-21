---
description: Build one service page or city page in the house format
---

Build one service page or city page for the current site, in the house format, and open a PR for it.

## Guardrails (non-negotiable)

- Branch, commit, push, open a PR, and merge it once its checks pass. Never deploy by hand (see the next rule).
- No Wrangler. No Cloudflare Direct Upload. GitHub auto-build to Cloudflare Pages is the only deploy path.
- No em dashes (U+2014) anywhere: copy, code comments, commit messages, alt text.

## Read first (live, at run time)

From the compass-standards repo (compassleadgroup/Compass-Portfolio-Standards, default branch), via local clone or the available GitHub tools:

1. BUILD_PLAYBOOK.md
2. COMPLIANCE_STANDARDS.md (authoritative; on any conflict it wins)
3. VOICE.md

## Before writing: model the SERP

Look at the top 3 organic results for the target keyword. Note their structure and the subtopics they cover. Then match or beat that coverage. Do this before drafting any copy.

## Rules of thumb

- Cost pages are a proven winning lane. Cost searchers are warm buyers, so add a quote CTA.
- Informational pages are an AI Overview feed, not lead capture. Do not force a hard CTA on them.
- Money pages should target regional clusters, not single small-town keywords that rarely have search volume.

## Build the page with

- House voice from VOICE.md.
- The header disclosure strip, footer disclaimer, and TCPA consent block, using the exact copy templates from COMPLIANCE_STANDARDS.md.
- Correct schema per SCHEMA_WHITELIST.md: Service and FAQPage where relevant, always matching the visible copy.
- Self-referencing canonical and trailing slash.
- Internal linking: link to at least 3 other service pages and 2 to 3 city pages in the body, plus the footer mega-nav.
- Zero forbidden language (FORBIDDEN_LANGUAGE.md).
- The site's existing design system: reuse the site's palette, type pairing, signature element, and section rhythm from its CLAUDEwebdesign.md and design record. A new page must match the site it joins, not introduce a generic look. Section 0 of BUILD_PLAYBOOK.md governs.

## Finish

Run the `site-design-qa` skill on the finished page and clear its verdict table before you open the PR. Then branch, commit, push, open a PR, and merge it once its checks pass. Never deploy by hand. No em dashes. Report the page URL, target keyword, and the SERP coverage decisions you made.
