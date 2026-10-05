# Round 9 — Dryout-Margin / Thermal-Health Observability Study v0.1

Last updated: 2026-10-05

Status: **CURRENT FOCUSED DESK-RESEARCH SYNTHESIS — NO OUTREACH / NO EXPERIMENT**

Constraint authority:
[Current Execution Constraints](../00_scope/current_execution_constraints_2026_10_05.md)

Architecture input:
[Round 8 Internal Phone Thermal Architecture](internal_phone_thermal_architecture_round8_v01.md)

## 1. Goal lock

Decision question:

> Can a phone-relevant two-phase thermal system infer approach to irreversible dryout or surface-health degradation from practical observables strongly enough to make "remaining thermal margin" a useful architecture/control variable?

This round does **not** ask whether dryout can be seen with laboratory IR/high-speed imaging.
It asks whether a reduced observable set can survive transfer into a phone.

## 2. Evidence that changes the decision

### 2.1 Transient dryout leaves measurable temperature signatures

**[FACT]** Baraya, Weibel and Garimella experimentally showed that transient heat-pipe dryout under pulse loads produces identifiable temperature signatures, a characteristic time-to-dryout, and post-dryout thermal hysteresis.

Primary source:
https://doi.org/10.1016/j.ijheatmasstransfer.2019.119135

**[FACT]** Their later transient model explicitly represents spatiotemporal wick liquid saturation and predicts time-to-dryout, thermal hysteresis and time-to-rewet across multiple heat-pipe samples.

Primary source:
https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837

**[OBSERVATION]**
Dryout is therefore not only a steady-state temperature-threshold problem.
It has a dynamic signature tied to workload amplitude, duration, recovery and history.

### 2.2 Degradation can be observed before gross steady-state Rth failure

**[FACT]** MPEI's 42-month engineered-surface record shows capillary/surface-state degradation can coexist with comparatively stable integral thermal performance.

Existing decision card:
../evidence/10q/papers/j1_mpei_42_month_hierarchical_surface_operation.md

**[FACT]** Martin et al. use a controlled transient heat pulse and temperature-dependent transient thermal impedance, Zth(t,Tamb), to detect package thermal degradation online and distinguish multiple failure mechanisms.

Primary source:
https://doi.org/10.1109/TPEL.2024.3352747

**[FACT]** van der Broeck et al. combine temperature measurements, electrothermal models, adaptive observers and small-signal excitation to identify lifetime-varying thermal parameters during operation.

Primary source:
https://doi.org/10.1109/TIA.2020.3001524

**[INFERENCE]**
The strongest transferable idea is not "measure contact angle inside the VC".
It is:
> infer a changing hidden thermal state from a calibrated power→temperature dynamic response.

### 2.3 Existing phone thermal headroom is useful context, but not a VC-health sensor

**[FACT]** Android exposes current/forecast thermal headroom before severe throttling.

Official source:
https://developer.android.com/ndk/reference/group/thermal

**[FACT]** Android states that this headroom is based on slow-moving sensors such as skin temperature and is a device-level throttling envelope.

**[INFERENCE]**
This proves the product value of a normalized "headroom" abstraction, but not observability of wick saturation or irreversible dryout margin.

Therefore:
**Android thermal headroom is a software/control precedent, not evidence that the two-phase internal state is already observable.**

## 3. Observability ladder

| Level | Observable | Product feasibility | What it can tell us | Current decision |
|---|---|---:|---|---|
| O0 | absolute junction / skin temperature | HIGH | thermal limit proximity | baseline only |
| O1 | power→temperature residual / RC parameter shift | HIGH-MEDIUM | aggregate thermal-path health | **KEEP** |
| O2 | transient Zth / pulse-response fingerprint | MEDIUM | degradation + path change | **KEEP / PROMOTE FOR TEST** |
| O3 | hysteresis / recovery-time signature after aggressive pulse | MEDIUM-LOW | dryout occurrence / rewetting dynamics | **KEEP, risky in product use** |
| O4 | model-estimated time-to-dryout / dryout-risk state | MEDIUM-LOW | prospective margin if calibrated | **HYPOTHESIS** |
| O5 | direct liquid saturation / dry-spot field | LOW in phone | mechanism truth | lab-only reference |

## 4. What can realistically be sensed in a phone

### Existing / near-zero-cost inputs

- SoC / package temperature sensors;
- skin / enclosure temperature sensing;
- workload / DVFS / frequency state;
- internal power estimates or calibrated power proxy;
- elapsed time and recovery history;
- ambient / charging state where available.

### Optional OEM-only additions

- one strategically placed board / VC-contact thermistor near the evaporator or condenser;
- higher-rate internal telemetry inaccessible to ordinary applications.

### Lab-only truth signals

- IR thermography;
- high-speed visible imaging;
- internal pressure;
- direct wick saturation / liquid distribution;
- post-mortem surface chemistry / microscopy.

**Decision rule:**
the architecture must create value at O1–O4.
If it requires O5 in the product, it is not a viable phone control architecture.

## 5. Russian diagnostic depth — what transfers and what does not

### Pavlenko / Kutateladze

Existing direct card:
../evidence/10q/papers/i1_russia_dielectric_fluid_reversibleirreversible_dry_spot_dynamics.md

**[FACT]**
The Russian work provides rich IR / high-speed / ML dry-spot diagnostics and shows dry-spot statistics changing near irreversible crisis.

**[INFERENCE]**
The transferable asset is therefore:
- feature discovery;
- failure-boundary labeling;
- ground-truth generation;
- mechanism interpretation.

It is **not**:
- the expectation that IR imaging will exist inside the phone.

### MPEI

**[FACT]**
MPEI provides an unusual long-duration relation between surface/capillary state and integral thermal behavior.

**[INFERENCE]**
The transferable asset is:
- identifying which hidden degradation state should be estimated;
- building life-cycle labels and priors.

It is **not**:
- a directly measurable in-product capillary sensor.

## 6. Strongest architecture after Round 9

Round 8 wording:
> remaining thermal margin = function(geometry, surface state, fluid/process state, aging state, workload)

Round 9 narrows the implementable control variable to:

> **Estimated Thermal Risk / Health State = observer(power history, temperature history, operating context, calibrated device model)**

Possible outputs:
1. **transient thermal-path health index**;
2. **dryout-risk score** under the current/predicted workload;
3. **recovery confidence / rewetting state** after a high-load event;
4. **model confidence**, so the controller can fall back to conventional temperature limits when estimation is uncertain.

Do **not** claim an absolute physical "distance to dryout" until phone-scale calibration proves identifiability.

## 7. New product hypothesis

### H9-1 — Opportunistic thermal system identification

**[HYPOTHESIS]**
A phone can use naturally occurring workload transitions, or bounded low-impact calibration pulses during suitable states, to identify changes in its thermal transfer function over life without dedicated internal two-phase sensors.

Candidate features:
- initial dT/dt after a known power step;
- multi-timescale Zth-like response;
- cooling / recovery time constants;
- temperature residual vs calibrated baseline;
- hysteresis after repeated matched pulses;
- orientation / ambient-conditioned residuals.

### Why this is interesting

It bridges:
- Pavlenko failure-physics labels;
- MPEI aging-state labels;
- conventional phone power/temperature telemetry;
- OEM controller authority.

It also avoids making the external partner the owner of the product control loop.

## 8. Falsification gates

### KEEP if

A future phone-scale coupon/device study shows that one or more O1–O4 features:
- changes **before** conventional gross Rth/temperature failure;
- correlates repeatably with wick saturation, dryout onset or known aging state;
- transfers across representative devices after practical calibration;
- adds predictive value beyond temperature + workload history alone.

### NARROW if

The features detect only:
- generic package/interface degradation;
- post-dryout hysteresis after failure already occurred;
- device-specific behavior requiring per-unit lab calibration.

Then retain a **thermal-health monitor**, but drop the stronger dryout-margin claim.

### KILL the central observability thesis if

- no practical power/temperature feature predicts two-phase state better than a strong generic thermal RC baseline;
- prediction requires direct optical/pressure sensing;
- model uncertainty under ambient/orientation/device variation overwhelms the signal;
- safe probing itself consumes unacceptable performance/energy budget.

## 9. Round-9 decision

### KEEP
- Failure-Aware / Health-Aware architecture as a research theme;
- MPEI health-state thesis;
- Pavlenko as failure-label / mechanism source;
- observer / system-identification layer as internal product control point.

### UPGRADE
- **transient thermal impedance / dynamic response** from a generic method analogy to a primary observability candidate.

### NARROW
- "dryout margin" → **estimated dryout-risk / time-to-dryout margin under a calibrated workload model**;
- "surface-health sensor" → **hidden-state estimator from dynamic thermal response**.

### KILL
- assumption that ordinary phone skin-temperature headroom directly represents VC dryout margin;
- assumption that laboratory IR/optical diagnostics can be product observables.

## 10. Evidence maturity

Central architecture:
**STRUCTURAL_SIGNAL → stronger PRE-PoC ARCHITECTURE HYPOTHESIS**

Why not SYSTEM_VALUE:
- no phone-scale dryout/health estimator has been validated;
- no physical correlation exists yet between phone telemetry and internal wick/dryout truth;
- no partner-returned data.

Research completion percentages therefore remain unchanged.

## 11. Next smallest useful stage

**Round 10 — Observability Identifiability & Controller Falsification**

No outreach / no experiment version:

1. define minimum phone telemetry vector;
2. build competing observer hypotheses;
3. separate generic RC aging from two-phase-specific state;
4. define excitation budget and safe probing policy;
5. create synthetic / literature-derived expected signatures;
6. define a future blind Stage-0 identification test;
7. decide whether C1 dryout-risk and C2 thermal-health should remain separate states or collapse into one generic thermal-health index.
