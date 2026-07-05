---
description: Start a new-site research pass. Reads the compass-kb knowledge base niche index and moat pages, excludes everything already built or dropped, and returns a shortlist of candidate niches worth a Discovery run. Read-only. Never touches a site repo. Use at the very start of the pipeline.
---

# /new-site-research

Return the niches worth researching next, grounded in what the operator has already built and killed. This command does not run full Discovery; it produces the shortlist Discovery starts from. It only reads the knowledge base; it writes nothing.

## Knowledge base location

The knowledge base is the separate repo `compassleadgroup/compass-kb`. This command reads from it. If the session cannot reach compass-kb (wrong repo open, no access), say so plainly and stop rather than guessing from memory. Do not confuse compass-kb (knowledge, niche and site pages, verdicts) with this standards repo (rules and commands).

## Step 1: Read the knowledge base

Read from compass-kb:
- wiki/niches/index.md
- every page under wiki/niches/
- every page under wiki/moats/

## Step 2: Build the exclusion set

Exclude from any recommendation, automatically:
- Every niche marked BUILT.
- Every niche marked DROP.
- Every niche marked PERMANENT DISQUALIFIER.
- Anything already mid-pipeline on the pending-verification list, unless the operator asks to revisit it.

State the count of excluded niches so the operator sees the memory is working.

## Step 3: Read the moat pattern

From the moat pages and the niche pages that reached BUILT, identify which moat types have actually made it into the portfolio (regulatory, geological, licensing fragmentation, permit complexity). Note which consolidators or PE roll-ups (Groundworks, Acculevel, TopBuild, IBP) show up as kill reasons, and steer away from their categories.

## Step 4: Produce the shortlist

Return 3 to 6 candidate niches worth a Discovery pass. For each:
- Niche and a plausible target metro or region type.
- One line on why it fits the model: planned or compliance-driven intent, not emergency; organic-rankable without a map pack; a durable moat.
- The moat type it would lean on, weighted toward moat types already proven in the portfolio.
- A first-pass Volume-Floor read if estimable (PASS, THIN, FAIL), labeled estimate-pending-KWP.
- One honest reason it might fail.

Rank best-first. Do not pad the list.

## Step 5: Hand off

Tell the operator to run the Discovery master prompt on the top candidate, which reads this same niche index, applies the Volume-Floor Gate, and whose verdict is later filed with /log-verdict. Build nothing from this command.

## Rules

- Never recommend a niche in the exclusion set.
- Never invent volume numbers; label all volume estimate-pending-KWP.
- No em dashes anywhere in the output.
- If the niche index cannot be read, say so and stop.
