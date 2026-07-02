# CLAUDE.md — Standing Instructions for [SITE_BRAND]

This file is your persistent project context. Read it at the start of every session before working on any task. It defines who we are, what we're building, design rules, content rules, SEO rules, and quality standards that apply to every page on the site.

For specific page content, refer to `PROJECT_BRIEF.md` in the project root.

---

## SITE VARIABLES (Fill these in when starting a new site)

- **SITE_BRAND:** [e.g., "Tulsa Foundation Experts"]
- **DOMAIN:** [e.g., "tulsafoundationexperts.com"]
- **PRIMARY_CITY:** [e.g., "Tulsa"]
- **PRIMARY_STATE:** [e.g., "Oklahoma" / state abbreviation "OK"]
- **METRO_NAME:** [e.g., "Tulsa metro" or "Greater Phoenix"]
- **NICHE:** [e.g., "foundation repair" / "commercial roofing" / "spray foam insulation"]
- **NICHE_SHORT:** [e.g., "foundation" / "roofing" / "insulation"]
- **PHONE_DISPLAY:** [e.g., "(918) 555-0100"]
- **PHONE_TEL:** [e.g., "+19185550100"]
- **PRIMARY_KEYWORD:** [e.g., "foundation repair Tulsa"]
- **SUBURBS:** [list of 8-12 adjacent cities, e.g., "Broken Arrow, Bixby, Owasso, Jenks, Sand Springs, Sapulpa, Glenpool, Coweta, Catoosa, Collinsville, Skiatook"]
- **SERVICES:** [list of 5-7 sub-services within the niche]
- **CLIMATE_FACTOR:** [the local environmental cause of demand, e.g., "expansive clay soil" / "monsoon hail damage" / "freeze-thaw cycles"]
- **TICKET_RANGE:** [typical job value range, e.g., "$3,500 to $25,000"]

---

## Project Overview

**Brand name:** SITE_BRAND
**Domain:** DOMAIN
**Legal operating entity:** Compass Camper LLC (Oregon)
**Business model:** Marketing service that connects PRIMARY_CITY-area homeowners (or property managers, depending on niche) with vetted, licensed NICHE contractors. We do not perform NICHE work directly. We are a lead generation and marketing platform.
**Target market:** Homeowners (or property managers, depending on niche) in the METRO_NAME and surrounding suburbs
**Site type:** Static SEO-optimized lead generation website (rank-and-rent model)

---

## Tech Stack (Standard For All Sites)

- **Framework:** Astro 6.x with TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **Build:** Static output, no SSR
- **Node:** 22.x via nvm (pinned in `.nvmrc`)
- **Vite:** 7.3.x pinned via package.json overrides
- **Sitemap:** `@astrojs/sitemap` 3.x
- **Deployment target:** Cloudflare Pages (configuration not done yet — hold off until user approves)
- **Domain registrar:** Cloudflare Registrar
- **Call tracking:** Call Rail (number to be added pre-launch)

---

## Design System

### Color palette (configurable per site)
Default trustworthy palette:
- **Primary (navy):** Use the `navy-*` scale defined in `global.css`. Navy-900 for headers and dark sections, navy-800 for body text on light backgrounds, navy-50/100 for subtle backgrounds.
- **Accent (orange):** Use the `orange-*` scale. Orange-500/600 for CTAs and highlights.
- **Neutrals:** White, off-white (`bg-gray-50`), and the navy scale for text.

If a different palette better fits the niche (e.g., deep green for landscaping, dark red for emergency services), override this in PROJECT_BRIEF.md.

### Typography
- Headlines: Bold, large, navy-900 on light / white on dark backgrounds
- Body: Base 16px, leading-relaxed
- Links in body: orange-600 with underline on hover
- Avoid all-caps except for small section eyebrow labels

### Spacing
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Paragraphs MUST have visible vertical spacing (mb-4 minimum or space-y-4 on prose containers)
- Section content max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Prose blocks: max-w-4xl. Grid blocks: max-w-6xl.

### Section rhythm
Alternate backgrounds for visual flow: white → gray-50 → white → navy-900 (with white text) → white. Never stack two identical-colored sections without strong visual separation.

### Buttons
- **Primary CTA:** Orange-600 bg, white text, large padding, rounded-md, hover:bg-orange-700
- **Secondary CTA:** Outline style with orange-600 border and text
- **Phone CTAs:** Always include phone icon, always use tel: links
- Minimum mobile tap target: 48px tall
- Full-width on mobile, auto-width on desktop

### Cards
White background, shadow-sm/md, rounded-lg, padding p-6 to p-8. Icon at top in orange-100 background with orange-600 icon color.

### Icons
Use Lucide icons. Consistency matters — never mix icon libraries on the same site.

---

## Brand Voice & Writing Rules

### Voice characteristics
- **Confident but honest.** The smart friend who knows the niche, not the slick salesperson.
- **Direct.** Short sentences. Active voice. No corporate filler.
- **Locally aware.** Mention PRIMARY_CITY, suburbs, and CLIMATE_FACTOR wherever natural. This is local SEO gold AND builds trust.
- **Empathetic.** NICHE problems are scary and expensive. Acknowledge that.

### Writing rules — NEVER violate
- **NO fake history claims.** No "since 1987," "decades of experience," "family-owned for 40 years." The site is brand-new in [LAUNCH_YEAR]. Compass Camper LLC is the operator.
- **NO fake certifications, awards, or BBB ratings.**
- **NO fake testimonials, reviews, or customer photos.** Skip these sections entirely until a real tenant provides real reviews.
- **NO fake team bios with stock photos.** Don't invent named individuals.
- **YES to "vetted," "licensed," "trusted," "local," "experienced."** Honest descriptors of partner contractors.
- **YES to "our network," "our partner contractors," "the licensed professionals we work with."**

### Style guide
- Avoid em dashes (—). Use commas, periods, parentheses, or "to" instead. They feel AI-generated.
- Numbers under 10: spell out. 10+: digits.
- Currency: $3,500 (no space).
- Phone: ALWAYS formatted as PHONE_DISPLAY.
- Capitalize service names consistently throughout the site.
- Service URL slugs use hyphens and lowercase (e.g., `/services/foundation-crack-repair`).

### Local SEO pattern (every page)
- Mention PRIMARY_CITY or a specific suburb early
- Reference CLIMATE_FACTOR when natural
- Name specific neighborhoods or adjacent cities when relevant

---

## SEO Requirements (Every Page)

### Meta tags (mandatory via BaseLayout)
- Unique meta title, max 60 characters
- Unique meta description, max 155 characters
- Canonical URL pointing to the page itself
- Open Graph and Twitter card tags
- No noindex/nofollow unless explicitly instructed

### Schema markup (JSON-LD, injected via BaseLayout)
- **LocalBusiness schema on homepage**
- **Organization schema on About page** (referencing Compass Camper LLC)
- **FAQPage schema** on any page with FAQs
- **BreadcrumbList schema** on service, city, and blog pages
- **Service schema** on each service page
- **Article schema** on blog posts

### Internal linking rules
- Service pages link to homepage and 3+ other service pages
- City pages link to homepage, 3+ service pages, and 3+ adjacent city pages
- Blog posts link to relevant service pages
- Footer contains complete navigation
- Visible breadcrumbs on service, city, and blog pages

### Image rules
- Descriptive alt text mentioning relevant keywords
- Astro image components for optimization
- Hero images max-width 1920px, WebP with JPG fallback
- Lazy-load below-the-fold images
- Use sparingly. Don't bloat the site with stock photos.

### URL structure (standard for all sites)
- Homepage: `/`
- About: `/about`
- Contact: `/contact`
- Privacy: `/privacy`
- Terms: `/terms`
- Services overview: `/services`
- Individual services: `/services/[slug]`
- City pages: `/[city-slug]` (e.g., `/broken-arrow`)
- Blog index: `/blog`
- Blog posts: `/blog/[post-slug]`
- 404: Astro's default 404 route

---

## Legal & Compliance Requirements

### Footer disclaimer (every page)
"This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. SITE_BRAND is a marketing service that connects homeowners with independent, licensed NICHE contractors. All NICHE and related services are performed by independent licensed contractors. Compass Camper LLC is not a licensed contractor and does not perform NICHE work directly. Contractor license numbers are available upon request."

### About page must include
- Clear identification of Compass Camper LLC as the operator
- Explanation that the site is a marketing service, not a contractor
- Statement that all work is performed by independent licensed contractors

### Form privacy microcopy
"We respect your privacy. Your information is only shared with the licensed contractor we match you with. See our Privacy Policy for details."

---

## Phone Number & Contact Info

- Display phone: PHONE_DISPLAY (placeholder; swap for real Call Rail tracking number pre-launch)
- All phone numbers are tel:PHONE_TEL clickable links
- Phone appears in: header top bar, hero CTAs, contact page, footer, every final CTA

---

## Quality Standards (Every Page)

Before considering any page "done," verify:
1. Unique meta title + description
2. H1 present and contains primary keyword
3. H2 structure throughout
4. Schema markup injected
5. Mobile-responsive at 375px, 768px, 1280px
6. CTAs clickable, tel: links work, no internal 404s
7. No Lorem Ipsum or placeholder text
8. Visible paragraph spacing (1rem min)
9. Page loads with no console errors
10. Image alt text is descriptive
11. Footer disclaimer intact

---

## Build Order

Build pages in this order. Always.

**Phase 1 — Foundation (6 pages):**
1. Homepage (`/`)
2. About (`/about`)
3. Contact (`/contact`)
4. Privacy Policy (`/privacy`)
5. Terms of Service (`/terms`)
6. Custom 404 page

**Phase 2 — Services (1 + N pages):**
7. Services overview (`/services`)
8-N. Individual service pages (one per service from PROJECT_BRIEF.md)

**Phase 3 — Cities (N pages):**
One page per city in the SUBURBS list, plus the PRIMARY_CITY. URL pattern: `/[city-slug]`.

**Phase 4 — Blog (1 + 6-10 pages):**
- Blog index (`/blog`)
- 6 to 10 blog posts targeting longtail informational keywords

Total target: 30 to 40 pages per site.

---

## Working Style

### Autonomy level
The user has approved you to work through PROJECT_BRIEF.md autonomously in one continuous run. Build pages in the order above. Only stop and ask the user when:
1. You hit genuine ambiguity that affects content meaningfully
2. You encounter a technical error you can't resolve
3. You're about to make a destructive change
4. You complete the full build and need to confirm deployment

For minor design decisions or content phrasing within the established voice, make the call yourself and keep moving.

### Deployment (DO NOT do without explicit approval)
- Do NOT push to GitHub
- Do NOT connect Cloudflare Pages
- Do NOT configure a custom domain
- Do NOT run production deployment commands

### Commit discipline
Local git for version safety is fine. Don't push anywhere. Use clear commit messages.

### Reporting back
When complete:
1. Summarize what was built (page count, components, deviations)
2. Note content judgment calls
3. List skipped or incomplete items
4. Suggest review priorities
5. Wait for user feedback before deployment

---

## Common Pitfalls To Avoid

- Don't add testimonials, customer photos, or named team members
- Don't create localhost-only features that break in production
- Don't add tracking pixels, analytics, or third-party scripts yet
- Don't auto-update Astro or Vite during the build
- Don't create new component files when extending existing ones works
- Don't write FAQs that contradict other pages
- Don't use em dashes as a stylistic crutch

---

End of CLAUDE.md template
