# CHANGELOG.md

Every standards change, dated. Newest first.

## 2026-07-15

Added the deterministic compliance checker as canonical CI tooling. No rule change.

- ci/compliance-check.mjs: zero-dependency Node checker for the mechanically detectable rules (forbidden schema, banned claim-language, first-person work claims, em dashes, required-element presence). Single source. Site repos consume it at CI time via .github/workflows/compliance.yml, which checks this repo out and runs the script against the site's src. Adapted from the operator's 2026-07-15 upload; first-person work claims promoted to hard fail and the pre-qualified and top-rated phrases broadened to match FORBIDDEN_LANGUAGE.md. Detail in ci/README.md.
- COMPLIANCE_STANDARDS.md, FORBIDDEN_LANGUAGE.md, and SCHEMA_WHITELIST.md are unchanged. This adds enforcement only. Rollout to the site repos is tracked in compass-kb.
- Schema-rule precision fix (same day, from the site rollout): the forbidden-schema checks now match an emitted quoted @type or property in either quote style, not the type name in a comment or a guardrail allow-list. Prevents false positives on the compliance guardrails some site templates carry (found on Marion and Iowa), and catches single-quoted emissions the first cut would have missed.

## 2026-07-11

Operator decision: the header disclosure strip stays (it is the primary holding-out and FTC net-impression defense) but gets shortened and visually minimized portfolio-wide.

- COMPLIANCE_STANDARDS.md, Required Page Elements: header strip copy template shortened to "A marketing service, not a licensed contractor. [SERVICE] work is performed by independent licensed local contractors." The "not a licensed contractor" phrase and the independent-contractor attribution are retained as the legally load-bearing elements. Style pinned to a minimal small-font bar: bg-gray-50, text-xs, text-gray-500, py-1 px-4, centered, always rendered, never hidden behind interaction.
- TENANT_ACTIVATION.md, Revision 1: pre-tenant and post-tenant strip copies updated to the shortened base. Post-tenant names the tenant and license number in the second sentence; the disclosure itself never comes off.
- Rollout to all 20 live sites tracked in compass-kb CHANGELOG, 2026-07-11.

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
