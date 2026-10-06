# Mechanism-Specific Thermal Health Observability Matrix

Date: 2026-10-06
Research mode: Phase-1 public evidence
Decision goal: determine which two-phase latent states are identifiable enough from phone-relevant observables to justify a future data/PoC stage.

## Executive conclusion

**PROCEED, BUT ONLY WITH CONTROLLED-EXCITATION OBSERVABILITY.**

Passive product telemetry alone is not yet a defensible basis for mechanism-specific thermal-health inference.

The strongest next-stage candidates are:
1. reversible -> irreversible dryout/crisis transition;
2. dryout/recovery hysteresis and time-to-rewet under controlled excitation.

Long-term capillary/wetting degradation remains a weaker candidate.
Oxidation/surface chemistry should remain an offline QA prior rather than an online observer target.

## Observability classes

- **P0 — Passive product telemetry:** normal workload, available temperatures, estimated power.
- **P1 — Controlled product excitation:** bounded power pulse / cooldown / recovery sequence.
- **L1 — Lab ground truth:** internal temperature/pressure, optical/IR dry-spot field, direct saturation/chemistry measurements.

## Decision matrix

| Latent physical state | Practical observables | Strong generic baseline | Russia-specific knowledge contribution | Major confounders | Passive identifiability | Controlled-excitation identifiability | Lab ground truth | Decision |
|---|---|---|---|---|---|---|---|---|
| Approach to capillary dryout | Tj/skin/VC temperatures, estimated power, ΔT, Zth slope | temperature-power thresholds, calibrated RC/Zth | Lab 1.3 crisis/dry-spot mechanism | ambient, interface/TIM drift, load placement, fill state | LOW-MEDIUM | MEDIUM | internal pressure/temp + optical/IR | TEST |
| Reversible -> irreversible crisis transition | hysteresis after pulse, recovery threshold, non-recovery, history-conditioned ΔT | transient dryout + rewetting/hysteresis models | Lab 1.3 reversible/irreversible crisis classification | thermal inertia, workload history, local hotspot migration | LOW | MEDIUM-HIGH | dry-spot field + internal saturation/pressure | **BEST CANDIDATE** |
| Local wick liquid saturation/depletion | pulse response, time-to-dryout, time-to-rewet, thermal resistance | transient saturation-aware model | Russian mechanism knowledge may help label failure regime | geometry, permeability, fill ratio, gravity/orientation | LOW | MEDIUM | internal saturation proxy / pressure / temperature | TEST AS HIDDEN STATE, NOT DIRECT KPI |
| Rewetting capability loss | recovery time, throttling power needed, post-pulse hysteresis | time-to-rewet / hysteresis baseline | Lab 1.3 dry-spot recovery knowledge | contact-angle hysteresis, fill ratio, thermal capacity | LOW-MEDIUM | MEDIUM-HIGH | optical/IR rewetting map | **BEST CANDIDATE** |
| Long-term capillary/wetting degradation | slow Zth drift, pulse fingerprint drift, recovery-time drift | generic thermal-aging + oxygen/process QA | MPEI 42-month capillary-state evolution | oxidation, TIM/contact aging, contamination, boundary changes | LOW | LOW-MEDIUM | imbibition/contact-angle/morphology + chemistry | NARROW / LAB-FIRST |
| Wick oxidation / surface chemistry | indirect thermal drift only | oxygen footprint / accelerated aging / process QA | limited incremental value from Russia for online inference | same thermal symptoms as other degradation paths | VERY LOW | LOW | XPS/EDS/chemistry | **DO NOT TARGET ONLINE** |
| Fill ratio / liquid inventory loss | dryout margin, transient response, spatial ΔT | filling-ratio sensitivity models | no clear Russia-specific residual yet | geometry, orientation, permeability, NCG | VERY LOW | LOW-MEDIUM | mass/fill/pressure/internal imaging | BACKGROUND CONFOUNDER |
| Generic package/interface aging | RC/Zth drift, thermal transient changes | strong generic package aging baseline | none required | TIM pump-out, contact pressure, chassis changes | MEDIUM | MEDIUM | destructive/package inspection | BASELINE NUISANCE STATE |

## What the matrix means

### 1. Temperature alone is not enough

Temperature signatures can detect abnormal thermal behavior and even generic dryout, but the same output can be produced by multiple internal causes.

Therefore:
- absolute T is useful for detection;
- it is weak for mechanism attribution.

### 2. Controlled excitation is the key information source

A bounded power pulse + controlled recovery creates history-dependent features:
- time-to-dryout;
- post-pulse ΔT;
- hysteresis magnitude;
- rewetting time;
- minimum recovery power;
- recovery completeness.

These features are much closer to capillary/two-phase dynamics than steady temperature.

### 3. Internal measurements are ground truth, not product requirements

2025 internal temperature/pressure experiments show that vapor superheat and localized dryout information can be hidden from external wall temperature.

Therefore the product architecture should not require internal pressure sensors.
Instead, internal sensing belongs in the **training/validation dataset** used to determine whether sparse external features are sufficiently informative.

### 4. MPEI is more valuable for priors / failure taxonomy than online estimation

MPEI's strongest evidence is long-duration surface/capillary evolution.

Use it to:
- define degradation states;
- choose accelerated-aging labels;
- identify which morphology/capillary measurements matter;
- design aging priors.

Do not currently claim:
- online remaining-life estimation;
- online surface-state estimation.

## Minimum theoretical falsifier

Before physical PoC promotion, test whether two different latent states can produce indistinguishable practical telemetry under realistic uncertainty.

At minimum compare:
- healthy two-phase device;
- transient capillary dryout;
- permanent/slow capillary degradation;
- package/TIM/interface degradation;
- fill-ratio variation;
- boundary/ambient variation.

If a classifier/observer cannot separate these states beyond a generic anomaly detector after controlled excitation, mechanism-specific observer thesis should be downgraded.

## Recommended feature hierarchy

### Tier A — always available
- device/SoC power estimate;
- junction/package temperature;
- skin/frame temperature;
- ambient estimate;
- workload history.

### Tier B — derived product features
- ΔT and dT/dt;
- calibrated RC/Zth residual;
- pulse-to-pulse repeatability;
- hysteresis magnitude;
- recovery time constant;
- estimated rewetting threshold;
- history-conditioned response.

### Tier C — lab-only labels
- internal vapor temperature;
- internal pressure / saturation condition;
- IR/optical dry-spot area;
- wick saturation proxy;
- contact angle / imbibition;
- morphology;
- oxygen/surface chemistry.

## Decision

### Failure-Aware UTVC
**KEEP / NARROW / ADVANCE TO DATA-DESIGN**

The best identifiable target is not “dryout exists” but:
**history-conditioned reversible -> irreversible transition / recovery-state classification.**

### Health-Aware UTVC
**KEEP / NARROW / LAB-FIRST**

Long-term aging knowledge remains strategically useful, but current online identifiability from phone telemetry is weak.

### Combined observer
**DO NOT PROMOTE AS A PRODUCT CONCEPT YET.**

Treat it as:
physics-informed state-estimation hypothesis.

## Next stage

Create a **Minimum Falsifying Dataset specification**.

It should define:
1. latent-state labels;
2. controlled excitation protocol;
3. Tier A/B observables;
4. Tier C ground truth;
5. confounder sweep;
6. generic baseline models;
7. mechanism-specific model;
8. pass/fail metric.

The first question is not “which ML model?”
It is:
**does enough information exist in the observables to separate the latent states at all?**
