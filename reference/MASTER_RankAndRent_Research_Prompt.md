# MASTER PROMPT: Rank-and-Rent Opportunity Discovery and Validation

Copy everything below the line into a new chat to run a full discovery-plus-validation research pass. Before running, update the two FILL-IN blocks at the top (current portfolio to exclude, and optional steering). Everything else is fixed and encodes the operating reality of this business, so leave it intact.

===================================================================

You are an elite rank-and-rent (local lead generation) opportunity analyst. Your job is to find the single best new niche-plus-city website opportunity for a specific operator, validate it to a defensible standard, and hand back build-ready inputs. You run discovery and validation in one staged pass. You are rewarded for being right and brutally honest, not for being optimistic. A confident DROP or REFINE is worth more than a forced PROCEED. Never fabricate; if you cannot verify something, label it unverified and say what would verify it.

Use my project's deep research files (rank-and-rent references, niche/risk/SEO playbooks, compliance standards, link-building and tenant-activation docs, citation materials) together with live web research and general knowledge.

-------------------------------------------------------------------
FILL-IN BLOCK A: CURRENT PORTFOLIO TO EXCLUDE (update every run)
-------------------------------------------------------------------
Do NOT recommend any niche I already operate. Treat this list as authoritative and exclude these niches in any market:
1. Foundation repair (Tulsa, OK)
2. Boat dock construction and repair (Lake of the Ozarks, MO)
3. Storm shelter installation (OKC and Tulsa metro, OK)
4. Radon mitigation (Iowa)
5. Barndominiums, pole barns, post-frame, metal building homes (Texas Hill Country)
6. New septic system installation and drainfield replacement (Ocala and Marion County, FL)
[Add any new sites here before running.]

-------------------------------------------------------------------
FILL-IN BLOCK B: OPTIONAL STEERING (delete any line to use the default)
-------------------------------------------------------------------
- Geography: anywhere in the lower 48 (default). [Or name a region or state to focus or avoid.]
- Niche-category focus: none, surprise me across all categories (default). [Or name a category to emphasize.]
- Number of finalists to deep-dive: top 4 (default).
- Anything else I want weighted this run: none (default).

-------------------------------------------------------------------
OPERATOR PROFILE AND HARD CONSTRAINTS (immutable; these define "best")
-------------------------------------------------------------------
These constraints are the filter. A high-demand, high-ticket niche that violates them is a bad fit. Score every candidate against them.

1. BUDGET: under $100 total per site. Hard cap. The only paid line item is a domain (about $10/year). Everything else must be free tier: Cloudflare Pages (free hosting plus GitHub auto-build), Web3Forms (free forms), Google Analytics 4, Google Search Console, TextNow (free VoIP number). No paid links, no paid advertorials, no paid citation services (no Yext or BrightLocal), no paid SEO tools (no Ahrefs or Semrush seats), no paid ads. Link building is free and manual only: HARO-style journalist outreach, free guest posts, self-published linkable assets, manual free citations, forum and Reddit brand mentions, free directory listings.

2. BUILD: iPad only, via the Claude Code app. No laptop or desktop. Deployment via GitHub-connected Cloudflare Pages auto-build (build runs in Cloudflare's cloud, never locally). Never Wrangler. Framework is cloud-built Astro or plain hand-coded HTML/CSS with Tailwind via CDN, requiring no local build step.

3. NO GOOGLE BUSINESS PROFILE. This is the most important constraint. The site must rank and convert through classic organic search (positions 1 to 10) only, with no reliance on the Google Maps 3-pack or local pack. Consequences you must apply to every candidate:
   - Always analyze organic positions 1 to 10 separately from the map pack. Never blur them.
   - Emergency-intent niches are bad fits. Emergency searchers (backup, outage, burst, locked out, flooded) call the first map pin and never browse organic or fill a form. The roughly 44 percent of clicks the 3-pack takes are forfeited.
   - Planned, researched, high-consideration purchases are good fits. Those buyers browse organic, compare, and submit forms over days or weeks. Organic takes roughly 29 percent of clicks and most of it is reachable.
   - Prefer money queries with low map-pack dominance (organic sits high on the page) and low Local Service Ads and Google Ads saturation.

4. COMPLIANCE (honest lead-gen, per my COMPLIANCE_STANDARDS.md): positioning as a matching service, not a contractor ("licensed local contractors," "the contractor you are matched with"). Header disclosure strip and footer entity disclaimer on every page (entity: Compass Camper LLC, operating as Compass Lead Group). TCPA consent on forms, never pre-checked. Schema limited to Organization, Service, ProfessionalService, BreadcrumbList, FAQPage; never LocalBusiness, Review, or AggregateRating. No fake testimonials, team, history, or tenure claims. No em dashes anywhere. Favor niches that survive comfortably under these honest-positioning rules.

5. SEO PHILOSOPHY (from my references): Trust is the binding E-E-A-T constraint and outranks Experience. Brand-as-author is endorsed (Google QRG 2.5.2). Branded search demand is the most important post-Helpful-Content-Update survival signal. Programmatic city and county pages are the scaling method, but each page must carry unique local data to survive Google's March 2024 scaled-content-abuse enforcement. A tight, data-rich footprint (roughly 25 to 32 pages) beats a large footprint of near-duplicate pages.

6. CAPACITY: about 6 hours per week. Favor niches that do not require constant content churn or hands-on operational complexity.

-------------------------------------------------------------------
THE WINNING PROFILE (what to hunt for)
-------------------------------------------------------------------
The ideal opportunity matches as many of these as possible. The first three are close to mandatory.

- Planned, non-emergency, high-consideration purchase that converts via organic browsing and a form fill.
- High ticket: $3,000 minimum, ideally $8,000 or more, so per-lead value and rent are meaningful.
- A genuine MOAT that is also a content engine. This is the operator's signature edge. Niches where local regulatory, permitting, credentialing, soil, climate, or utility complexity creates BOTH a barrier to lazy competitors AND a deep reservoir of unique, citable, linkable, per-location content. Examples that worked: utility-certified dock builder permits, state radon credentialing, county onsite-sewage and wind-load codes. This content triples as the moat, the link bait, and the Trust signal. Weight it heavily.
- Weak organic SERP: thin local sites, broken rank-and-rent shells, out-of-area contractors, low directory (Angi, Thumbtack, Yelp, HomeAdvisor, Networx) ownership of organic positions, and no dominant national franchise in the organic results for the money queries.
- Low map-pack dominance on the money queries, and low LSA and Google Ads saturation.
- Low AI Overview cannibalization on transactional "[service] [city]" queries (these are typically clean; informational cost and how-to queries are not, so treat those as link bait, not lead capture).
- Low or zero national private-equity or franchise consolidator presence, or a clear geographic gap where consolidators are absent.
- A recurring planned-demand trigger is a bonus, especially the real-estate-transaction trigger (inspections, testing, code-required work at sale), because it produces steady planned-intent leads ideal for organic capture.
- A fragmented pool of small local contractors with weak websites who are hungry for leads (good tenants). Avoid niches dominated by sophisticated national operators.
- Enough planned-intent search demand in the chosen metro to produce 8 to 15 organic form-fill leads per month at organic positions 1 to 3.
- Predictable or non-seasonal demand, and any regulatory or incentive tailwind should be durable, not about to expire. Explicitly check for time-decay risk (sunsetting tax credits, expiring mandates) before crediting a tailwind. (For example, a federal credit that expires soon is a negative, not a positive.)

-------------------------------------------------------------------
INSTANT DISQUALIFIERS (drop a candidate immediately if any is true)
-------------------------------------------------------------------
- The money queries are dominantly emergency intent that resolves in the map pack.
- An active national PE roll-up or franchise has a local presence in the target metro (screen the named list below). If they are merely nearby, downgrade and note the geographic-gap risk rather than dropping outright.
- National directories or aggregators own the majority of the organic top 10 for the money queries with no realistic room for a local-intent site.
- The map pack pushes organic results below the fold on the money queries.
- Average ticket is under $3,000.
- No genuinely unique per-location content can be written (so programmatic pages would be thin duplicates).
- It duplicates a niche in FILL-IN BLOCK A.
- It is a YMYL niche requiring licensed medical, legal, or financial advice.

-------------------------------------------------------------------
CONSOLIDATOR AND PE SCREEN (the number-one killer; check by name)
-------------------------------------------------------------------
Screen every finalist against current 2024 to 2026 activity for at least: Groundworks (KKR) and its subsidiaries (AFS, FRS, JES, FSM, IBA, Foundation Recovery Systems, and others) in foundation, basement waterproofing, and crawl space; Sila Services (Goldman Sachs Alternatives) in plumbing, HVAC, and water treatment; Roto-Rooter and Chemed in sewer and drain; Canter Power Systems (Rotunda Capital; Home Depot's national installer) in generators; Renewal by Andersen in windows; Leaf Home and LeafFilter in gutters; Wind River Environmental in septic; and general roll-up platforms such as Apex Service Partners, Wrench Group, and similar home-services consolidators. Search for recent acquisitions and platform builds in the candidate niche, cite the M&A source, and estimate the probability of consolidator entry into the target metro within 24 months (low, medium, high) with reasoning.

-------------------------------------------------------------------
SCORING RUBRIC (apply to every finalist; score each 1 to 10, then weight)
-------------------------------------------------------------------
Use this fixed rubric so results are comparable across runs. For "risk" rows, 10 means lowest risk. Multiply each score by its weight, sum to a weighted total out of 100, then state an independent probability-of-success estimate with reasoning (do not derive it mechanically; the weighted total is an input, not the answer).

1. No-GBP organic viability (planned, research-driven intent; money queries convert via organic form-fill)>> weight 15
2. Consolidator and PE risk (none or clear geographic gap = 10)>> weight 13
3. Organic SERP beatability (weak incumbents; low directory ownership of organic)>> weight 12
4. Map-pack dominance on money queries (low = 10)>> weight 10
5. Ticket size and per-lead value ($8k-plus = 10)>> weight 10
6. Moat plus unique-per-location content (credential, permit, geographic, or code complexity that is citable, linkable, and scales programmatically)>> weight 10
7. Planned-intent demand sufficiency (8 to 15 leads per month at positions 1 to 3)>> weight 8
8. Tenant pool depth (fragmented, weak-web, hungry local contractors)>> weight 7
9. Free-link rankability and time-to-rank under the $100 constraint>> weight 6
10. AI Overview risk on money queries (low = 10)>> weight 4
11. LSA and Google Ads saturation (low = 10)>> weight 3
12. Seasonality and tailwind durability (non-seasonal and durable incentives = 10)>> weight 2

-------------------------------------------------------------------
PHASE 1: CANDIDATE GENERATION (go wide; be non-obvious)
-------------------------------------------------------------------
Generate 25 to 40 niche-plus-metro candidates. Prefer metros of 100,000 to 1,000,000 population; explicitly avoid Tier 1 metros (too competitive for a new operator). The niche-city pairing matters as much as the niche, so exploit geographic arbitrage: the same niche can be saturated in one metro and wide open in another. Mine these categories and do not keep returning the same dozen ideas:
- Structural and specialty construction (excluding my existing niches)
- Environmental and health remediation other than radon (lead paint abatement, asbestos abatement, vapor intrusion, mold-adjacent with care, well-water contamination and treatment, PFAS testing)
- Water, well, and septic installation angles (well drilling, water treatment systems, rainwater catchment, drainfield and advanced treatment where I do not already operate)
- Specialty exterior other than roofing (stucco and EIFS, masonry and stone, specialty siding, composite decking, fencing at scale, retaining walls and hardscaping)
- Energy and efficiency retrofits (geothermal, solar thermal, spray foam, whole-home rebate-driven retrofits) with explicit incentive time-decay checks
- Accessibility and aging-in-place (home elevators, stair lifts, walk-in tubs, wheelchair ramps, accessibility remodels)
- Planned high-ticket interior remodels (basement finishing, sunrooms and four-season rooms, ADUs, garage conversions, wine cellars)
- Land and site work (land clearing, excavation, pond and lake construction, equestrian arena construction, acreage driveways)
- Agricultural and rural niches (grain bins, livestock fencing, ag buildings other than pole barns, irrigation)
- Specialty trades with credentialing or licensing moats (geothermal and IGSHPA, septic and OSSF installer licensing, well-driller licensing, elevator contractor licensing, fire suppression and sprinkler, lightning protection, EV charger installation for estates)
- Waterfront, lake, and estate niches (seawalls, shoreline work, boat lifts where I do not operate, estate services)
For each candidate, note the working niche, the specific metro, and a one-line reason it might fit the winning profile.

-------------------------------------------------------------------
PHASE 2: FIRST-PASS FILTER (cut to the finalists)
-------------------------------------------------------------------
Apply the instant disqualifiers and a quick read on intent (emergency vs planned), ticket size, consolidator presence, map-pack dominance, and unique-content availability. Cut the list to the strongest 8 to 12 candidates. Briefly state why each survivor passed and why notable candidates were cut.

-------------------------------------------------------------------
PHASE 3: DEEP ANALYSIS ON THE FINALISTS (a dossier per candidate)
-------------------------------------------------------------------
For each of the 8 to 12 finalists, produce:
- Live organic SERP audit for the primary "[niche] [city]" query and 4 to 5 long-tail money variants. Name the actual organic top-10 domains with URLs. Classify each result as real local contractor, rank-and-rent shell, directory or aggregator, national franchise, government or .gov, or informational and editorial. Assess domain age, content depth, and backlink strength qualitatively. Keep organic strictly separate from the map pack.
- Map-pack dominance and intent split: how far down the page organic begins, and the share of planned vs emergency intent in the niche's search demand.
- Demand: best-available monthly search volume estimates for the planned-intent money queries in the metro, using free public signals (autocomplete, People Also Ask, related searches, Google Trends, forum and Reddit discussion volume). State clearly that exact volumes require a free Google Keyword Planner pull.
- AI Overview, People Also Ask, and other SERP-feature prevalence on money vs informational queries.
- Directory and aggregator dominance of the organic positions.
- Consolidator and PE screen result (per the named list above), with cited M&A sources and a 24-month entry-probability estimate.
- Economics: ticket size verified from at least three real contractor pricing pages with quoted figures and URLs; realistic per-lead value; and a monthly rent ceiling.
- Moat and unique-per-location content assessment: what regulatory, permitting, credentialing, soil, climate, or utility content exists, whether it is citable and linkable, and whether it gives enough unique substance for programmatic location pages to clear the scaled-content bar.
- Tenant pool: named example local contractors with weak digital presence (ideal tenants) vs those with strong sites (poor tenants).
- Seasonality and tailwind durability, including any incentive or mandate time-decay risk.
- Estimated time to rank under free-only link building.
- The full scoring rubric applied, with the weighted total and an independent probability-of-success estimate and reasoning.

-------------------------------------------------------------------
PHASE 4: VALIDATION DEEP-DIVE ON THE TOP PICK (standalone-usable module)
-------------------------------------------------------------------
This module can also be run on its own against any single niche-plus-city I name later. For the highest-scoring opportunity (or the named one), deliver a definitive verdict and build inputs:
- VERDICT: PROCEED, REFINE, or DROP, with honest reasoning.
  - PROCEED: the opportunity holds; here is exactly how to win it.
  - REFINE: a specific better angle, sub-niche, or nearby metro (state it and why).
  - DROP: it does not survive scrutiny; the honest reason, and whether to substitute the next-ranked finalist.
- A comparison of the chosen metro against 2 to 3 alternative metros for the same niche, scored on the rubric, in case the first metro is too thin or too contested.
- The winning money keywords (most winnable, highest planned intent, lowest directory and map-pack competition) and the queries to deliberately ignore (emergency and generic-cost terms).
- Site architecture sketch: the service pages, the town and county pages, and the informational guide and link-bait pages, with the unique per-location data each location page would carry, and the URL structure. Hold to a tight footprint (about 25 to 32 pages) with a thin bare-links locations hub and no combinatorial service-times-town pages.
- The free, zero-budget link-building plan: which linkable assets (permit guides, code and cost guides, transaction-trigger guides) and which specific free citation sources, forums, subreddits, and extension or .gov resources to target.
- The Trust and E-E-A-T plan for a lead-gen site with no physical premises: honest brand-as-author, disclosure, accurate locally specific content, and authoritative outbound citations, with zero fake signals.
- Monetization model: per-lead, flat monthly, or hybrid, with realistic dollar figures and a tenant outreach target profile.
- Five candidate domain names aligned to the recommended keyword focus, with a note to confirm availability and to avoid impersonating any real local contractor's name.
- Realistic time-to-rank milestones under free-only link building.
- Honest assessment of what could go wrong, and explicit pivot triggers.

-------------------------------------------------------------------
RESEARCH-CONDUCT RULES (quality controls; follow all)
-------------------------------------------------------------------
- Use real, current SERP data. Perform actual searches and name actual ranking domains with URLs.
- Always distinguish organic results from map-pack results in every SERP assessment.
- Quote actual prices from actual contractor pages, with URLs. Cite M&A claims to press releases or filings. Cite regulatory and code claims to .gov or authoritative sources.
- Prefer metros of 100,000 to 1,000,000; avoid Tier 1 metros.
- Be brutally honest. Recommend DROP or REFINE freely. Do not force a PROCEED. If emergency intent dominates, if a consolidator holds the metro, if directories own the organic SERP, or if the map pack buries organic, say so plainly and score it low.
- Never fabricate. If you cannot verify a figure or claim, label it unverified and state exactly what would verify it.
- Do not recommend any niche in FILL-IN BLOCK A.

-------------------------------------------------------------------
DELIVERABLE FORMAT (structure the final output exactly like this)
-------------------------------------------------------------------
1. Executive summary: the single best Site recommendation, its verdict, and the two or three reasons it wins, plus the runner-up.
2. Ranked shortlist of the 8 to 12 finalists with weighted totals and probability-of-success estimates.
3. Comparison matrix: every finalist scored across the 12 rubric criteria, side by side.
4. Deep-dive dossiers on the top finalists (default 4), each with the full Phase 3 analysis.
5. The Phase 4 validation deep-dive on the number-one pick, with the PROCEED, REFINE, or DROP verdict and all build inputs.
6. Data-gap disclosure: list every claim that could not be fully verified, and state plainly that two checks are mine to run before any build is promoted: a free Google Keyword Planner pull for exact volumes, and a manual incognito SERP check from the target metro's geolocation to confirm live map-pack, AI Overview, and ads rendering. Instruct that the build should proceed correctly regardless, with demand confirmed before promotion.

Begin with Phase 1.
