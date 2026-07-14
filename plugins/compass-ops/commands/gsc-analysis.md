---
description: Turn a Google Search Console export into a prioritized action list and a decision record
---

Turn a Google Search Console export into a prioritized action list and a dated decision record (seo_analysis.md) for the current site.

## Guardrails (non-negotiable)

- This is a decision record, not a build input. Do not change site files in this command.
- Do not merge. Do not deploy. No Wrangler. No Cloudflare Direct Upload.
- If seo_analysis.md is committed, do it on a branch with a PR, like everything else.
- No em dashes (U+2014) anywhere in the output.

## Read first

The site's existing seo_analysis.md, if one exists. Use it as the baseline: compare current numbers against it and note movement.

## Input handling

- Accept a GSC export (queries, pages, or both).
- If a Keyword Planner export is involved, load it as UTF-16 LE tab-separated: pd.read_csv with sep tab, encoding utf-16, skiprows 2. When volume returns only banded values, sort by the high-range bid column instead of volume.
- State the data window and any data-integrity caveats (gated volumes, throttled account, tiny sample) before drawing conclusions.

## Produce, in this order

1. Striking-distance wins: queries sitting just off page one, ranked by opportunity.
2. CTR-gap rewrites: pages ranking well but under-clicked, with copy-pasteable new title tags and H1s.
3. Cannibalization: pages competing for the same query, with a recommended primary.
4. Content gap by lane: missing pages the cluster needs.
5. On-page targeting: exact title tag and H1 suggestions per target page.
6. Internal linking cluster map: which pages should link to which.

## Output

Write or update seo_analysis.md as a dated decision record and re-run baseline:

- Date the entry and keep prior entries intact.
- Record the six sections above plus the baseline numbers to compare against next run.

Do not change site files in this command. Do not deploy.
