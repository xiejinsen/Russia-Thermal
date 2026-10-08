# ICM Krasnoyarsk — one research institute, two thermal capability lines (2026-10-08)

research_state: VERIFIED_IDENTITY_COLLISION / ACADEMIC_TEAM_EVIDENCE_BOUNDED / YEARLY_OUTPUTS_NOT_COUNTABLE
canonical_root: ACT-ICM-KRASN
deprecated_root_alias: ACT-ICM-SBRAS
canonical_theory_dept: ACT-ICM-DIFFMECH
existing_mechanism: CAP-ICM-EXACT-STABILITY-MODELING
existing_electronics: CAP-ICM-KRASN-FLAT-HP-ELECTRONICS
decision: THEORY_FOUNDATIONAL_RESERVE / ELECTRONICS_ADJACENT / NO_NEW_PRIMARY_PHONE_BET
scope: public primary research, Russian academic partners only, smartphone primary, no contacts or experiments
bibliographic_staging: [original links and identity rules](icm-krasn-2021-2025-two-track-evidence-staging.tsv)

## 1. Institutional identity correction — material research QA finding

**[FACT]** The exact official domain `icm.krasn.ru`, official full name, location in Krasnoyarsk, MathNet [institution identity](https://www.mathnet.ru/eng/org3128), and the existing ACT-ICM-SBRAS and ACT-ICM-KRASN actor records all identify **one real Institute of Computational Modelling of the Siberian Branch RAS**. The repo had erroneously modeled this same institute as TWO independent Russian root Actors. This would inflate the academic institution denominator and risk counting institute output twice.

**Repair, without semantic-loss migration:**
- ACT-ICM-KRASN is the **one canonical institution**; its existing 2021 electronics flat heat-pipe research and Nesterov remain intact.
- ACT-ICM-DIFFMECH is its correctly named **Department of Differential Equations in Mechanics**; official current head **Viktoriya Bakhytovna Bekezhanova**, current researcher **Irina Vladimirovna Stepanova**, now both linked to this real department.
- The already referenced ACT-ICM-SBRAS Actor is preserved as a **historical alias**, parented to ACT-ICM-KRASN but owning no Capability or Person after canonical reassignment. It is **NOT** a second institute or research group; historical old report references intentionally remain traceable.
- Institute year-level papers/patents should union works across these two teams and remove any cross-team duplicate DOI, not add independent "ICM-SBRAS" and "ICM-KRASN" institution totals.

**Verification:** [Official departmental structure](https://icm.krasn.ru/section.php?id=14) names Bekezhanova as head. [2025 institute technical seminar](https://icm.krasn.ru/seminar.php?id=mathmech&year=2025) separately names Bekezhanova on convection/phase transition and Stepanova on heat/mass transfer equation classification. [First-party Bekezhanova bibliography](https://icm.krasn.ru/refs.php?epubs=0&persid=7), [Stepanova bibliography](https://icm.krasn.ru/refs.php?epubs=0&lang=rus&persid=235) and [2025 institute bibliography](https://icm.krasn.ru/rprojects_refs.php?kind=-1&year=2025) establish historical and current publication continuity. MathNet institute identity [affirms one address and homepage](https://www.mathnet.ru/eng/org3128).

## 2. Team A — theoretical evaporation and interfacial stability (diff-mechanics department)

### Official people and controls

**Bekezhanova**: Head of Department of Differential Equations in Mechanics, exact evaporating liquid/gas and two-layer thermo-solutal transport, stability neutral boundaries and gas/liquid flow regimes. **Stepanova**: senior researcher in the same department; cross-diffusion, weak evaporative convection and analytical group symmetry of transport equations. Some originals coauthored with **O. N. Goncharova**, **A. S. Ovcharova** and other researchers outside this direct current department roster; do NOT infer all those authors are paid employees of ICM.

### Original publication lineage (representative; not annual totals)

- **[2021 Surface Tension Effects in the Evaporative Two-Layer Flows](https://doi.org/10.1615/InterfacPhenomHeatTransfer.2021036538)** — V. B. Bekezhanova / O. N. Goncharova, *Interfacial Phenomena and Heat Transfer*; mathematical phase-boundary coupling, no phone sealed VC experiment.
- **[2022 Evaporation convection in two-layers binary mixtures: equations, structure of solution, study of gravity and thermal diffusion effects](https://doi.org/10.1016/j.amc.2021.126424)** — Bekezhanova / Stepanova, *Applied Mathematics and Computation* 414, article 126424; clear collaborative internal exact-solution lineage.
- **[2022 Numerical simulation of the dynamics of a locally heated bilayer system under weak evaporation](https://doi.org/10.1016/j.ijheatmasstransfer.2021.122329)** — Bekezhanova / Goncharova / Ovcharova, *IJHMT* 185, 122329. Locally heated evaporation model, different from capillary-porous sealed UTVC.
- **[2024 Mathematical modeling of concentration influence on evaporative convection in a bilayer system of binary mixtures](https://doi.org/10.1016/j.ijheatfluidflow.2024.109385)** — Bekezhanova / Stepanova, *International Journal of Heat and Fluid Flow* 107, 109385. Composition and heat/mass cross-diffusion.
- **[2024 Study of the gas flow rate effect on the parameters of evaporative convection regimes using an exact solution](https://doi.org/10.1016/j.ijthermalsci.2024.109179)** — Bekezhanova / Goncharova / Laskovets, *International Journal of Thermal Sciences* 204, 109179; gas flow controls bilayer evaporative regime, outside sealed-phone conditions.
- **[2025 Impact of the interface heat defect on the thermocapillary response of the phase boundary in a liquid-gas system upon local heating from below](https://doi.org/10.1016/j.ijmultiphaseflow.2025.105260)** — Bekezhanova / Goncharova, *International Journal of Multiphase Flow* 189, 105260. Latest local heating/interfacial heat defect modeling.
- **[2025 On influence of channel geometry on evaporative convection at nonlinear distribution of surface tension of evaporating liquid](https://doi.org/10.1016/j.ijnonlinmec.2025.105121)** — Stepanova, *International Journal of Non-Linear Mechanics* 175, 105121. Geometry/surface tension effect with no mobile device test.

**Mechanism value:** equations, neutral/threshold stability, gas-phase effects and exact benchmark solutions can help falsify oversimplified CFD/surrogate settings. **Discriminator gap:** no measured gain over current strong China/global UTVC saturation/boiling-aware simulations, and gravity/open evaporation boundary conditions may not match sealed sub-mm copper-water wick systems. Do not claim Russian mathematics is unavailable in China.

## 3. Team B — flat HP, LTCC embedded electronics and thermal-stabilization methods

**Current institute person:** [Denis A. Nesterov official leadership](https://icm.krasn.ru/structure.php?item=direct), existing PERSON-NESTEROV-DENIS (deputy science director). Engineering direction is institution-owned as CAP-ICM-KRASN-FLAT-HP-ELECTRONICS, not delegated to Bekezhanova's theoretical department.

**Direct academic collaboration:**
- [Sokolov / Kulagin / Nesterov, **Heat Pipe System as a Component of Spacecraft Electronics**](https://doi.org/10.17516/1999-494X-0317), *Journal of Siberian Federal University Engineering & Technologies*, 2021. First-party [journal original metadata](https://journal.sfu-kras.ru/article/141361) directly lists ICM + Siberian Federal University + Information Satellite Systems–Reshetnev affiliations; compares single vs multiple HP architecture at matched system volume and temperatures. Already canonical PAPER-RU-ICM-ELECTRONICS-001, NOT new research count.
- [2021 mathematical heat-pipe system optimization in institute author list](https://icm.krasn.ru/refs.php?epubs=0&persid=206), DOI **10.17516/1999-494X-0352**, candidate staged pending original issuer and affiliation validation, not canonically promoted.
- [Institute's electronics thermal structures project](https://icm.krasn.ru/section.php?id=80&p=d1_results&page=d1_he) reports LTCC integration and flat-heat-pipe thermal software, with prior project partners Reshetnev/Ural Electrochemical Combine (industry as comparison/provenance, not candidate partners).
- [ICM official 2025 annual research bibliography](https://icm.krasn.ru/rprojects_refs.php?kind=-1&year=2025) documents current broad institute activity, but is NOT itself proof of 2025 new smartphone/HP hardware; avoid claiming new electronics HP implementation without matching project publication.

**Scientific boundary:** Russia has cross-organization space-electronics thermal-design and mathematical-model competence, but the 2021 work and reported LTCC integration are not a proven modern 0.5-mm sealed handset VC program.

## 4. Strong alternative prior art and incremental partnership criterion

- [**2025 adaptable fabricated two-phase heat pipe for flexible complex electronics**](https://www.nature.com/articles/s41467-025-56960-1), *Nature Communications* 16:1713. Chinese research affiliation/engineering context. Device-scale fabricated flexible wick two-phase heat pipe plus COMSOL Brinkman/vapor phase modelling limits broad ICM electronic integration novelty; not matched head-to-head for ICM spacer/LTCC.
- [**2025 Methodology to predict boiling-inclusive vapor-chamber power limits**](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127622), *IJHMT*, Purdue/global science. Wick two-phase permeability, boiling fraction, dryout and thermal limits mean a generic "Russia models heat pipes" collaboration has little differentiation.
- [**2026 Chinese screen-printed 0.5 mm ultra-thin vapor chamber**](https://doi.org/10.1016/j.applthermaleng.2025.129503), *Applied Thermal Engineering* volume 287, modeled wicking and experimentally validated 0.5-mm VC; nonmatching but much closer to phone thickness.

**Possible residual (unproven):** jointly with a Russian academic dept, derive a cheap, interpretable uncertainty/neutral-stability threshold or counterexample that a properly calibrated global UTVC surrogate misses; cross-check against exactly the same phone geometry, fill, duty cycle and complete overhead rather than comparing space hardware MW/m scale to handheld 6 W.

**No new priority change:** ICM is a **supporting academic modeling / engineering-knowledge institution**, not P1/P2, and standalone Russian flat HP/PCM hardware does not justify investment on current evidence. Preserve existing Phase-1 `DIR-FOUNDATIONAL-MODELING-ENABLER` RESERVE/low-phone-transfer and LTCC electronics-adjacent role. No experiments, outreach or dataset-rights assumptions.

## 5. Identity and year-output integrity

- Institute official [2025 publication list](https://icm.krasn.ru/rprojects_refs.php?kind=-1&year=2025) may separately show journal items in WoS, Russian citation categories and eLibrary. **Publisher DOI work identity must be reconciled across those sections** before inferring unique publication counts. The official full institute list includes many unrelated math/data/physics topics.
- In the previous graph the two institute aliases could each be counted as a distinct Russian capability-owner root. **That was a denominator error.** The physically correct denominator excludes deprecated ACT-ICM-SBRAS. Holding 22 profile files but 28 distinct capability-owner institutions (after removing duplicate owner) would be correct for this corpus, subject to actual CI Atlas confirmation. 2021–2025 topical paper counts for the combined actual institute remain NOT_MEASURED.
- Historical repo files/transactions may contain old ACT-ICM-SBRAS references. Keep them intact for fidelity but add alias notes and ensure *live* capabilities/people now resolve to ACT-ICM-KRASN through ACT-ICM-DIFFMECH.
- Older 2020 integration projects cannot be counted as 2021–2025 academic outputs.
- Do not double count individual academics' coauthored paper in the same institute. Scholarly paper identity, year, affiliated institution and topic gate needed individually.

## 6. Final-goal regression

| Required final decision evidence | Progress in this round | Remaining gap |
|---|---|---|
| Russian institute/lab/person map | Corrected one false duplicate institute; documented one real theoretical department head and current member; electronic thermal-model institute team already exists | remaining unknown root profiles, Nesterov direct thermal working group personnel |
| Real scientific mechanism | seven representative exact/thermocapillary papers 2021–2025 linked; one 2021 hardware-space HP work reused | direct phone test/zero-dimensional to multi-scale model parameterization unproven |
| Academically meaningful five-year output | single institute identity to prevent double counted output, staged cross-section research examples | complete DOI/affiliation/topic/year/patent-family reconciled census absent |
| China vs Russia | 2025 actual flexible HP and 2026 China 0.5mm VC plus global boiling-aware models are substantial alternatives | no demonstrated unique error-bound or new product decision from Russian exact solutions |
| Actual collaboration | Bekezhanova/Stepanova theoretical lab + Nesterov electronics team separately targetable within same academic institute | willingness, run-data, legal/IP terms unknown |
| Leadership report and atlas | revised single institute profile and formerly missing Department mapping, remove inflated denominator | generated view & CI signoff, remaining institutions |

**Next:** fix institution-route denominator to treat ICM as one root; validate new single owner 28 versus former 29 and never claim phantom 23rd profile. Continue MISIS and other academic roots while establishing reproducible 2021–2025 institution-level publication denominator across selected teams. Strong methodological warning `DIR-FOUNDATIONAL-MODELING-ENABLER` still has sparse source coverage until incremental model proof.
