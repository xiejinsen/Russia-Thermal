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
- evidence confidence;
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


## Boundary enforcement

### Claim -> Capability
Capability may summarize the conclusion in one sentence, but the evidence proposition itself remains owned by Claim.

Forbidden:
- copying long paper/result summaries into Capability;
- maintaining separate confidence for the same proposition in both Claim and Capability.

### Capability -> Direction
Direction may reference candidate_capabilities but owns only:
- project opportunity;
- comparative residual;
- strategic lane;
- phone-transfer interpretation;
- gates.

Forbidden:
- using Direction as a second partner dossier.

## Actor hierarchy

Canonical parent relation is owned by the child Actor through:
`parent_actor_id`.

Secondary affiliations are non-hierarchical references.

Generated views may show:
Organization -> Lab/Team -> Person.

They must not infer that every Person capability equals the Organization's full capability.

## Country aggregation safeguard

Generated country views may aggregate counts or rows, but must not infer:
"country A leads country B"
from a single Capability or Actor.

Country-level wording requires an explicit Direction/Claim whose scope states the comparison basis.

## Minimal generated set

Only these are mandatory at V2.1 start:
1. evidence index;
2. actor/capability index;
3. Direction portfolio;
4. kill ledger;
5. restart snapshot;
6. Phase-1 management table.

Additional generated views require a demonstrated user need.


## Collaboration decision boundary

ACTOR contact state is factual workflow only.

Strategic statements such as:
- primary collaboration candidate;
- reserve;
- challenger;
- do not pursue;

belong to DIRECTION / ROADMAP or a derived collaboration view.

This prevents identity objects from becoming hidden strategy objects.
