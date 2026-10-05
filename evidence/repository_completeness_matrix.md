# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-04

This file contains the **current QA snapshot only**. Historical changes are recorded in ../CHANGELOG.md.

## Current QA

| Workstream | Freshness | Traceability | Main gap | State |
|---|---|---|---|---|
| 00 Scope / governance | current | strong | none critical | PASS |
| 01 Global baseline | refreshed | good | more Huawei/China flagship geometry; sustained-power data | PASS-WITH-GAPS |
| 02 Technology landscape | current | medium-good | emerging active routes need more primary evidence | PASS-WITH-GAPS |
| 03 Russia institutions | **capability atlas + foundational + Siberian network map current** | strong | current ICM/Kutateladze project ownership; broader non-university coverage | PASS-WITH-GAPS |
| 04 Labs / researchers | refreshed this round | strong for top surface partners | remaining co-investigator/facility/process details | PASS-WITH-GAPS |
| 05 Papers / patents | refreshed this round | strong first pass | family/status depth; vivo/adjacent-OEM claim gaps | PASS-WITH-GAPS |
| 06 Active cooling | comparator-refreshed | good for generic fan acoustics; medium for phone scale | EHD/piezo + actual smartphone microfan acoustic evidence | NEEDS-WORK |
| 07 China benchmark | **device + reliability + fan + thin-film + LHP + foundational mirror refreshed** | strong | exact multi-year engineered-surface analog; phone-scale microfan; EHD/control; exact analytical evaporative-solution analogue | PASS-WITH-GAPS |
| 08 Opportunity / falsification | **country heatmap + mechanism + foundational pressure tests current** | strong | validate 3 mechanism candidates + foundational blind-boundary PoC + physical Stage-0 evidence | PASS-WITH-GAPS |
| 09 Collaboration / PoC | **partner packets + unified scorecard current** | strong | partner-returned data + physical coupons + background IP | PASS-WITH-GAPS |
| 10 Final report | **leadership package + 4 normalized cards current** | inherits 00–09 | final investment conclusion still awaits partner/Stage-0 evidence | **DECISION-SYNTHESIS-PASS / INVESTMENT-NOT-FINAL** |
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
- dielectric reversible→irreversible dry-spot / boiling-crisis diagnostics;
- high-speed IR / reflected-light / ML-assisted crisis analysis;
- layer-height crisis-mode and structured-surface drying-front evidence;
- current surface/process line;
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
- **Pavlenko: dielectric reversible→irreversible dry-spot / boiling-crisis diagnostics and control**;
- **MPEI: actual multi-year hierarchical-surface operation/aging evidence**;
- **Kabov/Chinnov: shear-driven microfilm / dry-spot / interfacial-instability physics**.

Watch / reserves:
- confined phone-scale aeroacoustic source diagnosis;
- Maydanik LHP knowledge/failure analysis.

### Remaining P0 comparator gaps

Before the management heatmap is final:
1. exact multi-year engineered-surface comparator vs MPEI remains open, but generic VC reliability/lifetime is now **closed as a gap**;
2. actual phone-scale ~18–25 mm / ~20k rpm microfan acoustic benchmark remains open; generic electronics-fan acoustics is **closed as a gap**;
3. EHD/piezo active-air normalization;
4. direct thermal-aware mobile-control comparator;
5. exact China independent analogue for Kutateladze shear-driven free-surface film / dry-spot / extreme-slit instability remains incomplete;
6. Maydanik LHP operating-limit/routing/failure comparator is now **closed sufficiently to downgrade country differentiation**.

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


### Comparator-closure QA — thin film + LHP

Decision-grade chain now includes:
- focused pressure-test memo;
- source register;
- readable bibliography;
- paper briefs;
- paper 10Q cards;
- China academic mirror;
- Russia capability atlas;
- Russia×China heatmap;
- lab deep dives;
- final-report gates.

QA judgment:
**PASS — broad Russia thin-film and residual LHP routing/failure advantage wording is no longer permitted.**

Allowed wording:
- Kabov/Chinnov: narrow shear-driven microfilm / dry-spot / instability mechanism candidate;
- Maydanik: Watch / knowledge reserve.


## Foundational mathematical-physics layer — 2026-10-04

New scope:
- exact solutions / reduced-order models;
- nonlinear stability / bifurcation;
- thermocapillary / evaporative interfacial dynamics;
- mathematical models tied to dryout, rupture, instability and control.

Preliminary Russia evidence:
- Institute of Computational Modelling SB RAS;
- Altai / Siberian Federal links;
- Lavrentyev Institute of Hydrodynamics;
- Kutateladze-adjacent model/experiment lineage.

Current QA:
**COMPARATOR PASS / PRODUCT VALUE PENDING.**

Completed:
- Russia current foundational capability scan;
- independent China mirror;
- focused Russia×China pressure test;
- decision-grade paper briefs / 10Q;
- broad "Russian mathematics superiority" thesis rejected;
- narrow exact/group-invariant analytical-stability capability retained.

Still missing before final promotion:
- verify current ICM SB RAS / Lavrentyev / Kutateladze collaboration topology and partner readiness;
- blind failure-boundary PoC against domestic high-fidelity model;
- direct evidence of experiment reduction / better design decision;
- exact domestic comparator search can continue if a stronger current analytical line appears.

Cross-border coauthorship rule:
joint papers are attributed by lineage/platform/method ownership; they are not automatically double-counted as two independent country capabilities.

Progress effect:
**research round completed; project now ~68%.**


### Foundational comparator closure QA

Canonical artifacts:
- [Russia Foundational Math-Physics Capability Map](../03_russia-institutions/russia_foundational_math_physics_capability_v01.md)
- [China Foundational Math-Physics Mirror](../07_china-benchmark/china_foundational_math_physics_mirror_v01.md)
- [Russia × China Foundational Math-Physics Pressure Test](../08_opportunities-transfer/foundational_math_physics_china_pressure_test_v01.md)

Allowed final-report wording:
> selected Russian groups show a continuous exact/group-invariant analytical + stability modeling lineage for evaporative thermocapillary systems, with experiment-informed closure.

Not allowed:
> Russia is broadly superior in mathematics or mathematical physics for thermal management.

QA judgment:
**PASS-WITH-POC-GAP.**


### Siberian network verification QA

Canonical artifact:
- [Siberian Theory–Fluid–Experiment Capability Network](../03_russia-institutions/siberian_theory_fluid_experiment_network_v01.md)

Verified:
- current Kutateladze–Lavrentyev technical link;
- current Kutateladze–NSU institutional/execution bridge;
- historical ICM/Altai–Kutateladze theory–experiment closure;
- current methodological continuity through the same evaporative-convection problem lineage.

Not verified:
- current formal ICM–Kutateladze project;
- current ICM–Lavrentyev link;
- one unified consortium.

Allowed wording:
**partially verified Siberian modular capability network.**

Not allowed:
**existing integrated Siberian thermal consortium.**

QA judgment:
**PASS-WITH-PARTNER-CONFIRMATION-GAP.**


### Comparator-closure QA — Pavlenko dryout / rewetting

Canonical focused artifact:
- [Pavlenko Dryout / Rewetting vs Independent China Pressure Test](../08_opportunities-transfer/pavlenko_dryout_rewetting_china_pressure_test_v01.md)

Closed broad claims:
- Russia uniquely understands dryout or rewetting;
- modified mesh is itself a Russia-specific control point;
- capillary-fed dryout-limit modeling is uniquely Russian.

Allowed current wording:
> Pavlenko/Kutateladze retains a narrower signal in **dielectric-fluid reversible-to-irreversible dry-spot / boiling-crisis diagnostics and control**, pending phone-scale transfer.

Stage-0 #1 status:
**retained, but NARROW DIFFERENTIATION.**

Remaining evidence gap:
- phone-scale / product-fluid / copper / vacuum / sealed-device proof;
- measurable shift of irreversible-dryout onset versus strong domestic control.

QA judgment:
**PASS-WITH-STAGE0-PHYSICAL-GAP.**


### New-chat continuity / session-handoff QA

Canonical entry:
- [CONTINUE_HERE.md](../CONTINUE_HERE.md)

Purpose:
- allow a new ChatGPT conversation to reconstruct the current project state from GitHub;
- prevent dependence on one long chat window;
- preserve evidence, Kill/Keep, Stage-0, comparator and refresh rules.

Authority safeguard:
- CONTINUE_HERE.md is bootstrap-only;
- PROGRESS.md remains the single global current-status authority;
- current workstream files remain the local decision authority.

Required behavior in a new chat:
1. read CONTINUE_HERE.md;
2. read README.md;
3. read PROGRESS.md;
4. read repository architecture;
5. read the relevant current workstream authority before doing new research.

QA judgment:
**PASS — project continuity no longer depends on chat transcript length.**

Research-progress effect:
**NONE.**


### Comparator-closure QA — MPEI actual multi-year engineered-surface aging

Canonical artifact:
- [MPEI Multi-Year Engineered-Surface Aging vs China Pressure Test](../08_opportunities-transfer/mpei_multiyear_aging_china_pressure_test_v01.md)

Normalization rule:
- **actual calendar-time operation**;
- **accelerated aging / Arrhenius prediction**;
- **post-failure analysis**;
- **manufacturing QA**;
must be treated as different evidence types.

China public capability is strong in:
- copper-water VC failure physics;
- oxygen/vacuum reliability;
- accelerated lifetime prediction;
- oxidation QA;
- mobile-scale devices.

No matched public China analogue was recovered for:
- same engineered evaporator surface;
- actual multi-year two-phase operation;
- thermal + morphology + capillary-aging tracking.

Allowed wording:
> MPEI retains a narrow evidence edge in **actual multi-year engineered-surface aging**, not broad reliability leadership.

Not allowed:
> MPEI/Russia has better long-term reliability than China.

Remaining gap:
- phone-scale copper-water transfer;
- early-warning value of capillary/surface aging;
- partner access to historical 42-month data.

QA judgment:
**PASS-WITH-STAGE0-TRANSFER-GAP.**


### Management capability-map QA

Canonical artifact:
- [Russia Thermal Failure-Mechanism & Foundational Capability Map](../10-final-report/management_capability_map_v01.md)

Required elements verified:
- full Russia capability panorama;
- 3 + 1 strategic core;
- China strong-baseline overlay;
- Stage-0 / Reserve / Watch / Kill separation;
- Siberian modular-network boundary;
- leadership resource ask;
- explicit remaining unknowns.

Critical boundary checks:
- TPU shown as challenger, not Russia country advantage;
- Maydanik shown as Watch / knowledge reserve;
- TsAGI/PNRPU/CIAM shown as Watch / method reserve;
- generic Russia VC / LHP / materials / DVFS advantage not resurrected;
- Siberian network not described as an integrated consortium;
- no current candidate promoted to unconditional GO.

QA judgment:
**PASS-DRAFT.**

Management-map completeness audit completed 2026-10-05:
- institution/capability sweep completed;
- 2023–2026 freshness confirmed for promoted nodes;
- strong China comparator boundary rechecked;
- JIHT and SPbPU added only as supporting nodes;
- no new fourth strategic Russia core found.

Remaining before **final investment recommendation**, not map freeze:
- partner-returned evidence;
- Stage-0 physical results;
- exact IP/background/foreground negotiation where needed.

Research-progress effect:
**+1 percentage point only for the substantive management synthesis milestone; no credit for formatting/cross-linking.**


### Capability-map completeness pressure-test QA — 2026-10-05

Canonical research artifact:
- [Russia Thermal Capability Map Completeness Audit](../03_russia-institutions/capability_map_completeness_audit_v01.md)

Audit included:
- JIHT RAS;
- SPbPU;
- MSU;
- MIPT;
- Skoltech;
- MISIS;
- ITMO;
- MAI;
- Samara University;
- Bauman;
- Kazan-region candidates;
plus freshness revalidation of all promoted nodes.

Changes:
- **ADD JIHT** — supporting MPEI-adjacent microchannel/boiling node;
- **ADD SPbPU** — complementary direct heat-flux / immersion-cooling diagnostics node;
- **ADD RU2860581C1** — Kabov current electronics-cooling IP/activity evidence;
- strategic 3+1 core unchanged.

Not promoted:
MSU / MIPT / Skoltech / MISIS / ITMO / MAI / Samara / Bauman / Kazan-region nodes.

Reason:
current evidence does not establish a residual smartphone/chip control point beyond the stronger China/global baseline.

QA judgment:
**PASS — management capability map is a FREEZE CANDIDATE.**

Public-disclosure caveat:
absence of a promoted public control point does not prove an institution lacks internal capability.


### Leadership decision-package QA — 2026-10-05

Canonical:
- [Russia Thermal — Leadership Decision Package](../10-final-report/leadership_decision_package_v01.md)

Normalized decision cards:
- [Pavlenko](../10-final-report/leadership_card_pavlenko_v01.md)
- [MPEI](../10-final-report/leadership_card_mpei_v01.md)
- [Kabov](../10-final-report/leadership_card_kabov_v01.md)
- [Foundational Reserve](../10-final-report/leadership_card_foundational_v01.md)

Every card now uses the same 10 decision fields:
1. product problem;
2. Why Russia;
3. strongest China baseline;
4. residual differentiation;
5. evidence;
6. phone-transfer gap;
7. smallest PoC;
8. success / Kill;
9. IP/control point;
10. leadership ask.

QA:
- broad Russia-superiority theses remain explicitly rejected;
- internal thresholds are labeled as internal targets, not source facts;
- TPU remains visible as Stage-0 Challenger without being promoted into the 3 + 1 country-level core;
- Kabov remains High-risk Reserve despite stronger current IP evidence;
- foundational math remains a blind-benchmark reserve, not prestige-based promotion;
- management map remains a Freeze Candidate.

Judgment:
**PASS — leadership strategic-framing package is structurally complete.**

Still not final:
partner willingness, physical Stage-0 evidence, IP negotiation and sealed-device transfer remain open.

### Evidence-to-presentation freeze QA — 2026-10-05

Control files:
- [Leadership Claim Traceability Matrix](../10-final-report/leadership_claim_traceability_matrix_v01.md)
- [Leadership Confidence Matrix](../10-final-report/leadership_confidence_matrix_v01.md)
- [Leadership Presentation Freeze Specification](../10-final-report/leadership_presentation_freeze_spec_v01.md)

Verified:
- all four core cards expose Evidence / Phone / Partner / IP confidence separately;
- every card retains a strong China comparator;
- every card has a Kill gate and explicit leadership ask;
- numerical PoC thresholds are labeled internal targets;
- MEDIUM-confidence strategic claims are rendered as hypotheses, not facts;
- “no matched public analogue recovered” is not converted into “China has none”;
- management hierarchy retains TPU as Challenger rather than false fifth core.

Judgment:
**PASS — evidence-to-presentation traceability is frozen enough for leadership visual production.**

Investment recommendation remains unfrozen pending partner/physical evidence.


### Institution-first entity-taxonomy QA — 2026-10-05

Canonical rule:
- [Institution-First Entity Naming Standard](../00_scope/institution_first_entity_naming_standard_v01.md)

Required hierarchy:
**Institution → Team / PI → Capability / mechanism → Decision state.**

QA changes:
- Russia Capability Atlas now separates Institution and Team/line columns;
- Stage-0 decision scorecard now separates Institution and Team/line in decision output;
- leadership confidence matrix separates Institution and Team/capability;
- leadership decision package and presentation hierarchy are institution-first;
- Kutateladze Institute is represented as **one institution with multiple relevant teams**, not as separate peer entities named Pavlenko and Kabov;
- MPEI and TPU remain institution-level entities with teams nested underneath.

File-name rule:
existing filenames with researcher names may remain for link stability.

Research-progress effect:
**NONE — taxonomy/governance correction only.**

QA judgment:
**PASS.**
