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


## Cycle 2 — exporter guardrails added (2026-10-09)

Commit `f031249de3bc5685e19ef532e6f69df18772b6b4` modifies `web/adapters/export_web.py`'s existing `validate_normalized(datasets)` to enforce:

1. Capability `keyPeopleIds` must resolve not merely to existing actor IDs but specifically to `PERSON` actors.
2. `CAP-KUT-L13-DRYOUT-DIAGNOSTICS` must not silently regain the unverified `PERSON-ZHUKOV` person–lab capability edge.
3. `PAPER-RU-ICM-ELECTRONICS-001` must preserve the literal publisher author **Dmitry A. Nesterov** rather than replacing him with current official ICM person **Denis A. Nesterov**.

These are **assertions about existing semantic evidence**, not inference of new lab membership. The ICM person-name conflict is still unresolved. Its lab capability may legitimately name Denis for separately verified engineering work; this does not mean the ambiguous paper belongs to him.

`web/package.json` already invokes `python adapters/export_web.py` in `build` and `check` scripts, so the validation is on those execution paths without a second data store.

**Verification status:** implementation/source-read only; exporter, Astro typecheck and generated HTML link check were **not executed here**. This cannot be reported as test PASS until an actual CI job or local run provides logs.

Remaining generalized need: publication-time affiliation and evidence-to-person provenance is not fully represented as an explicit first-class edge; avoid a universal exact-parent rule that would reject valid collaborations or incorrectly elevate institute-affiliated coauthors to a specific lab.


## Cycle 3 — broader structural invariants (2026-10-09)

Commit `ddee03c72f50fd1b6e4bf76dc15d12b412788baa` expands `web/adapters/export_web.py::validate_normalized` beyond named exceptions:
- Every Actor's resolved `parentId` must be an organization/lab/company (not a person), and actor parent hierarchies must be cycle-free.
- Each Capability owner (`actorId`) must not be a person.
- Capability key-person references may not be duplicated or self-referential, in addition to the prior existing-ID and PERSON-type rules.
- The known Zhukov and Denis/Dmitry Nesterov guards remain active; **no generic same-institute coauthor=lab member inference** is introduced.

The code is wired into the same `build`/`check` exporter, but **no executable exporter test or real deployment verification** was available in this turn. Web access to public GitHub Actions and GitHub Pages returned fetch failure. This does NOT establish an actual broken site, and does not establish CI PASS. More specific author–publication affiliation edges are a data model extension, not something a structural invariant can fabricate.

Review note: Real-world person-parent ambiguity and cross-organizational research collaboration must be modeled separately in future provenance-rich graph work; only hard structural invalidities become build-blocking errors.
