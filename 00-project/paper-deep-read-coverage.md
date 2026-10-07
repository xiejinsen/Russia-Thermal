# Paper Deep Read Coverage

record_state: CURRENT
authority: V2_1_RESEARCH_CONTROL
updated_at: 2026-10-07
canonical_paper_count: 44
completed_deep_reads: 7
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

## Completed Tier-A Deep Reads — 7 / 44

| Paper | Role in decision | Direction |
| --- | --- | --- |
| PAPER-RU-DRY-001 | Russia core mechanism evidence: reversible-to-irreversible dry-spot / crisis diagnostics | DIR-FAILURE-AWARE-UTVC |
| PAPER-RU-AGE-001 | Russia core long-duration capillary / surface aging evidence | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-AGE-001 | China product-path copper-water reliability comparator | DIR-HEALTH-AWARE-UTVC |
| PAPER-CN-DRY-001 | China capillary-fed dryout / rewetting + history-dependent wettability comparator | DIR-FAILURE-AWARE-UTVC |
| PAPER-GLOBAL-DRY-RECOVERY-001 | Global transient dryout / throttling / time-to-rewet baseline | DIR-FAILURE-AWARE-UTVC |
| PAPER-RU-TPU-001 | TPU core biphilic / spatial-wettability process evidence | DIR-SURFACE-PROCESS-CHALLENGER |
| PAPER-CN-TPU-001 | China target-system UTVC laser-wick comparator | DIR-SURFACE-PROCESS-CHALLENGER |

## Decision-sensitive reading queue

### Batch A — Failure-aware UTVC completion

Priority: HIGHEST

Read next:
- PAPER-RU-DRY-002
- PAPER-RU-DRY-003
- PAPER-RU-MESH-001
- PAPER-CN-DRY-002
- PAPER-CN-SJTU-DRY-001
- PAPER-GLOBAL-DRY-TRANSIENT-001
- PAPER-GLOBAL-INTERNAL-DRYOUT-001
- PAPER-GLOBAL-VC-DRYOUT-MODEL-001

Decision question:
Does Kutateladze / Pavlenko retain mechanism-specific information value after comparison with state-history, transient recovery, internal-state and China capillary baselines?

### Batch B — Health-aware UTVC completion

Priority: HIGHEST

Read next:
- PAPER-CN-AGE-002
- PAPER-CN-AGE-003
- PAPER-CN-AGE-004

Also re-evaluate:
- PAPER-RU-AGE-001
- PAPER-CN-AGE-001

Decision question:
Is MPEI's 42-month capillary-state observation a genuinely useful degradation-state prior after current China oxidation, accelerated-life, process-QA and thin-device evidence are understood in detail?

### Batch C — TPU Surface Process Challenger completion

Priority: HIGH

Read next:
- PAPER-RU-TPU-002
- PAPER-RU-TPU-003
- PAPER-RU-TPU-004

Comparator action:
- canonicalize and deep-read the newly identified China multi-process UTVC surface-modification comparator before any TPU promotion.

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
3. The mandatory baseline for DIR-FAILURE-AWARE-UTVC must include physics-informed transient dryout / rewet history, not only a generic anomaly / RC baseline.
4. TPU's generic laser-surface proposition is more crowded than a superficial reading suggests; its only retained strategic hypothesis is a specific spatial function under confinement / sealed-process constraints.
5. No current lane is upgraded from this pass. Broad Russia superiority theses remain killed.

## Stop condition for this campaign

Resume detail-page design-system consolidation only after:
- the HIGHEST-priority Failure-aware and Health-aware batches have been deep-read sufficiently to pressure-test both Strategic Candidates;
- the TPU challenger has a fair target-system comparator set;
- any resulting Claim / Direction changes are landed in canonical state;
- remaining papers have explicit TIER_A / TIER_B / REFERENCE_ONLY disposition rather than accidental omission.
