# Russia Thermal Capability Atlas v0.1

Last updated: 2026-10-04

Status: **CURRENT capability-centric atlas; not a national ranking**

## Purpose

Provide the management-facing answer to:

> What thermal-management capabilities exist in Russia, where are they concentrated, how directly do they map to smartphone/chip thermal problems, and which capabilities merit China comparison?

This file reorganizes the existing institution database by **capability**, not by university.

Important:
- the 20/20 university scan is necessary for coverage, but it is not sufficient for a Russian capability map;
- several strategically important Russian capabilities sit in RAS institutes or national research organizations rather than universities;
- a strong non-mobile thermal result remains mechanism evidence until a mobile/chip transfer path is defined.

Canonical institution coverage:
[Major Russian University Coverage Matrix](major_university_coverage_matrix.md)

Partner/lab deep dives:
[04 Researchers & Labs](../04_researchers-labs/README.md)

---

## 1. Capability taxonomy for management view

The Russia map is organized into ten direct/cross-cutting capability domains plus one foundational enabling layer:

1. phase-change boiling / CHF / dryout / rewetting;
2. ultra-thin VC / wick / surface engineering;
3. thin film / droplet / spray / interfacial transport;
4. LHP / passive two-phase routing;
5. microchannel / embedded liquid cooling;
6. active airflow / synthetic jet / piezo / EHD;
7. aeroacoustics / fan-noise methods;
8. thermal materials / TIM / spreaders;
9. software thermal control / DVFS / adaptive management;
10. cross-cutting experimental diagnostics / reliability / manufacturing know-how;
11. **foundational mathematical physics / nonlinear stability / reduced-order thermal-fluid modeling**.

The eleventh domain is an **enabling layer**, not a claim of device leadership. It is included because foundational methods can create value by exposing failure boundaries, dominant mechanisms and controllable variables before product-scale experimentation.

These domains are selected for smartphone/chip thermal relevance, not for completeness of all Russian heat-transfer science.

---

## 2. Russia capability atlas

| Capability domain | High-signal Russian institutions / lines | What is publicly evidenced now | Mobile/chip transfer state | Current country-level interpretation |
|---|---|---|---|---|
| **Boiling / CHF / dryout / rewetting** | **Kutateladze Institute SB RAS — Pavlenko/Shvetsov**; MPEI Ivanov lineage; NSU adjacent boiling diagnostics | dielectric HFE-7100 boiling, modified mesh, CHF/dryout, capillary surfaces; MPEI 0.2 mm water-boiling/CHF lineage | **High mechanism relevance / partial phone transfer** | One of Russia's strongest mechanism domains; potential value is not generic boiling but failure-boundary / dryout / rewetting control under constrained geometry |
| **Ultra-thin VC / wick / surface** | Kutateladze/Pavlenko; **MPEI/Ivanov**; TPU/Feoktistov; MPEI ordered-wick line | modified mesh, hierarchical Al2O3 coating, adjustable wettability, ordered porous modeling, laser/wetting surfaces | **Partial**; no Russian public 0.25–0.4 mm phone-class VC frontier demonstrated | Russia is a **mechanism/process contributor**, not currently a device-level UTVC leader |
| **Thin film / droplet / spray / interfacial transport** | **Kutateladze — Kabov/Kochkin/Chinnov**; TPU/Feoktistov | shear-driven film/dry-spot/CHF lineage; **12.5 μm-high × 10 mm slit** two-phase instability mapping; microdroplet generation | **Mechanism strong / system transfer low** | broad thin-film advantage is killed by strong China evidence; residual Russia value is **shear-driven free-surface instability/dry-spot physics under extreme confinement** |
| **LHP / passive routing** | **Institute of Thermal Physics UB RAS — Maydanik/Chernysheva/Vershinin** | foundational/deep LHP lineage; current serviceability theory; flat/flexible devices | **Partial** | China now covers mobile miniaturization, multi-source routing and operating/failure physics; Maydanik is **Watch / knowledge reserve**, not an active country-differentiation candidate |
| **Microchannel / embedded liquid cooling** | Kutateladze microchannels; MPEI thin-channel boiling; Bauman narrow-channel work | micro/slit-channel two-phase and thermal-hydraulic work | **Mechanism only / integration weak** | Useful source of physics; no evidence that Russia owns the current electronics integration frontier |
| **Active airflow / synthetic jet / EHD** | Kutateladze synthetic-jet line; SPbU electrophysics/EHD | synthetic-jet heat transfer; ionic-wind modeling/adjacent work | **Exploratory** | Current Russian public evidence is too thin for a country-level advantage claim |
| **Aeroacoustics / fan-noise methods** | **TsAGI**, **PNRPU**, CIAM | aeroacoustic facilities, fan/rotor noise, aerodynamic-noise testing, source/noise-control methods | **Method transfer plausible / phone scale unproven** | China already has electronic-cooling fan source imaging and narrow-space/duct acoustics; Russian value is now a **watch-level method hypothesis**, not a country advantage |
| **Thermal materials / interfaces** | Skoltech; NUST MISIS; MSU; SPbU carbon/graphite line | BN/graphene/CNT composites, graphite/carbon thermal structures, materials infrastructure | **Supporting** | No current evidence of a Russia-specific smartphone material advantage versus China/global ecosystem |
| **Software thermal control / DVFS** | **SPbU smartphone DVFS / stochastic optimization** | direct Android/smartphone DVFS and optimization lineage | **Direct mobile relevance, differentiation unresolved** | Interesting direct mobile signal, but generic adaptive DVFS is crowded; only uncertainty-aware/system-level control may remain differentiated |
| **Foundational mathematical physics / nonlinear stability** | **Institute of Computational Modelling SB RAS**; Altai State University; **Lavrentyev Institute of Hydrodynamics SB RAS**; Kutateladze-adjacent experimental line | continuous 2023–2026 exact/group-invariant evaporative-convection solutions; stability thresholds; experiment-informed closure; 3D evaporating-film microchannel modeling | **Foundational enabling relevance; strongest direct link to film-instability route** | **NARROW FOUNDATIONAL DIFFERENTIATION CANDIDATE**: China is strong in nonlinear stability, phase-change numerics and inverse thermal methods; residual Russian value is analytical interpretability / exact-solution lineage, not broad math superiority |
| **Diagnostics / reliability / process know-how** | Kutateladze optical/multiphase diagnostics; **MPEI 42-month hierarchy**; TPU optical/PIV/PLIF/surface process; TsAGI/PNRPU acoustics | long-duration two-phase stability, optical flow/surface diagnostics, aeroacoustic test facilities | **Cross-cutting** | This may be more strategically important than individual components: Russia often shows depth in mechanism diagnosis, failure regimes and long experimental lineages |

---

## 3. High-signal institution clusters

### A. Kutateladze Institute of Thermophysics SB RAS — Novosibirsk

Current relevant lines:
- Pavlenko/Shvetsov: dielectric boiling, modified mesh, CHF/dryout, capillary surfaces;
- Kabov/Kochkin/Chinnov: thin films, slit microchannels, droplet/film transport;
- synthetic-jet adjacent work.

Official/lab evidence:
- [Laboratory of Low-Temperature Thermophysics](https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/13_laboratoriya_nizkotemperaturnoy_teplofiziki.html)
- [Heat-Transfer Intensification Laboratory](https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/66_laboratoriya_intensifikacii_processov_teploobme.html)

Management interpretation:
**Russia's strongest concentrated phase-change / interfacial-transport cluster in the current database.**

Do not translate this into:
> "Russia has better smartphone cooling."

Translate it into:
> "Russia has unusually deep failure-regime / phase-change mechanism capability that may be worth embedding into a China-style ultra-thin device."

### B. MPEI — Moscow

Two separate lines:

1. Ivanov / Kuzma-Kichta / Alyautdinova:
   - hierarchical microgroove + Al2O3 coating;
   - water thin-channel/CHF lineage;
   - R410A thermosyphon;
   - 42-month periodic operation;
   - surface aging/capillary degradation.

2. Bulaeva / Savchenkova / Savchenkov:
   - ordered porous wick / capillary-permeability modeling;
   - pre-device until physical thin coupon exists.

Key evidence:
- **[Long-term Operational Stability of a Hierarchical Evaporator Surface in a Two-Phase Thermosyphon](https://doi.org/10.1016/j.pes.2026.100314)** — N.S. Ivanov — 2026.
- **[Heat Transfer Crisis Investigation in a Microchannel with and without Nanoparticles Coating](https://doi.org/10.1088/1742-6596/1683/2/022087)** — Ivanov *et al.* — 2020.

Management interpretation:
MPEI's most unusual public signal is **actual 42-month operation of one engineered hierarchical evaporator surface**, including morphology and capillary-aging observations.

Important China correction:
SCUT-led work now provides copper-water VC oxygen-failure physics, wick oxidation grading and accelerated service-life prediction. Therefore MPEI must not be presented as uniquely owning "two-phase reliability" in general.

### C. Tomsk Polytechnic University — Feoktistov line

Capabilities:
- laser micro/nanotexturing;
- wettability contrast;
- droplet heat transfer;
- optical/PIV/PLIF surface-flow diagnostics;
- environmental durability studies.

Key evidence:
- **[Heat-Transfer Enhancement and Evaporation Mechanisms on Roughness-Controlled Wettability-Contrast Surfaces](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128413)** — 2026.
- **[Method for Forming Micro- and Nanostructures on the Heat-Exchange Surface of a Steel Product](https://patents.google.com/patent/RU2812668C1/en)** — TPU — 2024.

Management interpretation:
Strong process/diagnostics capability, but **generic biphilic/laser surface is not a Russia-specific advantage**. Only sealed-VC-compatible, contamination-stable routing/rewetting would become differentiated.

### D. Institute of Thermal Physics UB RAS — Yekaterinburg

Capability:
- loop heat pipes;
- flat/flexible evaporators;
- operating-limit physics;
- multi-source heat transport.

Evidence:
- [Institute structure / staff](https://itpuran.ru/index.php/about-us/struktura-instituta)
- **[2025 LHP operating-limit/design work](https://doi.org/10.56304/S0040363625701152)**.
- **[2024 flexible long LHP](https://doi.org/10.31857/S0040364424010088)**.

Management interpretation:
Deep LHP lineage remains useful, but China already has direct 0.7 mm mobile LHP results. Russian residual value must be **routing/failure physics**, not miniaturization alone.

### E. TsAGI / PNRPU / CIAM — aeroacoustics cluster

Capabilities:
- fan/rotor aeroacoustics;
- source identification;
- aerodynamic-noise facilities;
- noise-control methods;
- anechoic / flow-acoustic measurement.

Evidence:
- [TsAGI Aeroacoustics](https://www.tsagi.ru/en/research/aeroacoustics/)
- [PNRPU acoustic chamber with aerodynamic sources](https://pstu.ru/science-and-innovation/infrastructure/unique-scientific-installations/unikalnaya-nauchnaya-ustanovka-akusticheskaya-zaglushennaya-kamera-s-aerodinamicheskimi-istochnikami/)

Management interpretation:
This line is downgraded to **WATCH / method reserve**.

China academic evidence now includes:
- cooling-fan acoustic source imaging with POD + wavelet beamforming;
- electronic-device fan inlet-asymmetry / tonal-noise studies;
- short-duct acoustic control;
- narrow-space installed-condition aeroacoustics.

The remaining open niche is actual smartphone-scale ~18–25 mm / ~20k rpm centrifugal-fan diagnosis. Russia also lacks direct public phone-scale proof.

### F. SPbU — control / EHD adjacency

Capabilities:
- direct smartphone CPU/DVFS optimization;
- stochastic optimization;
- EHD/ionic-wind adjacent electrophysics.

Primary mobile paper:
**[Smartphone CPU Energy Consumption Decrease Using Stochastic Optimization](https://doi.org/10.15622/ia.22.5.3)** — 2023.

Management interpretation:
Direct mobile relevance is useful, but the world/China control baseline is advanced. Keep only a narrow hypothesis around **model-light adaptation under uncertain thermal environment / active-cooler co-control**.

---

## 4. Preliminary Russia capability strengths — management view

### Strong public mechanism depth
- phase-change boiling / CHF / dryout;
- thin-film / interfacial multiphase transport;
- LHP/passive two-phase transport;
- aeroacoustic measurement/methods.

### Strong but phone-transfer incomplete
- hierarchical/wettability surfaces;
- long-term two-phase surface aging;
- droplet / film cooling;
- adaptive thermal-control research.

### Weak as a Russia-specific strategic claim
- generic VC;
- generic graphite/TIM;
- generic LHP miniaturization;
- generic biphilic/laser surface;
- generic fan;
- generic DVFS;
- generic microchannel cooling.

---

### Foundational layer — mathematical physics / applied mathematics

This layer was added after project-scope review and is intentionally separated from device categories.

Representative current evidence:

- **[Application of a Partially Invariant Exact Solution of the Thermosolutal Convection Equations for Studying the Instability of an Evaporative Flow in a Channel Heated from Above](https://doi.org/10.3390/sym15071447)** — Institute of Computational Modelling SB RAS line — 2023.
  - exact solution;
  - linear stability threshold;
  - thermocapillary / gas-pumping competition;
  - oscillatory cellular instability.

- **[Study of the gas flow rate effect on the parameters of evaporative convection regimes using an exact solution](https://doi.org/10.1016/j.ijthermalsci.2024.109179)** — Bekezhanova, Goncharova, Laskovets — *International Journal of Thermal Sciences*, 2024.
  - exact thermosolutal-convection solution;
  - experiment-informed evaporation-rate comparison;
  - three instability-wave modes predicted.

- **[On one exact solution of an evaporative convection problem with the Dirichlet boundary conditions](https://geodesic.mathdoc.fr/item/JSFU_2024_17_2_a6/)** — Bekezhanova, Goncharova — *Journal of Siberian Federal University: Mathematics & Physics*, 2024.
  - HFE-7100 / nitrogen;
  - external thermal-load effect on velocity, temperature, evaporation and vapor concentration.

- **[Dependence of Heat Exchange in an Evaporating Liquid Film in a Microchannel on Heater Size](https://doi.org/10.1134/S0021894424050092)** — V.V. Kuznetsov, Lavrentyev Institute of Hydrodynamics SB RAS — 2024.
  - 3D model coupling heat/mass transfer, temperature-dependent properties, thermocapillarity, free-surface deformation, evaporation and condensation.

Current interpretation:
the systematic China comparison is now complete enough to reject a broad national-mathematics claim.

China independently demonstrates:
- nonlinear/long-wave film stability;
- Marangoni-instability modeling;
- experiment-validated phase-change numerical models;
- physics-informed inverse thermal diagnostics.

The residual Russian signal is narrower and more credible:

> **continuous exact/group-invariant analytical modeling of coupled evaporative thermocapillary systems, used for interpretable stability/mechanism analysis and experiment-informed closure.**

Current state:
**NARROW FOUNDATIONAL DIFFERENTIATION CANDIDATE / RESERVE.**

Focused evidence:
[Russia Foundational Math-Physics → Thermal Capability Map](russia_foundational_math_physics_capability_v01.md)

Pressure test:
[Russia × China Foundational Math-Physics Pressure Test](../08_opportunities-transfer/foundational_math_physics_china_pressure_test_v01.md)

---

### G. Siberian modular capability network

A focused network check shows that the Russia foundational/mechanism signal is not only a collection of geographically adjacent institutes.

Verified:
- **Kutateladze ↔ Lavrentyev** — current direct technical coauthorship on shear-driven liquid-film cooling for microelectronics;
- **Kutateladze ↔ NSU** — current dual affiliations, labs, diagnostics and electronics-cooling execution bridge;
- **ICM/Altai ↔ Kutateladze** — direct historical theory–experiment coauthorship and current methodological continuity.

Not verified:
- one current four-node consortium;
- a 2023–2026 formal ICM–Kutateladze joint project;
- current ICM ↔ Lavrentyev thermal collaboration.

Management wording:
**partially verified Siberian modular capability network**, anchored on Kutateladze.

This matters because collaboration can potentially combine:
analytical stability
→ detailed fluid model
→ phase-change experiment/diagnostics
→ phone boundary conditions.

Detailed map:
[siberian_theory_fluid_experiment_network_v01.md](siberian_theory_fluid_experiment_network_v01.md)

---

## 5. Initial country-level differentiation candidates

These are **candidates for China comparison**, not final advantages:

1. **Dielectric-fluid / modified-mesh dryout and rewetting physics**
   - Kutateladze / Pavlenko.
2. **Actual multi-year hierarchical two-phase surface operation / aging**
   - MPEI / Ivanov.
3. **Shear-driven microfilm / interfacial-instability / dry-spot physics**
   - Kutateladze / Kabov–Kochkin–Chinnov.

Watch / reserves:
- **phone-scale confined aeroacoustic source diagnosis** — TsAGI / PNRPU / CIAM;
- **LHP knowledge / failure analysis** — ITP UB RAS / Maydanik; foundational depth remains, but current China comparison closes the country-differentiation claim.

TPU surface engineering remains a **partner challenger**, but not yet a country-level Russia advantage because China/global surface prior art is crowded.

---

## 6. Coverage gaps before management-final

The atlas is not final until the following are strengthened:

- active-air Russia evidence: piezo / MEMS / EHD;
- current Russian microfan-specific evidence;
- thermal-material manufacturing/reliability;
- software/control China mirror;
- non-university coverage beyond current high-signal institutes;
- capability-level evidence for "no Russian differentiation" conclusions.

The final management version should show:
**capability -> institution -> representative PI/lab -> evidence -> mobile-transfer state -> China comparator -> differentiation verdict.**
