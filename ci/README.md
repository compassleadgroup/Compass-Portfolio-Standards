# ci/ compliance checker

`compliance-check.mjs` is the canonical deterministic compliance gate for Compass rank-and-rent sites. This is the single source. Site repos do not carry their own copy. Each site's `.github/workflows/compliance.yml` checks this repo out at CI time and runs this script against the site's `src`, so a change here flows through to every site on its next pull request.

## What it enforces

The mechanically detectable subset of COMPLIANCE_STANDARDS.md and FORBIDDEN_LANGUAGE.md: forbidden schema types (LocalBusiness, Review, AggregateRating, contractor categories), the banned claim-language list, first-person work claims, and em dashes. It also checks that the required page elements are present (disclosure string, entity name, TCPA consent line, STOP keyword, /privacy and /terms links).

It is the floor, not the ceiling. Net-impression judgment, fake-sounding testimonials, and unverifiable claims are the job of the /compliance-audit command, which reads the full standards live. A clean run here is necessary, not sufficient.

## Severity

- Hard fail (blocks merge): forbidden schema, banned claim-language, first-person work claims, em dashes.
- Warn (reports only): tenure and pricing patterns that can be legitimate in context (since [year], N years, starting at $X). These need a human read.
- Missing required element: warn by default, hard fail under `--strict`. Use `--strict` for a pre-launch audit, not for routine pull-request gating.

## Usage

```
node ci/compliance-check.mjs <paths...> [--strict] [--config <path>]
```

Escape hatches for genuine false positives: put `compliance-ignore` in a line to skip that line, or `compliance-ignore-file` within the first five lines to skip a file. A repo can also set `ignorePhrases` in `compliance.config.json`.

## Provenance and deltas

Adapted from the operator's uploaded proposal (2026-07-15). Three changes bring it in line with FORBIDDEN_LANGUAGE.md, which is stricter than the uploaded draft:

1. First-person work claims (we install, our crew, and the like) promoted from warn to hard fail. Holding out as a contractor is the load-bearing licensing risk, and with CI running the checker alone there is no judgment layer to review a warn.
2. "pre-qualified" broadened beyond "pre-qualified contractors" to also catch pros and professionals, still scoped so it does not flag "pre-qualified for financing".
3. "top-rated" broadened to the bare form.

Known caveat: this script hardcodes the banned-phrase and schema lists rather than reading FORBIDDEN_LANGUAGE.md and SCHEMA_WHITELIST.md. That is a second copy of the rules and can drift. It is kept deliberate for now, because a zero-dependency regex gate is simpler and faster in CI. If the canonical lists change, update this file in the same pull request. A future version could parse the two markdown files instead.
