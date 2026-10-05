# Pavlenko Phase-Change Surface Collaboration Card v0.1

Last updated: 2026-10-04

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

Huawei collaboration evidence is maintained canonically as [I-HUAWEI-002](../evidence/industry/huawei/sources/I-HUAWEI-002_pavlenko_collaboration_record.md).

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

---

## IP / readiness update — 2026-10-03

### Current roles verified

Alexander N. Pavlenko:
- Professor;
- Head of Laboratory of Low-Temperature Thermophysics;
- Corresponding Member RAS.

Official:
https://www.itp.nsc.ru/lmpt/?lang=ru&page_id=855

Contact:
pav@itp.nsc.ru

Dmitry A. Shvetsov:
- Researcher, Laboratory of Low-Temperature Thermophysics;
- Candidate of Physical and Mathematical Sciences.

Official:
https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/13_laboratoriya_nizkotemperaturnoy_teplofiziki.html

### Thin-coating patent evidence

RU2793671C2:
https://patents.google.com/patent/RU2793671C2/en

This patent includes:
- microarc-oxidation capillary-porous coating;
- 6–12% surface-layer porosity;
- water contact angle <40°;
- dependent coating thickness 7–35 μm;
- pore size 100 nm–10 μm.

This materially strengthens the plausibility that the broader Pavlenko/Kutateladze surface program can operate at tens-of-microns scale.

Caveat:
the patent does not demonstrate an HFE-filled 0.3–0.5 mm phone VC.

### Background-IP risk

Canonical collaboration evidence:
- [I-HUAWEI-001](../evidence/industry/huawei/sources/I-HUAWEI-001_kutateladze_lab13_collaboration_record.md)
- [I-HUAWEI-002](../evidence/industry/huawei/sources/I-HUAWEI-002_pavlenko_collaboration_record.md)

No inference is made about:
- exclusivity;
- product deployment;
- ownership of specific foreground results.

Before formal collaboration, explicitly separate:
- institute background IP;
- Huawei-related background/contract rights if any;
- new phone-specific foreground IP.

Current readiness:
**technical discussion ready; IP boundary not yet contract-ready.**

## Phone-transfer geometry / fluid correction — 2026-10-04

### Mesh geometry now partially resolved

2025 primary:
https://doi.org/10.1134/S0040601525700454

Reported HFE-7100 tests use stainless meshes with:
- 100 um wire / 230 um cell side;
- 220 um wire / 401 um cell side.

Related single-layer analysis also reports a 160 um wire / 315 um aperture case.

Strong UTVC comparator:
https://doi.org/10.3390/mi15050627

Reference geometry includes:
- ~0.2 mm internal steam-channel/support height;
- 0.06 mm copper mesh.

### Decision correction

A 220 um Pavlenko mesh is already comparable to or larger than the entire ~200 um reference channel.

Therefore the collaboration thesis is **not**:
> put the demonstrated mesh 40 directly into a 0.4 mm phone VC.

It is:
> transfer Pavlenko's surface-modification / nucleation / dryout / rewetting mechanism onto a thinner ~60–100 um-class wick or a tens-of-microns functional surface.

RU2793671C2 remains useful thin-process evidence:
https://patents.google.com/patent/RU2793671C2/en

### Working-fluid correction

3M official:
https://www.3m.com/3M/en_US/pfas-stewardship/operations-innovation/

3M completed PFAS manufacturing exit at end-2025.

Therefore:
- HFE-7100 remains valuable for reproducing the published mechanism if available;
- HFE-7100 is **not** treated as the assumed future product fluid;
- Stage 0 must test transfer to water and/or a separately screened future product fluid.

### Updated data request

Highest-priority partner questions now include:
1. can the hydrogen-bubble modification be applied to 60–100 um wire/mesh?
2. what added modification thickness and permeability penalty result?
3. has the team tested water or other currently available fluids on the same modified mesh?
4. what changes after vacuum/degassing and thermal cycling?
5. can the thin-coating IP/process be transferred to copper VC materials?

Current status:
**Tier-A mechanism lead; demonstrated mesh geometry itself is not phone-ready.**


## Manufacturability-closure status — 2026-10-04

The public evidence is now sufficient to define the **questions**, but not to reproduce the phone-scale process.

For the dynamic-hydrogen-bubble modified-mesh route, this round did not recover a complete public process window for:
- electrolyte chemistry;
- current density / voltage;
- modification duration;
- added feature/layer thickness;
- permeability before/after treatment;
- adhesion;
- transfer to ~60–100 μm-class copper/phone wick.

These are now explicit partner data requests rather than hidden assumptions.

### Current partner priority

**Stage-0 priority #1.**

Pavlenko remains ahead because:
- direct dielectric-fluid boiling / dryout evidence is strongest;
- the failure mechanism is closest to the phone two-phase problem.

MPEI/Ivanov is now priority #2 because of stronger long-duration two-phase reliability evidence, but still lacks phone heat-flux/sub-mm proof.

Detailed 3–6 month brief:
../09_collaboration-roadmap/partner_brief_pavlenko_stage0_v01.md


## Public-search exit / partner-only boundary

Research date: 2026-10-04

A targeted search was repeated across:
- the modified-mesh journal record;
- same-team precursor/review publications;
- patent/author searches;
- Russian/English process terminology around dynamic hydrogen-bubble templating.

### Publicly recovered
- steel mesh 40;
- HFE-7100;
- thin horizontal liquid layer about 6 mm;
- dynamic hydrogen-bubble matrix/template modification;
- three process conditions;
- reported optimal HTC improvement up to ~81% versus the no-mesh-coating surface stated in the public abstract.

### Not recovered to decision-grade public precision
- electrolyte chemistry;
- current density / voltage;
- deposition/modification time;
- deposited feature/layer thickness;
- open-area or permeability penalty;
- adhesion / handling window;
- copper-specific recipe;
- validated 60–100 μm mesh transfer.

**Research decision:**
continuing open-ended public search on those process parameters is now low-yield.

Reclassify:
- exact process recipe → **PARTNER-ONLY**;
- current-batch morphology / adhesion data → **PARTNER-ONLY**;
- permeability on 60–100 μm mesh → **EXPERIMENT-ONLY**;
- copper transfer → **EXPERIMENT-ONLY**;
- DI-water/product-fluid transfer → **EXPERIMENT-ONLY**;
- vacuum / degassing / cycling → **EXPERIMENT-ONLY**.

This does not downgrade the mechanism. It changes the next action from "search more" to **request process window + run a thin-coupon falsification**.

**Current decision:** KEEP / GO WITH PREREQUISITE as Stage-0 priority #1.


## Independent-China dryout / rewetting pressure test — 2026-10-04

Focused comparison:
../08_opportunities-transfer/pavlenko_dryout_rewetting_china_pressure_test_v01.md

### What China now clearly has independently

- GDUT:
  capillary-fed dryout + repeated-cycle CHF degradation + steam-induced rewetting;
- GDUT:
  <=0.4 mm grooved-porous wick on thin copper, with capillary transport tied to CHF;
- SCUT:
  modified superhydrophilic copper mesh with improved capillary supply and dryout limit;
- SJTU:
  pore-scale dryout transition and analytical dryout-flux modeling;
- Changsha UST:
  HFE-7100 confinement study down to 1 mm.

### Decision correction

Do **not** describe Pavlenko as differentiated because:
- the team studies dryout;
- the team studies rewetting;
- it modifies mesh;
- it understands capillary limit.

Those capabilities now have strong independent China comparators.

### Residual Pavlenko/Kutateladze signal

The strongest current Russia-specific combination is:

**dielectric-fluid boiling-crisis diagnostics**
+
**reversible→irreversible dry-spot transition**
+
**dry-spot propagation / contact-line statistics**
+
**layer-height crisis-mode transition**
+
**structured-surface drying-front dynamics**.

Key 2026 primary:
https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855

This paper uses:
- HFE-7100 and Novec 649;
- high-speed IR;
- reflected-light/internal-reflection-style phase visualization;
- ML-assisted dry-spot segmentation;
- dry-spot density / contact-line / size-distribution analysis;
- irreversible dry-spot propagation measurements.

### Current state

**Stage-0 Priority #1 / NARROW DIFFERENTIATION.**

Reason #1 is retained:
- diagnostic/failure-mechanism depth remains unusual;
- it is directly testable against domestic ultrathin-wick baselines.

Reason no promotion to final Primary Bet:
- China is already strong in dryout/rewetting and ultrathin wick engineering;
- Russian public evidence remains millimeter-scale/open compared with phone internal geometry;
- product-fluid / copper / vacuum / sealed-device transfer remains unproven.


## Experiment-level execution update — 2026-10-05

Current public platform evidence now supports:
- vacuum-capable HFE-7100 boiling rig;
- 50/100/150 kPa operation;
- liquid-layer sweep ~1.5–35 mm;
- degassing by reduced-pressure boiling;
- high-speed video / thermography;
- current capillary-porous samples including additively manufactured stainless/bronze structures;
- current RSF-supported crisis/surface work.

Interpretation:
Pavlenko should be treated primarily as a **crisis-diagnostics / failure-mechanism partner** in Stage-0.

The public setup is still far from a phone VC:
- 120 mm-class chamber;
- mm–cm liquid layers;
- pool/thin-layer boiling rather than sealed wick-fed circulation.

Partner request must now ask explicitly for:
- minimum reproducible structured-surface/mesh thickness;
- sample throughput/yield;
- copper/DI-water experience;
- whether their diagnostic pipeline can be applied to externally fabricated phone-like coupons.

## Round-3 collaboration and diagnostic boundary update — 2026-10-05

### Official collaboration precedent

Canonical source cards:
- [I-HUAWEI-001](../evidence/industry/huawei/sources/I-HUAWEI-001_kutateladze_lab13_collaboration_record.md)
- [I-HUAWEI-002](../evidence/industry/huawei/sources/I-HUAWEI-002_pavlenko_collaboration_record.md)

Decision interpretation:
the collaboration precedent reinforces technical-discussion readiness, but confidential scope, current status and mobile-field rights remain unproven; the 2025/2026 end-year discrepancy requires direct confirmation.

### Diagnostic public boundary

Current public evidence now supports:
- 2026 water spray study using a 1.2 mm nozzle and 10 g/s flow with IR + internal-reflection visualization + ML dry-spot analysis;
- same-lab transparent-heater diagnostic lineage of ~30 μm/pixel visible and ~120 μm/pixel IR imaging;
- current HFE-7100 / Novec 649 irreversible-dryout work with CNN-assisted dry-spot analysis.

These values are **platform-lineage evidence**, not the exact resolution/specification of the current dielectric spray/jet stand.

### Search exit

Do not continue open-ended public searching for:
- exact current dielectric stand nozzle/jet arrangement;
- minimum repeatable phone-like mesh/surface;
- current copper/fine-mesh process yield.

Route those to PARTNER-ONLY.

Phone transfer remains EXPERIMENT-ONLY.

Current decision:
**Stage-0 #1 / GO WITH PREREQUISITE — ranking unchanged, partner-readiness confidence reinforced.**
