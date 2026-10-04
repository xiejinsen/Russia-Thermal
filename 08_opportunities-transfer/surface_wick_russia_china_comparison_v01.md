# Pavlenko vs TPU vs MPEI vs China UTVC — Surface/Wick Transfer Comparison v0.1

Last updated: 2026-10-04

## Decision question

Which Russian capability can add something that is **not already available in contemporary Chinese ultra-thin vapor-chamber technology**, while surviving a 0.3–0.5 mm phone-class device envelope?

## Current conclusion

**Pavlenko remains the lead Russian collaboration hypothesis, but the thesis must be narrowed.**

The surviving whitespace is **not**:
- generic porous coating;
- generic hydrophilic surface;
- generic laser texturing;
- generic composite wick.

Those capabilities are already strongly represented in modern Chinese/global UTVC work.

The surviving thesis is:

> **fluid-specific control of nucleation, dryout, rewetting and wettability retention in a sub-mm sealed two-phase device.**

TPU and MPEI remain valuable challengers:
- **TPU** — surface-pattern / wettability-design challenger;
- **MPEI** — ordered-wick architecture challenger.

They do not currently replace Pavlenko as the lead.

---

# 1. Pavlenko / Kutateladze

## Source facts

Current HFE-7100 / dielectric-boiling evidence:

- **[Heat Transfer Enhancement during Boiling in Horizontal Layers of HFE-7100 on 2D Modulated Capillary-Porous Coatings](https://doi.org/10.1016/j.applthermaleng.2024.125344)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Applied Thermal Engineering*, 2025.
- **[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.
- **[Capillary Wicking and Heat Transfer during Boiling of HFE-7100 on Black Silicon Surfaces with Different Morphologies](https://doi.org/10.1134/S1810232825700225)** — O.A. Volodin, E. Vyacheslavova, A. Baranov *et al.* — *Journal of Engineering Thermophysics*, 2025.
- **[Heat Transfer during Boiling in Horizontal Layers of HFE-7100 on Smooth and Modified Surfaces](https://doi.org/10.1134/S1810232824020024)** — D.A. Shvetsov, A.N. Pavlenko, V.I. Zhukov — *Journal of Engineering Thermophysics*, 2024.

Additive-coating technology lineage:

- **[Development of a Technology for Creating Structured Capillary-Porous Coatings by Means of 3D Printing for Intensification of Heat Transfer during Boiling](https://doi.org/10.3103/S8756699019060049)** — V.P. Bessmeltsev, A.N. Pavlenko, V.I. Zhukov — *Optoelectronics, Instrumentation and Data Processing*, 2019.

The 3D-printing platform explicitly allows control of:
- material;
- porosity;
- amplitude / ridge height;
- residual-layer thickness;
- modulation wavelength;
- ordered microtexture geometry.

Related 2022 Freon work on the same additive-platform family reports:
- ~150 μm coating thickness in depressions;
- ridge heights around 300 μm and 700 μm;
- bronze particle scale around 35 μm.

These values are lineage evidence, not direct geometry for the 2025 HFE-7100 phone candidate.

The modified-mesh paper uses:
- HFE-7100;
- ~6 mm liquid layer;
- steel mesh 40;
- dynamic hydrogen-bubble electrochemical modification;
- up to ~81% HTC improvement versus the tested unmodified reference.

## Strength

**Highest directness to the target physics**
because it already studies:
- dielectric working fluid;
- nucleate boiling;
- CHF/dryout;
- wettability failure;
- capillary-porous surfaces.

## Main weakness

Published test geometry is still much thicker than phone VC confinement.

No public evidence yet shows:
- 0.3–0.5 mm sealed device integration;
- long cycling;
- vacuum-bake compatibility;
- phone-scale manufacturing yield.

## Key differentiation that remains plausible

Not "surface modification."

Instead:
- fluid-specific nucleation control;
- dryout-front control;
- rewetting under transient load;
- wetting-state retention after boiling/cycling.

Evidence strength: **medium-high**
Directness to phone UTVC: **medium**
Transfer uncertainty: **high but testable**

---

# 2. TPU — laser / wettability-contrast surfaces

## Source facts

2026 primary:
- **[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.

Official TPU:
https://news.tpu.ru/news/novyy-podkhod-dlya-effektivnogo-okhlazhdeniya-mikrochipov-predlozhili-uchenye-tpu/

The route combines:
- laser texturing;
- plasma / chemical functionalization;
- superhydrophilic and superhydrophobic regions;
- controlled wettability contrast;
- aluminum-magnesium substrate.

TPU reports strong local cooling changes in open droplet-evaporation geometry.

Negative evidence:
- acoustic droplet excitation:
  https://doi.org/10.1016/j.ijheatmasstransfer.2026.129217
- liquid-infused-surface degradation / limited repeated-load utility:
  https://doi.org/10.18799/24131830/2026/1/5462

## Strength

- strong 2026 activity;
- high-quality heat-transfer venues;
- controllable laser manufacturing;
- spatial wettability patterning may enable hotspot-addressed liquid management;
- team also publishes negative results rather than only positive claims.

## Main weakness

Current evidence is mainly:
- water;
- open droplets;
- elevated surface temperature;
- no sealed sub-mm two-phase device.

## China overlap

China already has:
- superhydrophilic composite UTVC wicks;
- wettability-patterned 0.4 mm UTVCs;
- direct laser-ablation modification of UTVC wick structures.

Therefore generic:
> "laser surface + hydrophilic treatment"

is **not** collaboration whitespace.

## Surviving TPU hypothesis

> spatially patterned **biphilic / contrast-wettability** surfaces tuned for transient hotspot location and rewetting inside a sealed dielectric-fluid device.

This is unproven and must first work with the target phone fluid/material stack.

Evidence strength: **medium-high**
Directness to phone UTVC: **low-medium**
Transfer uncertainty: **very high**

---

# 3. MPEI — ordered porous wick

## Source facts

2025:
- **[Creation and Practical Application: 3D Modeling and Calculation of Porous Ordered Structure](https://doi.org/10.1109/REEPE63962.2025.10970830)** — V. Bulaeva, N. Savchenkova, A. Savchenkov — *REEPE 2025*, 2025.

2026:
- **[Capillary Transport and Efficiency Limitations in Ordered Porous Heat Pipes](https://doi.org/10.30724/1998-9903-2026-28-4-193-205)** — V. Bulaeva, N. Savchenkova, A. Savchenkov — *Power Engineering: Research, Equipment, Technology*, 2026.

Official MPEI 2026 activity:
https://www.mpei.ru/lang/en/main/News/Lists/NewsList/NewsDispForm.aspx?ID=1011

2026 paper:
- ordered porous wick is modeled parametrically;
- water at 50 °C;
- porosity remains ~0.63 under scaling;
- permeability and hydraulic diameter rise with cell size;
- Re reported around 89;
- key tradeoff is capillary pressure versus hydraulic resistance;
- authors explicitly call for future prototype validation.

## Strength

Potentially attractive architecture-level control of:
- pore geometry;
- permeability;
- capillary pressure;
- predictability / repeatability;
- additive manufacture.

## Main weakness

**No current experimental UTVC proof.**

The evidence is primarily:
- modeling;
- spacecraft/heat-pipe context;
- water;
- macroscale design logic.

## China overlap

China/global UTVC work already optimizes:
- composite meshes;
- hierarchical wicks;
- laser-modified wick surfaces;
- liquid/vapor channel ratio.

MPEI must therefore prove that ordered geometry creates a new capillary/permeability frontier, not merely a more elegant geometry.

## Current role

**Stage-0 design challenger, not a PoC-1 lead.**

Evidence strength: **medium**
Directness to phone UTVC: **low**
Transfer uncertainty: **very high**

---

# 4. Contemporary China / global UTVC benchmark

## 0.35 mm visualized composite-wick UTVC

**[High Performance Ultra-Thin Vapor Chamber by Reducing Liquid Film and Enhancing Capillary Wicking](https://doi.org/10.1016/j.applthermaleng.2024.122813)** — Shiwei Zhang, Hang Liu, Changkun Shao *et al.* — *Applied Thermal Engineering*, 2024.

Reported:
- total thickness 0.35 mm;
- vapor space 0.2 mm;
- composite wick;
- optimized capillary transport / thin liquid film.

## 0.39 mm sealed composite-wick UTVC

**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

Reported:
- 82 × 58 × 0.39 mm;
- two copper-mesh layers + spiral-woven meshes;
- chemical oxidation to enhance wettability;
- resistance-welded final sealing;
- 30% fill ratio optimal in the tested matrix;
- maximum reported equivalent thermal conductivity ~3837 W/(m·K);
- maximum reported heat-transfer power 26 W.

This is important because it demonstrates:
**sub-0.4 mm + modified wettability + composite wick + sealed manufacturing in one device.**

## 0.4 mm wettability-patterned UTVC

**[Experimental Research on the Heat Transfer Performance of Ultra-Thin Vapor Chambers with Composite Wicks for Electronics Cooling](https://doi.org/10.1016/j.ijheatfluidflow.2025.110148)** — Tengqing Liu, Yaokang Zhang, Shuangfeng Wang *et al.* — *International Journal of Heat and Fluid Flow*, 2026.

The study directly compares:
- SWM only;
- SWM + screen mesh;
- SWM + wettability-patterned bottom surface;

in 0.4 mm devices and under different orientations.

This creates a direct competitive baseline for TPU-style wettability concepts.

## 2025 laser-ablation wick modification

**[Effect of Laser Ablation Surface Modification on the Capillary Performance of the Wick Structure for Ultra-Thin Vapor Chamber](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774)** — Jiu Yu, Wenqi Fang, Guoliang Hu *et al.* — *International Journal of Heat and Mass Transfer*, 2025.

The paper:
- modifies UTVC wick surface using laser ablation;
- studies capillary-rise performance;
- considers oxide/stability concerns and reduction treatment;
- fabricates UTVCs to compare treated vs untreated wick.

This directly overlaps generic TPU-style laser surface modification.

---

# 5. Normalized comparison

| Dimension | Pavlenko | TPU | MPEI | China modern UTVC |
|---|---|---|---|---|
| Current evidence | experimental | experimental | mostly modeling | experimental/device |
| Target fluid | **HFE-7100 dielectric** | mainly water | water model | mainly water |
| Sealed device | no phone-scale proof | no | no | **yes** |
| 0.3–0.5 mm proof | no | no | no | **yes** |
| Boiling/CHF depth | **strong** | medium | low | medium-strong |
| Wettability engineering | strong | **strong** | low | **strong** |
| Capillary architecture | strong | low-medium | **conceptually strong** | **strong** |
| Dryout/rewetting physics | **strongest RU signal** | medium | modeled indirectly | strong device baseline |
| Manufacturing path | SLM/SLS + electrochemical mesh | laser/plasma/chemistry | additive concept | mature mesh/etch/oxidation/laser |
| Reliability evidence | weak | weak | none | some device/process evidence |
| Direct phone transfer | medium-low | low | low | **high** |

---

# 6. Cross-source observation

China has already commoditized much of the **process vocabulary**:
- mesh;
- composite wick;
- hydrophilic oxidation;
- wettability patterns;
- laser surface treatment.

Therefore Russia should not be selected for process labels.

The Russian value must be a **mechanism/control-point advantage**.

## Most plausible control point

> Maintain liquid supply and favorable boiling state during transient high heat flux in extreme confinement, without consuming too much vapor space.

This combines:
- Pavlenko dryout/boiling physics;
- optional TPU patterned wetting;
- optional MPEI geometry control;
- Chinese sub-mm manufacturing.

---

# 7. Decision

## Pavlenko
**KEEP as Tier-A lead.**

But narrow the thesis to:
**dielectric-fluid, dryout/rewetting/wettability-retention physics under sub-mm confinement.**

## TPU
**KEEP as challenger / complementary surface-fabrication route.**

Do not promote generic laser/wettability treatment as whitespace.

## MPEI
**KEEP as Stage-0 modeling challenger.**

Do not place into sealed-device PoC until a thin-wick prototype/coupon exists.

## China baseline
Raise the benchmark.

A weak control is no longer sufficient.

The reference should include:
- modern composite wick;
- wettability enhancement;
- sealed 0.39–0.4 mm class device;
- orientation testing.

---

# 8. Smallest discriminating experiment

Use the same 0.4-mm-class VC shell and working fluid.

### Arm A — strong China-style reference
Composite mesh / SWM + modern wettability treatment.

### Arm B — Pavlenko-inspired
Electrochemically modified / fluid-specific mesh or capillary surface.

### Arm C — TPU-inspired
Spatial biphilic / wettability-contrast pattern adapted to the same substrate and working fluid.

### Arm D — MPEI-inspired
Only after Stage-0 capillary/permeability coupon screening; ordered wick must fit the same thickness budget.

Hold:
- shell;
- total thickness;
- fluid;
- fill;
- footprint;
- condenser;
- heater;
- orientation;
- degassing/sealing.

Primary discriminators:
- dryout limit;
- evaporator resistance;
- rewetting time;
- transient overshoot;
- adverse-orientation penalty;
- wetting/capillary drift after cycling.

The experiment is designed to **falsify Russian value**, not to confirm it.
