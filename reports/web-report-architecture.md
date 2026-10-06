# Web Report Architecture

status: DESIGN
date: 2026-10-06
purpose: define a future interactive presentation layer for Russia-Thermal without creating a second source of truth.

## Principle

The website is a **derived presentation surface**.

It must read from:
- Sources
- Claims
- Actors
- Capabilities
- Directions
- Decisions
- leadership derived reports

It must not become an independently edited evidence database.

## Primary navigation

### 1. Overview
- executive conclusion;
- Russia vs China heatmap;
- top three partner packages;
- collaboration model;
- Keep / Reserve / Watch / Kill summary.

### 2. Institutions
Card/grid view:
- institution name;
- type;
- location / institutional context;
- core capabilities;
- key people;
- collaboration readiness;
- relevant directions;
- evidence confidence.

Drill-down:
Institution -> Lab / Team -> Key People -> Capabilities -> Evidence.

### 3. Scholars
Scholar profile page:
- photo if public/licensable;
- current role;
- institution / lab;
- short biography;
- research themes;
- representative recent papers;
- patents/projects;
- industrial/international collaborations;
- project-specific relevance;
- recommended collaboration role;
- contact workflow.

### 4. Technology landscape
Interactive matrix:
- ultra-thin VC;
- dryout / rewetting;
- aging / reliability;
- wick / capillary;
- surface engineering;
- thin films;
- LHP;
- microchannels;
- active cooling / acoustics;
- modeling / diagnostics.

For each:
- China baseline;
- Russia residual;
- supporting organizations;
- strongest evidence;
- decision state.

### 5. Russia vs China
- capability heatmap;
- named China anchors;
- Russia residual value;
- comparable / non-comparable evidence boundaries.

### 6. Collaboration portfolio
- Priority 1 / 2 / 3;
- supporting nodes;
- role;
- readiness;
- risk;
- recommended first question;
- what we retain internally.

### 7. Evidence explorer
Filterable:
- papers;
- patents;
- official sources;
- year;
- institution;
- person;
- topic;
- country;
- decision impact.

Each source card should show:
- title;
- authors;
- venue;
- year;
- primary link;
- short brief;
- canonical ID;
- linked claims/capabilities/directions.

### 8. Decision history
- Keep / Narrow / Kill timeline;
- why broad theses were rejected;
- what new evidence changed the view.

### 9. Frontier Watch
- AVTFG;
- RNKT;
- Thermophysics and Aeromechanics;
- High Temperature;
- future new venues.

Show:
- latest scan date;
- new nodes found;
- whether portfolio changed.

## Recommended visual components

### Institution cards
Logo/photo only when public use is safe.
Show:
- institution;
- lab/team;
- key people;
- capability tags;
- collaboration readiness;
- Russia-vs-China residual.

### Scholar cards
Optional public portrait.
Show:
- name;
- role;
- institution;
- top 3 research themes;
- top representative works;
- why relevant;
- collaboration priority.

### Paper cards
Optional paper figure/graph only when copyright/use permits.
Default:
- title;
- authors;
- journal;
- year;
- DOI;
- mechanism;
- finding;
- decision impact.

### Relationship graph
Suggested entity relationships:
Institution -> Lab
Lab -> Person
Person -> Paper
Paper -> Claim
Claim -> Capability
Capability -> Direction
Direction -> Decision

Use selectively; do not make the home page a dense knowledge graph.

### Capability heatmap
Rows:
technical capability.

Columns:
China / Russia / target relevance / maturity / recommendation.

### Collaboration matrix
Axes:
- collaboration readiness;
- strategic residual value.

Bubble:
institution/team.

## Web writing hierarchy

Page-level rule:
1. one-line conclusion;
2. 3–5 decision facts;
3. visual;
4. expandable evidence;
5. source links.

Avoid:
- long unbroken research prose;
- raw DOI dumps;
- mixing institution and person at the same hierarchy level;
- presenting hypotheses as facts.

## Image policy

Potential visual sources:
- official institution/lab photos;
- public researcher portraits;
- journal graphical abstracts / figures only when reuse is permitted;
- our own diagrams for mechanism / capability relationships.

Preferred:
create original explanatory diagrams rather than copying copyrighted paper figures.

Every externally sourced image needs:
- source;
- license/use status where relevant;
- alt text;
- attribution if required.

## Data / build architecture

Recommended future implementation:

```
web/
  data/
    generated/
      actors.json
      capabilities.json
      directions.json
      evidence.json
      decisions.json
  pages/
  components/
  assets/
  scripts/
```

Generation flow:

```
canonical markdown objects
      ↓
tools/v2repo.py or dedicated exporter
      ↓
normalized JSON
      ↓
web frontend
```

## Candidate implementation

A static site is sufficient for Phase 1.

Recommended:
- Astro or Next.js static export;
- Markdown/JSON-driven content;
- client-side filter/search only where useful;
- deploy via GitHub Pages or another static host.

No database is required initially.

## Web MVP

First version should contain only:

1. Overview
2. Russia-vs-China landscape
3. Three primary partner pages
4. Key-person profiles
5. Supplementary capability nodes
6. Evidence explorer
7. Kill / Reserve / Watch
8. Frontier Watch

Do not build the full knowledge graph first.

## Build gate

Before implementation:
- management synthesis V2 approved;
- leadership hierarchy stable;
- key-person / institution naming stable;
- web fields mapped to canonical objects;
- no manually duplicated facts without canonical source.

## Immediate next step

Review `reports/final-management-synthesis.md` V1 from a leadership-reader perspective.

After narrative approval:
1. produce V2;
2. define web wireframe;
3. implement web MVP;
4. derive PPT from the same narrative rather than maintaining a separate story.
