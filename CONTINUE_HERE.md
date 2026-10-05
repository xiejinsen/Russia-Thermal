# CONTINUE HERE — New Chat / Session Bootstrap

> **Purpose:** This is the canonical entry point for continuing the Russia-Thermal project in a new ChatGPT conversation.
>
> This file is a **bootstrap / handoff protocol**, not a second project-status file.
> The single authoritative overall project status remains [PROGRESS.md](PROGRESS.md).

## 1. Project identity

Repository:
https://github.com/xiejinsen/Russia-Thermal

Project:
**Russia Mobile Thermal Technology & Collaboration Insight**

Primary objective:
identify Russian thermal-management capabilities that are:
- technically differentiated;
- relevant to smartphones / mobile chips;
- complementary to strong China/mobile-industry capability;
- testable through bounded collaboration PoCs;
- capable of producing useful IP / roadmap options over 0–36 months.

Primary platform:
- smartphone first;
- tablet secondary.

This repository is the project's **Single Source of Truth / living research database**.

Do **not** restart the research from zero when opening a new chat.

---

## 2. Mandatory startup sequence for a new chat

Before doing new research, first read the repository in this order:

1. [CONTINUE_HERE.md](CONTINUE_HERE.md) — this bootstrap protocol
2. [README.md](README.md) — project objective, scope, portfolio and repository map
3. [PROGRESS.md](PROGRESS.md) — **authoritative current research status, progress and next minimum task**
4. [00_scope/repository_architecture.md](00_scope/repository_architecture.md) — authority and refresh rules
5. current local authority for the workstream being resumed
6. relevant decision/evidence files for that task

For the current collaboration / country-comparison phase, normally also read:

- [03_russia-institutions/russia_thermal_capability_atlas_v01.md](03_russia-institutions/russia_thermal_capability_atlas_v01.md)
- [07_china-benchmark/china_academic_capability_mirror_v01.md](07_china-benchmark/china_academic_capability_mirror_v01.md)
- [08_opportunities-transfer/russia_china_academic_capability_heatmap_v01.md](08_opportunities-transfer/russia_china_academic_capability_heatmap_v01.md)
- [08_opportunities-transfer/direction_decision_gate_v01.md](08_opportunities-transfer/direction_decision_gate_v01.md)
- [09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md](09_collaboration-roadmap/stage0_partner_technology_decision_scorecard_v01.md)
- [00_scope/current_execution_constraints_2026_10_05.md](00_scope/current_execution_constraints_2026_10_05.md) — current no-outreach / no-experiment constraint
- [08_opportunities-transfer/internal_phone_thermal_architecture_round8_v01.md](08_opportunities-transfer/internal_phone_thermal_architecture_round8_v01.md) — current internal phone-thermal architecture
- [09_collaboration-roadmap/internal_3year_roadmap_round8_v01.md](09_collaboration-roadmap/internal_3year_roadmap_round8_v01.md) — current gate-based 3-year roadmap
- [09_collaboration-roadmap/dependencies/README.md](09_collaboration-roadmap/dependencies/README.md) — external dependency ledger after public-research closure
- [10-final-report/final_report_readiness_gate.md](10-final-report/final_report_readiness_gate.md)

If the task concerns a specific partner, paper, patent or technical direction, follow links from the corresponding current workstream file instead of relying on chat memory.

---

## 3. Authority rule

When repository files disagree, use:

1. **PROGRESS.md** — global current status / current phase / next minimum task
2. workstream README — local index
3. current matrix / decision file inside that workstream
4. supporting deep-dive files
5. historical snapshots

10-final-report/ is a presentation/decision layer and must not override 00–09 research authority.

This bootstrap file must **never** become a competing status dashboard.

---

## 4. Continuity rule for ChatGPT

In a new conversation:

- treat GitHub as the external working memory;
- do not assume the previous chat transcript is complete;
- do not restart literature collection merely because chat history is missing;
- first reconstruct state from the repository;
- preserve previous Kill / Keep / Reserve / Stage-0 decisions unless new evidence changes them;
- distinguish current authoritative files from historical snapshots;
- use the evidence register and local decision files for claims;
- continue from the **next minimum task** in PROGRESS.md.

If repository evidence conflicts with remembered chat context, **repository current authority wins**.

If a previous conclusion appears stale, update the repository rather than silently carrying the old conclusion forward.

---

## 5. Research quality rules that must survive chat changes

### Evidence first
- prefer primary papers, patents, official institutions and direct technical sources;
- keep direct links;
- distinguish Source Fact / Analyst Inference / Unknown / Partner Request / Experiment Required.

### Recent evidence
- emphasize 2023–2026 where possible;
- older work is mainly lineage / mechanism / IP evidence.

### Mobile/chip hard gate
Strong thermal science alone is insufficient.

A direction must have:
- direct mobile/chip relevance; or
- a quantified credible transfer path.

### Strong comparator
Every promoted Russia claim must be pressure-tested against the strongest current China/global comparator.

### Kill broad theses when evidence requires it
Do not protect a Russia hypothesis because earlier work favored it.

### Industry / vendor evidence
- decision-relevant company/product/collaboration sources use `evidence/industry/`;
- one original industry source → one stable Industry Source Card;
- organization README files stay thin;
- do not duplicate papers or patents into industry cards;
- current decision files cite Industry IDs and keep only decision interpretation.

### Paper / patent management
Decision-grade sources should use:
- readable citation;
- source register;
- brief;
- 10Q decision card;
- local decision citation.

### Institution-first naming
- always classify current Russia capability as **Institution → Team / PI → Capability → Decision state**;
- do not place people and institutions in the same ranking column;
- use `00_scope/institution_first_entity_naming_standard_v01.md` as the canonical rule.

### Current execution constraints
- before resuming outreach or physical Stage-0 work, read [00_scope/current_execution_constraints_2026_10_05.md](00_scope/current_execution_constraints_2026_10_05.md);
- current state: no direct Russian-university outreach and no physical experiment execution;
- use analytical / virtual / decision-closure work only until this constraint changes.

### External dependency ledger
- once a residual is classified PARTNER / EXPERIMENT / LEGAL-FTO / INTERNAL-DECISION, do not keep reopening broad public search;
- returned partner data updates only the corresponding file under `09_collaboration-roadmap/dependencies/` plus affected current decision authorities;
- do not reopen old research rounds merely because new external evidence arrives.

### Progress discipline
Repository formatting or cross-link cleanup does **not** increase research-completion percentage.

---

## 6. Repository refresh contract after substantive work

After a substantive research round, update all affected layers:

- new primary evidence → the smallest matching file under `evidence/sources/sections/` (index only if navigation changes)
- decision-relevant vendor/company/product/collaboration evidence → canonical Industry Source Card under `evidence/industry/` when it is not already a paper/patent
- institution capability → 03_russia-institutions/
- partner/researcher capability → 04_researchers-labs/
- paper/patent/IP conclusion → 05_papers-patents/ and evidence cards
- China/global comparator → 07_china-benchmark/
- hypothesis / Kill / Tier / transfer judgment → 08_opportunities-transfer/
- partner / PoC / readiness → 09_collaboration-roadmap/
- material final-decision change → 10-final-report/
- overall status / next task → PROGRESS.md
- material portfolio change → README.md
- decision-relevant correction → CHANGELOG.md
- QA/evidence gap change → the smallest matching file under `evidence/qa/sections/` (index only if navigation changes)

A research round is not considered archived until required updates are complete.

---

## 7. New-chat prompt — copy/paste version

When starting a new ChatGPT conversation, the user can simply send:

> Continue the **Russia-Thermal** project from the current GitHub state.  
> Repository: https://github.com/xiejinsen/Russia-Thermal  
> Treat the repository as the **Single Source of Truth / living research database**.  
> Do **not** restart the research from zero.  
> First read CONTINUE_HERE.md, then README.md, PROGRESS.md, 00_scope/repository_architecture.md, and the current authority files relevant to the next task.  
> Reconstruct the current research state, tell me the current progress / active candidates / next minimum task briefly, then continue the unfinished work.  
> Preserve the project's evidence, China-comparator, Paper-10Q, Kill/Keep, Stage-0 and GitHub-refresh rules.

This short prompt is sufficient; the repository should supply the detailed context.

---

## 8. Optional ultra-short new-chat prompt

If the project is already attached / GitHub access is available:

> Continue Russia-Thermal from GitHub SSOT. Read CONTINUE_HERE.md first, reconstruct current state, then continue the next task in PROGRESS.md. Do not restart research.

---

## 9. What this mechanism guarantees — and what it does not

This mechanism is designed so that **project knowledge does not depend on one long chat window**.

It preserves:
- current research state;
- evidence;
- decisions;
- killed hypotheses;
- partner ranking/state;
- PoC definitions;
- progress;
- next tasks.

It does **not** mean every sentence from an old chat is automatically available.

Therefore any decision-critical information that exists only in chat is considered **not safely archived** and should be written into the repository before the chat is abandoned.

---

## 10. Maintenance rule

Update this file only when:
- the repository authority model changes;
- startup files change;
- research-governance rules change;
- the recommended new-chat prompt needs to change.

Do **not** update it after every research round.

Current status and next task belong in [PROGRESS.md](PROGRESS.md), not here.