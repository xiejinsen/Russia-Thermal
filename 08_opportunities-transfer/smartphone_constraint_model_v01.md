# Smartphone Thermal Constraint Model v0.1

Status: screening model for research and PoC design. It deliberately separates **evidence-backed boundaries** from **internal engineering targets**.

## 1. Why this model exists

A thermal mechanism is not a smartphone opportunity until it can survive product constraints.

The screening objective is:

> maximize sustained useful performance while respecting human thermal comfort, product geometry, cooling energy, acoustic quality, ingress protection, reliability, orientation and manufacturing constraints.

This model is not a product specification. It is a common test framework for comparing candidate technologies.

---

## 2. Evidence-backed external constraints

### A. Human thermal comfort

2026 smartphone studies provide a useful human-factor basis.

**Strategic thermal design for smartphones**:
https://doi.org/10.21606/drs.2026.2351

Evidence:
- tested 36.0 / 39.5 / 42.0 / 43.5°C;
- discomfort increases with both temperature and time-at-temperature;
- the thenar eminence becomes disproportionately sensitive at >=42°C;
- hotspot position matters, not only maximum device temperature.

**Assessing mobile gaming thermal experience using machine learning**:
https://doi.org/10.1016/j.ergon.2026.104014

Reported under the tested gaming conditions:
- comfort generally below ~38°C;
- experience degradation begins around 39–43°C;
- strong discomfort around 44–48°C.

### Screening interpretation
Use three surface-temperature zones:

- **Preferred / stretch target:** <=38–40°C in sustained hand-contact regions
- **Caution zone:** 40–42°C
- **Strong penalty:** >=42°C in grip-sensitive regions
- **PoC kill condition:** sustained >45°C on a high-contact region under the defined target workload

Important: these are research screening thresholds, not universal medical/safety standards.

---

### B. Product thickness / mass

Representative 2026 flagships:

Samsung Galaxy S26:
- 7.2 mm thickness
- 167 g
- IP68

Official:
https://news.samsung.com/global/samsung-unveils-galaxy-s26-series-the-most-intuitive-galaxy-ai-phone-yet

Huawei Mate 80 Pro:
- 7.95 mm thickness
- ~219 g
- IP68 / IP69

Official:
https://consumer.huawei.com/cn/phones/mate80-pro/specs/

### Screening interpretation
Any thermal concept that requires large additional thickness is structurally disadvantaged.

The PoC should track:
- total thermal-stack thickness;
- incremental thickness over a VC baseline;
- volume occupied;
- mass added.

---

### C. Ingress protection

Current mainstream flagships publicly target IP68-class resistance; some devices extend to IP69.

Implication:
Active cooling cannot be evaluated as a thermal-only system.

It must answer:
- how air/fluid paths affect water/dust ingress;
- seals and membranes;
- contamination / clogging;
- long-term degradation.

A concept requiring permanently open airflow paths carries a major product penalty unless equivalent ingress protection is demonstrated.

---

## 3. Internal engineering screening targets — v0.1

These are **project assumptions**, not external facts. They are intended to make prototypes comparable and will be refined using teardowns / OEM constraints.

### Geometry
For early PoC:
- active thermal device thickness sweep: 0.8 / 1.2 / 1.5 / 2.0 mm
- total active-cooling module volume: 5 / 10 / 15 cm³ classes
- thermal component incremental mass: report per design; minimize rather than use a hard first-round limit

### Heat-load classes
Use hotspot emulator workloads:
- 8 W sustained
- 15 W sustained
- 25 W transient / burst

For multi-source studies:
- 3 or 5 heat sources
- moving / alternating hotspot sequence
- independent power traces

These are research normalization loads, not claims about a particular phone SoC.

### Cooling electrical power
Sweep:
- 0.25 W
- 0.5 W
- 1.0 W
- 2.0 W

Primary metric:
**extra heat rejected per watt of cooling power** and resulting sustained-compute gain.

A design that requires large cooling power but merely transfers heat internally should be penalized.

### Acoustic evaluation
Do not use dBA alone.

Measure:
- overall SPL;
- 1/3-octave spectrum;
- tonal prominence;
- blade-passing-frequency components where applicable;
- specific loudness / sharpness proxy;
- structure-borne vibration.

First-round success should be **relative to a same-envelope rotary-fan baseline**, rather than using an arbitrary absolute dBA cutoff.

### Orientation
Test at least:
- face up;
- face down;
- portrait vertical;
- landscape;
- adverse gravity orientation for capillary systems.

### Environmental
Minimum research sweep:
- 20°C ambient
- 25°C ambient
- 35°C ambient

Later:
- high humidity;
- thermal cycling;
- dust exposure.

### Reliability
Early PoC:
- 100 h continuous operation
- 500 start/stop cycles
- 5-orientation repeated startup
- repeated thermal cycling

Later engineering gate:
- shock/drop;
- ingress;
- aging;
- pump/bearing/actuator fatigue;
- liquid loss / permeation.

---

## 4. Primary normalized metrics

### Thermal
- hotspot peak temperature
- maximum skin-side temperature
- temperature at high-contact zones
- thermal resistance
- heat transported / rejected
- time to 40 / 42 / 45°C skin thresholds
- time to throttling equivalent

### Performance
- sustainable heat load at fixed skin-temperature limit
- burst-to-sustained transition
- sustained compute-performance proxy

### Energy
- cooling electrical power
- cooling energy per workload
- net system energy

### Acoustic / vibration
- dBA
- tonal prominence
- spectrum
- vibration RMS / peak

### Mechanical
- thickness
- volume
- mass

### Reliability
- startup success rate
- orientation sensitivity
- cycle degradation
- contamination sensitivity

### Product integration
- ingress penalty
- manufacturability
- assembly complexity
- serviceability
- BOM proxy

---

## 5. Decision metric

No single metric determines success.

A candidate should be visualized on a Pareto surface:

**sustained heat load / skin temperature / cooling power / noise / thickness / reliability**

A candidate is interesting when it moves the Pareto frontier, not when it merely improves one isolated component metric.

---

## 6. Research gate

A Russian technology may move into collaboration selection only if:

1. its mechanism has a plausible phone-scale implementation;
2. it passes or has a credible path through the geometry / power / acoustic / ingress / reliability gates;
3. it shows a measurable advantage or complementary capability versus Chinese academic + industrial baselines;
4. the advantage can be tested with a small PoC within months rather than requiring a full phone redesign.

