# Direct Russia–China Comparisons v0.1

Status: normalized first-pass comparisons. These are not overall rankings.

## Comparison rule

A direct comparison is only valid when:
- target function is similar;
- geometry / thickness / heat load are known;
- operating conditions are reasonably comparable.

Otherwise the result is marked **non-comparable** or **approximately comparable**.

---

# 1. Loop Heat Pipe

| Dimension | Russia — ITP UB RAS | China — XJTU / HUST |
|---|---|---|
| Recent representative device | miniature flat-evaporator LHP | mobile mLHP / ultra-thin LHP |
| Thickness | ~2.3 mm flat evaporator case | ~0.7–0.71 mm |
| Recent heat load | 20 W natural / 44 W forced-convection condenser in conference case | 16 W HUST; XJTU reports mobile-device mLHP with strong equivalent conductivity |
| Mobile targeting | indirect / transfer hypothesis | explicit |
| Flexibility | long/flexible LHP lineage | explicit flexible 0.7 mm mobile/foldable line |
| Multi-source work | yes, strong historical/recent relevance | Chinese ecosystem also has dual-evaporator/multi-source work |
| Operating-limit theory | strong Maydanik/Chernysheva line | exists but not yet deeply mapped |
| Manufacturing scale | unclear | XJTU reports lab-scale batch consistency and aging test |
| Comparability | approximate | approximate |

## Current inference
**Thickness / direct mobile miniaturization is not a Russian advantage.**

Possible Russian differentiation to test:
- operating-limit models;
- compensation-chamber / startup knowledge;
- distributed multi-source routing;
- failure diagnosis;
- special flexible topology;
- IP.

### Experiment needed
Build equal-thickness or equal-volume LHP concepts around:
- 3–5 spatially separated phone hotspot emulators;
- dynamic heat-load sequences;
- five orientations;
- bend/shock cycling.

Measure:
- startup time;
- source-to-sink resistance;
- dryout;
- temperature uniformity;
- transient overshoot;
- manufacturing repeatability.

---

# 2. Extreme micro-scale two-phase / thin-film cooling

| Dimension | Russia — Kutateladze | China — PKU / broader microfluidics |
|---|---|---|
| Representative physics | gas-liquid flow, thin film, droplets, boiling | embedded single-phase microjets + microchannels; broad boiling research elsewhere |
| Representative scale | 12.5 μm slit-height experiment | 25/50 μm embedded channels in PKU architecture |
| Phase behavior | two-phase / gas-liquid / evaporation / boiling | PKU representative is single-phase water |
| Direct electronics-cooling IP | RU 2822416 film+droplet+gas architecture | China active liquid products; exact same mechanism not yet mapped |
| Extreme heat-flux evidence | not normalized yet | PKU: up to 3000 W/cm² in non-mobile embedded-chip context |
| Mobile packaging | unproven | PKU architecture also non-phone |
| Comparability | low / non-direct | low / non-direct |

## Current inference
This remains one of the better whitespace candidates because the **mechanisms differ**.

The Russian question is not:
> Can it beat 3000 W/cm²?

That would be the wrong metric for a phone.

The phone-relevant question is:
> Can a sealed ultra-thin film/droplet architecture reject 10–30 W-class transient mobile heat with lower volume/power/noise than a microfan or pumped loop?

### Smallest discriminating experiment
Equal 10–15 cm³ cooling-envelope prototypes:
A. conventional VC + microfan  
B. pumped liquid loop  
C. gas-sheared thin-film / droplet prototype

Hold:
- 15 W and 25 W transient loads;
- same external opening area;
- same electrical cooling-power ceiling;
- same ambient.

Measure:
- peak hotspot temperature;
- skin-side temperature;
- time-to-steady-state;
- cooling electrical energy;
- SPL spectrum;
- liquid inventory;
- orientation sensitivity.

---

# 3. Aeroacoustics / microfan noise

| Dimension | Russia — TsAGI/PNRPU | China — Beihang / industry |
|---|---|---|
| Aeroacoustic facilities | strong | strong |
| Fan-noise modeling | yes | yes |
| CFD + acoustic methods | yes | yes |
| Tonal / broadband source research | yes | yes |
| Active noise-control evidence | recent TsAGI work | not yet mapped to same depth in this round |
| Mobile microfan product integration | limited public evidence | strong product evidence via Chinese gaming phones |
| Phone-scale psychoacoustics | not established | not established in academic evidence |
| Comparability | partial | partial |

## Important correction
Earlier we treated aeroacoustics as one of Russia's clearest differentiators.

After finding Beihang's current aeroacoustics lab and fan/noise work, that statement is too broad.

### Refined Russian differentiation hypothesis
Potential value may exist in:
- active flow/noise control;
- source-identification methodology;
- advanced microphone arrays;
- tonal suppression under confinement;
- aeroacoustic optimization transferred into a phone geometry.

It must be demonstrated against Chinese academic + OEM engineering.

### Proposed equal-envelope challenge
Take the same 20–25 mm-class blower envelope and compare design methodologies rather than institutions.

Metrics:
- pressure-flow curve;
- cooling at system impedance;
- dBA;
- tonal prominence;
- specific loudness;
- vibration;
- power.

---

# 4. Software / adaptive thermal control

| Dimension | Russia — SPbU SPSA | China — USTC adaptive DVFS / OEM algorithms |
|---|---|---|
| Real mobile OS relevance | Android / EAS / real phone | mobile/DNN adaptive DVFS; OEM thermal algorithms exist |
| Optimization | stochastic online SPSA | adaptive / multi-objective DVFS |
| Explicit thermal objective | weak / indirect | mixed; OEM thermal control proprietary, academic line mostly energy |
| CPU/GPU/NPU co-control | not demonstrated in Russian seed | Chinese/global literature broader |
| Cooler actuator control | no | OEM product control exists, but academic transparency limited |
| Model-free adaptation | promising Russian feature | adaptive methods also exist |
| Comparability | approximate | approximate |

## Current inference
Generic DVFS is not whitespace.

The potentially novel collaboration problem is:

> **jointly control computation + cooling hardware with a user-level thermal/acoustic objective.**

Potential state:
- CPU/GPU/NPU load;
- SoC temperatures;
- battery / PMIC temperature;
- ambient estimate;
- skin sensors;
- predicted workload.

Actions:
- task placement;
- DVFS;
- frame-rate / quality knob;
- fan / pump / synthetic-jet setting.

Objective:
- sustained workload utility;
- skin-temperature limit;
- junction limit;
- energy;
- noise;
- actuator lifetime.

### Why Russia could still matter
The SPbU line's value may be its low-model-assumption stochastic adaptation, if it can adapt online to:
- changing phone cases;
- grip conditions;
- ambient temperature;
- device aging;
- manufacturing variation.

This is a testable hypothesis, not established evidence.

---

# Cross-comparison conclusion v0.1

## Directions that are becoming less attractive as Russia-specific collaboration themes
- generic LHP miniaturization;
- generic VC;
- standard graphite/TIM;
- ordinary microfan;
- ordinary pumped-liquid cooling;
- generic DVFS.

## Directions still worth serious testing
1. thin-film / droplet / gas hybrid cooling;
2. phase-change / surface physics for sub-mm devices;
3. distributed heat routing under multiple moving hotspots;
4. confined microfan aeroacoustics + active/noise control;
5. computation + cooling co-control using adaptive/model-light methods.

The next step is to convert these into **mobile constraints + PoC kill criteria**, not continue accumulating technologies indefinitely.
