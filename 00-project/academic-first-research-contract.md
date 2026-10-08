# Academic-First Institution and Collaboration Research Contract

status: CURRENT / USER_DIRECTED
date: 2026-10-08
applies_to: Russia Capability Atlas, institution profile/output measurements, partner selection and leadership web/report

## Direct user priority

**Research universities, university laboratories and academic research institutes are the PRIMARY objects of Russia-Thermal collaboration research.**

Commercial companies, product suppliers and industrial engineering firms are SECONDARY contextual evidence. Do not give them the same amount of literature mining, bibliometric census, key-person deep profiling or partner-ranking effort.

This is a project-specific research allocation and target-partner instruction. It is NOT an assertion that scientific/industrial collaboration with companies is legally or practically impossible.

## Actor classification — independent of existing Actor identity

Retain existing `actor_type=ORGANIZATION|LAB|COMPANY|PERSON` and all historic canonical IDs.

For research routing, classify **parent/root actor** as:

- `ACADEMIC_UNIVERSITY`: university / polytechnic / academic research lab
- `ACADEMIC_RESEARCH_INSTITUTE`: RAS or similarly research-led institute
- `APPLIED_RESEARCH_ORG`: government/national mission-applied research organization, not a degree-granting university nor ordinary business
- `INDUSTRIAL_ORG`: state-industrial product/system production organization
- `COMPANY`: commercial product or engineering company

Child LAB and PERSON inherit the parent organization's *research-routing class* for project planning, while remaining distinct canonical Actor types.

Scope priority:
- Academic classes: `PRIMARY` research depth; scholar/group/source/output/patent/collaboration/team-building analysis.
- Applied research organizations: `SELECTIVE` if a specialized relevant method is owned there (e.g. aeroacoustic expertise), not full institutional bibliometric crawl by default.
- Industrial organizations and companies: `CONTEXT_ONLY` — technical applications, manufacturability benchmark, externally evidenced implementation, high-value patent boundary and named university link. No systematic comprehensive company patent or financial/market dossier unless user explicitly redirects.

Exceptions:
- A company coauthor or contractor can be recorded as partner/context in an **academic** institution's collaboration chain.
- Company-published patents may be retained in prior-art/dedup records.
- Avoid treating broad institutional R&D cooperation as evidence of readiness/willingness for this specific collaboration.

## Stable examples in current corpus

| Actor | Classification | Depth | Rationale |
|---|---|---|---|
| ACT-KUTATELADZE | ACADEMIC_RESEARCH_INSTITUTE | PRIMARY | SB RAS two-phase thermal research + possible academic partner |
| ACT-MPEI | ACADEMIC_UNIVERSITY | PRIMARY | university heat-transfer teams |
| ACT-ITP-UBRAS | ACADEMIC_RESEARCH_INSTITUTE | PRIMARY | RAS LHP heat-transfer lab |
| ACT-NSU | ACADEMIC_UNIVERSITY | PRIMARY | two-phase diagnostics team |
| ACT-ICM-KRASN | ACADEMIC_RESEARCH_INSTITUTE | PRIMARY | SB RAS electronics integration/modeling |
| ACT-TPU | ACADEMIC_UNIVERSITY | PRIMARY | surface engineering / boiling process |
| ACT-TAIS | COMPANY | CONTEXT_ONLY | aerospace thermal design/manufacturing |
| ACT-THERCON | COMPANY | CONTEXT_ONLY | heat-pipe/LHP electronics manufacturing |
| ACT-NEWFROST | COMPANY | CONTEXT_ONLY | engineering supplier / collaboration context |
| ACT-LAVOCHKIN | INDUSTRIAL_ORG | CONTEXT_ONLY | spacecraft thermal-control production |
| ACT-TSAGI | APPLIED_RESEARCH_ORG | SELECTIVE | aeroacoustic scientific support and method context |

## Output-measurement implications

- Move the **deep five-year census priority** to Kutateladze -> MPEI -> ITP Ural Branch / other high-signal academic teams.
- Existing Thercon pilot and 2019/2020 RU/WO family remain as frozen **company-context / methodological control samples**, but no longer drive the next research round.
- Benchmark companies only as useful supply-chain/manufacturing/IP context, not by one-to-one bibliometric comparison with universities.
- Use a separate academic output and collaboration-network table, not one single 'institutions + companies' leaderboard.

## Scope guardrails

- Smartphone/tablet/wearable and adjacent compact-electronics thermal transfer remains the technology scope.
- Hardware/passive/active/enabling are emphasized. SOFTWARE_SYSTEM remains LIMITED_SCAN.
- Only public papers, patents, official/independent reports; no device experiments and no contacting institutions without authorization.
- Every round ends in the mandatory Goal Regression Checkpoint.
