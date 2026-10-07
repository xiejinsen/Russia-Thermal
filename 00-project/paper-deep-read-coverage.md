# Paper Deep Read Coverage

record_state: CURRENT
authority: V2_1_RESEARCH_CONTROL
updated_at: 2026-10-07
canonical_paper_count: 45
completed_deep_reads: 19
campaign_state: ACTIVE

## Purpose

This file controls decision-oriented paper reading depth. It prevents the project from treating a small number of pilot 10Q cards as sufficient evidence for strategic conclusions.

Rules:

- TIER_A = decision-critical paper; full 10Q required.
- TIER_B = capability / lineage support; structured technical read required before it materially supports a strategic conclusion.
- REFERENCE_ONLY = background / context only unless later promoted.
- A Strategic Candidate or Stage-0 Challenger must not be treated as decision-grade until its Russian core evidence and strongest China / global comparator evidence have both received adequate deep reading.
- Reading depth is independent of institution prestige.
- Full-text unavailable means Unknown remains Unknown; do not upgrade review status from metadata / abstract alone.

## Completed Tier-A Deep Reads — 19 / 45

| Paper | Role in decision | Direction |
| --- | --- | --- |
| PAPER-RU-DRY-001 | Russia core mechanism evidence: reversible-to-irreversible dry-spot / crisis diagnostics | DIR-FAILURE-AWARE-UTVC |
| PAPER-RU-AGE-001 | Russia core long-duration capillary / surface aging evidence | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-AGE-001 | China product-path copper-water reliability comparator | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-AGE-002 | China oxygen-footprint rapid service-life prediction baseline | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-AGE-003 | China production wick-oxidation grading baseline | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-AGE-004 | China 0.7 mm mobile two-phase accelerated-aging baseline | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-DRY-001 | China capillary-fed dryout / rewetting + history-dependent wettability comparator | DIR-FAILURE-AWARE-UTVC |
| PAPER-GLOBAL-DRY-RECOVERY-001 | Global transient dryout / throttling / time-to-rewet baseline | DIR-FAILURE-AWARE-UTVC |
| PAPER-RU-TPU-001 | TPU core biphilic / spatial-wettability process evidence | DIR-SURFACE-PROCESS-CHALLENGER |
| PAPER-CN-TPU-001 | China target-system UTVC laser-wick comparator | DIR-SURFACE-PROCESS-CHALLENGER |
| PAPER-CN-TPU-002 | China direct oxidation / corrosion / laser UTVC process comparator | DIR-SURFACE-PROCESS-CHALLENGER |
| PAPER-RU-DRY-002 | Russia confinement-dependent hydrodynamic vs surface-drying crisis taxonomy | DIR-FAILURE-AWARE-UTVC |
| PAPER-RU-DRY-003 | Russia topology-linked directional drying-front mechanism | DIR-FAILURE-AWARE-UTVC |
| PAPER-CN-DRY-002 | China superhydrophilic copper-mesh capillary / CHF / HTC engineering comparator | DIR-FAILURE-AWARE-UTVC |
| PAPER-RU-MESH-001 | Russia electrochemically modified steel-mesh process bridge | DIR-FAILURE-AWARE-UTVC |
| PAPER-CN-SJTU-DRY-001 | SJTU architecture-level premature-dryout mitigation baseline | DIR-FAILURE-AWARE-UTVC |
| PAPER-GLOBAL-DRY-TRANSIENT-001 | Global spatiotemporal wick-saturation dryout / recovery model baseline | DIR-FAILURE-AWARE-UTVC |
| PAPER-GLOBAL-INTERNAL-DRYOUT-001 | Global internal vapor-temperature / pressure ground-truth baseline | DIR-FAILURE-AWARE-UTVC |
| PAPER-GLOBAL-VC-DRYOUT-MODEL-001 | Global boiling-aware two-phase vapor-chamber dryout model baseline | DIR-FAILURE-AWARE-UTVC |

## Decision-sensitive reading queue

### Batch A — Failure-aware UTVC completion

Status: COMPLETED 2026-10-07

Decision:
- DEC-20261007-02
- DIR-FAILURE-AWARE-UTVC remains STRATEGIC_CANDIDATE / PRIMARY_COLLABORATION_DIRECTION, but is narrowed to mechanism-resolved laboratory ground truth / crisis taxonomy only.

Conclusion:
Kutateladze / Pavlenko retains a specific mechanism-labeling residual after comparison with China treated-wick and architecture-level dryout mitigation plus strong global transient, internal-sensing and boiling-aware model baselines. Generic surface treatment, dryout hardware and imported observer/model routes are excluded from the strategic differentiation thesis.

### Batch B — Health-aware UTVC completion

Status: COMPLETED 2026-10-07

Deep-read:
- PAPER-RU-AGE-001
- PAPER-CN-AGE-001
- PAPER-CN-AGE-002
- PAPER-CN-AGE-003
- PAPER-CN-AGE-004

Decision:
- DEC-20261007-01
- DIR-HEALTH-AWARE-UTVC downgraded from STRATEGIC_CANDIDATE to RESERVE / RELIABILITY_KNOWLEDGE_RESERVE.

Conclusion:
MPEI retains rare 42-month actual-operation capillary-state evidence, but China now has a stronger product-path chain across oxidation mechanism, service-life prediction, production QA and mobile-scale accelerated aging. Evidence rarity alone is insufficient for primary strategic status.

### Batch C — TPU Surface Process Challenger completion

Priority: HIGH

Read next:
- PAPER-RU-TPU-002
- PAPER-RU-TPU-003
- PAPER-RU-TPU-004

Comparator status:
- PAPER-CN-TPU-002 has now been canonicalized and deep-read as the multi-process target-system comparator.

Decision question:
Does TPU retain any spatial-routing / rewetting function that survives comparison against optimized generic laser, oxidation and chemical surface treatments?

### Batch D — Foundational Modeling Enabler

Priority: HIGH

Read next:
- PAPER-RU-MODEL-001
- PAPER-RU-MODEL-002
- PAPER-CN-MODEL-001
- PAPER-GLOBAL-UTVC-MODEL-001
- PAPER-RU-NET-001
- PAPER-RU-NET-002

Decision question:
Does the Russian exact / group-invariant modeling lineage add actionable prediction or experiment-design value beyond current China/global interfacial-stability and product-relevant UTVC modeling?

### Batch E — Extreme Film Reserve

Priority: HIGH

Read next:
- PAPER-RU-FILM-001
- PAPER-RU-FILM-002
- PAPER-CN-FILM-001
- PAPER-CN-FILM-002
- PAPER-RU-FRUMKIN-BIPHILIC-001

Decision question:
Is there a phone-relevant residual in extreme confinement / shear-driven thin-film instability, or does strong China/global capillary thin-film work plus system parasitics keep this as a reserve only?

### Batch F — LHP / active-capillary reserve

Priority: MEDIUM

Read next:
- PAPER-RU-LHP-001
- PAPER-RU-URFU-LHP-001
- PAPER-CN-LHP-001
- PAPER-GLOBAL-EO-COOLING-001
- PAPER-GLOBAL-EO-MICROHEATPIPE-001

Likely depth:
TIER_B unless a source materially changes DIR-LHP-KNOWLEDGE-RESERVE.

### Batch G — Other background / method papers

Priority: LOWER unless promoted by a Direction or contradiction

Includes:
- PAPER-RU-ACOU-001
- PAPER-CN-ACOU-001
- PAPER-RU-DVFS-001
- PAPER-RU-MAT-001
- PAPER-RU-JIHT-001
- PAPER-RU-MPEI-SKOL-AM-001
- PAPER-RU-ORDERED-WICK-001
- PAPER-CN-FILM-002 if not already handled above
- remaining reference-only papers not promoted by the preceding batches

## First-round conclusion delta

The first expanded Deep Read pass already changes the reasoning structure:

1. Dryout / recovery is history-dependent; it should not be modeled only as an instantaneous threshold event.
2. Repeated dryout can alter subsequent wetting / capillary state in at least one strong China comparator, creating a bridge between failure-state and health-state reasoning.
3. The mandatory baseline for DIR-FAILURE-AWARE-UTVC must include physics-informed transient dryout / rewet history, internal temperature/pressure ground truth and boiling-aware two-phase vapor-chamber hydrodynamics, not only a generic anomaly / RC baseline.
4. TPU's generic laser-surface proposition is more crowded than a superficial reading suggests; a direct China UTVC comparison shows oxidation, corrosion and laser all improve the wick, with thermal oxidation matching laser maximum power and judged best overall. The only retained strategic TPU hypothesis is a specific spatial function under confinement / sealed-process constraints.
5. The retained Kutateladze residual is now more precisely framed as mechanism-resolved laboratory ground truth / crisis taxonomy that can falsify or extend an internally owned phone-UTVC state model.
6. Health-aware deep reading changes the portfolio: MPEI's 42-month evidence remains a rare long-calendar ground-truth asset, but China now has a coherent mechanism -> service-life -> production-QA -> mobile-aging chain. DIR-HEALTH-AWARE-UTVC is therefore downgraded to RESERVE.
7. Failure-aware completion confirms one surviving Primary collaboration thesis, but only in mechanism-resolved crisis taxonomy / lab ground truth; SJTU architecture-level dryout mitigation and the Russian mesh process paper further eliminate generic hardware/surface engineering as differentiation.
8. Broad Russia superiority theses remain killed.

## Stop condition for this campaign

Resume detail-page design-system consolidation only after:
- the HIGHEST-priority Failure-aware and Health-aware batches have been deep-read sufficiently to pressure-test both Strategic Candidates;
- the TPU challenger has a fair target-system comparator set;
- any resulting Claim / Direction changes are landed in canonical state;
- remaining papers have explicit TIER_A / TIER_B / REFERENCE_ONLY disposition rather than accidental omission.
