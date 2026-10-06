# Monthly Research Update Contract

status: CURRENT
owner: project governance
purpose: recurring evidence refresh with minimal change coupling

## 1. Core rule

A new Source does not automatically justify changes to Capability, Direction, Decision, Synthesis, or frontend copy.

Changes propagate upward only when the semantic meaning at that layer changes.

## 2. Default monthly path

### Level 1 — Evidence ingestion
Typical case:
- add SOURCE;
- update or create the affected CLAIM.

Expected manual blast radius:
- 1–2 canonical objects.

### Level 2 — Capability reassessment
Trigger only when new evidence changes what an Actor can demonstrably do.

Then:
- update affected CLAIM;
- update affected CAPABILITY.

Expected manual blast radius:
- 2–3 canonical objects.

### Level 3 — Strategic direction reassessment
Trigger only when new evidence changes:
- comparator pressure;
- residual differentiation;
- phone-transfer maturity;
- strategic hypothesis;
- promotion/kill gate.

Then:
- update affected upstream object(s);
- update the affected DIRECTION.

### Level 4 — Decision transition
Trigger only when lane/state changes or a prior thesis is formally narrowed/killed/reopened.

Then:
- append DECISION_EVENT;
- do not rewrite history.

### Level 5 — Management synthesis
Trigger only when the conclusion or action implication that leadership should act on materially changes.

Then:
- update the bounded SYNTHESIS;
- generated website/report views refresh from it.

## 3. No-shotgun rules

Forbidden:
- editing every Direction because one Source was added;
- editing homepage copy because one paper was found;
- duplicating the same conclusion in Actor, Capability, Direction, report, and frontend;
- manually maintaining reverse relations;
- changing Synthesis merely to reflect a larger evidence count.

## 4. Monthly operating sequence

1. Discovery scan
2. Source deduplication / provenance check
3. Claim impact assessment
4. Capability impact check
5. Direction comparator/gate impact check
6. Decision transition check
7. Synthesis change check
8. Regenerate derived views
9. Run repository + web QA
10. Publish

## 5. Change classification

Every research batch should be classified as one of:

- EVIDENCE_ONLY
- CAPABILITY_CHANGE
- DIRECTION_CHANGE
- DECISION_CHANGE
- SYNTHESIS_CHANGE

Only the classified layer and required dependencies should be edited.

## 6. Website behavior

The website is downstream.

It should not require manual content edits for ordinary research updates.

Canonical objects -> normalized web data -> view models -> Figma-defined components -> static pages.

A monthly Source/Claim update should automatically appear in evidence/drill-down views after regeneration without requiring page-component changes.

## 7. Acceptance target

For a normal monthly evidence refresh:
- most changes remain in Source/Claim;
- no Figma redesign;
- no component rewrite;
- no broad report rewrite;
- no Synthesis change unless the leadership conclusion truly moved.
