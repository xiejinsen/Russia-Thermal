# MEPhI academic team — boiling-regime transition diagnostics, 2026-10-08

status: BOUNDED_PRIMARY_ACADEMIC_TEAM_REVIEW_COMPLETE / ANNUAL_OUTPUT_COUNTS_NOT_MEASURED
actor_root: ACT-MEPHI
specialist_unit: ACT-MEPHI-BOILING-LAB
capability: CAP-MEPHI-BOILING-REGIME-DIAGNOSTICS
source_candidates: [original/evidence staging](mephi-2021-2026-evidence-staging.tsv)
decision: SUPPORTING_ENABLER / NO_NEW_P1_P2_DIRECTION / NO_OUTREACH / NO_DEVICE_TEST
scope: smartphones first, tablets second; university partner prospects only

## 1. Decision-first answer

**MEPhI has a demonstrable named, continuing academic laboratory specializing in boiling-regime diagnostics using heater temperature fluctuations and spectral/wavelet methods, but no verified phone-class thermal hardware or incremental failure-observer performance against current China/global physics baselines.** Its useful scientific niche is **temperature time-series as a potential low-access-cost diagnostic methodology**, rather than exporting a nuclear-reactor instrumentation package to a phone. Strong models/sensors already limit claims of uniqueness.

No promotion of the P1 Kutateladze or P2 MPEI collaboration portfolio is warranted from this research alone. This fills the institutional Atlas gap and clarifies who owns the original scientific work.

## 2. Institution -> verified lab -> key people

- [NRNU MEPhI](https://mephi.ru), Nuclear Physics and Engineering Institute, Department No.13 Thermophysics.
- [Laboratory of Thermohydraulics and Boiling Physics](https://inphe.mephi.ru/node/18937) — separately identified official lab; its scientific head **Kirill Vladlenovich Kutsenko**, candidate of technical sciences/associate professor, is directly listed by the university.
- **Maxim Igorevich Delov**, lab member and MEPhI associate professor: [2025-08-25 institutional interview](https://inphe.mephi.ru/press/news/18854) directly names his membership under Kutsenko and confirms his research in transient boiling. Independent [RSF project 25-79-00251](https://www.rscf.ru/project/25-79-00251/) lists him as **PI**, 2025–2027.
- **Pavel Gennadyevich Struchalin**, associate professor: [2025-09-18 interview](https://inphe.mephi.ru/press/news/18851) explicitly says he participates in BOTH this boiling-physics lab and the separate nuclear-material thermal properties group; [official PhD supervisor](https://eng.mephi.ru/study-with-us/contests/supervisors/pgstruchalin) shows transient boiling and channel-fluctuation research. Do not mistake Struchalin for the boiling lab head.
- **Yulia E. Litvintsova**, Dmitry M. Kuzmenkov and Karen Yu. Muradyan are coauthors in the key 2023 paper; Litvintsova has an additional *Kurchatov Institute* affiliation on that paper. Publication-time academic author evidence is **not current lab appointment proof**. Do not create speculative current PERSON/lab placements from bylines.

Lab vs institute attribution is not a university-wide patent/product claim. The official lab selected-bibliography is **NOT** a complete publication census.

## 3. One original decision-relevant full-text paper (paper 10Q mini-card)

**[Diagnostics of transient heat-transfer regimes during pool boiling based on wavelet transform of temperature fluctuations](https://sciencejournals.ru/view-article/?a=TepEn2311010Litvintsova&j=tepen&n=11&v=0&y=2023)**.
Original Russian title: «Диагностика переходных режимов теплообмена при кипении в большом объеме на основе вейвлет-преобразования температурных флуктуаций».
Y. E. Litvintsova, D. M. Kuzmenkov, K. Yu. Muradyan, M. I. Delov, K. V. Kutsenko. *Теплоэнергетика* (Thermal Engineering original Russian journal), 2023, No. 11, pp.42–53, DOI **[10.56304/S0040363623110103](https://doi.org/10.56304/S0040363623110103)**. Original journal gives authors and historical MEPhI affiliation; Litvintsova also lists the Kurchatov Institute.

- **Problem**: detect transitions from convection to nucleate boiling and nucleate to film boiling without relying solely on condition-specific average-temperature boiling maps.
- **Method**: discrete wavelet transform (`bior2.2`) of time-varying heater-surface temperature; use scale-energy distributions, total coefficient energy and Shannon entropy as potential state-change discriminants.
- **Experimental domain**: atmospheric pool-boiling water and liquid nitrogen, with convection/nucleate/film regimes; NOT sealed wick capillary dryout nor mm-to-sub-mm UTVC.
- **Direct findings**: nucleate regime redistributes fluctuation energy toward higher-frequency bands; film boiling yields much higher total wavelet coefficient energy than convection in the investigated conditions; method avoids an arbitrary Fourier fitting-boundary decision.
- **Limits**: publisher conclusion explicitly frames forced motion, subcooled boiling, multiple heater sizes/materials as **future generalization studies**, not already validated universal accuracy. No phone-copper/water manufacturing, packaging, thermal budget or hardware sensor test.
- **Interpretation**: a *candidate diagnostic feature family* which can be tested against existing thermal RC/saturation/transient physics and appropriate background-noise controls; no classification accuracy, lead-time improvement or phone product performance claimed here.

**Identity:** do not count prospective RU/EN journal translations as two works; English manifestation and publisher-year equivalence not reconciled this round. This is a representative original paper, NOT a new counted Canonical Source.

## 4. Current continuity and source-selection bias

[RSF-funded project 25-79-00251](https://www.rscf.ru/project/25-79-00251/) names Delov and MEPhI, research area thermal/heat transfer, 2025–2027; objectives include water boiling, temperature/flow/pressure/acoustic fluctuations, frequency-domain cross-correlations and a proposed prototype automated diagnosis system.

**Critical:** the grant card includes *expected results*; those cannot be described as actually achieved instrumentation or algorithms. A 2022–2023 grant and 2023 published experiment confirm continuity, not an innovation output total.

The official group's *selected papers* include a 2020 precursor diagnostic study; **2020 falls outside 2021–2025**. Other 2021–2024 listed university work covers solar nanofluid collectors and slurry blockage: such items are **not automatically included** as mobile-related thermal output just because Struchalin/Kutsenko are coauthors. The university PhD page's **18 publications in five years** for Struchalin is neither verified as all boiling papers nor lab-wide mobile thermal output; do not report it as that.

Journals: original work in *Теплоэнергетика* and historical *Experimental Heat Transfer*, *IJHMT* in institute selected list. No journal Quartile/JCR value asserted without checking matching calendar-year subject category and source database.

## 5. China/global test and cooperation implication

Stronger independent state-model prior art already exists in the Russia-Thermal SSOT: transient wick saturation/dryout-rewet (DOI [10.1016/j.ijheatmasstransfer.2025.126837](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837)), pressure/temperature inner-state measurements ([10.1016/j.ijheatmasstransfer.2025.127222](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127222)) and boiling-aware VC models ([10.1016/j.ijheatmasstransfer.2025.127622](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127622)). China's strong capillary-fed and phone VC device engineering remains a binding comparator. MEPhI wavelet features are **not inherently Russia-exclusive**—the article itself discusses acoustic/wavelet, IR and other international precedents.

Distinct scientific niche vis-à-vis Kutateladze:
- Kutateladze: optical/IR **laboratory morphology ground-truth** of dry spots and reversible/irreversible crises.
- MEPhI: external heater-temperature spectral/wavelet **regime discrimination**, tested in non-phone pool boiling.
- Combining methods is a **hypothesis**, not evidence of a verified joint research group, formal collaboration, phone inference path, or value over best existing model. No P1 expansion.

**Potentially sensible future academic partnership question (no contact executed):** Are there temperature/power fluctuation signatures of a *mechanism-labeled*, phone-like sealed wick-dryout/rewet state that add reproducible information beyond robust thermal-history and saturation-state models at production sensor bandwidth? Must consider aliasing/sampling, package thermal filtering, baseline noise, run-wise holdout, identical inference-time inputs and no access to optical labels at product inference. If not, use as academic literature only.

## 6. End-goal and operational gate

- **Institution/person:** MEPhI team owner is now explicit and current; Kutsenko + Delov vs existing Struchalin distinguished. Second lab memberships kept separate.
- **Technical ability:** one established regime-diagnostics method, not a phone cooling prototype. No new Russia capability.
- **Publication/active research:** one original 2023 study and 2025–2027 RSF grant anchored; counts **NOT_MEASURED**.
- **China differentiation:** no unique Russian superiority proven, no promotion.
- **Partner:** academic lab is an enabler for possible future method validation, not immediate P1/P2 or smartphone manufacturing partner.
- **Final deliverable:** fills one missing profile, still requires 2021–2025 institution-year source/dedup/affiliation comparable evaluation and remaining actors.

Next: ACT-TSU, ACT-ICM-SBRAS, ACT-MISIS institution profiles; later remaining lower-priority cases. Explicitly re-run graph/Atlas and generated website integrity checks; do not claim successful CI without evidence.
