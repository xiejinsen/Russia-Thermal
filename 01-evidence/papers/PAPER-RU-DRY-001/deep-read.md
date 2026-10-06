# PAPER-RU-DRY-001 — Deep Read

paper_id: PAPER-RU-DRY-001
deep_read_level: TIER_A
review_status: MIGRATED_10Q_PLUS_CURRENT_CANONICAL_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper is the core current mechanism evidence behind the narrow Pavlenko residual: high-resolution dielectric-fluid dry-spot diagnostics can distinguish pre-crisis evolution from irreversible dryout, while direct phone-scale sealed-VC transfer remains unproven.
decision_use: P1_FAILURE_AWARE_MECHANISM_EVIDENCE
legacy_origin: evidence/10q/papers/i1_russia_dielectric_fluid_reversibleirreversible_dry_spot_dynamics.md
related_claims: CLM-PAV-001; CLM-PAV-002; CLM-PAV-008
related_capabilities: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
related_directions: DIR-FAILURE-AWARE-UTVC
related_priorities: PRI-01-KUT-LAB13

## Q1 — Problem and target mapping

The paper asks what changes locally as dielectric-fluid boiling approaches critical heat flux and how reversible dry spots evolve into a persistent irreversible crisis region.

For smartphone thermal management, the relevance is mechanism-level rather than device-level: the reported experiment is not a sealed sub-millimeter copper-water vapor chamber.

## Q2 — Novelty vs strong baseline

The decision-relevant novelty is not generic dryout detection. It is current quantitative observation of dry-spot statistics and irreversible-region growth in electronics-relevant dielectric fluids using combined optical / infrared diagnostics.

Strong China/global comparators already cover capillary-fed dryout and rewetting, transient dryout signatures, wick-saturation recovery models and product-relevant ultra-thin two-phase structures. Therefore the retained novelty is the mechanism-specific diagnostic interpretation, not broad dryout superiority.

## Q3 — Falsifiable hypothesis

A measurable transition in dry-spot population, persistence and thermal behavior precedes irreversible boiling crisis, so local failure-state statistics can carry information beyond an integral temperature or CHF number alone.

## Q4 — Capability lineage / competing route

The paper sits in the Kutateladze / Pavlenko boiling-crisis and thin-layer diagnostic lineage.

Competing routes include Chinese capillary-fed dryout / rewetting studies, modified-mesh capillary boiling, SJTU microchannel dryout mitigation, and global transient dryout / recovery modeling.

The current project therefore treats Pavlenko as a mechanism/diagnostics complement rather than an exclusive dryout route.

## Q5 — Technical control variables

Relevant variables include:

- working fluid: HFE-7100 and Novec 649;
- heater / surface state;
- heat flux;
- dry-spot population, size and persistence;
- contact-line and void behavior;
- dry-region propagation rate;
- local heater thermal response.

## Q6 — Experiment / method design

Canonical source facts report:

- HFE-7100 and Novec 649;
- high-speed infrared thermography;
- reflected-light / optical visualization;
- ML-assisted dry-spot segmentation;
- tracking of dry-spot evolution toward CHF.

The current canonical record does not establish a sealed phone-VC geometry.

## Q7 — Quantitative evidence / reproducibility

The migrated 10Q card records that, in the tested system, HFE-7100 maximum heat-transfer coefficient and CHF exceed Novec 649 by roughly 1.47x and 1.56x, respectively; a bimodal dry-spot-area distribution appears near CHF; irreversible dry-region growth was measured against thermal-wave interpretation.

Those quantitative details are inherited from the historical decision card and should not be treated as phone-transfer numbers.

Diagnostic reproducibility is assessed as materially stronger than product-transfer reproducibility.

## Q8 — What it proves / does not prove

It supports:

- current high-resolution two-phase failure diagnostics;
- use of dry-spot statistics before irreversible crisis;
- fluid-specific failure behavior.

It does not prove:

- phone-scale sealed-device advantage;
- superiority over Chinese ultra-thin wick / VC hardware;
- suitability of HFE-7100 or Novec 649 as a future phone product fluid;
- direct transfer to sub-0.5 mm copper-water VC construction.

## Q9 — Decision contribution / control point

The paper preserves a narrow Russia-specific residual around mechanism-level boiling-crisis diagnostics and reversible-to-irreversible dryout interpretation.

It supports `CAP-KUT-L13-DRYOUT-DIAGNOSTICS` and `DIR-FAILURE-AWARE-UTVC`, but does not reopen any killed broad Russia dryout-superiority thesis.

## Q10 — Next action / promotion or kill gate

When physical validation becomes possible, use the diagnostic philosophy to define a bounded phone-relevant excitation / recovery protocol rather than copying the original rig.

Promotion requires evidence that mechanism-informed observables separate reversible two-phase crisis from generic package / interface drift using product-accessible signals.

Failure to add discriminating information beyond strong domestic/global baselines should narrow or kill the Direction.

## Evidence boundary

### Source facts

- dielectric fluids HFE-7100 and Novec 649 were tested;
- high-speed IR and optical diagnostics were used;
- ML-assisted dry-spot segmentation was reported;
- dry-spot statistics were tracked toward CHF;
- large persistent dry regions preceded irreversible crisis in the reported setup.

### Analyst inference

- the strongest retained value is mechanism-specific diagnostics rather than unique dryout control;
- the work is potentially useful as a label / interpretation source for a future failure-aware UTVC protocol;
- this is complementary to, not superior to, strong China/global ultra-thin two-phase engineering.

### Unknown / request

- sealed sub-mm geometry transfer;
- copper-water transfer;
- product-accessible observables that retain the same failure-state information;
- process / surface details required for reproducible phone-relevant transfer.
