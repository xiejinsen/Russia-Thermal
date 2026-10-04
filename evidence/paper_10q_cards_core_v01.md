# Core Decision-Grade Papers — 10Q Decision Cards v0.1

Last reviewed: 2026-10-04

## How to use this file

This is the **deep-reading layer** behind:
- [Human-Readable Bibliography](readable_bibliography.md)
- [Decision-Grade Paper Briefs](paper_briefs_decision_grade.md)

The cards follow:
[Mobile Thermal Insight — Paper & Patent 10Q Method](mobile_thermal_insight_10q_method.md)

The purpose is not to restate abstracts. It is to answer:
> does this evidence change our mobile/chip thermal technology, partner, PoC or IP decision?

Evidence labels:
- **Source fact** — directly supported by paper/publisher record.
- **Analyst inference** — our interpretation.
- **Unknown / partner request** — not closed by public evidence.

---

# A. Pavlenko / Kutateladze

## A1 — Electrochemically modified metal mesh in HFE-7100

**[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1 — What problem?
**Source fact:** improve boiling heat transfer from a metal mesh in a thin HFE-7100 layer.

**Mobile mapping:** a phone VC also needs liquid replenishment and delayed dryout at a very thin evaporator. The relevant mapping is **surface modification of an existing wick**, not the original open/thin-layer apparatus.

### Q2 — Is it genuinely new for our target?
The general idea “modify a wick surface to improve boiling/capillarity” is **not new** versus modern China/global UTVC work.

Potentially differentiated element:
- dynamic hydrogen-bubble electrochemical modification;
- the team’s dielectric-boiling / dryout know-how.

Therefore novelty for us is **process + failure-physics know-how**, not “modified mesh.”

### Q3 — What hypothesis is being tested?
**Analyst reconstruction:**
> adding a porous/rough electrochemical microstructure to the mesh increases active nucleation / wetting behavior enough to raise boiling HTC without destroying liquid supply.

### Q4 — What capability lineage matters?
Lineage:
Pavlenko / Shvetsov / Zhukov boiling work
→ modified mesh
→ dielectric-fluid thin-layer boiling
→ current Kutateladze low-temperature thermophysics capability
→ relevant thin-surface background IP (RU2793671C2).

Partner signal:
**strong** — this is part of a coherent research program, not an isolated paper.

### Q5 — What is the actual technical control variable?
- stainless-steel mesh;
- electrochemical modification using a dynamic hydrogen-bubble template;
- surface morphology / pore structure;
- HFE-7100 working fluid.

**Unknown / partner request:**
- exact electrolyte;
- current density / voltage;
- treatment time;
- added functional thickness;
- porosity/pore-size distribution after treatment;
- permeability penalty;
- adhesion;
- transfer to copper / 60–100 μm wire.

### Q6 — How is the experiment designed?
Publicly recovered:
- modified vs unmodified mesh;
- HFE-7100 boiling;
- multiple electrochemical treatment conditions.

The current public record is **not sufficient to reconstruct a phone-relevant manufacturing experiment**.

### Q7 — What quantitative evidence / reproducibility?
**Source fact:** best reported condition gives roughly **+81% HTC** versus the unmodified mesh in the tested setup.

Reproducibility:
**LOW–MEDIUM for external reproduction**, because the critical process window and post-process transport properties are not fully public.

### Q8 — Do results support the hypothesis?
They support:
- the treatment can materially alter boiling HTC in HFE-7100.

They do **not** prove:
- benefit in water/product fluid;
- benefit in a sealed <0.5 mm VC;
- retained permeability;
- retained benefit after vacuum/degassing/welding/cycling;
- scalability to 60–100 μm-class wick.

### Q9 — What is the real contribution/control point?
Academic:
electrochemical surface-state modification changes boiling performance.

Engineering:
a surface-only process may upgrade an existing capillary mesh.

Partner/control-point signal:
**high**, if the know-how can be transferred to phone-scale wick.

### Q10 — What should we do?
**Mobile transfer:** PLAUSIBLE, not proven.

**Partner action:** request the missing process window and pre/post permeability data.

**Smallest PoC:** same modification on matched ~100 μm and ~60–80 μm phone-relevant mesh, compared with strong modern reference.

**Success:** meaningful dryout/rewetting or evaporator-resistance improvement with acceptable permeability and process stability.

**Kill:** advantage disappears after thickness scaling or exists only in legacy HFE-7100.

**Decision:** **PROMOTE — Stage-0 Priority #1 evidence.**

---

## A2 — Effect of liquid-layer height over mesh coatings

**[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1
Problem:
how liquid inventory / layer height interacts with mesh geometry during dielectric-fluid boiling.

Mobile mapping:
a phone VC is an extreme low-inventory confinement case.

### Q2
The paper is not novel because it uses “mesh boiling”; its value is the **confinement / liquid-height sensitivity**.

### Q3
**Analyst reconstruction:**
> boiling performance on a mesh is strongly coupled to liquid depth and mesh scale; a surface result measured in deep liquid cannot be assumed to survive thin confinement.

### Q4
Same Pavlenko/Shvetsov line; reinforces partner expertise in boundary-condition sensitivity.

### Q5
Control variables:
- HFE-7100 layer height;
- stainless mesh geometry;
- wire/cell dimensions.

Publicly recovered examples include ~100 μm and ~220 μm wire classes.

### Q6
Boiling curves are compared across different liquid heights and mesh geometries.

Important limitation:
the tested confinement is still much larger than the ~0.2 mm internal channel of a strong UTVC reference.

### Q7
Quantitative value for our project is primarily **geometry evidence**, not a headline HTC number.

Reproducibility:
MEDIUM for geometry interpretation; LOW for direct phone transfer.

### Q8
The evidence strongly supports:
- liquid height and mesh geometry matter.

It does not support:
- direct use of the demonstrated mesh in a 0.4 mm VC.

### Q9
Real contribution to our insight:
**falsification of naive geometry transfer.**

### Q10
Mobile transfer:
HIGH as a constraint, LOW as a direct solution.

Smallest next PoC:
repeat the surface mechanism on a ~60–100 μm structure under ~0.2 mm-class confinement.

Kill:
if the mechanism requires wire/pores comparable to the whole vapor channel.

Decision:
**KEEP — geometry-transfer gate.**

---

## A3 — 2D-modulated capillary-porous coating

**[Heat Transfer Enhancement during Boiling in Horizontal Layers of HFE-7100 on 2D Modulated Capillary-Porous Coatings](https://doi.org/10.1016/j.applthermaleng.2024.125344)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Applied Thermal Engineering*, 2025.

**Review status:** FULL-TEXT / DEEP REVIEW.

### Q1
Problem:
raise HTC/CHF in dielectric boiling by jointly managing nucleation, liquid supply and vapor escape.

Mobile mapping:
the same three-way balance constrains ultra-thin VC evaporators.

### Q2
Novelty for our project is **not the existence of a porous coating**; China/global work already has composite/hierarchical wicks.

The useful novelty signal is:
- deliberate 2D modulation;
- interaction of geometry, material conductivity, pressure and liquid depth.

### Q3
Hypothesis:
> an optimized modulated capillary-porous topology improves boiling by balancing capillary replenishment and vapor removal better than a smooth surface.

### Q4
Lineage:
additive-manufactured porous structures
→ HFE-7100 boiling
→ Pavlenko/Shvetsov phase-change program.

Partner signal:
strong mechanism-design capability.

### Q5
Control variables:
- SLM/SLS fabricated porous geometry;
- bronze vs stainless material;
- modulation/topology;
- HFE-7100;
- pressure;
- liquid height.

### Q6
**Source facts:**
- liquid heights: 1.5, 2.5, 6, 25 mm;
- pressures: 100 and 50 kPa;
- geometry/material varied.

### Q7
**Source facts:**
- best HTC ~37.5 kW/(m²·K);
- reported CHF improvement vs uncoated surface ~193% at 100 kPa and ~257% at 50 kPa under stated conditions.

Reproducibility:
MEDIUM-HIGH for the published apparatus; LOW for direct phone embodiment.

### Q8
The results support topology-sensitive enhancement.

They do not prove:
- sub-0.5 mm operation;
- phone-compatible manufacturing thickness;
- water/product-fluid transfer.

### Q9
Strategic contribution:
**liquid-supply / vapor-escape topology know-how**.

Potential collaboration control point:
translate this topology logic into a thin wick rather than reproducing the thick AM coating.

### Q10
Mobile transfer:
PLAUSIBLE MECHANISM.

Partner action:
ask which geometric non-dimensional parameters the team believes govern transfer to extreme confinement.

PoC:
thin structured coupon / mesh with controlled liquid-return and vapor-path metrics.

Kill:
benefit disappears when structure height is reduced to phone budget.

Decision:
**KEEP — strong mechanism evidence, not direct architecture.**

---

## A4 — Black-silicon negative evidence

**[Capillary Wicking and Heat Transfer during Boiling of HFE-7100 on Black Silicon Surfaces with Different Morphologies](https://doi.org/10.1134/S1810232825700225)** — O.A. Volodin, E. Vyacheslavova, A. Baranov *et al.* — *Journal of Engineering Thermophysics*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1
Problem:
does a highly wetting micro/nanostructured surface improve boiling because it wicks liquid strongly?

### Q2
The important novelty for us is **negative evidence**, not a new surface class.

### Q3
Hypothesis:
> stronger capillary wetting should improve liquid replenishment and therefore boiling limits.

### Q4
This broadens the Kutateladze evidence base beyond metal mesh and shows the group studies **failure of surface assumptions**, not only positive demonstrations.

### Q5
Control variables:
- black-silicon morphology;
- capillary spreading/wicking;
- HFE-7100 boiling.

### Q6
Compare morphology/wetting behavior with thermal/boiling behavior.

### Q7
Key evidence:
HTC/wicking can improve without equivalent CHF improvement; wetting behavior can degrade during boiling.

Reproducibility:
MEDIUM at mechanism level.

### Q8
The evidence undermines the simplistic hypothesis:
> lower contact angle / faster capillary rise = universally better boiling.

### Q9
Real contribution:
defines **wetting-state retention under actual phase change** as a distinct engineering variable.

This is directly useful to our proposed foreground-IP thesis.

### Q10
Mobile transfer:
HIGH as a reliability principle.

PoC:
measure contact/wicking/capillary state **before and after** vacuum, sealing, boiling and cycling.

Kill:
surface loses function after the manufacturing/boiling sequence even if initial metrics are excellent.

Decision:
**PROMOTE AS NEGATIVE/FALSIFICATION EVIDENCE.**

---

# B. MPEI / Ivanov

## B0 — Nanoparticle-coating transport precursor

**[Investigation of Transport Properties of Porous Coatings from Nanoparticles of Aluminum Oxide](https://doi.org/10.1088/1742-6596/2088/1/012022)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, A.V. Lavrikov — *Journal of Physics: Conference Series*, 2021.

**Review status:** FULL-TEXT/PDF TECHNICAL REVIEW.

### Q1
Problem:
how nanoparticle composition, agglomeration and deposited amount affect capillary liquid rise in porous nanoparticle layers.

Mobile mapping:
capillary transport is relevant to wick liquid return, but the experiment itself is not a phone VC.

### Q2
The novelty is not “nanoparticles wick liquid”; the useful element is the attempt to connect **particle/agglomerate structure to transport**.

### Q3
Hypothesis:
> particle/agglomerate scale changes coating porosity and therefore capillary rise.

### Q4
This is an important lineage paper:
nanoparticle transport
→ microstructure + nanoparticle hierarchy
→ thermosyphon performance
→ 42-month durability.

It strengthens the view that MPEI has a coherent **transport + reliability** research line.

### Q5
Control variables:
- nanoparticle material;
- particle formation temperature/agglomeration;
- colloid concentration / deposited volume;
- nickel substrate.

### Q6
**Source facts:**
- 2 × 6 cm nickel substrates;
- distilled-water capillary-rise test;
- Al₂O₃, TiO₂, SiC and diamond coatings compared;
- Al₂O₃ colloid concentration range studied.

### Q7
**Source facts:**
- Al₂O₃ produced the strongest liquid rise among compared materials;
- particles obtained at 950 °C showed liquid rise ~15 mm higher than those obtained at 1200 °C;
- TiO₂ rise was ~10 mm lower than Al₂O₃;
- SiC/diamond showed only very small rise (reported <=~2 mm).

Reproducibility:
MEDIUM — process is described, but phone-scale layer thickness and permeability remain incomplete.

### Q8
The data support the importance of pore/agglomerate structure for transport.

They do not prove:
- boiling advantage;
- sealed-device advantage;
- phone-compatible thickness.

### Q9
Contribution:
evidence that MPEI can **engineer and diagnose capillary transport**, not only measure thermosyphon output.

### Q10
Mobile transfer:
PLAUSIBLE SUPPORTING EVIDENCE.

Partner action:
request actual coating thickness/porosity/permeability data for the formulations that later became thermosyphon surfaces.

PoC:
same coating families on thin copper coupon with capillary + permeability + boiling measurements.

Decision:
**KEEP — capability-lineage evidence.**

---

## B0a — 0.2 mm water-boiling microchannel / CHF precursor

**[Nanoparticle Coating of a Microchannel Surface is an Effective Method for Increasing the Critical Heat Flux](https://doi.org/10.1134/S0040601517040073)** — M.V. Shustov, Yu.A. Kuzma-Kichta, A.V. Lavrikov — *Thermal Engineering*, 2017.

**Review status:** FULL-TEXT / PUBLIC AUTHOR-COPY TECHNICAL REVIEW.

### Q1 — problem + mobile/chip mapping
Problem: boiling crisis limits heat removal in compact two-phase microchannels.

Mapping: a **0.2 mm-high water-boiling channel** is much closer to the vertical scale of a modern UTVC internal space than MPEI's later full thermosyphon, although it is a pumped/flow microchannel rather than a sealed phone VC.

### Q2 — novelty vs strong baseline
The useful novelty for this project is not generic nanoparticle coating. It is evidence that an MPEI/Kuzma-Kichta coating can move the **CHF boundary inside a 0.2 mm channel**.

Modern China/global UTVCs are stronger device baselines; this paper is a mechanism/partner-capability bridge.

### Q3 — falsifiable hypothesis
> Al2O3 coating changes near-wall liquid/vapor behavior enough to delay heat-transfer crisis in a very thin water-boiling channel.

Falsified if matched coated/uncoated channels show no reproducible CHF shift under controlled geometry/flow.

### Q4 — lineage
Kuzma-Kichta and Lavrikov connect directly to the later MPEI nanoparticle/coating program. The work precedes Ivanov's current hierarchical thermosyphon line.

### Q5 — actual control variable
- Al2O3 nanoparticle coating vs smooth heating surface;
- water;
- microchannel mass flow / boiling state.

### Q6 — experiment design
**Source facts:**
- water;
- channel ~0.2 mm high × 3 mm wide × 13.7 mm long;
- smooth vs Al2O3-coated surface;
- thermal measurements + high-speed imaging.

### Q7 — quantitative evidence + reproducibility
**Source fact:** public full text reports boiling crisis at approximately **15–50% higher CHF** for the coated channel over the tested cases.

Important boundary:
this result is configuration-specific and not a sealed-VC result.

### Q8 — what it proves / does not prove
Proves:
- thin-channel water boiling;
- coating can shift CHF under the tested flow-boiling conditions.

Does not prove:
- passive capillary return;
- <0.5 mm sealed VC;
- long-term coating retention;
- compatibility with the later 100 μm-radius hierarchical grooves.

### Q9 — contribution + partner/IP control point
Partner value:
knowledge linking nanoparticle surface state to crisis behavior in a thin channel.

Potential joint control point:
phone-scale liquid-supply / dryout control that combines thin geometry with long-term coating stability.

### Q10 — next action / PoC / kill
Partner action:
ask whether the same coating family/process was ever reproduced on copper or passive capillary devices.

Smallest PoC:
matched 0.2–0.4 mm confined water test with current MPEI coating and strong modern reference.

Success:
reproducible dryout/CHF or rewetting shift without unacceptable vapor-space/permeability penalty.

Kill:
benefit disappears when current hierarchical geometry is scaled into the phone budget.

**Decision:** **PROMOTE AS HIGH-FLUX / THIN-CHANNEL LINEAGE; NOT PHONE PROOF.**

---

## B0b — Ivanov-linked 0.2 mm water-boiling CHF study

**[Heat Transfer Crisis Investigation in a Microchannel with and without Nanoparticles Coating](https://doi.org/10.1088/1742-6596/1683/2/022087)** — Yu.A. Kuzma-Kichta, A.V. Lavrikov, M. Shustov, E.A. Kustova, N.S. Ivanov *et al.* — *Journal of Physics: Conference Series*, 2020.

**Review status:** FULL-TEXT / OPEN-ACCESS TECHNICAL REVIEW.

### Q1 — problem + mobile/chip mapping
Problem:
quantify heat-transfer crisis in a very thin water-boiling microchannel with and without Al2O3 coating.

Mobile mapping:
the **0.2 mm channel height** is geometrically relevant to the internal height scale of a ~0.39 mm UTVC, but the flow boundary condition is different.

### Q2 — novelty vs strong baseline
The decision-relevant novelty is **Ivanov's direct participation** in thin-channel, water, CHF work — a missing bridge between MPEI's current low-flux long-life thermosyphon and phone-relevant high-flux transfer.

### Q3 — falsifiable hypothesis
> coating geometry/particle scale changes the CHF boundary in a 0.2 mm water-boiling channel.

The paper itself notes limited data, so this remains a transferable hypothesis rather than a universal rule.

### Q4 — lineage
Authors include:
- Yu.A. Kuzma-Kichta;
- A.V. Lavrikov;
- **N.S. Ivanov**.

This materially strengthens the continuity:
thin water-boiling CHF → capillary transport → hierarchical thermosyphon → 42-month stability.

### Q5 — control variables
- coated vs uncoated;
- coating thickness / particle scale in the modeling treatment;
- water mass velocity;
- microchannel geometry.

### Q6 — experiment design
**Source facts:**
- horizontal microchannel approximately 12.5 × 3 × 0.2 mm;
- water at atmospheric-pressure conditions;
- Al2O3 nanoparticle coating;
- mass-velocity range reported for coated tests;
- CHF / heat-transfer-crisis measurement and correlation comparison.

### Q7 — quantitative evidence + reproducibility
The paper supplies experimental CHF data and compares them against calculation.

Evidence-strength note:
the paper explicitly states the dataset is limited and should be expanded. That is important negative/reproducibility context.

### Q8 — what it proves / does not prove
Proves:
- MPEI/Ivanov has real thin-channel water-boiling/CHF experimental lineage.

Does not prove:
- the 2026 hierarchical microgroove + nanoparticle surface has the same high-flux behavior;
- passive sealed-VC operation;
- copper compatibility;
- phone reliability.

### Q9 — partner / IP control point
This improves **partner capability confidence**, not broad IP novelty.

A credible foreground target is:
> miniaturized long-life hierarchical liquid-supply surface whose dryout benefit remains after vacuum/sealing/cycling.

### Q10 — next action / PoC / kill
Public research can no longer close the exact-surface transfer.

Next:
1. partner request for any current high-flux data on the 2026 hierarchy;
2. geometry-scaled coupon;
3. water high-flux step-up;
4. sealed-VC only after coupon success.

Kill:
if the hierarchy loses its capillary/CHF advantage as grooves shrink or heat flux rises.

**Decision:** **UPGRADE MPEI HIGH-FLUX EVIDENCE TO PARTIAL; EXPERIMENT REQUIRED FOR PASS.**

---

## B1 — Microgroove + nanoparticle thermosyphon

**[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1
Problem:
lower evaporator thermal resistance in a two-phase thermosyphon using hierarchical liquid-transport / boiling features.

### Q2
Not novel for smartphones as “hierarchical wick/surface” — this is already crowded.

Potentially differentiated evidence:
- the same MPEI surface family is tied to later long-term reliability.

### Q3
Hypothesis:
> microgrooves provide larger-scale liquid transport while Al₂O₃ nanoscale porosity/wetting improves local liquid supply and phase-change heat transfer.

### Q4
Lineage:
2020/2021 nanoparticle transport
→ hierarchical evaporator
→ 42-month R410A stability
→ current MPEI patent/project activity.

Partner signal:
**strong and coherent**.

### Q5
Control variables:
- longitudinal microgrooves, publicly indexed radius ~0.1 mm;
- Al₂O₃ nanoparticles ~100–200 nm;
- AISI304 stainless steel;
- orientation;
- two-phase thermosyphon operation.

### Q6
Publicly recovered:
- heat flux ~200–1700 W/m²;
- different inclination/orientation conditions.

### Q7
Reported:
~2.4–3.0× lower thermal resistance than smooth reference in the tested system.

Reproducibility:
MEDIUM at thermosyphon level; LOW for phone transfer because full scaled geometry/process is not available.

### Q8
The evidence supports:
hierarchical surface benefit in this low-heat-flux thermosyphon.

It does not prove:
- high heat-flux hotspot performance;
- sub-0.5 mm operation;
- phone orientation robustness.

### Q9
Contribution:
hierarchical transport + device-level thermal performance.

Partner signal:
high for **reliability/process challenger**, not yet high-flux lead.

### Q10
Mobile transfer:
WEAK-DIRECT / PLAUSIBLE-MECHANISM.

PoC:
scale groove depth/pitch downward and increase heat flux in controlled steps.

Kill:
advantage collapses once geometry is shrunk or heat flux rises substantially.

Decision:
**CHALLENGER — Stage-0 Priority #2 lineage.**

---

## B2 — 42-month hierarchical-surface stability

**[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.

**Review status:** FULL-TEXT / DEEP PUBLISHER REVIEW.

### Q1
Problem:
whether an enhanced two-phase surface retains thermal and physical function over multi-year operation.

Mobile mapping:
long-term surface stability is directly relevant to phone reliability, although the source device is not a phone.

### Q2
The valuable novelty is not the coating morphology itself. It is **42-month device-level durability evidence**.

### Q3
Hypothesis:
> the hierarchical microgroove + Al₂O₃ surface can retain meaningful two-phase performance over prolonged R410A operation without destructive degradation.

### Q4
Same MPEI lineage as B0/B1; strongly increases partner credibility because transport, performance and durability are linked.

### Q5
Control variables:
- hierarchical microgroove + Al₂O₃ surface;
- stainless steel;
- R410A;
- long-duration periodic operation.

### Q6
**Source facts:**
- 42-month campaign;
- ultra-low heat-flux thermosyphon application class (project evidence indicates q below roughly 2000 W/m²);
- thermal resistance tracked;
- post-test SEM/EDX;
- capillary imbibition re-evaluated.

### Q7
**Source facts:**
- thermal resistance remains ~0.015 K/W;
- approximately 3× lower than smooth reference in that system;
- no pronounced erosion/degradation/contamination reported;
- capillary imbibition becomes slower after aging.

Reproducibility:
MEDIUM-HIGH for the demonstrated system; LOW for phone extrapolation.

### Q8
Strongly supports:
long-duration functional survival.

Does not support:
- smartphone hotspot heat flux;
- sub-mm packaging;
- copper VC compatibility.

### Q9
Contribution:
**long-term reliability know-how** — currently rare among our Russian surface candidates.

### Q10
Mobile transfer:
PLAUSIBLE, but high-risk.

Partner action:
request fresh-vs-aged geometry, coating thickness, capillary curves and process history.

PoC:
scaled geometry + higher heat-flux coupon, then 100/500 cycle screen.

Kill:
durability is retained only at ultra-low heat flux / large geometry.

Decision:
**CHALLENGER — strongest reliability evidence, Stage-0 Priority #2.**

---

# C. TPU / Feoktistov

## C1 — Biphilic surface for controlled droplet evaporation

**[Biphilic Heat Exchange Surfaces for Drip Irrigation Cooling Systems](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125316)** — D.V. Feoktistov, A. Abedtazehabadi, A.V. Dorozhkin *et al.* — *International Journal of Heat and Mass Transfer*, 2024.

**Review status:** FULL ABSTRACT / PUBLISHER HIGHLIGHTS REVIEW.

### Q1
Problem:
control droplet spreading / dry-region formation to improve local cooling.

Mobile mapping:
possible analogue for steering condensate/re-wetting toward a hot/dry zone.

### Q2
Biphilic patterning itself is **not new** for phone VC and is crowded by prior art.

Potential value:
TPU’s patterning process + diagnostics.

### Q3
Hypothesis:
> spatially programmed wetting can control where liquid spreads and evaporates, improving localized heat removal.

### Q4
Lineage:
laser surface processing
→ biphilic droplet control
→ 2026 wettability-contrast diagnostics
→ 2026 durability/hydrophobization process.

Partner signal:
strong surface-engineering continuity.

### Q5
Control variables:
- laser texture;
- hydrophilic/superhydrophilic pattern geometry;
- droplet placement/spreading;
- heated surface.

### Q6
Open-droplet / heated-surface experiment, not sealed two-phase confinement.

### Q7
Evidence demonstrates controllable droplet localization and evaporation behavior.

Reproducibility:
MEDIUM for surface-pattern experiment; LOW for sealed-VC transfer.

### Q8
Supports:
wettability pattern changes liquid behavior.

Does not support:
- sealed rewetting;
- product working fluid;
- vacuum/process survival.

### Q9
Contribution:
**spatial liquid-control capability**, not generic biphilic novelty.

### Q10
Mobile transfer:
PLAUSIBLE MECHANISM.

PoC:
confined thin-liquid rewetting on copper after VC-like processing.

Kill:
pattern benefit disappears in confinement or is matched by standard oxidation/laser reference.

Decision:
**CHALLENGER — Stage-0 Priority #3 lineage.**

---

## C2 — Wettability-contrast mechanism with flow diagnostics

**[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1
Problem:
understand the local fluid-mechanical mechanism behind wettability-contrast cooling rather than relying on average temperature alone.

### Q2
Novelty signal for us:
**diagnostic depth + pattern/control know-how**, not the generic biphilic concept.

### Q3
Hypothesis:
> roughness-controlled wettability contrast redistributes liquid and local flow in ways that alter evaporation/cooling.

### Q4
Strengthens Feoktistov team as a partner able to **visualize and diagnose** liquid redistribution, which may be useful in moving-hotspot studies.

### Q5
Control variables:
- laser-engineered roughness;
- wettability contrast;
- aluminum-based surface;
- water droplet;
- heated surface.

Diagnostics:
PIV / PLIF and optical methods.

### Q6
Publicly recovered temperature range:
roughly 80–300 °C surface tests.

This remains an open-droplet apparatus.

### Q7
Quantitative/local-flow evidence is strong for the original system.

Reproducibility:
MEDIUM-HIGH for diagnostics; LOW for sealed VC transfer.

### Q8
Supports:
surface state can alter liquid redistribution and local cooling mechanism.

Does not prove:
- copper compatibility;
- sub-mm liquid-film behavior;
- sealed-fluid behavior.

### Q9
Contribution:
**diagnostic capability may be as valuable as the surface process** for a joint PoC.

### Q10
Mobile transfer:
PLAUSIBLE.

Partner action:
use TPU diagnostics to compare China-style reference vs TPU pattern under confined rewetting.

Kill:
no incremental rewetting/routing benefit after confinement and process constraints.

Decision:
**CHALLENGER / DIAGNOSTIC PARTNER SIGNAL.**

---

## C3 — Laser + hydrocarbon-thermolysis hydrophobization

**[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.

**Review status:** FULL-TEXT / DEEP PUBLISHER REVIEW.

### Q1
Problem:
create a durable, high-contact-angle metal surface without expensive fluorinated chemistry.

### Q2
Novelty is mainly the **laser + low-temperature hydrocarbon thermolysis process combination and durability**, not hydrophobicity itself.

### Q3
Hypothesis:
> hierarchical laser roughness plus hydrocarbon-derived low-surface-energy chemistry yields robust superhydrophobicity.

### Q4
Lineage:
same Feoktistov/Orlova surface-processing team; reinforces real fabrication capability.

### Q5
Control variables:
- AlMg3;
- nanosecond laser texture;
- hydrocarbon thermolysis/deposition;
- CH₂/CH₃-rich surface chemistry;
- process discussions around ~270 °C.

### Q6
Characterization:
SEM, AFM, XPS, FTIR.

Durability:
humidity / chemical exposure / saline / sand-abrasion style tests.

### Q7
**Source facts:**
- water contact angle up to ~169°;
- roll-off <10°;
- robust environmental/mechanical wetting retention.

Reproducibility:
MEDIUM-HIGH for open-surface manufacture.

### Q8
Supports:
durable surface chemistry in open/environmental use.

Does **not** support:
- vacuum outgassing;
- sealed-fluid contamination resistance;
- post-degassing/welding stability;
- two-phase cycling.

### Q9
Contribution:
strong process/manufacturing capability, but also a **clear risk signature** because the functional chemistry is organic/hydrocarbon-derived.

### Q10
Mobile transfer:
UNCERTAIN / HIGH-RISK PROCESS.

Partner action:
request vacuum TGA/mass-loss/outgassing and working-fluid exposure data, or run it directly.

PoC:
laser/thermolysis copper coupon → vacuum/degassing → fluid soak → wettability chemistry → confined rewetting.

Kill:
organic layer outgasses, contaminates fluid or loses pattern contrast after VC process.

Decision:
**CHALLENGER — process compatibility gate dominates.**

---

# D. China / global strong UTVC benchmarks

## D1 — 0.35 mm UTVC / liquid-film reduction + capillary enhancement

**[High Performance Ultra-Thin Vapor Chamber by Reducing Liquid Film and Enhancing Capillary Wicking](https://doi.org/10.1016/j.applthermaleng.2024.122813)** — Shiwei Zhang, Hang Liu, Changkun Shao *et al.* — *Applied Thermal Engineering*, 2024.

**Review status:** FULL ABSTRACT / PUBLISHER TECHNICAL REVIEW.

### Q1
Problem:
as a VC becomes ultra-thin, liquid film can occupy scarce vapor space and the wick must replenish liquid efficiently without choking vapor flow.

### Q2
For our project this is not a candidate technology; it is a **strong comparator** showing the state of modern UTVC engineering.

### Q3
Hypothesis:
> reducing unnecessary liquid-film occupation while strengthening capillary wicking improves ultra-thin VC performance.

### Q4
Part of a strong China/global UTVC lineage using composite mesh, micro/nanostructure and two-phase visualization.

### Q5
Control variables:
- micro/nanostructured composite wick;
- liquid-film behavior;
- capillary wicking;
- 0.35 mm sealed device.

### Q6
Device-level UTVC experiment with visualization/capillary characterization.

### Q7
Reported:
- 0.35 mm thickness;
- ETC up to ~12,454 W/(m·K) at 3 W under the stated test.

Reproducibility:
MEDIUM-HIGH as published device research.

### Q8
Strongly supports:
capillary/vapor-space co-optimization matters at sub-0.4 mm scale.

### Q9
Strategic contribution:
defines the **minimum comparator quality** for Russian wick/surface claims.

### Q10
Action:
use as control/baseline logic, not as collaboration target.

Kill rule for Russian concepts:
if they only reproduce generic capillary enhancement already demonstrated here, they are not differentiated.

Decision:
**STRONG COMPARATOR.**

---

## D2 — 0.39 mm composite-wick UTVC

**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

**Review status:** FULL-TEXT REVIEW.

### Q1
Problem:
balance support structure, vapor space, liquid return and fill ratio in a manufacturable ultra-thin sealed VC.

### Q2
This is the project’s strongest **geometry anchor**, not a novelty candidate.

### Q3
Hypothesis:
> composite wick/support design and fill ratio can preserve liquid return and vapor flow despite a ~0.4 mm total device.

### Q4
Relevant comparator lineage:
ultra-thin copper VC → mesh/SWM composite wick → chemical oxidation / wetting enhancement → resistance-welded sealed device.

### Q5
Control variables:
- 82 × 58 × 0.39 mm device;
- ~0.2 mm steam-channel/support height;
- 0.06 mm copper mesh;
- two mesh layers + SWMs;
- water;
- support diameter;
- fill ratio;
- SWM count.

### Q6
Manufacturing/test includes:
- etching;
- wettability treatment;
- secondary degassing;
- resistance welding;
- multiple structural/fill configurations.

### Q7
Reported:
- ~26 W maximum heat-transfer power in tested matrix;
- 30% fill ratio among best cases.

Reproducibility:
HIGH relative to most comparator literature because geometry/process are unusually explicit.

### Q8
Supports:
phone-relevant UTVCs have **micron-scale internal budget**, not “0.4 mm free space.”

### Q9
Contribution to our project:
sets the Stage-0 dimensional contract.

### Q10
Action:
hold this geometry as the default comparator until an even stronger device-level baseline is found.

Kill:
any Russian surface/wick route requiring >=~200 μm extra local height without replacing another structure is strongly disfavored.

Decision:
**PRIMARY GEOMETRY BENCHMARK.**

---

## D3 — 0.4 mm wettability-patterned/composite-wick UTVC

**[Experimental Research on the Heat Transfer Performance of Ultra-Thin Vapor Chambers with Composite Wicks for Electronics Cooling](https://doi.org/10.1016/j.ijheatfluidflow.2025.110148)** — Tengqing Liu, Yaokang Zhang, Shuangfeng Wang *et al.* — *International Journal of Heat and Fluid Flow*, 2026.

**Review status:** FULL ABSTRACT / PUBLISHER TECHNICAL REVIEW.

### Q1
Problem:
improve condensate return / thermal resistance in a 0.4 mm VC using composite structures and wettability patterning.

### Q2
This paper directly weakens broad claims that TPU-style wettability patterning itself is novel for a phone VC.

### Q3
Hypothesis:
> spatial surface state and composite wick architecture can redistribute condensate and improve ultra-thin VC performance/orientation tolerance.

### Q4
Direct prior-art/comparator for TPU and surface-pattern concepts.

### Q5
Control variables:
- 0.4 mm SWM-based UTVC;
- composite screen mesh;
- laser-patterned wettability;
- orientation.

### Q6
Multiple device variants compared experimentally.

### Q7
Project evidence:
- maximum reported heat flux ~3.58 W/cm²;
- composite/patterned variants reduce thermal resistance vs simpler structure.

### Q8
Supports:
patterning can work **inside a real ultra-thin sealed VC**.

### Q9
Strategic contribution:
sets a high bar for any Russian biphilic/pattern claim.

### Q10
Action:
TPU must beat this type of device on a **narrower control point**:
durability, transient rewetting, moving hotspot, or process advantage.

Decision:
**DIRECT TPU/VC COMPARATOR.**

---

## D4 — Laser-ablation modification of UTVC wick

**[Effect of Laser Ablation Surface Modification on the Capillary Performance of the Wick Structure for Ultra-Thin Vapor Chamber](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774)** — Jiu Yu, Wenqi Fang, Guoliang Hu *et al.* — *International Journal of Heat and Mass Transfer*, 2025.

**Review status:** FULL ABSTRACT / PUBLISHER TECHNICAL REVIEW.

### Q1
Problem:
improve capillary transport of a UTVC wick using a scalable surface treatment.

### Q2
Directly crowds the claim:
> laser roughening / micro-nanostructure improves wick capillarity.

### Q3
Hypothesis:
> optimized laser ablation increases roughness/wettability/capillary rise enough to improve actual UTVC performance.

### Q4
Direct comparator to TPU-style laser processing and generic laser-wick proposals.

### Q5
Control variables:
- laser pulse energy;
- pulse spacing;
- spiral-woven / copper-mesh wick;
- micro/nanoroughness.

### Q6
Capillary-rise optimization is followed by actual UTVC testing.

### Q7
Reported device maximum heat-transfer power:
~8 W → ~10.5 W after optimized treatment.

Response is non-monotonic: more laser input is not automatically better.

### Q8
Supports:
laser treatment can create real device benefit.

Also shows:
surface treatment must be optimized against transport penalties.

### Q9
Contribution to our insight:
generic laser surface modification is **not whitespace**.

### Q10
Action:
use as minimum laser-treated-wick comparator for TPU.

Kill:
if TPU cannot show a sealed-process/reliability/transient advantage beyond this class.

Decision:
**STRONG PRIOR ART / COMPARATOR.**

---

# Cross-paper synthesis

## What these 10Q cards change

### 1. Pavlenko remains #1 because the open problem is closest to phone failure physics
The strongest opportunity is not a mesh or coating morphology. It is:
**dryout / rewetting / wetting-state behavior under changing fluid, geometry and process state.**

### 2. MPEI becomes valuable for a different reason
MPEI is not currently the high-flux leader.
Its differentiator is:
**capillary-transport lineage + unusually long two-phase reliability evidence.**

### 3. TPU should not be judged by contact angle
The key question is:
**can spatial wetting survive VC manufacturing and create confined liquid-routing benefit?**

### 4. China/global comparators close broad novelty space
A credible Russian collaboration cannot be based only on:
- composite wick;
- hydrophilic/biphilic pattern;
- laser roughening;
- hierarchical pores;
- capillary enhancement.

### 5. The next evidence boundary is no longer literature-only
For several critical unknowns, public search is near diminishing returns:
- Pavlenko exact thin-mesh electrochemical recipe;
- MPEI true phone-scale coating/groove process window;
- TPU vacuum/outgassing/sealed-fluid compatibility.

These should increasingly become:
**partner data request or Stage-0 experiment**, not endless literature search.
