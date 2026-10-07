# Information Architecture

status: DESIGN
scope: navigation, page hierarchy and drill-down

## 1. Primary user journeys

### Journey A — leadership
Goal:
understand the conclusion in 5–10 minutes.

Path:
`Overview → Partner Portfolio → Priority Partner → Decision / Action`

### Journey B — technical reviewer
Goal:
challenge a conclusion.

Path:
`Technology Landscape → Capability → Claim → Evidence`

### Journey C — collaboration planning
Goal:
decide who to contact and what to ask.

Path:
`Partners → Institution → Key People → Collaboration Role → First Questions`

### Journey D — research maintenance
Goal:
see what changed recently.

Path:
`Frontier Watch → New Source / Node → Decision Impact`

## 2. Main navigation

Current production grouping:

1. **Overview**
2. **Research Maps**
3. **Research Coverage**
4. **Portfolio**
   - Partners
   - Russia vs China
   - Directions
5. **People & Orgs**
   - Scholars
   - Institutions
   - Capabilities
6. **Research Objects**
   - Papers
   - Claims
   - Evidence
   - Frontier Watch
7. **Decisions**

## 3. Home / Overview

Above the fold:
- one-sentence bottom line;
- P1/P2/P3 partner recommendation;
- Russia-vs-China summary heatmap;
- collaboration model.

Below:
- partner comparison;
- supporting nodes;
- explicit Kill / Do-Not-Invest;
- latest frontier-watch update.

No dense relationship graph on home.

## 4. Institution hierarchy

Human-facing hierarchy:

`Institution → Lab/Team → Key People → Capability → Evidence`

Never:
`Institution ↔ Person` as peer siblings in the same management tree.

Institution page:
- leadership summary;
- labs/teams;
- key people;
- capability modules;
- collaboration readiness;
- related directions;
- representative evidence;
- boundaries / risks.

## 5. Scholar page

Sections:
1. identity / current role;
2. institution / team;
3. why this person matters;
4. research themes;
5. representative works;
6. collaboration history;
7. project-specific role;
8. first outreach question;
9. evidence links.

The scholar page is not a CV dump.

## 6. Technology page

Each capability topic:
- one-line judgment;
- China baseline;
- Russia residual;
- Russian nodes;
- maturity / confidence;
- Keep / Reserve / Watch / Kill;
- evidence drill-down.

## 7. Evidence explorer

Filters:
- source type;
- year;
- country;
- institution;
- person;
- capability;
- strategic direction;
- decision impact.

Evidence Explorer row:
- source title / ID;
- source type;
- year;
- country;
- context / usage role;
- supporting-Claim count;
- pressure-Claim count;
- Direction context.

Detailed findings, boundaries and graph relationships belong on the Source/Paper/Claim/Capability detail paths rather than being expanded in every high-cardinality row.

## 8. Decision page

Timeline:
- decision date;
- subject;
- transition;
- trigger evidence;
- rationale;
- current state.

Main purpose:
show why a broad thesis was narrowed or killed.

## 9. Frontier Watch

Separate venue cards:
- AVTFG;
- RNKT;
- Thermophysics and Aeromechanics;
- High Temperature.

Each card:
- what it covers;
- latest scan;
- new nodes found;
- whether portfolio changed.

## 10. URL strategy

Stable ID-based routes where possible:

```
/institutions/{actor-id}
/scholars/{person-id}
/capabilities/{capability-id}
/evidence/{source-id}
/directions/{direction-id}
/decisions/{decision-id}
```

Optional human-readable aliases can redirect, but IDs remain stable.

## 11. Progressive disclosure

Leadership pages show conclusions first.

Technical detail appears through:
- expandable sections;
- drill-down links;
- evidence pages.

This avoids making every page encyclopedic.


## 12. Research Intelligence expansion — maps and object explorers

The site must support three user modes:
- Decide — understand the portfolio conclusion and what to do.
- Explore — discover organizations, scholars, capabilities and geographic clusters.
- Audit — drill from a conclusion into Direction / Claim / Paper / Source evidence.

### Production navigation target

Primary groups:
- Overview
- Research Maps
- Portfolio: Partners / Russia vs China / Directions
- People & Orgs: Scholars / Institutions
- Research Objects: Papers / Claims / Evidence
- Decisions

Frontier Watch becomes a secondary tool under Evidence / Research Maps. Fixtures remain development-only.

### Research Maps

Routes:
- /research-map/russia
- /research-map/china

Russia map answers: where are the Russian organizations, scholars and capability clusters relevant to smartphone thermal management?

China map uses the exact same component/view-model contract and makes the China comparator baseline inspectable as institutions, scholars and technical clusters.

Current gap: Russia already has a canonical Actor graph; China currently has comparator Evidence / Claims but does not yet have a symmetrical China Actor graph. A bounded China comparator-actor enrichment pass is required before the China map is complete.

Map marker/detail panel should expose:
- institution / lab;
- city / region;
- key people;
- strongest relevant capability;
- linked Directions;
- partner priority if any;
- evidence confidence;
- drill-down links.

The map is a navigation surface, not a country score or ranking.

### Object Explorer routes

Papers:
- /papers
- /papers/[id]

Claims:
- /claims
- /claims/[id]

Directions:
- /directions
- /directions/[id]

Existing stable routes remain:
- /institutions and /institutions/[id]
- /scholars and /scholars/[id]

Paper detail should expose direct finding, background, method/mechanism, result, boundary, venue metadata, linked Claims, Actors/Capabilities, Directions and original source.

Claim detail should expose proposition, status/confidence, supporting and contradicting Sources, boundary, affected Capabilities, Directions, Decisions and Synthesis.

Direction detail follows Pyramid order: Recommendation -> Problem -> Strategic hypothesis -> China/global baseline -> Russia residual -> Actors/Capabilities/People -> Claims/Evidence -> internal-control boundary -> next validation question -> promotion/kill gate -> decision history.

### Homepage drill-down rule

Every decision-relevant homepage element must be clickable. No dead-end visuals.

Minimum paths:
- P1/P2/P3 -> partner package / institution
- Direction name -> Direction detail
- China baseline -> Russia-v-China view / China Research Map
- Russia residual -> institution / capability / scholar
- killed thesis -> Decision detail
- evidence counts -> Evidence Explorer
- institution/scholar counts -> respective explorers
- geographic summary -> Research Maps

### Traceability paths

Management judgment -> Direction/Priority -> Capability/Actor -> Claim -> Source/Paper

Scholar -> Affiliation -> Capability -> Direction -> Claim -> Paper

Map marker -> Institution/Lab -> Key People -> Capability -> Direction -> Evidence

Paper -> Claim -> Capability/Actor -> Direction -> Decision/Synthesis

### Geographic ownership

Actor owns only factual geography: city, region, latitude, longitude, location_verified_at.

Organization/Lab/Company may own verified coordinates. Person normally inherits parent Actor location. Do not create a separate hand-maintained map registry. Missing geography is a visible coverage gap.

### Implementation sequence

1. Data + navigation contracts.
2. Russia Research Map MVP.
3. Directions / Claims / Papers list and detail routes.
4. China comparator Actor enrichment + China Research Map.
5. Promote the selected Intelligence design to the production homepage and wire all drill-down links.


## 13. High-cardinality research-object navigation

Use different presentation modes based on object cardinality and user intent.

### Single object
A specific named object always opens its detail page:
- Claim -> Claim detail;
- Paper -> Paper detail;
- Capability -> Capability detail;
- Direction -> Direction detail;
- Institution / Scholar -> their detail pages.

### Object set / relationship exploration
"View all", "Explore related", evidence-set and relationship-set actions should open the relevant Explorer with URL-addressable filters rather than a single detail page.

Target pattern:
- `/claims?direction=DIR-...`
- `/papers?direction=DIR-...`
- `/papers?claim=CLM-...&relation=supporting`
- `/evidence?claim=CLM-...&relation=pressure`
- `/claims?capability=CAP-...`
- `/evidence?capability=CAP-...`
- `/papers?actor=ACT-...`
- `/evidence?actor=ACT-...`
- `/papers?person=ACT-PERSON-...`
- `/claims?person=ACT-PERSON-...`

Filter state is shareable / reload-safe URL state. Explorer controls read from and write to query parameters without creating a second source of truth.

### Dense Explorer rule
High-cardinality objects such as Papers, Claims and Evidence use spreadsheet-like dense tables, not vertically expensive cards.

Default desktop interaction:
- one row per object;
- compact single-line sticky filter bar immediately below the site header;
- filter labels embedded into the control's default option (for example `Country: All`) rather than occupying a separate row;
- sticky table column header;
- bounded scroll body;
- full-text search;
- visible result count;
- row click / object-name click opens the detail page.

On narrow viewports, preserve the single filter row using horizontal overflow before falling back to multi-line controls.

Principle:
**high-cardinality index = dense Explorer; low-cardinality strategic set = cards; single-object understanding = detail page.**


### Readable prose vs compact metadata

Information density must not make explanatory research text difficult to read.

Use compact typography for:
- IDs;
- badges;
- status / confidence labels;
- table metadata;
- review basis;
- counts.

Use clearly larger reading typography for:
- Deep Read Q1-Q10 explanations;
- Why-this-matters summaries;
- evidence-boundary prose;
- strategic rationale and technical interpretation.

Rule:
**metadata may be dense; explanatory prose must remain comfortably readable.**


### Partner Portfolio anti-duplication rule

The Partner Portfolio has two distinct layers:

1. **P1 / P2 / P3 collaboration packages** — detailed management-facing packages may show institution, key people, rationale, action and connected Direction context.
2. **Technical lane index** — all Strategic Candidate / Stage-0 / Reserve / Watch / Hold Directions must remain visible, but the page must not repeat full Institution / Scholar / Direction card trees already present in the priority packages.

For lane-level exploration, use compact Direction rows plus filtered Explorer links:
- Direction detail;
- Claims;
- Evidence;
- Institutions;
- Scholars.

Principle:
**management package = rich; portfolio registry = compact; relationship sets = filtered Explorer.**

### Actor / Person evidence navigation

Institution and Scholar detail pages should not duplicate long Evidence/Paper lists.

Instead:
- Institution -> related Claims / Papers / Evidence via `actor=`;
- Scholar -> related Claims / Papers / Evidence via `person=`.

Institution scope includes evidence connected through capabilities owned by child labs/teams in the same actor lineage, so parent-organization exploration does not silently omit lab-owned work.


### Dense row Explorer rule

Not every growing collection should become a spreadsheet table.

Use three collection presentations by object shape:

1. **Dense table** — Papers / Claims / Evidence.
   Use when fields are regular, compact and column comparison is valuable.
2. **Dense row Explorer** — Capabilities / Institutions.
   Use when object cardinality is high but each record needs more semantic text than a single table row can comfortably carry.
3. **Strategic card / registry row** — Directions / Priorities / low-cardinality decision objects.
   Use when comparison requires recommendation, rationale or management context.

Dense row Explorer default:
- one object per full-width horizontal row;
- compact single-line sticky filter toolbar;
- 2–3 semantic information zones rather than rigid columns;
- enough vertical room for 2–3 lines of explanatory text;
- compact metadata / tags on the side;
- direct object detail link plus filtered relationship-set links;
- single-column stacking on narrow screens.

Principle:
**use density without flattening meaning: table for regular records, dense rows for text-rich records, strategic cards for small decision sets.**
