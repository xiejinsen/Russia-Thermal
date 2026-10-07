# Web Implementation Roadmap

status: W3_MVP_COMPLETION

## Phase W0 — architecture approval

Deliverables:
- architecture;
- information architecture;
- data contracts;
- component system;
- tokens;
- change-isolation contract;
- image policy;
- accessibility/performance.

Gate:
user approves system design.

## Phase W1 — exporter + schemas

Build:
- canonical object exporter;
- normalized JSON;
- schema validation;
- reference validation;
- generation command.

No polished UI yet.

Gate:
generated data is reproducible and passes health checks.

## Phase W2 — design-system skeleton

Build:
- Astro project;
- tokens;
- primitives;
- layout shell;
- nav;
- card primitives;
- fixture pages.

Gate:
visual system stable enough that feature pages do not invent local styles.

## Phase W3 — MVP pages

status: IMPLEMENTED_CORE_PAGES

Build:
1. Overview
2. Partner Portfolio
3. Institution pages
4. Scholar pages
5. Russia vs China landscape
6. Evidence Explorer
7. Decision / Kill view
8. Frontier Watch

Current state: core data-driven MVP pages implemented; visual enrichment/deployment remain.

## Phase W4 — visual enrichment

status: LEADERSHIP_OVERVIEW_IMPLEMENTED

Add:
- official institution imagery;
- selected scholar portraits;
- original diagrams;
- capability heatmap;
- collaboration matrix.

Do not add paper figures until reuse status is clear.

## Phase W5 — interaction

Only after static content works:
- evidence filters;
- comparison controls;
- optional relationship graph.

## Phase W6 — deployment

- static build;
- GitHub Pages or equivalent;
- broken-link checks;
- accessibility scan;
- performance check.

## Phase W7 — PPT derivation

Derive leadership PPT from:
- V2 management narrative;
- web diagrams;
- partner portfolio;
- heatmap.

Do not maintain an independent PPT story.

## Explicit non-goals for MVP

- CMS;
- user login;
- database;
- live collaborative editing;
- full knowledge graph engine;
- real-time data backend;
- dark mode;
- multilingual authoring.

These can be reconsidered later only if user value justifies architecture expansion.


## Phase W8 — Capability Atlas expansion

status: ARCHITECTURE_PREPARED / DATA_PENDING

Purpose:
support the broadened Russia-first capability landscape without destabilizing the existing Phase-1 decision site.

Sequence:
1. freeze Atlas data/relationship contract;
2. extend technical/platform taxonomy;
3. add additive collaboration/output normalized datasets;
4. implement institution-lineage aggregation;
5. build Russia Capability Atlas;
6. reuse the same contract for China comparator coverage;
7. update leadership Overview only after the Atlas is populated.

Rule:
do not add placeholder public UI before the underlying Atlas datasets are meaningful.

See:
[Capability Atlas Expansion Contract](capability-atlas-expansion-contract.md).
