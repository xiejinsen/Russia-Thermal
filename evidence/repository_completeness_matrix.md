# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-04

This file contains the **current QA snapshot only**. Historical changes are recorded in ../CHANGELOG.md.

## Current QA

| Workstream | Freshness | Traceability | Main gap | State |
|---|---|---|---|---|
| 00 Scope / governance | current | strong | none critical | PASS |
| 01 Global baseline | refreshed | good | more Huawei/China flagship geometry; sustained-power data | PASS-WITH-GAPS |
| 02 Technology landscape | current | medium-good | emerging active routes need more primary evidence | PASS-WITH-GAPS |
| 03 Russia institutions | **capability atlas current** | strong first pass | broader non-university coverage beyond current high-signal cluster | PASS-WITH-GAPS |
| 04 Labs / researchers | refreshed this round | strong for top surface partners | remaining co-investigator/facility/process details | PASS-WITH-GAPS |
| 05 Papers / patents | refreshed this round | strong first pass | family/status depth; vivo/adjacent-OEM claim gaps | PASS-WITH-GAPS |
| 06 Active cooling | comparator-refreshed | good for generic fan acoustics; medium for phone scale | EHD/piezo + actual smartphone microfan acoustic evidence | NEEDS-WORK |
| 07 China benchmark | **reliability + fan-acoustic mirror refreshed** | strong | exact multi-year engineered-surface analog; phone-scale microfan; EHD/control | PASS-WITH-GAPS |
| 08 Opportunity / falsification | **country heatmap + Stage-0 gates current** | strong | final 3–5 differentiation convergence + physical Stage-0 evidence | PASS-WITH-GAPS |
| 09 Collaboration / PoC | **partner packets + unified scorecard current** | strong | partner-returned data + physical coupons + background IP | PASS-WITH-GAPS |
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
- current exact as-built layer distribution/yield;
- scale-down from ~0.1 mm-radius grooves;
- exact long-life hierarchy at phone-relevant high heat flux;
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
- RU2812668 inventor/claim mapping — **CLOSED publicly**.

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
4. promoted patent family/status review for surviving candidates;
5. Huawei/background-IP boundary;
6. actual/shareable coupon evidence.

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


## Stage-0 decision-scorecard QA

Canonical:
../09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md

Coverage:
- PASS/PARTIAL/FAIL/UNKNOWN across all required partner dimensions;
- public / partner-only / experiment-only closure route;
- explicit GO WITH PREREQUISITE / HOLD decisions;
- smallest next experiment;
- kill/promotion logic.

Current:
- Pavlenko — **GO WITH PREREQUISITE**
- MPEI / Ivanov — **GO WITH PREREQUISITE**
- TPU / Feoktistov — **GO WITH PREREQUISITE**
- MPEI ordered wick — **HOLD**

The repository is still **not decision-final** because Stage-0 physical evidence does not yet exist.


## Repository-governance follow-up — 2026-10-04

A second-pass audit was run after Stage-0 blocker closure.

### P0 governance issues — CLOSED

1. **Dated audit authority ambiguity**
   - `00_scope/repository_audit_2026-10-04.md` and `evidence/evidence_traceability_audit_2026-10-03.md` are now explicitly marked **SNAPSHOT / NON-AUTHORITATIVE**.
   - live authority remains PROGRESS / workstream current files / this QA matrix.

2. **Global vs local authority ambiguity**
   - repository architecture now explicitly separates global project authority from workstream-local authority;
   - Workstream 08 no longer ranks its local files above `PROGRESS.md`.

3. **Stage-0 scorecard traceability**
   - the canonical partner scorecard now contains a local evidence spine with Russian primary papers, patents and strong UTVC comparators.

4. **09 stale execution wording**
   - TPU experiment split updated to laser-only low-organic vs hydrocarbon-biphilic;
   - MPEI Stage-0 question updated from generic thickness/high-flux uncertainty to exact long-life hierarchy scale-down/high-flux transfer;
   - 09 partner/readiness/PoC files are synchronized with the scorecard.

5. **09 citation readability**
   - current 09 files no longer use bare URL lines as their primary evidence display.

### P1 readability / maintenance backlog — does not block research

Current high-priority 09 decision/PoC files are compliant.

Remaining migration should proceed opportunistically in:
- current 04 lab/researcher cards;
- current 07 China benchmark files;
- several current/supporting 08 analysis files;
- selected 05 supporting IP files.

Historical snapshots / seed files may retain old formatting if clearly marked non-authoritative.

### Scale-management decision

Do **not**:
- create another global status file;
- migrate the 00–10 folder structure;
- split `source_register.md` yet.

Current structure remains navigable.

Future trigger:
- if the source register or a workstream becomes materially hard to navigate, split by evidence class/subtrack while preserving one index and stable links.

### Progress effect

**No research-progress increase.**

This pass improves repository integrity and usability only.


## Stage-0 partner-packet QA

Completed:
- [Packet Index / Common Protocol](../09_collaboration-roadmap/stage0_partner_packet_index_v01.md)
- [Pavlenko Packet](../09_collaboration-roadmap/stage0_packet_pavlenko_v01.md)
- [MPEI / Ivanov Packet](../09_collaboration-roadmap/stage0_packet_mpei_ivanov_v01.md)
- [TPU / Feoktistov Packet](../09_collaboration-roadmap/stage0_packet_tpu_feoktistov_v01.md)

Each packet contains:
- explicit Stage-0 decision question;
- evidence boundary;
- mandatory partner data request;
- coupon/drawing convention;
- measurement sequence;
- competing hypotheses where needed;
- success/kill thresholds;
- background/foreground-IP questions;
- partner/internal role split;
- Stage-1 progression logic.

QA judgment:
**STRUCTURE PASS / EVIDENCE EXECUTION PENDING.**

The next maturity increase requires returned partner data or physical coupon evidence, not more document elaboration.


## Management capability-view QA

Current artifacts:
- [Russia Thermal Capability Atlas](../03_russia-institutions/russia_thermal_capability_atlas_v01.md)
- [China Academic Thermal Capability Mirror](../07_china-benchmark/china_academic_capability_mirror_v01.md)
- [Russia × China Academic Capability Heatmap](../08_opportunities-transfer/russia_china_academic_capability_heatmap_v01.md)

### Structural QA

**PASS — first management-capability loop exists.**

The current chain is:

Russia capability domain
→ institution/lab
→ recent evidence
→ mobile/chip transfer state
→ China academic mirror
→ generic-thesis kill/reframe
→ residual Russia differentiation candidate
→ partner / PoC where mature.

### Current evidence consequence

Broad Russia-advantage claims are explicitly rejected for:
- generic VC / UTVC;
- generic LHP miniaturization;
- generic high-flux microchannels;
- generic biphilic/laser surfaces;
- generic aeroacoustic exclusivity;
- generic DVFS;
- generic thermal materials.

Current differentiation candidates remain provisional:
- modified-mesh dryout/rewetting;
- **actual multi-year hierarchical-surface operation/aging evidence**;
- thin-film/interfacial-instability mechanism depth;
- LHP routing/operating-limit physics.

Watch / method reserve:
- confined phone-scale aeroacoustic source diagnosis.

### Remaining P0 comparator gaps

Before the management heatmap is final:
1. exact multi-year engineered-surface comparator vs MPEI remains open, but generic VC reliability/lifetime is now **closed as a gap**;
2. actual phone-scale ~18–25 mm / ~20k rpm microfan acoustic benchmark remains open; generic electronics-fan acoustics is **closed as a gap**;
3. EHD/piezo active-air normalization;
4. direct thermal-aware mobile-control comparator;
5. deeper China thin-film/interfacial diagnostics mirror;
6. China LHP operating-limit/routing/failure comparator.

QA judgment:
**STRUCTURE PASS / COUNTRY DIFFERENTIATION NOT FINAL.**


### Comparator-closure QA — reliability + aeroacoustics

Decision-grade comparator chain now includes:
- source register;
- readable bibliography;
- paper briefs;
- 10Q decision cards;
- China capability mirror;
- Russia×China heatmap;
- Russia lab/capability interpretation;
- final-report gate.

QA judgment:
**PASS — broad MPEI reliability and Russia aeroacoustic advantage claims are no longer permitted.**
