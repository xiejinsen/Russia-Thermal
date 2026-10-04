# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-04

This file contains the **current QA snapshot only**. Historical changes are recorded in ../CHANGELOG.md.

## Current QA

| Workstream | Freshness | Traceability | Main gap | State |
|---|---|---|---|---|
| 00 Scope / governance | current | strong | none critical | PASS |
| 01 Global baseline | refreshed | good | more Huawei/China flagship internal geometry; sustained-power data | PASS-WITH-GAPS |
| 02 Technology landscape | refreshed | medium-good | emerging active routes need more primary evidence | PASS-WITH-GAPS |
| 03 Russia institutions | current | good | broader non-university coverage | PASS-WITH-GAPS |
| 04 Labs / researchers | refreshed | good | several co-investigator/facility details remain | PASS-WITH-GAPS |
| 05 Papers / patents | refreshed | strong first pass | family/status depth; TPU/vivo claim gaps | PASS-WITH-GAPS |
| 06 Active cooling | refreshed | medium-good | EHD, piezo/MEMS, installed-fan evidence | NEEDS-WORK |
| 07 China benchmark | refreshed | good | independent OEM measurements and deeper current supply-chain detail | PASS-WITH-GAPS |
| 08 Opportunity / falsification | refreshed | strong | physical Stage-0 transfer evidence not yet available | PASS-WITH-GAPS |
| 09 Collaboration / PoC | refreshed | strong for PoC-1 design | physical coupon feasibility + background IP | PASS-WITH-GAPS |
| Evidence governance | current | strong | source register may need thematic split as it grows | PASS-WITH-GAPS |

## Russia university coverage

- minimum set checked: 20 / 20
- HIGH-SIGNAL: 4
- KEEP: 14
- NO CURRENT SIGNAL FOUND: 2
- PENDING: 0

Canonical source:
../03_russia-institutions/major_university_coverage_matrix.md

## Phone packaging / baseline QA

First-pass baseline now completed with:
- current flagship outer-envelope references;
- iPhone 17/18 independent teardown evidence;
- Samsung S26 Ultra teardown evidence;
- Huawei Mate 80 public teardown/package summaries;
- RedMagic active-cooling official + independent boundary evidence;
- exact 0.39 mm UTVC internal geometry anchor.

Important current engineering anchor:
- ~0.39 mm finished reference;
- ~0.2 mm internal steam-channel/support height;
- 0.06 mm mesh.

Still open:
- more public Huawei/Chinese flagship internal dimensions;
- independent sustained-power / package-temperature data;
- installed active-cooling electrical/acoustic measurements.

State:
**baseline sufficient to calibrate Stage-0 geometry, not a complete phone mechanical model.**

## Surface / wick current QA

Completed:
- Pavlenko vs TPU vs MPEI vs China comparison;
- first-pass patent/claim map;
- lead-role verification;
- MPEI technical lines separated;
- Pavlenko mesh geometry partly resolved;
- working-fluid sustainability gate added;
- Stage-0 coupon matrix v0.1 frozen.

Current Stage-0 corrections:
- published Pavlenko mesh is not assumed drop-in phone geometry;
- transfer target is ~60–100 um-class structure / thin functional surface;
- HFE-7100 is legacy mechanism bridge, not default product fluid;
- water is primary sealed-VC product-path reference;
- future dielectric fluid requires separate screen.

Still open:
1. actual Pavlenko modification thickness/permeability on thin mesh;
2. TPU target-fluid wetting/process stability;
3. TPU RU2812668 inventor + independent claim;
4. MPEI actual coating thickness + target-fluid/cycling data;
5. MPEI ordered-wick physical prototype;
6. vivo independent claim; OPPO CN-family legal status;
7. final family/status review for promoted patents;
8. Huawei-related background-IP implications.

State:
**sufficient for a Stage-0 specification; not sufficient for final IP, contract or partner commitment.**

## Priority-0 backlog

Before final partner recommendations:
- demonstrate or obtain evidence for thin-mesh/process feasibility;
- close key patent claim/family gaps;
- refresh promoted partner availability/current roles before outreach;
- establish background/foreground IP boundaries;
- obtain physical coupon data or partner-shareable equivalent;
- validate future product-fluid choice if a dielectric fluid is required.

## Priority-1 backlog

Before final 3-year roadmap:
- broader Russia lab/institute coverage;
- practical EHD evidence;
- piezo/MEMS microblower evidence;
- multi-hotspot LHP geometry/IP;
- materials manufacturing/reliability;
- software/control current comparator set;
- more complete phone thermal packaging baselines.

## Traceability rule

Any file that changes Tier, GO/NO-GO, partner priority, IP position, PoC scope or roadmap must include local original-source links.

## Decision-ready definition

The repository is decision-ready only when:
- final recommendations are traceable to original evidence;
- key numbers have primary/official sources;
- vendor claims are labeled;
- non-comparable evidence is marked;
- major unknowns stay visible;
- README / PROGRESS / workstream indexes agree;
- historical snapshots are clearly labeled.
