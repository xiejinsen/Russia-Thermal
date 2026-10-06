# Web Architecture

status: DESIGN
scope: system boundaries and dependency direction

## 1. Architecture objective

Optimize for:
- low change coupling;
- traceability to canonical research objects;
- static performance;
- maintainable presentation;
- easy future extension from web to PPT/export.

## 2. Layer model

```
Canonical repository objects
        ↓
[Layer A] Source Adapters
        ↓
[Layer B] Normalized Web Data
        ↓
[Layer C] View Models
        ↓
[Layer D] UI Components
        ↓
[Layer E] Pages / Routes
        ↓
[Layer F] Optional Interactive Islands
```

Dependencies flow **down only**.

### Layer A — Source Adapters

Responsibility:
- parse canonical Source / Claim / Actor / Capability / Direction / Decision objects;
- resolve stable IDs and relationships;
- normalize format differences;
- never infer new strategic meaning.

Examples:
- actor adapter;
- evidence adapter;
- capability adapter;
- direction adapter.

Forbidden:
- CSS/UI decisions;
- page-specific wording;
- custom leadership prioritization.

### Layer B — Normalized Web Data

Responsibility:
provide stable typed entities independent of canonical Markdown syntax.

Examples:
- `ActorRecord`
- `EvidenceRecord`
- `CapabilityRecord`
- `DirectionRecord`
- `DecisionRecord`

Generated files only.

Suggested location:
`web/data/generated/`

Never manually edit.

### Layer C — View Models

Responsibility:
combine normalized entities for one presentation use case.

Examples:
- `InstitutionPageVM`
- `ScholarPageVM`
- `PartnerPortfolioVM`
- `CapabilityHeatmapVM`
- `EvidenceExplorerVM`

This is the main anti-coupling layer.

A page should not know how many canonical files were required to build its data.

### Layer D — UI Components

Responsibility:
render explicit props.

Examples:
- `InstitutionCard`
- `ScholarCard`
- `EvidenceCard`
- `DecisionBadge`
- `CapabilityHeatmap`

Components do not:
- parse Markdown;
- query repository files;
- decide strategic priority.

### Layer E — Pages

Responsibility:
compose view models and components into user journeys.

Pages contain layout/composition, not canonical domain logic.

### Layer F — Interactive Islands

Use only for:
- filtering/search;
- heatmap controls;
- relationship graph;
- optional expandable evidence;
- comparison controls.

Default page content remains static.

## 3. Why Astro is preferred

This site is mostly static research content with a few interactive tools.

Astro supports:
- static-first generation;
- content/data collections with schemas;
- isolated interactive islands;
- routes generated from structured collections;
- framework components only where needed.

Decision:
**Astro is preferred over a full SPA for the MVP.**

React may still be used inside a specific island if a graph/filter component benefits from it.

## 4. Build pipeline

```
repo canonical objects
    ↓
web/adapters/*
    ↓
web/data/generated/*.json
    ↓
schema validation
    ↓
web/view-models/*
    ↓
Astro build
    ↓
static site
```

## 5. Authority boundary

Web may own:
- display ordering;
- page grouping;
- visual emphasis;
- explanatory labels;
- UI state;
- route slugs.

Web may **not** own:
- source facts;
- affiliation;
- capability truth;
- confidence;
- direction status;
- strategic decision state.

Those must be imported from canonical objects or derived reports.

## 6. Deployment boundary

Phase 1:
- static export;
- GitHub Pages or equivalent;
- no runtime database;
- no login;
- no server API required.

Future:
server-side features can be added only behind isolated interfaces.

## 7. Failure containment

A change in:
- canonical parser → adapters/tests only;
- data schema → normalized data + affected view models;
- view model → affected pages/components;
- card design → component only;
- design palette → tokens only;
- evidence filter → Evidence Explorer island only.

This containment is a core architecture requirement.
