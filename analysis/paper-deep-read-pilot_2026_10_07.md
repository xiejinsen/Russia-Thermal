# Paper Deep Read Pilot — 2026-10-07

status: PASSED_PILOT
scope: canonical Paper Deep Read model + three representative Tier-A pilots + automatic Web rendering

## Goal

Create a maintainable deep-reading layer without duplicating research interpretation in the Web code.

Target architecture:

`Paper README (source facts) -> deep-read.md (structured interpretation) -> deepReads.json -> PaperPageVM -> /papers/[id]`

## Canonical contract

Added:
- `00-project/paper-deep-read-contract.md`

Core rules:
- Source README and Deep Read are separate semantic layers.
- Tier A means decision-critical, not necessarily full-text review.
- Review basis is explicit and must not be overstated.
- Tier A requires exactly Q1-Q10.
- Source facts / Analyst inference / Unknown-request boundaries are mandatory.
- graph references must resolve to existing Claim / Capability / Direction / Priority objects.
- Web pages are derived views only.

## Pilot papers

### PAPER-RU-DRY-001 — Pavlenko / dielectric dry-spot dynamics

Role:
- P1 mechanism evidence;
- `CAP-KUT-L13-DRYOUT-DIAGNOSTICS`;
- `DIR-FAILURE-AWARE-UTVC`.

Migrated from V1 card:
- `evidence/10q/papers/i1_russia_dielectric_fluid_reversibleirreversible_dry_spot_dynamics.md`

Current boundary retained:
mechanism / diagnostics residual only; no phone-scale sealed-VC superiority claim.

### PAPER-RU-AGE-001 — MPEI 42-month hierarchical-surface operation

Role:
- P2 aging evidence;
- `CAP-MPEI-LONGTERM-CAPILLARY-AGING`;
- `DIR-HEALTH-AWARE-UTVC`.

Migrated from V1 card:
- `evidence/10q/papers/j1_mpei_42_month_hierarchical_surface_operation.md`

Current boundary retained:
actual long-duration surface-aging knowledge, not broad product-reliability superiority.

### PAPER-CN-AGE-001 — China copper-water VC oxygen-failure comparator

Role:
- product-path comparator pressure on P2 / Health-aware thesis.

Migrated from V1 card:
- `evidence/10q/papers/e1_oxygen_driven_failure_of_copper_water_vc.md`

Review status is explicitly preserved as:
`PUBLISHER_ABSTRACT_SUMMARY_PLUS_DECISION_REVIEW`

The pilot does not falsely upgrade it to a full-text review.

## Web / data implementation

Added:
- `deepReads` normalized dataset;
- canonical sidecar parser in `web/adapters/export_web.py`;
- `web/schemas/deep-read.schema.json`;
- normalized TypeScript records;
- `PaperDeepRead.astro` reusable renderer;
- Deep Read badges / coverage counts on Papers index;
- Deep Read 10Q, evidence boundary, graph impact and canonical GitHub link on Paper detail pages.

## Validation

Web Data Check:
- PASS
- normalized counts include `deepReads: 3`

Latest functional head `4964117c`:
- V2.1 Repository Health: PASS
- Web UI Type/Astro Check: PASS
- Static Site Build: PASS
- Internal Link Audit: PASS

## Pilot judgment

The architecture is ready for further Tier-A migration.

However, broad migration should not be treated as urgent before visual review of the pilot because information density / section rhythm may still need presentation tuning.

The next batch should prioritize existing V1 10Q cards that materially affect:
1. P1 / Failure-aware UTVC;
2. P2 / Health-aware UTVC;
3. P3 / Surface-process challenger;
4. strongest China/global comparator pressure;
5. kill / reserve decisions.

No frozen thesis, Direction or P1/P2/P3 ranking changed in this pilot.
