# Stage-0 Partner × Technology Decision Scorecard v0.1

Last updated: 2026-10-04

Status: **CURRENT Stage-0 partner-decision source of truth**

## Decision scope

This scorecard answers:

> Which current Russian partner/technology lines should enter a **Stage-0 information exchange + discriminating coupon experiment**, and what prerequisite must be satisfied before any sealed-device / contractual commitment?

It does **not** mean:
- final partner selection;
- product readiness;
- legal FTO;
- Stage-1 sealed-VC approval.

## Hard mobile/chip anchor

All judgments are normalized against:
- smartphone / mobile-chip thermal use;
- ~0.39–0.4 mm-class UTVC benchmark;
- ~0.2 mm internal channel;
- ~60 μm reference mesh;
- DI water as current sealed-copper product-path baseline;
- HFE-7100 as mechanism bridge only;
- <=35 μm preferred added functional layer;
- <=120 μm preferred total functional element;
- <=150 μm stretch ceiling.

## Legend

Status:
- **PASS** — decision-grade evidence currently satisfies the dimension for Stage-0.
- **PARTIAL** — useful evidence exists, but direct phone-transfer evidence is incomplete.
- **FAIL** — current state does not satisfy the Stage-0 requirement.
- **UNKNOWN** — evidence is insufficient; absence is not treated as failure.

Resolution route:
- **[PUBLIC]** — public research can resolve / has resolved this item.
- **[PARTNER]** — further useful detail is expected mainly from partner-shareable data/know-how.
- **[EXPERIMENT]** — only a physical test can close the decision.

A cell may contain multiple route tags when the next decision needs both.

---

## Local evidence spine

The scorecard is a decision file, so the core facts used here are locally traceable as required by the Evidence Standard.

### Strong mobile / UTVC comparator
- **[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.
- **[Effect of Laser Ablation Surface Modification on the Capillary Performance of the Wick Structure for Ultra-Thin Vapor Chamber](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126774)** — Jiu Yu, Wenqi Fang, Guoliang Hu *et al.* — *International Journal of Heat and Mass Transfer*, 2025.

### Kutateladze Institute — Lab 1.3 / Pavlenko-led line
- **[Electrochemical Modification of the Metal Mesh Surface for Heat Transfer Enhancement during Boiling of a Thin Layer of HFE-7100](https://doi.org/10.1134/S1810232825700183)** — A.E. Brester, D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Journal of Engineering Thermophysics*, 2025.
- **[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.
- **[Heat Transfer Wall of a Heat Exchanger and Method for Forming a Coating to Intensify Heat Transfer](https://patents.google.com/patent/RU2793671C2/en)** — A.A. Nikiforov, A.N. Pavlenko, M.Yu. Kuprikov *et al.* — RU2793671C2 — Kutateladze Institute of Thermophysics SB RAS / A.A. Nikiforov — 2023.

### MPEI — Ivanov/Kuzma-Kichta team
- **[Use of Micro- and Nanocoating in the Evaporator to Enhance Heat Transfer in a Thermosiphon](https://doi.org/10.1134/S0040601525600683)** — N.S. Ivanov, Yu.A. Kuzma-Kichta, M.M. Alyautdinova — *Thermal Engineering*, 2026.
- **[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — *Progress in Engineering Science*, 2026.
- **[Heat Transfer Crisis Investigation in a Microchannel with and without Nanoparticles Coating](https://doi.org/10.1088/1742-6596/1683/2/022087)** — Yu.A. Kuzma-Kichta, A.V. Lavrikov, M. Shustov, E.A. Kustova, N.S. Ivanov *et al.* — *Journal of Physics: Conference Series*, 2020.
- **[Ivanov 2024 dissertation — heat-transfer enhancement in a thermosyphon using micro/nanoparticle coatings](https://mpei.ru/diss/Lists/FilesDissertations/757-%D0%94%D0%B8%D1%81%D1%81%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf)** — N.S. Ivanov — MPEI, 2024.

### TPU — Feoktistov/Orlova team
- **[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — D.V. Feoktistov, E.G. Orlova, E.Yu. Laga *et al.* — *International Journal of Heat and Mass Transfer*, 2026.
- **[Hydrophobization of Metal Surfaces by Laser Treatment and Subsequent Heat Treatment of Hydrocarbon Liquids](https://doi.org/10.1016/j.surfin.2026.109390)** — D.V. Feoktistov, E.G. Orlova, G.E. Kotelnikov *et al.* — *Surfaces and Interfaces*, 2026.
- **[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — Darya A. Kuznechenkova, Evgeniya G. Orlova, Dmitry V. Feoktistov — RU2812668C1 — Tomsk Polytechnic University — 2024.

Detailed interpretation remains in:
- `../evidence/paper_10q_cards_core_v01.md`;
- `../evidence/patent_10q_cards_core_v01.md`;
- partner-specific briefs in this folder.

---

## Unified scorecard

| Dimension | **Kutateladze Institute — Lab 1.3 / Pavlenko-led line** | **MPEI — Ivanov/Kuzma-Kichta line** | **TPU — Feoktistov/Orlova team** | **MPEI — ordered-wick team** |
|---|---|---|---|---|
| **Mobile/chip relevance** | **PASS [PUBLIC]** — dielectric boiling / electronics-cooling physics; phone transfer explicitly defined | **PARTIAL [PUBLIC]** — current long-life device is a thermosyphon, but same MPEI Ivanov/Kuzma-Kichta team lineage includes 0.2 mm water-boiling microchannel work | **PARTIAL [PUBLIC]** — microchip-cooling framing + water droplet/surface physics, no sealed phone device | **PARTIAL [PUBLIC]** — heat-pipe/wick mechanism relevant, no phone-scale specimen |
| **High heat-flux evidence** | **PASS [PUBLIC]** — CHF/dryout/boiling evidence is a core capability | **PARTIAL [PUBLIC][EXPERIMENT]** — 2017/2020 0.2 mm water microchannel CHF lineage; not the exact 2026 hierarchical long-life surface | **PARTIAL [PUBLIC][EXPERIMENT]** — high-temperature droplet/evaporation evidence, no normalized sealed-VC hotspot proof | **UNKNOWN [EXPERIMENT]** |
| **Sub-mm geometry** | **PARTIAL [EXPERIMENT]** — published 100/220 μm wires are not a drop-in ~60 μm phone wick; boiling layer is mm-scale | **PARTIAL [PUBLIC][EXPERIMENT]** — 0.2 mm microchannel lineage exists, but current hierarchy uses ~100 μm-radius grooves | **PARTIAL [PUBLIC][EXPERIMENT]** — laser roughness can be micron-scale; disclosed max features reach ~120 μm and substrate is steel/AlMg3 | **UNKNOWN [PARTNER][EXPERIMENT]** |
| **Product-fluid transfer** | **UNKNOWN [EXPERIMENT]** — exact modified-mesh benefit not shown in DI water/product-path fluid | **PARTIAL [PUBLIC][EXPERIMENT]** — water thin-channel lineage + R410A long-life device; exact sealed DI-water hierarchy unproven | **PARTIAL [PUBLIC][EXPERIMENT]** — water surface data exist; sealed working-fluid compatibility unknown | **UNKNOWN [EXPERIMENT]** |
| **Long-term reliability** | **UNKNOWN [EXPERIMENT]** — no phone-relevant long-cycle evidence | **PASS [PUBLIC]** — 42-month periodic R410A two-phase operation with morphology/thermal retention, while capillary aging is visible | **PARTIAL [PUBLIC][EXPERIMENT]** — humidity/saline/abrasion durability is not sealed two-phase durability | **UNKNOWN [EXPERIMENT]** |
| **Vacuum / process compatibility** | **UNKNOWN [EXPERIMENT]** | **UNKNOWN [EXPERIMENT]** | **UNKNOWN [EXPERIMENT]** — especially hydrocarbon-derived hydrophobic branch | **UNKNOWN [EXPERIMENT]** |
| **Manufacturability** | **PARTIAL [PARTNER][EXPERIMENT]** — exact hydrogen-bubble recipe / adhesion / permeability are non-public | **PARTIAL [PUBLIC][PARTNER][EXPERIMENT]** — representative ~5 μm layer known; thicker >10–15 μm deposition states also exist; scale-down/yield unknown | **PARTIAL [PUBLIC][EXPERIMENT]** — laser window is claim-mapped; copper + biphilic chemistry process remains open | **UNKNOWN [PARTNER][EXPERIMENT]** |
| **IP clarity** | **PARTIAL [PUBLIC][PARTNER]** — relevant institute IP + Huawei-related background; field boundary needs partner/legal discussion | **PARTIAL [PUBLIC][PARTNER]** — strong MPEI patent lineage; phone-specific foreground/design-around still to define | **PARTIAL [PUBLIC][PARTNER]** — RU2812668 inventor + independent claim now closed; generic laser/biphilic prior art remains crowded | **PARTIAL [PUBLIC][PARTNER]** |
| **Partner readiness** | **PASS [PUBLIC][PARTNER]** — active team/contact; technical-discussion ready | **PASS [PUBLIC][PARTNER]** — Ivanov current role/project/patent continuity verified | **PASS [PUBLIC][PARTNER]** — Feoktistov current role + direct patent inventor linkage verified | **PARTIAL [PARTNER]** — team signal exists; device specimen not yet demonstrated |
| **Strong comparator gap** | **PARTIAL [PUBLIC][EXPERIMENT]** — independent China now has direct capillary-fed dryout/steam-rewetting, treated mesh and dryout modeling; Pavlenko must beat strong domestic wick controls specifically on irreversible-dryout onset / recovery, not generic CHF | **PARTIAL+ [PUBLIC][PARTNER][EXPERIMENT]** — China is strong in product VC reliability and accelerated life; no matched public multi-year engineered-surface analogue was recovered, but MPEI still must prove a useful early aging indicator under phone-scale copper-water conditions | **PARTIAL [EXPERIMENT]** — generic biphilic/laser UTVC is already crowded; only confined stable routing/rewetting can differentiate | **UNKNOWN [EXPERIMENT]** |
| **Stage-0 cost / time** | **PASS [EXPERIMENT]** — thin coupons can discriminate within 3–6 months | **PASS [EXPERIMENT]** — scaled coupons + heat-flux step-up are bounded | **PASS [EXPERIMENT]** — laser-only vs biphilic copper coupon screen is bounded | **PARTIAL [PARTNER][EXPERIMENT]** — first dependency is obtaining a physical specimen |
| **Kill-risk acceptability** | **PARTIAL [EXPERIMENT]** — high geometry/fluid-transfer kill risk, but strong mechanism justifies a bounded test | **PARTIAL [EXPERIMENT]** — high scale-down/high-flux kill risk, partly offset by long-life + thin-channel lineage | **PARTIAL [EXPERIMENT]** — contamination/comparator risk is high, but low-cost two-branch screen is discriminating | **FAIL [EXPERIMENT]** — too many basics unknown before a physical thin coupon |

---

## Decision output

| Priority | Institution | Team / line | Stage-0 decision | Required prerequisite before meaningful Stage-0 spend | Why |
|---:|---|---|---|---|---|
| **1** | **Kutateladze Institute of Thermophysics SB RAS** | **Lab 1.3 — Pavlenko-led line; Surtaev / Shvetsov / Zhukov** | **GO WITH PREREQUISITE** | partner-shareable process window + phone-scale dry-spot diagnostic/control transfer path | strongest current Russian dielectric irreversible-dryout diagnostic signal; broad dryout/rewetting advantage is killed by independent China evidence |
| **2** | **Moscow Power Engineering Institute (MPEI)** | Ivanov / Kuzma-Kichta / Alyautdinova | **GO WITH PREREQUISITE** | exact current groove/as-built dataset + 42-month aging dataset + geometry-scaled coupon plan | narrow multi-year engineered-surface aging evidence survives China pressure test; phone-scale/high-flux transfer remains open |
| **3** | **Tomsk Polytechnic University (TPU)** | Feoktistov / Orlova | **GO WITH PREREQUISITE** | separate laser-only low-organic control from hydrocarbon-wetting branch; copper + vacuum/fluid screen must be first | patent/team linkage is clear; main risk is sealed-process compatibility |
| — | **Moscow Power Engineering Institute (MPEI)** | Bulaeva / Savchenkov / Savchenkova ordered-wick line | **HOLD** | physical thin coupon with thickness/permeability/capillary/repeatability data | no decision-grade physical phone-scale specimen yet |

No current line is **unconditional GO** and none of the three main Stage-0 candidates is currently **KILL-mechanism-only**.

Generic surface theses remain killed/reframed:
- generic hydrophilic/biphilic surface;
- generic laser texture;
- generic composite wick.

---

## Execution packets

The current decisions are operationalized in:
- [Kutateladze Institute — Pavlenko-team Data Request + Experiment Packet](stage0_packet_pavlenko_v01.md)
- [MPEI — Ivanov/Kuzma-Kichta-team Data Request + Experiment Packet](stage0_packet_mpei_ivanov_v01.md)
- [TPU / Feoktistov Partner Data Request + Experiment Packet](stage0_packet_tpu_feoktistov_v01.md)

Common packet protocol:
[Stage-0 Partner Packet Index](stage0_partner_packet_index_v01.md)

The scorecard changes only when partner-returned data or physical evidence changes a decision cell.

---

## Blocker ownership / public-search exit

### Pavlenko

**Public research can resolve / already resolved**
- mesh family / published wire and cell scales;
- HFE-7100 mechanism;
- dryout/CHF/boiling lineage;
- existence of electrochemical modified mesh and three process regimes.

**Partner-only**
- exact electrolyte;
- current density/voltage;
- treatment time;
- current-batch morphology/layer thickness;
- adhesion/handling process window;
- existing copper/thin-mesh attempts;
- background-IP / prior Huawei field restrictions that are shareable.

**Experiment-only**
- permeability penalty on ~60–100 μm mesh;
- copper transfer;
- DI-water transfer;
- vacuum/degassing;
- 100/500-cycle retention;
- dryout/rewetting advantage vs strong UTVC reference.

**Search exit:** do not continue open-ended recipe hunting unless a new primary source is specifically identified.

### MPEI — Ivanov/Kuzma-Kichta team

**Public research can resolve / now resolved**
- ~100 μm groove-radius lineage;
- representative ~5 μm nanoparticle-layer state in the dissertation;
- thicker >10–15 μm deposition states under other conditions;
- capillary aging signal;
- 42-month R410A reliability;
- 0.2 mm water-boiling/CHF lineage, including Ivanov.

**Partner-only**
- exact current groove depth / width / pitch / tolerance;
- current as-built layer distribution and yield;
- unpublished copper/current high-flux results, if any.

**Experiment-only**
- scaled groove geometry;
- measured permeability;
- copper process;
- exact hierarchy at high heat flux;
- sealed DI-water VC;
- vacuum/cycling after phone-like processing.

### TPU / Feoktistov

**Public research can resolve / now resolved**
- RU2812668 inventors;
- TPU assignee;
- single independent laser-process claim;
- quantitative laser window;
- steel embodiment roughness range;
- hydrocarbon-thermolysis surface-durability route.

**Partner-only**
- any existing copper version;
- any unpublished vacuum/outgassing/sealed-fluid data;
- precise current biphilic process window that is not in the public paper;
- background-IP relationship between laser-only patent process and hydrophobic chemistry.

**Experiment-only**
- copper transfer;
- vacuum mass-loss/outgassing/contamination proxy;
- working-fluid compatibility;
- post-degassing/welding wetting retention;
- confined rewetting/liquid-routing benefit vs strong patterned-UTVC baseline.

### MPEI ordered wick

**Partner-only**
- ability to fabricate the modeled ordered structure as a thin coupon.

**Experiment-only**
- actual thickness;
- permeability;
- capillary pressure / uptake;
- repeatability;
- heat-flux behavior.

---

## Smallest next experiments

### P — Pavlenko thin-mesh transfer

Minimum:
- published/reference mesh;
- ~100 μm-class mesh;
- ~60–80 μm-class mesh if feasible;
- matched unmodified controls.

Before thermal testing:
- morphology;
- added thickness;
- open-area/permeability proxy;
- capillary uptake;
- adhesion/handling.

Then:
DI water → vacuum/process exposure → 100 cycles → dryout/rewet comparison.

### M — MPEI scale-down ladder

Minimum:
- current hierarchy;
- half-scale groove;
- phone-target shallow geometry;
- matched strong control.

Measure:
- true profile;
- coating thickness distribution;
- capillary uptake;
- permeability;
- high-flux step-up in water.

Do not advance to sealed VC until the scale-down still shows favorable dryout/liquid-supply behavior.

### T — TPU two-branch contamination screen

Minimum:
- copper laser-only low-organic branch;
- copper biphilic/hydrocarbon branch;
- matched standard oxidation/laser control.

First gate:
- profile/pattern;
- vacuum exposure;
- mass-loss / contamination proxy;
- DI-water soak;
- wetting-state retention.

Only surviving coupons enter confined rewetting testing.

---

## Promotion / kill logic

### Pavlenko → Stage-1
Advance if the thin/product-fluid version retains a measurable dryout/rewetting advantage without unacceptable permeability/thickness/process penalty.

Kill/reframe if the mechanism requires published thick mesh/HFE-specific conditions.

### MPEI → Stage-1
Advance if the hierarchy scales into the phone budget and retains favorable high-flux liquid supply after process/cycling.

Kill/reframe if ~100 μm-radius geometry is fundamental or benefit disappears during scale-down/high-flux step-up.

### TPU → Stage-1
Advance if a copper, low-outgassing pattern retains wetting contrast and produces confined rewetting/routing benefit beyond a standard laser/oxidation reference.

Kill/reframe if hydrocarbon chemistry contaminates the sealed system or generic laser-only processing performs equivalently.

### Ordered wick → Stage-0
Advance from HOLD only after a repeatable physical thin coupon exists.

---

## Partner-decision interpretation

The current evidence does **not** support:
> “Russia has a better smartphone VC.”

It supports a narrower collaboration hypothesis:

> **Russia may contribute specific phase-change / surface-state / reliability know-how that is worth testing inside a China-style ultra-thin manufacturing and smartphone boundary.**

This is the decision logic to carry into partner outreach and PoC design.


### Kutateladze Institute / Pavlenko-team comparator correction — independent China dryout/rewetting

New China comparators:
- GDUT repeated dryout / steam-induced rewetting / cycle degradation;
- GDUT ultrathin grooved-porous capillary-fed wick;
- SCUT treated copper-mesh capillary-film boiling;
- SJTU pore-scale dryout-limit model;
- Changsha UST HFE-7100 confinement down to 1 mm.

Decision:
Pavlenko remains #1 but **broad dryout/rewetting differentiation is removed**.

Residual Stage-0 hypothesis:
> Kutateladze's dielectric-fluid reversible→irreversible dry-spot diagnostics and crisis-mode knowledge can identify and delay a phone-relevant irreversible-dryout boundary beyond strong domestic controls.

Stage-0 reporting must therefore include:
- dry-spot onset;
- reversible/irreversible transition;
- dry-spot growth/propagation;
- rewetting delay;
- post-cycle wetting state;
in addition to CHF/thermal resistance.


### Core evidence deepening — execution implications

**Pavlenko**
- public execution stack now clearly includes pressure-controlled/degassed dielectric boiling, high-speed optical/IR diagnostics and structured-surface testing;
- Stage-0 role should emphasize crisis diagnostics and analysis;
- fine phone-wick fabrication remains partner-only/unproven.

**MPEI**
- current academic process chain includes nanoparticle preparation, coating formation, wetting/capillary characterization and thermosyphon testing;
- 2024 dissertation records implementation of results at Newfrost LLC;
- current hierarchy heat flux (~200–1700 W/m²) is far below phone hotspots, so Stage-0 must aggressively separate aging knowledge from high-flux transfer.

**Kabov**
- historical electronic-cooling prototype shows real system execution, not only theory;
- historical gas/liquid flow (~45–50 l/min gas; ~100–120 ml/min liquid) is incompatible with phone scale;
- retain feasibility-only status until a low-flow architecture exists.


### Institution-routing correction — 2026-10-05

**Kutateladze Institute**
- Stage-0 #1 dryout/crisis work routes to **Laboratory 1.3 — Low-Temperature Thermophysics**, current head A.N. Pavlenko.
- High-risk shear-film work routes to **Laboratory 6.6 — Heat Transfer Intensification Processes**, current acting head D.Y. Kochkin; O.A. Kabov is chief researcher and E.A. Chinnov remains current staff.

**MPEI**
- current line remains active beyond the 2024 dissertation;
- 2025 official student/project evidence continues wettability-controlled thermosyphon work under N.S. Ivanov;
- repeated Newfrost commercial-contract / coauthorship chain strengthens external-engineering readiness.

Decision order unchanged.
