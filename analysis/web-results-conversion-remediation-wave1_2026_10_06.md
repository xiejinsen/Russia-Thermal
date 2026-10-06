# Web Results-Conversion Remediation — Visibility Foundation

date: 2026-10-06
status: WAVE_B1_COMPLETE
scope: convert Wave-0 semantic dispositions into visible, navigable web knowledge-product surfaces.

## Implemented

### 1. Research Coverage path

Added:
- `web/src/pages/research-coverage.astro`

Purpose:
- expose research assets that do not become strategic Directions;
- keep strategic selection and research coverage as separate reading paths;
- make promotion / non-promotion explicit rather than inferred.

Coverage sections:
- DIRECTION_LINKED capabilities;
- Russia SUPPORT_ONLY capabilities;
- China COMPARATOR_ONLY capabilities;
- BACKGROUND_KILLED_THESIS capabilities;
- Claims with explicit decision roles;
- context/profile/ranking/frontier Sources with explicit usage roles.

Each capability record shows:
- owning actor;
- key people;
- maturity / evidence / target fit;
- strategic use / transfer boundary;
- linked Claims;
- linked Directions or explicit "Not promoted to a Direction".

### 2. Disposition-aware existing surfaces

Capability cards now show `portfolioDisposition`.

Claim explorer and Claim detail now show `decisionRole`.

Evidence cards now show `usageRole`.

External original-source links in EvidenceCard were standardized to open in a new tab.

### 3. Main navigation and overview

Added Research Coverage as a primary navigation path and homepage entry.

Homepage immediate-action wording was corrected from direct validation execution to:
- management alignment;
- bounded engagement-question preparation;
- validation retained as a future gate.

This matches the current no-PoC execution constraint.

### 4. China research map

Replaced the stale China placeholder with the canonical ResearchMapVM-driven map.

The page now:
- renders CN actors already present in the canonical graph;
- shows verified mapped nodes;
- exposes unmapped actors as explicit geography coverage gaps;
- uses the same evidence-first navigation model as the Russia map.

No false symmetry claim is made.

### 5. Russia-vs-China comparator label

Removed the stale hard-coded:
`China · SJTU / domestic & global baseline`

Replaced with:
`China · domestic & global comparator baseline`

The actual strongest baseline continues to come from each canonical Direction.

## Validation

At head `f5a9246c`:
- V2.1 Repository Health: PASS
- Web UI Type/Astro Check: PASS
- Static Site Build: PASS
- Internal Link Audit: PASS

Pages deployment was triggered for the latest head.

## Remaining Web results-conversion work

Next priority:
1. Capability detail route and full graph drill-down;
2. Institutions / Scholars collection filtering and organization-first hierarchy;
3. improve discoverability of investigated-but-not-promoted actors from institution/scholar pages;
4. paper Deep Read / 10Q normalization and rendering;
5. Partner Portfolio deduplication;
6. design-system consolidation and final visual polish.

## Judgment

The main "research disappeared because it did not become a Direction" failure mode is now directly addressed in the web information architecture.

This is not the final web polish pass. It is the visibility foundation required before deeper collection UX and presentation refinement.
