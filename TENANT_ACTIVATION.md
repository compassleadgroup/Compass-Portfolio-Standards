# TENANT_ACTIVATION.md

Version 1.0. Effective July 2, 2026.

What changes on a site once a contractor is signed as a tenant. Until a signed agreement exists, every rule in COMPLIANCE_STANDARDS.md applies in full pre-tenant form. On any conflict with COMPLIANCE_STANDARDS.md, COMPLIANCE_STANDARDS.md wins.

Provenance note: the prior TENANT_ACTIVATION_PLAYBOOK.md was not reachable from the migration session, so this version was reconstructed from the Tier 0 handoff and current portfolio practice. Operator: verify against the prior copy, fold in anything missing, then remove this note.

## 1. Trigger

Activation starts only when all of these exist:

- A signed agreement with the contractor (rent terms, term length, exclusivity, lead cap if any).
- The contractor's legal business name, license number, and insurance confirmation.
- Payment method on file and first payment received or scheduled.

Record the tenant in the portfolio tracker (Tenant Contracts tab) before touching the site.

## 2. What changes on the site

All changes ship as a PR for operator review, like any other change. Never merge, never deploy.

### 2.1 Attribution

- The signed contractor can now be named as the service provider the site connects homeowners with.
- The contractor's real credentials (license number, certifications, insurance) may appear, attributed to the contractor by name, never to the brand and never to Compass Camper LLC.
- The header disclosure strip and footer disclaimer from COMPLIANCE_STANDARDS.md stay. The site remains a lead generation service operated by Compass Camper LLC.

### 2.2 Schema

- Pre-tenant bans on LocalBusiness, contractor categories, Review, AggregateRating, and Rating are pre-tenant bans. Post-tenant, a contractor entity may be introduced only if it describes the real signed contractor with their real NAP and license data, and only with operator approval per change.
- Reviews and ratings may appear only if they are real, verifiable reviews of the signed contractor, presented as the contractor's reviews. Fabricated or borrowed reviews remain a hard fail forever.

### 2.3 Lead routing

- Forms route to the tenant per the agreement.
- If call tracking is used, the tracked number forwards to the tenant and is recorded in the tracker.
- TCPA consent block stays on every form, unchanged.

## 3. What never changes

- Truth in content rules: no fabricated reviews, history, team, awards, or counters, tenant or not.
- Forbidden vetting language stays forbidden. A signed tenant is a business relationship, not a vetting claim.
- Deploy policy: GitHub auto-build to Cloudflare Pages only, no Wrangler, no Direct Upload, no merging or deploying without operator review.
- No em dashes.

## 4. Deactivation

If a tenant leaves or is terminated:

- Remove contractor-specific naming, credentials, schema, and reviews in a single PR.
- Return the site to full pre-tenant compliance form (this file, Section 2, reversed).
- Re-point lead routing and tracked numbers.
- Update the tracker.
