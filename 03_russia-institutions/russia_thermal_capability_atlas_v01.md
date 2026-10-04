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

The Russia map is organized into ten capability domains:

1. phase-change boiling / CHF / dryout / rewetting;
2. ultra-thin VC / wick / surface engineering;
3. thin film / droplet / spray / interfacial transport;
4. LHP / passive two-phase routing;
5. microchannel / embedded liquid cooling;
6. active airflow / synthetic jet / piezo / EHD;
7. aeroacoustics / fan-noise methods;
8. thermal materials / TIM / spreaders;
9. software thermal control / DVFS / adaptive management;
10. cross-cutting experimental diagnostics / reliability / manufacturing know-how.

These domains are selected for smartphone/chip thermal relevance, not for completeness of all Russian heat-transfer science.

---

## 2. Russia capability atlas

| Capability domain | High-signal Russian institutions / lines | What is publicly evidenced now | Mobile/chip transfer state | Current country-level interpretation |
|---|---|---|---|---|
| **Boiling / CHF / dryout / rewetting** | **Kutateladze Institute SB RAS — Pavlenko/Shvetsov**; MPEI Ivanov lineage; NSU adjacent boiling diagnostics | dielectric HFE-7100 boiling, modified mesh, CHF/dryout, capillary surfaces; MPEI 0.2 mm water-boiling/CHF lineage | **High mechanism relevance / partial phone transfer** | One of Russia's strongest mechanism domains; potential value is not generic boiling but failure-boundary / dryout / rewetting control under constrained geometry |
| **Ultra-thin VC / wick / surface** | Kutateladze/Pavlenko; **MPEI/Ivanov**; TPU/Feoktistov; MPEI ordered-wick line | modified mesh, hierarchical Al2O3 coating, adjustable wettability, ordered porous modeling, laser/wetting surfaces | **Partial**; no Russian public 0.25–0.4 mm phone-class VC frontier demonstrated | Russia is a **mechanism/process contributor**, not currently a device-level UTVC leader |
| **Thin film / droplet / spray / interfacial transport** | **Kutateladze — Kabov/Kochkin/Chinnov**; TPU/Feoktistov | extreme-aspect-ratio slit flow, thin-film models, microdroplet generation, droplet/wettability cooling | **Mechanism strong / system transfer low** | Deep fluid/film physics may be differentiated, but closed-loop phone architecture remains high-risk |
| **LHP / passive routing** | **Institute of Thermal Physics UB RAS — Maydanik/Chernysheva/Vershinin** | long LHP lineage, flat/flexible devices, current operating-limit work, multi-source relevance | **Partial** | Deep two-phase transport know-how; generic miniaturization is not sufficient as a Russia-specific advantage |
| **Microchannel / embedded liquid cooling** | Kutateladze microchannels; MPEI thin-channel boiling; Bauman narrow-channel work | micro/slit-channel two-phase and thermal-hydraulic work | **Mechanism only / integration weak** | Useful source of physics; no evidence that Russia owns the current electronics integration frontier |
| **Active airflow / synthetic jet / EHD** | Kutateladze synthetic-jet line; SPbU electrophysics/EHD | synthetic-jet heat transfer; ionic-wind modeling/adjacent work | **Exploratory** | Current Russian public evidence is too thin for a country-level advantage claim |
| **Aeroacoustics / fan-noise methods** | **TsAGI**, **PNRPU**, CIAM | aeroacoustic facilities, fan/rotor noise, aerodynamic-noise testing, source/noise-control methods | **Method transfer plausible / phone scale unproven** | Potential Russian strength is measurement/source-identification methodology, not generic fan hardware |
| **Thermal materials / interfaces** | Skoltech; NUST MISIS; MSU; SPbU carbon/graphite line | BN/graphene/CNT composites, graphite/carbon thermal structures, materials infrastructure | **Supporting** | No current evidence of a Russia-specific smartphone material advantage versus China/global ecosystem |
| **Software thermal control / DVFS** | **SPbU smartphone DVFS / stochastic optimization** | direct Android/smartphone DVFS and optimization lineage | **Direct mobile relevance, differentiation unresolved** | Interesting direct mobile signal, but generic adaptive DVFS is crowded; only uncertainty-aware/system-level control may remain differentiated |
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
MPEI's most unusual public signal is **long-duration two-phase surface stability/aging knowledge**, not generic nanoparticle coating.

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
Potential value is **phone-scale fan tonal/source methodology**. China also has strong aeroacoustic institutions, so Russia cannot be sold as having a monopoly on aeroacoustics.

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

## 5. Initial country-level differentiation candidates

These are **candidates for China comparison**, not final advantages:

1. **Dielectric-fluid / modified-mesh dryout and rewetting physics**
   - Kutateladze / Pavlenko.
2. **Long-duration hierarchical two-phase surface stability / aging**
   - MPEI / Ivanov.
3. **Thin-film / interfacial instability / droplet mechanism depth**
   - Kutateladze / Kabov–Kochkin–Chinnov.
4. **Aeroacoustic source-identification / experimental methodology**
   - TsAGI / PNRPU / CIAM.
5. **LHP operating-limit / routing / failure physics**
   - ITP UB RAS / Maydanik line.

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
