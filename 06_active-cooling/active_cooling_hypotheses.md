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
