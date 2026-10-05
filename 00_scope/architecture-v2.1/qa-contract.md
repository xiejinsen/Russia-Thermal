# V2.1 QA / Acceptance Contract

Updated: 2026-10-05

## Identity

Fail on duplicate Source, Claim, Actor, Capability, Direction, Experiment or Decision IDs, duplicate source keys, or alias collisions.

Patent family members must not silently count as independent evidence.

## Referential integrity

Fail if:
- Claim references missing Source;
- Capability references missing Actor/Claim;
- Direction references missing Claim;
- Experiment references missing Direction;
- Decision references unresolved subject/trigger;
- Roadmap references missing objects.

## Ownership

Fail if:
- generated file becomes authority;
- reverse relation is hand-maintained twice;
- STATUS duplicates Direction state;
- Actor stores unsupported capability conclusions;
- Capability stores investment priority;
- report overrides canonical state.

## Semantic fidelity

Fail if migration changes meaning.

Critical checks:
- no "Russia leads" from one Actor;
- no "China lacks" from search absence;
- no product inference from paper/patent;
- no phone readiness from adjacent systems;
- no willingness inference from prior collaboration;
- no unified-consortium inference from loose network evidence;
- MPEI 42-month wording stays precise;
- broad Pavlenko dryout uniqueness stays killed;
- generic VC/LHP/laser/DVFS country-advantage theses stay killed.

## Freshness

Dynamic Actor/Source/Capability records past recheck threshold appear in FRESHNESS_WATCH.

## Generated views

Generator must be deterministic, idempotent, stable-ordering, and fail on unresolved IDs.

## Fresh-reader test

Without historical round files, a reader must recover:
- project scope;
- current mode;
- active Directions;
- key Actors/Capabilities;
- strongest China baselines;
- Kill list;
- top unknowns;
- next action;
- authority state.

## Anti-shotgun metric

Targets:
- Source ingestion: 1–2 manual canonical edits;
- capability update: 2–3;
- strategic transition: usually 3–5 including Decision Event / transaction.

## Human readability

For one Direction, a reviewer should answer within a few minutes:
1. opportunity;
2. primary evidence;
3. strongest comparator;
4. Actor/Capability owner;
5. fact vs inference;
6. Keep/Narrow/Kill rationale;
7. unvalidated gap.

If this requires more than five unrelated files, usability fails.

## Cutover

No V2 authority cutover unless migration fidelity, referential integrity, generated-view, fresh-reader and operational anti-shotgun tests all pass and the user approves.
