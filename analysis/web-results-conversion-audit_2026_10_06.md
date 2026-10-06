# Web Results-Conversion Audit — 2026-10-06

status: AUDIT_COMPLETE_REMEDIATION_REQUIRED
scope: post-Phase-1 audit of whether newly expanded Russia/China research content is correctly converted from canonical research objects into the web knowledge product.

## Executive judgment

The automatic data pipeline is healthy:

canonical objects -> web/adapters/export_web.py -> normalized datasets -> Astro build -> GitHub Pages deploy.

The main gaps are no longer repository-health problems. They are **presentation-model and information-architecture gaps**: the web layer does not yet fully express the expanded China comparator graph, supporting/non-promoted capabilities, capability-level graph navigation, and deep paper-reading outputs.

The site should be remediated before final leadership-report packaging.

## P0 — correctness / stale-presentation gaps

### P0-1 China Research Map is stale

Current page:
web/src/pages/research-map/china.astro

It still states that the China comparator Actor graph is not yet symmetric and that canonical China Institution/Scholar actors must first be created.

This is no longer true.

Current canonical graph already contains many China organizations and scholars, including PKU, SJTU, ZJU, USTC, XJTU, SCUT, SEU, Fudan, BIT and others. Several root organizations already carry verified geography. The generic builder buildResearchMapVM(country) already supports arbitrary countries.

Required remediation:
- replace placeholder page with the same ResearchMapVM-driven implementation used by Russia;
- call buildResearchMapVM('CN');
- show mapped nodes and explicit location-coverage gaps rather than withholding the map until symmetry is perfect.

### P0-2 China comparator label is hard-coded to SJTU

Current builder:
web/src/view-models/builders.ts -> buildLandscapeVM()

Current label:
China · SJTU / domestic & global baseline

The current comparator is broader: PKU, SJTU, Fudan, BIT, SEU and other China/global evidence now contribute to strongest_baseline.

Required remediation:
- replace the stale SJTU-only label with a generic China/global comparator label or a derived list of representative linked comparator actors;
- where possible provide drill-down links to comparator actors/claims instead of presenting strongest_baseline only as text.

### P0-3 homepage immediate-action wording is too execution-oriented

Current homepage:
DO NOW -> Validate the three priority collaboration packages.

Current project constraint:
Phase 1 is a public-evidence insight package; the current environment does not run actual phone PoC/validation and direct partner confirmation has not occurred.

Required remediation:
- change immediate action language to management alignment / engagement preparation;
- keep physical validation as a future gate after partner/data feasibility is confirmed.

## P1 — knowledge-product conversion gaps

### P1-1 Supporting capabilities disappear from strategic surfaces

UUST and MISIS are intentionally not promoted to Directions. This is strategically correct, but it means they are largely absent from Partner Portfolio and Direction-led Russia-vs-China surfaces.

Result:
important research effort can look as if it vanished simply because it did not become an investment Direction.

Required remediation:
add a clearly bounded **Supporting / Pressure-tested nodes** section that shows:
- actor / people;
- capability;
- why it matters;
- why it was not promoted;
- comparator pressure;
- current disposition (Support / Watch / Comparator only).

This section must remain visually subordinate to P1/P2/P3.

### P1-2 Institutions and Scholars collections are flat catalogs

Current pages:
- institutions.astro
- scholars.astro

Both render the entire collection as a card grid with no search, grouping or filtering.

This does not scale after the Russia and China expansion.

Required remediation:
- country filter: Russia / China / all;
- institution kind: Organization / Lab;
- strategic relation: Priority / Direction-linked / Support-only / no Direction;
- Direction/lane filter;
- text search;
- organization-first grouping so Labs remain visually attached to their parent organization where useful.

### P1-3 Capabilities are graph dead-ends

Current capabilities page renders CapabilityDetail cards only.

Missing:
- owning actor;
- key people;
- evidence Claims;
- linked Directions;
- supporting primary evidence;
- per-capability route.

This weakens the intended graph:
SOURCE -> CLAIM -> ACTOR / CAPABILITY -> DIRECTION.

Required remediation:
- create /capabilities/[id];
- make Capability cards clickable;
- expose owner institution/lab, key people, evidence claims, source evidence, Direction links and transfer boundary;
- allow Institution / Scholar / Claim / Evidence views to drill through Capability consistently.

### P1-4 Deep paper-reading output is under-translated

Paper detail currently exposes:
- metadata;
- direct reported findings;
- boundary;
- supporting/pressure Claims;
- capabilities / directions / people / institutions.

This is a strong evidence graph, but it does not expose the deeper "10Q / paper-understanding" work used by the research process.

Required remediation:
- add a structured Deep Read / 10Q section where canonical data supports it;
- at minimum surface problem/background, approach, experimental/setup context, key result, limitations, transfer relevance, comparator implication and strategic implication;
- do not invent missing 10Q fields in the web layer; normalize them from canonical evidence/deep-card objects first.

### P1-5 Partner Portfolio duplicates large amounts of information

The page first renders P1/P2/P3 through PartnerPriorityCard and then renders the same strategic-candidate/challenger Directions, institutions and scholars again in lane groups.

As the graph grows, this becomes a long repetitive page.

Required remediation:
- keep P1/P2/P3 as compact management summary;
- move full Direction/Actor detail to drill-down;
- collapse or tab lane-based portfolio sections;
- avoid repeating the same institution/person cards twice on one page.

## P2 — interaction / design-system gaps

### P2-1 Collection UX is inconsistent

Evidence has a real filter/search system, while Institutions, Scholars, Capabilities and Claims are mostly static lists.

Required remediation:
reuse one collection/explorer pattern across research-object pages.

### P2-2 External-link behavior is inconsistent

Institution, Claim and Paper pages generally open official/original sources in a new tab.
EvidenceCard original-source links do not consistently use target="_blank".

Required remediation:
standardize external official/source links so the research UI is preserved.

### P2-3 page-level styles duplicate design tokens

Several high-value pages use large local style blocks and repeated hard-coded values such as #0b67b2, #cfe1ee, custom shadows and card layouts instead of reusable components/tokens.

This makes the site visually coherent today but increases regression risk when changing a small design element.

Required remediation:
- extract reusable collection hero, explorer toolbar, comparison row, metric strip and research-card primitives;
- move repeated palette/spacing/shadow values into tokens;
- keep page-level CSS for composition, not basic visual primitives.

### P2-4 current research freshness is not strongly visible

The site surfaces thesis and objects but does not clearly distinguish:
- priority strategic nodes;
- newly pressure-tested supporting nodes;
- comparator-only additions;
- current assessment date / freeze status.

Required remediation:
add light-weight status/freshness metadata at section level without turning the site into a changelog.

## What is already working well

- automatic canonical -> normalized web export;
- build/deploy automation;
- Direction detail pages preserve Problem -> Baseline -> Russia residual -> Internal control -> Next question -> Promotion gate;
- Claim detail preserves supporting vs pressure evidence and decision impact;
- Paper detail preserves original source, direct findings, boundary and graph impact;
- Russia research map is a strong institution-first navigation model with people/capability/direction drill-down;
- official URL support exists in Institution detail/cards;
- evidence filtering is already a good pattern to reuse.

## Recommended remediation order

### Wave A — correctness / stale content
1. Replace China map placeholder with canonical CN ResearchMapVM.
2. Remove SJTU-only comparator label.
3. Correct homepage immediate-action wording.

### Wave B — research-result visibility
4. Add Supporting / Pressure-tested nodes surface.
5. Upgrade Institutions / Scholars collections with filters and hierarchy.
6. Add Capability detail/drill-down.
7. Expose normalized paper Deep Read / 10Q.

### Wave C — design consolidation
8. Deduplicate Partner Portfolio.
9. Standardize external-link behavior.
10. Extract common explorer/card/style primitives.

## Exit gate

Before final leadership packaging:
- Web Data Check PASS;
- Web UI Check PASS;
- internal-link audit PASS;
- Pages deploy PASS;
- China comparator and newly added Russia support nodes visibly discoverable;
- no stale Phase-1 discovery wording;
- P1/P2/P3 remain visually dominant over support/watch content.

Final audit judgment:
**The web pipeline is healthy, but the web knowledge product needs one focused results-conversion remediation pass before final presentation packaging.**
