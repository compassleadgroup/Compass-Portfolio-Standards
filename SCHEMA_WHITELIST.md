# SCHEMA_WHITELIST.md

Version 1.0. Effective July 2, 2026.

The only schema.org types allowed on a Compass site, and the types that are always banned pre-tenant. On any conflict with COMPLIANCE_STANDARDS.md, COMPLIANCE_STANDARDS.md wins.

## Allowed (the complete list)

| Type | Use |
| --- | --- |
| Organization | The site brand, as a marketing organization. |
| ProfessionalService | The matching service itself. See the description rule below. |
| Service | Individual service pages. See the description rule below. |
| FAQPage | FAQ blocks, only where the questions and answers are visible on the page. |
| BreadcrumbList | Navigation breadcrumbs. |

Nothing outside this table ships on a pre-tenant site.

## Banned, always, pre-tenant

| Type | Why |
| --- | --- |
| LocalBusiness | The site is not a local business performing work. |
| Any contractor-specific category (Plumber, RoofingContractor, HomeAndConstructionBusiness, etc.) | Claims a trade the brand does not hold. |
| Review | No real first-party reviews exist pre-tenant. Fabricating them is a hard fail. |
| AggregateRating | Same as Review. |
| Rating | Same as Review. |

## The description rule

ProfessionalService and Service descriptions must say the business connects homeowners with licensed contractors. They must never say or imply the business performs the work.

Correct: "Free matching of homeowners with licensed foundation repair contractors in Tulsa."

Wrong: "Foundation repair services in Tulsa" (implies the brand performs the work).

## Other rules

- Schema must match the visible copy on the page. No schema-only claims, FAQs, or services.
- Post-tenant schema changes (for example a contractor entity) are governed by TENANT_ACTIVATION.md and still require operator review.
