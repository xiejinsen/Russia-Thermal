# V2.1 Relation & State Ownership

Updated: 2026-10-05

## Principle

Every manually maintained current field or relationship has exactly one owner.

If two files own the same current state, that is an architecture bug.

## Forward relation owners

- CLAIM owns supporting_sources / contradicting_sources.
- CAPABILITY owns actor_id and evidence_claims.
- DIRECTION owns related_claims and optional capability references.
- EXPERIMENT owns direction_id.
- DECISION_EVENT owns subject and trigger references.
- ROADMAP owns scheduling references.

Reverse relationships are generated.

## Current-state owners

SOURCE:
- source identity;
- bibliographic facts;
- primary URL;
- direct reported results;
- source-local caveats.

CLAIM:
- proposition;
- status/confidence;
- source support/contradiction;
- scope/boundary.

ACTOR:
- identity;
- parent/affiliation;
- current role;
- official URL/contact;
- factual collaboration workflow.

CAPABILITY:
- demonstrated technical ability;
- technical scope;
- maturity;
- target fit;
- transfer boundary.

DIRECTION:
- strategic problem;
- role/investment lane;
- differentiation confidence;
- phone-transfer maturity;
- strongest baseline;
- promotion/kill gates.

EXPERIMENT:
- execution state;
- measurement contract;
- result.

STATUS:
- global phase/mode/blocker/next action.

DECISION_EVENT:
- immutable strategic transition history.

## Country comparison

Russia/China comparison is derived from:
Actor.country + Capability + Claims + Direction.

No SOURCE or ACTOR stores a manually maintained "country advantage" field.

## Anti-shotgun target

New source without strategic change:
SOURCE + CLAIM only.

Capability change:
SOURCE + CLAIM + CAPABILITY.

Strategic transition:
affected Claim/Capability + DIRECTION + DECISION_EVENT + transaction.

Indexes, portfolio, country views, management table and restart snapshot are generated.
