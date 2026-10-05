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
