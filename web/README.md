# Russia-Thermal Web Report

status: WEB_V1_HISTORICALLY_ACCEPTED / WEB_CLOSEOUT_WAVE_A_IMPLEMENTED / LATEST_SHA_BUILD_BROWSER_QA_PENDING
authority: DERIVED_PRESENTATION_LAYER
date: 2026-10-12


## 2026-10-12 final-research integration (current)

- Research Q01–Q10 answers now have a read-only, generated presentation dataset `questionCloseouts.json`, sourced from WP3 final matrix and the historical final-insight-question ledger. The exporter enforces 10 matching IDs, matching acceptances and the exact 3/7 disposition split.
- `/research-questions/` is the new final-research answer/index page; the main navigation and home link to it. It shows answer, confidence, evidence limit, linked research routes and original audit/ledger provenance.
- The home and partner pages explicitly distinguish **P1 internal feasibility preparation** from **separate approval required for external outreach**; priorities remain as historically frozen, not a new decision event. Separate TPU research lines are not collapsed into one original study.
- `npm run check` / `npm run build` now run `check:research` after data generation. **These checks were committed but their execution against latest HEAD has not been verified in this work session.** Build/Pages deployment, responsive screenshots and final source-link smoke tests remain OPEN.
- [Wave A final research integration audit](../analysis/audits/web-closeout-wave-a-implementation-2026-10-12.md) records exact changes and verification limits. Older W2 shell notes and [V1 acceptance](docs/production-acceptance-v1.md) below are historical snapshots, not the current release status.

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


## Research Intelligence design refresh (2026-10-09)

- [Evidence-first bilingual Web Design System v1](docs/research-intelligence-design-system-v1-2026-10-09.md)
- [Overview UX and information-architecture blueprint](docs/overview-ux-blueprint-v1-2026-10-09.md)
- [Editable Figma concept exploration](https://www.figma.com/design/NAPiueDASYJpYLiiOyYBer) — exploratory only; existing Astro production page not yet replaced under v1.

Design path: scientific/editorial direction -> evidence-linked blueprint -> revised Figma -> browser screenshots and responsive QA -> Astro implementation -> current commit CI. This preserves Phase1 research decisions and avoids shipping an unreviewed webpage.
