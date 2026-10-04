# China Academic Thermal Capability Mirror v0.1

Last updated: 2026-10-04

Status: **CURRENT first capability-matched academic benchmark; representative, not exhaustive**

## Purpose

Create the domestic academic mirror required to evaluate whether a Russian capability is:
- genuinely differentiated;
- merely comparable to existing Chinese capability;
- complementary to China's productization strengths;
- or not strategically worth importing.

This is not a ranking of Chinese universities.

The mirror uses the same capability taxonomy as:
[Russia Thermal Capability Atlas](../03_russia-institutions/russia_thermal_capability_atlas_v01.md)

Existing institution-centric map:
[China Institution / Lab Map](institution_map_v01.md)

---

## 1. China capability mirror

| Capability domain | Representative China academic signals | Recent evidence / quantitative anchor | Implication for Russia comparison |
|---|---|---|---|
| **VC reliability / surface aging** | **South China University of Technology** + Guangdong/industry collaborators | 2025 oxygen-driven copper-water VC failure mechanism; 2026 150–200°C accelerated life prediction; wick oxidation grading/QA | MPEI cannot claim generic reliability advantage; residual difference is actual 42-month operation of one hierarchical surface with capillary-aging evidence |
| **Ultra-thin VC / thermal ground plane** | **South China University of Technology**; **Huazhong University of Science and Technology**; Xi'an Jiaotong adjacent VC work | SCUT 0.35–0.39 mm-class UTVC line; HUST 2026 reports **0.25 mm** UTTGP with 17,213 W/(m·K) equivalent conductivity and dynamic/cyclic stability | China already has a strong sub-0.4 mm device frontier; Russian generic VC/wick claims face a very high bar |
| **Mobile LHP / flexible two-phase routing** | **Xi'an Jiaotong University**; HUST | XJTU 2025 mLHP: **0.7 mm**, 3.95 g, 30-day 90°C aging; flexible 0.7 mm line; HUST 0.71 mm ultra-thin LHP | Generic Russian LHP miniaturization is not differentiated |
| **Flow boiling / CHF / structured surfaces** | **Xi'an Jiaotong University**; North China Electric Power University; other strong heat-transfer groups | XJTU 2025 HFE-7100 semi-open microchannel with structured/nanotube chip surface; reported CHF/HTC enhancement; NCEPU 2024 thin-film boiling >2000 W/cm² | China also has deep high-flux boiling capability; Russia must differentiate on a narrower mechanism/failure-control axis |
| **Thin film / droplet / spray** | **North China Electric Power University**; **Beihang University** | NCEPU thin-film boiling >2000 W/cm²; Beihang 2025 controlled droplet-train cooling reported CHF up to 1037 W/cm² | Russia's Kabov/TPU film/droplet work is not unique at the category level |
| **Embedded microfluidic / extreme chip cooling** | **Peking University** | 2025 Nature Electronics: embedded manifold + microjet + sawtooth microchannels, **3000 W/cm²**, ~0.9 W/cm² pumping at extreme condition | China has world-class embedded-chip cooling; generic Russian microchannel competence is not a strategic advantage |
| **Aeroacoustics / fan noise** | **Beihang University**; **Peking University / HKUST**; **Shanghai Jiao Tong University** | Beihang aeroacoustics; PKU/HKUST CPU cooling-fan POD + wavelet beamforming; SJTU electronic cooling-fan inlet-asymmetry, duct-mode and narrow-space studies | China already has electronic-cooling fan source imaging and installed-condition aeroacoustics; Russia can only differentiate at actual phone-microfan scale or via clearly better diagnostics |
| **Piezo / compact active air** | **North China Electric Power University** and other electronics-cooling groups | 2025 piezoelectric-fan + heat-sink work for confined microelectronics | Russia's current public active-air evidence is too thin for a country-level advantage |
| **EHD / ionic wind** | Chinese academic evidence exists, but current institution mapping is incomplete | 2024 ionic-wind heat-sink literature confirms active Chinese research; affiliation normalization still pending | Keep as an explicit benchmark gap; do not claim Russian EHD advantage yet |
| **Thermal materials / insulated spreaders** | **Shanghai Jiao Tong University**; other materials-heavy universities | recent graphene-paper multilayer thermal tapes with compact-electronics/smartphone validation | Generic Russian graphene/BN/TIM is not differentiated |
| **Mobile software / DVFS / runtime control** | **USTC**; **Beihang University**; wider China/global systems community | USTC adaptive DVFS line; Beihang MobiRL reports real-smartphone results and product deployment for UI smoothness/power; current thermal-specific China mirror still being strengthened | SPbU direct smartphone DVFS is relevant, but generic adaptive DVFS is not a Russian advantage |

---

## 2. High-signal academic comparators

### A. South China University of Technology — ultra-thin VC

Core evidence:
- **[High Performance Ultra-Thin Vapor Chamber by Reducing Liquid Film and Enhancing Capillary Wicking](https://doi.org/10.1016/j.applthermaleng.2024.122813)** — SCUT line, 2024.
- **[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — 2024.

Public geometry anchor:
- ~0.35–0.39 mm finished devices;
- ~0.2 mm vapor/internal height;
- composite mesh/wettability engineering;
- DI-water device path.

Comparison use:
the Russian surface/wick route must beat a **modern thin-device control**, not smooth metal or a weak wick.

### B. Huazhong University of Science and Technology — 0.25 mm thermal ground plane

2026 primary publication:
**[A 0.25-mm-thick ultra-conductive thermal ground plane for cooling compact electronics](https://www.cell.com/device/abstract/S2666-9986(26)00075-X)** — HUST, 2026.

Reported:
- thickness: **0.25 mm**;
- region-partitioned wick / separated liquid-vapor transport logic;
- equivalent thermal conductivity: 17,213 W/(m·K);
- dynamic-load adaptability;
- long-term cyclic stability.

Decision impact:
the China device frontier has moved below the earlier 0.35–0.4 mm reference. For final comparison, 0.39 mm remains a practical common benchmark, but leadership claims must recognize the **0.25 mm frontier signal**.

### C. Xi'an Jiaotong University — mobile LHP + high-flux boiling

Mobile LHP:
**[A thin and lightweight miniature loop heat pipe for cooling mobile electronic devices](https://doi.org/10.1016/j.device.2025.100783)** — Qingjie Cui, Ziyi You, Xiang Ma, Xiaoping Yang, Yonghai Zhang *et al.* — *Device*, 2025.

Reported:
- 0.7 mm thickness;
- 3.95 g;
- nickel/copper-fiber wick;
- 30-day accelerated aging at 90°C.

Flow-boiling benchmark:
**[Teardrop-like micro pin fin coated nanotube arrays chip for enhancement of flow boiling electronics cooling](https://doi.org/10.1016/j.ijthermalsci.2025.109854)** — Hongqiang Chen, Quan Gao, Xiang Ma *et al.* — *International Journal of Thermal Sciences*, 2025.

Reported:
- HFE-7100;
- semi-open microchannel;
- structured micro-pin-fin + Cu(OH)2 nanotube surface;
- strong CHF/HTC improvement versus smooth comparator.

Decision impact:
Russia's LHP and boiling capabilities cannot be promoted on "has LHP" or "studies dielectric boiling" alone.

### D. Peking University — embedded microfluidics

**[Jet-enhanced manifold microchannels for cooling electronics up to a heat flux of 3,000 W cm−2](https://doi.org/10.1038/s41928-025-01449-4)** — Zhihu Wu, Wei Xiao, Haiyu He, Wei Wang, Bai Song — *Nature Electronics*, 2025.

Reported:
- three-tier embedded structure;
- single-phase water;
- up to 3000 W/cm²;
- pumping power ~0.9 W/cm² at the extreme condition;
- MEMS-compatible backside-silicon integration.

Decision impact:
China already has extreme embedded-chip cooling research. It is not phone-ready by itself, but it eliminates any claim that microscale liquid cooling is a unique Russian capability.

### E. North China Electric Power University — thin-film boiling / piezo active cooling

Thin-film boiling:
**[Manipulating thin film boiling to achieve record-breaking high heat flux](https://doi.org/10.1016/j.ijheatmasstransfer.2024.125308)** — Yuxiang Zhang, Xuan Zhao, Jiahua Li *et al.* — *International Journal of Heat and Mass Transfer*, 2024.

Official university report:
[Thin-film boiling research exceeds 2000 W/cm²](https://news.ncepu.edu.cn/hdyw/25ef64e1872b4ca5a358d04d48cc331f.htm).

Piezo active air:
**[Innovative configurations for heat sink integrated with piezoelectric fans](https://doi.org/10.1016/j.ijthermalsci.2024.109383)** — Chunjiao Han, Xiaojing Ma, Jinliang Xu — *International Journal of Thermal Sciences*, 2025.

Decision impact:
Chinese academia has credible lines in both extreme two-phase physics and compact active-air cooling.

### F. Beihang University — droplet high-flux + aeroacoustics + mobile scheduling

Droplet cooling:
**[Nucleate boiling heat transfer and critical heat flux in controllable droplet trains cooling](https://doi.org/10.1016/j.applthermaleng.2025.125824)** — Yuhang Li, Yakang Xia, Wenhao Deng *et al.* — *Applied Thermal Engineering*, 2025.

Official profile:
[Yakang Xia / Beihang — paper record](https://shi.buaa.edu.cn/xiayakang/en/lwcg/208468/content/32920.htm).

Reported:
- controlled droplet trains;
- CHF up to 1037 W/cm² in the reported bench.

Aeroacoustics:
**[Numerical evaluation of the aerodynamic and noise characteristics of an axial flow fan in a large aeroacoustic wind tunnel](https://doi.org/10.7638/kqdlxxb-2025.0030)** — Liu Peiqing *et al.* — Beihang, 2025.

Mobile scheduling:
**MobiRL — reinforcement-learning CPU/GPU frequency scheduler** — Beihang authors, *ACM Transactions on Architecture and Code Optimization*, 2024; public metadata reports real-smartphone evaluation and product deployment.

Decision impact:
Beihang is an important domestic mirror for **both thermal-fluid experiments and aeroacoustic/system-control capabilities**.

---

### G. South China University of Technology — VC reliability / life

Failure mechanism:
**[Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619)** — Guo, Li, Zhou *et al.* — *Applied Thermal Engineering*, 2025.

Public result:
- failed VCs can retain intact shell/seal/pore geometry;
- wick-surface oxygen rises while copper fraction falls;
- oxidation drives hydrophilic -> hydrophobic transition;
- capillary pressure degrades and evaporation thermal resistance rises;
- vacuum-process oxygen control is identified as a key reliability lever.

Lifetime prediction:
**[Research on a rapid prediction method for the service life of copper-water vapour chambers](https://doi.org/10.1016/j.applthermaleng.2026.131067)** — Guo, Li, Zhou *et al.* — *Applied Thermal Engineering*, 2026.

Public result:
- accelerated aging at 150–200 °C;
- XPS/EDS surface analysis;
- ~1% wick-surface oxygen maps to predicted >=13 years at 80 °C;
- reported R² ≈ 0.98 and prediction error ~8%.

Decision impact:
China has a coherent **VC reliability / failure / life-prediction** capability. MPEI's remaining differentiation is the narrower fact of **actual multi-year operation of a specific hierarchical evaporator surface**, not generic two-phase reliability.

### H. PKU/HKUST + SJTU — electronics cooling-fan aeroacoustics

Source imaging:
**[Experimental Analysis of Cooling Fan Noise by Wavelet-Based Beamforming and Proper Orthogonal Decomposition](https://doi.org/10.1109/ACCESS.2020.3006483)** — Liang, Chen, Liem, Huang — *IEEE Access*, 2020.

Public setup:
- practical CPU fan;
- 90 mm diameter;
- 2650 / 3960 rpm;
- BPF/harmonic/subharmonic/broadband source decomposition.

Installed-condition line:
- **[Study on the Influence of Inlet Asymmetry on Aerodynamic Noise of Cooling Fan](https://doi.org/10.1115/1.4048449)** — SJTU, 2020.
- **[Aerodynamic Noise Characteristics of Axial Flow Fan in Narrow Space and Noise Reduction Based on Flow Control](https://doi.org/10.1115/1.4063127)** — SJTU, 2023.
- **[Experimental Study on Aerodynamic Noise Reduction of In-series Axial Cooling Fans for Electronic Devices](https://doi.org/10.3901/JME.2022.22.406)** — SJTU, 2022.

Decision impact:
China already has cooling-fan source imaging, tonal-noise diagnosis, inlet/duct interaction and narrow-space installed-condition research.

Remaining gap:
strong public academic work on **smartphone-class ~18–25 mm, ~20k rpm centrifugal microfans** remains thin.

Therefore Russian aeroacoustic collaboration, if pursued, should be framed as:
> phone-scale method transfer / benchmark competition,
not:
> Russia has an aeroacoustic capability China lacks.

## 3. Current domestic strengths that materially raise the Russia bar

The China academic baseline is already strong in:

- sub-0.4 mm two-phase devices;
- mobile/flexible LHP;
- high-flux boiling and thin-film boiling;
- embedded microfluidic chip cooling;
- aeroacoustics;
- compact active-air mechanisms;
- runtime/DVFS optimization;
- thermal materials.

Therefore a Russian collaboration should **not** be justified by:
- publication count;
- general thermophysics prestige;
- generic possession of the same technology category.

It should be justified by one of:
1. a mechanism/failure boundary not well controlled by the China baseline;
2. unusual long-duration reliability know-how;
3. experimental/diagnostic capability that shortens our learning cycle;
4. narrow background IP/know-how enabling a differentiated phone implementation;
5. a complementary combination with China's miniaturization/manufacturing strength.

---

## 4. Benchmark gaps still open

Before management-final, strengthen:

- exact Chinese counterpart for **actual multi-year operation of the same engineered hierarchical surface** remains open, but generic VC reliability/lifetime capability is now closed as a gap;
- Chinese phone-scale **~18–25 mm / ~20k rpm microfan acoustic** academic test remains open, despite strong larger electronics-fan aeroacoustic evidence;
- China/Russia EHD institution normalization;
- direct China mobile **thermal-control**, not only energy/DVFS optimization;
- Chinese academic-to-OEM transfer evidence for several mechanisms;
- domestic labs behind the newest 0.25 mm / inverse-opal VC directions.

These are evidence gaps, not proof of missing Chinese capability.
