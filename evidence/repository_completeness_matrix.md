# Repository Completeness & Evidence QA Matrix

Last updated: 2026-10-03

Purpose: prevent the project from reaching a strong narrative conclusion while the GitHub research database remains incomplete or untraceable.

## Quality gates

A workstream is not considered complete merely because a synthesis exists.

It must have:
1. current scope/status;
2. primary/official sources;
3. direct links beside important decisions;
4. negative evidence / caveats;
5. explicit unresolved gaps;
6. enough evidence for independent manual review.

## Workstream QA

| Workstream | Traceability | Current-content freshness | Main gap | QA state |
|---|---|---|---|---|
| 00 Scope | good | current | none critical | PASS |
| 01 Global baseline | good | current | independent teardown / real sustained-power dataset still thin | PASS-WITH-GAPS |
| 02 Technology landscape | medium | framework current | technology rows need source IDs / evidence map | NEEDS-WORK |
| 03 Russia institutions | medium-good | partial | Russia-wide coverage only ~17%; several candidates single-source | NEEDS-WORK |
| 04 Labs/researchers | good for deep dives | refreshed | current roles/contacts incomplete for some PI/researchers | NEEDS-WORK |
| 05 Papers/patents | improved | refreshed | patent-family / claim charts incomplete | NEEDS-WORK |
| 06 Active cooling | improved | refreshed | EHD / piezo / microblower primary evidence thin | NEEDS-WORK |
| 07 China benchmark | good | current | OEM independent measurements and patent depth missing | PASS-WITH-GAPS |
| 08 Opportunities | improved | current | some internal targets are assumptions, must remain labeled | PASS-WITH-GAPS |
| 09 Collaboration | good for PoC-1 | current | partner contact/IP/availability not yet verified | NEEDS-WORK |
| Evidence register | strong first pass | current | should continue growing with every research round | PASS-WITH-GAPS |

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
- current official role/contact verification for proposed partner researchers;
- direct patent-family / independent-claim charts for promoted IP-sensitive directions;
- background-IP implications of prior Huawei collaboration;
- China competing surface/wick patent map;
- direct evidence for phone internal thermal-stack space / teardown geometry;
- independent measurements for important OEM active-cooling claims.

### Priority 1 — must close before 3-year roadmap
- broader Russia institution coverage;
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

## Completion definition for the repository

The repository is “decision-ready” only when:
- every final recommendation can be traced to source links in <=2 clicks;
- every key number has a primary/official source;
- every vendor claim is labeled;
- every non-comparable benchmark is marked;
- every major unknown remains visible;
- the top-level README, PROGRESS and workstream READMEs agree on current status.
