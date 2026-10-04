# Repository Architecture & Refresh Contract

Last reviewed: 2026-10-04

## Purpose

This repository is a living research database, not a chronological notebook.

The structure must make it obvious:
1. where the current authoritative state lives;
2. where primary evidence is indexed;
3. which files are historical snapshots;
4. what must be refreshed after each research round.

## Top-level architecture

The 00–09 research workstreams are retained because they match the research decision chain. Workstream 10 is a separate final decision/report layer.

| Folder | Role | Authoritative content |
|---|---|---|
| 00_scope | scope, rules, governance | research scope, repository architecture |
| 01_global-baseline | smartphone problem / product constraints | current global mobile thermal baseline |
| 02_technology-landscape | canonical technology taxonomy and portfolio status | technology map |
| 03_russia-institutions | Russia institution coverage database | major university matrix + candidate queue |
| 04_researchers-labs | lab / PI / partner dossiers | current partner/lab cards |
| 05_papers-patents | primary-paper interpretation + patent/IP maps | patent maps, claim charts, high-signal evidence sets |
| 06_active-cooling | active-cooling mechanism track | active-cooling portfolio/index |
| 07_china-benchmark | China/global comparison baseline | China mobile baseline + institution map |
| 08_opportunities-transfer | decision-analysis layer | constraints, comparisons, gates, engineering feasibility |
| 09_collaboration-roadmap | partner/PoC/roadmap research layer | readiness, PoC specs, collaboration roadmap |
| 10-final-report | final decision/report layer | executive decision, strategic bets, collaboration portfolio, roadmap, evidence appendix |
| evidence | evidence governance + cross-workstream registers | source register, QA, rankings, standards |

## Current-vs-history rule

Every workstream must distinguish:

### CURRENT / AUTHORITATIVE
Used for current decisions and must be refreshed.

### SUPPORTING
Still valid evidence or deep-dive material, but not the single status source.

### HISTORICAL SNAPSHOT
Retained for provenance only. It must begin with a warning that it is superseded.

Historical files must never contain the only copy of a decision-critical source.

## Canonical status hierarchy

When files disagree, use this order:

1. `PROGRESS.md` — overall research status / next tasks
2. workstream `README.md` — current local index
3. current matrix / decision file inside the workstream
4. supporting deep-dive file
5. historical scan/snapshot

`10-final-report/` is **not** part of the research-authority hierarchy. It summarizes only gated results from 00–09. If it disagrees with the research authority, Workstream 10 must be corrected.

If inconsistency is found, fix the lower-level stale file or clearly mark it historical.

## Evidence placement rule

Decision-critical evidence must exist in two places:

1. central index:
   `evidence/source_register.md`

2. local decision context:
   beside the claim/decision in the relevant 03–09 file.

A source existing only in chat, search snippets or the central register is insufficient for a promoted decision.

## Mandatory refresh contract after every substantive research round

Update all that apply:

1. new primary evidence → `evidence/source_register.md`
2. institution status changed → `03_russia-institutions/major_university_coverage_matrix.md` / candidate queue
3. partner capability changed → corresponding 04 card
4. patent/IP conclusion changed → 05 map/claim chart
5. China/global comparator changed → 07 baseline
6. hypothesis/Tier/kill changed → 08 decision gate
7. PoC/partner readiness changed → 09 files
8. overall maturity / next tasks changed → `PROGRESS.md`
9. top-level portfolio materially changed → root `README.md`
10. decision-relevant correction → `CHANGELOG.md`
11. evidence-quality gap changed → `evidence/repository_completeness_matrix.md`
12. Primary/Reserve/Kill/roadmap changed materially → relevant `10-final-report/` file

A research round is not considered archived until the required updates are complete.

## File naming rule

Use:
- `*_v01.md`, `*_v02.md` for evolving analytical artifacts when preserving versions is useful;
- stable names for live registries/matrices (`source_register.md`, `PROGRESS.md`);
- explicit `round1` / `first_scan` only for historical snapshots.

Do not create another file if an existing canonical file should be updated instead.

## Anti-duplication rule

Avoid maintaining the same current status in multiple narrative files.

Examples:
- university status belongs in the coverage matrix, not separately maintained in every scan note;
- current Tier belongs in the decision gate / PROGRESS;
- partner readiness belongs in the partner-readiness file;
- detailed patent claims belong in claim charts/maps;
- source metadata belongs in source register.

Supporting files may summarize but must link to the canonical file.

## Evidence folder role

`evidence/` is intentionally cross-cutting and contains four types:

- standards: how evidence/ranking metadata is recorded;
- registers: source/ranking indexes;
- audits: traceability/completeness;
- templates: metadata templates.

Do not put technical conclusions in `evidence/`; put them in the relevant 03–09 workstream.

## Freshness policy

- current people/projects/product facts: recheck before outreach or final recommendation;
- 2026 evidence is preferred when available;
- vendor claims remain labeled vendor claims;
- rankings always include edition/year;
- stale contradictions are corrected, not silently accumulated.

## Current architecture decision

No broad file migration is performed in this audit because existing cross-links are valuable.

Instead:
- missing workstream READMEs are added;
- historical files are explicitly marked;
- stale current-status files are corrected;
- future files follow this architecture.

A later physical migration is only justified if a folder becomes too large to navigate.


## Final-report layer rule

`10-final-report/` is a decision-presentation layer, not another evidence repository.

It may:
- summarize;
- rank decisions;
- visualize the funnel;
- present Strategic Bets;
- present partner/roadmap recommendations.

It must not:
- introduce uncited facts;
- hold the only copy of primary evidence;
- override current workstream status;
- promote an immature direction merely for narrative completeness.

Promotion into the final report is controlled by:
`../10-final-report/final_report_readiness_gate.md`.

The final report should be refreshed only for material decision changes, not after every minor source addition.
