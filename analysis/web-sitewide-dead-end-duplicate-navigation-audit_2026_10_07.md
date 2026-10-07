# Site-wide Dead-end and Duplicate-navigation Audit — 2026-10-07

status: PASSED_WITH_DESIGN_SYSTEM_FOLLOWUP
scope: production Web navigation, object drill-down, relationship-set exploration, Partner Portfolio duplication, high-cardinality inline duplication and semantic dead ends

## Audit goal

Check whether the current Web product behaves as a research knowledge system rather than a collection of disconnected pages.

Core rules audited:

1. concrete object -> detail page;
2. object set / relationship set -> filtered Explorer;
3. decision-relevant visuals must not be dead ends;
4. high-cardinality research objects must not be duplicated as large inline card stacks;
5. management summaries may be rich, but registry / audit views should stay compact;
6. canonical research semantics must not be rewritten by presentation fixes.

## Fixed in this audit

### 1. Partner Portfolio duplicate knowledge tree

Previous structure:
- full P1/P2/P3 collaboration packages;
- then each investment lane repeated full Direction cards;
- then repeated Institution/Lab cards;
- then repeated Scholar cards.

This made the Partner page a second full copy of the research graph.

New structure:
- P1/P2/P3 remain rich management-facing collaboration packages;
- all Strategic Candidate / Stage-0 / Reserve / Watch / Hold Directions move into a compact Technical Lane Index;
- lane rows link to:
  - Direction detail;
  - filtered Claims;
  - filtered Evidence;
  - filtered Institutions;
  - filtered Scholars.

Result:
all non-priority / reserve / watch / hold Directions remain visible without duplicating actor trees.

### 2. Institution / Scholar relationship dead end

Institution and Scholar detail pages previously exposed Capability / Direction cards but had no direct set-level path into all linked Claims, Papers or Evidence.

Added:
- Institution -> `?actor=<ACTOR_ID>`
  - related Claims;
  - related Papers;
  - all Evidence.
- Scholar -> `?person=<PERSON_ID>`
  - related Claims;
  - related Papers;
  - all Evidence.

Institution scope includes parent-lineage IDs for Capability owners, so a university-level actor also reaches evidence owned by its child Lab / Team capabilities.

### 3. Actor / Person scopes in dense Explorers

Claims, Papers and Evidence now expose normalized relationship data for:
- actor lineage;
- key people.

The URL-driven Explorer layer accepts:
- `actor=`
- `person=`

These coexist with:
- `direction=`
- `capability=`
- `claim=`
- `relation=supporting|pressure`
- visible filters and search.

### 4. Russia-vs-China Capability Matrix dead end

The top comparator matrix previously contained non-clickable Direction / baseline / residual cells even though it is a decision-relevant visual.

Now:
- Direction -> Direction detail;
- China baseline -> China Research Map;
- Russia residual -> Russia Research Map.

The lower detailed landscape remains available, but the matrix no longer requires scrolling to a second representation before drill-down.

### 5. Capability detail inline Evidence duplication

Capability detail previously rendered every linked Evidence card while also providing a View-all Explorer route.

Now:
- first 4 representative Evidence records render inline;
- complete set uses filtered Evidence Explorer;
- Paper-only subset uses filtered Papers Explorer.

### 6. Direction detail growth control

Direction detail now:
- renders at most 8 representative Claims inline;
- renders at most 6 representative Evidence sources inline;
- complete sets remain accessible through URL-driven Claims / Evidence / Papers Explorers.

This prevents Direction pages from becoming future high-cardinality list pages.

### 7. Reusable relationship-link primitive

Added:
- `web/src/components/ExplorerLinkStrip.astro`

Used to standardize relationship-set navigation instead of maintaining separate page-local link styles.

### 8. Information Architecture drift

Updated `web/docs/information-architecture.md` to match current production navigation and patterns:
- actual grouped primary navigation;
- Evidence dense-row model rather than old Evidence-card description;
- URL-driven actor/person scopes;
- Partner Portfolio anti-duplication rule;
- actor/person evidence-navigation rule.

## Accepted / intentionally unchanged

### Overview vs Partner Portfolio

Overview contains a concise P1/P2/P3 management summary and Partners contains the richer collaboration packages.

This is intentional progressive disclosure, not duplication.

### Claim detail Evidence

Claim detail continues to show its complete supporting and pressure Evidence buckets.

This is intentional because primary Evidence is intrinsic to understanding a specific Claim, not merely a navigational registry.

### Decisions

Decision history remains card/timeline oriented.

Current cardinality is low and each event requires rationale / transition / reopen-condition context, so dense-table conversion would reduce comprehension.

### Research Coverage

Research Coverage remains a broad coverage-oriented view.

Its purpose is explicitly to expose research assets that did not become Directions, so it should not be collapsed into only portfolio-selected objects.

### Direction Explorer

The Directions index remains card/row-like rather than spreadsheet-dense because Direction cardinality is low and strategic comparison requires recommendation, maturity and differentiation context.

## Remaining design-system work

No remaining P0 semantic navigation defect was found after fixes.

Remaining work is primarily presentation-system consolidation:

1. shared detail-hero primitive;
2. shared section container / section-heading treatment;
3. reduce duplicated page-local CSS across Direction / Claim / Paper / Actor detail pages;
4. standardize inline representative-list notes and spacing;
5. align badge / metadata type scale;
6. final desktop + narrow-screen visual consistency review.

These are design-maintenance issues, not canonical research or evidence-chain gaps.

## Validation

Functional head:
`581e65c1`

- V2.1 Repository Health: PASS
- Type / Astro Check: PASS
- Static Site Build: PASS
- Internal Link Audit: PASS

## Strategic state

Unchanged:
- frozen Russia selective-complement thesis;
- P1 / P2 / P3;
- Direction lanes;
- Claim semantics;
- Capability dispositions;
- Evidence boundaries.

## Gate

Site-wide dead-end / duplicate-navigation gate:
**PASS**

Next:
perform bounded design-system consolidation, then return to the next decision-critical Tier-A Deep Read migration rather than reopening broad discovery.
