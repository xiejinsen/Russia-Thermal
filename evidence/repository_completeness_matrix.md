# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-03

Purpose: prevent the project from reaching a strong narrative conclusion while the GitHub research database remains incomplete, stale or untraceable.

## Quality gates

A workstream is not considered complete merely because a synthesis exists.

It must have:
1. current scope/status;
2. primary/official sources;
3. direct links beside important decisions;
4. negative evidence / caveats;
5. explicit unresolved gaps;
6. enough evidence for independent manual review;
7. freshness verification for current-role/current-project claims;
8. correction of superseded or erroneous information.

## Workstream QA

| Workstream | Traceability | Current-content freshness | Main gap | QA state |
|---|---|---|---|---|
| 00 Scope | good | current | none critical | PASS |
| 01 Global baseline | good | current | independent teardown / real sustained-power dataset still thin | PASS-WITH-GAPS |
| 02 Technology landscape | medium | framework current | technology rows need source IDs / evidence map | NEEDS-WORK |
| 03 Russia institutions | medium-good | partial | major-university coverage incomplete; Russia-wide coverage only ~17% | NEEDS-WORK |
| 04 Labs/researchers | good for deep dives | refreshed | current roles/contacts incomplete for some PI/researchers | NEEDS-WORK |
| 05 Papers/patents | improved | refreshed | patent-family / claim charts incomplete | NEEDS-WORK |
| 06 Active cooling | improved | refreshed | EHD / piezo / microblower primary evidence thin | NEEDS-WORK |
| 07 China benchmark | good | current | OEM independent measurements and patent depth missing | PASS-WITH-GAPS |
| 08 Opportunities | improved | current | some internal targets are assumptions, must remain labeled | PASS-WITH-GAPS |
| 09 Collaboration | good for PoC-1 | current | partner contact/IP/availability not yet verified | NEEDS-WORK |
| Evidence register | strong first pass | current | should continue growing with every research round | PASS-WITH-GAPS |

## Major-university coverage QA

A dedicated institution matrix must be maintained for major Russian universities.

Minimum requirement before final recommendations:
- all institutions in the scope's minimum-coverage set have a status;
- HIGH-SIGNAL / KEEP institutions have direct official and primary evidence;
- NO CURRENT SIGNAL FOUND entries include search date and search scope;
- PENDING count is zero for the minimum-coverage set.

## Immediate traceability fixes completed

- expanded decision-grade source register;
- added direct source links to PoC-1;
- added source links to partner-hypothesis map;
- added source links to direct Russia-China comparison;
- added source links to Russia-China gap synthesis;
- added source links to success/kill criteria;
- refreshed Workstream 04/05 status;
- added direct Skoltech thesis links;
- added direct RU2834604 patent text.

## Missing-evidence backlog

### Priority 0 — must close before final recommendations
- complete minimum-set major Russian university scan;
- current official role/contact verification for proposed partner researchers;
- direct patent-family / independent-claim charts for promoted IP-sensitive directions;
- background-IP implications of prior Huawei collaboration;
- China competing surface/wick patent map;
- direct evidence for phone internal thermal-stack space / teardown geometry;
- independent measurements for important OEM active-cooling claims.

### Priority 1 — must close before 3-year roadmap
- broader Russia institution coverage beyond minimum university set;
- additional active-cooling mechanism evidence: EHD, piezo/MEMS microblower;
- Russian materials reliability / manufacturing evidence;
- software/control current team continuity and recent outputs;
- multi-hotspot LHP current IP / device geometry.

### Priority 2 — useful but not blocking early PoCs
- exhaustive bibliography;
- historical foundational papers beyond those needed for lineage;
- low-signal institution candidates.

## File-level rule

Any file that changes:
- Tier,
- GO/NO-GO,
- partner priority,
- IP position,
- PoC scope,

must include an **Evidence backbone** section with direct original-source links.

## Correction rule

When an error or stale fact is discovered:
1. correct the active file immediately;
2. update source register / progress if decision-relevant;
3. note the correction in an audit/changelog section when it changes interpretation, partner priority or quantitative evidence;
4. do not silently retain the old statement elsewhere in the repo.

## Completion definition for the repository

The repository is “decision-ready” only when:
- every final recommendation can be traced to source links in <=2 clicks;
- every key number has a primary/official source;
- every vendor claim is labeled;
- every non-comparable benchmark is marked;
- every major unknown remains visible;
- the minimum major-university scan is complete;
- current-role/current-project statements have freshness checks;
- the top-level README, PROGRESS and workstream READMEs agree on current status.

## Ranking metadata QA

Before the final institution map:
- every major university should have current ranking metadata where available;
- ranking edition/year and original source must be stored;
- relevant subject ranking should be preferred over overall ranking for technical context.

Before a decision-critical paper set is considered complete:
- journal ranking metadata should be recorded where available;
- quartile must include source/year/category;
- ranking prestige must remain separate from technical-directness scoring.

## Major-university coverage update — 2026-10-03

First-pass matrix now covers all 20 minimum institutions with an explicit state:
- HIGH-SIGNAL: 3
- KEEP: 12
- NO CURRENT SIGNAL FOUND — first pass: 2
- PENDING: 3

This materially improves coverage, but the QA gate is **not passed** because:
- PENDING is not zero;
- Bauman and FEFU NO-SIGNAL statuses need a second pass;
- subject-ranking metadata remains incomplete;
- several KEEP schools still lack primary peer-reviewed thermal papers.

New candidate gaps:
- MPEI ordered porous heat-pipe structures;
- NSTU power-electronics thermal packaging;
- Samara additive microchannel radiators.

## Major-university Round 2 — coverage gate

Mandatory set is now **20/20 checked with PENDING = 0**.

Current:
- HIGH-SIGNAL: 4
- KEEP: 14
- NO CURRENT SIGNAL FOUND: 2
- PENDING: 0

Coverage gate status:
**PASS-WITH-GAPS**

Remaining gaps:
- subject ranking not normalized for every KEEP institution;
- several KEEP schools lack current partner-level PI cards;
- domestic rank is context only;
- TPU and MPEI need phone-transfer comparison before partner promotion.

### Correction logged

TPU cooling papers acknowledge RSF grant 25-79-10045, but the official RSF project is titled around thermochemical processing of wood.

The grant page itself lists heat/mass-transfer and droplet publications.

Repository rule:
do not call 25-79-10045 an “electronics-cooling grant”; describe it only as a funding source acknowledged/listed for relevant publications.

