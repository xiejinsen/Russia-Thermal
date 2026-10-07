# PAPER-GLOBAL-INTERNAL-DRYOUT-001 — Deep Read

paper_id: PAPER-GLOBAL-INTERNAL-DRYOUT-001
deep_read_level: TIER_A
review_status: PUBLISHER_PRIMARY_TEXT_EXCERPTS_PLUS_DECISION_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper directly measures internal vapor temperature and pressure during transient dryout / rewetting, showing which internal states are hidden or delayed in wall-temperature-only observation. It is therefore a critical ground-truth comparator for the proposed Russian diagnostic role.
decision_use: GLOBAL_INTERNAL_STATE_GROUND_TRUTH_BASELINE
related_claims: CLM-OBS-001; CLM-OBS-003; CLM-PRESSURE-004
related_capabilities: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
related_directions: DIR-FAILURE-AWARE-UTVC
related_priorities: PRI-01-KUT-LAB13

## Q1 — Problem and target mapping

The paper asks how a screen-wick heat pipe internally responds to power pulses beyond its capillary limit and how dryout, vapor superheating and subsequent rewetting can be resolved with measurements inside the device.

For Russia-Thermal, it matters because it provides an independent non-Russian route to high-fidelity ground truth, rather than inferring all internal state from external wall temperature.

## Q2 — Novelty vs strong baseline

The differentiating method is simultaneous internal distributed vapor-temperature measurement and internal pressure measurement during transient dryout / rewetting.

This reveals vapor superheating, localized dryout and delayed thermal response that are not fully represented by external wall temperature alone.

That means “internal mechanism ground truth” is not uniquely Russian in principle. The Russian residual, if any, must be in the *specific crisis taxonomy / optical-thermographic mechanism labels*, not merely access to internal measurements.

## Q3 — Falsifiable hypothesis

During transient dryout, internal vapor and wick states can depart from equilibrium / saturation assumptions and change before or differently from external wall-temperature signals.

If so, internal pressure and distributed temperature should expose hidden state and explain otherwise ambiguous external hysteresis.

## Q4 — Capability lineage / competing route

The paper comes from a high-temperature heat-pipe / microreactor context rather than consumer electronics, but the measurement concept is a direct methodological comparator.

Against Kutateladze, it provides:

- internal vapor temperature;
- internal pressure / saturation condition;
- localized dryout inference;
- rewetting / hysteresis characterization.

Kutateladze retains a different strength in spatial boiling-crisis morphology, surface drying fronts and reversible / irreversible crisis regimes.

## Q5 — Technical control variables

Reported variables include:

- stainless-steel heat pipe;
- water working fluid;
- multilayer screen wick;
- internal distributed vapor temperature from optical-fiber sensing;
- internal pressure from a miniature transducer;
- wick-region temperature;
- pulse power and pulse duration;
- dryout / rewetting timing;
- thermal resistance;
- vapor superheat relative to pressure-derived saturation temperature;
- filling ratio and inactive-region design.

## Q6 — Experiment / method design

The study uses a water-filled stainless-steel screen-wick heat pipe with internal instrumentation.

A high-resolution optical fiber distributed temperature sensor measures vapor-core temperature distributions, while a miniature pressure transducer tracks internal pressure so saturation temperature and vapor superheat can be inferred.

A baseline heater power of 50 W is used. Pulsed inputs of 710 W, approximately 150% of the reported capillary limit, are applied for durations from 2 to 10 minutes to vary dryout severity and observe rewetting / hysteresis.

The authors note use of a uniform heat distributor, which delays dryout response relative to direct wall heating in earlier work.

## Q7 — Quantitative evidence / reproducibility

Accessible primary text excerpts report:

- baseline power: 50 W;
- pulse power: 710 W;
- pulse level: approximately 150% of the capillary limit;
- pulse durations: 2–10 minutes.

The study reports that temperature hysteresis correlates with pulse duration and that internal pressure / temperature measurements identify vapor superheating and localized dryout behavior.

The current deep-read record does not add unverified exact superheat magnitudes or rewetting times.

## Q8 — What it proves / does not prove

It supports:

- internal temperature / pressure sensing exposes dryout information beyond external wall temperature alone;
- vapor can be substantially superheated near / during off-design dryout, challenging simple saturated-vapor assumptions;
- transient dryout creates persistent thermal-resistance / temperature hysteresis;
- rewetting depends on design factors such as filling ratio and inactive regions.

It does not prove:

- that such internal sensors are viable in a smartphone;
- phone-scale water/copper UTVC transfer;
- unique identification of all internal mechanisms;
- that optical / thermographic Russian crisis labels are redundant.

## Q9 — Decision contribution / control point

This paper changes the collaboration framing.

Russia should not be valued simply because it can observe internal thermal states: global groups already demonstrate high-resolution internal instrumentation.

The more specific retained value is experimental *mechanism taxonomy*: defining crisis classes, spatial drying-front behavior and reversible / irreversible transitions that could be used as labels when building a phone-relevant ground-truth dataset.

This makes the proposed collaboration narrower but more technically testable.

## Q10 — Next action / promotion or kill gate

A future Stage-0 platform should include high-fidelity laboratory ground truth wherever feasible, even if production phones cannot.

The key comparison should be:

1. internal pressure / temperature ground truth;
2. global saturation-state model;
3. Russia-informed optical / thermographic mechanism labels;
4. sparse external product observables.

Promote Russian collaboration only if its mechanism taxonomy supplies information not already recoverable from items 1 and 2 and improves the mapping to item 4.

## Evidence boundary

### Source facts

- water-filled stainless-steel multilayer screen-wick heat pipe;
- internal distributed optical-fiber vapor-temperature sensing;
- miniature internal pressure sensing;
- baseline 50 W and 710 W pulses at roughly 150% of capillary limit;
- 2–10 min pulse-duration variation;
- observed dryout, vapor superheating, thermal-resistance increase and post-transient hysteresis;
- rewetting sensitivity to filling ratio and inactive regions is reported.

### Analyst inference

- internal-state measurement is not uniquely Russian;
- the Russian residual shifts toward crisis taxonomy / spatial mechanism labels;
- lab ground truth and production observability must remain separate layers in the project architecture.

### Unknown / request

- phone-scale feasibility of equivalent ground-truth instrumentation;
- exact quantitative superheat / rewet timing tables from the full paper;
- whether Russia-informed labels add information beyond pressure / temperature + saturation-state modeling;
- mapping of internal labels to sparse phone observables.
