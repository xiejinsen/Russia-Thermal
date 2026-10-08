# Q04 — Kutateladze 2025 keyword-queue coverage reconciliation and negative-control sample

date: 2026-10-08
state: RAW_VS_TRIAGE_QUEUE_DISAGREEMENT_CONFIRMED / 62_DISCREPANCY_AND_SYSTEMATIC_SAMPLE_RECORDS / NO_ANNUAL_OUTPUT_COUNTS
scope: Kutateladze Institute original 2025 online article catalog, 270 raw bibliography rows; 35 previously curated keyword topic candidates
machine_provenance: [Raw original archival 270 entries](../itp-annual-raw/2025-candidates.tsv); [current narrower keyword queue](triage/2025-keyword-candidates.tsv)
row_level_audit: [62-row mismatch and control evidence](kutateladze-2025-keyword-queue-reconciliation.tsv)
assumption: Curated queue and raw extractor use *different* coarse keyword classifiers; neither is ground truth for topic recall.

## Audited numerical facts (set membership, NOT scientific output)

| Pipeline/overlap | Row count | Correct interpretation |
|---|---:|---|
| 2025 recovered original annual-bibliography site rows | **270** | Incomplete official full-discipline site catalog, NOT institution papers/year |
| Original raw snapshot `relevance_review_hint=KEYWORD_CANDIDATE` | **67** | Broader preliminary raw rule |
| Curated 2025 `triage/2025-keyword-candidates.tsv` candidates | **35** | Different, narrower/revised signal rule; prior 35/35 topic-class screening remains valid **within that selected set only** |
| Shared in both sets | **26** | Common candidates |
| RAW keyword hint only (not curated 35) | **41** | Missed by narrower queue, needs review — NOT 41 confirmed eligible papers |
| Curated queue only (not raw hint) | **9** | Revised queue finds additional leads raw rule did not flag |
| Neither of the two keyword flag sets | **194** | Potential false negatives outside both; no full recall established |
| Combined union of two keyword flag sets | **76** | Union title-hit leads, NOT 76 original works |
| Deterministic cross-site **sample of 12 of 203 raw-NOT_KEYWORD_MATCHED** | **12** | Spaced ranks in the 203-item raw-negative subset; one extra high-signal example #262, **not random statistical sample**, do not extrapolate recall |

**Math:** `67 + 35 − 26 = 76` union; `270 − 76 = 194` neither. Raw original says `203` unflagged, of which **9** belong to curated narrower-signal queue. The earlier interpretation that "235 non-keyword site rows" existed is a **wrong denominator**: 270−35=235 means only "not in the 35 curated queue"; it does **not** mean raw-classifier negatives (203) or outside both queues (194). Preserve all three named denominators separately.

The [previously completed 2025 HIGH/MEDIUM topic review](kutateladze-2025-full-keyword-topic-review_2026_10_08.md) still covers the **35 curated queue**; this report does not erase or relabel those decisions.

## Genuine high-signal candidate misses now reinstated for future DOI/abstract audit

- **2025 #46** [Original Kut archive page 3](https://www.itp.nsc.ru/publikacii/2025/2025stati/3.html) "Dynamics of Bubbles and Dry Spots Under the Heated Downward-Facing Substrate", Mungalov, Derevyannikov, Kochkin, Kabov, Marchuk, Luo, Sun, Bai. Direct **P1 mechanism/dry-spot imaging** candidate; indirect citation [DOI candidate 10.1615/InterfacPhenomHeatTransfer.2024054467](https://doi.org/10.1615/InterfacPhenomHeatTransfer.2024054467), **publisher DOI landing not independently verified**. Original issue *Interfacial Phenomena and Heat Transfer* 13(1), 2025; a secondary page shows **2024** early preprint/online, so need work identity/version audit, don't double count. No phone sensor demonstrated.
- **2025 #98** [original Kut archive page 5](https://www.itp.nsc.ru/publikacii/2025/2025stati/5.html) "Heat Transfer and Fluid Dynamics Modeling in Shear-Driven Liquid Film Cooling System of Microelectronic Equipment", Kabov/Kuznetsov, DOI [10.1134/S0015462825604279](https://doi.org/10.1134/S0015462825604279). **Already canonical PAPER-RU-NET-001**, connected Lavrentyev mathematical lab, research exists despite missing curated keyword queue. A definitive concrete *false negative* for narrower 35 list. Count once across institutions, only after publication-time affiliations.
- **2025 #137** [Original archive page 7](https://www.itp.nsc.ru/publikacii/2025/2025stati/7.html) "Isothermal Evaporation of a Thin Liquid Droplet on Porous Surfaces: Measurements of Thicknesses by the Schlieren Method", Peschenyuk et al incl. Gatapova, *J. Engineering Thermophysics* 34(2). Measurement method relevant to film thickness and porous interfaces; DOI/version not independently validated.
- **2025 #164** [Original archive page 9](https://www.itp.nsc.ru/publikacii/2025/2025stati/9.html) "Nucleate Boling Heat Transfer of Dielectric Liquid HFE-7100 in Horizontal Layers at Various Pressures", Brester, Shvetsov, Zhukov, Pavlenko; **publisher original DOI [10.1134/S004060152470068X](https://doi.org/10.1134/S004060152470068X)** confirms 2025 journal original and both **Kutateladze + Novosibirsk State Technical University** affiliations for three authors. Tested horizontal stainless-steel heater **120 mm** in diameter, layer heights 1.5–35 mm, and HFE-7100, not thin phone 0.5 mm copper–water VC. Source already supports a real academically attributable **published work** but **not institution yearly total**. Beware the DOI 2024 segment is not issue year.
- **2025 #194** [original archive page 10](https://www.itp.nsc.ru/publikacii/2025/2025stati/10.html) "Stability of a Liquid Film Hanging Underneath a Large Horizontal Cylinder", foundational film-stability model, not direct handset device; publisher, author affiliation and transfer gate pending.
- **2025 #262** [original Russian 2025 archive page 14](https://www.itp.nsc.ru/publikacii/2025/2025stati/14.html) stratified-to-annular flow regime transition in a flat minichannel, Mungalov/Kochkin/Karchevsky/Kabov (Russian journal *Doklady RAS*); sampled systematically despite NOT raw keyword hint. It likely shares scientific topic/authors with curated #196 "Stratified to annular flow transition due to drop entrainment..." but **DO NOT assume same work**: Russian & English venues/DOI/version need original publisher check.

This establishes **at least** one already-canonical candidate and several highly plausible mechanisms that the curated queue omits. It does not show the title rules' full sensitivity because 194 unmatched entries remain and the official institutional site warns incomplete coverage.

## Method for reproducible sample, not statistical inference

Starting from `2025-candidates.tsv` in raw ordinal order, filter rows with `relevance_review_hint==NOT_KEYWORD_MATCHED` giving 203. Select 12 deterministic spread-out positions `floor((i+0.5)*203/12)`, for `i=0..11`, selecting ordinals **14,35,60,84,118,143,161,185,204,224,244,262**. These include combustion, biology, cryogenic and fuel studies and a possible 2025 #262 false negative. It is a reproducible *sentinel review* not a uniformly random sample, so no population recall-confidence interval or generic sensitivity from 1/12.

## Concrete next Q04 work gates

1. **Merge the two independent keyword queues**, preserve provenance source flags for all 76 title leads, then run human topic triage of the 41 raw-hint-only candidates and source dedup; the old 35 may remain as complete for their **original bounded** queue, not whole website.
2. Independently validate DOI/year/original lab affiliation for high-signal #46, #98, #137, #164, #194 and sample #262; existing #98 must not be ingested twice. #164 includes dual Kut/NSTU institutional affiliations under one work.
3. Add a statistically valid random and an expert challenge sample drawn from all 194 non-hit records, not only the raw-negative subset, to estimate title-filter recall. Do not confuse title relevance with scientific output admission.
4. Reconcile Kut external Crossref/OpenAlex/eLibrary DOI candidate discoveries missing from institute site; site itself is explicitly incomplete.
5. Bring MPEI's separate Ivanov/Kuzma-Kichta and Lyulin/Dedov 2024–2025 team works through same DOI/affiliation methods; do not compare institution totals until **RECONCILED**.

**2021–25 output totals remain NOT_MEASURED / null.** This is a major **Q04 discovery completeness control** and also reinforces P1 source-label possibilities without showing Russia-only information gain.
