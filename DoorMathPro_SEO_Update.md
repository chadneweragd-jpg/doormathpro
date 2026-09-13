# DoorMathPro — SEO Update

**Goal:** help doormathpro.com actually get found when someone searches for the tools it already does well (garage door spring calculator, IPPT sizer, wire gauge ID, etc.). This is technical/on-page SEO only — no content strategy or backlink work included.

## What was checked on the live site first

Before touching anything, I pulled the actual live source and found: no `robots.txt`, no `sitemap.xml`, no canonical tag, no structured data, and two `<h1>` tags on the page (should only ever be one). The title and meta description existed but were generic. None of this was visible just by looking at the page — it only shows up by reading the actual HTML, which is why it had gone unnoticed.

## What changed

**Title tag:** "DoorMathPro — Professional Garage Door Spring & Engineering Suite" → "Garage Door Spring Calculator & IPPT Sizer | DoorMathPro". Leads with what people actually search for instead of a brand-first name; keeps DoorMathPro at the end so brand searches still work.

**Meta description:** rewritten to be keyword-relevant and under ~160 characters (the old one ran long and would get cut off in search results).

**Canonical tag** added, pointing to `https://doormathpro.com/` — tells search engines this is the one authoritative URL for this content (matters if it's ever also reachable at a `www.` subdomain or a different path).

**Open Graph + Twitter Card tags** added — controls how the link looks when shared in a text message, Slack, or social media (title, description, and preview image), instead of showing whatever it feels like grabbing from the page.

**Structured data (JSON-LD)** added: a `SoftwareApplication` schema block telling Google plainly "this is a free web tool," including that it's free (`price: 0`). No star rating or review count was added — there isn't a real one yet, and adding a fake one is against Google's guidelines and can get a listing penalized. If real reviews ever exist, that's worth adding then.

**Duplicate `<h1>` fixed** — the printable job-spec-sheet template (hidden in a modal until you open it) had its own `<h1>DOORMATH PRO</h1>`. A page should have exactly one h1; that one is now a plain div with identical styling, so nothing looks different, but the page now has one clear h1: "Free Garage Door Spring & Engineering Calculator Suite."

**Real heading structure added.** The page had zero `<h2>` tags anywhere — every tool section title was a plain styled `<div>`, invisible to a search engine trying to understand what's on the page. Eight section titles are now proper `<h2>` tags (Wire ID Identifier, Door Weight Calculator, Door & Track Specifications, OD/ID Converter, Drum Comparison, IPPT Lookup, Manufacturer Catalog, Truck Stock input panel), with a few secondary result panels as `<h3>` underneath. Visually nothing changed — I reset the browser's default heading margin so spacing stays identical — but a search engine (and a screen reader) can now actually see the outline of what this page offers.

**`robots.txt`** added — a plain "everything's allowed, here's the sitemap" file. There was none before, which isn't harmful by default, but its absence means there was also no pointer to the sitemap.

**`sitemap.xml`** added, listing the one real page. Worth knowing: this is a single-page app — every "tab" is the same URL with JavaScript swapping what's shown, not a separate page a search engine can index and rank independently. A sitemap can't change that. If ranking for several distinct searches (say, "garage door spring calculator" and "garage door drum cross reference") separately becomes a priority later, the real fix would be giving each tool its own actual URL — that's a bigger, separate project, not part of this pass.

**Service worker cache bumped** (v28 → v29) so the change actually reaches installed/offline users.

## What this doesn't do, on purpose

This doesn't touch page speed, backlinks, Google Search Console setup, or content/keyword strategy (blog posts, comparison pages, etc.) — none of that was in scope for this pass. It also doesn't fabricate reviews, ratings, or testimonials to look more "trustworthy" to search engines — that's a real policy violation, not a shortcut.

## One thing you'll need to do yourself

Google Search Console (search.google.com/search-console) is where you'd verify ownership of doormathpro.com and manually submit the sitemap so Google notices it faster. That requires logging into your own Google account, so it's not something I can do from here — but once you're in, submitting `https://doormathpro.com/sitemap.xml` takes under a minute.

## Testing performed

`node --check` on the extracted script (syntax OK); HTML tag balance re-verified for div/h1/h2/h3 (all balanced, zero duplicate ids); JSON-LD block validated as parseable JSON; full Playwright regression run of the AI scanner + scan-to-library flow from the last update, confirming none of these markup changes broke anything (all scenarios still pass, zero console errors); manual check that h2 headings render with zero added margin (no visual shift).

## Files changed

| File | Change |
|---|---|
| `index.html` | Title, meta description, canonical tag, OG/Twitter tags, JSON-LD structured data added; duplicate h1 fixed; 8 section titles promoted to real h2/h3 headings |
| `sw.js` | `CACHE_NAME` bumped to force PWA refresh |
| `robots.txt` | New file |
| `sitemap.xml` | New file |
