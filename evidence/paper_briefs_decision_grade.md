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


## B0a. 0.2 mm water-boiling microchannel / CHF precursor

**[Nanoparticle Coating of a Microchannel Surface is an Effective Method for Increasing the Critical Heat Flux](https://doi.org/10.1134/S0040601517040073)** — M.V. Shustov, Yu.A. Kuzma-Kichta, A.V. Lavrikov — *Thermal Engineering*, 2017.

**Review status:** FULL-TEXT / PUBLIC AUTHOR-COPY TECHNICAL REVIEW.

**Background / problem**  
Microchannels are attractive for compact electronics cooling, but boiling crisis/CHF limits heat removal. The paper asks whether an Al2O3 nanoparticle coating can shift that limit in a very thin water-boiling channel.

**Technical method**  
Water boils in a single microchannel about 0.2 mm high, 3 mm wide and 13.7 mm long. Smooth and Al2O3-coated heating surfaces are compared, with high-speed optical observation and thermal measurements.

**Main conclusion**  
The coating does not simply raise HTC everywhere. The important result is that boiling crisis occurs at a materially higher heat flux; the public full text reports roughly **15–50% higher CHF** than the uncoated channel over the tested cases, with improved transition-boiling behavior.

**What we learn for our insight**  
This is strong evidence that the MPEI/Kuzma-Kichta coating lineage is not limited to low-flux permafrost thermosyphons. It has prior **0.2 mm water-boiling / CHF** experience directly relevant to compact thermal hardware. It still does not prove the later hierarchical groove geometry can fit a 0.4 mm sealed smartphone VC.

**Mobile relevance:** HIGH as supporting transfer evidence; not direct phone-device proof.

Full 10Q: [B0a in Core Paper 10Q Decision Cards](paper_10q_cards_core_v01.md#b0a--02-mm-water-boiling-microchannel--chf-precursor).

---

## B0b. Ivanov-linked 0.2 mm water-boiling CHF study

**[Heat Transfer Crisis Investigation in a Microchannel with and without Nanoparticles Coating](https://doi.org/10.1088/1742-6596/1683/2/022087)** — Yu.A. Kuzma-Kichta, A.V. Lavrikov, M. Shustov, E.A. Kustova, N.S. Ivanov *et al.* — *Journal of Physics: Conference Series*, 2020.

**Review status:** FULL-TEXT / OPEN-ACCESS TECHNICAL REVIEW.

**Background / problem**  
The earlier microchannel result needed a more explicit CHF model/experiment comparison and sensitivity to coating geometry.

**Technical method**  
Water boiling is tested in a horizontal microchannel approximately 12.5 × 3 × 0.2 mm with and without an Al2O3 nanoparticle coating. The paper explicitly studies heat-transfer crisis/CHF and compares experiment with crisis correlations.

**Main conclusion**  
The paper confirms that a nanoparticle-coated **0.2 mm-class water-boiling channel** can shift the heat-transfer-crisis boundary. It also exposes that CHF depends on coating thickness/particle scale and that the available dataset is limited.

**What we learn for our insight**  
This paper is especially important because **N.S. Ivanov is a co-author**, linking the current hierarchical-coating partner line to earlier thin-channel/high-flux water work. It upgrades MPEI's high-flux evidence from UNKNOWN to **PARTIAL**, not PASS, because the exact 2026 long-life hierarchical surface was not tested in this geometry.

**Mobile relevance:** HIGH as partner capability lineage; exact surface/device transfer remains unproven.

Full 10Q: [B0b in Core Paper 10Q Decision Cards](paper_10q_cards_core_v01.md#b0b--ivanov-linked-02-mm-water-boiling-chf-study).

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


# E. China — VC reliability / life

## E1. Oxygen-driven copper-water VC failure mechanism

**[Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Rui Tang, Yue Tian, Ang Gao, Yang Yang — *Applied Thermal Engineering*, 2025.

**Review status:** ABSTRACT + PUBLISHER SUMMARY / DECISION REVIEW.

**Background / problem**  
A vapor chamber can lose thermal performance even when its shell, seal and visible wick geometry remain intact. For mobile/product use, the key question is whether chemical aging changes wick wetting/capillary function before obvious structural failure.

**Technical method**  
The SCUT-led team compares normal and failed copper-water VCs and combines thermal testing with wick composition/surface analysis. The failed devices retain intact external structure and wick pore geometry, allowing the study to isolate chemical/surface-state degradation.

**Main conclusion**  
The failed wick shows increased oxygen and reduced copper fraction. Copper oxidation changes the wick from hydrophilic toward hydrophobic behavior; capillary pressure can move from positive to negative, reducing return flow and sharply increasing evaporation thermal resistance. The authors identify oxygen as the principal cause of the observed thermal-performance failure and point to the vacuum process as a key oxygen-control step.

**What we learn for our insight**  
This materially weakens any broad claim that MPEI uniquely understands two-phase reliability. Chinese academia already has a product-relevant **copper-water VC failure-mechanism** line linked to vacuum-process quality.

The residual MPEI value becomes narrower:
> actual multi-year operation of a specific hierarchical evaporator surface, with morphology and capillary-aging observations.

**Mobile relevance:** HIGH comparator for product-path reliability.

---

## E2. Accelerated lifetime prediction for copper-water VCs

**[Research on a rapid prediction method for the service life of copper-water vapour chambers](https://doi.org/10.1016/j.applthermaleng.2026.131067)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Yue Tian, Yang Yang, Fan Yang — *Applied Thermal Engineering*, 2026.

**Review status:** ABSTRACT + PUBLISHER FULL-PREVIEW REVIEW.

**Background / problem**  
Actual VC service-life testing is too slow for product development. A practical method needs to relate accelerated aging to a physically meaningful degradation marker.

**Technical method**  
Copper-water VCs are subjected to high-temperature accelerated aging at **150–200 °C**, combined with XPS/EDS and failure analysis. The team uses wick oxygen content as the degradation characteristic and constructs an Arrhenius-based lifetime relation.

**Main conclusion**  
Oxygen-driven wick oxidation is again identified as the dominant thermal-failure mechanism. Public abstract data report:
- when wick-surface oxygen is around **1%**, predicted operating life can be **>=13 years at 80 °C**;
- oxygen content versus predicted service life follows a quadratic relation with **R² ≈ 0.98**;
- reported prediction error is approximately **8%**.

**What we learn for our insight**  
China now has not only cycle/reliability data but also a **process-linked life-prediction methodology** for copper-water VCs.

Therefore the MPEI 42-month result should be presented as:
- unusual **actual multi-year same-surface operation**;
- useful surface-aging/capillary evidence;
- complementary to China's accelerated product-reliability engineering.

It should **not** be presented as "China lacks long-term VC reliability research."

**Mobile relevance:** HIGH comparator for sealed copper-water product reliability.

---

## E3. Wick-oxidation detection / grading

**[Detection and grading of oxidation for copper–water heat pipe wicks based on the machine learning methods](https://doi.org/10.1016/j.applthermaleng.2025.126437)** — Xiaojun Guo, Yong Li, Guangwen Huang, Rui Tang, Fan Yang, Zhifeng Xin, Bowen Wu — *Applied Thermal Engineering*, 2025.

**Review status:** ABSTRACT / PUBLISHER REVIEW.

**Background / problem**  
Wick oxidation can reduce heat-pipe/VC performance, but production inspection needs a rapid and repeatable way to classify oxidation state.

**Technical method**  
The team creates naturally oxidized copper-water heat-pipe wick samples at different oxidation levels, defines an oxidation grading standard, builds color/image datasets and applies machine-vision / machine-learning classification.

**Main conclusion**  
The paper proposes a production-oriented oxidation-grading workflow intended to improve rapid inspection efficiency and reliability.

**What we learn for our insight**  
The Chinese comparator includes not only device performance but **manufacturing QA around surface aging**. This further narrows MPEI's differentiation to the physics/history of long-running hierarchical surfaces rather than generic oxidation/reliability knowledge.

**Mobile relevance:** MEDIUM-HIGH as process/QA comparator.

---

# F. China — electronics cooling-fan aeroacoustics

## F1. Cooling-fan acoustic source imaging

**[Experimental Analysis of Cooling Fan Noise by Wavelet-Based Beamforming and Proper Orthogonal Decomposition](https://doi.org/10.1109/ACCESS.2020.3006483)** — Sicong Liang, Wangqiao Chen, Rhea P. Liem, Xun Huang — *IEEE Access*, 2020.

**Review status:** OPEN-ACCESS / TECHNICAL REVIEW.

**Background / problem**  
Acoustic-source imaging becomes difficult as cooling fans become small and their important tones/high-frequency sources approach array-resolution limits.

**Technical method**  
A practical CPU cooling fan is measured in an anechoic environment. The authors combine wavelet-based beamforming with proper orthogonal decomposition (POD) to separate acoustic-image modes. The public experiment uses a **90 mm** AMD CPU fan at 2650 and 3960 rpm.

**Main conclusion**  
The method can decompose cooling-fan acoustic source modes and improve interpretation beyond conventional beamforming. The measured spectra include BPF/harmonics, subharmonic tones and broadband/high-frequency turbulence contributions.

**What we learn for our insight**  
China already has academic capability in **cooling-fan source imaging and modal decomposition**, so Russian aeroacoustic methods are not unique at category level.

But this test is still much larger/slower than a phone internal centrifugal fan. The phone-scale problem remains:
- ~18–25 mm class;
- ~20k rpm;
- highly confined inlet/outlet;
- close structural/acoustic coupling.

**Mobile relevance:** MEDIUM comparator; strong method relevance, weak direct phone-size match.

---

## F2. Electronic cooling-fan narrow-space / duct acoustic control

**[Aerodynamic Noise Characteristics of Axial Flow Fan in Narrow Space and Noise Reduction Based on Flow Control](https://doi.org/10.1115/1.4063127)** — Zonghan Sun, Pengfei Chai, Jie Tian, Zhaohui Du, Hua Ouyang — *Journal of Engineering for Gas Turbines and Power*, 2023.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

**Background / problem**  
Installed electronics fans do not operate in free field: obstacles and narrow spaces change flow rate, recirculation, source strength and tonal/broadband noise.

**Technical method**  
The SJTU team studies cooling fans under narrow-space / power-module installation using experiment and CFD/aeroacoustic analysis, linking downstream obstruction and inlet/recirculation distortion to acoustic behavior.

**Main conclusion**  
Confinement can materially increase noise and alter flow behavior; source-oriented flow control can reduce the acoustic penalty.

**What we learn for our insight**  
The domestic academic baseline already covers the core conceptual problem we hoped Russian aeroacoustics might uniquely solve:
> installed-condition fan noise under confinement.

Therefore a Russia collaboration must move to a much narrower gap:
**phone-scale centrifugal microfan source diagnosis at equal cooling / package / ingress constraints.**

**Mobile relevance:** MEDIUM-HIGH method comparator; dimensions are not yet smartphone-class.

---

## F3. Short-duct tonal/broadband reduction for electronic cooling fans

**[Experimental Study on Aerodynamic Noise Reduction of In-series Axial Cooling Fans for Electronic Devices](https://doi.org/10.3901/JME.2022.22.406)** — Zonghan Sun, Jie Tian, Zhaohui Du, Hua Ouyang — *Journal of Mechanical Engineering*, 2022.

**Review status:** FULL ABSTRACT + JOURNAL RECORD REVIEW.

**Technical method / result**  
Microphone-array measurements compare electronic-device axial fans connected in series with different intermediate connectors. At rated speed, a short-duct connector reduced reported tonal noise by about **1.2 dB(A)** and broadband noise by about **0.5 dB(A)** versus the square connector.

**What we learn for our insight**  
China has a coherent **electronic-cooling fan + duct + tonal-noise** academic lineage, not merely large wind-tunnel aeroacoustics.

The open question is scale/integration, not basic method availability.

**Mobile relevance:** MEDIUM comparator.

---



# H. Country pressure-test — thin film / LHP

## H1. Kutateladze 12.5 μm slit two-phase-flow experiment

**[An experimental investigation of adiabatic two-phase flow patterns in a slit microchannel with 1:800 aspect ratio](https://doi.org/10.1016/j.expthermflusci.2024.111153)** — Yu.A. Dementyev, E.A. Chinnov, D.Yu. Kochkin, F.V. Ronshin *et al.* — *Experimental Thermal and Fluid Science*, 2024.

**Review status:** PUBLISHER ABSTRACT + METHODS REVIEW.

**Background / problem**  
Two-phase flows below ~100 μm confinement are poorly characterized, especially in slit channels with extremely high aspect ratio. Such flow-regime changes matter if future coolers compress vapor/liquid transport into very thin structures.

**Technical method**  
The team fabricated a **12.5 μm-high × 10 mm-wide** slit microchannel (1:800 aspect ratio) using photolithography, anisotropic etching and anodic bonding. Five liquids were tested over broad liquid/gas superficial-velocity ranges. Surface roughness/contact angle and flow patterns were characterized.

**Main conclusion**  
Flow-pattern transitions depend strongly on surface tension, wettability, Saffman–Taylor instability and transverse pressure-gradient effects. The authors report flow features not typical of larger channels.

**What we learn for our insight**  
This is a stronger Russia signal than generic "microchannel cooling": it demonstrates experimental access to **extreme-confinement two-phase instability physics**.

But it is adiabatic and not a complete cooler. The phone value is mechanism/diagnostics, not direct thermal performance.

**Mobile relevance:** HIGH-MECHANISM / LOW-SYSTEM.

---

## H2. Kutateladze shear-driven thin-film CHF methodology

**[Shear-Driven Liquid Films in a Channel under Intense Local Heating: Methodology and Critical Heat Flux Results](https://doi.org/10.1615/InterfacPhenomHeatTransfer.2022045099)** — D.V. Zaitsev, V.V. Belosludtsev, E.M. Tkachenko, Fang Ye, Hang Guo, V.V. Cheverda, O.A. Kabov — *Interfacial Phenomena and Heat Transfer*, 2022.

**Review status:** PUBLISHER RECORD + TECHNICAL REVIEW.

**Background / problem**  
Shear-driven thin liquid films can potentially remove high local heat flux while keeping the liquid layer very thin, but dry spots/film breakdown and measurement uncertainty become dominant.

**Technical method**  
A flat micro/minichannel with intense local heating is used to validate measurement methodology from convective heat transfer through shear-driven film operation and CHF.

**Main conclusion**  
The work supports a high-CHF potential for shear-driven films and builds a methodology around failure/breakdown rather than only nominal HTC.

**What we learn for our insight**  
The valuable Russian line is **film-instability / dry-spot / breakdown physics under gas shear**, not "thin-film cooling" in general.

Cross-border attribution:
Beijing University of Technology coauthors participate in this paper. Under the current attribution rule this is **joint capability / knowledge-transfer evidence**. It does not by itself erase the Russian capability signal because Kutateladze has the pre-existing shear-film lineage/platform; independent China capability should be evidenced separately.

**Mobile relevance:** MEDIUM-HIGH mechanism / HIGH system-overhead risk.

---

## H3. China capillary-driven thin-film boiling baseline

**[Enhanced capillary-driven thin film boiling on cost-effective gradient wire meshes for high-heat-flux applications](https://doi.org/10.1016/j.expthermflusci.2023.111018)** — Feng Zhou, Jingzhi Zhou, Xunfeng Li, Qihan Chen, Xiulan Huai — *Experimental Thermal and Fluid Science*, 2023.

**Review status:** PUBLISHER ABSTRACT + TECHNICAL REVIEW.

**Background / problem**  
Capillary-driven thin-film boiling faces a capillary-pressure versus permeability/vapor-escape trade-off.

**Technical method**  
Four wire-mesh wick structures are compared using DI water; a gradient-porosity composite mesh is diffusion-bonded and tested under atmospheric/reduced-pressure conditions.

**Main conclusion**  
The gradient wick reports **202.8 W/cm² CHF** and ~**103–122 kW/(m²·K)** maximum HTC depending condition/reporting. The benefit is attributed to balancing capillary force, permeability, bubble separation and liquid replenishment.

**What we learn for our insight**  
China is already strong in passive thin-film / wick mechanism design. This kills any Russia thesis based merely on "thin film" or "capillary film boiling."

**Mobile relevance:** HIGH comparator for passive two-phase structures.

---

## H4. China ultrahigh-flux thin-film boiling baseline

**[Manipulating thin film boiling to achieve record-breaking high heat flux](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125308)** — Yuxiang Zhang, Xuan Zhao, Jiahua Li, Qingyang Wang, Dawen Zhong, Deyin Zheng, Xiaoze Du, Lin Chen — *International Journal of Heat and Mass Transfer*, 2024.

**Review status:** PUBLISHER ABSTRACT + TECHNICAL REVIEW.

**Background / problem**  
Thin-film boiling can theoretically sustain extreme heat flux, but membrane strength, liquid pressure and experimental operating path constrain the achievable CHF.

**Technical method**  
The team strengthens nanoporous thin-film-boiling samples and manipulates liquid pressure/heating power using staged/asynchronous and near-simultaneous operating paths.

**Main conclusion**  
A reported **2074 W/cm² CHF** is achieved. This is a very strong China-side high-flux thin-film benchmark.

**What we learn for our insight**  
Headline heat flux cannot be used to justify Kabov as a Russia advantage.

The residual Kabov hypothesis must be:
**shear-driven free-surface instability control under extreme confinement**, not record heat flux.

**Mobile relevance:** MEDIUM as device architecture; VERY HIGH as comparator pressure.

---

# I. Country pressure-test — LHP

## I1. Maydanik/Chernysheva serviceability conditions

**[An Analysis of the Key Serviceability and Efficiency Conditions of Loop Heat Pipes](https://doi.org/10.56304/S0040363625701152)** — M.A. Chernysheva, Y.F. Maydanik — *Thermal Engineering*, 2025.

**Review status:** PUBLISHER ABSTRACT / DECISION REVIEW.

**Background / problem**  
LHP operation depends on pressure-loss, capillary pressure, heat leak, wick/working-fluid properties and the thermodynamic relation among evaporator, compensation chamber and condenser.

**Technical method**  
The paper analytically formulates key LHP serviceability and efficiency conditions using the established thermodynamic/capillary framework.

**Main conclusion**  
It provides a current synthesis of operating conditions and design relationships from one of the foundational LHP groups.

**What we learn for our insight**  
This confirms Maydanik's deep theoretical lineage. It does **not** by itself establish a current Russia-only control point, particularly because Chinese teams now experimentally study the same startup/pressure/capillary/failure space.

**Mobile relevance:** MEDIUM mechanism / LOW differentiation after China comparison.

---

## I2. China 1 mm dual-evaporator LHP for laptops

**[Study on heat transfer characteristics of a dual-evaporator ultra-thin loop heat pipe for laptop cooling](https://doi.org/10.1016/j.applthermaleng.2024.122395)** — Xuehao He, Wentao Yan, Shuangfeng Wang — *Applied Thermal Engineering*, 2024.

**Review status:** PUBLISHER ABSTRACT + TECHNICAL REVIEW.

**Technical method / result**  
A **1 mm-thick** dual-evaporator LHP targets spatially separated CPU/GPU heat sources. It is tested under equal/unequal loads and orientations.

Reported:
- successful startup from 5 W–5 W to 20 W–20 W horizontally;
- max ~22 W–22 W;
- minimum thermal resistance ~0.69 °C/W;
- orientation and heat-leak effects quantified.

**What we learn for our insight**  
China already combines **miniaturization + multi-source routing** in a directly small-electronics architecture. This materially weakens Maydanik as a country-level differentiation thesis.

**Mobile relevance:** HIGH comparator.

---

## I3. China explicit multi-source LHP failure-boundary experiment

**[Experimental Study on a Dual Compensation Chamber Multi-Evaporator Loop Heat Pipe System](https://doi.org/10.3390/eng7020084)** — Deqing Huang, Yuankun Zhang, Huajie Li, Chunsheng Guo — *Eng*, 2026.

**Review status:** FULL OPEN-ACCESS ARTICLE / DECISION REVIEW.

**Technical method**  
A dual-compensation-chamber, multi-evaporator LHP is tested across charge ratio, startup interval and heat loads to determine hydrodynamic stability and failure limits.

**Main conclusion**  
Reported:
- optimal charge ratio ~75%;
- startup interval ~8–10 min;
- stable total heat load ~270 W;
- single-stage failure threshold around **70 W**;
- failure attributed to cumulative pressure drop exceeding capillary pumping ability / insufficient liquid supply.

**What we learn for our insight**  
This directly overlaps the "multi-source operating-limit / capillary-failure physics" argument previously used to preserve Maydanik as a Russia difference.

Maydanik remains an expert/knowledge reserve, but the broad current country-level differentiation is no longer defensible.

**Mobile relevance:** LOW direct scale / HIGH mechanism comparator.


# J. Foundational math-physics pressure-test

## J1. Russia — 2026 exact analytical evaporative-convection model

**[The effect of gas flow rate on evaporative convection in a multicomponent bilayer system subjected to linear boundary heating](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128594)** — Victoria B. Bekezhanova, Irina V. Stepanova — *International Journal of Heat and Mass Transfer*, 2026.

**Review status:** PUBLISHER ABSTRACT + METHODS / DISCUSSION REVIEW.

**Background / problem**  
Coupled liquid–gas evaporation with thermocapillary, shear and concentration effects is difficult to interpret using black-box simulation alone. The engineering need is to identify which variables control heat/mass transfer and stability before costly experiments.

**Technical method**  
The ICM SB RAS team derives an exact analytical solution of a simplified Navier–Stokes + heat/mass-transfer system for a binary liquid / gas-vapor bilayer. Experimental gas flow is used as an integral condition, enabling inverse determination of other operating parameters.

**Main conclusion**  
The model predicts how gas pumping intensifies evaporation, alters thermocapillary action and heat removal, and shows qualitative agreement with experimental data. The paper explicitly positions the exact solution as a benchmark and preliminary optimization tool.

**What we learn**  
This is the strongest current evidence that a Russian foundational advantage may exist in **interpretable exact-solution modeling tied to thermal experiments**.

It does not prove direct phone value; the geometry and flow architecture remain non-mobile.

**Mobile relevance:** MEDIUM mechanism / potentially HIGH experiment-design leverage.

---

## J2. Russia — exact-solution stability threshold

**[Application of a Partially Invariant Exact Solution of the Thermosolutal Convection Equations for Studying the Instability of an Evaporative Flow in a Channel Heated from Above](https://doi.org/10.3390/sym15071447)** — Victoria B. Bekezhanova, Olga N. Goncharova — *Symmetry*, 2023.

**Review status:** OPEN-ACCESS / TECHNICAL REVIEW.

**Background / problem**  
Evaporation, gas shear, buoyancy and thermocapillarity can generate several competing instability modes. A useful theory must expose the stability boundary and dominant mode.

**Technical method**  
Partially invariant exact solution + linear stability / spectral analysis of a two-layer evaporative minichannel.

**Main conclusion**  
The work derives stability thresholds and identifies oscillatory cellular disturbances; boundary heating can stabilize the basic flow under defined conditions.

**What we learn**  
The Russian signal is not merely “strong math”; it is a specific ability to convert coupled interfacial physics into **interpretable failure/stability boundaries**.

**Mobile relevance:** MEDIUM; strongest link is to Kabov/Chinnov film-instability work.

---

## J3. China — independent 3D long-wave film-instability theory

**[Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film](https://doi.org/10.3390/fluids9060143)** — Weiyang Jiang, Ruiqi Huang, Qiang Yang, Zijing Ding — *Fluids*, 2024.

**Review status:** OPEN-ACCESS / TECHNICAL REVIEW.

**Background / problem**  
Evaporation/condensation changes long-wave instability and nonlinear evolution of thin films.

**Technical method**  
HIT / CAS authors derive a nonlinear long-wave model for a 3D evaporating/condensing film and analyze its stability/dynamics.

**Main conclusion**  
China independently has formal interfacial-stability mathematics, not only CFD or empirical experiments.

**What we learn**  
This kills a broad claim that nonlinear thin-film stability theory is uniquely Russian.

Residual Russia differentiation must be narrower: **continuous exact/group-invariant evaporative-convection solutions plus experiment-informed closure**.

**Mobile relevance:** MEDIUM comparator.

---

## J4. China — experimentally validated phase-change numerical model

**[Development and validation of finite-interface-heat-flux phase change model](https://doi.org/10.7527/S1000-6893.2026.32977)** — Zicheng Tang, Zeran Han, Dan Zheng, Ting Ma — *Acta Aeronautica et Astronautica Sinica*, 2026.

**Review status:** OFFICIAL JOURNAL FULL ABSTRACT / METHODS SUMMARY.

**Background / problem**  
Interface-resolved flow-boiling simulation is sensitive to empirical phase-change closures.

**Technical method**  
XJTU converts interfacial heat flux into finite-interface source terms and validates the model across Stefan, pool-boiling, microchannel-boiling and flow-boiling experiment cases.

**Main conclusion**  
The reported model shows low error on benchmark/interface quantities and meaningful agreement with experiment.

**What we learn**  
China is strong in **engineering-oriented mathematical modeling + validation**. Russia cannot claim broad superiority in phase-change numerics.

**Mobile relevance:** MEDIUM-HIGH comparator for model-to-design translation.

---

## J5. China — inverse thermal diagnostics for integrated circuits

**[Heat source field inversion and detection based on physics-informed deep learning](https://doi.org/10.1016/j.icheatmasstransfer.2025.108824)** — Yimeng Chi, Mingliang Li, Rui Long *et al.* — *International Communications in Heat and Mass Transfer*, 2025.

**Review status:** PUBLISHER ABSTRACT / DECISION REVIEW.

**Background / problem**  
Electronics thermal diagnosis often needs to infer unknown heat-source positions, shapes and powers from limited thermal information.

**Technical method**  
HUST applies physics-informed neural networks to multi-source heat-source-field inversion.

**Main conclusion**  
Public results report >90% source shape/position similarity in tested multi-source configurations.

**What we learn**  
For inverse thermal problems with direct electronics relevance, the public China signal is stronger than the Russian evidence recovered in this pass.

Therefore **inverse thermal diagnostics is not a Russia advantage**.

**Mobile relevance:** HIGH comparator.

---



## J6. Current Kutateladze–Lavrentyev microelectronic film-model link

**[Heat Transfer and Fluid Dynamics Modeling in Shear-Driven Liquid Film Cooling System of Microelectronic Equipment](https://doi.org/10.1134/S0015462825604279)** — O.A. Kabov, V.V. Kuznetsov — *Fluid Dynamics*, 2025/2026 publication cycle.

**Review status:** PUBLISHER ABSTRACT / DECISION REVIEW.

**Background / problem**  
A shear-driven liquid film can offer high local heat removal, but gas pressure, interfacial shear, Marangoni forces and film deformation are strongly coupled in microchannels.

**Technical method**  
The paper combines an exact linearized solution with thin-layer numerical modeling for a locally heated gas–liquid film channel. Public metadata identifies Kabov with the Russian thermophysics line and Kuznetsov with the Lavrentyev Institute of Hydrodynamics.

**Main conclusion**  
The model shows that in a microchannel the film deformation can materially feed back into gas-phase pressure/velocity; local heating changes interfacial stress and flow structure.

**What we learn for our insight**  
This paper is important for two reasons:

1. it continues the microelectronic shear-film mechanism line;
2. it provides **current direct evidence of a Kutateladze–Lavrentyev theory/model collaboration**, rather than a purely inferred Siberian cluster.

It does not establish a complete multi-institute consortium, nor phone product feasibility.

**Mobile relevance:** HIGH for mechanism/model collaboration; LOW-MEDIUM for direct product readiness.



# K. Pavlenko dryout / rewetting country pressure test

## K1. Russia — dielectric dry-spot dynamics and boiling crisis

**[Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855)** — Anton Surtaev, Ivan Malakhov, Pavel Perminov, Matvey Polovnikov, Aleksandr N. Pavlenko — *International Journal of Heat and Mass Transfer*, 2026.

**Review status:** PUBLISHER FULL ABSTRACT / METHODS / CONCLUSIONS REVIEW.

**Background / problem**  
CHF in dielectric liquids varies strongly with heater material, thickness and surface state. Integral CHF alone does not reveal why a reversible dry patch becomes an irreversible runaway region.

**Technical method**  
Kutateladze/NSU combines high-speed IR thermography with reflected-light/internal-reflection-style phase visualization. ML segmentation is used to quantify dry-spot density, contact-line length, void fraction and size distribution up to CHF.

**Main conclusion**  
Near CHF, dry-spot statistics become bimodal and large long-lived dry regions appear before irreversible dryout. Irreversible dry-spot propagation is measured and compared with analytical thermal-wave models. The paper argues that boiling crisis is a coupled two-phase-hydrodynamic + dry-spot thermal-stability problem.

**What we learn for our insight**  
This is stronger than a surface-enhancement paper. It demonstrates a current Russian **failure-mechanism diagnostic capability** in dielectric fluids.

Its weakness is geometry: it is not a <0.5 mm sealed phone VC.

**Mobile relevance:** HIGH mechanism / MEDIUM transfer.

---

## K2. China — capillary-fed dryout degradation + steam-induced rewetting

**[Hydrophilicity degradation and steam-induced rewetting during capillary-fed boiling](https://doi.org/10.1016/j.expthermflusci.2023.111030)** — Jiangyou Long, Junwei Wu, Yujun Zhou, Xiaozhu Xie — Guangdong University of Technology — 2024.

**Review status:** PUBLISHER ABSTRACT + METHODS/CONCLUSIONS REVIEW.

**Background / problem**  
Capillary-fed evaporators can lose boiling limit during repeated use even when the initial wick is superhydrophilic.

**Technical method**  
A laser-fabricated grooved wick (~200 μm upper width, ~150 μm depth) is repeatedly boiled. Wettability and capillary behavior are tracked after dryout.

**Main conclusion**  
After five cycles, CHF drops from ~145.0 to ~70.1 W/cm². The surface becomes strongly hydrophobic (>140° static contact angle) due to airborne-organic adsorption after dryout. Subsequent liquid supply begins through **steam-induced rewetting**. A microgroove–nanoparticle composite wick mitigates the degradation.

**What we learn for our insight**  
China independently owns direct:
- dryout;
- rewetting;
- repeated-cycle wetting degradation;
- ultrathin-device wick relevance.

Therefore broad Russia dryout/rewetting uniqueness is **killed**.

**Mobile relevance:** VERY HIGH comparator.

---

## K3. China — superhydrophilic copper mesh capillary-film boiling

**[Enhanced capillary-driven thin film boiling through superhydrophilic mesh wick structure](https://doi.org/10.1016/j.ijthermalsci.2025.109782)** — Longsheng Lu, Bo Tao, Shu Ting Yang, Yilin Zhong, Yingxi Xie — South China University of Technology — 2025.

**Review status:** PUBLISHER ABSTRACT / DECISION REVIEW.

**Background / problem**  
Mesh wicks in vapor chambers fail when capillary supply cannot overcome liquid/vapor resistance at the evaporator.

**Technical method**  
Copper mesh is chemically treated to grow nanowires, increasing superhydrophilicity and reducing bubble adhesion.

**Main conclusion**  
Public results report:
- wicking coefficient +~33.8%;
- volumetric flow +~53.7%;
- CHF +~75.8%;
- HTC +~166.7% relative to untreated mesh under the tested conditions.

**What we learn for our insight**  
Generic:
> modified mesh + better capillary supply + delayed dryout

is already a strong China capability.

Pavlenko cannot be differentiated merely by modified mesh.

**Mobile relevance:** HIGH comparator.

---

## K4. China — pore-scale capillary dryout boundary

**[Three-dimensional pore-scale simulations of thin-film evaporation on micro-pillar wicks](https://doi.org/10.1063/5.0271431)** — Junyang Li, Shuai Gong, Chaoyang Zhang, Ping Cheng — Shanghai Jiao Tong University — *Physics of Fluids*, 2025.

**Review status:** PUBLISHER ABSTRACT / METHODS REVIEW.

**Background / problem**  
Capillary evaporators fail when evaporation demand exceeds liquid supply; the dryout boundary depends on wick geometry and wettability.

**Technical method**  
3D pore-scale phase-change lattice Boltzmann simulation tracks meniscus recession and dryout; a thermal-fluidic analytical dryout model is used as a cross-check.

**Main conclusion**  
Wettability, pillar pitch and height change the dryout heat flux primarily through wickability / volumetric liquid supply. Analytical predictions agree with the simulated dryout limit.

**What we learn for our insight**  
China also has explicit **dryout-boundary modeling**, not only experiments and performance optimization.

This further narrows Russia's residual value toward diagnostic specificity in dielectric-boiling crisis.

**Mobile relevance:** HIGH mechanism comparator / MEDIUM direct device evidence.

---

## K5. China — HFE-7100 confinement comparator

**[Coupled effects of surface structuring and capillary-length-scale confinement on pool boiling heat transfer and critical heat flux of HFE-7100](https://doi.org/10.1016/j.applthermaleng.2026.133219)** — Er Shi, Xinxiang Zhong, Yucheng Li, Qi Peng, Changwei Jiang — Changsha University of Science and Technology — 2026.

**Review status:** PUBLISHER ABSTRACT / DECISION REVIEW.

**Technical method / result**  
HFE-7100 pool boiling is tested on smooth, microchannel and hierarchical micro/nano surfaces under unconfined and 5/3/**1 mm** gaps.

At 1 mm:
- hierarchical surface peak HTC ~26.62 kW/(m²·K);
- it retains ~71% of unconfined CHF;
- simpler surfaces retain ~56–57%.

**What we learn for our insight**  
Independent China is already pushing **dielectric boiling + confinement + structured surface + CHF deterioration**.

Pavlenko still has a more explicit crisis-mode/dry-spot diagnostic line, but China is closer on geometry.

**Mobile relevance:** MEDIUM-HIGH comparator.


# L. MPEI multi-year engineered-surface aging pressure test

## L1. Russia — 42-month hierarchical evaporator surface

**[Long-term operational stability of a hierarchical evaporator surface in a two-phase thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.

**Review status:** PUBLISHER ABSTRACT + METHODS / CONCLUSIONS REVIEW.

**Background / problem**  
Most enhanced boiling/surface papers demonstrate short-term performance. The harder question is whether an engineered capillary/boiling surface changes function over real calendar time.

**Technical method**  
A microgroove + Al2O3 nanoparticle hierarchical evaporator was operated in an R410A two-phase thermosyphon over a **42-month** calendar-time campaign with periodic steady-state checks and post-operation surface/capillary characterization.

**Main conclusion**  
The modified thermosyphon retained comparatively stable integral thermal performance (~0.015 K/W reported, about 3× lower than the smooth reference in that system) while capillary imbibition showed aging/degradation and surface-state changes were examined after long operation.

**What we learn**  
The unique value is not generic reliability. It is **real multi-year observation of one engineered functional evaporator surface**, including the possibility that capillary-state degradation can emerge before obvious integral thermal failure.

**Mobile relevance:** MEDIUM mechanism / LOW direct geometry.

---

## L2. China — oxygen-driven copper-water VC failure

**[Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619)** — Guo, Li, Zhou *et al.* — *Applied Thermal Engineering*, 2025.

**Technical method / result**  
Failed copper-water VCs were compared with normal devices. Structural integrity remained intact, but wick oxygen content increased and copper transformed toward Cu2O/CuO. The wick changed from hydrophilic toward hydrophobic, capillary pressure deteriorated, liquid return weakened and evaporation thermal resistance increased.

**What we learn**  
China has very strong **product-path failure physics** and vacuum/oxygen process understanding.

This paper is more device-relevant than MPEI, but it is a failure-analysis study rather than a prospective multi-year engineered-surface campaign.

**Mobile relevance:** VERY HIGH comparator.

---

## L3. China — accelerated VC lifetime prediction

**[Research on a rapid prediction method for the service life of copper-water vapour chambers](https://doi.org/10.1016/j.applthermaleng.2026.131067)** — Guo, Li, Zhou *et al.* — *Applied Thermal Engineering*, 2026.

**Technical method / result**  
Copper-water VCs undergo **150–200 °C high-temperature accelerated aging**, combined with XPS/EDS failure analysis and lifetime modeling.

**What we learn**  
China is strong in accelerated lifetime engineering. But an Arrhenius-type predicted lifetime is not the same evidence type as **42 months of actual calendar-time two-phase operation**.

**Mobile relevance:** VERY HIGH product-reliability comparator.

---

## L4. China — 0.7 mm mobile mLHP accelerated aging

**[A thin and lightweight miniature loop heat pipe for cooling mobile electronic devices](https://doi.org/10.1016/j.device.2025.100783)** — Cui, You, Ma *et al.* — *Device*, 2025.

**Technical method / result**  
A 0.7 mm, 3.95 g mLHP targeting mobile electronics was demonstrated, with **30 days at 90 °C** accelerated aging and stable post-aging performance.

**What we learn**  
China is clearly closer on form factor and productization. It does not duplicate the MPEI multi-year surface-state dataset.

**Mobile relevance:** DIRECT / HIGH.
# G. Synthesis for our project

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

