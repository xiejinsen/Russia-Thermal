> **AUDIT SNAPSHOT / NON-AUTHORITATIVE**
>
> This file records repository conditions found during the 2026-10-04 architecture audit. It is **not** the live project-status source.
> Current authority: [PROGRESS](../PROGRESS.md), [Repository Completeness Matrix](../evidence/qa/README.md), and the relevant workstream README/current decision file.
>
# Repository Architecture & Content Audit — 2026-10-04

## Audit objective

Check whether:
- directory responsibilities are clear;
- each folder has a current authoritative entry point;
- historical snapshots are distinguishable from live state;
- key research evidence is stored locally and centrally;
- stale status is corrected;
- remaining evidence gaps are explicit.

## Overall conclusion

The 00–09 top-level workstream architecture remains **appropriate** and should be retained.

The main problems were not the top-level numbering. They were:
1. missing local README/index files;
2. historical scans competing with current matrices;
3. duplicated/stale current-status statements;
4. evidence QA history appended into one file until it contradicted itself;
5. early technology-map wording not refreshed after later decisions.

The audit therefore uses a **non-destructive architecture fix**:
- preserve existing paths and evidence links;
- add authoritative indexes;
- mark old snapshots;
- refresh stale current files;
- define a mandatory round-close refresh contract.

## Folder-by-folder audit

| Folder | Architecture | Current-content state | Action in this audit | Remaining gap |
|---|---|---|---|---|
| 00_scope | good | current | added repository architecture/refresh contract | none critical |
| 01_global-baseline | good but underfilled | current evidence, low breadth | added README/index | teardown/internal-stack/power baseline |
| 02_technology-landscape | good | previously stale | technology map refreshed to current portfolio | emerging-active evidence |
| 03_russia-institutions | good after index | current matrix good; old scans misleading | added README; historical banners; candidate queue refreshed | broaden beyond minimum universities |
| 04_researchers-labs | good | largely current | README refreshed and authority clarified | some roles/facilities/co-investigators |
| 05_papers-patents | good | current IP work strong | README refreshed; seed file marked non-authoritative | remaining claim/family gaps |
| 06_active-cooling | structurally thin but valid | hypotheses include later corrections | added README/current disposition index | EHD/piezo/MEMS/installed fan evidence |
| 07_china-benchmark | good | current first-pass | README refreshed with current patent/teardown gaps | independent product measurements |
| 08_opportunities-transfer | dense but logically coherent | current analysis strong | README refreshed to current gates | Stage-0 specs / packaging reality |
| 09_collaboration-roadmap | good | current | README refreshed | partner/IP boundaries + final PoC specs |
| evidence | good cross-cutting role | previously mixed/append-heavy | added README; QA matrix rewritten as current snapshot | source-register scale management |

## Files explicitly treated as historical / seed

### Historical institution snapshots
- 03_russia-institutions/first_scan.md
- 03_russia-institutions/major_university_scan_round1.md

Current institution authority:
- 03_russia-institutions/major_university_coverage_matrix.md
- 03_russia-institutions/candidate_queue.md

### Seed evidence
- 05_papers-patents/high_signal_seed_set.md

Current patent/IP authority:
- 05_papers-patents/surface_wick_patent_map_v01.md
- 05_papers-patents/surface_wick_claim_chart_v01.md
- evidence/sources/README.md

## Current status inconsistencies corrected

### Root README
Before:
- ~37% completion;
- older portfolio.

After:
- ~49% completion;
- current Pavlenko / TPU / MPEI split;
- current two-stage PoC posture.

### Repository completeness matrix
Before:
- top table still said institution coverage ~17%;
- later sections separately said 20/20 complete;
- obsolete and current QA states coexisted.

After:
- one current QA snapshot only;
- history moved conceptually to CHANGELOG.

### Technology map
Before:
- early discovery targets mixed with current strategic status.

After:
- generic synthetic jet, generic LHP miniaturization and generic passive/active routes are clearly separated from surviving narrow theses.

### Russia institution files
Before:
- Round-1 PENDING/no-signal statements could be mistaken for current facts.

After:
- explicit historical-snapshot banners;
- 03 README defines current authority.

### Workstream 08
Before:
- patent map and partner-role verification were still listed as future tasks.

After:
- first-pass completion acknowledged;
- next gate moved to packaging reality + Stage-0 blockers.

## Evidence placement audit

Current good practice:
- central source register exists;
- decision-critical 08/09 files carry local source links;
- patent map and partner cards carry direct patent/official links;
- university coverage includes official/ranking links.

Remaining weak spots:
1. 01 baseline needs more independent teardown evidence;
2. 02 map is an index and intentionally points to deeper evidence rather than duplicating it;
3. 06 active cooling needs more recent primary evidence for EHD/piezo/MEMS;
4. 07 needs more independent OEM measurement evidence;
5. current Stage-0 surface parameters remain partly research assumptions.

## Architecture rule going forward

A new research round is incomplete until the relevant:
- local canonical workstream file;
- evidence/sources/README.md;
- evidence/qa/README.md;
- PROGRESS.md;
- root README when portfolio changes;
- CHANGELOG.md for material corrections

are synchronized.

## Do we need a physical folder migration now?

**No.**

Reason:
- top-level workstream design is sound;
- many existing cross-links already work;
- moving files would create link-maintenance risk without improving research quality enough.

Preferred approach:
- keep stable paths;
- use READMEs as authoritative navigation;
- mark snapshots;
- only introduce subfolders later if file counts become genuinely hard to navigate.

## Next recommended research work after audit

Repository governance is now good enough to resume research.

Highest-value next work:
1. phone packaging / teardown baseline;
2. close remaining Stage-0 patent/material-process gaps;
3. freeze Stage-0 coupon matrix.

Do not start another broad discovery wave before those are completed.


## Follow-up audit after Stage-0 blocker closure

Later on 2026-10-04, after the project advanced to ~58%, a second governance pass found four new maintenance issues:

1. this dated audit itself could be mistaken for current status because it contained old ~49% / next-work statements;
2. `08_opportunities-transfer/README.md` described local authority in a way that could conflict with the repository-wide hierarchy;
3. the canonical Stage-0 partner scorecard lacked a local original-source evidence spine;
4. several current 09 partner/PoC files still used bare URLs and stale pre-blocker-closure wording.

Corrective action:
- mark dated audit files as non-authoritative snapshots;
- preserve `PROGRESS.md` as the sole global status authority;
- keep workstream authority local;
- add local evidence spine to the partner scorecard;
- migrate current 09 decision/PoC files to readable citations first;
- update TPU/MPEI PoC descriptions to the latest blocker-closure state.

This follow-up is a governance correction and does **not** change research completion.
