# Rank-and-Rent Website Build Playbook (2026)

**Purpose.** This document is a build specification for rank-and-rent lead generation websites. It is given to an AI assistant editing or building a website. Treat every section as binding rules unless the operator overrides them in chat. The operator runs Compass Camper LLC (Oregon) and follows honest, compliant rank-and-rent practices: no fake reviews, no fake GBPs in cities the operator does not live in, no fabricated credentials, real LLC disclosure in the footer.

**Source of authority.** This playbook is synthesized from a 2026 teardown of 10 live rank-and-rent sites in Ippei Kanehara's portfolio (~150+ sites, 10+ years of operating history) plus 2026 SEO research on Google updates, AI Overviews, and local ranking factors. The playbook keeps what works in his system and strips out the parts that are technically against Google policy or that create reputational/legal exposure.

**Style rules for all content generated under this playbook.**
- No em dashes anywhere. Use commas, periods, parentheses, or "to" instead. Em dashes feel AI-generated.
- Numbers under 10 spelled out. 10 and above use digits.
- Currency formatted as $3,500 with no space after the dollar sign.
- Phone numbers formatted as (XXX) XXX-XXXX with `tel:+1XXXXXXXXXX` links.
- Service URL slugs lowercase with hyphens.
- Service names capitalized consistently across the site.

---

## SECTION 1: SITE ARCHITECTURE

### Target URL count on launch

Build to 25 to 45 URLs at launch, not 5 to 10. Thin sites do not rank in 2026. Sterling Sky's safe range is under 50 pages for new domains, scaling to 200 max. Stay in the 25 to 60 range for the first 12 months.

### Two-axis sitemap

Every site has two ranking axes: services and locations. Build out:

| Component | Count | URL pattern |
|---|---|---|
| Core pages | 4 to 6 | `/`, `/about`, `/contact`, `/services`, `/locations`, `/privacy`, `/terms` |
| Service pages | 12 to 25 | `/{service-slug}` |
| City pages | 8 to 20 | `/{city-slug}-{state-abbr}` (e.g., `/broken-arrow-ok`) |
| Neighborhood pages (optional) | 3 to 8 | `/neighborhoods/{neighborhood-slug}` |
| Blog posts (optional) | 0 to 15 | `/blog/{post-slug}` |
| Pillar content (optional) | 1 to 3 | `/{topic-pillar-slug}` |

### URL convention

- Flat structure. Service slugs at the root: `/water-damage-repair`, not `/services/water-damage-repair`. This is Ippei's pattern and it ranks.
- Lowercase, hyphenated.
- City pages use state abbreviation suffix: `/broken-arrow-ok`, `/jenks-ok`.
- No trailing slashes, no `.html` extensions.

### Internal linking

- **Footer mega-nav** linking to every Service and every Location on every page. This is hub-and-spoke from the footer.
- Every page receives one link from every other page via this footer.
- In-body contextual linking is optional. Ippei's portfolio mostly skips it.
- Service pages link to 3+ other services and 2 to 3 city pages.
- City pages link to 3+ services and 3 to 4 adjacent cities.

### Navigation menu

- Primary nav: Home, Services (dropdown of all sub-services), Service Areas (dropdown of all cities), About, Contact.
- Phone CTA pinned right in the nav.
- Sticky mobile bar with click-to-call at the bottom of every page.

---

## SECTION 2: HOMEPAGE FORMULA

Word count: 1,800 to 3,000 words.

Section order (12 sections, locked):

1. **Trust strip in header.** Logo, phone with click-to-call, then text: "Licensed and Insured" plus license number if real and tenant-attributable. Never reuse a license number across sites with different niche categories.
2. **H1 with brand + service cluster.** Formula: `{Brand Name}: {Service Type} in {City}, {State}`. Example: "Tulsa Foundation Experts: Foundation Repair, Pier Installation, and Crawl Space Solutions in Tulsa, OK."
3. **Intro paragraph (2 to 3 paragraphs, 100 to 200 words).** Mention years of experience (real numbers only), city name in the first 100 words, and the climate/soil/local condition that drives the niche.
4. **Quote request form above the fold on desktop.** Fields: Name, Phone, Email, Service Needed (dropdown), brief description. Include TCPA consent block.
5. **"Why Choose Us" stat-claim list (8 to 12 bullets).** Each bullet is a verifiable specific. "48 foundations stabilized in Tulsa County since 2024" beats "1,000+ happy customers."
6. **Services grid (4 to 10 H3 cards).** Each card has an image, the service name, a 2-paragraph blurb, and a link to the full service page.
7. **Process or "Our Approach" numbered steps (3 to 7 steps).** Inspection, diagnosis, written estimate, work, warranty handoff.
8. **Cost-range table.** Real local ranges. Foundation repair: steel push piers $1,400 to $2,500 per pier, helical piers $1,500 to $3,000, polyurethane foam jacking $5 to $25 per square foot. Annotate as "{Year} {Metro} market ranges, updated annually."
9. **Testimonials grid (3 to 5).** Use only real testimonials from real customers with explicit consent. Never invent named customers. If no real testimonials exist yet, omit this section. Do not fabricate.
10. **FAQ accordion (5 to 10 Q&As).** Cost, timeline, warranty, materials, process, climate, licensing.
11. **Final CTA + phone repeat.** Form + click-to-call.
12. **Footer.** Full NAP card, business hours, Google Maps embed, 5-social-icon row, full mega-nav of Services and Locations, real LLC disclosure with copyright.

---

## SECTION 3: SERVICE PAGE FORMULA

Word count: 1,200 to 1,800 words per service page.

H1 formula: `{Specific Service} in {City}, {State}`. Example: "Pier and Beam Foundation Repair in Tulsa, OK."

Meta title: `{Service Name} in {City}, {State} | {Brand}`. Cap at 60 characters.

Meta description: One sentence on the service, one trust signal, CTA, phone. Cap at 155 characters.

Section order:

1. **Hero.** Breadcrumb (`Home > Services > {Service Name}`), H1, 1 to 2 sentence subheadline with pain signal and free inspection CTA, two CTAs (form button + phone).
2. **What is this service (200 to 300 words).** Plain language explanation. Reference the local climate/soil/condition context.
3. **Why {City} homes need this service (250 to 350 words, UNIQUE PER SERVICE).** Reference 2 to 3 specific neighborhoods, housing eras, or local conditions where this issue is common.
4. **Methods/types we handle (4 to 6 sub-items, 50 to 100 words each).** Grid format. Each sub-item explains a method, material, or variant of the service.
5. **Our process (5-step numbered list, service-specific, realistic timeframes).**
6. **Cost expectations (3 to 4 tiers within the service's price range).** Honest framing: "Final cost depends on {variables}. A free inspection gives you a real number."
7. **Service area (8 to 12 cities served, links to top 4 city pages).**
8. **FAQ (5 to 7 service-specific questions with FAQPage schema, 40 to 80 words per answer).**
9. **Final CTA + form.**

Internal links out: homepage, 3+ other service pages, 2 to 3 city pages.

Schema: Service + FAQPage + BreadcrumbList.

---

## SECTION 4: CITY PAGE FORMULA

Word count: 900 to 1,400 words. At least 500 words genuinely unique per page. 30 to 40% unique content threshold to survive Sterling Sky's doorway audits.

URL pattern: `/{city-slug}-{state-abbr}` (e.g., `/broken-arrow-ok`).

H1 formula: `{Service Type} in {City}, {State}`.

Section order:

1. **Hero.** Breadcrumb (`Home > Service Areas > {City}`), H1, subheadline with city name + local condition + free inspection CTA, two CTAs.
2. **Why {City} homes have {Problem} (200 to 300 words, UNIQUE PER CITY).** Three required hyperlocal pegs:
   - **Demographics**: population, area in square miles, median household income. Cite source ("according to the 2020 Census").
   - **Named neighborhoods and landmarks**: 3 to 5 specific neighborhoods or local landmarks. Real names only.
   - **Climate/environmental angle**: rainfall, freeze-thaw cycles, soil composition, seismic activity. Cite source (NWS, USGS, etc.).
3. **{Service} services we provide in {City} (6-service grid, 50 to 100 words per card).** Each card explains how that service applies to this specific city.
4. **Common {Problem} issues in {City} (150 to 250 words, UNIQUE PER CITY).** 5 to 7 issues specific to this city's housing stock, soil, or climate.
5. **Our process for {City} homeowners (4-step process, boilerplate OK).**
6. **Nearby areas we serve (4 to 5 links to adjacent city pages).**
7. **FAQ (3 to 4 questions, UNIQUE PER CITY).**
8. **Final CTA + form.**

Schema: LocalBusiness or ProfessionalService with `areaServed = {City}` + FAQPage + BreadcrumbList.

### Verifiable local facts to weave in

Never invent. Pull from real sources:

- **Census 2020 data**: population, area, demographics, median income, owner-occupied rate.
- **National Weather Service** for the regional office: rainfall, temperature, climate normals.
- **USGS** for soil composition, seismic activity, geological formations.
- **Wikipedia** for incorporated date, named neighborhoods, landmarks, founding history.
- **City government website** for landmarks, parks, major employers.
- **Local Chamber of Commerce** for top employer lists.
- **State building code** references for code-related claims.

Cite inline casually: "according to the 2020 Census," "NWS Tulsa office reports an annual average of 42 inches of rainfall," "per the Oklahoma Geological Survey."

---

## SECTION 5: NEIGHBORHOOD PAGES (OPTIONAL)

For metros where neighborhoods have distinct identities, build 3 to 8 neighborhood pages. Examples for Tulsa: Maple Ridge, Brookside, Florence Park, Lortondale, Riverside.

URL pattern: `/neighborhoods/{neighborhood-slug}`.

H1 formula: `{Service Type} in {Neighborhood} {City}`. Example: "Foundation Repair in Maple Ridge Tulsa."

Word count: 600 to 900 words.

Required content:

- Era of housing stock in that neighborhood (1920s mansions, 1950s bungalows, 1980s ranch homes, etc.).
- 2 to 3 specific subdivisions or street names.
- Why this neighborhood's housing stock has this problem (soil type, age, foundation type).
- 3-service grid of services relevant to that housing stock.
- Internal links to the parent city page, 2 to 3 service pages, 2 adjacent neighborhoods.

---

## SECTION 6: SCHEMA MARKUP

JSON-LD only. Inject via the site's base layout (Astro `<slot>` head, WordPress functions.php, etc.).

### Required on every page

- **BreadcrumbList** showing the page's path back to the homepage.

### Homepage

- **LocalBusiness** with subtype matching the niche: HomeAndConstructionBusiness, RoofingContractor, FlooringContractor, GeneralContractor, FinancialService, etc.
- **Organization** with `sameAs` array linking to all five social profiles (Facebook, Instagram, X, Pinterest, YouTube).
- **WebSite** with SearchAction.

### Service pages

- **Service** with `serviceType`, `areaServed`, `provider` referencing the LLC.
- **FAQPage** matching the visible FAQ section.
- **BreadcrumbList**.

### City pages

- **LocalBusiness** or **ProfessionalService** with `areaServed` set to the city.
- **FAQPage** matching the visible FAQ.
- **BreadcrumbList**.

### Blog posts

- **Article** with `author` (use brand-as-author or named writer with honest bio).
- **BreadcrumbList**.

### Never use

- **AggregateRating** without real verifiable third-party reviews. Fake review schema is a Google policy violation actively penalized.
- **Review** schema on self-hosted testimonials. Use only for third-party verified reviews.
- **LocalBusiness** schema in a city the operator does not have a real physical presence in. Use **Service** with `areaServed` instead.

### Schema validation

Run every template through Google's Rich Results Test before publishing. Fix all errors and warnings.

---

## SECTION 7: TRUST SIGNAL STACK

### Header strip (every page)

- Phone with click-to-call link.
- Real license number if the tenant is licensed and the site is in pre-tenant mode. Use placeholder text like "Licensed and Insured" until a real license is attributable.
- "Insured & Bonded" in plain text.

### Body trust signals

- Specific verifiable claims only. "48 foundations stabilized since 2024" beats "1,000+ happy customers."
- Manufacturer certifications named specifically when real: GAF, Owens Corning, CertainTeed, Atlas, ECP, Earth Contact Products.
- Industry standards cited specifically: ASTM C94, ACI 318, ICC-ES reports, IRC 2018, state-specific building codes.
- Years in business: only real numbers tied to Compass Camper LLC or the tenant.

### Footer

- Real LLC ownership disclosure: "© 2026 Compass Camper LLC. All Rights Reserved."
- Compliance disclaimer (full version in Section 11).
- Full NAP card with click-to-call phone and embedded Google Map.
- Business hours (real ones only, never "24/7" unless literally true).
- 5-social-icon row.

### Trust language

**Allowed:**
- Licensed local contractors
- Licensed and insured contractors
- A licensed contractor in your area
- The contractor you're matched with
- Independent licensed professionals
- We connect homeowners with...
- Free, no-obligation inspection from a licensed contractor

**Forbidden:**
- Vetted / pre-screened / hand-selected (creates legal exposure without documented vetting process)
- Top-rated / best contractors (unless backed by real documented ranking)
- Trusted partners (creates implicit warranty obligations)
- First-person work claims: "we diagnose," "we repair," "we install," "we fix"
- Fake testimonials with invented names
- Stock photos labeled as "our team" or "our crew"
- "Since [year]" claims that don't reflect Compass Camper LLC's actual formation date

---

## SECTION 8: TECHNICAL SEO

### Core Web Vitals targets

- LCP under 2.5 seconds on mobile.
- INP under 200 milliseconds.
- CLS under 0.1.
- Total page weight under 1.5 MB.

### Image pipeline

- All images WebP or AVIF format, never PNG or JPG except for logos and graphics with transparency.
- Filename pattern: `{descriptive-keyword}-{width}w.webp`. Example: `tulsa-foundation-repair-1920w.webp`.
- Hero images max 1920px width.
- Lazy-load every image below the fold.
- Descriptive alt text mentioning relevant keywords.

### Page speed

- Inline critical CSS for above-the-fold content.
- Defer non-critical JavaScript.
- Use Cloudflare or similar CDN.
- Minify HTML, CSS, JS.

### Indexing

- Auto-generated `/sitemap-index.xml` referencing all sub-sitemaps.
- `/robots.txt` allowing all crawlers, referencing the sitemap, blocking `/admin`, `/preview`, `/drafts`.
- Self-canonical tag on every page.
- No `noindex` anywhere except `/thank-you`.

### Maps embed

- Use Google Maps Embed API (`/maps/embed/v1/place?key={api-key}&q={address}&zoom=15`), not the JavaScript Maps API. Embed API is free and has lower JS bloat.

### Analytics

- GA4 from day one.
- Google Search Console verified.
- Bing Webmaster Tools verified.
- CallRail or CallSling on the renter-routed phone for call attribution. Budget $30 to $50 per month per site.

---

## SECTION 9: CONTENT PATTERNS

### Cost-range tables are the highest-ROI block

Every service page should have a cost-range table. Format:

| Method | Per-Unit Cost | Typical Total |
|---|---|---|
| Method A | $X to $Y | $X,XXX to $Y,YYY |
| Method B | $X to $Y | $X,XXX to $Y,YYY |

Annotate with the year and metro: "{Year} {City} market ranges, updated annually." Re-source numbers from primary publishers, not other rank-and-rent sites.

### FAQ blocks

Every service page and city page has an FAQ block. Topics:

- Cost (with real ranges)
- Timeline (in days or weeks)
- Warranty (transferability matters)
- Materials or methods
- Process and what to expect
- Climate or local condition
- Licensing and insurance
- Financing options

Match the FAQ block to FAQPage schema exactly. Schema with questions not on the page is a structured-data abuse violation.

### Named-project galleries

For each tenant who has real documented past projects, build a gallery section:

- Project name (no addresses)
- Project value (real, not invented)
- Date completed (real)
- Photo (with client consent)
- 2-sentence project description

Beats every "20+ years of experience" claim. Real specifics outperform vague claims.

### Cost tables vs blog posts

Skip the blog for the first 6 months on a new site. Build topical authority into service and city pages instead. After 6 months, add 1 to 2 blog posts per month on long-tail informational queries that don't fit a service or city page.

---

## SECTION 10: BRAND ENTITY ESTABLISHMENT

### Social profiles (create all five in week 1)

- Facebook business page
- Instagram business
- X / Twitter
- Pinterest
- YouTube

Each profile gets:
- Brand name in handle
- Site URL in bio
- NAP in About
- 8 to 12 service photos uploaded

These accounts satisfy the Organization schema `sameAs` array. They do not need ongoing posting. Their function is brand entity reinforcement.

### Citations (manual, top 25 only)

- Google Business Profile (real address only)
- Yelp
- BBB (Accredited if budget allows)
- Angi
- Houzz
- Thumbtack
- Porch
- HomeAdvisor / Angi Pro
- Manta
- Hotfrog
- Foursquare
- Apple Maps Business
- Bing Places
- Nextdoor business profile
- Niche-specific directories (e.g., Foundation Repair Network for foundation)
- Real estate adjacent (Zillow / Trulia pro for relevant verticals)

Skip mass directory submissions. Skip "500 citations for $99" services. ROI flattens after 25 citations.

### Link building

- Local sponsorships: chambers, charities, school boosters, Little League. $0 to $250 sponsorships earn do-follow .org links worth more than dozens of generic guest posts.
- Featured.com pitches (free, HARO replacement).
- Genuine local guest posts on real-traffic blogs.
- One linkable asset per site: cost calculator, risk map, or annual price index.
- Skip PBNs, marketplace niche edits, scholarship links, mass forum spam. All algorithmically neutralized in 2026.

---

## SECTION 11: LEGAL AND COMPLIANCE

### Footer disclaimer (every page, verbatim)

```
This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. {SITE_BRAND} is a marketing service that connects homeowners with independent, licensed {NICHE} contractors. All {NICHE} and related services are performed by independent licensed contractors operating under their own licenses and insurance. Compass Camper LLC does not perform {NICHE} work and is not a licensed contractor.
```

### Privacy and Terms

- `/privacy` page with standard privacy policy. Identify Compass Camper LLC as operator. Governing law: Oregon.
- `/terms` page with standard terms of service. Identify Compass Camper LLC as operator.

### TCPA consent block

Every form must include a TCPA consent checkbox or text block:

```
By clicking Submit, I authorize Compass Camper LLC and its partner contractors to contact me by phone, text, or email at the number and address I provided, including by automated means, regardless of any do-not-call list status. Message and data rates may apply. This consent is not a condition of purchase.
```

### Forbidden

- No fake Google Business Profiles in cities the operator does not have a real physical presence in. This triggered Google v. Hu / Rafadigital / GMBEye in 2023, federal Lanham Act exposure.
- No fake testimonials with invented customer names.
- No AI-generated headshots passed off as real team members.
- No fabricated "Since [year]" company tenure claims.
- No fabricated certifications, awards, or BBB ratings.
- No reused contractor license numbers across non-overlapping license classes.
- No "Monday to Sunday 24 hours" claims unless literally true.

---

## SECTION 12: CONTENT GENERATION RULES

### When writing service pages

- Reference the local climate/soil/condition in the first 100 words.
- Name at least one specific neighborhood or local landmark.
- Use one real source citation (Census, NWS, USGS, building code).
- Include a cost-range table.
- Include an FAQ block matching FAQPage schema.
- Internal link to homepage, 3+ other services, 2 to 3 cities.

### When writing city pages

- First 100 words mentions the city name 2 to 3 times naturally.
- Include real population, area, and median income with Census 2020 citation.
- Name 3 to 5 specific neighborhoods or landmarks.
- Reference a climate fact with NWS citation.
- 30 to 40% genuinely unique content vs boilerplate.
- FAQ block with 3 to 4 city-specific questions.

### When writing blog posts

- Target one specific long-tail informational query per post.
- 1,200 to 2,500 words.
- Include at least 2 real source citations.
- Link to 2 to 3 relevant service or city pages.
- Use brand-as-author or honest named-writer bio. Never fabricate a persona.

### AI content rules

- Raw unedited AI content does not rank as of March 2024 (scaled content abuse policy).
- AI-drafted + human-edited works. The human editing layer must add: first-party data, real photos, named author, locally verifiable detail.
- Sterling Sky's reword prompt for city pages: "Reword all this content and replace all instances of 'City 1' with '{Target City}.' Make sure it's written in the same language style, tone, and reading level."
- Per-page human time after AI draft: 20 to 40 minutes adding intro/conclusion rewrite, 1 to 2 paragraphs local context, 1 to 3 real photos, GBP embed, one project-specific case.

---

## SECTION 13: CORE WEB VITALS AND PERFORMANCE BUDGET

| Metric | Target | Maximum |
|---|---|---|
| LCP (mobile) | Under 2.0s | Under 2.5s |
| INP | Under 150ms | Under 200ms |
| CLS | Under 0.05 | Under 0.1 |
| Total page weight | Under 1.0 MB | Under 1.5 MB |
| Time to Interactive | Under 3.0s | Under 4.0s |
| Hero image weight | Under 150 KB | Under 250 KB |
| Total JS payload | Under 200 KB | Under 350 KB |
| Total CSS payload | Under 50 KB | Under 100 KB |

### How to hit these

- Static-generated site (Astro, Hugo) or WordPress with a lean theme (Astra, GeneratePress, Kadence).
- Cloudflare CDN.
- WebP/AVIF images, lazy-loaded.
- Inline critical CSS, defer the rest.
- No heavy page builders (Elementor, Divi, WPBakery add 200+ KB of bloat).
- No render-blocking third-party scripts above the fold.

---

## SECTION 14: LAUNCH CHECKLIST

Before pushing a site live, verify every item:

### Architecture
- [ ] 25 to 45 URLs published
- [ ] Sitemap.xml auto-generated and reachable
- [ ] Robots.txt allows crawlers, references sitemap
- [ ] Footer mega-nav links to every Service and Location
- [ ] Mobile sticky call bar working

### Content
- [ ] Homepage has all 12 sections
- [ ] Every service page has cost table + FAQ + internal links
- [ ] Every city page has Census + landmark + climate weave
- [ ] No fake testimonials anywhere
- [ ] No invented certifications or licenses

### Schema
- [ ] LocalBusiness or Service schema on every relevant page
- [ ] FAQPage schema matches visible FAQ on every page
- [ ] BreadcrumbList schema on every interior page
- [ ] Organization schema with `sameAs` to 5 socials on homepage
- [ ] Every template validated through Google Rich Results Test

### Technical
- [ ] LCP under 2.5s on mobile (test via PageSpeed Insights)
- [ ] CLS under 0.1
- [ ] All images WebP/AVIF
- [ ] Self-canonical tag on every page
- [ ] No noindex except /thank-you

### Trust
- [ ] Footer disclaimer present (Section 11)
- [ ] Privacy and Terms pages live
- [ ] TCPA consent on every form
- [ ] Real LLC copyright in footer
- [ ] No reused license numbers from other sites

### Analytics
- [ ] GA4 installed and firing
- [ ] Search Console verified
- [ ] Bing Webmaster Tools verified
- [ ] CallRail or CallSling on tracked phone

### Brand
- [ ] 5 social profiles created with NAP and link
- [ ] Top 10 citations submitted manually
- [ ] GBP claimed at real address (or omitted entirely if no real presence)

---

## SECTION 15: VERTICAL-SPECIFIC NOTES

### Home services (foundation, roofing, HVAC, plumbing, flooring, etc.)

- LocalBusiness schema subtype: HomeAndConstructionBusiness, plus specific (RoofingContractor, HVACBusiness, Plumber).
- Cost tables are mandatory (high-intent transactional queries).
- Climate angle is mandatory (soil type, freeze-thaw, rainfall, seismic).
- Average tickets $3,000+ support $750 to $3,000 per month rent.

### Financial services (business loans, mortgages, etc.)

- LocalBusiness schema subtype: FinancialService.
- YMYL content rules apply: stronger E-E-A-T signals required.
- NMLS number or state financial license must be displayed for finance verticals if the tenant is licensed.
- No fabricated APR or rate claims.
- Cost/product tables (loan type, amount range, term length, typical rate) are featured-snippet bait.
- Industry data citations (SBA Office of Advocacy state profiles, BLS) refreshed annually.

### High-ticket niches (foundation, water damage, restoration)

- Insurance angle is a content goldmine ("Does homeowners insurance cover {problem}?").
- Emergency 24/7 framing only if the tenant truly offers it.
- Lead values $100 to $500+ per qualified call support $1,500 to $5,000 per month rent.

### Low-ticket niches (handyman, junk removal)

- Skip these verticals. Rent ceiling under $800/month makes them not worth the build time.

---

## SECTION 16: TENANT-MODE OVERLAY

Once a tenant contractor is signed, layer in these changes (do NOT do these in pre-tenant mode):

- Swap branded phone number to tenant-routed CallRail tracking number.
- Display tenant's real contractor license number with the disclosure: "Work performed by {Tenant Business Name}, License #{number}, fully insured and bonded."
- Add tenant's real GBP review embed (if tenant has 10+ reviews on their GBP).
- Replace generic stock photos with tenant's real project photos (with consent).
- Add tenant's real "About the contractor" section linking to their GBP.

Footer disclaimer expands to:

```
This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. Leads generated through this site are forwarded to {Tenant Business Name}, a licensed and insured {niche} contractor (License #{tenant-license-number}). Compass Camper LLC does not perform {niche} work.
```

---

## SECTION 17: COMMON FAILURE MODES TO AVOID

These are the patterns that get rank-and-rent sites penalized or that erode conversion. Audit against this list before publishing any change.

1. **Identical city pages with only the city name swapped.** Sterling Sky has documented manual penalties for this even with reworded content. Every city page needs unique demographics, neighborhoods, and climate context.
2. **AI-generated content with no human edit layer.** Captured by Google's March 2024 scaled content abuse policy regardless of detection method.
3. **Hallucinated neighborhoods, landmarks, or demographics.** AI will invent these. Verify every local fact against a primary source (Census, Wikipedia, city government, NWS).
4. **FAQ schema with answers not visible on the page.** Spammy structured data filter, sharper enforcement post-Feb 2026 core update.
5. **AggregateRating without verified third-party reviews.** Active Google policy violation.
6. **Mass directory submissions (500 citations for $99).** Algorithmically neutralized. Wastes budget without warning.
7. **Exact-match anchor text spam.** Now a negative signal. Keep anchor mix at 60 to 75% branded, 10 to 15% naked URL, 10 to 25% keyword.
8. **PBN links to money sites.** Works 3 months then catastrophic. Tier-2 only if at all.
9. **Mass "near me" doorway pages.** Sterling Sky 8,186-business study (2025): hiding GBP address is negatively correlated with rankings.
10. **Reused trust signals across sites.** One license number across multiple non-overlapping CSLB classes is detectable and damaging at scale.
11. **"24/7" claims that aren't true.** Easy to disprove and erodes trust on inspection.
12. **Stock photo testimonials with invented names.** Reverse image search exposes this immediately.

---

## SECTION 18: ITERATION RULES

After launch, evaluate the site monthly:

### Month 1 to 3 (sandbox)

- Expect page 5 to 10 rankings for primary commercial keywords.
- Longtail starts appearing in months 2 to 3.
- Do not add new pages aggressively. Focus on indexing the launched pages, citations, and 2 to 4 quality backlinks per month.

### Month 3 to 6 (climb)

- Primary city+service to page 1 to 2 in lower-competition metros (75K to 250K population).
- Add 2 to 4 service-city pages per week, hit 30 to 40 page inventory.
- Link velocity 1 to 3 per month from local sponsorships, Featured.com pitches, real guest posts.

### Month 6 to 12 (maturity)

- Pause new pages. Refresh existing pages with new photos, updated cost ranges, fresh FAQs.
- 1 to 2 quality backlinks per month.
- Begin renter conversations at 5+ qualified calls per month or 1,000+ monthly organic visits.

### Diagnostic benchmarks

- **<70% pages indexed after month 3:** Pages too thin or similar. Rewrite worst 20%.
- **30%+ traffic drop in 2 weeks of core update:** Audit for scaled-content patterns, consolidate or 410 weakest pages.
- **Stuck at #11 to 25 after 90 days:** Off-page authority gap. Pursue editorial links from local publishers.
- **Page 1 ranking but under 5 calls per week:** Conversion architecture problem. Audit form (reduce fields), shorten hero, A/B test phone-CTA placement.
- **20+ citations + 5+ community links, no map pack at month 6:** GBP, proximity, or reviews issue, not links. Stop adding links, audit GBP.
- **100+ journalist pitches, zero placements:** Pitch problem. Re-read Reporter Outreach + Content Factory frameworks. Pitches are likely generic, slow, or wrong queries.

---

## SECTION 19: EXAMPLE OUTPUT STRUCTURE FOR AN EDITING TASK

When the operator asks the AI to edit a website using this playbook, follow this order:

1. **Audit current state.** Run through Section 14 (Launch Checklist) on the existing site. Identify gaps.
2. **Prioritize fixes by impact:** schema and trust signals first (quick wins), then content depth (service and city pages), then technical (Core Web Vitals), then link building (slow burn).
3. **Make changes batch by batch.** Don't change 50 things at once. Ship in batches of 5 to 10 changes with deployment in between.
4. **Validate after each batch.** Rich Results Test, PageSpeed Insights, manual visual QA on mobile and desktop.
5. **Report what was changed.** List each change, what file or section was affected, and the rationale tied to a section of this playbook.

---

## SECTION 20: QUICK REFERENCE TABLES

### Service page word counts by competition

| Competition level | Service page words | City page words |
|---|---|---|
| Low (75K to 250K pop) | 1,000 to 1,400 | 800 to 1,000 |
| Medium (250K to 1M pop) | 1,400 to 1,800 | 1,000 to 1,400 |
| High (1M+ pop or PI law) | 1,800 to 2,500 | 1,400 to 2,000 |

### Page count thresholds

| Page count | Risk level |
|---|---|
| Under 50 | Safe for new domains |
| 50 to 200 | Risky, quality-dependent |
| 200+ | Expect index suppression unless each page has genuinely unique data |

### Link velocity (referring domains added per month)

| Site age | Safe velocity | Max velocity |
|---|---|---|
| Months 1 to 2 | 1 to 3 | 5 |
| Months 3 to 6 | 3 to 5 | 8 |
| Months 6 to 12 | 4 to 8 | 12 |
| 12+ months | 5 to 14.5% of total RDs per month | 15% |

### Rent ranges by tier (2026 market)

| Tier | Population | Niche | Typical rent |
|---|---|---|---|
| Tier 3 | Under 250K | Low ticket | $250 to $600/mo |
| Tier 2 | 250K to 1M | Mid ticket | $500 to $1,500/mo |
| Tier 2 | 250K to 1M | High ticket | $1,000 to $3,000/mo |
| Tier 1 | 1M+ | High ticket | $2,000 to $5,000/mo |
| Specialty | Major metro | Restoration/medical/legal | $3,000 to $10,000/mo |

---

## END OF PLAYBOOK

Apply every section as binding rules. If the operator asks for an exception, ask why and document it. If a rule conflicts with new Google guidance after this playbook's date, defer to the newer guidance and note the deviation.

**Last updated:** May 2026
**Operating entity:** Compass Camper LLC (Oregon)
**Compliance basis:** Google QRG Sept 11, 2025; Google March 2024 core update + spam policies; Google Site Reputation Abuse policy (Nov 19, 2024 expansion); Whitespark 2026 Local Ranking Factors; Sterling Sky doorway penalty case studies.
