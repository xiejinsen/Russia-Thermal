# Russia-Thermal V2.1 Taxonomy

## First-class objects

- **SOURCE** — original paper, patent, official page, vendor record or dataset.
- **CLAIM** — a supportable/refutable proposition.
- **ACTOR** — organization, lab/team, person or company identity.
- **CAPABILITY** — what one Actor demonstrably can do.
- **DIRECTION** — what the project should do with one or more Capabilities.
- **EXPERIMENT / VALIDATION** — discriminating test or data request.
- **DECISION_EVENT** — immutable Keep/Narrow/Kill/Watch/Hold transition.
- **STATUS / ROADMAP / RESEARCH_TRANSACTION** — project operating state and execution history.

Generated views/reports are not authority.

## Institution / person rule

Research value:
- institutions/labs and key people are both first-class and important.

Presentation hierarchy:
Institution -> Lab/Team -> Key People -> Capability -> Direction.

Institution/lab owns organizational capability context.
Person objects preserve:
- identity;
- affiliation confidence;
- role;
- research lineage;
- representative work;
- contact/outreach relevance.

Do not use an individual surname as the top-level capability category when a verified organization/lab owner exists.

## Direction lanes

- STRATEGIC_CANDIDATE
- STAGE0_CHALLENGER
- RESERVE
- WATCH
- HOLD

Background-only capabilities do not require a Direction.

## Confidence and maturity are separate

Scientific evidence confidence is not phone-product maturity.
A capability can be HIGH evidence / LOW phone maturity.


## Capability classification

Capability classification uses a two-level model:

### Management-facing family

Each Capability has one primary family:
- SOFTWARE_SYSTEM
- PASSIVE_HARDWARE
- ACTIVE_HARDWARE
- ENABLING

Leadership views use this coarse grouping by default.

### Research-facing topics

Capabilities may additionally carry multiple controlled topic tags for detailed filtering.
Papers / Patents / Sources do not duplicate Capability taxonomy.

Canonical contracts:
- [Thermal Capability Taxonomy v1.0](capability-taxonomy-v1.md)
- [Terminal Transfer Taxonomy v1.0](platform-transfer-taxonomy-v1.md)

Software/system thermal management is intentionally LIMITED_SCAN in this project.

## Platform transfer

Platform relevance is assessed on Capability rather than on every Source.

A Capability may have different transfer levels for:
- SMARTPHONE
- TABLET
- WEARABLE
- AR_VR
- LAPTOP
- COMPACT_ELECTRONICS
- ADJACENT_ELECTRONICS
- FOUNDATIONAL_ONLY

Transfer level is evidence-bounded and must not be inferred from technical plausibility alone.
