# View Models

status: W2_CONTRACTS_STARTED

View models are the presentation boundary between normalized W1 datasets and Astro UI.

## Current typed contracts

Implemented in `web/src/types/view-models.ts`:
- `StatusVM`
- `InstitutionCardVM`
- `ScholarCardVM`
- `DirectionCardVM`
- `OverviewPageVM`

## Ownership

View models may own:
- presentation ordering;
- labels;
- grouping;
- concise display summaries;
- UI status tone;
- route/display metadata.

They must reference or derive from normalized canonical IDs and must not invent new research truth.

## Dependency rule

`canonical objects -> normalized records -> view-model builder -> component props`

Components and pages must not parse canonical Markdown or reconstruct strategic logic independently.

## Next contracts

After card contracts stabilize:
- `PartnerPortfolioVM`
- `InstitutionPageVM`
- `ScholarPageVM`
- `CapabilityHeatmapVM`
- `EvidenceExplorerVM`
