# Pavlenko Dryout / Rewetting vs Independent China Pressure Test v0.1

Last updated: 2026-10-04

Status: **CURRENT decision memo**

## Purpose

Pressure-test the current #1 Russia collaboration hypothesis:

> Pavlenko / Kutateladze may offer differentiated dryout / rewetting / boiling-crisis mechanism depth relevant to smartphone two-phase thermal management.

Important attribution rule:
China–Russia joint papers are not used as independent China capability evidence. This memo uses independent Chinese academic lines wherever possible.

---

# 1. Russia evidence spine — what Pavlenko/Kutateladze actually has

## A. Reversible → irreversible dry-spot dynamics in dielectric boiling

**[Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855)** — Anton Surtaev, Ivan Malakhov, Pavel Perminov, Matvey Polovnikov, Aleksandr N. Pavlenko — *International Journal of Heat and Mass Transfer*, 2026.

Source facts:
- HFE-7100 and Novec 649;
- high-speed IR thermography;
- high-speed visualization with reflected LED/internal-reflection style phase detection;
- CNN/U-net-assisted dry-spot segmentation;
- dry-spot density, contact-line length, void fraction and size distribution quantified up to CHF;
- bimodal dry-spot-area distribution appears near CHF;
- large, long-lived dry regions precede irreversible dryout;
- irreversible dry-spot propagation rate was measured and compared with analytical models;
- authors frame boiling crisis as a **conjugate hydrodynamic + dry-spot thermal-stability problem**.

This is the strongest current Russia evidence for a real **failure-mechanism diagnostic platform**, not merely improved CHF.

## B. Crisis-mode transition with liquid-layer height

**[The Hydrodynamic Crisis of Nucleate Boiling in a Horizontal Thin Layer of Dielectric Liquid HFE-7100](https://doi.org/10.32604/fhmt.2024.056779)** — V.I. Zhukov, A.N. Pavlenko — 2024.

Source facts:
- HFE-7100;
- horizontal layer heights from 1.5 to 35 mm;
- below the critical layer height, crisis changes to **surface drying**;
- above it, hydrodynamic crisis dominates;
- reported critical transition height ~6 mm in the tested apparatus;
- dry spot appears first near the transition condition;
- Taylor-instability / vapor-jet geometry was compared with Zuber theory.

Important limitation:
6 mm is **not phone-scale confinement**. This is mechanism evidence, not geometry transfer.

## C. Drying-front behavior on capillary-porous coatings

**[Heat Transfer during Boiling in a Thin Layer of Dielectric Liquid HFE-7100 on Capillary-Porous Coatings](https://doi.org/10.1134/S0018151X25700439)** — D.A. Shvetsov, A.N. Pavlenko, A.D. Nazarov *et al.* — *High Temperature*, publication cycle 2024/2025.

Source facts:
- HFE-7100 thin-layer boiling;
- additive capillary-porous coatings;
- high-speed thermographic study of crisis development;
- drying-front propagation along 2D-modulated channels reported roughly twice that in the transverse direction.

This gives the Russia line a direct:
**surface topology → directional drying-front dynamics**
signal.

## D. Modified mesh

**[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — Brester, Shvetsov, Zhukov, Pavlenko — 2025.

Still relevant for phone transfer because the route starts from a mesh-like wick.

But the public advantage is HTC / treatment signal, not a direct phone-scale dryout proof.

---

# 2. Independent China comparator — direct dryout / rewetting

## China A — Guangdong University of Technology: repeated dryout + steam-induced rewetting

**[Hydrophilicity degradation and steam-induced rewetting during capillary-fed boiling](https://doi.org/10.1016/j.expthermflusci.2023.111030)** — Jiangyou Long, Junwei Wu, Yujun Zhou, Xiaozhu Xie — *Experimental Thermal and Fluid Science*, 2024.

Institution:
Guangdong University of Technology.

Source facts:
- grooved wick;
- upper width ~200 μm;
- depth ~150 μm;
- capillary-fed boiling;
- after five boiling cycles CHF drops from **145.0 ± 3.3 W/cm² to 70.1 ± 2.9 W/cm²**;
- superhydrophilic surface becomes highly hydrophobic, static CA >140°;
- degradation attributed to airborne organic adsorption after dryout;
- liquid wicking in later tests begins through **steam-induced rewetting**;
- microgroove–nanoparticle composite wick retains boiling performance better;
- explicitly motivated by ultrathin two-phase heat-transfer devices.

Decision impact:
this directly kills the claim that China lacks:
- capillary-fed dryout;
- rewetting mechanism work;
- repeated-boiling wetting degradation;
- wick design tied to ultrathin devices.

## China B — Guangdong University of Technology: capillary-fed boiling wick optimization

**[Grooved-porous composite wick structures for highly efficient capillary-fed boiling heat transfer](https://doi.org/10.1016/j.applthermaleng.2024.124029)** — Junwei Wu, Jinghao Lin, Yongkang Yan, Zitong You, Zhengliang Su, Jiangyou Long — *Applied Thermal Engineering*, 2024.

Source facts:
- grooved-porous composite wick;
- fabricated on 0.6 mm copper plate;
- structure depth <=0.4 mm;
- explicitly designed for ultrathin two-phase devices;
- CHF up to ~154.9 W/cm² in the optimized configuration;
- CHF linked to capillary-rise volume / liquid-supply capability;
- porous-layer loading affects both HTC and CHF;
- repeated boiling stability is part of the design discussion.

Decision impact:
China already owns strong **wick architecture + capillary-limit + ultrathin-device** engineering.

## China C — South China University of Technology: mesh-wick thin-film boiling

**[Enhanced capillary-driven thin film boiling through superhydrophilic mesh wick structure](https://doi.org/10.1016/j.ijthermalsci.2025.109782)** — Longsheng Lu, Bo Tao, Shu Ting Yang, Yilin Zhong, Yingxi Xie — *International Journal of Thermal Sciences*, 2025.

Source facts:
- copper wire-mesh wick;
- nanowire surface treatment;
- improved capillary transport and reduced bubble adhesion;
- reported wicking coefficient improvement ~33.8%;
- volumetric flow improvement ~53.7%;
- CHF improvement ~75.8%;
- HTC improvement ~166.7% relative to the untreated mesh in the tested setup;
- dryout is explicitly framed as insufficient capillary supply versus evaporative/boiling demand.

Decision impact:
generic:
> modified mesh + better capillarity + delayed dryout

is **not Russia-specific**.

## China D — Shanghai Jiao Tong University: pore-scale dryout prediction

**[Three-dimensional pore-scale simulations of thin-film evaporation on micro-pillar wicks](https://doi.org/10.1063/5.0271431)** — Junyang Li, Shuai Gong, Chaoyang Zhang, Ping Cheng — *Physics of Fluids*, 2025.

Source facts:
- 3D pore-scale lattice-Boltzmann phase-change simulation;
- tracks meniscus recession from steady evaporation into dryout;
- calculates capillary-driven dryout heat flux;
- studies wettability, pillar pitch and pillar height;
- analytical dryout model agrees with simulation;
- identifies wickability / volumetric liquid supply as the governing control variable.

Decision impact:
China also has **failure-boundary modeling**, not only device performance experiments.

## China E — Changsha University of Science and Technology: HFE-7100 confinement

**[Coupled effects of surface structuring and capillary-length-scale confinement on pool boiling heat transfer and critical heat flux of HFE-7100](https://doi.org/10.1016/j.applthermaleng.2026.133219)** — Er Shi, Xinxiang Zhong, Yucheng Li, Qi Peng, Changwei Jiang — *Applied Thermal Engineering*, 2026.

Source facts:
- HFE-7100;
- smooth, open-microchannel and hierarchical micro/nano surfaces;
- unconfined and 5 / 3 / **1 mm** gaps;
- stronger confinement advances boiling incipience but shifts HTC toward earlier deterioration;
- CHF declines for all surfaces with stronger confinement;
- hierarchical micro/nano surface retains ~71% of unconfined CHF at 1 mm, versus ~56–57% for the simpler surfaces.

Decision impact:
China is now directly studying:
**dielectric fluid + confinement + surface structure + CHF deterioration**.

But 1 mm is still thicker than the ~0.2 mm internal scale of a strong phone UTVC reference.

## China F — Beijing Jiaotong University: HFE-7100 microchannel flow boiling

**Enhanced Flow Boiling Heat Transfer of HFE-7100 in Open Microchannels Using Micro-Nano Composite Structures** — Liaofei Yin *et al.* — 2025.

Source facts:
- independent China line;
- HFE-7100;
- micro/nano-structured open microchannels;
- high-speed visualization;
- reported CHF improvement up to ~133%;
- capillary/wettability and thin-film evaporation mechanisms discussed.

Decision impact:
dielectric-fluid structured boiling is not a Russia-only capability.

---

# 3. Normalized comparison

| Control problem | Pavlenko / Kutateladze | Independent China current evidence | Read |
|---|---|---|---|
| capillary-fed dryout limit | indirect + mesh/coating mechanism | GDUT / SCUT / SJTU direct | **China strong / no Russia advantage** |
| rewetting | dry-spot recovery/crisis dynamics | GDUT steam-induced rewetting direct | **China strong** |
| repeated-boiling wetting degradation | black-silicon negative evidence; current surface-state work | GDUT five-cycle hydrophilicity degradation direct | **China at least peer / more device-direct** |
| modified mesh | HFE-7100 electrochemical mesh | SCUT superhydrophilic copper mesh | **crowded / no generic advantage** |
| ultrathin wick geometry | public Russia mesh transfer unresolved | GDUT <=0.4 mm wick structure on 0.6 mm copper plate | **China stronger on geometry** |
| pore-scale dryout model | broader Russia analytical heritage; not exact wick dryout equivalent | SJTU direct capillary dryout simulation + analytical model | **China strong** |
| dielectric-fluid boiling | HFE-7100 / Novec 649 strong | Beijing Jiaotong / Changsha HFE-7100 current work | **China active / no broad advantage** |
| confinement sensitivity | Russia layer-height crisis transition | China HFE-7100 down to 1 mm gap | **both active; China closer geometrically** |
| reversible→irreversible dry-spot statistics in dielectric fluid | **2026 IR + reflection + CNN + propagation-rate measurements** | no independent China equivalent recovered in this pass | **narrow Russia signal survives** |
| crisis-mode transition: hydrodynamic ↔ surface drying | explicit HFE-7100 layer-height experiment | no equally direct independent China mode-transition study recovered | **narrow Russia signal survives** |
| drying-front anisotropy on structured dielectric-boiling coating | measured | no direct matched China comparator recovered | **narrow Russia signal survives** |

---

# 4. What is killed

The following broad Russia claims are no longer defensible:

- Russia is differentiated because it understands dryout;
- Russia is differentiated because it studies rewetting;
- Russia has unique capillary-fed wick failure knowledge;
- Russia has unique modified-mesh dryout control;
- China mainly optimizes CHF without studying failure mechanisms.

All are contradicted by independent China evidence.

---

# 5. What survives

A narrower Russia hypothesis remains:

> **dielectric-fluid boiling-crisis diagnostics that resolve the transition from reversible dry spots to irreversible dryout, coupled with liquid-inventory / crisis-mode transition and structured-surface drying-front behavior.**

This combines:
- HFE-7100 / Novec 649;
- high-speed IR;
- internal/reflection phase visualization;
- ML-assisted dry-spot statistics;
- dry-spot propagation;
- thermal-stability interpretation;
- layer-height / crisis-mode transition;
- structured-surface drying-front dynamics.

This is more specific than generic wick dryout.

---

# 6. Mobile/chip relevance

Positive:
- dry-spot runaway is a real failure archetype for two-phase thermal systems;
- diagnostic framework could help identify why a phone-scale evaporator fails;
- surface-state and liquid-inventory effects are directly relevant to low-inventory devices.

Critical gap:
the Russia public experiments are still not at phone VC geometry.

Russia layer-height evidence:
- ~1.5–6 mm regime for drying/crisis transition.

Strong phone reference:
- ~0.2 mm internal steam/support scale.

Therefore the Russia residual advantage is:
**mechanism/diagnostics depth**, not demonstrated phone geometry.

---

# 7. Stage-0 implication

Pavlenko remains current Priority #1, but Stage-0 success criteria must change.

Old implicit question:
> does modified mesh improve boiling?

Too weak.

New question:
> can the Kutateladze failure-diagnostic / surface-control know-how identify and delay the **phone-relevant irreversible-dryout boundary** better than a strong domestic capillary-wick baseline?

Mandatory China controls:
1. GDUT-style grooved / composite wick logic;
2. SCUT-style treated copper mesh;
3. strong domestic UTVC mesh baseline.

Measurements:
- dry-spot onset heat flux;
- reversible/irreversible transition;
- dry-spot growth rate;
- rewetting delay;
- capillary supply / permeability;
- thermal resistance;
- post-cycle wetting state;
- product-fluid / DI-water transfer;
- vacuum/process retention.

---

# 8. Promotion / Kill rule

## Promote toward Primary Bet only if

At phone-relevant thin geometry:
- Russian-derived surface/process or diagnostic-guided design shifts irreversible-dryout onset materially beyond strong domestic controls;
- rewetting is faster or more stable;
- benefit survives water/product-fluid transfer;
- no unacceptable permeability/thickness/process penalty;
- the Russian team contributes a control point not already reproduced domestically.

## Downgrade if

- advantage reduces to a generic capillary/mesh treatment;
- domestic composite/grooved/superhydrophilic wick reaches equal dryout/rewetting behavior;
- Russia benefit only exists in millimeter-scale open HFE layers;
- irreversible-dryout diagnostics do not change phone design choices.

---

# 9. Partner decision

### Previous state
**Stage-0 Priority #1 / broad dryout–rewetting differentiation.**

### New state
**Stage-0 Priority #1 / NARROW DIFFERENTIATION.**

Reason it stays #1:
- Russia has unusually rich dielectric dry-spot/crisis diagnostics;
- direct current data on reversible/irreversible dry regions;
- modified-surface and thin-layer lineage;
- phone transfer is falsifiable with a bounded coupon experiment.

Reason it is not yet a Primary Bet:
- China now has strong independent capillary-fed dryout/rewetting and ultrathin-wick evidence;
- Russia's remaining advantage is mechanism/diagnostic specificity, not device superiority.

---

# 10. Management wording

Use:

> **Russia / Kutateladze may have differentiated depth in diagnosing and controlling dielectric-fluid boiling crisis — especially the transition from reversible dry spots to irreversible dryout — while China is already stronger in ultrathin wick/device engineering and has strong independent dryout/rewetting research.**

Do not use:

> Russia owns dryout/rewetting know-how.

---

# 11. Next gate

Public comparison for the broad dryout/rewetting thesis is now sufficiently closed.

Next useful evidence is:
1. partner-returned dry-spot/process data;
2. Stage-0 thin coupon;
3. exact phone-scale dryout/recovery comparison.

Do not continue generic dryout literature search unless a specific new primary source is identified.
