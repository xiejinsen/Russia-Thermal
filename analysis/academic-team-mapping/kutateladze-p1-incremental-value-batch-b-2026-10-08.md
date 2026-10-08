# Kutateladze Lab 1.3 / P1 — Batch B: mechanism-ground-truth incremental-value pressure test

date: 2026-10-08
state: PUBLIC_PRIMARY_SOURCE_COMPARATOR_REVIEW_COMPLETE / INFORMATION_GAIN_NOT_MEASURED / PORTFOLIO_P1_KEEP_NARROW
target_decision: Should an academic partnership with Kutateladze Lab 1.3 supply a non-substitutable scientific control point for smartphone ultra-thin vapor-chamber failure understanding?
parent_institution: ACT-KUTATELADZE
primary_team: ACT-KUT-LAB13
canonical_direction: DIR-FAILURE-AWARE-UTVC
canonical_capability: CAP-KUT-L13-DRYOUT-DIAGNOSTICS
comparison_evidence: [kutateladze-p1-comparator-b-2026-10-08.tsv](kutateladze-p1-comparator-b-2026-10-08.tsv)
audience: technical leadership / internal academic-partner prioritization
status_control: NO_EXPERIMENT / NO_OUTREACH / NO_CANONICAL_SOURCE_ADDITION

## Decision first

**KEEP P1 only as a NARROW, unproven academic mechanism-label / model-falsification collaboration thesis.** Evidence supports real high-resolution Russian experimental science; it **does not** support special novelty of detecting dry spots, using U-Net/AI, directly visualizing irreversible crisis, owning internal-state ground truth or outperforming existing Chinese/global models. Both high-fidelity optical diagnosis and physics-informed thermal state inference have independent non-Russian prior art.

**New pressure discovered in this round**:
1. **2016 South Korea** directly documented synchronized liquid–vapor phase distribution and thermal evolution of *irreversible dry spots* near CHF, so irreversible dry-spot observation itself predates the 2026 Russian paper.
2. **2019 global/MIT-linked academic work** segmented IR dry spots using U-Net; **2023 US/MIT** demonstrated quasi-real-time IR/U-Net dry-area recognition using LED/optical phase detection for label truth. Thus AI-assisted dry-spot detection and IR plus optical ground truth are non-exclusive.
3. **2025 Purdue/global transient saturation modeling** predicts dryout, time-to-rewet and thermal hysteresis on commercial heat pipes. **2025 US internal vapor pressure/temperature measurement** directly exposes hidden heat-pipe states. **2025 Purdue VC boiling-aware modeling** already treats local wick saturation / two-phase relative permeability. Russia cannot simply sell "hidden states", "thermal history" or "the model."
4. **2024 Chinese capillary-fed boiling**, **2023 Shanghai Jiao Tong University short-flow-channel architecture** provide distinct mechanism and engineering counter-pressure; the **2026 Japan** 50-micron single-pore paper is a *global*, **not Chinese**, mechanism comparator.

The only residual worth paying for is **repeatable, mechanism-specific labeling of conditions that produce the same thermal/history signature under strongest existing models but different future fate or design decision**. Whether such residual exists is **NOT MEASURED**.

## 1. Russia source-fact panel — 2025 and 2026 are distinct experiments

### [2026 dielectric-fluid dry-spot dynamics](https://www.sciencedirect.com/science/article/pii/S0017931025011901)
Surtaev / Malakhov / Perminov / Polovnikov / Pavlenko; *International Journal of Heat and Mass Transfer* 255 Part 2, 127855 (Feb 2026), DOI [10.1016/j.ijheatmasstransfer.2025.127855](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855).

[FACT] Original publisher reports saturated boiling tests on HFE-7100 and Novec 649; high-speed IR plus underside LED reflection through transparent sapphire with CNN segmentation; dry-spot density, contact-line length, void fraction, size distributions and irreversible patch growth. A bimodal dry-spot-area distribution emerges near CHF before the irreversible region. Irreversible spreading speeds were compared with thermal-wave models. **Publisher-final** HFE-7100/Novec 649 maximum HTC ratio: **1.47**; CHF ratio: **1.56** in the studied setup. No smartphone sealed UTVC studied.

[VERSION NOTE] [SSRN 2025 preprint](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5290682) abstracts a **1.9** maximum HTC ratio and **1.6** CHF ratio, different from the final published **1.47/1.56**. Use peer-reviewed final numbers in decision tables; treat SSRN as related version, not an independent second work. Full revision provenance is not reconstructed in this round.

### [2025 U-Net / reflected-light dry-spot diagnostic](https://sciencejournals.ru/view-article/?a=TepEn2460121Surtaev&j=tepen&n=6&v=0&y=2025)
Surtaev / Perminov / Malakhov / Polovnikov / Chernyavskiy; original Russian *Теплоэнергетика* 2025(6), 45–55; Russian DOI [10.56304/S0040363624601210](https://doi.org/10.56304/S0040363624601210); English *Thermal Engineering* 72(6), 473–482, DOI [10.1134/S004060152570017X](https://doi.org/10.1134/S004060152570017X).

[FACT] Direct original journal page exposes experimental details: water boiling at atmospheric pressure on 0.4-mm sapphire substrate with 1-micron ITO film; heated region 22.7 × 22.7 mm; LED reflection imaging at 5,200 fps and 28.3 micron/pixel; U-Net / ResNet-50 segmentation. A **validation-set** IoU of 0.96 is reported; training/validation sets each contained 1,200/600 labeled images. Do not equate segmentation IoU with ability to predict irreversible boiling crisis or online phone failure classification.

[VERSION/IDENTITY] RU and EN records appear to be translated versions of the same title/authors and should be provisionally grouped **as one research work** in output counting; cross-publisher work-identity signoff remains pending. The original journal is a concrete original-language primary link. 2025 institutional catalog live page has recently shown #145 where frozen archive logs #146; preserve the archived locator and record **ordinal drift**, not a duplicate paper or a stealth overwrite.

[INFERENCE] The 2025 water-boiling instrument validates a research team's ability to extract dry-spot morphology, **not** phone-world sparse sensor observability. The distinct 2026 dielectric experiment extends the fluid domain and crisis analysis, not evidence of a sealed phone device.

## 2. Strongest academic counter-evidence, not a weak generic thermal threshold

| Distinct comparator | Original academic source / evidence | What generic Russian novelty claim it pressures | Important non-equivalence |
|---|---|---|---|
| **South Korea, irreversible dry spots, 2016** | [Kim / Song / Kim, IJHMT](https://doi.org/10.1016/j.ijheatmasstransfer.2016.04.009): simultaneous liquid–vapor distribution, dry-spot temperature, irreversible-patch spread at CHF | "Irreversible dry spot thermography is unique to Russia" — false | Pool boiling, not Russian dielectric fluids and not phone VC |
| **MIT-linked U-Net, 2019** | [Abir / Galib / Seong / Bucci NURETH](https://pure.kaist.ac.kr/en/publications/automatic-detection-of-bubble-dry-spots-in-infrared-boiling-heat-/): CNN segmentation of dry-spot IR images | "AI/U-Net dry spots invented by Russian group" — false | Conference context; not same spectral apparatus / fluid |
| **MIT/global quasi-online labels, 2023** | [Ravichandran / Kossolapov / Aguiar / Phillips / Bucci, ETF&S](https://doi.org/10.1016/j.expthermflusci.2023.110879): IR/U-Net dry patches with optical phase-detection ground truth, ≥90% test accuracy in stated regime | "IR+optical label pipeline / automatic online dry spots are Russian-only" — false | Different regime and raw images; 90% not numerically comparable to Russia 0.96 IoU |
| **China capillary rewetting + aging, 2024** | [Long et al., ETF&S](https://doi.org/10.1016/j.expthermflusci.2023.111030): dryout history changes wettability and future CHF; capillary rewetting / structure mitigation | "History-dependent dryout physics is exclusively Russian" — false | Capillary fed / open rig; not identical local crisis labels |
| **USA/GLOBAL transient saturation, 2025** | [Baraya / Weibel / Garimella, IJHMT](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837): spatial/temporal wick-saturation evolution models transient dryout and rewet | "Generic temporal rewet prediction is an unmet Russia-only gap" — false | Traditional heat pipes, not phone UTVC |
| **USA/GLOBAL internal vapor measurements, 2025** | [Melsheimer et al., IJHMT](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127222): embedded temperature + pressure detect vapor superheat, dryout and hysteresis | "High-fidelity internal dryout ground truth is exclusive to Lab 1.3" — false | Steel water heat pipe for microreactors, different scale |
| **USA/GLOBAL boiling-aware VC model, 2025** | [Sudhakar / Weibel / Garimella, IJHMT](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127622): boiling-region two-phase wick permeability and dryout | "No mechanistic VC failure model exists" — false | Model example 50×50×5 mm, not phone scale |
| **SJTU China architectural mitigation, 2023/2024** | [Li / Cao / Hua / Wu, CIESC Journal](https://doi.org/10.11949/0438-1157.20230936): counter-flow short passage reduces premature downstream dryout, parasitic pumping loss | "Russia uniquely addresses dryout system engineering" — false | Water flow microchannels, not morphology labels |
| **Japan 50-micron experimental pore, 2026** | [Tanaka et al., IJHMT](https://doi.org/10.1016/j.ijheatmasstransfer.2026.128671): transparent 50-micron pore, localized water-vs-ethanol dryout/rewetting modes | "Confinement-resolved failure mechanism is Russia-only" — false | Single-pore analog, not full VC/wick and not China |

**Comparison integrity:** These are *pressure tests on broad uniqueness*, **not head-to-head same-geometry, same-fluid performance comparisons**. No country ranking, relative physical accuracy, collaboration accessibility or phone superiority is inferred.

## 3. Explicit incremental-information challenge

Define outcomes separately:
- **Y_laboratory**: independent ground-truth mechanism class and outcome (temporary contact-loss/recoverable capillary dryout vs evolving nonrecoverable dry patch; any persistent surface-state change separate from transient crisis), adjudicated with synchronized optical/IR and post-event recovery.
- **X_generic**: external heat/power/temperature/transient history; generic RC and anomaly scores.
- **X_physics**: X_generic + known geometry, heat history, saturation/dryout/rewet/hysteresis model predictions; include measured internal P/T when comparing *laboratory diagnostic information* (but NOT assume those sensors are in production phones).
- **Z_russian_mechanism**: spatial dry-spot population, contact-line density, persistence/bimodality, drying-front speed and explicit reversible/irreversible mode taxonomy.

Design three separate falsification questions rather than allowing label leakage:

**Question A — Laboratory mechanism discrimination:** Does Z identify a *physically different mechanism or outcome* in held-out runs that is not determined by X_physics including internal P/T? This checks scientific information *only*, not product deployability. Need matched pressure/fluid/surface/fill/geometry and repeated runs.

**Question B — Model falsification:** Can these ground-truth labels pinpoint a repeatable class of saturation/boiling-aware model errors, alter parameter closure, or alter failure-boundary predictions under controlled perturbation? Comparator must include the 2025 Purdue model family and internal-sensing ground-truth line, not just generic RC.

**Question C — Product-feasible inference:** If Z requires invisible optical channels, it **cannot** be put as an inference-time feature into a phone model. Use it only as supervision, label/validation reference or off-device design-rule discovery. Compare phone-feasible X_phone to (i) baseline physics model and (ii) same-input mechanism-supervised model. Quantify *out-of-sample* class discrimination, calibration, lead time before irreversible onset, false-alarm budget and decisions under fixed thickness/energy/area/telemetry budgets. If label supervised gains vanish on sealed phone-class setups, **no P1 product-facing differentiation**.

Testing logic:
- Hold out entire experiment runs and, where possible, surfaces, fluids and confinement classes; **do not** randomly split adjacent video frames between train and test.
- Compare the **same available inference-time input channels** across baseline and challenger; disallow label-derived future information or optical channels that cannot ship.
- Use error-bar/replicate accounting, calibrated probabilistic scores, confusion by failure mechanism, nonrecoverable event miss rate, false alarm rate, advance warning horizon, and decision changed vs comparator, all as proposed metrics, **NOT measured results**.
- No numeric go/no-go threshold is invented without product thermal/safety budgets.
- Check apparatus differ: Russian 2025 water 0.4-mm transparent sapphire; Russian 2026 HFE/Novec transparent substrate; the industrial object is a sealed, sub-mm copper-water UTVC. Geometry, fluid, heat-source topology, working pressure, wick and observability cannot be assumed interchangeable.

## 4. Disposition and negative-evidence ledger

**KEEP:** Lab 1.3 P1 as candidate supplier of experimental crisis-state labels and counterexample cases to test our internally owned phone-UTVC physics and validation system, contingent on incremental utility proof.

**ALREADY KILLED; now independently reinforced:** generic Russia-only dryout detection; AI/U-Net dry-spot novelty; unique observation of irreversible dry spots; Russia-owned end-to-end observer, model or treated-wick product; Russia broadly stronger than China.

**NOT YET ESTABLISHED:** any gain in model accuracy, phone pre-failure lead time, usable sensing proxy, collaboration feasibility, dataset sharing, superiority over Chinese / US / Korean / Japanese lab methodologies.

**Decision unchanged**: P1 `PRIMARY / STRATEGIC_CANDIDATE`; MPEI P2 conditional reserve; TPU HOLD; Lab 6.6 film reserve; industry only technical background. No experiment, outreach or new canonical SOURCE, and no partner authorization.

## 5. Work-identity and evidence hygiene discoveries

- 2025 Russian and English DOI manifestations are **same apparent scholarly work, translation grouping pending**; 2026 dielectric experiment is distinct from 2025 water segmentation study.
- 2025 SSRN version of the **2026 final** article has different numerical ratios; prioritise final journal values and retain version history.
- 2016 Korean observation and 2023 MIT dry-patch recognition are **new external comparators in a staging analysis**, not new Russia annual output or proof of China capability.
- 2026 Japanese capillary study is **Japan**, not China. Global prior art can limit exclusivity even if Chinese matched evidence differs.
- Source discovery includes original journal, academic research portal, university repository and publisher. Promotion of new Paper objects requires repository DOI preflight; none were added this round.

## 6. Project-goal regression

| Final objective | Concrete delta in this round | Remaining gap |
|---|---|---|
| Russian institutions/academic people | P1 specific method and authors deepened; Lab 1.3 identity from batch A retained | 10 of 29 capability-owner institution profiles incomplete; 11 of 26 primary-academic profiles pending |
| Thermal capability inventory | Lab 1.3 diagnostic boundary refined against non-Russian prior art, no speculative new capability | Ensure 34 existing Russia capability objects cover other academics |
| Five-year research strength | Primary original 2025 U-Net details verified; bilingual and preprint identity issues recorded | DOI href recovery, 2021–24 204 candidates, false negatives, annual totals still NULL |
| Russia vs China differentiation | **Material NARROW:** global and South Korean prior art disprove broad uniqueness; China capillary/architecture engineering remains formidable | No matched measurement of Russia mechanism label information gain against China/global strongest baselines |
| Real academic cooperation | P1 retains conditional academic-only role, no contact | Repeatable run-level labels, reuse rights and matched device/fluids unknown |
| Leadership delivery | Narrow, falsifiable decision language with source URLs and comparator matrix now available | Integrate after evidence-gate signoff; do not silently upgrade first-phase frozen brief |

## 7. Next smallest research step

**Next primary research action:** audit the 2026 original paper's exact label operationalization, measurement uncertainty and experimental repeatability versus the 2016 Korean and 2023 MIT label pipelines; write a *feasibility-only*, no-experiment protocol with nested model/sensor baselines. If the original article does not publish necessary run-level data or matched perturbations, mark public evidence insufficient and **stop spending many rounds pursuing unverifiable uniqueness**.

**Portfolio balance:** in parallel apply this bounded team-capability + comparator template to **MPEI** (P2 long-duration reliability data) and **ITP Ural Branch** (mechanism / LHP reserve), and expand missing academic institution profiles. This prevents the Kutateladze P1 thesis from monopolizing the Russia capability atlas.

Sources for all major evidence are original URL links in sections 1–2 and the machine-readable comparator ledger. No estimates of numeric model gains are reported.
