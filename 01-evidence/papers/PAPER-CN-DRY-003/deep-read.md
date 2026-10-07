# PAPER-CN-DRY-003 — Deep Read

paper_id: PAPER-CN-DRY-003
deep_read_level: TIER_A
review_status: MIGRATED_10Q_PLUS_CURRENT_CANONICAL_REVIEW
reviewed_at: 2026-10-07
legacy_origin: evidence/10q/papers/i4_china_pore_scale_capillary_dryout_boundary.md
why_it_matters: This source demonstrates an independent China mechanism-level dryout modeling capability at the wick pore scale and therefore removes generic dryout-boundary modeling from the Russian differentiation thesis.
decision_use: CHINA_PORE_SCALE_DRYOUT_MODEL_BASELINE
related_claims: CLM-PAV-003; CLM-PAV-004; CLM-PAV-009
related_capabilities: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
related_directions: DIR-FAILURE-AWARE-UTVC
related_priorities: PRI-01-KUT-LAB13

## Q1 — Problem and target mapping

The paper models thin-film evaporation and dryout on micro-pillar wicks at 3D pore scale.

That is directly relevant to wick-fed vapor chambers and the physical boundary between sustained capillary supply and dryout.

## Q2 — Novelty vs strong baseline

Its value is mechanistic resolution of meniscus recession and geometry/wettability effects, not a device-level temperature threshold.

## Q3 — Falsifiable hypothesis

Wick geometry and wettability control dryout primarily through their effect on capillary liquid supply and meniscus evolution.

## Q4 — Capability lineage / competing route

This establishes a current independent China route for mechanism-level capillary dryout modeling.

It does not reproduce Kutateladze's reversible/irreversible crisis taxonomy.

## Q5 — Technical control variables

- pillar pitch;
- pillar height;
- wettability;
- liquid-front velocity;
- volumetric wicking rate;
- meniscus recession;
- applied heat flux.

## Q6 — Experiment / method design

3D multiphase pore-scale simulations are combined with analytical dryout treatment.

The legacy review records agreement between analytical and numerical dryout predictions.

## Q7 — Quantitative evidence / reproducibility

The decision-relevant result is structural: once capillary dryout flux is exceeded, continuous meniscus recession is resolved and linked to wickability / geometry.

No additional numerical values are invented here beyond the legacy reviewed evidence.

## Q8 — What it proves / does not prove

It proves:
- China can model capillary dryout mechanistically at wick scale.

It does not prove:
- experimental reversible/irreversible dry-spot classification;
- equivalence to dielectric-fluid crisis experiments;
- phone-device validation by itself.

## Q9 — Decision contribution / control point

Russia's residual remains experimental crisis labeling / ground truth, not generic dryout-boundary modeling.

## Q10 — Next action / promotion or kill gate

Use this type of domestic mechanism model as part of the mandatory baseline for any Kutateladze Stage-0 comparison.

If Russian labels do not add state information beyond such models plus internal sensing, downgrade the collaboration thesis.

## Evidence boundary

### Source facts
3D pore-scale thin-film evaporation / wick modeling; geometry/wettability control; capillary dryout treatment.

### Analyst inference
Generic dryout-boundary modeling is not a Russia-specific capability.

### Unknown / request
Matched phone-UTVC experimental validation; exact prediction error in target geometry.

## 10Q footer

Evidence maturity: STRUCTURAL_SIGNAL
Decision impact: RESTORE_DRYOUT_MODEL_COMPARATOR
Open questions: target-system validation
Primary source: DOI:10.1063/5.0271431
