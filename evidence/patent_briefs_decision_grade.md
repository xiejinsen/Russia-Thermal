# Decision-Grade Patent Briefs

Last reviewed: 2026-10-04

## Purpose

Explain what the important patents actually control and what they mean for our mobile-terminal/chip-thermal opportunity space.

Each brief uses:

- **Review status**
- **Problem**
- **Claim / technical method**
- **Strategic implication**
- **What we learn for our insight**

This is a technical prior-art aid, **not legal freedom-to-operate advice**.

Full core 10Q cards: [Core Patent 10Q Decision Cards](patent_10q_cards_core_v01.md)

## Patent 10Q migration status

The project now uses:
[Mobile Thermal Insight — Paper & Patent 10Q Method](mobile_thermal_insight_10q_method.md)

Existing patent briefs already cover:
- problem;
- core technical method;
- strategic prior-art implication;
- mobile/IP insight.

They will be progressively backfilled with:
- independent-claim control point;
- dependent-claim implementation bounds;
- embodiment/manufacturability evidence;
- inventor/assignee capability lineage;
- overlap/design-around status;
- background vs potential foreground IP;
- explicit next claim/legal/partner/PoC action.

Until those are filled, do not interpret an abstract-level brief as a complete claim analysis.

---

# A. Russia — Kutateladze / Pavlenko

## A1. RU2793671C2 — thin capillary-porous boiling coating

**[Heat Transfer Wall of a Heat Exchanger and Method for Forming a Coating to Intensify Heat Transfer](https://patents.google.com/patent/RU2793671C2/en)** — A.A. Nikiforov, A.N. Pavlenko, M.Yu. Kuprikov *et al.* — RU2793671C2 — Kutateladze Institute of Thermophysics SB RAS / A.A. Nikiforov — 2023.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Create a structured heat-transfer wall that increases boiling/evaporation intensity while providing controlled capillary porosity.

**Claim / technical method**  
The patent describes an aluminum-containing substrate with a ceramic microarc-oxidation capillary-porous coating. The claim family includes porosity/wettability requirements; dependent geometry includes roughly 7–35 μm coating thickness and ~100 nm–10 μm pore scale.

**Strategic implication**  
This is important because it proves the Pavlenko/Kutateladze ecosystem has IP on **tens-of-micrometres**, not only millimetre-scale porous structures.

**What we learn for our insight**  
A phone-relevant Russian collaboration does not need to copy the thick 3D-printed coating. There is a credible background capability in very thin functional surfaces.

The open question is whether this thin-process family can be adapted to:
- copper/VC materials;
- product-path working fluid;
- sub-0.5 mm sealed device;
- post-vacuum/seal reliability.

---

## A2. RU2542253C2 — biphilic boiling surface

**[Method for Intensification of Heat Exchange at Boiling on a Smooth Surface](https://patents.google.com/patent/RU2542253C2/en)** — O.A. Kabov, E.Ya. Gatapova, E.A. Chinnov *et al.* — RU2542253C2 — Kutateladze Institute of Thermophysics SB RAS — 2015.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Enhance boiling by deliberately controlling where bubbles nucleate and how liquid wets the surface.

**Claim / technical method**  
Hydrophobic circular regions are arranged on a more hydrophilic/smooth surface, including checkerboard-type layouts and variants with different contact angles.

**Strategic implication**  
Broad “biphilic boiling enhancement” is not new. Russian prior art itself predates the current TPU work.

**What we learn for our insight**  
We should not seek IP on:
> hydrophilic + hydrophobic regions improve boiling.

A defensible new claim needs phone-specific constraints such as:
- sub-mm sealed confinement;
- transient/moving hotspots;
- working-fluid-specific rewetting;
- manufacturing-state retention.

---



## A3. RU2860581C1 — staged gas / droplet / shear-film cooling for electronics

**[Device for Cooling Electronic Equipment Using Gas-Drop Flow and Liquid Film](https://patents.google.com/patent/RU2860581C1/en)** — O.A. Kabov — RU2860581C1 — Kutateladze Institute of Thermophysics SB RAS — 2026.

**Review status:** DIRECT PATENT / INDEPENDENT-CLAIM REVIEWED.

**Problem**  
Electronic hotspots can vary over a wide load range. A single gas, spray or liquid-film mode may be inefficient outside its best operating regime.

**Independent claim / technical control point**  
The recovered claim combines:
- electronic heat-generating component on a substrate;
- flat micro-/mini-channel, roughly 100–2000 μm high;
- local channel expansion over heat-generating component, roughly 3–7 mm;
- gas-flow cooling at low load;
- gas routed to a droplet former as heat rises;
- one or more gas-liquid nozzles at the channel top;
- nozzle angle roughly 0–45°;
- nozzle diameter roughly 50–300 μm;
- gas-driven evaporating liquid film at higher load;
- added droplet flow at limiting heat load.

The architecture therefore stages:
**gas → gas jet/drop formation → liquid film → combined film + droplets**
as thermal load increases.

**Strategic implication**  
This is strong evidence that Kabov's film/droplet line remains:
- current;
- explicitly electronics-targeted;
- institutionally IP-active;
- focused on variable hotspot loads rather than only steady academic film experiments.

It strengthens partner/IP readiness.

**What we learn for our insight**  
The patent does **not** solve the phone integration problem.

Open product blockers:
- channel/expansion volume;
- gas/liquid supply parasitic power;
- pump/blower/nozzle complexity;
- acoustic impact;
- liquid inventory;
- sealed packaging;
- comparison with passive UTVC + microfan.

Therefore Kabov remains a **high-risk mechanism/IP reserve**, not a Primary Bet.

Potential joint foreground space must be narrower than the existing patent:
- phone-scale closed packaging;
- lower-power/self-driven assistance;
- hotspot-aware control under phone workload;
- hybrid use only at the local highest-heat-flux zone.

# B. Russia — MPEI

## B1. RU2727406C1 — porous Al₂O₃ nanoparticle coating

**[Method of Forming a Porous Coating of Nanoparticles](https://patents.google.com/patent/RU2727406C1/en)** — Yu.A. Kuzma-Kichta, N.S. Ivanov, D.S. Kiselev, A.V. Lavrikov — RU2727406C1 — National Research University MPEI — 2020.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Create a porous functional heat-transfer surface with enhanced capillary characteristics using a relatively simple deposition process.

**Claim / technical method**  
An aqueous Al₂O₃ nanoparticle colloid is sprayed in repeated passes onto a heated metal surface (~250 °C disclosed process), with droplets evaporating to form a porous nanoparticle layer.

**Strategic implication**  
This is direct background IP for Ivanov’s later hierarchical coating work.

**What we learn for our insight**  
The route is attractive because it may be simpler than exotic microfabrication, but the phone questions are:
- total layer thickness;
- adhesion under forming/welding;
- outgassing;
- pore blockage;
- copper compatibility.

---

## B2. RU2750831C1 — mechanically formed hydrophobic texture

**[Method for Forming Hydrophobic Texture on Metal Surface](https://patents.google.com/patent/RU2750831C1/en)** — Yu.A. Kuzma-Kichta, D. Chugunkov, A. Lavrikov *et al.* — RU2750831C1 — National Research University MPEI — 2021.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Produce a robust hydrophobic heat-transfer surface without relying solely on a fragile chemical coating.

**Claim / technical method**  
The disclosed method mechanically textures metal using hard spherical particles (~70–80 μm in an embodiment), producing depressions/protrusions and high water contact angle (~140–150° disclosed).

**Strategic implication**  
MPEI’s wettability work spans both hydrophilic/capillary and hydrophobic/condensation regimes, showing broader process capability than one thermosyphon paper suggests.

**What we learn for our insight**  
The disclosed feature dimensions are relatively large for a 0.2 mm UTVC channel. The process therefore needs aggressive down-scaling to be relevant to mobile VC internals.

---

## B3. RU2860061C1 — adjustable-wettability heat-transfer surface

**[Method for Forming Heat Transfer Surface with Adjustable Wettability Properties](https://patents.google.com/patent/RU2860061C1/en)** — N.S. Ivanov, M.M. Alyautdinova — RU2860061C1 — National Research University MPEI — 2026.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Different phase-change regimes benefit from different wetting states. A single process family that can tune the surface toward hydrophilic or hydrophobic behavior is therefore useful.

**Claim / technical method**  
The patent combines a micro-rough structure (~10–200 μm disclosed range) with nanoscale particles (~10–100 nm). Hydrophobic and hydrophilic process variants use different particle/binder/deposition routes.

**Strategic implication**  
This is strong evidence that the MPEI line is current and IP-active, not only academic history.

**What we learn for our insight**  
The broad idea “adjust wettability” is crowded. The opportunity would have to be a narrower state such as:
> wettability intentionally designed for product fluid + vacuum/seal process + dryout/rewetting behavior.

---

# C. Russia — TPU

## C1. RU2812668C1 — Feoktistov/Orlova steel heat-exchange laser micro/nanostructure

**[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — Darya A. Kuznechenkova, Evgeniya G. Orlova, Dmitry V. Feoktistov — RU2812668C1 — Tomsk Polytechnic University — 2024.

**Review status:** DIRECT PATENT / INDEPENDENT-CLAIM REVIEWED.

**Problem**  
Create a reproducible micro/nanostructure on a steel heat-exchange surface without adding the older nanoparticle-boiling/inert-atmosphere route.

**Independent claim / technical control point**  
One independent method claim specifies:
- 10 min abrasive preparation with diamond-paste grain decreasing 40 → 1 μm;
- 5 min ultrasonic cleaning at 35 kHz in 95 wt.% distilled water / 5 wt.% ethanol;
- 24 h drying;
- 1064 nm nanosecond fiber-laser treatment;
- pulse energy 0.3–1.0 mJ;
- 2–140 kHz;
- 1–120 ns;
- scan speed 100–500 mm/s;
- spot diameter 20–100 μm;
- longitudinal/transverse overlap 1–10 times.

The disclosed steel embodiment reports multimodal roughness with mean height ~9–18 μm and maximum feature height ~17.5–120 μm.

**Inventor / assignee lineage**  
The previous uncertainty is closed:
- assignee: Tomsk Polytechnic University;
- named inventors include **D.V. Feoktistov and E.G. Orlova**.

This is valid background-IP evidence for the current TPU surface-engineering partner line.

**Strategic implication**  
The claim is steel-centric and does not itself create the hydrocarbon-derived biphilic chemistry used in the 2026 wettability work. It is therefore useful as a **laser-only / low-organic process-control arm**, not as proof of a finished biphilic phone VC.

**What we learn for our insight**  
TPU has a quantified laser-process window and partner-linked IP. Remaining uncertainty moves away from "who owns/controls the process?" toward:
- copper transfer;
- vacuum/outgassing;
- sealed-fluid contamination;
- post-weld wetting retention;
- differentiation over existing wettability-patterned UTVC prior art.

---

# D. China / global — direct VC prior art

## D1. CN116989603B — wickless biphilic self-driven VC

**[An Ultra-Thin Coreless Heat Spreader Based on Self-Driven Hydrophilic and Hydrophobic Patterns](https://patents.google.com/patent/CN116989603B/en)** — Wang Changhong, Luo Qingyi — CN116989603B — Guangdong University of Technology — 2025.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Traditional wicks consume internal space and create flow resistance in very thin VCs.

**Claim / technical method**  
The patent replaces conventional wick transport with hydrophilic/hydrophobic patterned pathways, including branch/wedge structures, to drive condensate collection and return through Laplace/wetting forces in a sealed VC.

**Strategic implication**  
This directly occupies the broad claim space:
> “use biphilic patterning to self-drive liquid return inside an ultra-thin VC.”

**What we learn for our insight**  
TPU cannot be positioned as “novel biphilic VC.” It must deliver a narrower function such as robust rewetting under transient/moving hotspots or a process advantage.

---

## D2. CN118744276B — laser hierarchical UTVC wick

**[A Method for Preparing an Ultra-Thin Vapor Chamber Wick with High Heat Transfer Performance and an Ultra-Thin Vapor Chamber Wick](https://patents.google.com/patent/CN118744276B/en)** — Chen Chaoda, Wu Siyang, Chen Ziyang *et al.* — CN118744276B — Guangzhou Maritime University — 2025.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Improve capillary transport in an ultra-thin wick without relying on a conventional uniform porous structure.

**Claim / technical method**  
Laser machining forms hierarchical orthogonal grooves: one structure provides larger-scale liquid pathways while micro/nanostructured secondary grooves improve local capillarity/wetting.

**Strategic implication**  
Generic “laser-create hierarchical capillary wick” is already directly patented in China.

**What we learn for our insight**  
Any Russian laser/process collaboration must compete on:
- surface-state stability;
- dynamic dryout recovery;
- manufacturing cost/yield;
- product fluid;
not on the existence of hierarchical laser texture itself.

---

## D3. Huawei WO2025190051A1 — graded/multiple capillary structures

**[Wick, Vapor Chamber and Electronic Device](https://patents.google.com/patent/WO2025190051A1/en)** — Hu Qiang, Shi Jian, Niu Chenji — WO2025190051A1 — Huawei Technologies — 2025.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
A wick with very strong capillary force can also impose high liquid/vapor flow resistance. Ultra-thin devices need a better balance.

**Claim / technical method**  
Multiple capillary structures with different porosity/arrangement are stacked or overlapped. The architecture explicitly balances capillary pressure, liquid resistance, vapor resistance and evaporation.

**Strategic implication**  
Huawei is already patenting sophisticated **capillary architecture**, not just ordinary mesh.

**What we learn for our insight**  
Our collaboration should not try to own “graded porosity” broadly. More plausible whitespace is:
- fluid-specific wetting retention;
- transient rewetting topology;
- package/workload-aware liquid supply.

---

## D4. Xiaomi US12631401B2 — low-resistance channel inside wick

**[Vapor Chamber, Housing Assembly and Electronic Device](https://patents.google.com/patent/US12631401B2/en)** — Anqi Chen, Duzi Huang, Mingyan Liu — US12631401B2 — Beijing Xiaomi Mobile Software — 2026.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Liquid return through a porous wick can become too resistive, especially when the VC is thin.

**Claim / technical method**  
A dedicated wick channel is embedded in/along the wick structure and is designed to have lower flow resistance than the surrounding wick layer, improving liquid transport while remaining integrated with the device housing/VC.

**Strategic implication**  
Low-resistance liquid routing is already an OEM-controlled integration concept.

**What we learn for our insight**  
A new Russia-China joint route must add a different control variable — e.g. **where and when liquid is routed under changing hotspots**, not simply “make a low-resistance channel.”

---

## D5. Honor WO2026045372A1 — partitioned vapor/capillary channels

**[Vapor Chamber, Vapor Chamber Manufacturing Method, and Electronic Device](https://patents.google.com/patent/WO2026045372A1/en)** — Wei Zhenhong, Huo Enguang, Guo Tianshuo — WO2026045372A1 — Honor Device — 2026.

**Review status:** PATENT-CLAIM REVIEWED.

**Problem**  
Ultra-thin VCs need mechanical support while maintaining enough separate vapor and liquid transport capacity.

**Claim / technical method**  
Support structures partition the sealed cavity into vapor/capillary flow regions while being integrated into an electronic-device VC/manufacturing architecture.

**Strategic implication**  
Phone OEM IP is moving toward **multi-function internal structures**: support, vapor flow and capillary return are co-designed.

**What we learn for our insight**  
A Russian surface treatment that consumes channel height but performs only one function is less attractive. Ideally the new surface/wick should improve function **without adding an isolated structure**.

---

## D6. OPPO WO2024152684A1 / CN118368852A — microporous support + fluid circulation

**[Electronic Equipment and Its Vapor Chamber](https://patents.google.com/patent/WO2024152684A1/en)** — Jiang Huawen, Zhu Yiwei, Jiang Jialin *et al.* — WO2024152684A1 / CN118368852A family — OPPO — 2024.

**Review status:** PATENT ABSTRACT / CLAIM-SUMMARY REVIEW.

**Problem**  
VC internal support is mechanically necessary but can consume vapor space and interfere with liquid circulation.

**Claim / technical method**  
Microporous support strips partition the cavity while permitting working-fluid transport. The structure combines mechanical support with fluid circulation and aims to reduce vapor-flow resistance.

**Strategic implication**  
Again, phone OEMs are co-designing structure + flow instead of treating support and wick as independent components.

**What we learn for our insight**  
Our PoC should assess whether a Russian functional surface can be added **without sacrificing vapor-space/support integration**.

---

## D7. Honor CN117529010B / WO2024021719A1 — composite capillary paths

**[A Vapor Chamber and Electronic Device](https://patents.google.com/patent/CN117529010B/en)** — inventor metadata not yet normalized in the readable library — CN117529010B / WO2024021719A1 — Honor Device.

**Review status:** PATENT-CLAIM SUMMARY REVIEW.

**Problem**  
High capillary pressure and high permeability are often conflicting wick requirements.

**Claim / technical method**  
Porous and channel-type capillary structures are combined so one provides stronger capillary force while another improves permeability/flow.

**Strategic implication**  
The “capillary pressure vs permeability” trade-off is already explicitly addressed in OEM prior art.

**What we learn for our insight**  
MPEI ordered porous wick cannot win simply by saying it optimizes the same trade-off. It must show a quantitatively superior frontier or a unique manufacturable geometry.

---

# E. Patent-level synthesis

The patent landscape says:

1. **Broad surface/wick concepts are crowded.**
   - hydrophilic/hydrophobic patterns;
   - hierarchical laser texture;
   - porous/nanoparticle coatings;
   - graded capillary structures;
   - low-resistance liquid channels.

2. **OEMs are moving toward multifunctional integration.**
   The internal VC structure increasingly combines:
   - mechanical support;
   - vapor space;
   - liquid return;
   - housing/package integration.

3. **Our most credible new IP is not a surface morphology by itself.**
   Better candidates are:
   - product-fluid-specific wetting retention after manufacturing;
   - sub-mm dryout/rewetting topology;
   - moving-hotspot liquid routing;
   - surface/wick + package/workload co-design.

4. **Partner background IP must be separated from foreground IP.**
   Especially:
   - Pavlenko/Kutateladze thin coatings and historical biphilic boiling;
   - MPEI nanoparticle / wettability process family;
   - TPU institutional micro/nanostructure patent.

