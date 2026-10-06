# Russia-Thermal Web Report

status: DESIGN_ONLY
authority: DERIVED_PRESENTATION_LAYER
date: 2026-10-06

## Purpose

This directory owns the future interactive web presentation system for Russia-Thermal.

It does **not** own research truth.

Canonical authority remains outside `web/`:
- `01-evidence/`
- `02-claims/`
- `03-actors/`
- `04-capabilities/`
- `05-directions/`
- `07-decisions/`

## Design goal

Build a leadership-readable, evidence-drillable website that can present:
- Russia vs China capability landscape;
- institutions / labs / key people;
- papers / patents / official evidence;
- collaboration portfolio;
- Keep / Reserve / Watch / Kill decisions;
- frontier-watch venues.

The web layer must remain modular enough that a local content/UI change has a small, predictable blast radius.

## Chosen architectural direction

**Static-first Astro architecture** with:
- generated normalized data;
- typed content/data contracts;
- mostly static HTML;
- isolated interactive islands only where needed;
- design tokens;
- reusable components;
- page-specific view models;
- no manually duplicated canonical research facts.

Why:
- the product is content-heavy and interaction-light;
- static output is sufficient for Phase 1;
- Astro content collections support structured/validated content;
- Islands isolate interactive widgets rather than hydrating the entire site.

## Directory map

```
web/
  README.md
  docs/
    architecture.md
    information-architecture.md
    data-contracts.md
    component-system.md
    design-tokens.md
    change-isolation.md
    content-image-policy.md
    accessibility-performance.md
    roadmap.md
  schemas/
    README.md
  adapters/
    README.md
  view-models/
    README.md
  src/
    README.md
  tests/
    README.md
```

Implementation code is intentionally deferred until the design contracts are approved.

## Reading order

1. [Architecture](docs/architecture.md)
2. [Information Architecture](docs/information-architecture.md)
3. [Data Contracts](docs/data-contracts.md)
4. [Component System](docs/component-system.md)
5. [Change Isolation](docs/change-isolation.md)
6. [Design Tokens](docs/design-tokens.md)
7. [Content & Image Policy](docs/content-image-policy.md)
8. [Accessibility & Performance](docs/accessibility-performance.md)
9. [Roadmap](docs/roadmap.md)

## Non-negotiable rules

1. Website is derived; canonical research objects are never manually re-authored in web pages.
2. No page reads raw repository Markdown directly.
3. Adapters normalize canonical objects first.
4. Pages consume page-specific view models, not raw data.
5. Components receive explicit typed props.
6. Design values use tokens; no page-local arbitrary visual constants.
7. Interactive features are isolated islands.
8. A component may not fetch canonical data itself.
9. Images are references with provenance, not copied ad hoc into page code.
10. Build must fail on broken references/schema violations.

## Current state

**Design only. No web implementation has started.**

Next gate:
approve these contracts, then build exporter + data schemas before visual frontend work.
