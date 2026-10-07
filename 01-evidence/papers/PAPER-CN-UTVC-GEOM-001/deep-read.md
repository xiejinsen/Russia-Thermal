# PAPER-CN-UTVC-GEOM-001 — Deep Read

paper_id: PAPER-CN-UTVC-GEOM-001
deep_read_level: TIER_A
review_status: MIGRATED_10Q_PLUS_CURRENT_CANONICAL_REVIEW
reviewed_at: 2026-10-07
legacy_origin: evidence/10q/papers/d2_0_39_mm_composite_wick_utvc.md
why_it_matters: This paper provides an explicit sub-0.4 mm sealed-device geometry / process benchmark and therefore constrains every Russian wick or surface-transfer thesis.
decision_use: PHONE_UTVC_GEOMETRY_AND_MANUFACTURABILITY_BASELINE
related_claims: CLM-TPU-008; CLM-TPU-010
related_capabilities: CAP-TPU-LASER-WETTABILITY-PROCESS
related_directions: DIR-SURFACE-PROCESS-CHALLENGER
related_priorities: PRI-03-TPU

## Q1 — Problem and target mapping

The paper asks how a composite wick can preserve liquid return and temperature uniformity in a 0.39 mm sealed UTVC for electronics cooling.

This is directly useful as the dimensional contract for evaluating whether a proposed Russian surface / wick feature can physically fit inside a phone-class two-phase spreader.

## Q2 — Novelty vs strong baseline

Its project value is not national novelty but explicit manufacturable geometry:
two copper-mesh layers, SWM branches, support columns, fill-ratio sweep and a sealed 0.39 mm device.

## Q3 — Falsifiable hypothesis

Composite SWM + mesh architectures can balance capillary force, permeability and structural support sufficiently to maintain useful heat transport at 0.39 mm total thickness.

## Q4 — Capability lineage / competing route

This paper belongs to a broad China UTVC engineering line with explicit wick, support, fill-ratio and sealing optimization.

Any Russian process requiring extra local feature height must be judged against this type of fully integrated baseline, not against open pool-boiling coupons.

## Q5 — Technical control variables

- 82 × 58 × 0.39 mm UTVC;
- two layers of copper mesh;
- 0–3 SWMs;
- support-column diameter;
- filling ratio;
- water-based sealed UTVC operation;
- ETC and ultimate heat-transfer power.

## Q6 — Experiment / method design

Multiple support-column diameters, filling ratios and SWM counts are experimentally compared in completed UTVC devices.

The 30% filling-ratio / 3-SWM configuration is the best reported ETC case.

## Q7 — Quantitative evidence / reproducibility

Reported:
- ETC 3473 W/(m K) for the 0.5 mm support-column case;
- ETC 3837 W/(m K) for 30% fill ratio with 3 SWMs;
- ultimate heat-transfer power 26 W for 3 SWMs.

The device dimensions and test matrix are unusually explicit for a phone-relevant comparator.

## Q8 — What it proves / does not prove

It proves:
- sub-0.4 mm sealed UTVC integration is a real current baseline;
- internal wick / support / vapor-space budget is extremely constrained.

It does not prove:
- every Russian mechanism is non-transferable;
- the same architecture is optimal for all phone footprints or loads.

## Q9 — Decision contribution / control point

This paper closes a provenance gap in the project's repeated <=150–200 μm internal-feature gate.

It is a benchmark, not a collaboration target.

## Q10 — Next action / promotion or kill gate

Require any imported surface / wick feature to demonstrate either:
- replacement of an existing internal structure rather than additive height;
- or measurable system benefit within the same thickness / vapor-space budget.

If it needs geometry larger than the available internal budget, kill the transfer path.

## Evidence boundary

### Source facts
0.39 mm sealed UTVC; composite mesh/SWM wick; 30% fill-ratio optimum in the reported matrix; ETC and 26 W ultimate-power results.

### Analyst inference
This is an appropriate geometry / manufacturability contract for Russian transfer claims.

### Unknown / request
Exact internal vapor-space height by location; phone-specific mechanical drop/shock requirements; production yield.

## 10Q footer

Evidence maturity: SYSTEM_VALUE
Decision impact: RESTORE_GEOMETRY_BASELINE
Open questions: product yield; exact internal budget by design
Primary source: DOI:10.3390/mi15050627
