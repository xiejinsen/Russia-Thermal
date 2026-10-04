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


# E. China VC reliability comparators

## E1 — Oxygen-driven failure of copper-water VC

**[Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Rui Tang, Yue Tian, Ang Gao, Yang Yang — *Applied Thermal Engineering*, 2025.

**Review status:** PUBLISHER ABSTRACT/SUMMARY + DECISION REVIEW.

### Q1 — problem + mobile/chip mapping
How can a sealed copper-water VC lose thermal performance even when shell, seal and visible wick structure remain intact?

This maps directly to phone VC reliability because a chemically aged wick can fail before an obvious mechanical defect appears.

### Q2 — novelty vs strong baseline
For this project the novelty is not "VC reliability exists." It is a **mechanistic link from oxygen -> wick oxidation -> wetting reversal -> capillary collapse -> evaporation resistance increase** in a product-relevant copper-water system.

### Q3 — falsifiable hypothesis
> residual/internal oxygen can chemically age the copper wick enough to reverse wetting/capillary behavior and drive thermal failure without gross structural damage.

### Q4 — lineage
SCUT / Yong Li line:
ultra-thin heat pipe/VC design
→ vacuum/process studies
→ flexible/bent UTVC
→ failure mechanism
→ service-life prediction.

Industry-linked coauthors include China Mobile / Lenovo in the wider reliability line.

### Q5 — actual control variable
- copper-water sealed VC;
- oxygen level / oxidation state;
- wick-surface composition;
- wettability/capillary pressure;
- vacuum process quality.

### Q6 — experiment design
Normal and failed VCs are compared while checking:
- shell flatness / leakage / visible structure;
- wick surface composition;
- wetting/capillary state;
- thermal performance.

### Q7 — quantitative evidence + reproducibility
Public summary:
- wick oxygen fraction in failed devices increases by about **3 percentage points**;
- copper fraction decreases by about **3 percentage points**;
- wick transitions from hydrophilic toward hydrophobic;
- capillary pressure moves from positive toward negative.

Reproducibility is **MEDIUM-HIGH conceptually**, but exact production process details remain device-specific.

### Q8 — what it proves / does not prove
Proves:
- China has product-relevant VC chemical-aging/failure-mechanism research;
- vacuum/process oxygen control can be a first-order reliability variable.

Does not prove:
- equivalence to MPEI's hierarchical-surface aging;
- 42-month actual operation;
- phone-specific 0.3–0.4 mm VC lifetime.

### Q9 — contribution + partner/IP control point
For our project this is primarily a **comparator/control-point correction**:
surface reliability must include chemistry/vacuum state, not only morphology and thermal cycling.

Potential internal control points:
- oxygen budget;
- surface-state retention after degassing/sealing;
- capillary-pressure retention metric.

### Q10 — next action / PoC / kill
Use this paper to strengthen the MPEI Stage-0 process gate:
- XPS/EDS or equivalent surface chemistry before/after process/cycling;
- wetting/capillary change;
- vacuum-process record.

**Decision:** **PROMOTE AS DECISION-GRADE CHINA RELIABILITY COMPARATOR.**

---

## E2 — Rapid service-life prediction of copper-water VC

**[Research on a rapid prediction method for the service life of copper-water vapour chambers](https://doi.org/10.1016/j.applthermaleng.2026.131067)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Yue Tian, Yang Yang, Fan Yang — *Applied Thermal Engineering*, 2026.

**Review status:** PUBLISHER FULL-PREVIEW / ABSTRACT REVIEW.

### Q1
Problem:
full-life VC testing is too slow/expensive for product engineering.

Mobile mapping:
smartphone/consumer VC programs need rapid screening of sealed copper-water lifetime and manufacturing quality.

### Q2
The important novelty for our comparison is a **physics-linked accelerated-lifetime method** rather than generic thermal cycling.

### Q3
Hypothesis:
> wick oxygen content is a stable degradation marker that can link high-temperature accelerated aging to actual VC service life.

### Q4
Same SCUT-led reliability line as E1, extending failure physics into production/lifetime prediction.

### Q5
Control variables:
- high-temperature stress;
- wick oxygen content;
- thermal-performance failure time;
- Arrhenius acceleration;
- XPS/EDS surface state.

### Q6
Publicly reported design:
- accelerated aging at **150–200 °C**;
- copper-water VCs;
- failure analysis + XPS/EDS;
- Arrhenius life conversion.

### Q7
Public quantitative evidence:
- ~1% wick-surface oxygen -> predicted **>=13 years at 80 °C**;
- oxygen content vs actual service-life relation **R² ≈ 0.98**;
- reported prediction error ~**8%**.

The >=13-year figure is **model-predicted service life**, not 13 years of direct operation.

### Q8
Proves:
- China has a serious VC life-engineering methodology;
- reliability comparison with MPEI cannot use "China lacks long-term reliability" wording.

Does not prove:
- actual multi-year operation of the same engineered surface;
- hierarchical coating aging under R410A or phone heat flux.

### Q9
Contribution for our insight:
it shifts the Russia–China complementarity.

China:
- sealed copper-water manufacturing;
- oxygen/vacuum failure control;
- accelerated life prediction.

Potential MPEI complement:
- actual multi-year hierarchical evaporator aging / capillary evolution.

### Q10
Next action:
compare MPEI Stage-0 results against a **China-style oxygen/process reliability control** rather than treating long-duration operation alone as sufficient.

**Kill MPEI country-level reliability differentiation** if:
- MPEI contributes only generic oxidation/vacuum reliability already covered by China;
- no hierarchy-specific long-duration mechanism survives scale-down.

**Decision:** **PROMOTE — narrows MPEI differentiation rather than killing it.**

---

# F. China electronics cooling-fan aeroacoustic comparators

## F1 — POD + wavelet beamforming for cooling-fan source imaging

**[Experimental Analysis of Cooling Fan Noise by Wavelet-Based Beamforming and Proper Orthogonal Decomposition](https://doi.org/10.1109/ACCESS.2020.3006483)** — Sicong Liang, Wangqiao Chen, Rhea P. Liem, Xun Huang — *IEEE Access*, 2020.

**Review status:** OPEN-ACCESS / TECHNICAL REVIEW.

### Q1
Problem:
small fan acoustic sources are hard to localize/separate with conventional array beamforming.

Mobile mapping:
phone microfans have even smaller apertures, higher rpm and stronger installed-condition coupling, making source separation difficult.

### Q2
Novelty:
combines wavelet beamforming with POD specifically demonstrated on a practical electronics cooling fan.

For our Russia comparison this closes the claim that advanced cooling-fan acoustic source imaging is absent in China.

### Q3
Hypothesis:
> modal decomposition of beamformed acoustic images can separate physically distinct cooling-fan source contributions better than conventional time-averaged imaging.

### Q4
Capability lineage:
PKU/HKUST aeroacoustic/acoustic-imaging work around wavelet beamforming and rotating sources.

### Q5
Control variables:
- fan rpm;
- frequency / BPF and harmonics;
- subharmonics;
- broadband/high-frequency turbulence noise;
- acoustic-image modes.

### Q6
Public setup:
- AMD Wraith Prism CPU fan;
- **D = 90 mm**;
- 2650 / 3960 rpm;
- anechoic/half-anechoic acoustic measurement;
- microphone array;
- wavelet beamforming + POD.

### Q7
Quantitative/reproducibility
The open paper reports clear spectra/source imaging and discusses BPF, subharmonic and high-frequency components.

External reproducibility:
**HIGH-MEDIUM**, because the signal-processing method and test architecture are public.

### Q8
Proves:
- Chinese academia has cooling-fan source-imaging capability.

Does not prove:
- direct smartphone-scale microfan source diagnosis;
- confined centrifugal fan at ~20k rpm;
- equal-cooling acoustic optimization.

### Q9
Implication
Russian aeroacoustic differentiation must be narrowed to:
- much smaller fan scale;
- confined ducts;
- installed tonal/source interaction;
- possibly psychoacoustic/user-perception constraints.

### Q10
Smallest comparison:
same ~18–25 mm phone-class centrifugal fan in identical duct/impedance condition, tested with a Chinese baseline method and Russian method.

Success for Russia collaboration:
- materially better source attribution or design guidance at same test cost/time;
- identifies a controllable noise mechanism not captured by domestic baseline.

Kill:
- domestic method resolves the same source modes equally well.

**Decision:** **PROMOTE AS COMPARATOR; DOWNGRADE broad Russia aeroacoustic differentiation.**

---

## F2 — Narrow-space electronic cooling-fan aeroacoustics

**[Aerodynamic Noise Characteristics of Axial Flow Fan in Narrow Space and Noise Reduction Based on Flow Control](https://doi.org/10.1115/1.4063127)** — Zonghan Sun, Pengfei Chai, Jie Tian, Zhaohui Du, Hua Ouyang — *Journal of Engineering for Gas Turbines and Power*, 2023.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1
Problem:
electronic cooling fans change behavior when installed in narrow spaces with downstream obstacles and recirculation.

This is closer to phone/compact-device installed conditions than free-field fan acoustics.

### Q2
Novelty for our benchmark:
not generic fan noise, but **installed narrow-space flow/acoustic coupling**.

### Q3
Hypothesis:
> confinement/obstacles alter flow rate and recirculation, increasing tonal/broadband noise; source-oriented flow control can reduce the penalty.

### Q4
Lineage:
SJTU/Ouyang team has a coherent electronic-device cooling-fan aeroacoustics program:
inlet asymmetry
→ acoustic modes
→ duct noise reduction
→ narrow-space installed condition.

### Q5
Control variables:
- inlet/outlet obstruction;
- confinement;
- fan speed;
- recirculation;
- tonal/broadband SPL;
- duct/flow-control geometry.

### Q6
Experiment/simulation:
electronic cooling fans are tested with free-field and installed narrow-space configurations, with CFD/aeroacoustic interpretation.

### Q7
Evidence/reproducibility
The program includes experimental microphone measurements and repeated duct/noise-control studies.

Direct smartphone-scale geometry is not established.

### Q8
Proves:
China already studies the exact **installed-condition acoustic interaction** concept.

Does not prove:
phone microfan capability at ~18–25 mm / 20k rpm.

### Q9
Contribution/control point
This kills the argument:
> "Russia is differentiated because it knows how ducts/confinement change fan noise."

The residual question is much narrower:
> who can solve source identification and thermal-acoustic optimization at actual phone scale?

### Q10
Partner implication:
TsAGI/PNRPU/CIAM remains a **method reserve**, not a national advantage.

Smallest PoC:
phone microfan + production-like inlet/outlet/mesh/duct; same cooling target; compare source diagnosis, tonal metric and actionable geometry recommendation.

**Decision:** **PROMOTE COMPARATOR / DOWNGRADE RUSSIA AEROACOUSTIC CANDIDATE TO WATCH-RESERVE.**

---



# G. Country pressure-test — Kabov thin-film / Maydanik LHP

## G1 — Kutateladze 12.5 μm slit two-phase-flow experiment

**[An experimental investigation of adiabatic two-phase flow patterns in a slit microchannel with 1:800 aspect ratio](https://doi.org/10.1016/j.expthermflusci.2024.111153)** — Dementyev, Chinnov, Kochkin, Ronshin *et al.* — 2024.

### Q1 — problem + target mapping
How do gas-liquid flow patterns and instabilities change when a slit channel shrinks to **12.5 μm height** at extreme aspect ratio?

Phone mapping:
ultra-thin two-phase devices increasingly approach regimes where surface tension/wettability/interfacial instability dominate.

### Q2 — novelty / new-regime relevance
The novelty relevant to us is not generic microchannel flow.
It is experimental access to **<20 μm slit two-phase flow** with high aspect ratio.

### Q3 — falsifiable hypothesis
> extreme confinement changes flow-pattern boundaries and introduces instability mechanisms not captured by larger-channel maps.

### Q4 — lineage / competing route
Kutateladze/Chinnov/Ronshin has a long slit/microchannel two-phase-flow lineage.

Competing route:
China/global embedded microfluidics is stronger at actual heat removal, but does not automatically replace this specific free-interface instability knowledge.

### Q5 — control variables
- channel height/width;
- surface roughness/contact angle;
- liquid physical properties;
- liquid Capillary number;
- gas Weber number;
- interfacial instability.

### Q6 — experiment
Source facts:
- 12.5 μm × 10 mm;
- 1:800 aspect ratio;
- five working liquids;
- broad gas/liquid superficial-velocity ranges;
- SEM/AFM/contact-angle surface characterization;
- direct flow-pattern mapping.

### Q7 — quantitative evidence / reproducibility
Geometry and velocity windows are public and reproducible in principle.
Fabrication/diagnostics burden is non-trivial.

Evidence maturity:
**SYSTEMATIC MECHANISM EXPERIMENT**, not product proof.

### Q8 — what it proves / does not prove
Proves:
- real extreme-confinement experimental capability;
- specific instability/pattern knowledge.

Does not prove:
- heat-removal advantage;
- closed-loop phone feasibility;
- acceptable pumping/volume/power.

### Q9 — decision contribution
Keeps a narrow Russia capability alive:
**extreme-confinement interfacial-instability diagnostics**.

### Q10 — next action
Do not make a device bet yet.

Smallest PoC:
heated microgap cell under fixed parasitic-power budget, comparing passive and shear-driven film control.

Kill:
no thermal/user-value advantage after gas-flow/pump/loop overhead.

**Decision:** KEEP / NARROW.

Evidence maturity: STRUCTURAL_SIGNAL  
Decision impact: preserves Kabov as high-risk mechanism reserve  
Open question: thermalized phone-scale transfer  
Primary source: DOI above

---

## G2 — China record-flux thin-film boiling comparator

**[Manipulating thin film boiling to achieve record-breaking high heat flux](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125308)** — Zhang, Zhao, Li *et al.* — 2024.

### Q1
Problem:
raise thin-film-boiling CHF for chip/electronics cooling.

### Q2
For our decision, this is a strongest-baseline paper that kills "Russia has superior thin-film cooling because of high heat flux."

### Q3
Hypothesis:
> sample mechanical support + controlled pressure/power trajectory can push a nanoporous thin-film-boiling device closer to its theoretical CHF.

### Q4
NCEPU-led high-flux thin-film line; related earlier modeling and membrane work.

### Q5
- liquid pressure;
- heating trajectory;
- membrane/sample strength;
- thin-film boiling state.

### Q6
Pressure/heating operating paths are manipulated; sample fixation is strengthened.

### Q7
**Source fact:** reported CHF reaches **2074 W/cm²**.

This headline is not directly phone-comparable due architecture/pressure/feed differences.

### Q8
Proves:
China has world-class thin-film-boiling heat-flux capability.

Does not prove:
China has the same shear-driven free-surface film-instability lineage as Kabov.

### Q9
Decision contribution:
kills broad Russia thin-film superiority while preserving only the mechanism-specific shear-film gap.

### Q10
Use as mandatory strong comparator for any Kabov-derived PoC.

**Decision:** PROMOTE COMPARATOR / NARROW RUSSIA CLAIM.

Evidence maturity: SYSTEM_VALUE for high-flux TFB bench  
Decision impact: broad thin-film Russia thesis killed  
Open question: equal-budget shear-film comparison  
Primary source: DOI above

---

## G3 — Maydanik/Chernysheva LHP serviceability conditions

**[An Analysis of the Key Serviceability and Efficiency Conditions of Loop Heat Pipes](https://doi.org/10.56304/S0040363625701152)** — M.A. Chernysheva, Y.F. Maydanik — 2025.

### Q1
Problem:
define conditions under which an LHP can circulate working fluid and transfer heat efficiently.

### Q2
Current value is depth/continuity from a foundational LHP group, not a novel mobile architecture.

### Q3
Hypothesis:
> LHP serviceability can be bounded by coupled capillary-pressure, hydraulic-loss and thermodynamic conditions.

### Q4
Very deep Maydanik lineage.

Competing route:
Beihang/SCUT/QUST/SDU and other Chinese groups now study the same startup, NCG, orientation, multi-evaporator and failure-boundary space experimentally.

### Q5
- wick pore radius/capillary pressure;
- pressure losses;
- working fluid;
- vapor/liquid lines;
- compensation chamber;
- heat-source/sink state.

### Q6
Analytical/serviceability framework; not a phone-scale hardware experiment.

### Q7
Strong theory lineage but lower product-directness than current China small-electronics LHP experiments.

### Q8
Proves:
Maydanik remains a credible LHP expert.

Does not prove:
Russia has a current unique operating-limit control point.

### Q9
Decision contribution:
supports **knowledge reserve**, not country differentiation.

### Q10
Do not fund standalone LHP PoC solely on this basis.

Re-promote only if partner interaction reveals a specific non-public model/control point that beats domestic capability under phone constraints.

**Decision:** DOWNGRADE -> WATCH / KNOWLEDGE RESERVE.

Evidence maturity: STRUCTURAL_SIGNAL  
Decision impact: remove Maydanik from active country-differentiation set  
Open question: non-public transferable know-how  
Primary source: DOI above

---

## G4 — China 1 mm dual-evaporator LHP for laptop cooling

**[Study on heat transfer characteristics of a dual-evaporator ultra-thin loop heat pipe for laptop cooling](https://doi.org/10.1016/j.applthermaleng.2024.122395)** — He, Yan, Wang — 2024.

### Q1
Problem:
route heat from spatially separated CPU/GPU sources in a thin laptop.

### Q2
This is directly relevant because it combines:
- multi-source routing;
- ultra-thin form factor;
- electronics system constraints.

### Q3
Hypothesis:
> a 1 mm dual-evaporator LHP can centralize heat from separated laptop sources and retain startup/steady performance.

### Q4
China has an active ultra-thin passive-device ecosystem; this is not an isolated LHP paper.

### Q5
- two evaporators;
- equal/unequal loads;
- orientation;
- heat leak;
- LHP thickness.

### Q6
**Source facts:**
- 1 mm thickness;
- startup from 5 W–5 W to 20 W–20 W;
- maximum ~22 W–22 W;
- minimum Rth ~0.69 °C/W.

### Q7
Direct small-electronics evidence is stronger than Maydanik's current 2.3 mm miniature example for our geometry question.

### Q8
Proves:
China directly studies thin multi-source LHP routing.

Does not prove:
smartphone-ready 0.4–0.7 mm multi-evaporator LHP.

### Q9
Decision contribution:
removes "multi-hotspot routing + miniaturization" as a Russia-specific reason to collaborate with Maydanik.

### Q10
Use as strongest direct geometry/routing comparator.

**Decision:** PROMOTE COMPARATOR.

Evidence maturity: SYSTEM_VALUE  
Decision impact: Maydanik differentiation downgraded  
Open question: smartphone thickness / dynamic workload  
Primary source: DOI above

---

## G5 — China explicit capillary/pressure-drop failure boundary in multi-evaporator LHP

**[Experimental Study on a Dual Compensation Chamber Multi-Evaporator Loop Heat Pipe System](https://doi.org/10.3390/eng7020084)** — Huang, Zhang, Li, Guo — 2026.

### Q1
Problem:
stable passive transport for multiple distributed heat sources over long distances.

### Q2
For our decision this is important because it explicitly investigates **failure limit**, not only nominal thermal performance.

### Q3
Hypothesis:
> charge ratio/startup sequencing can stabilize a multi-evaporator LHP until cumulative pressure drop exceeds capillary supply.

### Q4
Shandong University current multi-source LHP work; complements Beihang's older NCG/startup/elevation lineage.

### Q5
- charge ratio;
- startup time interval;
- multiple evaporator loads;
- capillary driving force;
- cumulative pressure drop.

### Q6
Open experimental system with multiple evaporators and dual compensation chambers.

### Q7
**Source facts:**
- optimal charge ratio ~75%;
- interval ~8–10 min;
- stable total load ~270 W;
- per-stage failure threshold ~70 W;
- failure linked to insufficient liquid supply / cumulative pressure drop beyond capillary capability.

### Q8
Proves:
China has active experimental LHP failure-boundary capability.

Does not prove:
phone-scale geometry or product manufacturability.

### Q9
Decision contribution:
directly overlaps the residual "operating-limit/failure physics" argument for Maydanik.

### Q10
Kill country-level Maydanik differentiation unless a much narrower non-public control point emerges.

**Decision:** PROMOTE COMPARATOR / DOWNGRADE MAYDANIK.

Evidence maturity: SYSTEM_VALUE at non-mobile scale  
Decision impact: active differentiation -> Watch  
Open question: phone-scale transfer  
Primary source: DOI above



# H. Foundational math-physics pressure test

## H1 — Russia 2026 exact evaporative-convection solution

**[The effect of gas flow rate on evaporative convection in a multicomponent bilayer system subjected to linear boundary heating](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128594)** — Bekezhanova, Stepanova — 2026.

### Q1 — problem + target mapping
Problem:
coupled evaporation, gas shear, thermocapillarity and concentration create a large parameter space and obscure dominant mechanisms.

Phone mapping:
indirect; relevant mainly to confined film / interfacial failure analysis, not current sealed VC directly.

### Q2 — novelty / new-regime relevance
Decision-relevant novelty:
a current exact analytical solution of a two-sided multicomponent evaporative-convection problem tied to experimental conditions.

### Q3 — falsifiable hypothesis
> an exact reduced analytical representation can predict meaningful regime/parameter relations closely enough to reduce experiment search and act as a numerical benchmark.

### Q4 — lineage / competing route
ICM SB RAS exact-solution lineage runs through 2016–2026.

Strong China competing routes:
- long-wave nonlinear stability;
- interface-resolved phase-change numerical models;
- PINN / inverse methods.

### Q5 — control point
- gas flow;
- wall temperature gradient;
- liquid composition;
- thermocapillary vs shear stress;
- evaporation rate.

### Q6 — method
Simplified two-sided Navier–Stokes + heat/mass-transfer problem; exact analytical solution; experimental flow-rate condition used for closure/comparison.

### Q7 — evidence / reproducibility
Public source gives model assumptions, equations, operating geometry and experiment comparison.

Reproducibility:
**MEDIUM-HIGH analytically**, but transfer depends on assumption validity.

### Q8 — evidence vs hypothesis
Evidence supports:
- current analytical capability;
- interpretable parameter relations;
- qualitative experiment consistency.

Does not prove:
- phone geometry accuracy;
- dryout/boiling prediction;
- product-level speed/accuracy benefit.

### Q9 — real contribution
Changes belief from:
"Russian math strength is generic reputation"

to:
"there is a current, specific exact-solution capability on evaporative interfacial thermal physics."

### Q10 — next action
Build a blind instability-boundary PoC against a domestic high-fidelity numerical baseline.

**Decision:** KEEP / FOUNDATIONAL DIFFERENTIATION CANDIDATE.

Evidence maturity: STRUCTURAL_SIGNAL  
Decision impact: supports a narrow foundational capability, strongest for Kabov/Chinnov  
Open questions: phone-regime validity; experiment reduction; partner readiness  
Primary source: DOI above

---

## H2 — China 3D long-wave evaporation/condensation film stability

**[Three-Dimensional Long-Wave Instability of an Evaporation/Condensation Film](https://doi.org/10.3390/fluids9060143)** — Jiang, Huang, Yang, Ding — 2024.

### Q1
Problem:
predict stability and nonlinear dynamics of 3D phase-changing thin films.

### Q2
For this project the key relevance is that it is an **independent China mathematical-stability capability**, not a joint Russia paper.

### Q3
Hypothesis:
> a nonlinear long-wave model with a physically richer phase-change boundary condition can describe stability/dynamics across evaporation and condensation regimes.

### Q4
HIT + State Key Lab of Aerodynamics + Institute of Mechanics CAS.

Competes directly with the claim that interfacial stability mathematics is Russia-specific.

### Q5
- evaporation/condensation;
- long-wave disturbance;
- phase-change boundary;
- vapor recoil / thermal boundary effects.

### Q6
Derivation + nonlinear stability/dynamics calculation for a 3D falling film.

### Q7
Open equations/data in paper; primarily theoretical/numerical rather than phone experiment.

### Q8
Proves:
China has current formal thin-film stability theory.

Does not prove:
an exact/group-invariant solution tradition identical to ICM SB RAS.

### Q9
Decision contribution
Kills broad wording:
> Russia has unique nonlinear/interfacial stability mathematics.

Residual Russia wording:
> continuous exact analytical / group-solution lineage with experiment-informed closure.

### Q10
Use as mandatory foundational comparator.

**Decision:** PROMOTE COMPARATOR / NARROW RUSSIA CLAIM.

Evidence maturity: STRUCTURAL_SIGNAL  
Decision impact: prevents broad national math claim  
Open question: exact-solution parity  
Primary source: DOI above

---

## H3 — China finite-interface phase-change model

**[Development and validation of finite-interface-heat-flux phase change model](https://doi.org/10.7527/S1000-6893.2026.32977)** — Tang, Han, Zheng, Ma — 2026.

### Q1
Problem:
phase-change CFD models depend on uncertain empirical source terms.

### Q2
New-regime relevance:
important as an engineering-model comparator, not a phone architecture.

### Q3
Hypothesis:
> using finite-interface heat flux to construct phase-change source terms improves physical fidelity across multiple boiling benchmarks.

### Q4
Xi'an Jiaotong University current phase-change / microchannel modeling line.

### Q5
- interfacial heat flux;
- phase-change source term;
- wall superheat;
- bubble interface;
- microchannel geometry.

### Q6
Validated across:
- 1D Stefan;
- 2D pool boiling;
- 3D microchannel boiling;
- flow-boiling experiment.

### Q7
Public reported deviations:
- ~3.33% instantaneous interface position;
- ~1.2% time-averaged Nu;
- ~4.48% instantaneous bubble diameter;
- minimum wall-superheat deviation ~14.4% in flow-boiling experiment.

### Q8
Proves:
China has serious physics-based, experiment-validated phase-change modeling.

Does not prove:
China has the same exact-solution analytical tradition.

### Q9
Decision contribution
Kills:
> Russia has a broad advantage in thermal-fluid numerical mathematics.

### Q10
Use as domestic engineering-model baseline in Foundation-PoC.

**Decision:** PROMOTE COMPARATOR.

Evidence maturity: SYSTEM_VALUE for modeling tool  
Decision impact: Russia differentiation restricted to analytical interpretability  
Open question: compute cost / phone geometry  
Primary source: DOI above

---

## H4 — China PINN heat-source inversion for electronics

**[Heat source field inversion and detection based on physics-informed deep learning](https://doi.org/10.1016/j.icheatmasstransfer.2025.108824)** — Chi, Li, Long *et al.* — 2025.

### Q1
Problem:
infer unknown multi-heat-source distribution in integrated electronics.

### Q2
Direct target relevance:
high — this is closer to chip/package diagnostic use than the Russian inverse-problem evidence recovered.

### Q3
Hypothesis:
> embedding heat-transfer physics into neural-network inversion can reconstruct multiple source positions/shapes/powers with limited thermal information.

### Q4
HUST engineering-thermophysics line; broader domestic physics-informed / thermal reconstruction work exists.

### Q5
- heat-source location;
- shape;
- size;
- power density;
- thermal-field observations.

### Q6
PINN-based inversion across multi-source configurations.

### Q7
Public abstract reports:
- source shape/position similarity >90% in tested configurations;
- very small temperature-field errors in the reported synthetic/test cases.

### Q8
Proves:
China has direct electronics inverse-thermal mathematical capability.

Does not prove:
production smartphone deployment.

### Q9
Decision contribution
**KILL Russia inverse-diagnostics advantage claim.**

### Q10
If inverse thermal diagnostics becomes a project direction, benchmark domestically first; do not seek Russia simply for this method.

**Decision:** CHINA-BASELINE DOMINANT.

Evidence maturity: SYSTEM_VALUE / pre-product  
Decision impact: no Russia strategic differentiation  
Open question: real phone sensor sparsity/noise  
Primary source: DOI above



## H5 — Current Kutateladze–Lavrentyev collaboration signal

**[Heat Transfer and Fluid Dynamics Modeling in Shear-Driven Liquid Film Cooling System of Microelectronic Equipment](https://doi.org/10.1134/S0015462825604279)** — O.A. Kabov, V.V. Kuznetsov — 2025/2026 publication cycle.

### Q1 — problem + target mapping
Problem:
predict coupled film deformation / gas-flow / heat-transfer behavior in a locally heated microchannel.

Target mapping:
directly framed around microelectronic cooling, but not yet a smartphone implementation.

### Q2 — novelty / new-regime relevance
Decision-relevant value:
current analytical + numerical treatment of a shear-driven microfilm in the same mechanism family as the Kabov route.

For this project it is also an **institution-network signal**.

### Q3 — falsifiable hypothesis
> coupling local heating, gas pressure/shear and film deformation is necessary to predict microchannel behavior; reduced analytical treatment can provide a useful benchmark for numerical design.

### Q4 — research lineage / competing route
Kabov has a long shear-driven-film experimental/mechanism lineage.
Kuznetsov represents Lavrentyev Institute fluid-mechanics modeling.

This paper renews a collaboration pattern already visible in earlier joint work.

### Q5 — key control point
- gas pressure / velocity;
- interfacial shear;
- Marangoni force;
- film deformation;
- local heat source.

### Q6 — method
Exact linear approximation + thin-layer numerical calculation for FC-72 / nitrogen-type shear-film conditions.

### Q7 — reproducibility
Equations/model assumptions are public enough for method review.
No phone-scale experimental artifact is provided.

### Q8 — what it proves / does not prove
Proves:
- current cross-institute technical collaboration between the Kabov thermophysics line and Lavrentyev modeling line;
- a real mechanism/model bridge exists.

Does not prove:
- Kutateladze + Lavrentyev + ICM + NSU operate as one consortium;
- phone product value;
- low parasitic-power viability.

### Q9 — real contribution to decision
Upgrades the "Siberian cluster" from geographic inference to a **partially verified modular capability network**.

### Q10 — next action
Use Kutateladze as anchor and ask whether Lavrentyev currently participates in active film/microchannel modeling work.

Do not contact all institutions as if a formal consortium already exists.

**Decision:** PROMOTE AS PARTNER-ARCHITECTURE EVIDENCE.

Evidence maturity: STRUCTURAL_SIGNAL  
Decision impact: current partner topology upgraded  
Open questions: current project ownership; ICM formal linkage; contracting structure  
Primary source: DOI above



# I. Pavlenko dryout / rewetting pressure test

## I1 — Russia dielectric-fluid reversible→irreversible dry-spot dynamics

**[Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855)** — Surtaev, Malakhov, Perminov, Polovnikov, Pavlenko — 2026.

### Q1 — problem + target mapping
Problem:
what changes locally when dielectric-fluid boiling approaches CHF, and what distinguishes reversible dry spots from an irreversible thermal runaway region?

Phone mapping:
strong at the **failure mechanism** level; not a direct <0.5 mm sealed VC experiment.

### Q2 — novelty / new-regime relevance
Decision-relevant novelty:
quantitative dry-spot dynamics in current electronic-cooling dielectric fluids, not only integral CHF.

### Q3 — falsifiable hypothesis
> boiling crisis in these dielectric fluids is governed by coupled near-wall two-phase hydrodynamics and thermal stability of dry spots; a measurable transition in dry-spot statistics precedes irreversible dryout.

### Q4 — lineage / competing route
Kutateladze/Pavlenko has a long crisis/thin-layer/modified-surface lineage.

Independent China competing routes:
- GDUT capillary-fed dryout / steam-induced rewetting;
- SCUT mesh-wick capillary boiling;
- SJTU pore-scale dryout models;
- Changsha HFE confinement.

### Q5 — control variables
- fluid;
- surface/heater state;
- heat flux;
- dry-spot density / size;
- contact-line length;
- void fraction;
- propagation rate;
- heater thermal response.

### Q6 — experiment
Source facts:
- HFE-7100 and Novec 649;
- high-speed IR thermography;
- reflected-light/internal-reflection-style visualization;
- ML-assisted segmentation;
- dry-spot evolution up to CHF.

### Q7 — quantitative evidence / reproducibility
Source facts:
- HFE-7100 maximum HTC and CHF exceed Novec 649 by factors ~1.47 and ~1.56 in the tested system;
- bimodal dry-spot-area distribution near CHF;
- irreversible dry-spot growth rate measured and compared with thermal-wave models.

Reproducibility:
MEDIUM-HIGH for the diagnostic concept; phone transfer remains unverified.

### Q8 — what it proves / does not prove
Proves:
- current high-resolution failure-mechanism diagnostics;
- dry-spot statistics can precede irreversible crisis;
- dielectric-fluid specificity matters.

Does not prove:
- phone-scale sealed-device advantage;
- modified mesh outperforms domestic ultrathin wick;
- HFE-7100 should be the future product fluid.

### Q9 — decision contribution
Preserves a narrow Russia control point:
**dielectric-fluid boiling-crisis diagnostics and reversible→irreversible dryout interpretation.**

Kills none of the strong China wick evidence.

### Q10 — next action
Use this diagnostic philosophy in Stage-0 thin-coupon testing.

Mandatory comparison:
domestic composite/grooved/treated-mesh control.

Promotion only if Russian-guided surface/process or diagnostic criteria shift irreversible-dryout onset in phone-relevant geometry.

**Decision:** KEEP / NARROW / STAGE-0 PRIORITY #1.

Evidence maturity: STRUCTURAL_SIGNAL → early SYSTEM_VALUE  
Decision impact: Pavlenko remains #1, but broad dryout/rewetting uniqueness is removed  
Open questions: geometry, product fluid, process transfer, sealed manufacturing  
Primary source: DOI above

---

## I2 — China capillary-fed rewetting and cycle degradation

**[Hydrophilicity degradation and steam-induced rewetting during capillary-fed boiling](https://doi.org/10.1016/j.expthermflusci.2023.111030)** — Long, Wu, Zhou, Xie — Guangdong University of Technology — 2024.

### Q1
Problem:
why does a high-performing wick lose CHF after repeated dryout/boiling cycles?

### Q2
This is directly target-relevant because it is explicitly framed around ultrathin two-phase devices.

### Q3
Hypothesis:
> dryout-induced exposure enables organic adsorption, degrading superhydrophilicity; later boiling requires steam-induced rewetting, reducing CHF unless nanostructures stabilize the surface state.

### Q4
Independent China capability; no Russian coauthor dependence.

### Q5
- groove geometry;
- surface chemistry/wettability;
- dryout exposure;
- repeat cycle number;
- composite nanoporous layer.

### Q6
Source facts:
- ~200 μm upper groove width;
- ~150 μm depth;
- repeated capillary-fed boiling;
- pre/post wettability characterization.

### Q7
Source facts:
- CHF ~145.0 ± 3.3 -> 70.1 ± 2.9 W/cm² after five cycles;
- >51% reduction;
- contact angle >140° after degradation;
- composite wick stabilizes performance.

### Q8
Proves:
- China directly studies dryout, rewetting and cycling degradation in wick-scale thermal hardware.

Does not prove:
- same dielectric-fluid crisis diagnostics as Kutateladze;
- sealed phone VC reliability.

### Q9
Decision contribution
**KILLS broad Russia dryout/rewetting uniqueness.**

### Q10
Use as mandatory China Stage-0 comparator / design principle.

**Decision:** PROMOTE COMPARATOR.

Evidence maturity: SYSTEM_VALUE for wick mechanism  
Decision impact: Pavlenko differentiation narrowed  
Open question: fluid/product manufacturing differences  
Primary source: DOI above

---

## I3 — China modified copper mesh / capillary boiling

**[Enhanced capillary-driven thin film boiling through superhydrophilic mesh wick structure](https://doi.org/10.1016/j.ijthermalsci.2025.109782)** — Lu, Tao, Yang, Zhong, Xie — SCUT — 2025.

### Q1
Problem:
delay evaporator dryout by improving liquid supply and bubble departure in a mesh wick.

### Q2
Very direct comparator to Pavlenko's modified-mesh route at the generic control-point level.

### Q3
Hypothesis:
> nanowire-functionalized copper mesh raises capillary supply and lowers bubble adhesion, extending CHF and HTC.

### Q4
Independent China line.

### Q5
- copper mesh;
- nanowire surface;
- capillary coefficient;
- volumetric liquid flow;
- bubble adhesion;
- CHF/HTC.

### Q6
Modified vs untreated mesh capillary-film boiling.

### Q7
Public results:
- wicking coefficient +~33.8%;
- volumetric flow +~53.7%;
- CHF +~75.8%;
- HTC +~166.7%.

### Q8
Proves:
China has strong modified-mesh / capillary-supply / dryout engineering.

Does not prove:
same dielectric-fluid dry-spot diagnostic depth.

### Q9
Decision contribution
Kills:
> modified mesh itself is a Russia-specific collaboration whitespace.

### Q10
Pavlenko Stage-0 must beat a strong treated-copper-mesh baseline.

**Decision:** PROMOTE COMPARATOR / KILL GENERIC MESH THESIS.

Evidence maturity: SYSTEM_VALUE  
Decision impact: narrows Pavlenko to failure diagnostics/process know-how  
Open question: target-fluid and sealed-process behavior  
Primary source: DOI above

---

## I4 — China pore-scale capillary dryout boundary

**[Three-dimensional pore-scale simulations of thin-film evaporation on micro-pillar wicks](https://doi.org/10.1063/5.0271431)** — Li, Gong, Zhang, Cheng — SJTU — 2025.

### Q1
Problem:
predict the capillary-driven dryout heat flux and meniscus recession inside a microstructured wick.

### Q2
Directly relevant to the failure-boundary hypothesis.

### Q3
Hypothesis:
> wickability / volumetric liquid supply controls dryout; geometry and wettability influence the limit primarily through that transport capability.

### Q4
Independent China pore-scale modeling line.

### Q5
- wettability;
- pillar pitch;
- pillar height;
- liquid-front velocity;
- volumetric wicking rate.

### Q6
3D multiphase lattice-Boltzmann simulation + analytical dryout model.

### Q7
The simulation captures continuous meniscus recession after exceeding capillary dryout flux; analytical and numerical dryout predictions agree.

### Q8
Proves:
China can model capillary dryout mechanistically.

Does not prove:
experimental reversible/irreversible dry-spot statistics in dielectric pool/thin-layer boiling.

### Q9
Decision contribution
Eliminates any claim that Russia uniquely owns the dryout-boundary modeling problem.

### Q10
Use domestic model as Stage-0 mechanism baseline.

**Decision:** PROMOTE COMPARATOR.

Evidence maturity: STRUCTURAL_SIGNAL / modeling  
Decision impact: Russia residual becomes diagnostic/experimental specificity  
Open question: model-to-phone validation  
Primary source: DOI above

---

## I5 — China HFE-7100 confinement comparator

**[Coupled effects of surface structuring and capillary-length-scale confinement on pool boiling heat transfer and critical heat flux of HFE-7100](https://doi.org/10.1016/j.applthermaleng.2026.133219)** — Shi, Zhong, Li, Peng, Jiang — 2026.

### Q1
Problem:
how does shrinking vapor-space confinement alter HFE-7100 boiling/CHF on different structured surfaces?

### Q2
Important because it directly attacks Pavlenko's "thin dielectric layer boundary-condition depth."

### Q3
Hypothesis:
> stronger confinement creates an enhancement-to-deterioration transition; hierarchical surfaces better preserve liquid access / resist vapor congestion.

### Q4
Independent China line.

### Q5
- gap height;
- surface topology;
- HFE-7100;
- vapor morphology;
- HTC/CHF.

### Q6
Unconfined and 5/3/1 mm gaps; smooth vs microchannel vs hierarchical surface.

### Q7
At 1 mm:
- hierarchical peak HTC ~26.62 kW/(m²·K);
- CHF retention ~71% of unconfined;
- simpler surfaces ~56–57%.

### Q8
Proves:
China has current HFE confinement research closer to phone geometry than Pavlenko's public 1.5–6 mm crisis-transition work.

Does not prove:
reversible→irreversible dry-spot diagnostic equivalence.

### Q9
Decision contribution
Further narrows Russia's residual value away from confinement in general.

### Q10
Use 1 mm China data as mandatory geometry-pressure comparator; still push to ~0.2 mm phone-reference scale.

**Decision:** PROMOTE COMPARATOR / NARROW RUSSIA CLAIM.

Evidence maturity: SYSTEM_VALUE at millimeter confinement  
Decision impact: Pavlenko remains mechanism/diagnostic candidate, not geometry leader  
Open question: sub-mm sealed transfer  
Primary source: DOI above
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
