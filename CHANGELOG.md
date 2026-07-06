# CHANGELOG.md

Every standards change, dated. Newest first.

## 2026-07-06

Standards Sync workflow added. A push to main that changes a canonical rule file opens or updates a standards-sync PR in every site repo whose local copies differ. PRs only, the workflow never merges and never pushes to a site repo's main. No AI in the loop.

- .github/workflows/standards-sync.yml: the workflow. Triggers on pushes to main touching a synced file or a sync manifest, plus manual workflow_dispatch runs.
- sync/sites.txt: manifest of 16 site repos, actual org names. The 12 compass-kb wiki sites plus Central-PA-Radon-Pros, Minnesota-Radon-Pros, VT-Metal-Roofing, and CO-Springs-Radon-Pros (created 2026-07-05, not yet in the wiki).
- sync/files.txt: the four synced files: COMPLIANCE_STANDARDS.md, FORBIDDEN_LANGUAGE.md, SCHEMA_WHITELIST.md, BUILD_PLAYBOOK.md.
- sync/README.md: SYNC_TOKEN setup steps, new-site onboarding, test steps.
- Not runnable until the operator creates the SYNC_TOKEN repo secret (fine-grained personal access token, Contents and Pull requests read and write, scoped to the site repos plus this repo).

## 2026-07-02 (second entry, same day)

Operator supplied the original project files (compassprojectfiles.zip). Migration completed with the real originals.

- COMPLIANCE_STANDARDS.md: replaced the reconstructed draft with the original authoritative copy, unchanged (May 2026 version).
- BUILD_PLAYBOOK.md: replaced the reconstructed draft with the original RANK_AND_RENT_BUILD_PLAYBOOK.md content, unchanged.
- TENANT_ACTIVATION.md: replaced the reconstructed draft with the original TENANT_ACTIVATION_PLAYBOOK.md content, unchanged.
- archive/: MASTER_BUILD_PROMPT.md and PROJECT_BRIEF_TEMPLATE.md archived with the header "DEPRECATED. Superseded by compass-standards. Do not use."
- reference/: all remaining project files added for reference (closing playbook, CLAUDE template, SEO, citation, link building, niche, and risk references, citation trackers).

Known conflicts for operator decision (the Tier 0 handoff is newer than the migrated May 2026 documents):

1. Trailing slashes. BUILD_PLAYBOOK.md Section 1 says no trailing slashes. The Tier 0 standard and the /new-site command mandate trailingSlash 'always' with directory format builds. The commands follow the Tier 0 standard until the playbook is revised.
2. LocalBusiness schema. COMPLIANCE_STANDARDS.md's checklist allows a generic LocalBusiness or ProfessionalService type. The Tier 0 standard and SCHEMA_WHITELIST.md ban LocalBusiness entirely pre-tenant. The whitelist follows the Tier 0 standard until the master is revised.
3. Em dashes. The migrated originals contain em dash characters (mostly in headings and in the rule text that names the character). They were migrated unchanged per the handoff. A repo-wide /em-dash-check will flag them.

## 2026-07-02

Initial canonical standards repo created. Migrated compliance, build, tenant activation. Deprecated conflicting legacy files.

Detail:

- Created README.md, COMPLIANCE_STANDARDS.md, BUILD_PLAYBOOK.md, FORBIDDEN_LANGUAGE.md, SCHEMA_WHITELIST.md, VOICE.md, TENANT_ACTIVATION.md, CHANGELOG.md.
- Installed the compass-portfolio plugin with six commands: /new-site, /new-page, /compliance-audit, /gsc-analysis, /tenant-package, /em-dash-check.
- Migration caveat: the prior standalone copies of COMPLIANCE_STANDARDS.md, RANK_AND_RENT_BUILD_PLAYBOOK.md, and TENANT_ACTIVATION_PLAYBOOK.md were not reachable from the migration session (this repo started empty and the session had no access to the repos holding the originals). The canonical versions here were reconstructed from the Tier 0 handoff specification and carry provenance notes for operator verification.
- Legacy files MASTER_BUILD_PROMPT.md and PROJECT_BRIEF_TEMPLATE.md do not exist in this repo and could not be reached from the migration session. They are deprecated by policy (see README conflict rule). They still need to be archived or deleted in whichever repo holds them.
