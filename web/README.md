# Russia-Thermal Web Report

status: W2_DESIGN_SYSTEM_SKELETON
authority: DERIVED_PRESENTATION_LAYER
date: 2026-10-06

## Purpose

This directory owns the interactive web presentation system for Russia-Thermal.

It does **not** own research truth.

Canonical authority remains outside `web/`:
- `01-evidence/`
- `02-claims/`
- `03-actors/`
- `04-capabilities/`
- `05-directions/`
- `07-decisions/`

## Architecture

The web layer follows:

`Canonical objects -> adapters -> normalized generated data -> view models -> UI components -> pages`

The frontend must never parse canonical Markdown directly.

## Current state

### W0 — architecture and information design
Complete.

### W1 — exporter + schemas
Complete.
- deterministic canonical exporter: `web/adapters/export_web.py`
- normalized data contracts: `web/schemas/*.schema.json`
- generated-data validation workflow: `.github/workflows/web-data-check.yml`

### W2 — design-system skeleton
Started on `main`.
The baseline includes:
- Astro project shell;
- design tokens;
- global styles;
- base layout;
- navigation/header;
- primitive badge component;
- fixture-only index page.

No canonical research facts are manually duplicated in fixture UI.

## Implementation boundary

The W2 shell is intentionally presentation-only.
Real feature pages must consume page-specific view models built from W1 normalized data.

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

## W2 next gate

Stabilize primitives, card contracts, layout/navigation and fixture states before building real Overview / Partner Portfolio pages.
