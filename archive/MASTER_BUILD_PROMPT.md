DEPRECATED. Superseded by compass-standards. Do not use.

# ====================================================================
# MASTER SEO BUILD PROMPT — Paste this entire file into Claude Code
# Site: tulsafoundationexperts.com
# Operator: Compass Camper LLC (Oregon)
# Goal: Move from position 67.8 to page 1 over 90 days via on-page SEO build
# ====================================================================

You are executing a comprehensive SEO build for tulsafoundationexperts.com. Read this ENTIRE prompt before doing anything. Execution happens in batches per Section 13. After each batch, stop and wait for my approval before starting the next.

# ====================================================================
# OPERATING CONTEXT (READ FIRST)
# ====================================================================

CURRENT SITE STATE:
- Site is LIVE at https://tulsafoundationexperts.com
- ~34 pages already built and indexed
- Already showing ranking signals for "pier and beam repair" (9 impressions) and "pier and beam foundation repair" (4 impressions)
- Average position 67.8, 18 impressions over 7 days
- Built with Astro 6.x + TypeScript + Tailwind v4 + @tailwindcss/vite + @astrojs/sitemap
- Deploys via Direct Upload to Cloudflare Pages (NOT via Wrangler — Wrangler has broken builds before, don't use it)
- GitHub repo: compassleadgroup/tulsa-foundation-experts (private)

LOCKED-IN BUSINESS INFO:
- Phone: (918) 673-7959
- Phone tel link: +19186737959
- Email: compassleadgroup@gmail.com
- Legal entity: Compass Camper LLC (Oregon)
- Site brand: Tulsa Foundation Experts
- Hours: Monday-Friday 8 AM to 5 PM Central, Closed Saturday-Sunday

REPLACE ALL OCCURRENCES IN THIS SPEC:
- "(XXX) XXX-XXXX" → "(918) 673-7959"
- "[PHONE]" → "(918) 673-7959"
- "[confirm with operator]" → "(918) 673-7959"

# ====================================================================
# CRITICAL CONSTRAINTS (NON-NEGOTIABLE)
# ====================================================================

URL HANDLING — DO NOT BREAK EXISTING RANKINGS:
For any existing page being renamed (e.g., /services/pier-and-beam-repair → /services/pier-and-beam-foundation-repair), do NOT delete the old URL. Instead:
1. Build the new page at the new URL with full spec content
2. Set up a 301 redirect from the old URL to the new URL using Cloudflare Pages _redirects file (place in public/_redirects)
3. Update all internal links across the site to point to the new URL
4. Add the old URL to a redirects log file at docs/url-redirects.md for reference

The existing URL /services/pier-and-beam-repair is already accumulating ranking signal in Google Search Console. If you delete it without a 301 redirect, that ranking signal is lost.

EXISTING URL STRUCTURE TO PRESERVE OR REDIRECT:
Existing pages currently on the site (verify before renaming):
- /services/foundation-crack-repair
- /services/house-leveling
- /services/slab-repair (rename to /services/slab-foundation-repair, redirect old → new)
- /services/pier-and-beam-repair (rename to /services/pier-and-beam-foundation-repair, redirect old → new)
- /services/mudjacking (rename to /services/mudjacking-and-polyjacking, redirect old → new)
- /services/drainage (decide: keep, fold into pillar guide, or 410)
- 12 existing city pages at /[city-slug]
- /blog with 8 existing articles
- /thank-you (newly added, keep noindex)

FACT VERIFICATION:
For all specific numeric claims in the spec (5,500 psf swell force, 10-15% swell volume, 235 dry days/year, Pennsylvanian-age shale bedrock, montmorillonite, 900-fold earthquake increase since 2008, etc.), include these as quoted facts ONLY IF you can verify them via web search before writing. If a number is referenced in the spec but cannot be verified, replace it with a qualitative description ("significant force," "considerable swelling") rather than invent a precise number. Do not hallucinate statistics.

COMPLIANCE (MANDATORY — DO NOT VIOLATE):
Reference COMPLIANCE_STANDARDS.md in project knowledge as the authoritative source. Key rules:

FORBIDDEN LANGUAGE (creates legal exposure under FTC §5 and state UDAP):
- "vetted" / "vetted contractors" / "our vetted network"
- "our network" / "our network of contractors"
- "pre-screened" / "pre-qualified contractors"
- "hand-selected" / "carefully selected"
- "top-rated contractors" (unless backed by real ranking criteria)
- "best contractors in Tulsa"
- First-person work claims ("we diagnose," "we level," "we fix," "we install")
- Fake testimonials, named customer reviews, fabricated case studies
- "Since [year]" claims unless verified for Compass Camper LLC
- Fake team photos, invented founder bios

ALLOWED LANGUAGE (defensible AND compelling):
- "Licensed local contractors"
- "A licensed contractor in your area"
- "Licensed and insured contractors"
- "The contractor you're matched with"
- "We connect homeowners with..."
- "We help you find..."
- "Free inspection from a licensed contractor"

REQUIRED ON EVERY PAGE:
- Header disclosure strip (thin gray bar above nav): "A marketing service connecting Tulsa-area homeowners with licensed foundation repair contractors. Compass Camper LLC is not a licensed contractor and does not perform foundation work."
- Footer legal disclaimer (full text already on existing pages, preserve verbatim)
- Phone (918) 673-7959 with tel: click-to-call

SCHEMA RULES:
- LocalBusiness/ProfessionalService schema only — NEVER contractor-specific categories
- NO AggregateRating schema anywhere
- NO Review schema anywhere (FTC Reviews Rule, $53,088 per violation)
- FAQPage schema must match visible copy exactly
- Organization schema must reference Compass Camper LLC, Oregon

FORM REQUIREMENTS:
- TCPA consent block above submit button (NOT pre-checked, NOT in popup)
- Existing contact form already uses Web3Forms integration with access key in HTML
- Existing form redirects to /thank-you after submission — preserve this
- Existing TCPA block on /contact — preserve this exact text

STYLE RULES:
- NO em dashes (—). Use commas, periods, parens, or "to" instead. Use "and" instead of em dashes for connecting clauses.
- Numbers under 10 spelled out, 10+ as digits
- Currency: $3,500 (no space after $)
- Phone format: (918) 673-7959 display, +19186737959 in tel: links
- Vary sentence structure across pages — do not let every page open with "When it comes to foundation repair in [city]..."
- Avoid LLM tells: "in today's world", "navigate the complexities", "delve into", "ensure peace of mind", "rest assured", "moreover", "furthermore"

# ====================================================================
# EXECUTION STRATEGY
# ====================================================================

EXECUTE BATCH 1 FIRST. STOP AFTER BATCH 1 IS COMPLETE.
Wait for my approval before starting Batch 2. We deploy each batch separately so I can verify correctness before continuing.

AFTER EACH BATCH:
1. Run `npm run build` and confirm clean
2. Report which files were modified, created, or deleted
3. Run verification greps for compliance:
   - grep -ri "vetted\|our network\|pre-screened\|hand-selected\|top-rated" src/ --exclude-dir=node_modules
   - grep -ri "AggregateRating\|\"Review\"" src/ --exclude-dir=node_modules
   - grep -r "—" src/ --exclude-dir=node_modules (em dashes must be zero)
   - grep -ri "we diagnose\|we level\|we fix\|we install\|we perform" src/ --exclude-dir=node_modules
4. Wait for my approval before next batch
5. Do NOT commit, push, or deploy. I handle deployment via Direct Upload manually.

# ====================================================================
# SITE CONFIGURATION VARIABLES (use everywhere)
# ====================================================================

- SITE_BRAND: Tulsa Foundation Experts
- DOMAIN: tulsafoundationexperts.com
- PRIMARY_CITY: Tulsa
- PRIMARY_STATE_ABBR: OK
- METRO_NAME: Tulsa metro
- NICHE: foundation repair
- NICHE_SHORT: foundation
- NICHE_PROVIDER: foundation repair contractors
- TARGET_CUSTOMER: homeowners
- CLIMATE_FACTOR: expansive clay soil
- TICKET_RANGE: $3,000 to $30,000
- PHONE_DISPLAY: (918) 673-7959
- LAUNCH_YEAR: 2026
- PRIMARY_PAIN_SIGNALS: cracks in walls, sticking doors, sloping floors, gaps between brick and frame

# ====================================================================
# SECTION 0: CURRENT STATE DIAGNOSIS (BATCH 1 STARTS HERE)
# ====================================================================

Before building anything new, audit the existing site and fix every issue found.

AUDIT CHECKLIST:
1. Crawl the site programmatically. For every page report: URL, status code, title, meta description, H1, word count, indexable status, canonical, schema present
2. Identify pages under 400 words — these need to be expanded or 410'd
3. Identify duplicate or generic title tags ("Home", "Services", "About Us") — these need rewriting per Section 2 formulas
4. Identify pages missing H1 or with H1 that doesn't match the title topic — fix
5. Identify pages without breadcrumbs (except /) — add visible breadcrumbs and BreadcrumbList schema
6. Verify XML sitemap at /sitemap-index.xml includes every indexable page
7. Verify robots.txt allows CSS, JS, images and references sitemap
8. Verify canonical tags on every page point to the page itself
9. Verify no mixed-content HTTPS warnings
10. Run a build to confirm current state is healthy before changes

IMMEDIATE FIXES TO APPLY IN BATCH 1:
- Any page under 400 words: flag for rewrite (do not delete yet, just list)
- Any page with duplicate/generic title: rewrite to Section 2 formula
- Any page missing H1: add appropriate H1
- Any page without breadcrumbs: add visible breadcrumbs + BreadcrumbList schema
- All pages: ensure header disclosure strip is present
- All pages: ensure footer disclaimer is present
- All pages: ensure phone (918) 673-7959 click-to-call works

# ====================================================================
# SECTION 1: SITE ARCHITECTURE
# ====================================================================

TARGET PAGE INVENTORY (60-80 pages, Sterling Sky safe range, under 200-page risk threshold):

| Section | URL Pattern | Count |
|---|---|---|
| Core pages | /, /about, /contact, /privacy, /terms, /services, /blog, /locations | 8 |
| Service pages | /services/[slug] | 8 |
| Suburb city pages | /[city-slug] | 12 |
| Tulsa neighborhood pages | /neighborhoods/[neighborhood-slug] | 8 |
| Pillar content | /tulsa-clay-soil-foundation-guide | 1 |
| Blog posts | /blog/[post-slug] | 12-15 |
| TOTAL | | ~64-70 pages |

URL STRUCTURE (lock in now, do not change later):
- Homepage: /
- Services overview: /services
- Service pages: /services/[slug] (lowercase, hyphenated)
- Locations overview: /locations
- City pages: /[city-slug] (e.g., /broken-arrow, /bixby, /jenks)
- Neighborhood pages: /neighborhoods/[neighborhood-slug] (e.g., /neighborhoods/maple-ridge)
- Pillar guide: /tulsa-clay-soil-foundation-guide
- Blog index: /blog
- Blog posts: /blog/[post-slug]

NAVIGATION:
- Primary nav: Home, Services (dropdown), Service Areas (dropdown), About, Blog, Contact
- Services dropdown: All 8 service pages
- Service Areas dropdown: Tulsa + top 6 suburbs, "View all locations" link to /locations
- Phone CTA pinned right in nav and sticky on mobile

# ====================================================================
# SECTION 2: GLOBAL ON-PAGE REQUIREMENTS
# ====================================================================

TITLE TAG FORMULA (max 60 chars):
- Homepage: Foundation Repair Tulsa OK | Free Inspection | Tulsa Foundation Experts
- Service: [Service Name] in Tulsa, OK | Tulsa Foundation Experts
- City: Foundation Repair in [City], OK | Tulsa Foundation Experts
- Neighborhood: Foundation Repair in [Neighborhood], Tulsa | Tulsa Foundation Experts
- Blog: [Post Title] | Tulsa Foundation Experts

META DESCRIPTION FORMULA (max 155 chars):
Service-specific 1 sentence + 1 trust signal + CTA + phone.
Example: "Pier and beam foundation repair in Tulsa, OK. Free inspections from licensed local experts. Same-week appointments. Call (918) 673-7959."

H1 FORMULA:
- Service page: [Service Name] in Tulsa, OK
- City page: Foundation Repair in [City], Oklahoma
- Neighborhood page: Foundation Repair in [Neighborhood] Tulsa

CONTENT PATTERNS REQUIRED ON EVERY PAGE:
1. Mention "Tulsa" or specific suburb in the first 100 words
2. Reference expansive clay soil at least once
3. Name at least one neighborhood, landmark, or local proof anchor
4. Internal link to 3+ other pages on the site
5. Phone number click-to-call in header AND sticky mobile bar
6. Footer disclaimer (per COMPLIANCE_STANDARDS.md) verbatim
7. Header disclosure strip (per COMPLIANCE_STANDARDS.md) verbatim

# ====================================================================
# SECTION 3: TECHNICAL SEO REQUIREMENTS
# ====================================================================

SCHEMA MARKUP (JSON-LD only, injected via Astro BaseLayout):

- Homepage: ProfessionalService + BreadcrumbList + WebSite with SearchAction
- Service pages: Service + FAQPage + BreadcrumbList
- City pages: ProfessionalService with areaServed + FAQPage + BreadcrumbList
- Neighborhood pages: ProfessionalService with areaServed + FAQPage + BreadcrumbList
- Blog posts: Article + BreadcrumbList
- About page: Organization (referencing Compass Camper LLC)

DO NOT USE:
- Review schema on self-hosted testimonials
- AggregateRating without verified third-party source
- LocalBusiness with contractor categories

ProfessionalService schema template (per page, vary areaServed):
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tulsa Foundation Experts",
  "url": "https://tulsafoundationexperts.com/[page-url]",
  "telephone": "+19186737959",
  "areaServed": {
    "@type": "City",
    "name": "[City or Neighborhood]"
  },
  "priceRange": "$$",
  "image": "https://tulsafoundationexperts.com/og-image.jpg",
  "description": "[Page-specific description]"
}
```

PERFORMANCE TARGETS:
- LCP: under 2.5s on mobile
- CLS: under 0.1
- INP: under 200ms
- Total page weight: under 1.5MB
- Hero images: WebP, max 1920px, lazy-load below fold
- Use Astro <Image /> component everywhere
- Inline critical CSS for above-the-fold

SITEMAP & INDEXING:
- /sitemap-index.xml auto-generated, includes every indexable page
- /robots.txt references sitemap, allows all crawlers, blocks /admin, /preview, /drafts
- Each page self-canonical
- No noindex anywhere except /thank-you

# ====================================================================
# SECTION 4: HOMEPAGE SPEC (/)
# ====================================================================

META:
- Title: Foundation Repair Tulsa OK | Free Inspection | Tulsa Foundation Experts
- Description: Foundation repair in Tulsa, Broken Arrow, Bixby and across the Tulsa metro. Free inspections from licensed local experts. Same-week appointments. Call now.

SECTION 1: HERO
- H1: Tulsa Foundation Repair Experts. Free Inspections. Local Specialists.
- Sub: Cracks in your walls, sticking doors, sloping floors? Tulsa's expansive clay soil causes more foundation damage than anywhere in Oklahoma. Get a free, no-obligation inspection from a licensed local foundation expert serving Tulsa, Broken Arrow, Bixby, Jenks, Owasso and the entire metro.
- CTA 1: Get a Free Inspection (form anchor)
- CTA 2: Call (918) 673-7959 (click-to-call)
- Trust strip below hero: "Licensed and insured contractors. Free inspections. Local Tulsa specialists. Same-week appointments."

SECTION 2: PAIN SIGNALS
- H2: Signs Your Tulsa Home Needs Foundation Repair
- 6-card grid with icons:
  1. Cracks in walls, ceilings, or brick exterior
  2. Doors and windows that stick or won't close
  3. Sloping, sagging, or uneven floors
  4. Gaps between walls and ceilings or windows and frames
  5. Cracks in concrete slab or basement floor
  6. Bowing basement walls or crawl space settling
- Closing line: "Spotting one or more of these? Tulsa's expansive clay soil is likely the cause. A free inspection rules it in or out."

SECTION 3: SERVICES GRID
- H2: Complete Foundation Repair Services for Tulsa Homeowners
- 8-card grid linking to each service page:
  1. Foundation Repair
  2. Pier and Beam Foundation Repair
  3. Slab Foundation Repair
  4. House Leveling
  5. Crawl Space Repair
  6. Helical and Steel Piers
  7. Mudjacking and Polyjacking
  8. Foundation Inspection
- Each card: 1 sentence + "Learn more →"

SECTION 4: WHY TULSA
- H2: Why Tulsa Homes Have More Foundation Problems
- 2 paragraphs (300 words) on expansive clay soil. VERIFY numeric claims before including. Cover: clay mineralogy, swell behavior, Oklahoma wet-dry cycle, era of older Tulsa housing stock most affected.

SECTION 5: SERVICE AREA
- H2: Tulsa Metro Service Area
- 3-column list of cities and neighborhoods (links to each city/neighborhood page)

SECTION 6: PROCESS
- H2: How Our Free Inspection Works
- 4-step horizontal timeline:
  1. Call or submit the form
  2. Schedule your free inspection (same-week available)
  3. Get a written estimate with repair options
  4. Choose your repair plan with no pressure

SECTION 7: FAQ
- H2: Frequently Asked Foundation Repair Questions
- 6 questions (FAQPage schema):
  1. How much does foundation repair cost in Tulsa?
  2. Does homeowners insurance cover foundation repair in Oklahoma?
  3. How long does foundation repair take?
  4. Can I sell my Tulsa home with foundation problems?
  5. Are foundation repair estimates really free?
  6. What's the difference between pier and beam and slab foundations?

SECTION 8: FINAL CTA
- Form: Name, phone, ZIP, "Describe the problem" textarea
- TCPA consent block (preserve existing exact text from /contact)
- "Or call us directly: (918) 673-7959"

SECTION 9: FOOTER (preserve current)

Target word count: 1,500 to 2,000 words
Internal links out: 8 service pages, 4 city pages, 2 neighborhood pages, pillar guide, 2 blog posts
Schema: ProfessionalService, BreadcrumbList, WebSite

# ====================================================================
# SECTION 5: CORE SERVICE PAGES (8 pages)
# ====================================================================

MASTER SERVICE PAGE TEMPLATE (1,500-2,000 words):

Section 1: Hero
- Breadcrumb: Home > Services > [Service Name]
- H1: [Service Name] in Tulsa, OK
- Sub: 1-2 sentences with pain signal + free inspection CTA
- 2 CTAs (form + phone)

Section 2: What is [service] (200-300 words)
- Plain language explanation
- Reference Tulsa expansive clay soil context

Section 3: Why Tulsa homes need this service (250-350 words, UNIQUE PER SERVICE)
- Reference 2-3 specific neighborhoods or housing eras where this issue is common

Section 4: Methods/types (4-6 sub-items, 50-100 words each)

Section 5: Process (5-step, service-specific, realistic timeframes)

Section 6: Cost expectations (3-4 tiers in $3,000-$30,000 range)
- Honest framing: "Final cost depends on the number of piers, soil access, and engineering requirements. A free inspection gives you a real number."

Section 7: Service area (8-12 cities, links to top 4 city pages)

Section 8: FAQ (5-7 service-specific questions with FAQPage schema, 40-80 words per answer)

Section 9: Final CTA + form

SERVICE PAGES TO BUILD (priority order):

5.1 /services/foundation-repair (NEW — PRIMARY MONEY PAGE)
- Title: Foundation Repair in Tulsa, OK | Tulsa Foundation Experts
- Meta: Expert foundation repair in Tulsa for slab, pier and beam, and crawl space homes. Free inspection. Licensed local contractors. Call now.
- H1: Foundation Repair in Tulsa, OK
- Unique angle: Umbrella page. Cover all repair types high-level. Cross-link to specialized pages.

5.2 /services/pier-and-beam-foundation-repair (RENAMED FROM /services/pier-and-beam-repair, set up 301 redirect)
- Title: Pier and Beam Foundation Repair in Tulsa, OK | Tulsa Foundation Experts
- Meta: Pier and beam repair for Tulsa homes built before 1960. Sister and replace rotted beams, level sagging floors. Free inspection.
- H1: Pier and Beam Foundation Repair in Tulsa, OK
- Unique angle: Lean hard on Tulsa's pre-1960 housing stock. Name Maple Ridge, Brookside, Florence Park, Swan Lake, Kendall-Whittier as pier-and-beam neighborhoods. Mention crawl space access, beam sistering, joist repair, shimming.
- THIS PAGE IS ALREADY RANKING. Preserve and enhance, do not rewrite from scratch.

5.3 /services/slab-foundation-repair (RENAMED FROM /services/slab-repair, set up 301 redirect)
- Title: Slab Foundation Repair in Tulsa, OK | Tulsa Foundation Experts
- Meta: Slab foundation repair in Tulsa for homes built after 1960. Concrete cracks, slab leaks, settling. Free inspection from local experts.
- H1: Slab Foundation Repair in Tulsa, OK
- Unique angle: Post-1960 housing, mostly South Tulsa, Broken Arrow, Bixby, Jenks. Cover concrete cracks, slab leaks, push pier and helical pier solutions.

5.4 /services/house-leveling (PRESERVE EXISTING URL, ENHANCE CONTENT)
- Title: House Leveling in Tulsa, OK | Foundation Lifting | Tulsa Foundation Experts
- Meta: House leveling and foundation lifting in Tulsa. Restore sloping floors and sticking doors with piers or shims. Free inspection.
- H1: House Leveling in Tulsa, OK
- Unique angle: When houses tilt or sag, leveling can be done with piers (slab) or shims (pier and beam). Differentiate. Reference how much settlement is "normal."

5.5 /services/crawl-space-repair (NEW)
- Title: Crawl Space Repair in Tulsa, OK | Encapsulation | Tulsa Foundation Experts
- Meta: Crawl space repair, encapsulation, and moisture control in Tulsa, OK. Stop rot, mold, and floor sagging. Free inspection.
- H1: Crawl Space Repair in Tulsa, OK
- Unique angle: Older Tulsa pier-and-beam homes have crawl spaces. Cover encapsulation, vapor barriers, dehumidifiers, joist sistering, mold remediation.

5.6 /services/helical-and-steel-piers (NEW)
- Title: Helical Piers and Steel Piers in Tulsa, OK | Tulsa Foundation Experts
- Meta: Helical pier and push pier installation in Tulsa expansive clay soil. Free engineering inspection.
- H1: Helical Piers and Steel Piers in Tulsa, OK
- Unique angle: Compare helical (screwed in, lighter loads or limited access) vs push piers (driven, heavier loads, deeper bedrock).

5.7 /services/mudjacking-and-polyjacking (RENAMED FROM /services/mudjacking, set up 301 redirect)
- Title: Mudjacking and Polyjacking in Tulsa, OK | Concrete Leveling | Tulsa Foundation Experts
- Meta: Concrete leveling in Tulsa with polyurethane foam or traditional mudjacking. Driveways, patios, sidewalks. Free estimate.
- H1: Mudjacking and Polyjacking in Tulsa, OK
- Unique angle: Compare polyurethane foam (lightweight, fast cure, more expensive) to traditional mudjacking (cement slurry, cheaper, heavier).

5.8 /services/foundation-inspection (NEW)
- Title: Free Foundation Inspection in Tulsa, OK | Tulsa Foundation Experts
- Meta: Free foundation inspection in Tulsa metro. Licensed inspectors check for cracks, settlement, drainage, and structural issues. No obligation.
- H1: Free Foundation Inspection in Tulsa, OK
- Unique angle: What to expect during inspection. What inspector checks. Written report. No obligation.

EXISTING /services/foundation-crack-repair AND /services/drainage:
- Foundation-crack-repair: KEEP as separate URL, enhance content per template
- Drainage: KEEP as separate URL OR fold key content into pillar guide and 410 — your call based on its current word count and ranking signal. Default to keeping if over 400 words.

# ====================================================================
# SECTION 6: CITY PAGES (12 pages)
# ====================================================================

MASTER CITY PAGE TEMPLATE:
- 800-1,200 words, AT LEAST 500 words unique per page
- 30-40% genuinely unique content (Memorable Design 2026 threshold)

Section 1: Hero
- Breadcrumb: Home > Service Areas > [City]
- H1: Foundation Repair in [City], Oklahoma
- Sub: 1-2 sentences with city name, expansive clay soil reference, free inspection CTA

Section 2: Why [City] Homes Have Foundation Problems (200-300 words, UNIQUE PER CITY)
- Reference specific subdivisions, era of housing stock, landmarks, geographic features
- Connect to expansive clay soil

Section 3: Foundation Services for [City] Homeowners (6-service grid, 50-100 words per card, referencing how each service applies to [City] specifically)

Section 4: Common Foundation Issues in [City] (150-250 words, UNIQUE PER CITY)
- 5-7 issues most common to that city's housing stock and soil

Section 5: Our Process for [City] Homeowners (4-step, boilerplate OK)

Section 6: Nearby Areas We Serve (4-5 links to adjacent city pages)

Section 7: FAQ (3-4 questions, UNIQUE PER CITY)

Section 8: Final CTA + form

CITIES TO BUILD (priority order):

1. Broken Arrow /broken-arrow — 113K pop. Post-1970 boomtown growth. Subdivisions: Indian Springs, Forest Ridge, Stone Wood Hills. Mostly slab.
2. Bixby /bixby — 31K pop. Affluent suburb, rapid 2000s-2020s growth. Subdivisions: Stone Canyon, White Hawk, The Park at Bixby. Mix of slab and pier and beam.
3. Jenks /jenks — 28K pop. Family suburb near the Arkansas River. Riverfront properties have drainage issues. Subdivisions: River City, Pebble Beach.
4. Owasso /owasso — 39K pop. North Tulsa metro. Subdivisions: Bailey Ranch, The Greens, Falls at Garrett Creek. Newer slab construction.
5. Sand Springs /sand-springs — 20K pop. West of Tulsa. Older housing 1920s-1950s, lots of pier and beam.
6. Sapulpa /sapulpa — 22K pop. Route 66 town. Pre-1950 brick homes. Subdivisions: Heritage Hills.
7. Glenpool /glenpool — 14K pop. South metro. Mostly slab, post-1990 construction.
8. Catoosa /catoosa — 7K pop. East metro. Mix of housing eras. Blue Whale roadside attraction as local anchor.
9. Coweta /coweta — 10K pop. Southeast. Mostly newer slab construction.
10. Claremore /claremore — 19K pop. Northeast metro. Will Rogers heritage. Mix of older brick downtown and newer subdivisions.
11. Skiatook /skiatook — 8K pop. North. Lake Skiatook proximity, drainage issues for lakefront homes.
12. Collinsville /collinsville — 7K pop. North metro. Rural-suburban mix.

AVOID DUPLICATE CONTENT (March 2026 core update penalty):
- Do NOT use the same opening sentence template across cities
- Do NOT use identical "Common Issues" lists across cities
- Embed unique facts: subdivision names, year ranges, landmarks
- Each city's FAQ must have at least 2 city-specific Q&As
- Aim for 40% unique content per city page

# ====================================================================
# SECTION 7: NEIGHBORHOOD PAGES (8 pages — Tulsa proper)
# ====================================================================

MASTER NEIGHBORHOOD PAGE TEMPLATE (800-1,000 words):

Section 1: Hero
- Breadcrumb: Home > Service Areas > Tulsa > [Neighborhood]
- H1: Foundation Repair in [Neighborhood] Tulsa
- Sub: Era of homes + specific foundation challenges + free inspection CTA

Section 2: About [Neighborhood] Foundations (200-300 words, UNIQUE)
- Era homes were built
- Foundation type dominant (pier and beam vs slab)
- Specific construction features
- Why that era is prone to specific problems

Section 3: Common Foundation Issues in [Neighborhood] (150-250 words)
- 5-7 issues SPECIFIC to that neighborhood's housing

Section 4: Services We Provide in [Neighborhood] (4-card grid)
- Pier-and-beam neighborhoods: pier and beam repair, crawl space, house leveling, helical piers
- Slab neighborhoods: slab repair, push piers, mudjacking, leak detection

Section 5: FAQ (3 questions, UNIQUE)

Section 6: Final CTA

NEIGHBORHOODS TO BUILD (priority order):

1. Maple Ridge /neighborhoods/maple-ridge — 1910s-1920s mansions, National Register. Pier and beam, brick veneer separation, cast iron plumbing under slabs
2. Brookside /neighborhoods/brookside — 1920s + 1950s mix. Both pier and beam and slab
3. Florence Park /neighborhoods/florence-park — 1930s-1950s bungalows. Pier and beam, beam sistering, crawl space encapsulation
4. Midtown Tulsa /neighborhoods/midtown-tulsa — Umbrella for multiple sub-neighborhoods. Mostly pier and beam, high-value market
5. Cherry Street /neighborhoods/cherry-street — 1920s-1940s. Pier and beam, sloping floor repair
6. Kendall-Whittier /neighborhoods/kendall-whittier — 1910s-1930s. Pier and beam, older construction with settling
7. Lortondale /neighborhoods/lortondale — 1950s mid-century modern. Slab + some pier and beam, flat-roof drainage issues
8. South Tulsa /neighborhoods/south-tulsa — 1970s-2000s. Slab foundation dominant, push pier focus

# ====================================================================
# SECTION 8: PILLAR CONTENT
# ====================================================================

/tulsa-clay-soil-foundation-guide (3,000-4,500 words):

META:
- Title: Tulsa Clay Soil and Foundation Damage: The Complete Homeowner's Guide
- Description: How Tulsa's expansive clay soil causes foundation damage, what signs to watch for, and what repair options exist. Written for Tulsa homeowners.

STRUCTURE:
1. Intro (200 words) — why Tulsa homeowners deal with more foundation issues than national averages
2. What is expansive clay soil? (400 words) — VERIFY numeric claims before including (montmorillonite, smectite, swell volume percentages, swell force)
3. Tulsa's specific soil zones (300 words) — north vs south Tulsa, east vs west
4. The wet-dry cycle (300 words) — Oklahoma climate, spring rain bursts, drought summers
5. How clay damages foundations (400 words) — heave, settlement, differential movement, lateral pressure
6. Signs of clay-soil damage on your home (400 words) — visual checklist, 7-10 key indicators
7. Why older Tulsa neighborhoods have it worse (400 words) — pre-1960 pier and beam, shallower foundations
8. Repair options (500 words) — pier and beam: shims and beam sistering. Slab: push piers vs helical piers vs polyjacking
9. Prevention strategies (400 words) — drainage, gutters, root barriers, foundation watering
10. Insurance and clay soil (200 words) — Oklahoma homeowners insurance typically excludes soil-movement damage
11. When to call a pro (200 words) — thresholds for free inspection
12. FAQ (5-6 questions)
13. Call to action

SCHEMA: Article + FAQPage + BreadcrumbList

VISUAL ELEMENTS: 1 infographic, 1 chart, 1 photo. NO fake before/after.

# ====================================================================
# SECTION 9: BLOG POSTS (12-15 posts, 1,200-2,000 words each)
# ====================================================================

MASTER BLOG POST TEMPLATE:
- Schema: Article + BreadcrumbList + FAQPage if FAQs included
- Internal links: 3+ to service pages, 2+ to other blog posts, 1+ to pillar guide
- Author: "The Tulsa Foundation Experts Team" or generic

POSTS TO BUILD (priority order):

9.1 /blog/foundation-repair-cost-tulsa-2026 — What Foundation Repair Costs in Tulsa in 2026
9.2 /blog/does-oklahoma-insurance-cover-foundation-repair — Does Oklahoma Homeowners Insurance Cover Foundation Repair?
9.3 /blog/selling-tulsa-home-foundation-problems — Can You Sell a Tulsa Home with Foundation Problems?
9.4 /blog/earthquake-foundation-cracks-tulsa — Did the Earthquake Crack My Foundation? A Tulsa Homeowner's Guide
9.5 /blog/mudjacking-vs-polyjacking-oklahoma — Mudjacking vs Polyjacking in Oklahoma: Which Is Right for Your Driveway?
9.6 /blog/pier-and-beam-vs-slab-foundation-tulsa — Pier and Beam vs Slab Foundations in Tulsa
9.7 /blog/structural-vs-cosmetic-foundation-cracks — How to Tell if Your Foundation Cracks Are Structural or Cosmetic
9.8 /blog/helical-vs-push-piers-clay-soil — Helical Piers vs Push Piers in Expansive Clay Soil
9.9 /blog/maple-ridge-tulsa-foundation-issues — Why Maple Ridge Tulsa Homes Have Unique Foundation Issues
9.10 /blog/foundation-watering-tulsa-drought — Foundation Watering in Tulsa: How to Prevent Drought Damage
9.11 /blog/how-long-foundation-repair-takes — How Long Does Foundation Repair Take?
9.12 /blog/slab-leaks-vs-foundation-damage — Slab Leaks vs Foundation Damage
9.13 /blog/what-to-expect-foundation-inspection — What to Expect During a Free Foundation Inspection
9.14 /blog/best-time-foundation-repair-tulsa — When Is the Best Time of Year for Foundation Repair in Tulsa?
9.15 /blog/foundation-repair-warranties-explained — Foundation Repair Warranties Explained

Note: 8 blog posts already exist on the site. Preserve them, enhance per template, do not duplicate.

# ====================================================================
# SECTION 10: CONVERSION ELEMENTS (every page)
# ====================================================================

HEADER:
- Logo (left)
- Nav (center)
- Phone number with click-to-call (right) — prominent

STICKY MOBILE BAR:
- Phone CTA on left half
- "Get Free Inspection" anchor link on right half
- Persistent at bottom of screen

FORMS:
Required fields: Name, Phone, ZIP, Brief description (textarea, optional)
NOT required: email, address, year built

Above the form: "When you submit this form, your information is shared with a licensed foundation repair contractor for the purpose of scheduling your free inspection."

TCPA consent block: preserve existing exact text from /contact, NOT pre-checked.

Submit button: "Get My Free Inspection"

TRUST SIGNALS (every page):
- "Licensed and insured contractors"
- "Free, no-obligation inspections"
- "Local Tulsa specialists"
- "Same-week appointments available"

HEADER DISCLOSURE STRIP (every page):
"A marketing service connecting Tulsa-area homeowners with licensed foundation repair contractors. Compass Camper LLC is not a licensed contractor and does not perform foundation repair work."

FOOTER (every page):
Preserve current footer disclaimer verbatim per COMPLIANCE_STANDARDS.md.

# ====================================================================
# SECTION 11: INTERNAL LINKING MATRIX
# ====================================================================

From homepage, link to: 8 service pages, top 4 city pages, 2 neighborhood pages, pillar guide, 2-3 latest blog posts
From each service page, link to: homepage, 3 other service pages, 3 city pages, 1-2 blog posts, pillar guide
From each city page, link to: homepage, 4 service pages, 3 adjacent city pages, 1 blog post
From each neighborhood page, link to: homepage, Tulsa city page, 3 service pages, 1-2 adjacent neighborhood pages, pillar guide
From each blog post, link to: 3+ service pages, 2+ other blog posts, pillar guide always, 1+ city/neighborhood

Cross-link anchors to use (vary, do not over-optimize):
- "foundation repair in Tulsa"
- "pier and beam repair"
- "schedule a free foundation inspection"
- "expansive clay soil guide"
- "[neighborhood] foundation issues"
- "[city] foundation repair"

# ====================================================================
# SECTION 12: IMAGES & VISUAL ASSETS
# ====================================================================

REQUIRED ASSETS:
- Logo (SVG, already exists)
- Hero image for homepage (WebP, 1920x1080, NO stock cliches)
- Hero image variants for service pages
- Open Graph image (1200x630)
- Favicon set
- Pillar guide: 1 soil cycle infographic + 1 force comparison chart
- Service pages: 1-2 relevant images each

SOURCING RULES:
- NO fake before/after photos
- NO stock photos of "happy families"
- NO fake team photos
- YES to: stock photos of generic homes, foundation diagrams, illustrative graphics

ALT TEXT FORMULA: [Subject] in [location context] — Tulsa Foundation Experts
(Replace em dash with comma per style rules)

# ====================================================================
# SECTION 13: BUILD SEQUENCE
# ====================================================================

EXECUTE IN THIS EXACT ORDER. Stop after each batch and wait for my approval.

BATCH 1 (Days 1-7): Audit and foundation fixes
1. Run full site audit per Section 0
2. Fix all title tags and meta descriptions per Section 2 formulas
3. Fix all H1s per formulas
4. Add ProfessionalService + BreadcrumbList schema to homepage
5. Add Service + FAQPage + BreadcrumbList schema to existing service pages
6. Verify header disclosure strip present on every page
7. Verify footer disclaimer present on every page
8. Verify TCPA consent block on all forms
9. Confirm phone (918) 673-7959 click-to-call works on all pages
10. Add sticky mobile bar
11. Run `npm run build`, report results
12. STOP and wait for approval

BATCH 2 (Days 8-14): Homepage and 4 core services
1. Rebuild homepage per Section 4
2. Build /services/foundation-repair (NEW umbrella page)
3. Enhance /services/pier-and-beam-foundation-repair (preserve URL with 301 from old, this is the ranking page)
4. Enhance /services/slab-foundation-repair (rename from /services/slab-repair with 301)
5. Build /services/foundation-inspection (NEW)
6. Verify schema with Google Rich Results Test
7. Run `npm run build`, report results
8. STOP and wait for approval

BATCH 3 (Days 15-21): Remaining services and top 6 cities
1. Enhance /services/house-leveling (preserve URL)
2. Build /services/crawl-space-repair (NEW)
3. Build /services/helical-and-steel-piers (NEW)
4. Build /services/mudjacking-and-polyjacking (rename from /services/mudjacking with 301)
5. Build/enhance /broken-arrow, /bixby, /jenks, /owasso, /sand-springs, /sapulpa
6. Build /locations overview page
7. Run `npm run build`, report results
8. STOP and wait for approval

BATCH 4 (Days 22-28): Remaining cities and pillar guide
1. Build/enhance /glenpool, /catoosa, /coweta, /claremore, /skiatook, /collinsville
2. Build /tulsa-clay-soil-foundation-guide pillar
3. Add all internal links per Section 11
4. Run `npm run build`, report results
5. STOP and wait for approval

BATCH 5 (Days 29-42): Neighborhood pages
1. Build all 8 neighborhood pages in priority order
2. Add cross-links to city pages and service pages
3. Run `npm run build`, report results
4. STOP and wait for approval

BATCH 6 (Days 43-60): First 6 blog posts
1. Publish 6 blog posts (priority order: cost, insurance, selling, earthquake, pier-vs-slab, mudjacking-vs-polyjacking)
2. Each post gets internal links per Section 11
3. Verify /blog index page is current
4. Run `npm run build`, report results
5. STOP and wait for approval

BATCH 7 (Days 61-90): Remaining blog posts + optimization
1. Publish remaining 6-9 blog posts
2. Review GSC for pages stuck in "discovered, not indexed" — flag for rewrite
3. Continuous internal linking improvements based on which pages Google starts ranking
4. Run `npm run build`, report results
5. STOP — site build complete

# ====================================================================
# SECTION 14: WHAT NOT TO BUILD
# ====================================================================

Per COMPLIANCE_STANDARDS.md, the following are explicitly OUT until a real tenant is signed:

- Reviews section with any testimonials (real or fake)
- "Trusted by 500+ homeowners" counter
- Team bios with stock photos
- Specific contractor license numbers (we don't have a tenant yet)
- BBB badge (not accredited)
- "Since 19XX" date claims (Compass Camper LLC is new)
- Before/after photo galleries with claimed projects
- Case studies with claimed customer details
- "Featured in [news outlet]" claims without real coverage
- Star ratings displayed on the site
- Awards or "Best of Tulsa" badges
- AggregateRating schema
- Review schema

Each of these is a direct demotion risk under Google's review abuse, scaled content abuse, or deceptive practices policies, AND creates FTC/UDAP legal exposure.

# ====================================================================
# SECTION 15: REPORTING REQUIREMENTS
# ====================================================================

AFTER EACH BATCH:

1. List of files modified, created, or deleted
2. Compliance verification greps:
   - grep -ri "vetted\|our network\|pre-screened\|hand-selected\|top-rated" src/ --exclude-dir=node_modules
   - grep -ri "AggregateRating\|\"Review\"" src/ --exclude-dir=node_modules
   - grep -r "—" src/ --exclude-dir=node_modules
   - grep -ri "we diagnose\|we level\|we fix\|we install\|we perform" src/ --exclude-dir=node_modules
3. Build result from `npm run build`
4. Schema validation result (use Google Rich Results Test on key pages)
5. Any judgment calls you made (especially fact-verification decisions where you replaced specific numbers with qualitative descriptions)
6. List of URLs added to public/_redirects (301 redirects for renamed pages)
7. Any blocking issues that need my decision before next batch

# ====================================================================
# STARTING INSTRUCTIONS
# ====================================================================

1. Read this entire prompt
2. Reference COMPLIANCE_STANDARDS.md and TENANT_ACTIVATION_PLAYBOOK.md from project knowledge
3. Review the existing site structure (`view src/`, list pages in src/pages and src/content)
4. Execute Batch 1 only
5. Report results per Section 15
6. STOP and wait for my approval before Batch 2

Do NOT commit, push, or deploy. Do NOT use Wrangler. I deploy manually via Direct Upload after reviewing each batch.

Begin with Batch 1.
