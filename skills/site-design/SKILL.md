---
name: site-design
description: Use when building or re-skinning the LOOK of a rank-and-rent site and the goal is a distinct, hand-made design that does not read as AI-generated. Run it during a site build (in the site repo) after the content plan is set, or when re-skinning a grandfathered site losing on looks. It extends the design rulebook (CLAUDEwebdesign) with the one thing prose rules cannot supply: concrete visual exemplars to build each section against, translated not copied. Pairs with the site-design-qa skill, which grades each finished section. Not for content, SEO, or compliance work.
argument-hint: "[niche and metro, e.g. 'septic, Marion County FL']"
---

# Site Design (anti-generic build skill)

## What this does

Turns the design-distinctiveness doctrine into an executable build loop. Bans and prose rules only get a build to generic-safe, which is still the cookie-cutter look. This skill adds the missing mechanism: give the build concrete visual exemplars, translate their treatment onto this site's own tokens, build one section at a time, and grade each section before moving on.

It does not replace the design rulebook. It assumes that rulebook is available (the base bans, the palette and type protocol, the one-signature-element rule, the responsive floor) and adds three things the rulebook lacks: the reference-exemplar discipline, cross-category sourcing, and two newer tells.

## The calibration: redesign, not recolor, and not a costume

Two failure modes sit on either side of a good redesign. Aim for the middle. (Learned the hard way on the hillcountrybarnbuilders.com re-skin, 2026-07-21: the first attempt was a recolor, the second overcorrected into an industrial costume, the third landed.)

- Recolor (too little). Swapping the palette, type, and a few borders while the layout stays the same is not a redesign. If the hero is still a headline over a scrimmed photo with two stacked buttons, the services are still a grid of identical bordered cards, and the form is still one boxed block, the build failed no matter how nice the new colors are. The single clearest tell to kill is the uniform card grid (a 3-by-N or 2-by-2 of identical cards). Recompose it.
- Costume (too much). A themed novelty that makes the page about the concept instead of the business also fails. A blueprint or spec-sheet, a terminal, a heavy brutalist gimmick: a real local-service owner would not proudly hand it to a customer. For home-service niches the site should feel warm, human, and credible, not like a stunt.
- The target. A genuinely different, tasteful layout that a good studio would design for this specific local business: a different layout archetype and different section compositions, executed with restraint. Different, not disguised.

Calibrate taste with the operator. Taste is the operator's call, so on a re-skin, or any time the operator is particular, offer two or three restrained style directions in plain language before building (for example warm editorial, photo-led, or clean classic), each of which breaks the card grid, and build the one the operator picks. Do not silently pick a bold theme.

Layout patterns that beat the card grid (reach for one and tie it to the subject):

- Editorial list: roomy rows, each a name, a one-line, a hairline divider, and an arrow.
- Alternating image-and-text feature rows.
- A magazine split: asymmetric oversized type beside an image.
- A directory or index: clean grouped lists rather than boxes.
- One primary feature plus a supporting list, instead of N equal cards.

Avoid the uniform grid of identical cards, the everything-centered single column, and the boxed centered form as the only form.

## Prerequisites

- The design rulebook. In a site repo it is CLAUDEwebdesign.md. In the compass-portfolio-standards plugin it is reference/CLAUDEwebdesign_copy.md. In the compass-kb knowledge base it is raw/CLAUDEwebdesign copy.md. Read whichever is present.
- The site's pinned design brief: niche, metro, the page's single job, and the palette or tokens if the site already has them.
- Read the sibling site's design record first (the same-niche site in the portfolio). No two sites may share a palette, a type pairing, or a layout archetype. That is the variance ledger and it matters most between siblings.

## Step 1: Pin the direction (before any component)

Name the concrete subject, not "a local service site." Radon in Minnesota home sales. Barndominiums in the Hill Country. Well water in rural Michigan. Then pick the design lane: a dominant plus accent palette from the subject or region, a display-plus-body type pairing, one signature element that encodes something true about the subject, and a layout archetype. Diff every axis against the sibling's design record and change a lane on each. The layout archetype is a first-class axis, not an afterthought: pick one that breaks the card-grid template per the calibration above, and if the operator chose a style direction, execute that one.

## Step 2: Gather exemplars (the core move)

This is what prose rules cannot do. See [references.md](references.md) for the registry: per-niche treatment targets, durable galleries to search, and the cross-category rule.

1. Pick the treatment target for this niche family from references.md.
2. Find three to five concrete exemplars. Source from premium adjacent categories (see references.md), never from other lead-gen or rank-and-rent sites, which are the look we are escaping.
3. Screenshot each. In a build session with browse, fetch and screenshot the live page into a local references folder. If browse is unavailable, work from screenshots the operator pastes.
4. Store them in the build repo under a references or assets folder so the build can look at them, not just read about them. Keep them out of the shipped site.

## Step 3: Build section by section, against the exemplars

One-prompting a world-class site does not exist. Build navbar first, then hero, then down the page, one section per pass. For each section:

- Look at the matching exemplar screenshot, then build.
- TRANSLATE, do not copy. Keep the composition and the restraint. Replace everything brand-specific (their color, their wordmark, their copy) with this site's own tokens. Apply the treatment that makes sense, not one that matches an exemplar one to one. The exemplars are a guideline the build references, not a source to clone.
- After each section, run the site-design-qa skill on it before moving to the next.

If the build tracks a low-fidelity wireframe, do not adhere to it so tightly that it flattens the design. It is okay to drift from the wireframe to a stronger option that fits the direction.

## Step 4: The two newer tells (add to the CLAUDEwebdesign bans)

- 2x2 card grids read as AI-generated. Break the grid: vary the count, the sizes, or the rhythm, or use a different composition.
- Do not ship the raw output of a drafting artifact. Artifacts carry a recognizable house look you can spot at a glance. Use one for a skeleton only, then rebuild in the site repo against the exemplars and the design direction.

## Step 5: Record and hand off

- Capture the site's design record (palette hexes, display-plus-body pairing, the one signature element, the layout archetype) for the site page. The new-site-page skill or /new_site_page writes it into the variance ledger in compass-kb.
- The design license is visual and editorial only. It never buys a compliance shortcut. The copy still obeys the forbidden-language and no-fabrication rules, and the canonical COMPLIANCE_STANDARDS.md governs and wins every conflict.

## Definition of done

Every section has been built against an exemplar and passed site-design-qa. The finished page fails the two-second test in reverse: a stranger would not believe an AI made it. It could not be dropped onto the sibling site unchanged. The design record is captured.
