# Active Cooling — Initial Hypotheses

Status: hypotheses to test, not recommendations.

## A. Synthetic jet + vapor chamber

### Hypothesis
A thin synthetic-jet actuator directed at a VC / spreader may create a better **thermal-per-volume / acoustic** tradeoff than a miniature rotary fan in selected hotspot configurations.

### Why Russia is interesting
Kutateladze Institute has recent experimental/numerical synthetic-jet heat-transfer work and broader jet/heat-transfer expertise.

### Falsification test
Build equal-volume prototypes:
1. rotary microblower + spreader;
2. synthetic jet + same spreader.

Hold constant:
- device volume;
- cooling electrical power;
- inlet/outlet area;
- hotspot power;
- ambient condition.

Measure:
- thermal resistance;
- sustained heat load;
- SPL spectrum;
- vibration;
- surface hot-spot map.

---

## B. Ultra-thin / multi-source loop heat pipe

### Hypothesis
LHP concepts may outperform a conventional VC when the product has **multiple spatially separated, time-varying hotspots** and a non-local heat rejection zone.

### Russia signal
ITP UB RAS has strong LHP lineage including flat evaporators, multi-source and flexible designs.

### Falsification test
Compare a phone-scale VC baseline with a miniaturized LHP concept under moving heat-source patterns representative of CPU/GPU/NPU/camera/modem workloads.

Critical boundary:
If required evaporator/condenser/compensation-chamber thickness cannot fit a phone stack, stop.

---

## C. Aeroacoustically optimized microfan

### Hypothesis
Mobile fan design can improve materially if optimized against **spectral/tonal noise** instead of only total dBA and airflow.

### Russia signal
TsAGI / PNRPU / CIAM have deep fan/noise/aeroacoustic modeling and experimental capability.

### Falsification test
Create several equal-envelope fan/duct geometries with similar airflow and static pressure. Compare:
- total SPL;
- tonal prominence;
- blade-passing components;
- psychoacoustic annoyance proxy;
- thermal result.

---

## D. Ionic wind as a niche actuator

### Hypothesis
EHD may be valuable not as the primary cooler, but as a **thin boundary-layer / local-flow actuator** in restricted spaces where mechanical vibration is undesirable.

### Russia signal
SPbU Electrophysics has a continuing ionic-wind modeling line.

### Kill criteria
- unsafe or impractical voltage;
- ozone/chemical output;
- contamination sensitivity;
- poor net cooling-per-watt;
- EMI impact.

---

## E. Predictive control + active cooling

### Hypothesis
Once a phone contains an active thermal actuator, the best control variable is not current temperature alone. Workload forecast + hotspot forecast may allow:
- pre-cooling;
- lower peak fan speed;
- lower tonal events;
- improved sustained performance;
- lower cooling energy.

This will later connect the hardware thermal study with CPU/runtime/system-software research.

---

## Evidence backbone and current corrections — 2026-10-03

This file contains hypotheses, not recommendations. Several original hypotheses have since been narrowed or killed as Russia-specific themes.

### Synthetic jet
Russian primary example:
https://doi.org/10.31857/S0040364423020126

Current correction:
generic synthetic-jet cooling is **not** treated as Russia-specific whitespace. It remains only a possible actuator/benchmark.

### Multi-source LHP
Russia:
- operating limits:
  https://doi.org/10.56304/S0040363625701152
- 2025 miniature flat-evaporator LHP proceedings:
  https://ihpcs.org/wp-content/uploads/2025/04/Final-Proceedings-Update-16.4.25-V.1-2.pdf

China comparators:
- 0.7 mm mobile LHP:
  https://doi.org/10.1016/j.device.2025.100783
- 0.7 mm flexible LHP:
  https://doi.org/10.1016/j.enconman.2024.119332

Current correction:
generic LHP miniaturization is not a Russia-specific opportunity; only dynamic/multi-hotspot routing remains active.

### Aeroacoustics
Russia:
- TsAGI official:
  https://www.tsagi.ru/en/research/aeroacoustics/
- TsAGI active flow-noise control:
  https://doi.org/10.31857/S0320791925030104
- PNRPU facility:
  https://pstu.ru/science-and-innovation/infrastructure/unique-scientific-installations/unikalnaya-nauchnaya-ustannovka-akusticheskaya-zaglushennaya-kamera-s-aerodinamicheskimi-istochnikami/

China comparator:
https://doi.org/10.7638/kqdlxxb-2025.0030

### Ionic wind
Current evidence remains exploratory. Do not promote this route until a recent primary electronics-cooling demonstration and practical voltage/ozone/lifetime evidence are stored.

### Predictive / adaptive control
Russia:
https://doi.org/10.15622/ia.22.5.3

Global predictive-control comparator:
https://doi.org/10.1016/j.applthermaleng.2023.121079

Current correction:
generic predictive thermal control / DVFS is crowded. The surviving Russian hypothesis is model-light online adaptation under uncertain phone boundary conditions.

