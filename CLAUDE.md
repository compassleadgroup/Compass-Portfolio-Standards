# CLAUDE.md, Compass-Portfolio-Standards

This repo is the single authoritative source for portfolio-wide rules (see README.md). COMPLIANCE_STANDARDS.md wins every conflict. Canonical rule files distribute to every site repo through the Standards Sync workflow; the manifests and the merge pipeline's canonical copy live in sync/.

Writing rules for every file, commit message, and PR in this org: no em dashes anywhere. Use commas, periods, parens, or "to".

## Autonomous merge pipeline

Every site repo runs merge-when-green (canonical copy: sync/merge-when-green.yml). Three gates: compliance greps, build, Claude compliance review. A PR that passes every gate merges itself. The Claude review is the merge authority; there is no manual merge category. The operator's only PR interaction is telling Claude Code to fix one that failed review.

- Canonicalization changes remain one site at a time, verified on the Cloudflare preview deployment before the PR is opened. The one-at-a-time rule is enforced by instruction, not by a human merge.
- New-site first-launch PRs get a PR description that includes the pre-launch checklist results from COMPLIANCE_STANDARDS.md so the review has full context.

## Failure loop

When the operator says fix PR N in any site repo: read the failed workflow output and the Claude review verdict on that PR, fix every listed reason in the same branch, push, and confirm the checks re-run. Do not open a new PR. Do not merge manually; the pipeline merges when green.
