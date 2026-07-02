# Programmatic Local SEO 2026 — Reference

## Core rules
- Helpful Content classifier is now in core, runs continuously, evaluates **site-level** not page-level. One bad batch of thin pages drags the whole domain.
- "Scaled content abuse" is a named spam policy as of March 2024. Doorway penalty is algorithmically enforced, not theoretical.
- Google does **not** detect AI content forensically. It detects thin/formulaic/unedited output via engagement + uniformity patterns.
- Sullivan quote, unchanged through 2025: "We focus on the quality of content, not how content is produced." Sullivan left Search Liaison role Aug 1, 2025.

## Page count thresholds (Sterling Sky / Joy Hawkins)
- <50 pages: safe
- 50–200: risky, quality-dependent
- 200+: expect index suppression unless each page has genuinely unique data
- Hawkins operator threshold: focus on **15–20 key service areas**, don't exceed **50–60 SAPs per site**

## Uniqueness budget per page
- Sterling Sky 80/20 rule: ~80% boilerplate OK, 10–20% unique per city
- **For new domains without authority: 30–40% unique per page** (Memorable Design 2026)
- Pure text-swap templates fail. Templates anchored to unique embedded maps + photos + reviews + named entities work.

## What got demolished 2024–2025
- **HouseFresh.com** — 90%+ traffic loss, HCU + March 2024 core
- **AZAnimals** — legit programmatic dragged down by layered AI affiliate content
- **Manning audit HVAC case** — 80% of doorway pages lost rankings, 63% traffic drop in 30 days post-March 2024
- **NationalToday.com /us/** — 850K AI-gen URLs, manual action "Scaled content abuse," entire directory deindexed (Gabe's "Mount AI")
- Mass SAB location-page deployments post-Oct 2022 spam update
- Sterling Sky's own client test: 200 AI-gen pages, "Google didn't penalize them — they just didn't index"

## AI content survival data (Lily Ray Substack, May 13, 2026)
- N = 220+ self-disclosed AI-content domains, Ahrefs + Sistrix
- **54% lost ≥30% peak traffic**
- **39% lost ≥50%**
- **22% lost ≥75%**
- Pattern: 6–12 month growth → 3–6 month peak → steep decline below baseline
- Mount AI (Glenn Gabe): symmetric crash after AI surge

## AI workflow that survives
- AI as draft + human editing layer adding first-party data, photos, named author, locally verifiable detail
- Sterling Sky reword prompt: "Reword all this content and replace all instances of 'City 1' with 'City.' Make sure it's written in the same language style, tone, and reading level."
- 17% of top 20 SERPs are AI-gen (Maintouch, Sept 2025) — but only when edited + with first-party data
- Per-page human time: 20–40 min adding intro/conclusion rewrite, 1–2 paragraphs local context, 1–3 real photos, GBP embed, one project-specific case
- Originality.ai check target: <50% AI score (sanity check, not goal)

## Whitespark 2026 Local Ranking Factors (Darren Shaw, Nov 6, 2025, n=47 experts, 187 factors)
Local Pack / Maps weights:
- GBP signals: **32%**
- Reviews: **20%**
- On-page: **15%**
- Behavioral: **9%**
- Links: **8%**
- Citations: **6%** (down from 11% in 2020)
- Personalization: **6%**
- Social: **4%**

Operator implication: GBP + reviews = ~half your ranking story. Citations declining every cycle — don't buy beyond core 30–50 directories. AI Search Visibility added as new category in 2026.

## Address handling for SABs
- Sterling Sky 8,186-business "near me" study (2025): hiding GBP address is **negatively correlated** with rankings
- **Getting a real local address is highest-ROI single move** for rank-and-rent
- Never invent — GBP video verification tightened 2024–2025, suspensions immediate
- If no address: use `areaServed` in schema, omit `streetAddress`, include `geo` coordinates

## Surviving page anatomy (service+city)

| Section | Words | Notes |
|---|---|---|
| H1 + intro | 60–120 | Service + city + local anchor |
| Embedded GBP map | — | With pin, not just address |
| Service explanation | 200–300 | Boilerplate OK |
| "Why [city] needs this" | 200–300 | **Unique per page** — soil, weather, neighborhoods |
| Project case table | 100–200 | 3–5 rows, real/anonymized real |
| Process/pricing | 150–250 | Boilerplate OK |
| Photos | — | 2–4 with descriptive alt |
| Reviews | 200–300 | Pulled from GBP, neighborhood-tagged |
| Neighborhoods served | 100–200 | 10–25 named |
| FAQs + FAQPage schema | 200–400 | 3–5 Q&As, 40–80 words each, unique per page |
| NAP + CTA | 50–100 | Click-to-call |

## Word count benchmarks
- City SAP (no service modifier): 600–1,200 words, most ranking land 700–900
- Service+city: 900–1,500 words, competitive set ~1,200
- City hub pages: 1,200–2,000

## Uniqueness signals Google actually measures (strongest evidence first)
1. Entity uniqueness — neighborhoods, landmarks, soil/weather, local schools
2. Embedded local proof — GBP map pin, real photos, location-specific data
3. Engagement signals — dwell time, pogo-sticking (Navboost)
4. E-E-A-T with emphasis on Experience — real photos with people, named technicians, visible licensing
5. Internal linking density (Zapier pattern)
6. Content depth where competitors are thin

## Schema baseline
- Use `ProfessionalService` over generic `LocalBusiness`
- `Service` schema on each service page
- `FAQPage` schema only where Q&As visible on-page (mismatch = spammy structured data filter, sharper post-Feb 2026 core)
- Never `Review` schema on self-displayed testimonials — review abuse policy
- `aggregateRating` only from verified third-party
- Vary `areaServed` per page

## Velocity for new domain
- Weeks 1–2: 8–12 core pages by hand, GBP verified, 3–5 starter reviews
- Weeks 3–6: launch 8–12 pages, sitemap, 10–15 citations
- Months 2–4: 2–4 service-city pages/week, hit 30–40 page inventory
- Months 4–6: pause new pages, refresh + photos + reviews, 1–2 quality backlinks/month
- Month 6+: expand only into suburbs already getting impressions

## Sandbox expectations 2026 (commercial home-services)
- Days 0–30: indexed, ranks page 5–10
- Months 2–3: longtail begins
- Months 3–6: primary city+service to page 1–2
- Months 6–9: competitive head terms appear
- Months 9–12: ranking maturity
- Plan **4–6 months minimum** before meaningful traffic in competitive metros

## Programmatic patterns that work (big operator → small adaptation)
- **Zapier** (70K pages): each page = real different SaaS combo + unique Zaps + dense internal links → for SAB, treat service×city matrix as a structured product, not docs
- **Tripadvisor**: real UGC = moat → push every customer to GBP review immediately, surface on city pages
- **NerdWallet/Wise**: live data → use your real job pricing data, not industry averages
- **Yelp/Angi**: UGC → even 1–2 named neighborhood-tagged quotes per page differentiates

## AI content failure patterns specific to local SEO
- Identical-structure city pages with only city name changed
- Hallucinated neighborhoods, landmarks, demographics
- AI-fabricated reviews (classifiers detect, AI search excludes)
- FAQ schema with answers not visible on page
- Pages with zero entities specific to targeted city

## Tells that something needs to change
- Page-level indexing <70% after month 3 → pages too thin/similar, rewrite worst 20%
- >30% traffic drop within 2 weeks of core/spam update → audit for scaled-content patterns immediately, consolidate or 410 weakest pages
- HCU-class recovery typically takes 12+ months and is not guaranteed

## Sources (credible, ranked by weight)
1. **Glenn Gabe — GSQi**
   - https://www.gsqi.com/marketing-blog/google-december-2024-spam-update-case-studies/
   - https://www.gsqi.com/marketing-blog/when-mt-ai-crumbles-chatgpt-follows/
2. **Lily Ray — Substack / Amsive**
   - https://lilyraynyc.substack.com/p/it-works-until-it-doesnt-ai-content-risks (May 13, 2026, 220+ site dataset)
   - https://seobymarta.com/blog/the-human-signal-in-seo-interview-with-lily-ray/
3. **Sterling Sky / Joy Hawkins**
   - https://www.sterlingsky.ca/stop-1000-hours-on-service-area-pages/
   - https://www.sterlingsky.ca/danger-of-ai-generated-service-area-pages/
   - https://www.sterlingsky.ca/what-gets-you-ranking-for-near-me-2025/ (8,186 business study)
   - https://www.sterlingsky.ca/service-area-pages-duplicate-content/
   - https://www.sterlingsky.ca/the-state-of-local-seo-in-2026/
4. **Whitespark / Darren Shaw 2026 Ranking Factors**
   - https://whitespark.ca/local-search-ranking-factors/
   - https://www.advicelocal.com/blog/2026-local-search-ranking-factors-maps-organic-ai/
   - https://streetfightmag.com/2025/11/13/streets-ahead-whitespark-local-ranking-factors-and-local-lists-in-gbp/
5. **Search Engine Land / Roundtable**
   - https://searchengineland.com/location-pages-google-october-spam-update-390016
   - https://searchengineland.com/danny-sullivan-no-longer-the-google-search-liaison-459864
   - https://www.seroundtable.com/google-city-landing-pages-doorway-pages-28670.html
6. **Near Media / Hawkins + Shaw podcast**
   - https://www.nearmedia.co/ep-166-how-local-seos-are-using-gen-ai-chatgpt-tips-tactics-strategies-w-darren-shaw-joy-hawkins-from-the-vault/
7. **Programmatic operator analyses**
   - https://www.viewengine.ai/learn/zapier-programmatic-seo-strategy-millions-organic-traffic
   - https://buildd.co/marketing/zapier-seo-strategy
   - https://www.sheldonsletter.com/p/zapier-programmatic-seo-strategy
8. **Practitioner posts on 2026 state**
   - https://www.maintouch.com/blogs/does-google-penalize-ai-generated-content
   - https://memorable.design/programmatic-seo-2026/
   - https://www.digitalapplied.com/blog/programmatic-seo-after-march-2026-surviving-scaled-content-ban
   - https://zumeirah.com/local-business-schema-markup-2026-ultimate-guide/

## Caveats
- Most "2026 SEO" listicles are themselves AI-gen agency marketing. Weight only the named-author sources above.
- Whitespark weights = 47-expert survey consensus, not measured truth — directional prior, not fact.
- Lily Ray's 220-site dataset has selection bias (publicly disclosed AI users). Quietly successful AI sites may differ.
- "Sandbox" never officially confirmed by Google; DOJ leaked docs (Feb 2025) reference domain-age/trust signals.
- Word count benchmarks are practitioner heuristics, not Google-confirmed thresholds.
- Rank-and-rent itself is gray-area on GBP (fake addresses, shared phones). Use real attributable identity.
