# ADR — Comparator taxonomy remains derived

status: ACCEPTED
date: 2026-10-06
scope: Russia-vs-China capability-area modeling

## Decision

Do **not** introduce a canonical `COMPARATOR_AREA`, `DOMAIN`, or equivalent object in W2.

## Why

The current decision unit is already explicit:
- `Capability` says what an actor can demonstrate;
- `Direction` says what strategic route is being evaluated;
- `Claim` carries comparator pressure and bounded synthesis;
- `Direction.strongest_baseline` and `Direction.residual_differentiation` carry the Russia-vs-China decision contrast.

Labels such as:
- ultra-thin VC;
- dryout / rewetting;
- long-term aging;
- laser / wettability;
- microchannel cooling;

currently behave as cross-cutting navigation/search taxonomy, not as independent decision objects.

Creating a canonical area object now would duplicate classification truth and create additional edges that do not yet own distinct evidence, decision state, or lifecycle.

## Current policy

Use:
- `Capability.technicalScope` for descriptive technical vocabulary;
- Direction-based rows for the Russia-vs-China landscape;
- derived UI taxonomy only for filtering/navigation.

Do not derive country superiority from taxonomy counts.

## Promotion gate for a future canonical area object

Create a dedicated canonical comparator/topic object only when at least two of these are true:

1. the area needs its own durable judgment independent of any one Direction;
2. the area needs explicit China baseline evidence and Russia residual evidence relations;
3. the area has its own Keep / Reserve / Watch / Kill lifecycle;
4. multiple Directions require a shared comparator judgment that should not be duplicated;
5. change history for the area itself becomes decision-relevant.

Until then, comparator-area labels remain derived presentation taxonomy.
