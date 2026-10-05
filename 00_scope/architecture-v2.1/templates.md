# V2.1 Minimal Object Templates

Updated: 2026-10-05

## CLAIM

Required fields:
- id
- record_state
- proposition
- scope
- status
- confidence
- supporting_sources
- contradicting_sources
- boundary
- change_condition

## ACTOR

Required fields:
- id
- actor_type
- canonical_name
- parent_actor_id
- country
- aliases
- official_urls
- verified_at

Optional:
- current_role
- public_contact
- collaboration_workflow

## CAPABILITY

Required fields:
- id
- actor_id
- capability_statement
- evidence_claims
- technical_scope
- target_scope
- maturity
- target_fit
- transfer_boundary
- assessed_at

## DIRECTION

Required fields:
- id
- problem
- strategic_hypothesis
- role
- investment_lane
- evidence_maturity
- differentiation_confidence
- phone_transfer_maturity
- related_claims
- strongest_baseline
- internal_control_boundary
- next_question
- promotion_gate
- kill_gate

Optional:
- candidate_capabilities
- candidate_actors

## EXPERIMENT

Required fields:
- id
- direction_id
- validation_type
- question
- hypothesis
- strongest_baseline
- required_inputs
- measurement_contract
- pass_criteria
- fail_criteria
- state

## DECISION_EVENT

Required fields:
- id
- subject
- effective_date
- event_type
- previous_state
- new_state
- rationale
- trigger_claims
- trigger_experiments
- reopen_condition

Optional:
- correction_of

## RESEARCH_TRANSACTION

Required fields:
- id
- purpose
- base_commit
- objects_touched
- expected_transition
- qa_result
- generated_views_refreshed
- close_commit
- state

## MIGRATION_RECEIPT

Required fields:
- id
- baseline_commit
- legacy_paths
- target_objects
- transformation_classes
- semantic_fidelity_result
- discrepancies
- deferred_material
- reviewer_decision


## Object-boundary rules

### CLAIM vs CAPABILITY
A CLAIM is a proposition that can be supported/refuted.

A CAPABILITY is a current assessment of what one Actor demonstrably can do.

CAPABILITY must reference Claim IDs and must not copy full evidence reasoning.

### CAPABILITY vs DIRECTION
CAPABILITY answers:
> what external technical ability exists?

DIRECTION answers:
> what should our project do with that ability?

A Direction may reference Capability IDs but must not restate their detailed evidence.

## ACTOR hierarchy rule

Every non-root Actor uses exactly one `parent_actor_id`.

Examples:
- Lab 1.3 -> Kutateladze Institute
- Pavlenko -> Lab 1.3 or primary current parent Actor defined by the migration mapping
- Newfrost -> no academic parent

Do not create multiple manual parent relations.
Secondary affiliations belong in an explicit alias/affiliation list, not as competing hierarchy parents.

## EXPERIMENT validation types

Required `validation_type` values:
- DESK_FALSIFICATION
- DATA_REQUEST
- MODEL_BENCHMARK
- PHYSICAL_POC
- PRODUCT_VALIDATION

Validation type and execution state are orthogonal.

Example:
- physical phone coupon test can be PHYSICAL_POC + DEFERRED;
- comparator literature falsification can be DESK_FALSIFICATION + COMPLETE.

## Claim granularity rule

Create a Claim only if changing its truth/status/confidence could affect:
- a Capability;
- a comparator;
- a Direction;
- a confidence field;
- a promotion/kill gate;
- a management statement.

Do not create Claim objects for low-value descriptive sentences.

## Country-scope rule

No object field may state generic national superiority unless the exact scope is explicit and supported.

Preferred scope:
- Actor-specific;
- Capability-specific;
- evidence-window-specific;
- public-evidence-specific.

Generated views must preserve that scope.
