---
description: Write or update a niche page in the compass-kb knowledge base from a research verdict. Paste a Discovery, rankability, or Verification-Analysis output and this files it as a properly formatted niche page so portfolio memory compounds. Writes to compass-kb via a PR. Use after any research stage produces a verdict.
---

# /log-verdict

File a research verdict into the knowledge base so it becomes permanent, queryable portfolio memory. Every verdict, including a DROP, gets recorded. A documented dead niche is one of the most valuable pages in the KB because it stops re-research.

## Knowledge base location

The knowledge base is the separate repo `compassleadgroup/compass-kb`. This command writes there, on a branch, via a PR the operator merges. It does not write to this standards repo and does not write to any site repo. If compass-kb cannot be reached, say so and stop.

## Step 1: Get the verdict

Take the verdict from the operator's pasted text or a referenced file. Identify the stage (Discovery, rankability verification, or final Verification-Analysis), because that sets the pipeline stage field.

## Step 2: Determine the target page

Derive the niche slug (lowercase, hyphenated, niche plus metro, for example tyler-tx-septic). Check whether compass-kb/wiki/niches/[slug].md exists.
- If not, create it.
- If it exists, this is a later-stage verdict for a niche already in the KB. Do not overwrite the page. Append the new stage's findings and update the Verdict and Pipeline stage fields.

## Step 3: Write the page in the compass-kb niche format

Use the niche-page structure defined in compass-kb/CLAUDE.md. Required fields:
- Verdict: PROCEED / REFINE / DROP / BUILT / PERMANENT DISQUALIFIER, with today's date and a one-line reason.
- Volume-Floor Gate result: PASS (1,500+/mo combined) / THIN (500-1,500, KWP required) / FAIL (under 500). Label unconfirmed volume estimate-pending-KWP.
- Moat and type.
- Consolidator or PE presence (name them).
- Intent type: planned / compliance / considered vs emergency.
- Pipeline stage: Discovery done / Cowork verification done / Verification-Analysis done / Cleared to build / Built.
- Source line: research verdict via [stage], [today's date].
- If PROCEED and build inputs are present (primary keywords, page footprint, moat angle, compliance notes), add them under a Build-ready inputs heading.

For a later-stage verdict on an existing page, add its section under a clear heading (Rankability verification, or Final verdict), do not duplicate the page.

## Step 4: Keep the index current

Update compass-kb/wiki/niches/index.md: add the niche with its one-line verdict, or update the existing entry's verdict and stage.

## Step 5: Commit

Branch, plain commit message, push, open a PR against compass-kb. The operator merges. Never commit to main. Update compass-kb/CHANGELOG.md with a one-line entry.

## Rules

- Never overwrite prior stage findings; append and update fields.
- Never invent numbers; label unconfirmed volume estimate-pending-KWP.
- Record verdicts as dated research outputs, not as new doctrine.
- No em dashes anywhere.
- Run the em-dash and forbidden-language greps before opening the PR.
