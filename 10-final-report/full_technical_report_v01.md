# Full Technical Report v0.1

Last reviewed: 2026-10-04

> **DRAFT STRUCTURE — NOT FINAL REPORT**

## Chapter 1 — Executive Decision

Source:
- executive_decision_v01.md

Purpose:
state the decision before showing the evidence.

---

## Chapter 2 — Smartphone Thermal Problem

Questions:
- Which user/system problems matter most over the next 3 years?
- Which constraints dominate: sustained performance, skin temperature, multiple hotspots, acoustics, energy, reliability, thickness?
- How is phone thermal design becoming package/board/VC/frame co-design?

Primary source workstreams:
- ../01_global-baseline/
- ../08_opportunities-transfer/smartphone_constraint_model_v01.md

Required output:
**Problem hierarchy**, not a general thermal tutorial.

---

## Chapter 3 — Global / China Baseline

Questions:
- What has modern industry already solved?
- Which categories are now commodity/crowded?
- What is the strongest relevant benchmark for each surviving direction?

Sources:
- ../07_china-benchmark/
- ../05_papers-patents/
- ../01_global-baseline/

Required output:
**Strong comparator set**, not a vendor catalogue.

---

## Chapter 4 — Russia Capability Map

Questions:
- Which institutions/labs are genuinely current?
- What mechanisms/facilities/know-how are distinctive?
- Who are the credible current technical leads?
- What is their recent evidence quality?

Sources:
- ../03_russia-institutions/russia_thermal_capability_atlas_v01.md
- ../03_russia-institutions/
- ../04_researchers-labs/
- ../evidence/russia_domestic_ranking_register.md
- ../evidence/journal_ranking_register.md

Required output:
Institution -> Lab -> Researcher -> Capability -> Current evidence.

University/journal rankings appear as credibility context only.

---

## Chapter 5 — Russia–China Complementarity

Questions:
- Where is China already stronger?
- Where is Russia different rather than merely behind?
- Which pairings create a plausible joint control point?

Sources:
- ../07_china-benchmark/china_academic_capability_mirror_v01.md
- ../07_china-benchmark/
- ../08_opportunities-transfer/russia_china_academic_capability_heatmap_v01.md
- ../08_opportunities-transfer/russia_china_gap_v01.md
- ../08_opportunities-transfer/direct_comparisons_v01.md

Required output:
**Complementarity matrix**, not national ranking.

### Current management correction — 2026-10-04

The report must not state:
- Russia has a broad two-phase reliability advantage;
- Russia has a broad aeroacoustic advantage.

Current evidence supports only:
- MPEI: narrow value in **actual 42-month operation/aging of one hierarchical evaporator surface**, complementary to strong Chinese copper-water VC failure/lifetime engineering;
- TsAGI/PNRPU/CIAM: **Watch / method reserve** for actual phone-scale microfan diagnosis, because China already has strong electronic-cooling fan source-imaging, duct and narrow-space aeroacoustic research.

---

### Current country-capability convergence — 2026-10-04

After stronger China comparison, active Russia-specific candidates have narrowed to three:

1. Pavlenko/Kutateladze — dryout / rewetting / failure-boundary control;
2. MPEI/Ivanov — actual multi-year hierarchical-surface operation / aging evidence;
3. Kabov/Chinnov/Kutateladze — shear-driven microfilm / dry-spot / interfacial-instability physics.

Removed from active country differentiation:
- TsAGI/PNRPU/CIAM aeroacoustics -> Watch / method reserve;
- Maydanik/ITP UB RAS LHP routing/failure physics -> Watch / knowledge reserve.

Important Kabov wording:
China is already very strong in thin-film boiling and high-flux film devices. The residual Russia claim is only **shear-driven free-surface instability / dry-spot / rupture under extreme confinement**.

Emerging management pattern:
Russia's credible value is converging toward **failure-limit science** rather than generic cooler components.

---

## Chapter 6 — Opportunity Funnel & Negative Evidence

Purpose:
show how the project narrowed.

Must include:
- initial route;
- evidence;
- strong comparator;
- phone constraint;
- IP/prior art;
- engineering feasibility;
- kill/reframe decision.

Sources:
- ../02_technology-landscape/
- ../08_opportunities-transfer/direction_decision_gate_v01.md
- ../CHANGELOG.md

Required output:
**Kill Map** explaining why attractive-looking generic routes were rejected.

---

## Chapter 7 — Strategic Bets

Source:
- strategic_bets_v01.md

Each bet must include:
- user/system problem;
- why current solution is insufficient;
- Russia-specific contribution;
- China/global baseline;
- technical mechanism;
- phone-transfer logic;
- IP thesis;
- PoC;
- success/kill criteria;
- partner;
- 3-year path.

---

## Chapter 8 — Collaboration Targets & PoCs

Source:
- collaboration_portfolio_v01.md
- ../09_collaboration-roadmap/

Questions:
- who?
- why this team?
- what should each side contribute?
- what should be requested before formal engagement?
- what is the smallest discriminating PoC?
- what IP boundary must be clarified?

---

## Chapter 9 — Three-Year R&D Roadmap

Source:
- three_year_roadmap_v01.md

Periods:
- 0–6 months
- 6–18 months
- 18–36 months

Must show:
- technical proof;
- partner progression;
- IP progression;
- product/architecture integration;
- kill/reallocation points.

---

## Chapter 10 — Evidence, Limitations & Unknowns

Source:
- evidence_appendix_index.md
- ../evidence/

Must include:
- strongest primary evidence;
- vendor-claim labels;
- non-comparable evidence;
- public-information limits;
- unresolved patent/IP issues;
- research gaps that could change final decisions.

## Writing rule

The full report must be **claim-driven**, not folder-driven.

Every major conclusion should be readable as:

> Claim -> Evidence -> Comparator -> Caveat -> Decision implication.


## Stage-0 partner decision source

The chapter on collaboration targets must distinguish:
- **publicly closed evidence**;
- **partner-only requests**;
- **experiment-only blockers**.

The canonical current decision is:
../09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md

No final report text may convert **GO WITH PREREQUISITE** into an unconditional partner recommendation.
