# Compass Portfolio Standards

This repo is the sole authoritative source for all Compass rank and rent standards. Every site repo, every build prompt, and every saved command reads from the files in this repo. Nothing else is authoritative.

## The conflict rule

"If any other file in any repo conflicts with COMPLIANCE_STANDARDS.md, COMPLIANCE_STANDARDS.md wins."

That rule applies to legacy prompts, project briefs, per-site instruction files, and anything else, in any repo, without exception.

## What each file covers

| File | Covers |
| --- | --- |
| COMPLIANCE_STANDARDS.md | The master compliance rulebook. Entity truth, required disclosures, exact copy templates, forbidden claims, schema rules, change control. Single copy, authoritative. |
| BUILD_PLAYBOOK.md | Site architecture, URL conventions, tech stack, page templates, internal linking, content lanes, deploy policy, style rules. |
| FORBIDDEN_LANGUAGE.md | Quick reference banned word and claim list, extracted from COMPLIANCE_STANDARDS.md so commands can check one place. |
| SCHEMA_WHITELIST.md | The only schema.org types allowed on a pre-tenant site, and the types that are always banned pre-tenant. |
| VOICE.md | House voice reference: tone, sentence rhythm, banned filler, how the brand speaks. Keeps content distinct inside the neutral compliance gated voice. |
| TENANT_ACTIVATION.md | What changes on a site once a contractor is signed as a tenant. |
| CHANGELOG.md | Every standards change, dated. |
| reference/ | Supporting research, templates, and playbooks (closing playbook, CLAUDE template, SEO and citation references, niche research). Reference material, not standards. On any conflict, the root standards files win. |
| archive/ | Deprecated legacy files, kept for history only. Each carries a DEPRECATED header. Never use them in a build. |

## The compass-portfolio plugin

This repo also ships the compass-portfolio Claude Code plugin. The plugin installs six saved slash commands that are available portfolio wide:

| Command | Purpose |
| --- | --- |
| /new-site | Scaffold a complete new rank and rent site to standards, ready for operator review. |
| /new-page | Build one service page or city page in the house format. |
| /compliance-audit | Run the pre-launch checklist against a site and return pass or fail per item. |
| /gsc-analysis | Turn a Google Search Console export into a prioritized action list and a decision record. |
| /tenant-package | Generate the closing assets to pitch a contractor on a specific site. |
| /em-dash-check | Strip and verify zero em dashes across a repo. |

Each command reads the live files in this repo at run time, so standards changes flow through automatically without editing the commands.

To install:

```
/plugin marketplace add compassleadgroup/Compass-Portfolio-Standards
/plugin install compass-portfolio
```

## Operating rules for agents working in Compass repos

- Never merge and never deploy. Branch, commit, push, open a PR, and stop for operator review. This applies to every repo.
- No Wrangler. No Cloudflare Direct Upload. GitHub auto-build to Cloudflare Pages is the only deploy path.
- No em dashes anywhere: file content, code comments, commit messages, alt text.
