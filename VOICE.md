# VOICE.md

Version 1.0. Effective July 2, 2026. Operator to refine.

House voice reference for all Compass site copy. The goal: content that is distinct and human while staying inside the neutral, compliance gated voice. Compliance rules always win; this file shapes everything the rules leave open.

## Who is speaking

The brand is a knowledgeable local connector, not a contractor and not a cheerleader. It knows the problem, knows what the fix involves, and knows how to get a licensed contractor looking at it. It speaks like a straight-shooting neighbor who has seen this problem before, not like a sales page.

## Tone

- Plain, direct, and calm. State facts, costs, and steps. Let the usefulness sell.
- Confident about the process, never boastful about credentials the brand does not hold.
- Respectful of the reader's problem. Water in a basement is stressful; do not be cute about it.
- Zero hype. If a sentence would survive on a billboard for any company in any city, cut it.

## Sentence rhythm

- Lead with the answer, then explain.
- Mostly short sentences. One idea each. Vary with an occasional longer sentence so the copy does not read like a list.
- Second person by default: "your foundation", "your quote".
- Active voice. "A contractor inspects the slab", not "the slab is inspected".
- Concrete nouns and numbers over adjectives. "Cracks wider than a quarter inch" beats "serious cracks".

## Banned filler

Never use:

- look no further
- we've got you covered
- your one-stop shop
- unmatched, unparalleled, unrivaled
- nestled, in the heart of
- whether you're X or Y (the empty either-or opener)
- it's important to note, it's worth noting
- when it comes to
- in today's world, in this day and age
- peace of mind (as a standalone selling point)
- stunning, seamless, hassle-free, stress-free

## How the brand talks about the work

- The contractor does the work. Always. Name who does it; do not narrate how they got there. "An independent local contractor who works your county", not "we will...". The older version of this line modelled the phrase "the contractor we connect you with", which is exactly the habit the next section now bans. That phrasing is retired.
- Describe the service factually: what it involves, what it costs locally, how long it takes, what affects the price.
- Local specifics make the page: soil types, weather patterns, permit quirks, regional price ranges. Real ones only.
- Credentials belong to the contractor: "licensed, insured contractors" as a category description is fine; named endorsements and vetting claims are not (see FORBIDDEN_LANGUAGE.md).

## Sell the outcome, not the mechanism

Effective 2026-08-22, operator instruction. This is a conversion rule, not a compliance rule, and it exists because the two were being confused.

Someone searching "pole barn builders" or "septic tank repair" wants the work done. Copy that opens by explaining the business model gives them a reason to leave before they reach the form. **The required disclosures already say what we are, on every page. Marketing copy must stop repeating them.**

**Retired from marketing copy** (still correct on `/about/`, `/disclosure/`, `/terms/`, and inside governed disclosure strings):

- "we connect you with" / "we will connect you with"
- "the referral service" / "our matching service"
- "the contractor we send your request to"
- "we are a marketing and referral service, not a contractor" as a mid-paragraph aside

**The technique is subtraction.** Delete the narration, keep the fact. The sentence usually already contains the answer:

> An independent local contractor ~~we connect you with,~~ who works in Kendall County and provides the quote.

Same information, no play-by-play of how the lead travels.

**What replaces it:** name who does the work, and what the reader gets.

| Instead of | Write |
|---|---|
| "We connect you with a licensed contractor" | "A licensed contractor who works your county prices the job" |
| "Get a free quote from our referral service" | "Get a real number on your build" |
| "How the referral works" | "How it works" |
| "Only the contractor we send your request to can price it" | "Only the contractor who walks your site can price it" |

**The line that does not move.** This buys latitude in framing, never in substance. First-person work claims stay banned outright: no "we build", "we install", "we repair", "our crews", "our contractors". A partnership or signed tenant does not transfer the contractor's work to us (see TENANT_ACTIVATION.md). "We help you get the work done" is facilitation and is fine. "We do the work" is a licensing and liability claim and is not.

**Honest-limitation passages stay, reframed.** Refusing to quote a number is a trust asset and must not be deleted to reduce mechanism language. Rewrite it onto the real reason instead of a self-description: "only a contractor standing on your site can price it", not "we are a marketing and referral service, so we cannot".

**Governed strings are untouched by this rule.** The header disclosure strip, footer entity disclaimer, TCPA consent, and form disclosure keep their exact wording. They are what make this reframe safe: the disclosure does the disclosing, so the sales copy does not have to.

## Never name the operating entity in marketing copy

Operator instruction, 2026-08-23. "Compass Camper LLC", and "Compass Lead Group" with it, belongs in the governed disclosures and nowhere else a buyer reads on the way to the form. The operator's words on finding the line live on a money page: a homeowner reads it and thinks "who the heck is Compass Camper LLC?" They only need to know their request reaches a contractor.

Banned in marketing copy: page body text, FAQ answers, hero paragraphs, cost and response blocks, fine print near a form, and contact-page blurbs.

Allowed and unchanged: the header disclosure strip, the footer entity disclaimer, the TCPA consent line, `/about/`, `/terms/`, `/privacy/`, `/disclosure/`, `/how-we-make-money/`, `/how-it-works/`, and JSON-LD schema. Those satisfy every disclosure obligation in COMPLIANCE_STANDARDS.md, which is exactly why the sales copy does not have to repeat them.

| Instead of | Write |
|---|---|
| "Calls and form submissions reach Compass Camper LLC directly. We read the request and pass it to a licensed local contractor, usually within about an hour during the day." | "Your request goes to a licensed local contractor, usually within about an hour during the day." |
| "Only the contractor who walks your site can price it. Compass Camper LLC does not perform roofing work and does not quote it." | "Only the contractor who walks your site can price it." |
| "[Brand] is a free referral service operated by Compass Camper LLC, doing business as Compass Lead Group." | "[Brand] is a free referral service." |

**Where this came from.** The money-page rollout of 2026-08-16 to 2026-08-18 shipped a response answer that named the entity, and it reached 55 sites because the rollout doctrine modelled the sentence. That is the second time a modelled phrase has spread portfolio-wide, after the handoff narration this section already retires. **Model the constraint, not the sentence.** A rule that ships with example wording will see that wording copied into every property.

## Quick self-test before shipping copy

1. Could a reader mistake any sentence for the brand doing the work? Rewrite it.
2. Does any sentence exist only to sound impressive? Cut it.
3. Would this paragraph work word for word on a competitor's site in another state? Add local substance or cut it.
4. Does this sentence explain our business model to someone who came here to price a job? Move it to `/about/` or cut it. The disclosures already cover it.
5. Does the legal entity name appear anywhere outside a governed disclosure or a business-model page? Cut it.
