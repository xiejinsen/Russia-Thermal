# Web Design Research Notes

status: DESIGN_REFERENCE
date: 2026-10-06

Purpose:
record external design/architecture practices reviewed before implementation and the decisions adopted for Russia-Thermal.

This file is reference context, not canonical project truth.

## 1. Astro — Islands Architecture

Source:
https://docs.astro.build/en/concepts/islands/

Observed practice:
- render most page content as static HTML;
- hydrate only isolated interactive components;
- let independent interactive islands load separately;
- avoid monolithic SPA hydration for content-heavy sites.

Adopted:
- static-first site;
- no global client runtime by default;
- interactive islands only for filtering, comparison and optional graph interactions.

Why it fits:
Russia-Thermal is primarily a research/content site, not an application requiring continuous client state.

## 2. Astro — Content Collections / Content Layer

Source:
https://docs.astro.build/en/guides/content-collections/

Observed practice:
- group structurally similar content;
- define schemas;
- validate content/data;
- query structured collections;
- generate static routes from collection entries.

Adopted:
- typed normalized web data;
- schema validation before build;
- ID-based generated routes;
- clear separation between source data and page rendering.

Important adaptation:
our canonical research data remains outside Astro.
Astro collections consume normalized derived data rather than becoming the research database.

## 3. U.S. Web Design System — Design Tokens

Source:
https://designsystem.digital.gov/design-tokens/

Observed practice:
- constrain color, spacing, typography and layout choices into discrete tokens;
- separate semantic intent from raw values;
- reduce arbitrary per-component styling.

Adopted:
- foundation + semantic token layers;
- centralized status/confidence colors;
- no page-local arbitrary spacing/palette.

Expected benefit:
small visual changes remain localized to token definitions or one component family.

## 4. U.S. Web Design System — Component Packages

Source:
https://designsystem.digital.gov/components/packages/

Observed practice:
- import only required component packages;
- keep functionality in discrete units;
- reduce unused code and coupling.

Adopted conceptually:
- feature/component modules should be independently owned;
- no single universal mega-component;
- interactive features package their local state, types and tests.

## 5. U.S. Web Design System — Accessibility

Sources:
https://designsystem.digital.gov/documentation/accessibility/
https://designsystem.digital.gov/design-principles/

Observed practice:
- accessibility is a design-system constraint, not a final audit;
- support semantic structure, keyboard operation, readable contrast and text equivalents;
- do not encode meaning only in color;
- test components and pages.

Adopted:
- WCAG 2.2 AA-oriented implementation target;
- semantic HTML;
- keyboard-first interaction;
- visual graph always has list/table fallback;
- alt text and provenance required for imagery.

## 6. Key architecture lessons applied

### Lesson A — separate content ownership from presentation

Research facts should not be embedded in components.

Our solution:
`canonical objects → adapters → normalized data → view models → components → pages`

### Lesson B — explicit contracts reduce global breakage

Our solution:
- schemas;
- component prop contracts;
- dependency direction;
- versioned normalized data.

### Lesson C — interactive complexity should be opt-in

Our solution:
static by default; islands only for features that require interaction.

### Lesson D — use design systems as constraints, not decoration

Our solution:
design tokens, component tiers, accessibility requirements and fixture/test states are defined before visual polish.

### Lesson E — progressive disclosure for research depth

Leadership sees:
conclusion → decision → evidence summary.

Technical reviewers can drill into:
capability → claim → source.

The home page will not expose the full knowledge graph.

## 7. Practices intentionally NOT adopted

### Full SPA architecture
Rejected for MVP:
too much client-side coupling/runtime for the use case.

### Runtime database
Rejected for Phase 1:
canonical repository already provides authoritative storage.

### CMS-first content ownership
Rejected:
would create another source of truth.

### Universal generic entity components
Rejected:
usually leads to many optional props and hidden cross-entity behavior.

### Full graph-first navigation
Rejected:
useful as a secondary exploration tool but poor for leadership comprehension.

### Dark mode in MVP
Deferred:
doubles visual QA surface without improving the core research decision experience.

## 8. Resulting design stance

The site should feel:
- authoritative;
- research-grade;
- calm;
- evidence-linked;
- visually rich but not dashboard-noisy.

The implementation should behave:
- static-first;
- typed;
- modular;
- deterministic;
- traceable;
- locally changeable.
