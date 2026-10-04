# Decision-Grade Paper Briefs

Last reviewed: 2026-10-04

## Purpose

Explain **why each decision-relevant paper matters**, not just list its DOI.

Each brief uses:

- **Review status** — how deeply the source has been inspected in the current project.
- **Background / problem**
- **Technical method**
- **Main conclusion**
- **What we learn for mobile/chip thermal insight**
- **Mobile relevance**

Status vocabulary:
- **FULL-TEXT / DEEP REVIEW** — full article or sufficiently complete publisher text reviewed.
- **ABSTRACT + TECHNICAL METADATA REVIEW** — abstract, publisher highlights, figures/metadata or detailed indexing reviewed; do not infer unreported details.
- **SUPPORTING / TRANSFER EVIDENCE** — valuable mechanism evidence but not directly mobile.

This file covers the **current decision-grade bibliography**, not every historical/foundational source in the repository.

Full core 10Q cards: [Core Paper 10Q Decision Cards](paper_10q_cards_core_v01.md)

## 10Q migration status

The project now uses:
[Mobile Thermal Insight — Paper & Patent 10Q Method](mobile_thermal_insight_10q_method.md)

Existing briefs already contain much of:
- Q1 problem;
- Q5 method;
- Q9 contribution/insight;
- Q10 next implication.

They are being progressively backfilled with the additional decision fields:
- Q2 novelty vs strong current baseline;
- Q3 falsifiable hypothesis;
- Q4 research/partner lineage;
- Q6 normalized experiment design;
- Q7 reproducibility/process openness;
- Q8 adversarial evidence check;
- explicit partner action / smallest PoC / kill gate.

Until a brief contains those fields, treat it as **v1 summary + decision interpretation**, not a complete 10Q record.

---

# A. Pavlenko / Kutateladze — phase-change surfaces

## A1. Electrochemical modified mesh in HFE-7100

**[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

**Background / problem**  
Two-phase cooling needs a surface that can sustain nucleation and liquid replenishment while delaying dryout. A plain metal mesh already provides capillary structure, but its surface morphology and wettability may not be optimized for dielectric-liquid boiling.

**Technical method**  
The team electrochemically modifies stainless-steel mesh using a dynamic hydrogen-bubble-template process, creating a finer porous/rough surface on the mesh. The modified and unmodified meshes are compared during thin-layer HFE-7100 boiling.

**Main conclusion**  
The modified mesh can materially increase boiling heat-transfer performance; the best reported condition shows roughly an 81% HTC uplift relative to the unmodified mesh in the tested HFE-7100 setup.

**What we learn for our insight**  
The valuable Russian asset is not “a mesh” — China already has excellent ultra-thin mesh/composite-wick technology. The interesting capability is **surface-state engineering on an existing capillary structure**, potentially changing nucleation and rewetting without completely redesigning the VC wick.

The key mobile question is whether this modification can be transferred to a **60–100 μm-class phone wick** without blocking permeability and whether the benefit survives water or another product-path fluid.

**Mobile relevance:** HIGH-MECHANISM / MEDIUM-TRANSFER. Stage-0 priority #1 evidence.

---

## A2. Liquid-layer height over mesh coatings

**[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

**Background / problem**  
Boiling performance on porous/mesh structures depends not only on surface design but also on the amount of liquid above the heater. For compact two-phase devices, reducing liquid inventory is attractive, but too little liquid can change replenishment and dryout behavior.

**Technical method**  
The authors compare HFE-7100 boiling on stainless-steel mesh coatings at different liquid-layer heights and mesh geometries. Publicly recovered geometry includes wire diameters around 100 and 220 μm with cell dimensions in the few-hundred-micrometre range.

**Main conclusion**  
Liquid-layer height and mesh geometry significantly affect the boiling curve and heat-transfer behavior. The work helps map the transition between thin-layer and deeper/pool-like behavior rather than assuming one surface performs the same in every confinement regime.

**What we learn for our insight**  
This paper became a **falsification source**. A 220 μm wire is already comparable to or larger than the ~200 μm internal channel height of a strong 0.39 mm UTVC reference. Therefore the published Pavlenko mesh cannot simply be copied into a phone VC.

The learning is to transfer the **mechanism/process**, not the demonstrated hardware dimensions.

**Mobile relevance:** HIGH as a geometry-transfer constraint; the demonstrated structure itself is not phone-ready.

---

## A3. 2D-modulated capillary-porous coating

**[Heat Transfer Enhancement during Boiling in Horizontal Layers of HFE-7100 on 2D Modulated Capillary-Porous Coatings](https://doi.org/10.1016/j.applthermaleng.2024.125344)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Applied Thermal Engineering*, 2025.

**Review status:** FULL-TEXT / DEEP REVIEW.

**Background / problem**  
High-power electronics can benefit from dielectric-liquid boiling, but smooth surfaces have limited HTC/CHF and modified porous surfaces must balance liquid supply, vapor escape, thermal conductivity and nucleation. The authors also investigate whether thin liquid layers can reduce coolant inventory while retaining strong boiling performance.

**Technical method**  
Sinusoidally modulated capillary-porous coatings are fabricated by SLM/SLS additive manufacturing in bronze and stainless steel. HFE-7100 boiling is tested at liquid heights of 1.5, 2.5, 6 and 25 mm and at 100 and 50 kPa. Geometry/material thermal conductivity are varied.

**Main conclusion**  
The best reported HTC is about 37.5 kW/(m²·K). Reported CHF improvement versus an uncoated surface reaches ~193% at 100 kPa and ~257% at 50 kPa under the stated conditions. Geometry, material and liquid-layer height all matter.

**What we learn for our insight**  
Russia has strong expertise in **co-designing porous geometry and phase-change physics**, not just coating a surface. But the tested liquid layer is still millimetre-scale — much thicker than a phone VC.

The important transferable idea is to optimize **liquid supply + vapor escape + nucleation topology** under much tighter confinement. The raw performance numbers must not be used as phone-VC performance claims.

**Mobile relevance:** MEDIUM-HIGH mechanism evidence; LOW direct geometry comparability.

---

## A4. Black-silicon negative evidence in HFE-7100

**[Capillary Wicking and Heat Transfer during Boiling of HFE-7100 on Black Silicon Surfaces with Different Morphologies](https://doi.org/10.1134/S1810232825700225)** — O.A. Volodin, E. Vyacheslavova, A. Baranov *et al.* — *Journal of Engineering Thermophysics*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

**Background / problem**  
Superhydrophilic micro/nanostructured surfaces are often assumed to improve boiling because they wick liquid rapidly. But a surface that looks excellent in room-temperature wetting tests may change under real boiling.

**Technical method**  
Different black-silicon morphologies are characterized for capillary spreading/wicking and then tested in HFE-7100 boiling.

**Main conclusion**  
The structures can improve capillary/wetting behavior and HTC, but CHF does not automatically improve. The project evidence indicates wetting state can degrade during boiling, undermining the expected benefit.

**What we learn for our insight**  
This is one of the most important **negative-result papers** in the project.

For mobile VC development:
> initial contact angle or capillary rise is not enough.

We must measure the surface **after boiling, vacuum processing, sealing and cycling**. This directly motivates our “manufacturing-state wetting retention” IP/PoC thesis.

**Mobile relevance:** HIGH as a reliability/falsification principle.

---

# B. MPEI — hierarchical coating / reliability

## B0. Nanoparticle-coating transport precursor

**[Investigation of Transport Properties of Porous Coatings from Nanoparticles of Aluminum Oxide](https://doi.org/10.1088/1742-6596/2088/1/012022)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, A.V. Lavrikov — *Journal of Physics: Conference Series*, 2021.

**Review status:** FULL-TEXT / PDF TECHNICAL REVIEW.

**Background / problem**  
The MPEI line first investigated how nanoparticle material, agglomeration and deposited amount affect capillary liquid transport before moving into hierarchical thermosyphon surfaces.

**Technical method**  
Nanoparticle coatings were formed on 2 × 6 cm nickel substrates and compared using distilled-water capillary-rise measurements. Al₂O₃, TiO₂, SiC and diamond particles were examined.

**Main conclusion**  
Al₂O₃ produced the strongest liquid rise among the compared materials. Agglomeration/particle-formation condition materially affected capillary transport, supporting the idea that pore-scale structure rather than chemistry alone controls liquid supply.

**What we learn for our insight**  
This paper strengthens the **capillary-transport capability lineage** behind the later MPEI thermosyphon and 42-month durability work. It does not prove phone performance, but it shows the team can connect surface microstructure to liquid transport.

**Mobile relevance:** SUPPORTING / TRANSFER EVIDENCE.

Full 10Q: [B0 in Core Paper 10Q Decision Cards](paper_10q_cards_core_v01.md#b0--nanoparticle-coating-transport-precursor).

---


## B1. Microgroove + nanoparticle thermosyphon

**[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

**Background / problem**  
Thermosyphons rely on evaporation/boiling at the evaporator surface. A hierarchical surface can potentially add both microscale liquid transport and nanoscale nucleation/wetting effects.

**Technical method**  
The MPEI team combines longitudinal microgrooves (publicly indexed radius ~0.1 mm) with an Al₂O₃ nanoparticle layer (~100–200 nm particle scale) on a stainless-steel thermosyphon evaporator.

**Main conclusion**  
Within the tested low-heat-flux thermosyphon regime, the modified evaporator reports roughly 2.4–3.0× lower thermal resistance than the smooth reference, with strong orientation dependence.

**What we learn for our insight**  
The interesting capability is **hierarchical multi-scale transport**, not the thermosyphon application itself.

However, the ~0.1 mm groove radius is already large relative to a ~0.2 mm UTVC channel, and the reported heat-flux regime is far below a mobile SoC hotspot.

So this paper creates a useful Stage-0 question:
> can the hierarchical mechanism survive both **geometry shrink** and **heat-flux increase**?

**Mobile relevance:** SUPPORTING / TRANSFER EVIDENCE; not directly comparable to a phone.

---

## B2. 42-month hierarchical-surface stability

**[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.

**Review status:** FULL-TEXT / DEEP PUBLISHER REVIEW.

**Background / problem**  
Many enhanced boiling surfaces look good in short laboratory tests but degrade after months of working-fluid exposure, thermal cycling, erosion or contamination. Long-duration reliability is a major barrier to practical two-phase cooling.

**Technical method**  
A stainless-steel thermosyphon evaporator with microgrooves + Al₂O₃ nanoparticle coating is operated periodically for 42 months with R410A. Thermal resistance is tracked, followed by SEM/EDX and capillary-imbibition analysis.

**Main conclusion**  
Thermal resistance remains around 0.015 K/W and approximately 3× lower than the smooth thermosyphon in that system. No pronounced coating erosion/degradation/contamination is reported, although capillary imbibition becomes slower after long use.

**What we learn for our insight**  
This is currently the strongest Russian public evidence that a functional two-phase surface can remain useful for **years**, not hours.

It elevates MPEI as a collaboration challenger, but does not prove phone suitability because:
- heat flux is much lower than a smartphone hotspot;
- geometry is much larger;
- no sub-0.5 mm sealed VC is shown.

The valuable hypothesis is:
> preserve long-life surface stability while shrinking geometry and increasing heat flux.

**Mobile relevance:** MEDIUM as reliability evidence; LOW direct performance comparability.

---

# C. TPU — laser / wettability patterning

## C1. Biphilic surface for controlled droplet evaporation

**[Biphilic Heat Exchange Surfaces for Drip Irrigation Cooling Systems](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125316)** — D.V. Feoktistov, A. Abedtazehabadi, A.V. Dorozhkin *et al.* — *International Journal of Heat and Mass Transfer*, 2024.

**Review status:** FULL ABSTRACT / PUBLISHER HIGHLIGHTS REVIEW.

**Background / problem**  
Droplet cooling efficiency is limited by uncontrolled spreading, dry spots and poor use of the available surface. Spatial wettability can be used to steer the liquid rather than merely making the entire surface uniformly hydrophilic.

**Technical method**  
Laser processing creates biphilic patterns with hydrophilic/superhydrophilic regions. Superhydrophilic rings are used to control droplet spreading and evaporation on heated surfaces.

**Main conclusion**  
The wettability pattern changes droplet geometry and evaporation behavior and can intensify local cooling. The work demonstrates that **spatial wetting design** is a controllable thermal-management variable.

**What we learn for our insight**  
For phones, the interesting idea is not drip irrigation. It is the possibility of designing **where liquid prefers to return after local dryout**.

But a phone VC already has strong biphilic/laser prior art, so generic “pattern the wettability” is not differentiated. TPU only becomes strategically valuable if the pattern produces **confined rewetting / moving-hotspot routing** after vacuum/sealed-device processing.

**Mobile relevance:** MEDIUM mechanism transfer; LOW direct device relevance.

---

## C2. Wettability-contrast evaporation mechanism

**[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

**Background / problem**  
Understanding why heterogeneous wetting surfaces improve or worsen cooling requires local visualization of droplet/film motion, not just measuring an average surface temperature.

**Technical method**  
TPU uses laser-engineered roughness and wettability contrast on an aluminum-based surface and combines heated-droplet tests with optical diagnostics such as PIV/PLIF to investigate local evaporation/cooling behavior.

**Main conclusion**  
Surface roughness and wetting contrast strongly affect droplet dynamics, local liquid redistribution and cooling behavior in the open-droplet regime.

**What we learn for our insight**  
TPU’s differentiating strength may be **diagnostics + pattern control**, which is useful for understanding liquid routing around moving phone hotspots.

But the result must be re-tested in:
- copper/phone-relevant metal;
- thin confined liquid;
- sealed working fluid;
- vacuum-processed surface.

**Mobile relevance:** MEDIUM-HIGH research capability signal; LOW direct VC proof.

---

## C3. Durable laser–thermolysis superhydrophobic coating

**[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.

**Review status:** FULL-TEXT / DEEP PUBLISHER REVIEW.

**Background / problem**  
Many superhydrophobic coatings are fragile or require expensive fluorinated chemistry. TPU seeks a more durable and scalable way to create very low-surface-energy metal surfaces.

**Technical method**  
A two-step process is used:
1. nanosecond laser texturing creates hierarchical micro/nanoroughness;
2. a hydrocarbon liquid is thermally converted/deposited on the heated surface, chemically lowering surface energy.

SEM/AFM/XPS/FTIR characterize structure and chemistry. Humidity, saline-corrosion and sand-abrasion tests evaluate durability.

**Main conclusion**  
The approach achieves water contact angles up to ~169° and roll-off angle <10°, while retaining hydrophobic behavior after aggressive environmental/mechanical tests.

**What we learn for our insight**  
This strengthens TPU’s **surface-manufacturing durability** credentials, but also exposes a phone-VC risk: the functional chemistry is hydrocarbon-derived.

For sealed VC use we must test:
- vacuum outgassing;
- organic contamination of working fluid;
- thermal stability during degassing/welding;
- copper compatibility.

So the paper is valuable not because “superhydrophobic is good,” but because it defines a very clear **manufacturing compatibility kill gate**.

**Mobile relevance:** MEDIUM process capability; sealed two-phase compatibility remains unknown.

---

# D. China / global — strong ultra-thin VC benchmark

## D1. 0.35 mm UTVC with optimized composite wick

**[High Performance Ultra-Thin Vapor Chamber by Reducing Liquid Film and Enhancing Capillary Wicking](https://doi.org/10.1016/j.applthermaleng.2024.122813)** — Shiwei Zhang, Hang Liu, Changkun Shao *et al.* — *Applied Thermal Engineering*, 2024.

**Review status:** FULL ABSTRACT / PUBLISHER TECHNICAL REVIEW.

**Background / problem**  
As VC thickness falls below ~0.4 mm, vapor space shrinks and excess liquid film can obstruct vapor transport. Wick capillarity must improve without consuming the vapor channel.

**Technical method**  
The team combines visualization of two-phase flow with wick wettability/capillary tests. A micro/nanostructured composite mesh wick is optimized to improve liquid return and reduce liquid-film occupation in the vapor channel. A 0.35 mm UTVC is then fabricated and tested.

**Main conclusion**  
The composite wick improves capillary replenishment, reduces liquid-film blockage and promotes evaporation/boiling. The paper reports a 0.35 mm device and effective thermal conductivity up to ~12,454 W/(m·K) at 3 W under its test condition.

**What we learn for our insight**  
This is a **strong China/global baseline**, not something Russia can beat with generic “better wicking.”

Any Russian surface route must create extra value beyond a device that already co-optimizes:
- capillarity;
- vapor-space preservation;
- micro/nanostructure;
- actual sub-0.4 mm sealed operation.

**Mobile relevance:** VERY HIGH / direct comparator.

---

## D2. 0.39 mm composite-wick UTVC

**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

**Review status:** FULL-TEXT REVIEW.

**Background / problem**  
Ultra-thin VC performance is constrained simultaneously by support structure, fill ratio, liquid return and tiny vapor space. A practical device must survive all of these in a manufacturable sealed package.

**Technical method**  
An 82 × 58 × 0.39 mm copper UTVC is fabricated with two copper-mesh layers plus spiral-woven meshes. Support-column diameter, fill ratio and number of SWMs are varied. Water is the working fluid.

**Main conclusion**  
A 30% fill ratio and increased SWM support provide the best tested performance. The device reaches a reported 26 W ultimate heat-transfer power; its internal steam-channel/support height is around 0.2 mm.

**What we learn for our insight**  
This paper is our most important **geometry anchor**.

It tells us that a nominal “0.4 mm VC” may only have ~0.2 mm internal height. Therefore any Russian wick/coating must compete for tens of micrometres, not millimetres.

It is also why our Stage-0 targets moved to:
- ~60–100 μm-class wick;
- <=35 μm preferred added functional layer;
- <=120–150 μm total functional element.

**Mobile relevance:** VERY HIGH / direct engineering anchor.

---

## D3. 0.4 mm composite and wettability-patterned UTVCs

**[Experimental Research on the Heat Transfer Performance of Ultra-Thin Vapor Chambers with Composite Wicks for Electronics Cooling](https://doi.org/10.1016/j.ijheatfluidflow.2025.110148)** — Tengqing Liu, Yaokang Zhang, Shuangfeng Wang *et al.* — *International Journal of Heat and Fluid Flow*, 2026.

**Review status:** FULL ABSTRACT / PUBLISHER TECHNICAL REVIEW.

**Background / problem**  
At ultra-thin scale, condensate redistribution and orientation can limit liquid return. Different combinations of woven mesh, extra screen mesh and patterned wettability may change capillary limits and thermal resistance.

**Technical method**  
Five 0.4 mm SWM-based UTVC designs are fabricated, including wettability-patterned bottom surfaces produced by laser etching and composite screen-mesh variants. Device orientation and wick structure are compared experimentally.

**Main conclusion**  
Composite wick and wettability-patterned variants reduce thermal resistance by redistributing condensate. The best structures outperform simple SWM-only designs; all devices reach a maximum reported heat flux of 3.58 W/cm² in the test matrix.

**What we learn for our insight**  
This paper directly crowds a broad TPU-style thesis:
> “use wettability patterning inside a thin VC.”

That is already being done in 0.4 mm devices.

Therefore TPU only matters strategically if it can offer:
- a more robust surface state;
- better rewetting under transient hotspots;
- lower process cost;
- or a unique pattern-control principle.

**Mobile relevance:** VERY HIGH / direct comparator.

---

## D4. Laser-ablation wick modification in a real UTVC

**[Effect of Laser Ablation Surface Modification on the Capillary Performance of the Wick Structure for Ultra-Thin Vapor Chamber](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774)** — Jiu Yu, Wenqi Fang, Guoliang Hu *et al.* — *International Journal of Heat and Mass Transfer*, 2025.

**Review status:** FULL ABSTRACT / PUBLISHER TECHNICAL REVIEW.

**Background / problem**  
Original metal wicks can be too smooth and weakly hydrophilic, limiting capillary return and therefore the maximum power of a UTVC.

**Technical method**  
Laser ablation creates micro/nanoroughness on spiral-woven and copper-mesh wicks. Pulse energy and pulse spacing are varied, capillary rise is measured, and optimized treated wicks are installed in UTVCs.

**Main conclusion**  
Optimized laser ablation improves capillary rise and increases maximum UTVC heat-transfer power from 8 W to 10.5 W in the reported device. The response is non-monotonic — too much laser input is not necessarily better.

**What we learn for our insight**  
This is a very strong warning against claiming generic laser roughening as Russian novelty.

It also gives a useful engineering lesson:
> surface treatment must be optimized jointly for morphology, wettability and capillary flow; “rougher” is not automatically “better.”

**Mobile relevance:** VERY HIGH / direct competitor to TPU-style surface treatment.

---

# E. Synthesis for our project

The papers collectively tell us:

1. **China/global UTVC engineering is already strong at the device level.**
   Russia cannot win with generic mesh, laser or hydrophilic-surface claims.

2. **Pavlenko’s most valuable asset is phase-change failure physics.**
   Dryout, rewetting and working-fluid-specific surface-state behavior are closer to a real open problem.

3. **MPEI contributes reliability evidence.**
   Its 42-month result is unusually useful, but must survive orders-of-magnitude changes in heat flux and geometry.

4. **TPU contributes controllable patterning and diagnostics.**
   Its next gate is not another open-droplet result; it is vacuum/sealed-fluid/process compatibility.

5. **The best collaboration thesis is therefore cross-layer:**
   strong Chinese ultra-thin VC manufacturing
   × Russian phase-change/surface mechanism
   × our phone/package/workload constraints
   → a new measurable control point.

