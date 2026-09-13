# DoorMathPro — v39 Change Report

**Purpose of this document:** a precise technical record of what changed in this pass, written the same way the v38 report was, so it can be pasted into another assistant (Gemini, Copilot) for comparison against whatever they build in parallel.

**Baseline this work started from:** the live v38 `index.html` you provided (already carrying a few small post-v38 "Sept 2026 audit" bugfixes — the 30s scan timeout and the honest no-match grounding note — that predate this pass and were not touched here except where noted).

**Scope of this pass:** this is a deliberately narrow slice of the combined plan discussed across the Claude/Gemini/Copilot review. It implements the changes that were low-risk, needed no new decisions from you, and needed no access to the Cloudflare Worker's own source. Several ideas from that discussion were intentionally **not** built yet — see §4.

---

## 1. AI prompt restructured into two explicit stages (accuracy fix)

File: `index.html`, `executeAiDoorScan()`, the prompt text built before the Gemini request.

The manufacturer-disambiguation text is unchanged in substance but restructured from one flat list into two explicit, ordered stages the model is instructed to work through before answering:

- **Stage 1 — joint geometry first.** Explicitly tells the model that woodgrain/finish is cosmetic and reused across brands, and to use Image 2 (the side/joint/end-stile photo, when provided) to narrow the candidate manufacturers by joint contour alone *before* looking at finish.
- **Stage 2 — model & finish.** Only after Stage 1 narrows the manufacturer does the prompt direct the model to use Image 1 (front face) and the manufacturer's known model lines to pick the specific model/series.

This is a same-call, single-request change (still one Gemini call per scan) — not a literal two-request pipeline. A true two-call chain (classify joint, then a second call to pick the model) would double per-scan latency and Gemini cost for a benefit that hasn't been measured yet; staged reasoning within one call gets most of the expected benefit at no added cost. If real field results show the model isn't actually reasoning in order, this is the natural next step to try.

**Important, and worth being direct about:** this does not fix the underlying cold-start problem. Zero reference photos still means the AI is choosing based on text alone; restructuring the text into stages should make that text more effective, but it is not the same as photographic grounding. See §2 for the fix that actually addresses this.

## 2. "Scan-to-Library" auto-save (the actual cold-start fix)

Files: `index.html`, `aiResultCard` HTML block + `applyAIResultToCalculator()`.

This was the single best idea to come out of comparing Gemini's and Copilot's UX proposals, and it's the one that actually closes the gap the whole project has been circling: previously, a real reference photo only entered the system if someone separately opened the catalog table and used the ✏️ icon — a manual chore disconnected from normal scanning. Now:

- A new checkbox, **"Save this photo as the reference for this model, so future scans of the same door are more accurate,"** appears on the scan result card once a manufacturer and model are identified, checked by default.
- It only takes effect once a specific catalog model is actually confirmed by **"Apply this Model to Weight Calculator"** — and specifically the model that survives the existing fuzzy-match against the catalog (`scoreModelMatch` / `MODEL_MATCH_THRESHOLD`), which may differ from the AI's raw guess if a technician has manually corrected it. It never saves the AI's unconfirmed first guess. This matters: an unconfirmed wrong guess saved as truth would quietly make future scans of that model *worse*, not better.
- It prefers **Photo 2** (the side/joint profile) as the saved reference, since that's the actual visual fingerprint described throughout this project, falling back to Photo 1 if Photo 2 wasn't taken.
- It writes to the exact same IndexedDB store (`doormathpro_endcap_refs`) the catalog table's own edit icon writes to — no new data model, no schema change. Saving again for the same model still simply replaces the prior entry, exactly as before.
- If the checkbox is checked but no confident catalog model was matched, the grounding note now says so explicitly ("Nothing was saved to the reference library since no specific catalog model was confirmed...") instead of silently doing nothing, which would otherwise look like a bug.

Over normal use, this means the reference library — and therefore scan accuracy — grows automatically as technicians confirm real identifications in the field, with no separate curation step required. It does not require Wayne Dalton or Northwest Door to ever get an official seeded default; the first confirmed scan of either becomes their reference.

## 3. Gemini API key: header added alongside the existing query parameter

Files: `index.html` — new shared `buildAiProxyRequest()` helper, used by both `executeAiDoorScan()` and `sendChatMessage()`.

The optional personal Gemini key override (Key Settings) was sent to the Cloudflare Worker only as a URL query string (`?key=...`), which is the kind of thing that ends up in Cloudflare's own request logs, browser history, or any logging layer in front of the Worker. It is now sent **both** ways: as the existing query parameter, and as a new `X-Doormath-Gemini-Key` request header.

**This is intentionally not a complete fix.** I don't have the Worker's source, and Cloudflare Worker was set up separately (by Gemini, per your note) — I can't confirm today whether it reads headers at all. Sending it both ways means nothing breaks either way; the query string will keep showing up in logs until the Worker itself is changed to read the header and stop trusting the query string. That's a one-line change on the Worker side once you're ready to do it, and only then should the query fallback be deleted from the client.

## 4. Shortened scan status text

Minor, low-risk copy change: "Analyzing with Gemini Vision AI..." and its reference-count variant are now "Analyzing door..." and "Analyzing door... (grounded by N reference photo(s))" — same information, less brand-name filler, in line with the "technician-friendly, no verbose AI-speak" point both UX reviews made.

## 5. Service worker cache bump

`sw.js`: `CACHE_NAME` bumped `doormathpro-v27` → `doormathpro-v28` so installed/offline PWA users actually receive this update instead of a stale cached `index.html`.

---

## 6. Deliberately NOT built in this pass, and why

These came up across the Copilot/Gemini UX proposals and are real, but each needs a decision, an asset, or access I don't have yet — building them now would mean guessing:

- **Collapsing "Take Photo" / "Upload from Photos" into one native camera-or-library prompt per photo slot.** Gemini's redesign proposed this for a cleaner screen. The two-button split exists specifically because the *original* problem statement documented `capture="environment"` unreliably forcing the camera on many mobile browsers, blocking a customer-texted photo from being selectable — the whole reason this project started. Consolidating back to one input risks reopening that bug, and neither the original fix nor this proposed rollback has been verified on a real phone (v38's own testing was headless Chromium only, which can't exercise a real OS file picker). This needs an actual test on a real iPhone and Android phone, in the installed PWA specifically, before it's touched either way.
- **Removing the End Cap Profile column from the manufacturer catalog** (Copilot's proposal). This directly reverses the decision you already made once, when v37's separate reference-library tab was discarded specifically because you wanted reference photos living on the existing table. Left as-is pending you telling me that's actually changed.
- **Bottom sheet replacing the add/edit modal.** A reasonable mobile pattern in isolation, but it's a new UI paradigm not used anywhere else in the app; scoping it to just this feature is fine, but it's a real (if contained) piece of UI work, not a one-line change, and I didn't want to touch working modal code without you weighing in given nothing about it is broken today.
- **Visual "Joint Profile Cheat Sheet."** Good, offline-friendly idea, but the obvious source material (manufacturer spec-sheet cross-sections) is their copyrighted material — bundling traced diagrams directly into the app is a bigger exposure than linking to their page, which is what today's defaults do. Needs either original artwork or a licensing decision before it's built.
- **Cloudflare Worker KV sync across technicians' devices.** Now that you've confirmed you own the Worker, this is buildable — but I don't have its source, so I can't size or build the other half of this change responsibly from here.
- **Multi-photo-per-model gallery** (Copilot's "Thumbnail 1, 2, 3..." bottom sheet). Not built: it would require changing the IndexedDB schema from one photo per model to an array, and it would need to be reconciled with the existing 2-per-manufacturer/6-total cap in `getReferenceImagesForScan()` so the UI doesn't imply photos are being used that never actually reach a scan. The scan-to-library flywheel above gets most of the practical benefit without this complexity.

---

## 7. Testing performed

All of it automated, against the actual files you provided (not the v38 report's original files — these are the live, current ones):

- `node --check` on the extracted inline script: passes, no syntax errors.
- Structural check: `<div>`/`</div>` counts balanced (399/399), zero duplicate DOM `id`s across the whole file.
- Full functional run in headless Chromium (Playwright) against the real `index.html`:
  - Catalog table renders all 88 rows.
  - A mocked Gemini response for a real catalog model (Amarr, exact model name) is scanned, shows a 94% match badge, and the save-to-library checkbox appears.
  - Confirming the match saves the confirmed model's photo into IndexedDB under the correct `doorId`, the catalog table cell updates live to show the new photo, and the grounding note confirms the save.
  - Unchecking the box before confirming correctly saves nothing.
  - A response naming a model that does **not** clear the fuzzy-match threshold correctly saves nothing and now explains why in the grounding note, instead of silently doing nothing.
  - Zero console or page errors across all of the above.

Not tested (can't be, from here): real mobile camera/gallery picker behavior in an installed PWA, and anything Worker-side.

---

## 8. File-level diff summary

| File | Change |
|---|---|
| `index.html` | Two-stage AI prompt restructuring; `buildAiProxyRequest()` helper added and used by both Gemini call sites (adds header, keeps query param); scan status text shortened; new "save to library" checkbox + `saveScanToLibraryFromScan()` wired into `applyAIResultToCalculator()`; unmatched-but-checked case now explains itself instead of doing nothing silently |
| `sw.js` | `CACHE_NAME` bumped to force PWA refresh |
| `README.md` | New "Smarter AI matching + self-building reference library" feature section; existing sections renumbered |
| `manifest.json` | Unchanged |
| `door_database.json` | Unchanged |
