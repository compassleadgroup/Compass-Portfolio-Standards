---
description: Strip and verify zero em dashes across a repo
---

Run a repo-wide removal of the em dash character (U+2014) and verify the count is zero.

## Guardrails (non-negotiable)

- Never deploy by hand: no Wrangler, no Cloudflare Direct Upload.
- If this produces file changes, commit them on a branch, open a PR, and merge it once the check passes.

## Scope

All text in the repo: page copy, code comments, alt text, config, markdown. Also check commit messages on the working branch; if any contain an em dash, note them for the operator (do not rewrite pushed history without approval).

## Procedure

1. Removal pass. Use perl with the -CSD flag targeting \x{2014}, replacing each em dash with appropriate punctuation. Prefer a comma, period, parentheses, or the word "to" based on context. Where context is ambiguous, use a comma and flag the line in the report. Example mechanical pass:

   perl -CSD -pi -e 's/\x{2014}/, /g' <files>

   Review each replacement site afterward; a bare mechanical swap can leave odd spacing or grammar, so fix those by hand.

2. Verification pass. Count remaining instances and confirm zero:

   grep -rnP "\x{2014}" . --include='*' | wc -l

   Run it against all tracked text files, then confirm the count is zero.

## Output

- List every file changed.
- Confirm zero em dashes remain.
- If the count is not zero, list exactly where the remaining instances are (file and line) and why they were not removed.
- Note any commit messages on the working branch that contain em dashes.

Do not deploy.
