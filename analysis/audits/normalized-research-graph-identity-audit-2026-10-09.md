# Normalized Research Graph — identity/affiliation integrity audit

date: 2026-10-09
scope: ACTOR → current lab, PAPER → actual author, CAPABILITY → key_people, DIRECTION → capability, PRIORITY → target institution
status: SOURCE_GRAPH_PARTIAL_QA / ONE_CONFIRMED_EDGE_REMOVED / GENERATED_GRAPH_RUNTIME_UNVERIFIED

## Architectural checks

Web import `web/src/data/load-normalized.ts` reads `web/data/generated/*.json` at build time. Exporter `web/adapters/export_web.py` maps canonical `parent_actor_id` to `parentId`, `key_people` to `keyPeopleIds`, original source `authors` text to the evidence's literal `authors` array, and canonical directions/priorities to separate normalized objects. Generated JSON is **not stored in main**; missing paths in GitHub reflect generated artifacts, not a proven missing deployment. Without running exporter, this cycle cannot certify the entire generated graph.

## Confirmed semantic defect and repair

**GRAPH-ID-001 / FIXED CANONICAL SOURCE:** `CAP-KUT-L13-DRYOUT-DIAGNOSTICS` (actor `ACT-KUT-LAB13`) contained `PERSON-ZHUKOV` in `key_people`, causing the website to present V. I. Zhukov as a currently relevant lab-associated capability person even though `03-actors/people/PERSON-ZHUKOV/README.md` assigns an institute-level parent `ACT-KUTATELADZE` and explicitly does **not** verify present Lab 1.3 membership. Independent official Lab 1.3 roster names **Vladimir E. Zhukov**, while published mesh/thin-layer evidence author is **V. I. Zhukov**. These may be distinct. Removed `PERSON-ZHUKOV` from that lab capability's `key_people` in commit `d9bcdb7cab113cc043465a17ba358dbf654c7855`. Preserved V. I. Zhukov actor and paper authorship plus explicit clarification in the capability source. Pavlenko, Surtaev and Shvetsov remain as lab capability key people.

## Four traversal checks

1. **ACTOR → LAB:** `PERSON-PAVLENKO` and `PERSON-SURTAEV` officially corroborated Lab 1.3; `PERSON-ZHUKOV` is institute affiliation only, not proven current Lab member. MPEI `PERSON-IVANOV` parent `ACT-MPEI` aligns with current research dossier; person-title precision still should be checked against first-party public appointment.
2. **PAPER → AUTHOR:** `PAPER-RU-DRY-001` literal author list Surtaev, Malakhov, Perminov, Polovnikov, Pavlenko matches the source record; `PAPER-RU-AGE-001` Ivanov matches. Critical unresolved ICM collision: paper DOI `10.17516/1999-494X-0317` displays Dmitry A. Nesterov whereas current ICM person is Denis A. Nesterov. **Do not derive person linkage from similar names**. Exporter retains literal author names, but author-to-person identity resolution may still occur indirectly through capability associations.
3. **CAPABILITY → SCHOLAR:** `CAP-KUT-L13-DRYOUT-DIAGNOSTICS` repaired. `CAP-ICM-KRASN-FLAT-HP-ELECTRONICS` references `PERSON-NESTEROV-DENIS`, which is appropriate as the known current institutional flat-HP line, but avoid treating the ambiguous -0317 paper as proven authored by him. Exact report-to-capability attribution remains for targeted source QA.
4. **DIRECTION → PARTNER:** `DIR-FAILURE-AWARE-UTVC` retains candidate `CAP-KUT-L13-DRYOUT-DIAGNOSTICS`; `DIR-HEALTH-AWARE-UTVC` retains `CAP-MPEI-LONGTERM-CAPILLARY-AGING`, with `investment_lane: RESERVE`. `PRI-02-MPEI` explicitly targets `ACT-MPEI`, class `RESERVE`, contact contingent on data access. No reason to change portfolio.

## Follow-ups and acceptance

- **P1** run `python web/adapters/export_web.py` and a graph invariant check in CI: every capability person ID exists, a lab-scoped key person with differing parent must carry independent explicit affiliation evidence, no paper author identity derived by equal initials.
- **P1** audit ICM `-0317` paper to capability/person display path to ensure Denis/Dmitry conflict remains visible instead of aggregated.
- **P2** audit NSU, ITMO and TPU authorship exceptions and current roles using primary institutional affiliations.
- **P0 release gate still open:** latest actual Astro check/build/link output and deployed browser QA not observed.

This is a meaningful **canonical graph correction**, not a certification that all generated edge instances are verified, and not a new science prioritization.
