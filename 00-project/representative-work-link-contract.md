# Representative-work selection links — V2.1 additive pilot

state: PILOT / NONCANONICAL_LINK_LAYER
date: 2026-10-08
scope: ACT-KUT-LAB13, ACT-MPEI
policy: user-approved representative-first Q04

A representative-work TSV is an **editorial selection manifest**, not a new PAPER, CLAIM, CAPABILITY, LAB, or graph authority. One row points to a verified canonical SOURCE when known; otherwise to a DOI/original locator with explicit staging status. Reuse existing canonical IDs and original evidence rather than copying factual methods/results.

Columns:
- selection_id: stable per-manifest local key.
- work_ref: existing canonical PAPER ID when proven, otherwise CANDIDATE.
- source_locator: DOI preferred, or original journal link. No second DOI masquerading as independent work.
- scholar_refs: semicolon-separated canonical person IDs only if already verified, otherwise human names prefixed NAME: (never invent IDs).
- research_lane: short controlled theme text.
- selection_reason: why the result helps explain this team's research activity, not a new scientific claim.
- evidence_state: CANONICAL / ORIGINAL_REVIEWED / SECONDARY_ONLY / PENDING_IDENTITY.
- deep_read_priority: DECISIVE / SUPPORTING / CONTEXT.
- decision_ref: existing DIR-... reference.
- selection_limit: brief guardrail, never numerical device performance reinterpreted.

Pilot readers MUST ignore candidate rows when computing recovered canonical paper counts. Do not use this to infer five-year totals, patent family totals or research leadership. No modification to v2repo.py generator until the manifest parser has schema/ID validation and evidence-to-view tests. Keep one manifest per team: actual verified lab directory for Lab 1.3; MPEI organization directory for the **named core group** without inventing an ACT lab ID.

Pilot web integration implemented via `tools/representative_works.py` (strict schema/reference/DOI and candidate-state validator), `web/adapters/export_web.py` (adds `representativeWorks.json` and manifest entry) and `web/src/pages/representative-works.astro` (separate limited two-team view). Candidate rows are visibly marked; canonical Source link uses existing evidence objects. These files have been committed but the latest live build / CI must be checked independently before claiming production availability.

Sources for curation: analysis/academic-team-mapping/kutateladze-lab13-representative-contributions-2026-10-08.md and analysis/academic-team-mapping/mpei-representative-contributions-2026-10-08.md. 
## Reader-facing academic metadata (2026-10-08)

The selection manifest now stores `display_title`, `display_authors`, `display_venue`, `display_year`. These are bibliographic labels transcribed from the audited research dossier for rendering noncanonical candidates, not additional source/claim authority. `UNVERIFIED` is required when publication year is unknown. For a canonical row, use the validated Source identity; do not upgrade a staged entry solely because title metadata exists. The website shows the original paper title, authors, venue, year/unknown state, why selected, transfer boundary, and a provenance label. The page is under Explore → Representative Works and linked from Research Coverage. The two pilot teams only; no nationwide productivity claim.
