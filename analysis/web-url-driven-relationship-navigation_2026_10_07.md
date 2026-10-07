# URL-Driven Relationship Navigation Audit — 2026-10-07

status: PASSED_RELATIONSHIP_NAVIGATION_FOUNDATION
scope: Direction / Claim / Capability / Paper / Evidence drill-down and set-level Explorer navigation

## Goal

Turn the web from a set of individually useful pages into a relationship-aware research database where:
- a concrete object name opens its detail page;
- a relationship set opens the relevant dense Explorer with a shareable URL scope;
- refresh / copy-link / browser back preserve the research slice.

## Implemented URL state

The shared `ExplorerToolbar.astro` now:
- initializes search and visible filters from URL query parameters;
- writes search / filter changes back with `history.replaceState`;
- restores state on reload and browser history navigation;
- supports hidden relationship scopes such as Claim or Capability;
- displays a compact Scope indicator for relationship-driven slices;
- preserves the one-line sticky toolbar design.

Search uses:
- `q=...`

Visible filters use their canonical keys, for example:
- `direction=DIR-...`
- `country=RU`
- `year=2025`

Relationship scopes include:
- `claim=CLM-...`
- `capability=CAP-...`
- `relation=supporting|pressure`

## Exact relationship filtering

Paper and Evidence rows expose separate:
- supporting Claim IDs;
- pressure / contradicting Claim IDs.

This means:
`?claim=CLM-X&relation=supporting`
does not accidentally match a Paper that pressures CLM-X but supports a different Claim.

## Detail -> Explorer navigation

### Direction detail

Added:
- View all Claims -> `/claims?direction=<DIR>`
- View all Evidence -> `/evidence?direction=<DIR>`
- Papers only -> `/papers?direction=<DIR>`

Concrete Capability names now open Capability detail.

### Claim detail

Supporting bucket:
- All sources -> `/evidence?claim=<CLM>&relation=supporting`
- Papers -> `/papers?claim=<CLM>&relation=supporting`

Pressure bucket:
- All sources -> `/evidence?claim=<CLM>&relation=pressure`
- Papers -> `/papers?claim=<CLM>&relation=pressure`

Claim impact graph now includes concrete Capability links in addition to Direction / Institution / Scholar links.

### Capability detail

Added:
- View all related Claims -> `/claims?capability=<CAP>`
- View all Evidence -> `/evidence?capability=<CAP>`
- Papers only -> `/papers?capability=<CAP>`

### Paper detail

Concrete Capability impact entries now open Capability detail.

## Explorer relationship fields

Papers:
- Direction IDs
- Capability IDs
- all Claim IDs
- supporting Claim IDs
- pressure Claim IDs

Claims:
- Direction IDs
- Capability IDs

Evidence:
- Direction IDs
- Capability IDs
- all Claim IDs
- supporting Claim IDs
- pressure Claim IDs

## QA adaptation

Astro serializes query-string ampersands as HTML entities in generated HTML.

The internal-link audit previously interpreted `&#38;` as a fragment marker and falsely reported missing anchors.

`web/scripts/check-internal-links.mjs` now decodes standard ampersand entities before URL parsing, while continuing to validate the pathname against generated static targets.

## Validation

Functional head after QA patch:
`193594fb`

- V2.1 Repository Health: PASS
- Type / Astro Check: PASS
- Static Site Build: PASS
- Internal Link Audit: PASS

## Remaining navigation work

Foundation is complete.

Next audit should check the whole site for:
1. dead-end decision-relevant visuals / counts;
2. duplicated relationship lists that should become Explorer links;
3. Partner Portfolio duplication between P1/P2/P3 and Direction lanes;
4. stale navigation / labels;
5. whether Institution / Scholar collection pages need URL-addressable relationship slices in the same way.

No research thesis, Claim semantics, Capability disposition, Direction lane or P1/P2/P3 decision changed.
