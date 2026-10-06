# View Models

status: W2_RELATIONSHIP_PAGES

View models are the presentation boundary between normalized W1 datasets and Astro UI.

## Current implementation

Typed VM contracts live in `web/src/types/view-models.ts`.

Real-data builders live in:
- `web/src/view-models/builders.ts`
- `web/src/view-models/helpers.ts`

Normalized records are loaded only from generated web datasets.

## Implemented page VMs

- `OverviewPageVM`
- `PartnerPortfolioVM`
- `InstitutionPageVM`
- `ScholarPageVM`

## Relationship navigation

Institution and Scholar pages resolve only normalized ID relationships:

`Direction.capabilityIds -> Capability.id`

`Capability.actorId -> Actor.id`

`Capability.keyPeopleIds -> Actor.id`

`Actor.parentId -> Actor.id`

This supports the human reading chain:

`Institution -> Lab/Team -> Key People -> Capability -> Direction`

without duplicating the relationship graph in page files.

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

## Partner ranking policy

The current final management report uses P1/P2/P3 language, but priority rank is not yet a normalized canonical field.
The web Partner Portfolio therefore groups by canonical `investmentLane`.
If explicit priority becomes durable project state, model it upstream before surfacing it as authoritative UI.
