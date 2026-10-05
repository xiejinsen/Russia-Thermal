# Russia-Thermal V2.1 — Design Review 2

Updated: 2026-10-05

Status: **PASS TO ISOLATED MIGRATION PILOT**

## Review question

After Review-1 refinements, is V2.1 sufficiently well-defined to begin a non-authoritative pilot migration without changing research meaning?

## 1. Review-1 closure

### R1 — Claim vs Capability overlap
Closed.

Rule:
- Claim owns proposition/evidence truth;
- Capability references Claims and owns only current capability assessment.

Result: PASS.

### R2 — Capability vs Direction overlap
Closed.

Rule:
- Capability answers what an external Actor demonstrably can do;
- Direction answers what our project should do with it.

Result: PASS.

### R3 — Country-level inference risk
Closed in design.

Rule:
- country is Actor metadata;
- no automatic country-lead inference;
- generated views preserve Actor/capability/evidence-window scope.

Result: PASS.

### R4 — Report over-generation
Closed.

Initial generated set is limited to:
- evidence index;
- actor/capability index;
- Direction portfolio;
- kill ledger;
- restart snapshot;
- one Phase-1 management table.

Result: PASS.

### R5 — Object explosion
Closed.

Claim creation is restricted to decision-relevant propositions.

Result: PASS WITH OPERATIONAL WATCH.

### R6 — Actor hierarchy ambiguity
Closed.

One canonical parent_actor_id is used.
Secondary affiliations do not create competing hierarchy parents.

Result: PASS.

### R7 — Validation object ambiguity
Closed.

validation_type:
- DESK_FALSIFICATION
- DATA_REQUEST
- MODEL_BENCHMARK
- PHYSICAL_POC
- PRODUCT_VALIDATION

Execution state remains orthogonal.

Result: PASS.

### R8 — Post-baseline drift
Closed in migration design.

Migration Plan now requires explicit delta replay before cutover.

Result: PASS.

## 2. Additional Review-2 findings

### F1 — Capability maturity vs evidence confidence
Resolved before Review 2.

Capability now separates:
- maturity;
- evidence_confidence;
- target_fit.

This prevents a strong evidence chain from being mistaken for product maturity.

Result: PASS.

### F2 — Actor identity vs collaboration recommendation
Resolved before Review 2.

Actor owns factual contact workflow only.
Primary candidate / reserve / challenger belongs to Direction/Roadmap/derived collaboration view.

Result: PASS.

### F3 — Source compactness vs evidence loss
Acceptable with constraint.

The compact Source README must preserve all decision-relevant source facts and caveats.
Deep reading remains in deep.md when needed.

Migration must not collapse a 10Q source into metadata-only form.

Result: PASS WITH FIDELITY GATE.

### F4 — Direction dependency on Capability
Acceptable.

Direction may reference Capability IDs for readability, but strategic evidence still resolves through Claims.
Capability is not a substitute for evidence traceability.

Result: PASS.

### F5 — Historical V1 round documents
Resolved by design.

Round files migrate to history/provenance or are represented by Decision Events where they changed current strategy.

They are not required for current-state recovery.

Result: PASS.

## 3. Architecture invariant set

The following invariants are now mandatory:

1. One manual write owner per current field/relation.
2. Source facts are never strategic conclusions.
3. Claims are the evidence-to-meaning bridge.
4. Actors own identity, not technical superiority.
5. Capabilities own demonstrated external ability, not our investment decision.
6. Directions own current strategy.
7. Decision Events own immutable strategic history.
8. Validation design/result is explicit and typed.
9. Country comparisons are derived.
10. Reports/views never override canonical objects.
11. Migration cannot strengthen or weaken meaning.
12. All post-baseline deltas are explicitly replayed.
13. Differentiation confidence and product/phone maturity remain separate.
14. Capability maturity and evidence confidence remain separate.
15. A fresh reader must recover current truth without historical round files.

## 4. Pilot-readiness assessment

Pilot:
**Pavlenko / irreversible-dryout direction**

Architecture coverage:
- primary paper Source: covered;
- official institution/team Source: covered;
- industry collaboration Source: covered;
- independent China comparator Source: covered;
- Claim layer: covered;
- Actor hierarchy: covered;
- Capability layer: covered;
- Direction state: covered;
- deferred physical validation: covered;
- Kill/Narrow history: covered;
- generated management row: covered;
- migration receipt: covered.

Pilot-readiness:
**PASS**

## 5. Remaining risks — pilot must test, not redesign first

### O1 — Claim count inflation
The architecture may still encourage too many Claims in real use.

Pilot metric:
retain only decision-relevant propositions.

### O2 — Human readability of object IDs
Object IDs may become cognitively heavy.

Pilot must test whether generated human views make IDs mostly invisible to normal readers.

### O3 — Generator complexity
A sophisticated generator could become a maintenance burden.

Pilot should implement only the minimum generated set.

### O4 — Secondary affiliations
People may span multiple institutions.

Use one primary hierarchy parent plus explicit secondary affiliations; verify this remains readable.

### O5 — Current V1 source IDs
Migration may need a stable mapping between existing RU-/CN- evidence IDs and new canonical Source IDs.

Do not discard existing IDs blindly.
Migration Receipt must preserve aliases/origin mapping.

These are operational pilot risks, not blockers to starting the isolated pilot.

## 6. Review-2 verdict

### Conceptual architecture
**PASS**

### Object model / ownership
**PASS**

### Migration fidelity design
**PASS**

### QA design
**PASS**

### Ready for destructive/in-place migration
**NO**

### Ready for isolated non-authoritative pilot
**YES**

## 7. Next recommended action

Do not migrate the whole repository.

Next:
1. choose isolated migration topology;
2. freeze the V1 baseline commit;
3. create V2.1 target skeleton;
4. implement the minimal object schema and health checks;
5. migrate only the Pavlenko vertical slice;
6. generate the first Phase-1 management row;
7. compare V1 vs V2.1 semantic result;
8. run Pilot QA;
9. decide GO / FIX / STOP.

The architecture should be considered a reusable template only after the pilot and 2–3 real maintenance/research transactions pass.
