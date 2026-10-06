# View Models

status: W2_REAL_DATA_INTEGRATION

View models are the presentation boundary between normalized W1 datasets and Astro UI.

## Current implementation

Typed VM contracts live in `web/src/types/view-models.ts`.

Real-data builders live in:
- `web/src/view-models/builders.ts`
- `web/src/view-models/helpers.ts`

Normalized records are loaded only from:
- `web/data/generated/actors.json`
- `web/data/generated/capabilities.json`
- `web/data/generated/directions.json`

These files are regenerated from canonical objects before Astro check/build/dev.

## Implemented page VMs

- `OverviewPageVM`
- `PartnerPortfolioVM`

## Ownership

View models may own:
- presentation ordering;
- labels;
- grouping;
- concise display summaries;
- UI status tone;
- route/display metadata.

They may derive relationships already encoded in normalized IDs.

They must not:
- parse canonical Markdown;
- invent country superiority;
- invent partner priority ranks not represented in canonical contracts;
- overwrite canonical decision state.

## Dependency rule

`canonical objects -> W1 exporter -> normalized records -> VM builder -> component props -> Astro page`

## Current policy on partner ranking

The current final management report uses P1/P2/P3 language, but priority rank is not yet a normalized canonical field.
Therefore the web Partner Portfolio currently groups by canonical `investmentLane` and does **not** hardcode P1/P2/P3.

If explicit priority becomes a durable research object, add it upstream and propagate it through the exporter/schema.
