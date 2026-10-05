# Russia-Thermal V2.1 — Design Review 1

Updated: 2026-10-05

Status: **PASS WITH REQUIRED REFINEMENTS BEFORE MIGRATION**

## Review question

Does the proposed V2.1 remove the main V1 failure modes without losing research fidelity?

## 1. V1 failure modes addressed

### A. Evidence fragmentation
V1:
source register + bibliography + brief + 10Q.

V2.1:
one Source object folder + optional deep.md.

**PASS**

### B. Institution/person/capability mixing
V1:
institution maps and partner cards sometimes carry identity, capability and strategy together.

V2.1:
ACTOR and CAPABILITY separated.

**PASS**

### C. Country comparison double-write
V1:
Russia, China and Russia-vs-China layers all contain interpretation.

V2.1:
country comparison becomes generated view.

**PASS**

### D. Current state mixed with history
V1:
round files and current files can repeat past decisions.

V2.1:
Direction = current truth; Decision Event = immutable history.

**PASS**

### E. Shotgun maintenance
V1:
one new source may require many manual refreshes.

V2.1:
forward relations have one owner; reverse views generated.

**PASS IN DESIGN / MUST PROVE OPERATIONALLY**

## 2. Architecture risks found

### R1 — Capability vs Claim overlap
Risk:
Capability body could re-copy detailed propositions and become a second Claim store.

Required refinement:
Capability must reference Claim IDs and contain only a concise capability statement + scope/maturity/transfer boundary.

### R2 — Direction vs Capability overlap
Risk:
Direction could restate "what partner can do" and become stale.

Required refinement:
Direction references Capability IDs where useful but owns only strategic meaning and gates.

### R3 — Country-level inference risk
Risk:
generated Russia-vs-China view may accidentally aggregate one strong lab into a national superiority statement.

Required refinement:
generated view must preserve scope:
Actor-specific / capability-specific / evidence-window-specific.
No automatic "country leads" label.

### R4 — Report over-generation
Risk:
too many generated views recreate V1 clutter.

Required refinement:
start with a minimum generated set:
- evidence index;
- actor/capability index;
- Direction portfolio;
- kill ledger;
- restart snapshot;
- one Phase-1 management table.

Add other views only after demonstrated need.

### R5 — Object explosion
Risk:
turning every sentence into a Claim creates hundreds of low-value objects.

Required refinement:
Claim is only for decision-relevant propositions.
Expected active Claim scale should remain manageable, likely tens to low hundreds, not every factual sentence.

### R6 — Actor hierarchy ambiguity
Risk:
Organization/Lab/Person parent relations may become inconsistent.

Required refinement:
Actor metadata needs one canonical `parent_actor_id` and explicit Actor type.

### R7 — Validation object scope
Risk:
PARTNER request, desk falsification and physical experiment could be mixed.

Required refinement:
Experiment gets `validation_type`:
- DESK_FALSIFICATION
- DATA_REQUEST
- MODEL_BENCHMARK
- PHYSICAL_POC
- PRODUCT_VALIDATION

### R8 — Migration while research continues
Risk:
V1 changes after frozen baseline and V2 silently drifts.

Required refinement:
migration plan must include explicit delta replay.

## 3. Required additions before migration

Before any migration work:
1. define object templates;
2. define ID rules;
3. define validation_type;
4. define Actor parent hierarchy;
5. define minimal generator outputs;
6. define Migration Receipt template;
7. choose migration topology: separate target repo or dev branch;
8. freeze baseline commit.

## 4. First pilot recommendation

Use:
**Pavlenko / irreversible-dryout direction**

Pilot object set should include approximately:
- 4–8 Sources;
- 4–10 Claims;
- 2–4 Actors;
- 1–2 Capabilities;
- 1 Direction;
- 1–2 deferred Validation objects;
- historical Decision Events.

This is large enough to stress the architecture but small enough to audit manually.

## 5. Final review judgment

### Conceptual architecture
**PASS**

### Ready for immediate migration
**NO**

### Ready for V2.1 refinement + migration planning
**YES**

The design successfully separates:
evidence, proposition, external capability, strategic choice, validation and history.

The next architecture task is not to move files.
It is to close the eight refinements above and produce:
- templates;
- ID/taxonomy rules;
- migration plan;
- pilot mapping.
