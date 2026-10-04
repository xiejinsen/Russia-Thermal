# Russia × China Academic Thermal Capability Heatmap v0.1

Last updated: 2026-10-04

Status: **CURRENT first management-oriented differentiation map; provisional until remaining comparator gaps close**

## Purpose

Answer the management question:

> After comparing Russian thermal-management capabilities with strong Chinese academic baselines, where does Russia still offer a credible differentiated or complementary value for smartphone thermal innovation?

Inputs:
- [Russia Thermal Capability Atlas](../03_russia-institutions/russia_thermal_capability_atlas_v01.md)
- [China Academic Thermal Capability Mirror](../07_china-benchmark/china_academic_capability_mirror_v01.md)
- [Technology Map](../02_technology-landscape/technology_map.md)
- [Stage-0 Partner × Technology Scorecard](../09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md)

This is not a national prestige ranking.

---

## 1. Verdict legend

- **DIFFERENTIATED CANDIDATE** — public evidence suggests a Russia-specific control point remains after strong China comparison; requires transfer proof.
- **COMPLEMENTARY / TEST** — both sides are strong, but Russia may contribute a different mechanism, diagnostic method or reliability know-how.
- **CHINA-BASELINE DOMINANT** — Chinese academic/device evidence is already stronger for the generic thesis; Russia must narrow substantially.
- **UNRESOLVED** — comparison evidence is incomplete.
- **KILL GENERIC THESIS** — do not use the broad technology category as a reason to collaborate with Russia.

---

## 2. Management heatmap

| Capability | Russia public signal | China academic mirror | Current comparative read | Residual Russia-specific hypothesis | Verdict |
|---|---|---|---|---|---|
| **Dielectric boiling / CHF / dryout / rewetting** | Kutateladze/Pavlenko: HFE-7100, modified mesh, dryout/CHF, thin-layer boiling | XJTU: HFE-7100 structured microchannel boiling; NCEPU: ultra-high-flux thin-film boiling | China is also strong in high-flux boiling; category-level "Russia leads boiling" is unsupported | modified-mesh **dryout/rewetting/failure-boundary control** transferred to <=100 μm wick + DI water | **DIFFERENTIATED CANDIDATE** |
| **Ultra-thin VC device** | no public Russian 0.25–0.4 mm frontier device | SCUT 0.35–0.39 mm; HUST 0.25 mm UTTGP frontier | China device miniaturization/manufacturing baseline is stronger | Russia contributes only a mechanism/process inserted into China-style device | **CHINA-BASELINE DOMINANT / KILL generic Russia VC thesis** |
| **Hierarchical coating / two-phase surface reliability** | MPEI/Ivanov: 42-month R410A hierarchy, aging/capillary evidence | China has strong wick/surface/device research; exact long-duration surface-aging counterpart not yet normalized | Russia has a potentially unusual **long-duration reliability dataset**, but phone heat-flux/geometry transfer is open | age-resistant hierarchy / surface-state retention under sealed two-phase operation | **DIFFERENTIATED CANDIDATE — reliability axis** |
| **Biphilic / laser surface** | TPU/Feoktistov; MPEI wettability IP | China has extensive laser/composite/wettability UTVC work and patents | broad surface-treatment novelty is crowded | low-outgassing, vacuum-stable **confined liquid-routing/rewetting** pattern | **COMPLEMENTARY / TEST; KILL generic biphilic thesis** |
| **Thin film / droplet / spray** | Kutateladze Kabov/Chinnov; TPU droplet diagnostics | NCEPU thin-film >2000 W/cm²; Beihang droplet-train CHF up to 1037 W/cm² | both ecosystems have strong fundamental work; neither category alone proves phone product value | Russia may have deeper film-instability/closure physics and diagnostics | **UNRESOLVED / high-risk complementary** |
| **LHP / passive two-phase routing** | ITP UB RAS / Maydanik deep LHP lineage | XJTU 0.7 mm mobile/flexible LHP; HUST 0.71 mm LHP | China already demonstrates direct mobile miniaturization | multi-source/moving-hotspot routing, startup/failure-boundary knowledge | **COMPLEMENTARY / TEST; KILL generic LHP miniaturization** |
| **Microchannel / embedded liquid cooling** | Kutateladze/MPEI/Bauman mechanism evidence | PKU 3000 W/cm² embedded microfluidics; XJTU flow-boiling chips | China academic integration frontier is very strong | niche dielectric/two-phase instability know-how only | **CHINA-BASELINE DOMINANT** |
| **Aeroacoustics / fan-noise** | TsAGI/PNRPU/CIAM facilities and methods | Beihang Key Laboratory of Aeroacoustics + 2025 fan/noise research | China is also strong; Russia is not uniquely capable | source identification / tonal-noise diagnosis in highly confined microfan/duct geometry | **COMPLEMENTARY / TEST** |
| **Piezo / synthetic jet / EHD active air** | Russia public evidence fragmented; SPbU EHD adjacent, Kutateladze synthetic jet | NCEPU piezo-fan electronics cooling; Chinese EHD literature present | Russia evidence currently weaker / incomplete | none established yet | **CHINA-BASELINE DOMINANT / UNRESOLVED EHD** |
| **Thermal materials / TIM / graphite** | Skoltech/MISIS/MSU/SPbU material signals | SJTU and broad China materials ecosystem with compact-electronics validation | no Russian smartphone-specific edge established | unusual reliability/process/material combination only if future evidence appears | **KILL generic materials thesis** |
| **Mobile thermal control / DVFS** | SPbU direct smartphone stochastic/DVFS line | USTC adaptive DVFS; Beihang MobiRL real-phone/product deployment; global thermal-aware RL strong | generic adaptive DVFS is crowded | model-light uncertainty adaptation + active-cooler / skin / acoustic joint control | **COMPLEMENTARY / TEST; KILL generic DVFS thesis** |
| **Diagnostics / long experimental lineage** | strong in Kutateladze, MPEI, TPU, TsAGI/PNRPU | China also has advanced diagnostics/facilities, but mapping is heterogeneous | this is not a product category; value may be shortening mechanism/failure learning | partner-specific diagnostic methods tied to Stage-0 falsification | **COMPLEMENTARY — cross-cutting** |

---

## 3. What the comparison already kills

The current China mirror is strong enough to reject the following management narratives:

- "Russia is attractive because it has vapor chambers."
- "Russia is attractive because it has loop heat pipes."
- "Russia is attractive because it studies boiling."
- "Russia has unique biphilic/laser surfaces."
- "China lacks microfluidic high-flux cooling."
- "China lacks aeroacoustics."
- "Russia's generic DVFS is differentiated."
- "Russian graphene/thermal materials are a unique strategic advantage."

These statements are either false, too broad, or unsupported.

---

## 4. First shortlist of Russia differentiation candidates

### Candidate A — modified-mesh dryout / rewetting control
Institution:
**Kutateladze Institute — Pavlenko/Shvetsov**

Why it survives China comparison:
China has strong boiling and ultra-thin VC capability, but the collaboration thesis is narrower:
- failure-boundary control;
- modified mesh;
- dryout/rewetting;
- transfer across working fluid;
- transfer into <=100 μm-class phone wick.

What would kill it:
- benefit disappears on fine mesh or DI water;
- permeability/process penalty erases the gain;
- strong China-style UTVC control matches result.

Current state:
**Stage-0 priority #1 / differentiated candidate.**

### Candidate B — long-duration hierarchical surface aging / reliability
Institution:
**MPEI — Ivanov line**

Why it survives China comparison:
the public 42-month R410A two-phase stability/aging evidence is unusual in the current comparison set.

Potential control point:
- surface-state aging;
- capillary degradation;
- long-life hierarchy design;
- process retention.

What would kill it:
- phone-scale/high-flux scale-down fails;
- China reference has equivalent long-life evidence once normalized;
- large groove geometry is fundamental.

Current state:
**Stage-0 priority #2 / differentiated candidate on reliability axis.**

### Candidate C — thin-film / interfacial instability mechanism depth
Institution:
**Kutateladze — Kabov/Kochkin/Chinnov**

Why it remains:
Russia has long-running thin-film / slit / droplet physics and current microelectronic-film work.

Why it is not yet a bet:
China has NCEPU high-flux thin-film and Beihang droplet cooling;
phone closed-loop volume/pump/seal constraints remain severe.

Current state:
**high-risk reserve / further comparison required.**

### Candidate D — confined aeroacoustic source diagnosis
Institutions:
**TsAGI / PNRPU / CIAM**

Why it remains:
Russian facility/method lineage may add source-identification and noise-mechanism expertise.

Why it is not yet an advantage:
Beihang provides a strong domestic aeroacoustics counterexample.

Current state:
**complementary reserve; phone-scale equal-envelope test required.**

### Candidate E — LHP routing / failure physics
Institution:
**ITP UB RAS / Maydanik line**

Why it remains:
deep passive two-phase operating-limit knowledge.

Why generic thesis is killed:
XJTU/HUST already demonstrate sub-mm mobile LHPs.

Current state:
**reserve for moving/multi-hotspot routing, not miniaturization.**

---

## 5. Current management narrative

The evidence is converging toward a narrower and more credible answer:

> Russia does **not** appear to hold a broad product-level advantage in smartphone thermal hardware.

Instead, the potential value is concentrated in a small number of:
- phase-change failure mechanisms;
- long-duration two-phase reliability knowledge;
- thin-film/interfacial physics;
- two-phase routing/failure know-how;
- aeroacoustic diagnostics.

China's strongest role is:
- ultra-thin device engineering;
- mobile/product geometry;
- manufacturing/process scaling;
- high-flux embedded cooling;
- academic-to-industry ecosystem;
- OEM integration.

Therefore the collaboration model remains:

**Russian mechanism / diagnostics / failure knowledge**
×
**China ultra-thin manufacturing / device engineering**
×
**our smartphone boundary / workload / system control**
→
**joint differentiated IP and product concept**

---

## 6. Evidence gaps before a management-final heatmap

P0:
1. normalize China long-duration surface/reliability evidence versus MPEI;
2. build a phone-scale China microfan/acoustic comparator, not only large wind-tunnel aeroacoustics;
3. normalize China/Russia software thermal-control evidence;
4. close EHD/piezo active-air institution comparison;
5. add Russian non-university capability coverage outside the current high-signal cluster.

P1:
- strengthen materials/manufacturing comparators;
- map key China PI/lab continuity for every final Russia differentiation candidate;
- add academic-to-industry transfer evidence where public.

A final leadership chart should not label a Russian capability "advantage" until these comparator gaps are addressed.
