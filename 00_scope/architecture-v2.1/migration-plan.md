# V2.1 Migration Plan

Updated: 2026-10-05
Status: DESIGN ONLY

## Principle

Rebuild, do not rewrite.

V1 remains authoritative until explicit cutover.

## Phase M0 — Freeze baseline

1. record baseline commit;
2. record current evidence-chain audit status;
3. stop structural edits to V1 during a migration slice;
4. log any later V1 research change as a delta.

## Phase M1 — Create isolated target

Preferred:
- separate non-authoritative target repository; or
- dev branch/workspace if operationally simpler.

Target must clearly state:
NOT AUTHORITATIVE.

## Phase M2 — Build skeleton

Create:
- object directories;
- templates;
- ID registry;
- generator;
- health checker;
- migration receipt location.

No research meaning changes.

## Phase M3 — Pilot vertical slice

Pilot:
Pavlenko / irreversible-dryout direction.

Migrate only the dependency-closed slice needed to produce:
- Sources;
- Claims;
- Actors;
- Capabilities;
- one Direction;
- deferred Validation objects;
- historical Decision Events;
- generated management row.

## Phase M4 — Pilot QA

Required:
- semantic fidelity;
- referential integrity;
- ownership;
- fresh-reader test;
- anti-shotgun edit count;
- generated-view correctness.

Decision:
GO / FIX / STOP.

## Phase M5 — Remaining active slices

Migrate by Direction, not by top-level V1 folder.

Suggested order:
1. Pavlenko;
2. MPEI aging / health-aware;
3. TPU process challenger;
4. Lab 6.6 reserve;
5. foundational modeling;
6. Watch/Kill/background lines;
7. remaining reports/history.

## Phase M6 — Delta replay

Every V1 material change after baseline is recorded as a migration delta.

Before cutover:
- enumerate all deltas;
- replay or explicitly defer each;
- verify no V1 current truth is newer than V2.

## Phase M7 — Operational validation

Run 2–3 real research/maintenance transactions on V2.

Test:
- new Source ingestion;
- Claim correction;
- Capability update;
- Direction Narrow/Kill/Upgrade;
- fresh-chat restart.

## Phase M8 — Cutover review

Cutover only when:
- all active Direction slices are dependency-closed;
- no unresolved delta exists;
- QA passes;
- generated views are fresh;
- user approves.

## Prohibited migration behavior

Do not:
- delete V1 before cutover;
- silently improve wording during migration;
- merge distinct institutions/teams/people for convenience;
- recreate V1 heatmaps as new manual truth stores;
- use migration as an excuse for new research.
