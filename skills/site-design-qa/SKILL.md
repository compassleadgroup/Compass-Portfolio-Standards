---
name: site-design-qa
description: Use to QA one finished web-design section against the design direction before moving on, or to check a whole page for AI-look drift before a build PR merges. Screenshots the section, grades it as a pass or fail verdict table against the vibe-check and the site's design record, and reports. It never edits unprompted. Pairs with the site-design skill, which builds the sections this one grades. Not for content, SEO, or compliance QA.
argument-hint: "[section name, e.g. 'hero' or 'services']"
---

# Site Design QA (drift gate)

## What this does

Grades a built section against the design direction and returns a verdict table, so drift gets caught while it is one section and cheap to fix, not at the 11th hour when it means reworking the whole page. It complements the site-design skill: that one builds, this one checks. Run it after each section, and once more on the full page before the build PR merges.

It reports. It does not edit unless asked. Reporting and fixing are separate steps so a QA pass never silently changes the build.

## The gate: get a screenshot first

Grade the rendered pixels, not the source. Source can satisfy every rule and still look generated.

1. Obtain a screenshot of the section at desktop and at mobile width (375px). In a build session, render the preview and capture it. Otherwise ask the operator to paste one.
2. If no screenshot can be produced, stop and ask. Do not grade from code alone and do not guess.

## Grade against this checklist

Every answer must be NO. Any YES is a FAIL for that row. The first block is the CLAUDEwebdesign vibe-check; the last two rows are the newer tells and the portfolio-variance test.

- Is purple, violet, or indigo the dominant color?
- Are there purple, blue, or pink gradients anywhere?
- Are any headline words gradient-filled?
- Is there a row of giant meaningless stats?
- Are there emoji in headings?
- Is there a "why choose us" or generic-slogan section?
- Is everything centered in one column, top to bottom?
- Is the type just default Inter or system with no display face?
- Do cards have frosted-glass or soft-glow styling?
- Does it break or look unstyled on mobile?
- Is the section a plain 2x2 card grid? (A newer tell: break the grid.)
- Does it carry the recognizable house look of a drafting artifact rather than a built, subject-specific design?
- Could this exact section be dropped onto the sibling site in the same niche unchanged? (If yes, it is not distinct enough. Diff it against the sibling's design record and change a lane.)

## Output

1. An inline verdict table:

| Area | Check | Verdict | Note |
|---|---|---|---|
| (section and element) | (the item from the checklist) | PASS / FAIL / WATCH | (what and where, one line) |

Use WATCH for something that passes but is close, so the operator can decide. Use FAIL only for a checklist YES or a clear break.

2. A saved audit file the build can keep, named for the section, holding the same table plus any rough notes.

3. After the table, offer to fix the FAIL and WATCH rows. Apply fixes only if the operator says so. Never edit as part of grading.

## Definition of done

Every checklist row is PASS or an accepted WATCH, at desktop and mobile. The verdict table is saved. Any fix was a separate, requested step.
