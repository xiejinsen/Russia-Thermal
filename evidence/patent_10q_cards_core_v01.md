# Core Decision-Grade Patents — 10Q Decision Cards v0.1

Last reviewed: 2026-10-04

## How to use this file

This is the deep-reading layer behind:
- [Human-Readable Bibliography](readable_bibliography.md)
- [Decision-Grade Patent Briefs](patent_briefs_decision_grade.md)

Method:
[Mobile Thermal Insight — Paper & Patent 10Q Method](mobile_thermal_insight_10q_method.md)

This is a technical prior-art and collaboration-IP aid, **not legal FTO advice**.

---

# A. Kutateladze / Pavlenko background IP

## A1 — RU2793671C2: thin capillary-porous boiling coating

**[Heat Transfer Wall of a Heat Exchanger and Method for Forming a Coating to Intensify Heat Transfer](https://patents.google.com/patent/RU2793671C2/en)** — A.A. Nikiforov, A.N. Pavlenko, M.Yu. Kuprikov *et al.* — RU2793671C2 — Kutateladze Institute of Thermophysics SB RAS / A.A. Nikiforov — 2023.

**Review status:** PATENT-CLAIM REVIEWED.

### P1 — Problem
Improve boiling/evaporation heat transfer using a capillary-porous heat-transfer wall.

### P2 — Mobile/chip relevance
**Transferable, medium-high.**
The coating thickness/pore scale can be tens of micrometres, which is much closer to phone constraints than thick porous AM structures.

### P3 — Prior-art/crowding
Porous and oxide boiling surfaces are crowded globally. Broad “porous hydrophilic boiling coating” is not whitespace.

### P4 — Independent-claim control point
Project claim review indicates:
- aluminum-containing substrate;
- ceramic microarc-oxidation capillary-porous coating;
- specified surface porosity/wetting characteristics.

### P5 — Dependent-claim bounds
Project evidence records:
- coating thickness ~7–35 μm;
- pore scale ~100 nm–10 μm;
- water contact angle <40°;
- surface porosity ~6–12%.

### P6 — Manufacturability signal
Strong:
the patent describes a concrete coating process and dimensional range.

Unknown:
compatibility with copper VC manufacturing and product working fluids.

### P7 — Inventor/assignee lineage
A.N. Pavlenko + Kutateladze Institute:
directly relevant to our priority #1 partner line.

### P8 — Overlap/design-around
This is likely **background IP** for any collaboration that uses the same microarc-oxidation coating family.

Design-around may exist through:
- different substrate/process;
- different working-fluid-specific functional state;
- phone-specific topology/process sequence.

### P9 — Collaboration IP boundary
Before Stage 1 clarify:
- whether proposed phone coupon uses this protected process;
- who owns fluid-specific / thin-wick / post-process retention improvements.

### P10 — Next action
- partner clarification of background rights;
- map family/legal status;
- avoid claiming generic porous coating as foreground IP.

**Decision:** **BACKGROUND-IP RELEVANT / STRONG PARTNER SIGNAL.**

---

## A2 — RU2542253C2: patterned hydrophobic regions for boiling

**[Method for Intensification of Heat Exchange at Boiling on a Smooth Surface](https://patents.google.com/patent/RU2542253C2/en)** — O.A. Kabov, E.Ya. Gatapova, E.A. Chinnov *et al.* — RU2542253C2 — Kutateladze Institute of Thermophysics SB RAS — 2015.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
control nucleation/boiling using patterned wetting contrast.

### P2
Mobile relevance:
transferable mechanism, but broad concept is already crowded.

### P3
Important prior-art implication:
Russian prior art itself predates current “biphilic cooling” enthusiasm.

### P4
Independent-claim control point:
patterned hydrophobic regions on a more wetting/smooth surface for boiling enhancement.

### P5
Dependent claims include layout/contact-angle implementation detail.

### P6
Manufacturability:
patterning is conceptually straightforward; phone manufacturability depends on material/process.

### P7
Lineage:
Kabov/Gatapova/Chinnov within Kutateladze — important institute-level background, although not identical to Pavlenko’s current mesh route.

### P8
Overlap:
directly overlaps broad biphilic-boiling concept.

### P9
Collaboration implication:
do not claim “hydrophilic + hydrophobic pattern improves boiling” as new foreground IP.

### P10
Next:
focus new claims on:
- sub-mm sealed confinement;
- working-fluid-specific retention;
- transient/moving-hotspot rewetting;
- manufacturing-state stability.

**Decision:** **PRIOR-ART / BROAD-NOVELTY KILLER.**

---

# B. MPEI background IP

## B1 — RU2727406C1: porous Al₂O₃ nanoparticle coating

**[Method of Forming a Porous Coating of Nanoparticles](https://patents.google.com/patent/RU2727406C1/en)** — Yu.A. Kuzma-Kichta, N.S. Ivanov, D.S. Kiselev, A.V. Lavrikov — RU2727406C1 — National Research University MPEI — 2020.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
form a porous nanoparticle layer with useful capillary/heat-transfer properties.

### P2
Mobile relevance:
plausible process transfer; phone thickness/process compatibility unproven.

### P3
Crowding:
nanoparticle/porous coatings are common; exact process is more relevant than broad concept.

### P4
Control point:
aqueous Al₂O₃ colloid deposited in repeated spray/pass sequence on a heated substrate.

### P5
Implementation:
project evidence records substrate heating around ~250 °C and porous coating formation through evaporation/deposition.

### P6
Manufacturability:
moderately strong laboratory process evidence.

Open:
- total layer thickness;
- area uniformity/yield;
- adhesion after phone VC forming/welding;
- copper compatibility.

### P7
Lineage:
Kuzma-Kichta / Ivanov / MPEI
→ 2021 transport paper
→ hierarchical thermosyphon
→ 42-month reliability.

Strong partner-lineage signal.

### P8
Overlap:
adjacent to many porous/nanoparticle surface patents; not broad whitespace.

### P9
Collaboration boundary:
this deposition process should be treated as potential **MPEI background IP**.

Foreground space may be:
- scaled phone geometry;
- product-fluid state;
- post-seal retention;
- new integration topology.

### P10
Next:
ask MPEI which current Stage-0 coating recipe is covered by this patent or later patents.

**Decision:** **BACKGROUND-IP RELEVANT / PARTNER-LINEAGE EVIDENCE.**

---

## B2 — RU2750831C1: hydrophobic mechanical texture

**[Method for Forming Hydrophobic Texture on Metal Surface](https://patents.google.com/patent/RU2750831C1/en)** — Yu.A. Kuzma-Kichta, D. Chugunkov, A. Lavrikov *et al.* — RU2750831C1 — National Research University MPEI — 2021.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
create robust hydrophobic texture on metal.

### P2
Mobile relevance:
low-medium for internal VC because disclosed feature dimensions are large; useful as capability lineage.

### P3
Crowding:
hydrophobic textured metals are highly crowded.

### P4
Control point:
mechanical texturing using hard spherical particles.

### P5
Project evidence records:
- particles ~70–80 μm;
- depressions ~80–90 μm;
- protrusions ~30 μm;
- water contact angle ~140–150°.

### P6
Manufacturability:
simple process concept, but feature scale competes strongly with a ~0.2 mm UTVC channel.

### P7
Lineage:
shows MPEI can deliberately engineer both hydrophilic/capillary and hydrophobic surface states.

### P8
Overlap:
broad hydrophobic texture is not strategic whitespace.

### P9
IP implication:
useful background only; phone foreground must be far narrower.

### P10
Next:
no need to pursue as standalone phone route; retain for process capability context.

**Decision:** **MECHANISM/BACKGROUND ONLY.**

---

## B3 — RU2860061C1: adjustable-wettability heat-transfer surface

**[Method for Forming Heat Transfer Surface with Adjustable Wettability Properties](https://patents.google.com/patent/RU2860061C1/en)** — N.S. Ivanov, M.M. Alyautdinova — RU2860061C1 — National Research University MPEI — 2026.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
create a heat-transfer surface whose wetting state can be intentionally tailored for different phase-change regimes.

### P2
Mobile relevance:
medium-high as a current partner capability signal.

### P3
Crowding:
“tunable wettability” is broad/crowded; exact structure/process matters.

### P4
Control point:
micro-rough surface + nanoscale particles with process variants that produce different wetting states.

### P5
Project evidence records:
- microstructure ~10–200 μm;
- nanoparticles ~10–100 nm;
- hydrophilic/hydrophobic process variants.

### P6
Manufacturability:
concrete process family exists; phone-scale total thickness/process compatibility still unknown.

### P7
Lineage:
directly tied to N.S. Ivanov and M.M. Alyautdinova, strengthening current partner/IP continuity.

### P8
Overlap:
adjacent to TPU and broad global wettability prior art.

### P9
Collaboration boundary:
likely current MPEI background IP.
Possible foreground:
- product-fluid-specific state;
- phone-process retention;
- high-flux dryout/rewetting use.

### P10
Next:
request exact current coating stack and patent-family coverage before Stage-1.

**Decision:** **CURRENT BACKGROUND-IP / STRONG PARTNER SIGNAL.**

---

# C. TPU institutional IP

## C1 — RU2812668C1: micro/nanostructure on steel heat-exchange surface

**[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — inventor mapping pending — RU2812668C1 — Tomsk Polytechnic University — 2024.

**Review status:** PATENT METADATA / PARTIAL CLAIM REVIEW.

### P1
Problem:
form micro/nanostructure on a steel heat-exchange surface.

### P2
Mobile relevance:
possible surface-process relevance, but steel-centric and phone-team linkage unclear.

### P3
Crowding:
micro/nanostructured heat-transfer surfaces are highly crowded.

### P4
Independent claim:
**not yet reliably recovered to decision-grade precision in current public search.**

### P5
Dependent claim details:
pending.

### P6
Manufacturability:
institutional patent existence is confirmed; exact phone-relevant process boundary is unresolved.

### P7
Inventor/assignee lineage:
TPU assignee/institutional signal confirmed.

Critical unresolved:
**Feoktistov-team inventor/ownership linkage is not verified.**

### P8
Overlap:
cannot make a blocking or design-around conclusion until independent claim is recovered.

### P9
Collaboration implication:
do not present this as Feoktistov personal/team background IP.

### P10
Next:
partner-only or official-register clarification if public claim text remains inaccessible.

**Decision:** **INSTITUTIONAL IP SIGNAL / CLAIM-PENDING.**

---

# D. China / OEM direct VC prior art

## D1 — CN116989603B: coreless biphilic self-driven VC

**[An Ultra-Thin Coreless Heat Spreader Based on Self-Driven Hydrophilic and Hydrophobic Patterns](https://patents.google.com/patent/CN116989603B/en)** — Wang Changhong, Luo Qingyi — CN116989603B — Guangdong University of Technology — 2025.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
reduce wick thickness/flow resistance while driving condensate return in an ultra-thin VC.

### P2
Mobile relevance:
DIRECT.

### P3
Crowding:
directly crowds biphilic/self-driven liquid-return claims.

### P4
Control point:
hydrophilic/hydrophobic patterned pathways in a sealed ultra-thin heat spreader, including branch/wedge-style liquid-guiding geometry.

### P5
Dependent implementation:
pattern geometry / liquid-return organization.

### P6
Manufacturability:
patent describes an integrated VC architecture, not only a coupon.

### P7
Assignee:
Guangdong University of Technology — China academic comparator.

### P8
Overlap:
high overlap with broad TPU-style “biphilic VC” concept.

### P9
Implication:
foreground IP must be narrower than patterned wetting.

### P10
Next:
use as direct prior art in any TPU Stage-1 IP review.

**Decision:** **HIGH-CROWDING PRIOR ART.**

---

## D2 — CN118744276B: laser hierarchical UTVC wick

**[A Method for Preparing an Ultra-Thin Vapor Chamber Wick with High Heat Transfer Performance and an Ultra-Thin Vapor Chamber Wick](https://patents.google.com/patent/CN118744276B/en)** — Chen Chaoda, Wu Siyang, Chen Ziyang *et al.* — CN118744276B — Guangzhou Maritime University — 2025.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
improve liquid transport in an ultra-thin wick while preserving a usable internal VC geometry.

### P2
Mobile relevance:
DIRECT.

### P3
Crowding:
laser-created hierarchical capillary wick is explicitly occupied.

### P4
Control point:
hierarchical/orthogonal groove structure created by laser machining.

### P5
Implementation:
larger liquid-routing features + micro/nano secondary features.

### P6
Manufacturability:
described as a UTVC wick preparation route.

### P7
Assignee:
Guangzhou Maritime University.

### P8
Overlap:
directly adjacent to TPU laser-process ideas and generic laser-wick concepts.

### P9
Implication:
do not seek foreground IP on generic hierarchical laser wick.

### P10
Next:
TPU must compete on process retention, dynamic rewetting or manufacturing advantages.

**Decision:** **DIRECT LASER-WICK PRIOR ART.**

---

## D3 — Huawei WO2025190051A1: multiple/graded capillary structures

**[Wick, Vapor Chamber and Electronic Device](https://patents.google.com/patent/WO2025190051A1/en)** — Hu Qiang, Shi Jian, Niu Chenji — WO2025190051A1 — Huawei Technologies — 2025.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
balance capillary pressure against liquid/vapor resistance in a thin VC.

### P2
Mobile relevance:
DIRECT OEM PHONE/ELECTRONICS.

### P3
Crowding:
graded/multiple capillary structures are already an OEM design space.

### P4
Control point:
multiple capillary structures with different porosity/arrangement and overlap relationships.

### P5
Dependent implementation:
specific geometry/porosity relationships tune capillarity vs resistance.

### P6
Manufacturability:
electronic-device integration is explicit.

### P7
Assignee:
Huawei Technologies — especially relevant to our Huawei-oriented product context.

### P8
Overlap:
strong against broad claims of “multi-scale/graded wick.”

### P9
Collaboration implication:
new Russian joint IP should avoid broad graded-wick territory.

### P10
Next:
use as mandatory Huawei background comparator before any phone VC joint filing.

**Decision:** **KEY OEM PRIOR ART.**

---

## D4 — Xiaomi US12631401B2: low-resistance embedded wick channel

**[Vapor Chamber, Housing Assembly and Electronic Device](https://patents.google.com/patent/US12631401B2/en)** — Anqi Chen, Duzi Huang, Mingyan Liu — US12631401B2 — Beijing Xiaomi Mobile Software — 2026.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
reduce liquid-return resistance inside an ultra-thin VC.

### P2
Mobile relevance:
DIRECT.

### P3
Crowding:
low-resistance embedded liquid channel is already an OEM concept.

### P4
Control point:
a wick channel integrated in/with a wick layer, with lower flow resistance than surrounding porous wick.

### P5
Implementation:
integrated housing/electronic-device architecture.

### P6
Manufacturability:
high product-integration signal.

### P7
Assignee:
Xiaomi.

### P8
Overlap:
adjacent to any MPEI/Ural proposal that simply adds “easier liquid path.”

### P9
Implication:
foreground IP needs dynamic or state-dependent routing, not just low resistance.

### P10
Next:
keep as prior art for moving-hotspot liquid-routing thesis.

**Decision:** **KEY OEM PRIOR ART.**

---

## D5 — Honor WO2026045372A1: support + vapor/capillary partition

**[Vapor Chamber, Vapor Chamber Manufacturing Method, and Electronic Device](https://patents.google.com/patent/WO2026045372A1/en)** — Wei Zhenhong, Huo Enguang, Guo Tianshuo — WO2026045372A1 — Honor Device — 2026.

**Review status:** PATENT-CLAIM REVIEWED.

### P1
Problem:
mechanically support a thin VC without sacrificing vapor/liquid transport.

### P2
Mobile relevance:
DIRECT.

### P3
Crowding:
internal structure is increasingly multifunctional.

### P4
Control point:
support structures partition/organize vapor and capillary channels.

### P5
Implementation:
electronic-device VC/manufacturing integration.

### P6
Manufacturability:
high product-relevance signal.

### P7
Assignee:
Honor.

### P8
Overlap:
important against Russian concepts that add a single-purpose structure consuming channel height.

### P9
Implication:
new surface/wick should ideally be **integrated / multifunctional**, not additive.

### P10
Next:
use in Stage-1 geometry/IP review.

**Decision:** **KEY INTEGRATION PRIOR ART.**

---

## D6 — OPPO WO2024152684A1 / CN118368852A: microporous support + circulation

**[Electronic Equipment and Its Vapor Chamber](https://patents.google.com/patent/WO2024152684A1/en)** — Jiang Huawen, Zhu Yiwei, Jiang Jialin *et al.* — WO2024152684A1 / CN118368852A family — OPPO — 2024.

**Review status:** PATENT ABSTRACT / CLAIM-SUMMARY REVIEW.

### P1
Problem:
avoid support structures becoming dead volume / flow blockage.

### P2
Mobile relevance:
DIRECT.

### P3
Crowding:
support + fluid circulation co-design is active OEM space.

### P4
Recovered control point:
microporous support strips partition the cavity while allowing working-fluid transit.

### P5
Dependent implementation:
full independent/dependent claim normalization remains incomplete.

### P6
Manufacturability:
electronic-device architecture is explicit.

### P7
Assignee:
OPPO.

### P8
Overlap:
adjacent to multifunctional support/wick architectures.

### P9
Implication:
phone VC whitespace is increasingly about **coupled structural functions**, not isolated surface features.

### P10
Next:
complete China-family/legal-status review only if a future proposal enters this structural space.

**Decision:** **ADJACENT OEM PRIOR ART.**

---

## D7 — Honor CN117529010B / WO2024021719A1: composite capillary paths

**[A Vapor Chamber and Electronic Device](https://patents.google.com/patent/CN117529010B/en)** — inventor metadata not yet normalized — CN117529010B / WO2024021719A1 — Honor Device.

**Review status:** PATENT-CLAIM SUMMARY REVIEW.

### P1
Problem:
balance high capillary pressure against permeability/flow resistance.

### P2
Mobile relevance:
DIRECT.

### P3
Crowding:
capillary-pressure/permeability trade-off is already explicitly addressed.

### P4
Control point:
porous + channel-type capillary structures combined.

### P5
Implementation:
one region/structure supplies stronger capillary action, another improves transport.

### P6
Manufacturability:
electronic-device context supports product relevance.

### P7
Assignee:
Honor.

### P8
Overlap:
directly relevant to MPEI ordered-wick and multi-path liquid-return concepts.

### P9
Implication:
“optimize capillary pressure and permeability” is not enough for new strategic IP.

### P10
Next:
only promote ordered-wick foreground IP if it establishes a quantitatively distinct frontier or new dynamic control.

**Decision:** **DIRECT PRIOR ART FOR ORDERED-WICK THESIS.**

---

# Cross-patent synthesis

## What these 10Q cards change

### 1. Surface morphology alone is not a strategic IP thesis
Broad:
- hydrophilic/hydrophobic;
- porous/nanoparticle coating;
- laser hierarchy;
- graded capillary structure;
- low-resistance channel

are already crowded.

### 2. Russia’s patents matter mainly as background capability/IP
Especially:
- Kutateladze thin coating / biphilic history;
- MPEI nanoparticle + tunable-wettability process family;
- TPU institutional micro/nano surface IP.

### 3. OEMs show where product integration is moving
Huawei/Xiaomi/Honor/OPPO patents increasingly combine:
- capillarity;
- vapor flow;
- liquid routing;
- support;
- housing/device integration.

### 4. More credible foreground space
- working-fluid-specific wetting retention after phone manufacturing;
- sub-mm dryout/rewetting topology;
- transient/moving-hotspot liquid routing;
- package/workload-informed liquid-supply design;
- process-state retention after vacuum/seal/cycling.

### 5. Several IP questions are now partner/legal-gate questions, not search questions
Especially:
- Pavlenko/Kutateladze background-right boundary;
- MPEI current process-family coverage;
- TPU RU2812668 inventor/claim linkage.
