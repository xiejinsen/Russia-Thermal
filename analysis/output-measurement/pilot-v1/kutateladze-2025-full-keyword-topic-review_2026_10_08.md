# Kutateladze 2025 — Complete title-keyword topic triage (HIGH + MEDIUM)

date: 2026-10-08
scope: 2025 official site article catalog (270 raw entries), 35 keyword candidates
state: KEYWORD_QUEUE_TOPIC_REVIEW_COMPLETE / NOT_FULL_TEXT / NOT_DOI_RECONCILED / NO_ANNUAL_COUNTS

## Results

| Topical class | HIGH 14 | MEDIUM 21 | Total 35 |
|---|---:|---:|---:|
| ELECTRONICS_HARDWARE (review, not device trial) | 0 | 1 | 1 |
| TRANSFERABLE_HEAT_TRANSFER | 7 | 6 | 13 |
| ENABLING_METROLOGY | 3 | 3 | 6 |
| BROADER_ADJACENT | 2 | 9 | 11 |
| OUT_OF_SCOPE | 2 | 2 | 4 |
| **Total** | **14** | **21** | **35** |

Outputs:
- [HIGH per-record review](triage/2025-high-topic-review.tsv)
- [MEDIUM per-record review](triage/2025-medium-topic-review.tsv)

## Priority learning for the mobile-thermal thesis

- 2025 #59, #62, #68 and #179 contribute thin-layer/microchannel/pore boiling mechanism leads. They do **not** demonstrate thin sealed vapor chambers or smartphone products.
- 2025 #146 and #234 are measurement-method leads for observed dry spots and boiling microlayers; these are especially relevant to the Failure-Aware UTVC hypothesis as possible laboratory ground truth, **not a phone observer**.
- 2025 #70 is a systematic/review work about electronic-component immersion cooling. Count it as at most one review work *after* work-level identity and affiliation gates; its publisher corrigendum is NOT another research work.
- 2025 #81 non-boiling spray cooling is technical transfer background, not a phone-feasible active cooler without fluid handling, reservoir and parasitic accounting.
- 2025 #63 and #236 are out of project topic scope. #104, #105, #108, #114, #162, #190, #215 and similar are peripheral, not direct partner differentiation.

## Strong audit restrictions

1. **35 is the count of title-keyword candidates reviewed, not 35 accepted research outputs.** Topical classes are screening decisions based on the archived bibliographic citations, not an audited research-paper census.
2. All records remain `NOT_COUNTABLE` until DOI/publisher identity, version grouping, primary academic institution and lab affiliation at time of publication, and canonical dedup checks.
3. Non-keyword site records (235 in 2025) have **not** had a false-negative topic sample reviewed. Thus this is *complete only for the predefined keyword queue*, NOT complete for the 2025 site archive.
4. The official bibliography explicitly warns its coverage is incomplete, so even exhaustive catalog review cannot by itself establish overall institutional output.
5. No collaboration rank, research direction or canonical Source was changed.

## Next actions and design

A. Implement DOI-HTML-anchor-aware extraction **with site ordinal association** from the official catalog HTML; preserve existing archive snapshots and compare against 2025 cited examples (#70, #103) as identity test fixtures.

B. Sample title-keyword NONMATCH records across 2025, and record false-negative rate without extrapolating from too small a sample.

C. Process remaining 2021–2024 queue (204 title leads before any new discovery), then publisher and historic lab attribution passes.

D. Output institution-year relevant work counts only after complete stated denominator and independent index recall; keep 2021–2025 official annual total NULL in measurement surfaces until then.
