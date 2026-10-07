# PAPER-RU-DRY-002 — Deep Read

paper_id: PAPER-RU-DRY-002
deep_read_level: TIER_A
review_status: FULL_TEXT_PRIMARY_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper strengthens the Kutateladze / Pavlenko mechanism taxonomy by experimentally separating surface-drying crisis from hydrodynamic boiling crisis as liquid-layer height changes, and by resolving the transition sequence at the critical height.
decision_use: RUSSIA_CRISIS_MECHANISM_TAXONOMY
related_claims: CLM-PAV-005; CLM-PAV-008
related_capabilities: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
related_directions: DIR-FAILURE-AWARE-UTVC
related_priorities: PRI-01-KUT-LAB13

## Q1 — Problem and target mapping

The paper asks how the mechanism of nucleate-boiling crisis in HFE-7100 changes with horizontal liquid-layer height, and what occurs at the critical height separating thin-layer surface drying from a hydrodynamic crisis.

For Russia-Thermal, its value is mechanism labeling: distinct internal crisis modes can exist before the same end result of large temperature rise. The geometry is nevertheless millimeter-scale open boiling, not a sealed phone UTVC.

## Q2 — Novelty vs strong baseline

The useful result is not just another CHF curve. The study identifies a critical layer height and resolves the crisis sequence around it.

Above the critical height the crisis is hydrodynamic; below it the limiting mode is surface drying. At the critical height a dry spot appears first, then transition boiling spreads while heater temperature remains nearly flat for a substantial interval before a sharp rise.

That staged internal morphology is exactly the kind of mechanism information that a generic external threshold does not encode.

## Q3 — Falsifiable hypothesis

The dominant boiling-crisis mechanism changes with confinement / liquid inventory. Near the transition between regimes, internal vapor-liquid morphology can change substantially before a final sharp surface-temperature excursion.

The phone-transfer hypothesis is that a sealed ultra-thin two-phase device may also contain separable pre-failure internal states whose boundaries depend on liquid inventory and geometry, although the critical dimensions and mechanisms cannot be transferred directly.

## Q4 — Capability lineage / competing route

This work is part of the Zhukov / Pavlenko Kutateladze line on dielectric-liquid boiling crisis and transition morphology.

Its strongest competing baseline is no longer simply generic dryout detection. China-side capillary-fed work resolves dryout, rewetting and surface-state degradation, while global transient heat-pipe work resolves dynamic dryout / recovery and hidden wick saturation.

The residual is therefore the experimental taxonomy of crisis morphology, not ownership of dryout physics in general.

## Q5 — Technical control variables

Primary variables and observables include:

- HFE-7100 at 100 kPa and saturation temperature about 61°C;
- horizontal smooth heater, 120 mm diameter;
- liquid-layer heights 1.5, 2.5, 6, 10, 16, 25 and 35 mm;
- heat flux and wall superheat;
- CHF;
- visual dry-spot / transition-boiling morphology;
- vapor-jet diameter and spacing;
- two-dimensional Taylor-instability geometry.

The experimentally identified critical height is 6 mm.

## Q6 — Experiment / method design

The primary full text describes a stainless-steel chamber with a 3 kW electrical heater and a 30 mm copper plate. Five thermocouples across the chamber bottom are used to infer the heat flux from the temperature gradient. HFE-7100 is tested at 100 kPa.

Visual observations are recorded at 30 fps. The heater surface is 120 mm in diameter with roughness Rz = 3.2 μm. Heat-flux uncertainty falls from roughly 16% near 10^3 W/m² to roughly 4% near 10^5 W/m²; surface-temperature uncertainty is reported below about 0.6°C near 10^5 W/m².

At the 6 mm critical layer, the authors statistically process more than one hundred measurements each of vapor-bubble / jet diameter and spacing.

## Q7 — Quantitative evidence / reproducibility

At h = 6 mm and 100 kPa:

- CHF is reported as 96.9 kW/m²;
- wall superheat is 48.3 K;
- measured vapor-structure diameter is 6.0 ± 0.9 mm;
- measured spacing is 13.2 ± 2.6 mm;
- transition-boiling area reaches about 15% at roughly 55 s and about 50% at roughly 1 min 34 s;
- the sharp temperature increase begins only after transition boiling occupies roughly half the heating surface;
- the CHF calculation using measured geometric parameters differs from experiment by about 2.3%.

Surface-drying crisis is observed at 1.5 and 2.5 mm. Hydrodynamic crisis dominates at greater layer heights.

## Q8 — What it proves / does not prove

It supports:

- experimentally separable boiling-crisis mechanisms;
- a confinement / inventory-dependent transition between surface drying and hydrodynamic crisis;
- a nontrivial interval in which internal morphology evolves before the final rapid temperature rise;
- strong Kutateladze competence in mechanism-resolved boiling-crisis experiments.

It does not prove:

- the 6 mm transition has relevance as a phone-scale dimension;
- HFE-7100 open-layer behavior maps directly to sealed copper-water UTVCs;
- sparse external phone sensors can reconstruct the internal morphology;
- Russian superiority over China/global dryout knowledge.

## Q9 — Decision contribution / control point

This paper strengthens the *mechanism-taxonomy* part of DIR-FAILURE-AWARE-UTVC, but it simultaneously narrows the commercial transfer claim.

The most defensible collaboration asset is a laboratory ground-truth framework for distinguishing crisis classes and transition sequences. The product-side observer, geometry and control algorithm should remain internally owned and must be validated against stronger global state-history models.

## Q10 — Next action / promotion or kill gate

Translate the Russian mechanism taxonomy into falsifiable lab labels rather than directly transplanting the HFE-7100 geometry.

A Stage-0 dataset should deliberately vary liquid inventory, confinement, wick condition and transient excitation and ask whether Russia-informed labels improve discrimination of internal failure class beyond:

1. generic external thermal features;
2. physics-informed transient dryout / rewet history;
3. hidden-saturation model baselines.

Kill or downgrade the residual if its mechanism classes cannot be observed reproducibly under sealed phone-relevant conditions or do not change a design / validation decision.

## Evidence boundary

### Source facts

- HFE-7100 tested at 100 kPa across 1.5–35 mm layer heights;
- critical layer height reported at 6 mm;
- thinner layers show surface-drying crisis and thicker layers hydrodynamic crisis;
- at 6 mm a dry spot precedes transition-boiling spread and later sharp temperature rise;
- CHF at the critical-height case is 96.9 kW/m²;
- measured vapor-structure statistics and CHF calculation are reported in the full text.

### Analyst inference

- the strongest Russian residual is mechanism taxonomy / lab ground truth, not generic dryout sensing;
- internal-state evolution can precede obvious final thermal runaway;
- the crisis classes should be treated as labels to test in a phone-relevant platform, not as transferable dimensions.

### Unknown / request

- whether analogous separable states exist in sub-mm sealed copper-water UTVCs;
- mapping from Russian optical / thermographic labels to sparse product telemetry;
- incremental classification value after a hidden-saturation transient baseline;
- reproducibility under phone-relevant orientation, fill ratio and manufacturing variation.
