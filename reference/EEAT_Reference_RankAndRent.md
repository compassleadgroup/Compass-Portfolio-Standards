# EEAT Reference: Honest Rank-and-Rent Home Service Sites

**Context:** Operator = Compass Camper LLC (Oregon). Sites = single-niche lead-gen in cities operator doesn't live in. No fake testimonials, bios, history, or licenses. Goal = rank without lying.

---

## The Binding Constraints (in priority order)

1. **Trust > Experience.** QRG Sept 11, 2025: "untrustworthy pages have low E-E-A-T no matter how Experienced, Expert, or Authoritative they may seem." For commercial-intent local queries, raters care about business legitimacy and clear ownership, not whether operator personally did the trade work.
2. **§4.5.3 = the only auto-Lowest tripwire.** Fake author bios, AI headshots, fake "brick-and-mortar" claims, fabricated credentials = automatic Lowest rating.
3. **§4.5.1.** YMYL-adjacent pages with no info about who's responsible = Lowest. Foundation/roofing/insulation are YMYL-adjacent (financial + safety stakes).
4. **§2.5.2 endorses brand-as-author verbatim:** "The website itself can be viewed as the primary content creator." Named human bylines are not required.

## The Honest Pattern That Works (2024-2026)

Used by My Foundation Repairs, Downers Grove Roofing, Roofing.Company, Burlington Foundation Repair Service:

- Clear LLC ownership disclosure on Home/About/footer
- "We are a marketing service connecting homeowners with vetted licensed contractors" language, verbatim and consistent
- Brand-as-author on blog ("[Site] Editorial Team")
- Optional "Reviewed by [Licensed Partner, License #]" on YMYL pieces
- **Organization + Service schema** (NOT LocalBusiness, that implies physical presence you don't have, crosses into §4.5.3 deceptive territory)
- Service schema: provider = the LLC, areaServed = target city
- GBP for the LLC at its REAL address (Oregon), classified as marketing service. **No fake GBP in target city.**
- Authority borrowing: cite ICC codes, state licensing boards, ASCE, USGS soil maps, manufacturer engineering docs
- Editorial Process page (medical/legal industry pattern)

## Failure Modes That Get You Killed

- Fake GBPs in cities you don't operate in → **Google v. Hu/Rafadigital/GMBEye, N.D. Cal. 2023** (Lanham Act §15 USC §1125(a)(1)(b) + CA Bus & Prof §17200). Federal lawsuit territory.
- Mass AI content with no original value → **scaled content abuse**, March 2024 spam policy
- Fake bios / AI headshots / "since 1987" → §4.5.3 Lowest
- Aged-domain repurposing → **expired domain abuse**, March 2024 spam policy
- Doorway city pages (identical content, city name swapped) → core update target
- Fake reviews → Lanham Act + FTC

Operator's stated ethics eliminate all of these except scaled content abuse and doorway pages (both = content discipline issues, not model issues).

## Author Byline Decision Matrix

| Option | Use When |
|---|---|
| Brand-as-author (default) | Standard blog content, service pages. QRG §2.5.2 endorses. |
| "Reviewed by [Licensed Partner, License #]" | YMYL-adjacent how-tos, decision guides, cost guides |
| Hired freelance writer w/ honest bio | Informational content, when bio honestly states writer's actual role |
| Industry expert advisor on retainer | Pillar pages, high-authority content |
| No byline (date only) | Acceptable per QRG, no requirement for human byline |
| Fake persona | NEVER. §4.5.3 = auto-Lowest. |

## Brand Signals = The HCU Survival Factor

**Tom Capper, Moz Head of Search Science** ("The Helpful Content Update Was Not What You Think," ~1.9M US English keywords analyzed across HCU rollouts Sept 2023-Aug 2024): HCU losers averaged Brand Authority 37, winners/neutral 50-52. **High DA + low BA = "synthetic site" classifier flag.** Branded search demand matters more than backlinks for new lead-gen sites.

## Authority Build Priority (New Site)

1. Brand entity establishment: real LLC GBP at real address, LinkedIn company page, consistent NAP
2. HARO/Qwoted/Featured.com, quote as "[LLC], operator of [Site]"
3. Local citations with consistent NAP (the marketing entity, not a fake local biz)
4. Long-tail content depth nationals don't cover (neighborhood-specific soil, county permits, FEMA zones, local code)
5. Internal linking / topical clustering
6. Branded search seeding via PPC, social, Nextdoor

## Realistic Timeline

- Map pack in target city: **essentially unavailable** without verified physical address. Don't pursue.
- Non-map-pack organic for primary commercial terms: **4-9 months** with consistent execution
- Operator's home market (Oregon): faster, since you can have a real GBP

## Schema Decisions

- **Organization** schema for the LLC (sameAs LinkedIn, business filing URLs)
- **Service** schema with `provider` = LLC, `areaServed` = target city
- **NOT LocalBusiness** for the lead-gen site (implies physical presence = §4.5.3 deceptive)
- FAQPage, BreadcrumbList, Article standard rules apply
- Re-verify against schema.org and Google's structured-data guidance at launch

## Footer Disclosure Template (Verbatim)

> [Site Name] is a marketing service operated by [LLC Name] ([State]). We are not a licensed contractor and do not perform [niche] work. We connect [city]-area homeowners with vetted, licensed, and insured [niche] contractors in our partner network. All work is performed by independent contractors under their own licenses and insurance.

## Site Reputation Abuse (Nov 19, 2024 Expansion)

- Currently **manual action only**, not algorithmic yet (Barry Schwartz, Search Engine Roundtable, Nov 21, 2024)
- Targets multi-topic hosts publishing exploit content (Forbes Advisor, CNN Underscored, USA Today Reviewed got hit)
- **Does not apply to single-purpose lead-gen sites**, entire site is on-topic and first-party
- Watch for algorithmic rollout

## Conversion Benchmarks

- Lucky Orange 2025: most sites convert 1-4%
- Leadpages 2025: pro-services lead gen pages 5-15% with free consultation/strategy offer
- Disclosure model doesn't kill conversion (Modernize, Networx, Angi prove it). Lead with homeowner benefit on landing pages, full disclosure on About/footer/disclaimer.

---

## Primary Sources

- **Google Search Quality Rater Guidelines (Sept 11, 2025, 181 pages):** https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf (the operative document, NOT the 36-page overview)
- **Google March 2024 core update + spam policies:** https://developers.google.com/search/blog/2024/03/core-update-spam-policies
- **Google v. Hu / Rafadigital / GMBEye (N.D. Cal., June 16, 2023):** rank-and-rent fraud lawsuit, Lanham Act + CA §17200
  - SEJ: https://www.searchenginejournal.com/google-lawsuit-rank-and-rent/489666/
  - Bleeping Computer: https://www.bleepingcomputer.com/news/google/google-targets-fake-business-reviews-network-in-new-lawsuit/
- **Site Reputation Abuse policy expansion (Nov 19, 2024):**
  - Search Engine Land: https://searchengineland.com/google-site-reputation-abuse-policy-now-includes-first-party-involvement-or-oversight-of-content-448432
  - Search Engine Roundtable: https://www.seroundtable.com/google-site-reputation-abuse-policy-expanded-38438.html
- **Tom Capper, Moz HCU analysis:** "The Helpful Content Update Was Not What You Think" (moz.com/blog)
  - Summary: https://ppc.land/googles-hcu-brand-signals-may-play-larger-role-than-expected/
  - Summary: https://thrivesearch.com/decoding-the-google-hcu-tom-cappers-insights/
- **Live honest-disclosure examples:**
  - My Foundation Repairs (ECP-owned manufacturer lead-gen): https://myfoundationrepairs.com/about-us/
  - Downers Grove Roofing (single-city rank-and-rent): downersgroveroofers.com
  - Roofing.Company (Web Dev Group Ltd. disclosed): https://roofing.company/disclaimer/
  - Burlington Foundation Repair Service: https://burlingtonfoundationrepairservice.com/contractor
- **Conversion benchmarks:**
  - Lucky Orange: https://www.luckyorange.com/blog/posts/good-conversion-rate
  - Leadpages: https://leadpages.com/conversion-optimization-guide/what-is-good-conversion-rate
