# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-04

This file contains the **current QA snapshot only**. Historical changes are recorded in ../CHANGELOG.md.

## Current QA

| Workstream | Freshness | Traceability | Main gap | State |
|---|---|---|---|---|
| 00 Scope / governance | current | strong | none critical | PASS |
| 01 Global baseline | refreshed | good | more Huawei/China flagship geometry; sustained-power data | PASS-WITH-GAPS |
| 02 Technology landscape | current | medium-good | emerging active routes need more primary evidence | PASS-WITH-GAPS |
| 03 Russia institutions | current | good | broader non-university coverage | PASS-WITH-GAPS |
| 04 Labs / researchers | refreshed this round | strong for top surface partners | remaining co-investigator/facility/process details | PASS-WITH-GAPS |
| 05 Papers / patents | refreshed this round | strong first pass | family/status depth; TPU/vivo claim gaps | PASS-WITH-GAPS |
| 06 Active cooling | current | medium-good | EHD, piezo/MEMS, installed-fan evidence | NEEDS-WORK |
| 07 China benchmark | current | good | independent OEM measurements / supply-chain detail | PASS-WITH-GAPS |
| 08 Opportunity / falsification | current | strong | physical Stage-0 transfer evidence | PASS-WITH-GAPS |
| 09 Collaboration / PoC | **partner briefs current** | strong | physical coupons + background IP | PASS-WITH-GAPS |
| 10 Final report | framework current | inherits 00–09 | conclusions provisional until readiness gates pass | STRUCTURE-PASS / CONTENT-NOT-FINAL |
| Evidence governance | current | **strong + core 10Q deep-reading layer** | source register may need thematic split later | PASS-WITH-GAPS |

## Russia university coverage

- minimum set checked: 20 / 20
- HIGH-SIGNAL: 4
- KEEP: 14
- NO CURRENT SIGNAL FOUND: 2
- PENDING: 0

Canonical:
../03_russia-institutions/major_university_coverage_matrix.md

## Stage-0 partner-readiness QA

Current execution order:
1. Pavlenko / Kutateladze
2. MPEI / Ivanov
3. TPU / Feoktistov
4. MPEI ordered wick — pre-device

This is not a final partner ranking.

### Pavlenko

Strong:
- dielectric boiling / CHF / dryout;
- modified mesh;
- current lab;
- relevant IP.

Open:
- exact thin-mesh modification process window;
- added layer/morphology and permeability penalty;
- copper / 60–100 μm transfer;
- product-fluid transfer;
- vacuum/cycling;
- Huawei/background-IP boundary.

State:
**Stage-0 priority #1; technical-discussion ready.**

### MPEI / Ivanov

Newly closed/strengthened:
- R410A alternate-fluid evidence;
- 42-month periodic two-phase operation;
- long-duration surface morphology / thermal-performance retention;
- current hierarchical-coating program.

Primary:
https://doi.org/10.1016/j.pes.2026.100314

Still open:
- actual nanoparticle-layer total thickness;
- scale-down from ~0.1 mm-radius grooves;
- phone-relevant high heat flux;
- copper / VC manufacturing process;
- <0.5 mm sealed device.

Important:
the 42-month result is **not directly comparable** with phone thermal load because the application heat flux is much lower.

State:
**Tier B+ Stage-0 priority #2; reliability gap partially closed.**

### TPU / Feoktistov

Newly strengthened:
- 2024 biphilic process lineage;
- 2026 laser–thermolysis surface durability;
- humidity/saline/abrasion robustness.

Primary:
https://doi.org/10.1016/j.surfin.2026.109390

Still open:
- vacuum outgassing;
- hydrocarbon residue / working-fluid contamination;
- copper transfer;
- sealed two-phase cycling;
- RU2812668 inventor/claim mapping.

State:
**Tier B+ Stage-0 priority #3.**

### MPEI ordered wick

Still open:
- physical thin specimen;
- thickness;
- measured permeability / capillary pressure;
- repeatability.

State:
**pre-device.**

## 3–6 month collaboration-brief gate

Completed:
- Pavlenko brief
- MPEI/Ivanov brief
- TPU brief

Canonical:
../09_collaboration-roadmap/

A brief is research-ready when it contains:
- exact partner question;
- data request;
- coupon geometry;
- common comparator;
- process sequence;
- success/kill;
- IP questions;
- role split.

All three current briefs pass this structural gate.

## Priority-0 backlog

Before selecting sealed Stage-1 arms:
1. Pavlenko thin-mesh manufacturability/process evidence;
2. MPEI actual layer/groove scale-down and high-flux response;
3. TPU vacuum/outgassing/fluid compatibility;
4. TPU RU2812668 inventor/full claim;
5. promoted patent family/status review;
6. Huawei/background-IP boundary;
7. actual/shareable coupon evidence.

## Priority-1 backlog

Before final 3-year roadmap:
- broader Russia labs beyond current strong candidates;
- practical EHD evidence;
- piezo/MEMS microblower evidence;
- multi-hotspot LHP geometry/IP;
- materials manufacturing/reliability;
- software/control current comparator set;
- more complete product thermal packaging baselines.

## Final-report readiness QA

Framework:
**PASS**

Content:
**NOT FINAL BY DESIGN**

Pavlenko remains Candidate Primary Bet.
MPEI reliability evidence improves its Reserve/Challenger readiness but does not pass phone-transfer Gate G4.
TPU remains Reserve/Challenger.

Canonical:
../10-final-report/final_report_readiness_gate.md

## Decision-ready definition

The repository is decision-ready only when:
- final recommendations trace to primary/original evidence;
- strong comparators are used;
- non-comparable data is labeled;
- partner roles are fresh;
- major unknowns stay visible;
- Stage-0 physical evidence closes the current transfer gaps;
- README / PROGRESS / workstream indexes agree.


## 10Q evidence-readability QA

Current core decision-grade evidence now has a three-layer human reading path:

1. `readable_bibliography.md` — what the source is;
2. `paper_briefs_decision_grade.md` / `patent_briefs_decision_grade.md` — what it means;
3. `paper_10q_cards_core_v01.md` / `patent_10q_cards_core_v01.md` — whether the evidence is sufficient for technology, partner, PoC and IP decisions.

### Core paper 10Q coverage

Completed for:
- Pavlenko/Kutateladze phase-change surface core set;
- MPEI/Ivanov capillary-transport, thermosyphon and 42-month reliability chain;
- TPU/Feoktistov biphilic, diagnostics and hydrophobization chain;
- strong China/global 0.35–0.4 mm UTVC comparators.

### Core patent 10Q coverage

Completed for:
- Kutateladze/Pavlenko background IP;
- MPEI coating/wettability background IP;
- TPU institutional patent signal;
- direct China/OEM VC prior art from Guangdong University of Technology, Guangzhou Maritime University, Huawei, Xiaomi, Honor and OPPO.

### Evidence-boundary improvements

The 10Q layer now explicitly distinguishes:
- Source fact;
- Analyst inference;
- Unknown / partner request;
- non-comparable mobile-transfer evidence;
- public evidence vs claim-level evidence.

### Remaining gaps

Not all historical/foundational long-tail sources have 10Q cards.
They are only required when promoted into:
- a Strategic Bet;
- a partner decision;
- a PoC;
- a final-report conclusion.

State:
**CORE 10Q PASS / LONG-TAIL ON-DEMAND.**
