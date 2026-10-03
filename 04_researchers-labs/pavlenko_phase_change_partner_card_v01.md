# Pavlenko Phase-Change Surface Collaboration Card v0.1

Last updated: 2026-10-03

Status: partner-specific technical card. This is a **GO for a discriminating lab PoC**, not yet a final collaboration recommendation.

## Why this line matters

The Pavlenko / Kutateladze line now has a sufficiently coherent 2023–2026 evidence chain around:
- dielectric liquid boiling;
- thin liquid layers;
- capillary-porous coatings;
- wettability;
- electrochemically modified mesh;
- additive manufacturing;
- dryout / crisis phenomena.

Official current project:
RSF 23-19-00245, 2023–2025:
**Heat-transfer enhancement during boiling and evaporation on modified surfaces of different types in thin dielectric-liquid layers.**

Official:
https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257

The same official page also records Huawei-related boiling heat-transfer work and a 2024–2026 consulting agreement with Bel Huawei Technologies.

---

## Current technical sub-lines

### S1. 2D-modulated capillary-porous coatings — strongest current candidate

Primary 2025:
Shvetsov, Zhukov, Pavlenko,
**Heat transfer enhancement during boiling in horizontal layers of HFE-7100 on 2D modulated capillary-porous coatings**
Applied Thermal Engineering 263, 125344.
DOI:
https://doi.org/10.1016/j.applthermaleng.2024.125344

Fabrication:
- additive 3D printing;
- SLM/SLS;
- stainless-steel and bronze coatings;
- sinusoidal 2D modulation.

Reported:
- HTC up to ~37.5 kW/(m²·K) in tested conditions;
- CHF up to ~193% higher than uncoated reference at 100 kPa;
- CHF up to ~257% higher at 50 kPa;
- coating geometry and thermal conductivity materially affect performance.

### Smartphone relevance
Positive:
- directly addresses dryout / nucleation / capillary behavior;
- HFE-7100 is an electronics-relevant dielectric fluid;
- geometry is engineerable.

Main problem:
the published tests use liquid layers of 1.5–25 mm, far thicker than a phone VC vapor/liquid space.

Therefore:
**mechanism promising; geometry not directly transferable.**

---

### S2. Electrochemically modified metal mesh — highest manufacturing relevance

2025 paper:
Brester, Shvetsov, Zhukov, Pavlenko,
**Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100**
Journal of Engineering Thermophysics 34(4), 671–683.
DOI:
https://doi.org/10.1134/S1810232825700183

Process:
- steel mesh;
- electrochemical modification using dynamic hydrogen-bubble template;
- three process conditions tested.

Reported:
- best modification increased HTC up to ~81% versus unmodified mesh under the reported HFE-7100 thin-layer conditions.

### Smartphone relevance
This route may be **more manufacturable than large 3D-printed porous blocks** because it starts from a metal mesh, structurally similar to wick classes already used in ultra-thin two-phase devices.

Open questions:
- added coating thickness;
- pore-size distribution;
- adhesion;
- compatibility with copper/stainless VC shells;
- vacuum bake / degassing;
- working-fluid chemistry;
- cycling.

---

### S3. Black silicon / plasma-etched hemi-wicking surface — useful negative evidence

2025:
**Capillary Wicking and Heat Transfer during Boiling of HFE-7100 on Black Silicon Surfaces with Different Morphologies**
DOI:
https://doi.org/10.1134/S1810232825700225

Process:
- low-temperature plasma-chemical etching;
- homogeneous and hybrid needle-like silicon structures.

Important result:
- capillary wicking improved;
- HTC improved;
- **CHF did not improve for HFE-7100**;
- authors attribute this to partial / complete loss of hydrophilicity during boiling.

### Decision implication
This is valuable negative evidence.

Do **not** assume:
better room-temperature wicking -> better dielectric-fluid CHF.

A mobile VC surface must preserve its relevant wetting state:
- under working-fluid exposure;
- during boiling;
- after thermal cycling;
- after manufacturing / vacuum processing.

Black silicon is therefore **not the first PoC candidate**.

---

### S4. Wettability modeling / porous heater physics

2025 issue / 2026 publication:
Fedoseev & Salnikov:
**Effect of wettability parameters of the heater porous structure on boiling heat transfer**
DOI:
https://doi.org/10.1134/S0869864325060125

Finding:
- lyophobic behavior can favor earlier nucleation at lower/moderate loads;
- lyophilic behavior can favor heat transfer at high loads;
- optimal wettability is load-dependent.

### Collaboration implication
A uniform “make everything superhydrophilic” strategy may be suboptimal.

Interesting future hypothesis:
**spatially patterned wettability / pore architecture tuned for transient phone heat loads.**

---

## Partner capability map

### Likely key people
- A. N. Pavlenko — scientific lead
- D. A. Shvetsov — current recent-paper core
- V. I. Zhukov — coating / boiling collaborator
- A. E. Brester — electrochemical mesh modification line
- O. A. Volodin / V. S. Serdyukov — adjacent modified-surface / black-silicon work
- V. P. Bessmeltsev / S. G. Baev — acknowledged in additive porous-coating fabrication

## Why this matters
The PoC should probably involve more than one person:
- Pavlenko: mechanism / program direction
- Shvetsov/Zhukov/Brester: directly relevant surface experiments
- fabrication collaborators: surface manufacturing transfer

---

## Current GO / NO-GO

### GO — lab-scale discriminating PoC
Proceed to a controlled surface/wick test.

### NOT YET GO — phone integration
No evidence yet that:
- the coating fits 0.3–0.5 mm total VC thickness;
- the process survives phone manufacturing;
- the benefit persists under phone working-fluid inventory / orientation;
- cycling reliability is sufficient.

---

## Preferred first material candidates

1. **Electrochemically modified metal mesh**
   - best immediate integration plausibility.

2. **Thin / flattened 2D-modulated porous metal structure**
   - strongest reported CHF uplift, but requires aggressive thickness scaling.

3. **Black silicon**
   - reference / negative-control route, not primary.

---

## Key data request for partner discussion

Before collaboration commitment, request public/shareable technical answers on:
- coating thickness;
- porosity / pore-size distribution;
- permeability;
- capillary pressure;
- surface roughness;
- contact-angle evolution before/after boiling;
- adhesion strength;
- maximum substrate area;
- process temperature;
- compatible metals;
- cycling results;
- fluid compatibility;
- vacuum compatibility.

