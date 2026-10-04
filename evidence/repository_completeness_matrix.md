# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-04

This file contains the **current QA snapshot only**. Historical changes are recorded in ../CHANGELOG.md.

## Current QA

| Workstream | Freshness | Traceability | Main gap | State |
|---|---|---|---|---|
| 00 Scope / governance | current | strong | none critical | PASS |
| 01 Global baseline | current but thin | good | teardown, internal stack, sustained-power evidence | PASS-WITH-GAPS |
| 02 Technology landscape | refreshed | medium-good | emerging active routes need more primary evidence | PASS-WITH-GAPS |
| 03 Russia institutions | current | good | broader non-university coverage | PASS-WITH-GAPS |
| 04 Labs / researchers | refreshed | good | several co-investigator/facility details remain | PASS-WITH-GAPS |
| 05 Papers / patents | refreshed | strong first pass | family/status depth and several claim gaps | PASS-WITH-GAPS |
| 06 Active cooling | refreshed | medium-good | EHD, piezo/MEMS, installed-fan evidence | NEEDS-WORK |
| 07 China benchmark | current | good | independent OEM measurements and teardowns | PASS-WITH-GAPS |
| 08 Opportunity / falsification | current | strong | some Stage-0 targets remain internal assumptions | PASS-WITH-GAPS |
| 09 Collaboration / PoC | current | strong for PoC-1 | background IP and final coupon specs | PASS-WITH-GAPS |
| Evidence governance | current | strong | source register may need splitting as it grows | PASS-WITH-GAPS |

## Russia university coverage

- minimum set checked: 20 / 20
- HIGH-SIGNAL: 4
- KEEP: 14
- NO CURRENT SIGNAL FOUND: 2
- PENDING: 0

Canonical source:
../03_russia-institutions/major_university_coverage_matrix.md

## Surface / wick current QA

Completed:
- Pavlenko vs TPU vs MPEI vs China comparison;
- strong 0.39–0.4 mm-class reference;
- first-pass surface/wick patent map;
- first-pass claim chart;
- lead-role verification;
- MPEI ordered-wick and coating lines separated;
- IP-aware Stage-0 -> Stage-1 PoC gating.

Open:
1. Pavlenko modified-mesh thickness / morphology / cycling;
2. TPU target-fluid wetting stability;
3. TPU RU2812668 inventor / claim mapping;
4. MPEI coating thickness / target-fluid / cycling evidence;
5. MPEI ordered-wick physical prototype;
6. OPPO/vivo direct claim extraction;
7. final patent family/status review;
8. Huawei-related background-IP implications.

Current status:
**sufficient for Stage-0 research design, not for a final IP or partner commitment.**

## Priority-0 evidence backlog

Before final recommendations:
- phone teardown / internal thermal-stack geometry;
- independent measurements for important active-cooling products;
- fresh role/project checks for promoted partner teams;
- background-IP boundaries;
- claim/family review for final IP-sensitive directions;
- final Stage-0 coupon specifications with fact-vs-assumption labels.

## Priority-1 backlog

Before the 3-year roadmap:
- broader Russia lab/institute coverage;
- practical EHD evidence;
- piezo/MEMS microblower evidence;
- multi-hotspot LHP geometry/IP;
- materials manufacturing/reliability;
- software/control current comparator set.

## Traceability rule

Any file that changes Tier, GO/NO-GO, partner priority, IP position, PoC scope or roadmap must include local original-source links.

## Freshness rule

Current people, projects and products must be rechecked before final recommendation. Ranking values must include edition/year.

## Correction rule

When a material stale fact is found:
1. correct the canonical file;
2. update evidence if needed;
3. update decision/progress if interpretation changed;
4. record the correction in ../CHANGELOG.md;
5. keep older scan files explicitly historical.

## Decision-ready definition

The repository is decision-ready only when:
- final recommendations are traceable to original evidence;
- key numbers have primary/official sources;
- vendor claims are labeled;
- non-comparable evidence is marked;
- major unknowns stay visible;
- README / PROGRESS / workstream indexes agree;
- historical snapshots are clearly labeled.
