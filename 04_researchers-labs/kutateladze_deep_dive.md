# Kutateladze Institute — Lab & Researcher Deep Dive v0.2

Status: evidence-backed first deep dive; collaboration conclusions remain provisional.

## Executive finding

Kutateladze Institute should not be treated as one generic “thermal physics” group. At least **two technically distinct collaboration entry points** are visible:

1. **A. N. Pavlenko / boiling & modified-surface line** — dielectric-fluid boiling, capillary/porous coatings, CHF enhancement, thin liquid layers.
2. **O. A. Kabov / D. Yu. Kochkin / E. A. Chinnov micro-scale two-phase line** — micro/minichannels, thin liquid films, gas-liquid flows, high heat flux and direct electronics-cooling architectures.

A third adjacent line is synthetic-jet / impinging-jet heat transfer around V. I. Terekhov / M. A. Pakhomov / V. V. Lemanov.

---

## A. Low-Temperature Thermophysics / Pavlenko line

### Current leader
**Alexander N. Pavlenko** — head of the Low-Temperature Thermophysics Laboratory; Corresponding Member of RAS.

Official current lab page:
https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/13_laboratoriya_nizkotemperaturnoy_teplofiziki.html

Profile / project evidence:
https://www.itp.nsc.ru/lmpt/?lang=en&page_id=1257

### Current technical focus
Officially documented topics include:
- boiling heat transfer and boiling crisis;
- structured surfaces;
- thin liquid films/layers;
- evaporation;
- rewetting;
- multiphase heat transfer.

### Freshness
Strong. The line remains active through 2025–2028:
- RSF 23-19-00245: boiling/evaporation on modified surfaces in thin dielectric-liquid layers, 2023–2025;
- Russia–China MNK-NSFC 25-49-00133: micro/nanoscale modified surfaces and boiling, 2025–2027;
- state project 126021217058-9: advanced phase-change heat-transfer enhancement for power, chemical industry and **microelectronics**, 2026–2028.

### 2025 evidence
Official publication list:
https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/2025_lab1.3.html

Key items:
- Shvetsov, Zhukov, Pavlenko — HFE-7100 boiling on 2D-modulated capillary-porous coatings, Applied Thermal Engineering, 2025.
- Volodin, Shvetsov, Serdyukov, Zhukov, Pavlenko — review of enhanced boiling/evaporation of dielectric fluids for **immersion cooling of electronic components**, Applied Thermal Engineering, 2025.
- work on black-silicon capillary wicking and HFE-7100 boiling.

### Industrial signal
Official page records:
- 2021–2023 scientific/technical work with Huawei-related entity on boiling heat-transfer enhancement;
- subsequent consulting agreement with Bel Huawei Technologies.

This is direct evidence of industrial interest, but not evidence that all potentially relevant IP/opportunities have been exhausted.

### Mobile-transfer questions
1. Can their capillary-porous / microstructured surface concepts be integrated into sub-mm VC/LHP evaporators?
2. What heat flux is sustainable in thin HFE-class dielectric layers under phone orientation and transient power?
3. Do their coatings reduce or worsen startup / dryout / manufacturability at phone scale?
4. What parts of this space are already covered by Huawei collaboration/IP?

---

## B. Heat-Transfer Intensification / Kabov–Kochkin–Chinnov line

### Current lab
Laboratory of Intensification of Heat Transfer Processes:
https://www.itp.nsc.ru/structura/nauchnye_porazdeleniya/66_laboratoriya_intensifikacii_processov_teploobme.html

### Current leadership / staff
The current official page lists:
- **Dmitry Yu. Kochkin** — acting head;
- **Evgeny A. Chinnov** — chief researcher;
- Dmitry V. Zaitsev — senior researcher;
- other staff.

Oleg A. Kabov remains active at the institute and appears in current institute bodies/publications:
https://www.itp.nsc.ru/structura/uchyonyy_sovet/kabov_oleg_aleksandrovich.html

### Official scope directly relevant to this project
The lab explicitly lists:
- two-phase flows;
- films;
- evaporation / condensation;
- microchannels;
- high heat flux;
- wettability;
- electronics cooling;
- micro/nano-coated surfaces.

This is one of the most direct Russia-to-electronics matches found so far.

### Recent primary evidence

#### 2024: extreme-aspect-ratio slit microchannel
Dementyev, Chinnov, Kochkin, Ronshin et al.:
**An experimental investigation of adiabatic two-phase flow patterns in a slit microchannel with 1:800 aspect ratio**
Experimental Thermal and Fluid Science 154 (2024) 111153.
DOI: https://doi.org/10.1016/j.expthermflusci.2024.111153

The test channel was 12.5 μm high and 10 mm wide. The work used photolithography, anisotropic etching and anodic bonding and studied gas-liquid flow patterns.

Mobile relevance:
- **high** for understanding ultra-thin two-phase flow physics;
- **not yet proof** of a viable phone cooler.

#### 2026: microelectronic thin-film cooling model
Kabov, Kuznetsov:
**Heat Transfer and Fluid Dynamics Modeling in Shear-Driven Liquid Film Cooling System of Microelectronic Equipment**
Fluid Dynamics 60(8), 2026.
DOI: https://doi.org/10.1134/S0015462825604279

This is directly framed around microelectronic-equipment cooling.

#### 2025/2026: microdroplet generation
Sibiryakov, Kabov, Marchuk et al.:
**Microdroplet generator**
Thermophysics and Aeromechanics.
DOI: https://doi.org/10.1134/S0869864325010147

Related 2026 Russian patent:
RU 2855641 — device for forming a microdroplet flow.
Inventors include Kochkin, Sibiryakov, Grishkov, Kabov and Bykovskaya.

### Patent directly on electronic cooling

**RU 2822416**
“Cooling system for electronic equipment using a gas flow and combined film and droplet liquid flows.”

Patent holder: Kutateladze Institute.
Inventors:
- Oleg A. Kabov
- Maxim V. Pukhovoy
- Elena F. Bykovskaya
- Vyacheslav V. Chevera

Priority: 14 Dec 2023  
Registration: 4 Jul 2024

Official patent PDF:
https://www.itp.nsc.ru/website/inst/upload/infoblock/file/96swu-2822416.eod%20%281%29.pdf

### Mobile-transfer interpretation
**Analyst inference:** this group may be more valuable for a future phone program than a conventional “heat pipe supplier” relationship because it can contribute:
- ultra-thin gas-liquid flow physics;
- local film/droplet cooling;
- flow-regime control;
- high-heat-flux instability / dryout understanding;
- microchannel experimental methods.

### Key barriers to test
- pumps / gas supply requirement;
- sealing and leakage;
- gravity/orientation;
- droplet management;
- acoustic signature if gas flow is actively driven;
- water resistance;
- channel clogging/contamination;
- system power;
- manufacturability.

---

## C. Synthetic-jet / impinging-jet adjacent line

Lemanov, Pakhomov and Terekhov:
**Experimental and Numerical Simulation of Heat Transfer in an Impact Synthetic Jet**
High Temperature 61(2), 2023.
DOI: https://doi.org/10.31857/S0040364423020126

The institute also reports experimental work over Reynolds number and pulse-frequency ranges.

### Why it matters
This is directly relevant to non-rotary active cooling, but the published work is a physics/heat-transfer study rather than a phone-scale actuator demonstration.

### Next evidence needed
- actuator geometry and power;
- sound spectrum;
- achievable pressure-flow curve in confined ducts;
- thickness;
- thermal benefit per unit electrical power and volume.

---

## Preliminary collaboration hypotheses

### KUT-H1: capillary-surface + ultra-thin two-phase spreader
Combine Russian phase-change/surface physics with phone-scale VC manufacturing.

### KUT-H2: shear-driven thin-film hotspot cooler
Investigate whether gas-sheared thin films can become a sealed, thin, low-inventory local cooler rather than a laboratory open-flow system.

### KUT-H3: microdroplet / film + active-air hybrid
Use droplet/film flow only where local heat flux peaks, with active airflow providing transport/evaporation assistance.

### KUT-H4: synthetic jet + heat spreader
Co-design a synthetic-jet actuator with VC/spreader geometry and compare with rotary microblower at equal volume/power/noise constraints.

None of these is yet a recommended direction; each requires a mobile-transfer experiment.
