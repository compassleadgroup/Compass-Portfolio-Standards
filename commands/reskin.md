---
description: Re-skin an existing live site to the design-distinctiveness doctrine, so a grandfathered or generic-looking build stops reading as AI-made
---

Re-skin an existing Compass site's LOOK without touching its content, SEO, or compliance. Use this on a grandfathered pre-doctrine site that is losing on looks, or any site that reads as AI-generated. The output is a re-skinned source tree on a branch with an open PR, never a deploy.

## Guardrails (non-negotiable)

- Branch, commit, push, open a PR, and merge it once its checks pass. Never deploy by hand: no Wrangler, no Direct Upload. GitHub auto-build to Cloudflare Pages is the only deploy path.
- No em dashes (U+2014) anywhere: copy, code comments, commit messages, alt text.
- Re-skin the visual layer only. Do not change the copy claims, the schema, the disclosures, the URL structure, or the internal linking. If a re-skin would touch any of those, stop and ask.

## Read first (live, at run time)

From the compass-standards repo (compassleadgroup/Compass-Portfolio-Standards, default branch), via local clone or the available GitHub tools:

1. CLAUDEwebdesign_copy.md in reference/ (the base design rulebook), or the site repo's own CLAUDEwebdesign.md if present.
2. BUILD_PLAYBOOK.md, Section 0 (visual design distinctiveness).
3. COMPLIANCE_STANDARDS.md (authoritative; on any conflict it wins).

Also read the site's current design record on its compass-kb site page, and the sibling site's design record, so the re-skin lands in a different lane from the sibling.

## Do the re-skin

Invoke the `site-design` skill and run its loop on this existing site:

- Pin a new direction for the site (palette, type pairing, one signature element, layout archetype), diffed against the sibling so no two sites share a lane.
- Gather three to five exemplars per the skill's reference registry, from premium adjacent categories, never from other lead-gen sites.
- Go section by section: re-skin the navbar, then the hero, then down the page, each against its exemplar, translate not copy.
- After each section, run the `site-design-qa` skill and clear its verdict table before moving on.

## Finish

1. Branch, commit, push, open a PR, and merge it once its checks pass. Never deploy by hand.
2. Update the site's design record on its compass-kb site page to the new palette, type pairing, signature element, and archetype (the design record is the variance ledger), via /new_site_page or a direct edit.
3. Report what changed, the new design record, and confirm no copy, schema, disclosure, or URL changed.
