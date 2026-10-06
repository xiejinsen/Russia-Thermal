# Paper Deep Read Contract

record_state: CURRENT
authority: V2_1_CANONICAL_DEEP_READ_CONTRACT
applies_to: 01-evidence/papers/*/deep-read.md

## Purpose

Paper Deep Read is the structured interpretation layer between a primary Paper Source and the project's Claim / Capability / Direction graph.

It does not replace the Source README.

- `README.md` owns source identity, direct reported findings, original URL and source boundary.
- `deep-read.md` owns structured analyst understanding, comparator pressure, transfer interpretation and decision contribution.
- Web pages are derived views and must not become a second editable copy.

## Required metadata

Each `deep-read.md` must declare:

- `paper_id`
- `deep_read_level`
- `review_status`
- `reviewed_at`
- `why_it_matters`
- `decision_use`
- `legacy_origin` when migrated from V1
- `related_claims`
- `related_capabilities`
- `related_directions`
- `related_priorities`

Allowed deep-read levels:

- `TIER_A` — decision-critical; requires full 10Q structure.
- `TIER_B` — supporting technical read; may use a reduced structure later.
- `REFERENCE_ONLY` — no deep-read sidecar required.

Review status is independent of tier. Examples:

- `FULL_TEXT_REVIEW`
- `PRIMARY_TEXT_PARTIAL_REVIEW`
- `PUBLISHER_ABSTRACT_SUMMARY_PLUS_DECISION_REVIEW`
- `MIGRATED_10Q_PLUS_CURRENT_CANONICAL_REVIEW`

Do not upgrade review status without evidence.

## Tier-A 10Q structure

A Tier-A card must contain exactly ten Q-sections:

1. Problem and target mapping
2. Novelty vs strong baseline
3. Falsifiable hypothesis
4. Capability lineage / competing route
5. Technical control variables
6. Experiment / method design
7. Quantitative evidence / reproducibility
8. What it proves / does not prove
9. Decision contribution / control point
10. Next action / promotion or kill gate

The wording can be adapted to the paper, but the semantic fields must remain stable.

## Evidence boundary

Each deep read ends with three explicit buckets:

### Source facts
Statements directly attributable to the paper or its verified primary metadata.

### Analyst inference
Project interpretation derived from source facts and comparator context.

### Unknown / request
Questions that remain unproven and would require full-text recovery, partner data, experiments or future evidence.

This separation is mandatory.

## Graph linkage

Deep-read metadata may reference existing canonical IDs only:

- Claim IDs;
- Capability IDs;
- Direction IDs;
- Priority IDs.

A deep read must not silently create a new strategic Direction or partner Priority.

Strategic state changes still require canonical Claim / Capability / Direction / Decision updates.

## Web rendering rule

The Web layer may render:

- why this paper matters;
- tier and review status;
- the 10Q sections;
- evidence boundary;
- linked Claims / Capabilities / Directions / Priorities;
- original paper link;
- canonical GitHub deep-read link.

The Web layer must not add new research interpretation not present in canonical deep-read content.

## Migration rule

Historical V1 10Q cards may be migrated only after:

1. matching to a current V2.1 Paper ID;
2. preserving the original evidence boundary;
3. reconciling old decision wording with the current frozen thesis / P1-P2-P3 state;
4. recording `legacy_origin`.

Migration is evidence preservation, not new research progress.
