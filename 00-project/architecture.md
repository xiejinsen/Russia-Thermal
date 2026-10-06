# Russia-Thermal V2.1 Architecture

## Canonical model

SOURCE -> CLAIM -> CAPABILITY -> ACTOR
CLAIM -> DIRECTION -> VALIDATION
DIRECTION -> DECISION_EVENT
DECISION / DIRECTION / CLAIM -> SYNTHESIS

Direction may reference multiple Capabilities across multiple institutions.
A network Direction does not create a synthetic consortium Actor.

## Canonical directories

- 01-evidence/ — Sources
- 02-claims/ — Claims
- 03-actors/ — Organizations / labs / people / companies
- 04-capabilities/ — Capabilities
- 05-directions/ — current strategic Directions
- 06-validation/ — validation objects
- 07-decisions/ — immutable decision events, partner priorities, and current management Synthesis objects
- history/ — transactions / migration receipts
- views/ — generated human-facing views
- reports/ — derived reports

## Presentation-readiness layer

`SYNTHESIS` is a thin canonical management-judgment object. It may summarize existing Claim / Direction / Priority state for conclusion-first presentation, but it must not become a second evidence database.

Synthesis owns only:
- the current management conclusion;
- the action implication / so-what;
- concise theory basis;
- curated references to the most decision-relevant Claims / Directions / Priorities / Sources;
- scope boundary and reopen condition.

It does **not** own source facts, capability truth, actor identity, or direction state.

This allows the website/Figma layer to read stable conclusion-first contracts without copying strategic prose into frontend code.
- analysis/ — audits/reviews, never canonical truth

## Generated files

Generated views must begin with a DO NOT EDIT marker and must be reproducible by tools/v2repo.py.

Health check:
python tools/v2repo.py --check

GitHub Actions runs the same check on dev.

## Legacy V1

V1 files remain present during migration for semantic comparison and history.
They do not become V2.1 canonical merely because they remain in the repository.

Cutover is complete: V2.1 canonical objects on main are authoritative. Legacy V1 files remain historical/provenance material only.
