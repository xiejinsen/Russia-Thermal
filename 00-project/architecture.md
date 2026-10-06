# Russia-Thermal V2.1 Architecture

## Canonical model

SOURCE -> CLAIM -> CAPABILITY -> ACTOR
CLAIM -> DIRECTION -> VALIDATION
DIRECTION -> DECISION_EVENT

Direction may reference multiple Capabilities across multiple institutions.
A network Direction does not create a synthetic consortium Actor.

## Canonical directories

- 01-evidence/ — Sources
- 02-claims/ — Claims
- 03-actors/ — Organizations / labs / people / companies
- 04-capabilities/ — Capabilities
- 05-directions/ — current strategic Directions
- 06-validation/ — validation objects
- 07-decisions/ — immutable decision events
- history/ — transactions / migration receipts
- views/ — generated human-facing views
- reports/ — derived reports
- analysis/ — audits/reviews, never canonical truth

## Generated files

Generated views must begin with a DO NOT EDIT marker and must be reproducible by tools/v2repo.py.

Health check:
python tools/v2repo.py --check

GitHub Actions runs the same check on dev.

## Legacy V1

V1 files remain present during migration for semantic comparison and history.
They do not become V2.1 canonical merely because they remain in the repository.

Until cutover, see [STATUS.md](STATUS.md) for authority.
