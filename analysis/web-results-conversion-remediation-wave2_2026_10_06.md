# Web Results-Conversion Remediation — Actor / Capability Drill-down

date: 2026-10-06
status: WAVE_B2_COMPLETE
scope: turn Capability into a first-class drill-down node and upgrade actor/capability collections from flat catalogs into disposition-aware explorers.

## Implemented

### Capability graph detail

Added:
- `/capabilities/[id]`

Every Capability now supports the full drill-down path:

Capability
-> owner institution / lab
-> key people
-> evidence Claims
-> unique primary Evidence Sources
-> connected Directions

For non-Direction Capabilities, the page explicitly states that non-promotion is intentional and links back to Research Coverage.

All existing Capability cards now link to the Capability graph page, including:
- Institution detail;
- Scholar detail;
- Evidence nested capability cards;
- Direction detail;
- Capability collection;
- Research Coverage.

### Reusable Explorer Toolbar

Added:
- `web/src/components/ExplorerToolbar.astro`

One shared filtering/search interaction now powers actor/capability collection pages.

This avoids separate duplicated filter implementations.

### Institutions & Labs Explorer

The former flat card catalog now supports:
- text search across institution/lab, people, capabilities and directions;
- country filter;
- Organization / Lab filter;
- P1/P2/P3-related filter;
- Direction-linked;
- Russia Support-only;
- China Comparator-only;
- Background / killed-thesis;
- actor-only / no Capability;
- Direction filter.

Hierarchy is more explicit:
- Lab / team records display their parent organization;
- organization records are ordered before lab records within the same country/parent context;
- parent organization context remains available on detail pages.

### Scholars & Key People Explorer

The former flat people catalog now supports:
- text search across person, affiliation, role, capability and Direction;
- country filter;
- affiliation filter;
- P1/P2/P3-related filter;
- Direction-linked / Support-only / Comparator-only / Background;
- profile-only / no Capability;
- Direction filter.

Each person record visibly exposes affiliation and current research disposition context without implying equal strategic priority.

### Capability Explorer

The Capability collection now supports:
- country;
- portfolio disposition;
- owner institution/lab;
- Direction;
- full-text search across Capability, people, technical scope and strategic context.

### Research Coverage integration

Capability statements on Research Coverage now link directly into the Capability graph page.

## Validation at head 9964ad32

Web UI Check:
- Type / Astro checks: PASS
- Static Site Build: PASS
- Internal Link Audit: PASS

Repository Health for the preceding implementation commits remained PASS; the final transaction/status sync is validated separately after state update.

## Strategic effect

The web now supports both directions of research navigation:

Decision-first:
Portfolio -> Direction -> Capability -> Claim -> Source

Coverage/actor-first:
Institution / Scholar / Research Coverage -> Capability -> Claim -> Source / Direction

This substantially reduces the prior "disappearance" problem for valid research assets that did not become strategic Directions.

## Remaining results-conversion work

Next:
1. normalize and expose Paper Deep Read / 10Q content where canonical depth exists;
2. reduce Partner Portfolio repetition between P1/P2/P3 and lane groups;
3. improve common design primitives/tokens and final visual density;
4. run a final web-content consistency audit before leadership packaging.

Research thesis, Directions and P1/P2/P3 remain unchanged.
