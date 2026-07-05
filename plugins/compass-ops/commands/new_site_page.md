---
description: Add a live site to the compass-kb knowledge base after it is built. Creates the site page in wiki/sites with domain, niche link, metro, moat, tenant status, phone setup, and demand-gate status. Writes to compass-kb via a PR. Use once a new site exists.
---

# /new-site-page

Record a newly built site in the knowledge base so every asset the operator owns is tracked in one place. This page is what the monthly health check and any future buyer read to understand the portfolio.

## Knowledge base location

The knowledge base is the separate repo `compassleadgroup/compass-kb`. This command writes there via a PR. It does not modify the site's own repo (the site's build rules come from this standards repo, not from the KB page). If compass-kb cannot be reached, say so and stop.

## Step 1: Gather the facts

Collect from the operator (ask only for what cannot be inferred):
- Domain.
- Niche and the matching niche page slug in compass-kb/wiki/niches/ (link them).
- Metro or service area.
- Launch date.
- Moat (pull from the niche page if it exists).
- Phone setup: TextNow placeholder (pre-tenant) or CallRail (once outreach starts), with the number if known.
- Whether the demand-validation gate is cleared: the operator's own KWP pull and geolocated incognito SERP check.

## Step 2: Write the page in the compass-kb site format

Use the site-page structure from compass-kb/CLAUDE.md. Required fields:
- Domain.
- Niche: link to the niche page.
- Metro / service area.
- Launch date.
- Moat.
- Tenant status: NONE / PROSPECTING / TRIAL / PAYING (with rent amount). Default NONE.
- Phone setup.
- GSC status: not yet set up (default for a new site, since GSC comes after the demand gate), or verified with latest striking-distance findings if a pull has run.
- Demand-validation gate: CLEARED or PENDING, with what is outstanding.
- Next action: singular and honest. For a fresh site with no data, "await demand-validation gate" is correct.

## Step 3: Keep the index current

If compass-kb/wiki/sites/ has an index or wiki/index.md lists sites, add this one.

## Step 4: Commit

Branch, plain commit message, push, open a PR against compass-kb. The operator merges. Never commit to main. Update compass-kb/CHANGELOG.md.

## Rules

- Tenant status is NONE unless the operator states otherwise. Never assume a tenant exists.
- Do not invent GSC numbers or a launch date; ask or mark unknown.
- Set next action to the true next gate, not aspirational sales steps, for a site with no traffic yet.
- No em dashes anywhere.
