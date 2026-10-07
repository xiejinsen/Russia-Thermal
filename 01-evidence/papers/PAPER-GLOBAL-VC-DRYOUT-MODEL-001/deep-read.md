# PAPER-GLOBAL-VC-DRYOUT-MODEL-001 — Deep Read

paper_id: PAPER-GLOBAL-VC-DRYOUT-MODEL-001
deep_read_level: TIER_A
review_status: PUBLISHER_PRIMARY_TEXT_EXCERPTS_PLUS_DECISION_REVIEW
reviewed_at: 2026-10-07
why_it_matters: This paper demonstrates on an actual vapor-chamber model that ignoring boiling-induced two-phase wick hydrodynamics can grossly overpredict dryout capacity. It is therefore a critical comparator for any simplified phone-UTVC failure model.
decision_use: GLOBAL_VC_TWOPHASE_DRYOUT_MODEL_BASELINE
related_claims: CLM-OBS-001; CLM-PRESSURE-004
related_capabilities: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
related_directions: DIR-FAILURE-AWARE-UTVC
related_priorities: PRI-01-KUT-LAB13

## Q1 — Problem and target mapping

The paper asks how to predict thermal resistance and dryout limit in high-heat-flux vapor chambers when nucleate boiling occurs inside the evaporator wick.

This is more structurally relevant to a UTVC than a conventional axial heat-pipe model because it explicitly treats vapor-chamber spreading and wick boiling, although its example device is still much larger and thicker than a smartphone VC.

## Q2 — Novelty vs strong baseline

Conventional vapor-chamber models often assume single-phase liquid return through a fully saturated wick.

This paper adds a boiling region identified from wall superheat, then models simultaneous liquid-vapor flow in that porous region using relative permeability corrections to Darcy-Ergun hydrodynamics.

The decision-relevant result is that neglecting this two-phase pressure-drop penalty can massively overpredict the dryout limit.

## Q3 — Falsifiable hypothesis

Once nucleate boiling occupies part of a capillary-fed evaporator wick, two-phase hydrodynamic resistance becomes large enough that single-phase evaporation-only models cease to predict dryout capacity reliably.

The model predicts dryout when local liquid saturation collapses to zero at the center of the heat input.

## Q4 — Capability lineage / competing route

The paper extends the Purdue / Weibel / Garimella mechanistic modeling line from capillary-fed porous evaporators to a complete vapor-chamber model.

The underlying relative-permeability formulation had previously been calibrated against multiple porous-wick types and reported to predict dryout / thermal-resistance trends across literature data within about ±25%.

This creates a very strong global mechanistic baseline. Russian value must therefore be tested as richer failure taxonomy / ground truth that can identify regimes where this model class is incomplete.

## Q5 — Technical control variables

Key model variables include:

- vapor-chamber wall temperature field;
- vapor-core transport;
- evaporator mass flux;
- wall superheat / boiling-incidence threshold;
- local liquid saturation;
- liquid and vapor relative permeability;
- Darcy-Ergun pressure drop;
- capillary pressure;
- wick geometry;
- dryout heat flux / total power.

The example case uses a 50 mm × 50 mm × 5 mm vapor chamber with a sintered copper wick.

## Q6 — Experiment / method design

The framework combines:

- 3D wall-conduction modeling;
- analytical vapor-chamber core transport;
- a wall-superheat criterion to determine boiling area;
- wick pressure-field calculation using evaporator mass flux from the thermal model;
- two-phase porous-flow treatment in the boiling region through liquid / vapor relative permeabilities.

The hydrodynamic calculation is decoupled from the heat-transfer solution in the current formulation.

The example is a model case rather than a direct phone experiment; validation support comes partly from the authors' prior calibrated capillary-fed boiling framework and prior vapor-chamber experiments.

## Q7 — Quantitative evidence / reproducibility

For the surfaced example case:

- vapor chamber dimensions: 50 mm × 50 mm × 5 mm;
- combined boiling / two-phase model dryout power: approximately 330 W;
- evaporation-only single-phase model dryout power: approximately 1300 W;
- at 330 W, evaporation-only thermal resistance is reported around 0.45 K/W with an unrealistically high approximately 150 K superheat;
- the boiling-aware model predicts approximately 0.29 K/W, closer to prior experimental observations.

The paper also notes experimentally observed comparable-geometry performance limits generally in the few-hundred-watt range, reinforcing that the 1300 W evaporation-only result is not physically credible.

## Q8 — What it proves / does not prove

It supports:

- boiling-region hydrodynamics as essential to dryout-limit prediction in high-flux vapor chambers;
- local saturation and two-phase permeability as meaningful hidden-state variables;
- large modeling error if near-dryout wick boiling is reduced to single-phase liquid return.

It does not prove:

- direct accuracy in a sub-mm phone UTVC;
- that the same relative-permeability closure remains valid at phone geometry / manufacturing scale;
- online observability of local liquid saturation;
- that Russian crisis morphology adds no incremental information.

## Q9 — Decision contribution / control point

This paper further shifts DIR-FAILURE-AWARE-UTVC away from “Russia provides the model.”

The global baseline already contains sophisticated vapor-chamber boiling / dryout modeling. A plausible Russian contribution is instead to supply mechanism-resolved experiments that challenge, calibrate or extend the model around crisis transitions — especially where different crisis modes produce similar external temperature trajectories.

The collaboration thesis becomes: *ground truth and falsification of internal-state models*, not generic dryout modeling.

## Q10 — Next action / promotion or kill gate

A phone-scale program should compare:

1. single-phase / RC baseline;
2. saturation-based transient heat-pipe model;
3. boiling-aware two-phase vapor-chamber model;
4. Russia-informed crisis taxonomy / spatial failure labels.

The Russia layer is valuable only if it explains repeatable residual error, exposes a missed failure class, or materially changes phone design / validation decisions beyond model layers 1–3.

## Evidence boundary

### Source facts

- model identifies boiling area using wall superheat;
- boiling-region hydrodynamics use Darcy-Ergun corrected by liquid / vapor relative permeabilities;
- example vapor chamber is 50 × 50 × 5 mm with sintered copper wick;
- example dryout prediction is about 330 W with two-phase boiling versus about 1300 W for evaporation-only single-phase treatment;
- at 330 W, reported thermal resistance is about 0.29 K/W with boiling model versus about 0.45 K/W with evaporation-only treatment.

### Analyst inference

- global mechanistic modeling is already too strong for generic Russian dryout-model differentiation;
- Russia-specific value is more plausibly model falsification / mechanism labeling;
- phone-scale transfer requires a new geometry-specific calibration rather than direct parameter reuse.

### Unknown / request

- validity of the relative-permeability closure in ultra-thin phone wicks;
- exact phone-scale boiling-incidence criterion;
- coupling error introduced by the decoupled thermal / hydrodynamic formulation;
- incremental predictive value of Russia-informed crisis classes.
