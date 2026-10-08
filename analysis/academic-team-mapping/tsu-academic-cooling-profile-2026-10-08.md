# TSU — Academic laboratory / people / compact-electronics cooling and PCM research

date: 2026-10-08
research_state: BOUNDED_ORIGINAL_TEAM_PAPERS_VERIFIED / INSTITUTION_OUTPUT_TOTALS_NOT_MEASURED
organization: ACT-TSU
canonical_lab: ACT-TSU-CHMT-LAB
canonical_capability: CAP-TSU-ELECTRONICS-COOLING-MODELING
decision: SUPPORTING_MODELING_AND_POROUS_PCM_EXPERTISE / NO_PRIMARY_PARTNER_PROMOTION
scope: SMARTPHONE_PRIMARY / TABLET_SECONDARY / ACADEMIC_ONLY / NO_OUTREACH_NO_TEST
ledger: [15-row work/project/comparator staging](tsu-2021-2026-team-evidence-staging.tsv)

## 1. Decision

**Tomsk State University controls a clear, sustained academic CFD and passive/active electronics thermal *modeling* capability in a named laboratory. It does NOT yet demonstrate phone-scale thermal hardware, outperformance over Chinese current PCM structure/experiments, or a unique control point justifying P1/P2 promotion.**

The defensible future academic collaboration niche is calibrated simulation / thermal-buffer transient-load design rules where an external lab delivers model verification or uncertainty not available internally. A generic "PCM + metal foam/fin makes electronics cooler" is established China/global prior art and cannot be positioned as Russia-only invention.

## 2. Institution -> verified laboratory -> individual academic owners

**Tomsk State University** (ACT-TSU), [Laboratory on Convective Heat and Mass Transfer](https://chmt.tsu.ru/) (ACT-TSU-CHMT-LAB), Faculty of Mechanics and Mathematics. Official lab website lists:
- **Mikhail A. Sheremet** — laboratory head, TSU theoretical mechanics professor, coauthor and primary academic team leader, now PERSON-SHEREMET-MA. [TSU academic council](https://dev-en.tsu.ru/about/TheAcademicCouncil/) independently names him head of the heat/mass transfer modeling laboratory.
- **Nadezhda S. Bondareva** — laboratory researcher/senior university scientist, active on PCM and porous-metal heat capacity / natural convection thermal modeling; official [TSU February 2026 project article](https://en-news.tsu.ru/news/algorithms-created-at-the-faculty-of-mechanics-and-mathematics-will-regulate-the-microclimate-in-bui/) independently identifies her with the same lab and as manager of RSF **22-79-10341**.
- **Nikita S. Gibanov** — laboratory researcher and TSU Associate Professor; official [university project registry](https://persona.tsu.ru/ScienceWorks/Index/12127) says PI of 2024-07-31 — 2026-06-30 RSF active electronics cooling research and earlier 2021–2023 active/passive electronic cooling project.

The official laboratory page itself is an older selectively maintained public page. Current affiliations are **cross-corroborated by university profiles and 2025/26 original publisher papers** rather than pretending its roster was timestamped today.

Core methods: coupled/mixed convection, Stefan melt/freeze/enthalpy, porous-medium Darcy-Brinkman, numerical finite-difference, parameter sweeps and design sensitivity. Other lab outputs heavily involve architectural thermal storage, solar, materials and generalized flow — **exclude these from mobile-relevant 2021–25 work counts by default**.

## 3. Two program lanes with representative 2021–2026 source identities

### A. Gibanov–Sheremet channel/rib/porous active electronics cooling

1. [**Numerical Simulation of Conjugate Mixed Convection in 3D Channel with Heat-Generating Flat Element and Symmetrical Solid Two-Fin System**](https://doi.org/10.3390/sym15071467). Gibanov, Sheremet; *Symmetry* **15(7):1467**, **2023**, original open journal. Controlled 3D channel mixed-convection finite-difference calculation with two heat-spreading fins. Demonstrates numerical method, NOT physical smartphone sink.
2. [**Three-dimensional heat transport and fluid flow in a channel with heat-generating source and heat removal ribs**](https://doi.org/10.1016/j.icheatmasstransfer.2024.108552). Gibanov, M. Hussain, Sheremet; *International Communications in Heat and Mass Transfer* **161:108552**, **2025**. Original [Elsevier article](https://www.sciencedirect.com/science/article/abs/pii/S0735193324013149) treats a 3D horizontal channel, *periodically powered* source, fin geometry and conjugate mixed convection. It is not a lab-validated phone-class pumped loop. Multi-country coauthor Hussain does not imply another TSU lab member.
3. [**Numerical analysis of mixed convection heat transfer in channel with heat generating source and heat removal ribs under the effect of magnetic field**](https://doi.org/10.1016/j.icheatmasstransfer.2026.111564). Gibanov, Sheremet; *International Communications in Heat and Mass Transfer* **178:111564**, **September 2026 YTD**. The [publisher](https://www.sciencedirect.com/science/article/abs/pii/S0735193326010857) identifies the **IJCHMT** venue. TSU's [own publication list](https://persona.tsu.ru/Publications/Index/12127) erroneously calls it *Energy*, vol. 178. Preserve one publisher DOI identity, **not two journal works**. A magnetic field as laboratory modeling parameter is not free in phone hardware: field-generation parasitics, physical realizability, mass and shielding remain out of scope evidence.
4. [**Active electronics-cooling project, PI Gibanov**](https://news.tsu.ru/news/uchenye-mmf-rabotayut-nad-effektivnostyu-sistem-okhlazhdeniya-elektroniki/), university 2024 grant story and [official project listing](https://persona.tsu.ru/ScienceWorks/Index/12127), 2024–2026. Investigates fluid choices, channel/heater geometry, ribs/porous inserts and GPU-parallel numerical algorithms. **Phones** appear among potential end-use examples, not as a claimed experimental result or signed OEM collaboration.

### B. Bondareva–Sheremet passive PCM, metal foam, transient buffering

1. [**Influence of the Fin Shape on Heat Transport in Phase Change Material Heat Sink with Constant Heat Loads**](https://doi.org/10.3390/en14051389). Bondareva, Ghalambaz, Sheremet; *Energies* **14(5):1389**, **2021**; publisher affiliations directly include TSU lab. 3D/finned PCM passive concept models, extra-national coauthor does not imply a Russia-only novelty.
2. [**Influence of PCM heat sink shape on cooling of heat-generating elements in electronics**](https://doi.org/10.1016/j.applthermaleng.2022.118695). Bondareva, Sheremet; *Applied Thermal Engineering* **213:118695**, **2022**. Original [Elsevier journal](https://www.sciencedirect.com/science/article/abs/pii/S135943112200641X) solves lauric-acid solid–liquid PCM in copper vertical/horizontal fins with **volumetric heat source**, using nonprimitive-variable conjugate natural-convection finite differences. More smaller PCM cells raise effective heat capacity; shapes matter to transient cooling. This is a **numerical result**, not measured handset temperature.
3. [**Numerical simulation of heat transfer performance in an enclosure filled with a metal foam and nano-enhanced phase change material**](https://doi.org/10.1016/j.energy.2024.131123). Bondareva, Sheremet; *Energy* **296:131123**, **2024**. [TSU staff original bibliographic listing](https://persona.tsu.ru/Publications/Info/1560?publicationId=198281). Published numerical model finds copper foam contributes more than nanoparticles across tested geometries and additive effects are **non-monotonic** (partial foam + nano-PCM sometimes increases heater temperature). This negative/counterintuitive effect is useful research insight, but **model transfer** to sub-mm phones not validated.
4. [**Effect of anisotropic metal foam on convective effects in PCM melting**](https://doi.org/10.1016/j.applthermaleng.2026.130005). Bondareva, Sheremet; *Applied Thermal Engineering* **291:130005**, **2026 YTD**. [Publisher primary](https://www.sciencedirect.com/science/article/abs/pii/S1359431126003133) reports anisotropy orientation in foam can produce over 20 °C source-temperature contrast within its simulated geometry and setup. **Not a phone device temperature gain**.
5. [**Effect of non-uniform porosity of a metal foam on convective melting in a phase change material based thermal management system**](https://doi.org/10.1016/j.est.2026.123266). Bondareva, Sheremet; *Journal of Energy Storage*, **publisher volume 174**, October **2026 YTD**, [original Elsevier](https://www.sciencedirect.com/science/article/abs/pii/S2352152X26029300). TSU's [person-publications registry](https://persona.tsu.ru/Publications/Index/6953) cites **volume 114**; preserve identical DOI/work, flag catalog volume discrepancy instead of inventing duplicates.
6. [**PCM systems RSF project 22-79-10341**](https://en-news.tsu.ru/news/algorithms-created-at-the-faculty-of-mechanics-and-mathematics-will-regulate-the-microclimate-in-bui/) identifies Bondareva as leader and refers primarily to climate-control **buildings** with prospective servers and power-equipment cooler digital prototypes before mid-2027. The university mentions **eight registered computer-program certificates** from this program: they are **software registrations, not eight thermal patents**, not handset IP, and not an output census.

### Adjacent work must not inflate phone-relevant output

[**Mathematical and Physical Description of Transport Phenomena in Heat Pipes Based on Nanofluids: A Review**](https://doi.org/10.3390/nano15100757), Astanina, Gibanov, Miroshnichenko, Tarasov, Sheremet, *Nanomaterials* **15:757**, **2025**, [publisher authors and laboratory affiliation](https://www.mdpi.com/2079-4991/15/10/757/html). One **review work**, not original LHP hardware trial, separate from any other reviewed journal version.

Some TSU staff catalog records cover hollow-brick thermal storage, solar energy, petroleum reservoir nanofluid, generic nano-hydrodynamics; these are **not automatically phone-relevant**, even if authored by same group.

**Output measurement note**: these papers are a bounded representative set, not verified lab/institution yearly scholarly counts. Original journal DOI years embedded in strings do not control the final publication year; 2026 must not be folded into 2021–2025. Translation/preprint/group coauthor identities still go through canonical Source preflight; no new canonical PAPER objects here.

## 4. Compare against strong China + global academic actual-chip evidence

| The claimed Russian concept | Closely relevant independent original | Pressure on uniqueness |
|---|---|---|
| PCM fin geometry simulation for heat-generating electronics | [Li et al., *Applied Thermal Engineering*, 2024](https://doi.org/10.1016/j.applthermaleng.2024.123456) **China** team: **experiment + model**, PCMs with pin-fin heat sinks; passive and active cooling optimum fill fraction differed (90% vs 30% in test conditions) | numerical fin/PCM thermal moderation is internationally established, and independently experimentally tested in China |
| PCM/metal foam and metal honeycomb | [Wei Li et al., *Applied Thermal Engineering*, 2024](https://doi.org/10.1016/j.applthermaleng.2023.122081) **China** research: honeycomb + alloy/paraffin PCM, experiments with a mathematical model | foam/PCM composite is not Russian exclusive; transfer metrics differ |
| Transient pulse train chip cooling using composite PCM | [Kim / Yang / Miljkovic / King, *IJHMT*, 2023](https://doi.org/10.1016/j.ijheatmasstransfer.2023.124263), USA/global research: actual GaN device; max junction temperature down ~9% and swing ~21% against copper under tested power | global empirical and ROM modeling prior art goes closer to actual chip than TSU numerical cavity |
| Improved actual GaN chip PCM cooling | [Lung-inspired PCM-impregnated heat sinks, *IJHMT*, 2025](https://doi.org/10.1016/j.ijheatmasstransfer.2024.126287), lab tested with GaN transistor and Field's metal; still larger than a phone | further limits claim of unique Russian latent-heat topology |

No direct same-volume, same-power, same-fluid, same PCM melt point, same enclosure and cycling protocol comparison was found in this round. Different devices' temperature numbers **must not be ranked head-to-head**.

**Potential TSU residual:** controlled parameter studies and **failure-to-improve cases**, e.g. added nanofiller or changed foam layout can worsen heater temperature despite ostensibly higher PCM conductivity, could be informative as *model counterexamples*. That is a plausible *collaboration hypothesis*, not an existing China-absent result, because Chinese and US teams already conduct structure optimisation and experiment.

## 5. Phone-scale transfer and a falsifiable decision gate

For smartphone transient thermal buffer ask for **time-domain device utility** under realistic burst/idle duty cycles, cooling between bursts, ambient conditions, variable orientation and allowable enclosure volume/mass:
- Compare thin actual-volume PCM with current copper/graphite/VC thermal spreading and baseline controller under identical pulse inputs.
- Check heat capacity **per allowed device volume** and PCM recharge time, not only single-burst peak reduction; avoid moving heat into next burst.
- Include latent heat plateau alignment with allowable chip and skin temperatures, encapsulation thermal resistance, leakage, cycles, swelling and user-felt surface temperature.
- For active liquid route include pump power, leak/failure risk, flow resistance and available device thickness; magnetic-field or elaborate porous channel claims require overhead accounting.
- A numerical model gains decision relevance only if validated against a phone-like physical experiment, or uncovers robust counterexamples to a strong current China/global model.
- **No experiments or direct outreach in public-evidence phase.** These are evidence gates for *possible* later collaboration, not work claimed executed.

## 6. Collaboration, knowledge acquisition and decisions

**Keep TSU as ACADEMIC ENABLER / WATCH, not new P1/P2.** Explicit possible cooperation questions:
1. Can Sheremet–Bondareva deliver a validated reduced-order PCM geometry/thermal-buffer model usable at phone-class thinness and repeated pulsed loads, and show bounded improvements vs existing chip PCM experimental baselines?
2. Can Gibanov's channel/rib active-cooling numerical models offer new sensitivity/counterexample insights under severely limited coolant-flow and pump-power budgets?

**Do-not-invest based only on this evidence:** generic PCM fin/metal foam passive module for phones; speculative active microchannel liquid pump; giant stationary/energy storage geometry transplanted into handset; claiming 8 source-code registrations are thermal patents.

No assertion that TSU data, methods or collaborators are available for sharing; no current industrial partner or team willingness assumed. No current strategic technology direction changes.

## 7. Project-goal regression

| Target | Concrete delta | Remaining gap |
|---|---|---|
| Russian academia mapping | Institution profile newly prepared, direct Sheremet–Bondareva–Gibanov lab verified and canonicalised | 7 more owner profiles after TSU (expected 22/29), non-owner coverage audit |
| Researcher & expertise | One verified team director and corrected parents for two people | student/PI activity per latest official records, seniority and current team funding |
| Transferable capability | owner of `CAP-TSU-ELECTRONICS-COOLING-MODELING` now named laboratory; 34 RU capabilities unchanged | direct phone/device method validation, volume and cycling limits |
| Last-five-year research strengths | Anchored 2021/22/23/24/25 papers + 2026 YTD and grants, separated review from original | DOI/synonym/dedup full annual output & patent family still NOT_MEASURED |
| China/global differentiation | Actual Chinese experimental PCM results rebut generic uniqueness, TSU residual narrowed to sensitivity/negative model cases | matched model-vs-data information gain |
| Partner collaboration | academic simulation and execution/knowledge-transfer potential; no P1/P2 change | true dataset access, rights and willingness unknown |
| Leadership delivery | new modulated report/Atlas with traceable paper titles and original hyperlinks | finish 7 institute profiles and comparative bibliometrics; site/index full CI |

Next priority: `ACT-ICM-SBRAS` researcher and exact institutional model ability, then `ACT-MISIS`. Resume remaining Russia institutional coverage and begin high-signal research-output bibliometric reconciliation in parallel. Do not reopen Kutateladze P1 with no new decision-critical source.
