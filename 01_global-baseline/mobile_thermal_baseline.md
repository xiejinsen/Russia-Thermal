# Global Smartphone Thermal Baseline — Round 1

Status: working baseline, not final.

## 1. Problem reframing

Smartphone thermal management is increasingly a **system constraint on sustained performance**, not only a hotspot-spreading problem.

The useful objective is:

> maximize sustained useful performance subject to skin-temperature comfort, battery safety, cooling power, acoustic, thickness, reliability and manufacturing constraints.

This implies that junction temperature alone is an insufficient product-level objective.

## 2. Architecture evolution

A simplified evolution path:

```
SoC hotspot
  -> graphite / heat spreader
  -> heat pipe / vapor chamber
  -> larger / thinner / structured VC
  -> VC + active airflow
  -> hybrid two-phase + active cooling
  -> predictive thermal control + actuator control
```

The transitions overlap; they are not replacements.

## 3. Core distinction: spreading vs removal

- **Heat spreading** redistributes heat and suppresses local hotspots.
- **Heat removal** increases heat rejected from the device to the environment.

Vapor chambers mainly improve internal transport/spreading. Active convection can increase heat removal. The strongest future architecture may combine both rather than treating them as alternatives.

## 4. Technology families

### Passive two-phase
High maturity. Remaining innovation questions include:
- ultra-thin capillary structures;
- reduced vapor/liquid flow resistance;
- local high-heat-flux handling;
- orientation independence;
- bend/flex reliability;
- multi-source collection.

### Rotary fan / blower
High cooling potential but introduces:
- tonal/broadband noise;
- vibration;
- dust/water ingress;
- thickness and duct-volume cost;
- bearing/motor reliability;
- cooling power.

### Solid-state / piezo / MEMS air movers
Potentially attractive for thin products because actuation can be compact and high-frequency. Critical evaluation must include **system airflow impedance**, not free-air flow alone.

### Synthetic jet
Zero-net-mass-flux actuation can enhance local convection and boundary-layer disruption. Key questions are:
- actuator thickness;
- resonance;
- useful cooling area;
- recirculation;
- acoustic spectrum;
- integration with a heat spreader / VC.

### EHD / ionic wind
No mechanical rotor and potentially low mechanical vibration, but mobile feasibility depends on:
- high-voltage generation;
- ozone / chemistry;
- electrode contamination;
- efficiency;
- safety;
- packaging.

### Thermoelectric
Can directly reduce local temperature but adds electrical input and hot-side heat. Evaluate **system COP and total heat-rejection burden**, not cold-side temperature alone.

### Microfluidic / liquid
Potentially powerful but hard for mainstream smartphones due to pumps, sealing, reliability, volume and cost. Two-phase or passive-capillary variants may be more attractive than conventional pumped loops.

## 5. Control evolution

Reactive:
```
temperature rises -> DVFS / throttling -> fan increases
```

Potential future:
```
workload prediction
 -> future hotspot / skin-temperature prediction
 -> task placement / DVFS
 -> cooling actuator setpoint
 -> feedback correction
```

Hypothesis: **predictive thermal control becomes more valuable once phones contain controllable active cooling**, because software can trade compute placement, power and cooling energy before a thermal limit is reached.

## 6. Unified evaluation dimensions

Thermal:
- thermal resistance;
- peak / average skin temperature;
- heat flux;
- time-to-throttle;
- sustained SoC power.

Active-cooling:
- airflow;
- static pressure;
- pressure-flow curve;
- heat-transfer coefficient;
- actuator power.

Acoustic/mechanical:
- dBA;
- spectrum / tonal components;
- vibration;
- resonance;
- shock.

Product:
- thickness;
- volume;
- mass;
- dust / water;
- lifetime;
- manufacturability;
- BOM.

## 7. Open questions that matter for this project

1. Can a sub-1–2 mm active air mover create enough useful pressure and flow **inside phone-scale impedance**?
2. Can a synthetic-jet architecture be thermally useful without unacceptable acoustic or vibration signatures?
3. Can LHP/VC structures be redesigned around multiple moving hotspots rather than one SoC hotspot?
4. Can active airflow and two-phase transport be co-optimized as one device?
5. Can aeroacoustic design move mobile fans onto a better cooling/noise Pareto frontier?
6. Can workload prediction coordinate DVFS, task migration and cooling actuation?
7. Which Russian groups own mechanisms or facilities relevant to these questions?

## Seed sources

- Kutateladze Institute synthetic-jet heat transfer (2023): https://doi.org/10.31857/S0040364423020126
- Recent Russian microchannel boiling example: https://doi.org/10.1134/S086986432206018X
- Recent loop thermosyphon / microstructured evaporator work: https://doi.org/10.1134/S0869864324040085
