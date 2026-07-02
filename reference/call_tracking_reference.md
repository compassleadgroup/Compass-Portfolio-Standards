# Call Tracking & R&R Monetization — Reference Doc (2026)

**Context:** tulsafoundationexperts.com, pre-launch, Compass Camper LLC, sub-$45/mo budget. Niche: foundation repair, Tulsa OK metro.

---

## Decision Defaults

- **Software:** CallRail Call Tracking $45/mo. Pick a Tulsa 918 local number on day 1, use it forever on every citation.
- **Pricing model start:** Flat rent $750-$1,500/mo to one exclusive Tulsa foundation tenant after 4-week shadow period.
- **Billable definition:** Inbound call ≥90 seconds, OK area code or geo'd within 50mi of Tulsa, foundation/structural inquiry. Not: existing customer, telemarketer, supplier, job seeker, wrong number.
- **Dispute window:** 48-72 hours. Recording is the arbiter. Cap refunds at 10-15% of monthly invoiced.

---

## Software Pricing Matrix (2026)

| Platform | Entry $ | Includes | Verdict |
|---|---|---|---|
| **CallRail Call Tracking** | $45/mo | 5 numbers, 250 local min, DNI, recording, basic transcription, automation rules. Overages: $0.05/min, $0.03/SMS, $3/extra number | **Pick this.** Form tracking is $90 tier. |
| CallRail + AI (Premium CI) | $90-135/mo | Adds AI summaries, sentiment, keyword spotting, auto-tagging | Upgrade at 200+ calls/mo |
| WhatConverts | $30/mo | DNI, recording, includes form tracking on entry plan, $30 usage incl. | Budget alternative if multi-site |
| CallTrackingMetrics | $79/mo | Unlimited users, attribution, IVR, manual scoring | Overkill single site |
| Nimbata | ~$39/mo | Pay-per-answered-call (not per-min), DNI, recording, AI scoring higher tiers | Long-call use cases |
| Ringba | $147/mo ($127 annual) | Pay-per-call routing, Ring Tree, IVR, RTB, partner mgmt | Brokers only |
| Phonexa | $100-250/mo Lite, real spend $700-1,500 | Call Logic + LMS Sync, ping trees, AI agents | Lead networks only |
| Twilio DIY | ~$3-10/mo all-in | $1/number/mo, $0.0085/min in, $0.014/min out, $0.0079/SMS | Build everything yourself; will migrate |
| OpenPhone/Quo (rebranded 9/23/25, $105M raise) | $15/user/mo | Business phone, AI summaries, manual recording | NOT call tracking — no DNI |
| Google Voice Business | $10/user + $7 Workspace | Forwarding, voicemail | Not viable for R&R |
| Invoca/Marchex/Retreaver | $500-2,000+ custom | Enterprise CI | Out of scope |

**Citation consistency rule:** Never start with Twilio and port to CallRail later. NAP inconsistency tanks local SEO. CallRail numbers port out cleanly.

---

## Foundation Repair Economics (Tulsa)

| Metric | Value | Source |
|---|---|---|
| National avg foundation ticket | ~$5,100 (band $2,200-$8,100) | Angi, HomeAdvisor, This Old House |
| Tulsa job range | $3,000-$15,000 (deep steel piers due to shale + red clay) | Level Home Foundation Repair |
| Wholesale foundation call (exclusive) | **$113-$147** | conXpros (foundation-leads page, 2026-02-11) |
| Wholesale foundation form lead | **$87-$113** | conXpros |
| Foundation call (budget tier) | $55+ | All Local Pros |
| R&R site valuation formula | monthly leads × $/lead × 12 × 2 | LeadsForward (Birmingham foundation site) |

---

## Contractor KPI Benchmarks

| KPI | Healthy Range | Source |
|---|---|---|
| CPL (contractor target) | $35-$75 blended; $150 ceiling small jobs; $300-500 large | JobNimbus, Contractor Accelerator |
| CPL home services Google Ads (2025) | $90.92 avg; Roofing $228.15; Doors/Windows $200.34; Construction $165.67 | LocaliQ (3,200+ campaigns 4/24-3/25) |
| CPL YoY change | +10.51% (69% of businesses) | LocaliQ |
| Lead-to-appointment set | 70-85% inbound digital target | JobNimbus |
| Lead-to-job conversion | 15-30%/mo | JobNimbus |
| Sit-to-close | 36% healthy, 10% floor | Contractor Accelerator |
| CAC | $250-750 | JobNimbus |
| ROAS expected | 4-10x on paid spend | Industry common |
| Foundation realistic set rate | 50-70% qualified calls | Inferred |
| Foundation realistic close rate | 25-40% | Inferred |

**Per-call value math:** 1-in-3 close × $5,000 ticket × 40% margin = $667 gross profit per qualified call. Justifies $100+/call or $1,500+/mo flat rent.

---

## Lead Validation

**Duration thresholds:**
- 60s = light (insurance, high-volume)
- **90s = home services default** (PX Media, Soleo, CallThread, RingPartner)
- 120s = heavy qual (legal mass tort, final expense)

**Junk taxonomy to exclude:** <threshold, robodialers, job seekers, existing customers, wrong numbers, out-of-area, solicitors, off-service inquiries.

**Form validation stack (2026):**
- **Cloudflare Turnstile** (free 1M/mo) — default in 2026 after Google cut reCAPTCHA free tier from 1M → 10K (then $8/mo for 10K-100K, per Google Cloud Docs 2026-05-20)
- Honeypot fields (free)
- Twilio Lookup ($0.005-0.01/query) — phone validation, VoIP detection
- NeverBounce/ZeroBounce/Mailgun ($0.005-0.01) — email verification
- IP/geo filters — reject outside OK metro + flag VPN

**CallRail spam handling:** Auto-challenges robodialers, soft-blocks same area code 5x in 3min, "Mark as Spam" workflow.

---

## Pricing Models for R&R

| Model | Pros | Cons | Foundation Price | When |
|---|---|---|---|---|
| **Flat rent** | Predictable, simple, no disputes | You eat volatility | **$750-2,500/mo** | New site, no data — START HERE |
| Pay-per-call | Aligned incentives, scales | Disputes, volatile revenue | $75-150/call | After 3-6mo stable data |
| Pay-per-form-lead | Pre-qualified | Half the close rate of calls | $50-100/lead | Rare for foundation |
| Hybrid base + per-call | Smooth revenue, aligned | More complex contract | $500 base + $50/call | Month 6+ |
| Revenue share | Max upside | Trust/access required | 5-10% closed jobs | Long relationships only |
| Base + bonus per booked job | Aligned to outcome | Self-reporting risk | Variable | With verification via recordings |

**Rule of thumb:** Charge 30-50% of gross profit the site generates.

---

## R&R Operator Protection Checklist

1. Own domain, hosting, CallRail acct, GBP — never in tenant's name
2. Use forwarding number, not tenant's direct line
3. "No direct contact" clause — tenant can't redirect callers
4. 30-day cancellation both sides; auto-renew month-to-month after 3-6mo minimum
5. Late pay = forwarding off after 5 days
6. First month's rent before forwarding turns on
7. No exclusivity until 60+ days
8. Missed-call SLA: tenant answers 70-80% within 60s during business hours
9. Always have backup contractor warmed up

---

## Pre-Launch → Tenant Playbook

**Week 0 (pre-launch):**
1. CallRail $45 plan, Tulsa 918 number (permanent citation number)
2. DNI script on site, call recording w/ announcement, 3 automation rules: <90s = "Short", non-OK area = "OOA", keyword job/hire/apply = "JobSeeker"
3. Cloudflare Turnstile + honeypot on forms
4. Write 1-page Billable Lead Definition

**Month 1 (shadow period, no tenant):**
- Forward to Google Voice with voicemail ("leave a message")
- Track yourself: total/billable/missed/avg duration/geo
- Need 5+ legit calls in 4 weeks before pitching

**Month 2 (tenant onboarding):**
- Skip national consolidators (Groundworks, Vesta, PowerLift — in-house marketing)
- Target ~8 mid-size Tulsa independents (Level Home, Queen, Tulsa Foundation Pros, Bedrock Pro)
- Offer 30-day free trial to 3 candidates
- Pick winner by: answer rate, follow-up speed, call recording professionalism
- Sign flat rent contract w/ 3-mo minimum, 30-day notice, 90s billable def, 48hr dispute window
- Collect first month before forwarding on

**Upgrade triggers:**
- 200+ calls/mo → CallRail CI $90
- 15+ qualified/mo within 90 days → rent up to $1,500-2,500 or hybrid
- Documented 30%+ close, $7K+ ticket → push 5-7% rev share
- 2nd site → WhatConverts Plus $60 OR add company to CallRail

---

## Key Sources

- conXpros foundation lead pricing — https://conxpros.com/foundation-leads/ (last mod 2026-02-11)
- Level Home Tulsa 2026 price guide — https://levelhomefoundationrepair.com/foundation-repair-cost-tulsa-2026-price-guide/
- LocaliQ 2025 Home Services benchmarks — https://localiq.com/blog/home-services-search-advertising-benchmarks/
- JobNimbus contractor KPIs — https://www.jobnimbus.com/blog/7-kpis-every-contractor-should-watch-to-grow-marketing-roi
- Contractor Accelerator KPI guide — https://contractoraccelerator.com/blog/how-to-master-home-service-contractor-kpis-every-kpi-and-what-they-mean
- CallRail spam prevention — https://support.callrail.com/hc/en-us/articles/5711519520525
- CallRail 2026 pricing — https://getpulsesignal.com/pricing/callrail
- CTM pricing — https://softwarefinder.com/call-center/calltrackingmetrics
- Ringba review — https://www.toolcomparelab.com/ringba-review/
- Phonexa pricing — https://prospeo.io/s/phonexa-pricing-reviews-pros-and-cons
- Nimbata best tools 2026 — https://www.nimbata.com/blog/best-call-tracking-software
- Twilio pricing — https://www.twilio.com/en-us/pricing
- OpenPhone → Quo rebrand 9/23/25 — https://www.prnewswire.com/news-releases/openphone-becomes-quo-...
- WhatConverts pricing — https://www.g2.com/products/whatconverts/pricing
- Two Bros foundation cost data — https://www.twobrosfoundationrepair.com/research/foundation-repair-cost
- Service Direct pay-per-lead — https://servicedirect.com/pay-per-lead-costs/
- All Local Pros foundation — https://alllocalpros.com/foundation-repair-leads/
- LeadsForward site valuation — https://leadsforward.com/shop/uncategorized/foundation-repair-website-20/
- Nimbata AI call scoring — https://www.nimbata.com/blog/score-analyze-phone-calls-with-ai
- Pay-per-call qualification — https://resources.callthread.com/blog/pay-per-call-explained-how-it-works

---

## Caveats

- Foundation-specific pricing data thin; most KPIs extrapolated from roofing/general home services
- Service Direct contractor testimonials (75-95% book rates) are vendor-curated, likely cherry-picked
- Phonexa pricing opaque; real spend much higher than entry listings
- CallRail $45 does NOT include form tracking (need $90 tier or use Zapier workaround)
- OK does not require state GC license — low barrier for tenant pool, but vet for operational maturity
- Did not access live BHW/Reddit/Discord communities; recommendations draw on public R&R operator content
