# Russia Capability Atlas — Full-Corpus Coverage Audit and Targeted Repair

> **Updated status, 2026-10-08:** The 19/29 counts below are the **historical initial audited snapshot**, kept to document the baseline and targeted repair. They are **not current**. GitHub Actions [V2.1 Repository Health run 37787716672](https://github.com/xiejinsen/Russia-Thermal/actions/runs/37787716672) independently reran `tools/atlas_coverage_audit.py --summary` against commit `c57a6aa94c0766eff7e5311afcc55f439794730d` and reported **21 of 29 Russia Capability-owner roots with Atlas profiles**, 34 Russia Capabilities, **34/34 platform-transfer metadata** and 2 remaining capabilities missing named people: NSU two-phase diagnostics bridge and Thercon electronics LHP production. **8 roots still lack profiles**: HSE, ICM-SBRAS, Lavrentyev, MISIS, MSU, Skoltech, SPbU and TSU. This is current-corpus coverage, **not** a census of all Russian institutions. See `00-project/STATUS.md` for subsequent changes.

date: 2026-10-08
status: ROUND_CLOSED
audit_scope: current Russia-owned Capability graph (not a census of all Russian research institutions)

## Executive answer

The existing Russia-only Atlas is structurally sound and has a clear capability map, but institutional output and collaboration evidence remain uneven. The most important remaining leadership gap is **comparable relevant five-year publication/patent and collaboration evidence**, not more taxonomic redesign or unguided institution discovery.

The coverage audit was made reproducible with:
`python tools/atlas_coverage_audit.py --json`
and added as a read-only step to V2.1 Repository Health.

## Baseline measured by the new script

Before targeted repair:
- 29 Russia-owned root organizations/companies with at least one canonical Capability (child labs aggregated into parent);
- 34 Russia Capability objects;
- 16/29 root organizations/companies had an Atlas Profile;
- 21/34 capabilities had platform-transfer metadata;
- 2 capabilities lacked named key_people;
- 10 of 29 root owners had zero directly graph-linked canonical Paper;
- 25 of 29 root owners had zero directly graph-linked canonical Patent;
- 3 of the 16 existing profiles had no canonical collaboration_source reference.

These are **recovered-project corpus** counts, not institutional/national productivity measures.

## Actions completed

### 1. Transfer matrix closure

All 13 previously unannotated Capabilities received conservative Capability-owned platform-transfer entries.

Now:
- 34/34 Russia Capability objects have platform-transfer annotations;
- enabling model/diagnostic capabilities are chiefly FOUNDATIONAL, ADJACENT or TRANSFERABLE;
- no undocumented DIRECT phone hardware claim was introduced;
- SPbU Android DVFS is SMARTPHONE=DIRECT only for its documented smartphone DVFS software context: the thermal-specific / handset cooling differentiation thesis remains rejected and SOFTWARE_SYSTEM remains LIMITED_SCAN.

### 2. Three additional high-signal institution profiles

New:
- ACT-FRUMKIN — selective hydrophobization/boiling-surface chemistry and direct 2024 Kutateladze coauthorship;
- ACT-SPBPU — gradient heat-flux diagnostics, bounded to instrument/method value;
- ACT-TSAGI — aeroacoustics/flow-noise diagnostics, bounded against unsupported mobile microfan claims.

Each uses a separate `atlas-profile.md` and explicit source/gap boundaries.

One primary institutional source added:
- OFFICIAL-TSAGI-AEROACOUSTIC-RESEARCH-001
- https://www.tsagi.ru/pressroom/news/6568/

It is linked to CLM-ACOU-001 and registered as a CONTEXT_PROFILE Source.

Current:
- 19/29 root organizations/companies with Atlas Profile;
- 10 remaining to assess, not all equally important.

### 3. Source identity and graph safety

No new duplicate Paper/Patent was created. The normal Source dedup check, graph audit, normalized Web export and Repository Health remain active; generated source indexes are synchronized.

## Current script-verified coverage

| Measure | Recovered coverage |
|---|---:|
| Russian root capability owners | 29 |
| Russia Capability records | 34 |
| Full institution/company Atlas Profiles | 19/29 |
| Capability platform-transfer records | 34/34 |
| Capability records missing named key people | 2 |
| Root owners with no graph-linked Paper | 10 |
| Root owners with no graph-linked Patent | 25 |
| Profiled root owners without explicit collaboration source | 5 |

Interpretation:
- 34/34 means **classification complete for the present corpus**, not product transfer demonstrated for all capabilities.
- The 25 patent gaps are the strongest warning against treating recovered patent counts as a fair comparison of Russian institutions.
- Profile collaboration sources include scholarly collaboration and grants; they must not automatically be read as commercial contracts.
- Institution coverage is 19/29 **of currently recovered Capability owners**, not 19/29 of all Russian organizations active in thermal management.

## Priority queue — ten missing profiles

**Next high signal (hardware / measurement / cross-institution support)**
1. ACT-NSU — lab-level two-phase diagnostics execution bridge; additionally resolve CAP-NSU-TWOPHASE-DIAGNOSTICS-BRIDGE key scientist attribution.
2. ACT-MEPHI — boiling/onset/transient heat flux diagnostics and research team.
3. ACT-TSU — explicit compact-electronics active/passive cooling modeling scope.
4. ACT-ICM-SBRAS — exact/stability/evaporative film modeling; distinguish from the separate ACT-ICM-KRASN.
5. ACT-MISIS — thermoelectric/solid-state cooling-materials support; clarify device vs material boundaries.

**Lower-priority context; keep compact unless promoted by evidence**
6. ACT-LAVRENTYEV — film/stability modeling, institutional attribution caveat.
7. ACT-MSU — nonequilibrium phase-change foundational methods.
8. ACT-SKOLTECH — graphite/BN materials background and secondary partnering links.
9. ACT-HSE — electrothermal design/reliability modeling, method not hardware.
10. ACT-SPBU — Android DVFS software; LIMITED_SCAN only.

Additional standalone key-person gap:
- CAP-THERCON-ELECTRONICS-LHP-PRODUCTION: no verified current responsible technical lead in the canonical record.

## Research-output and collaborator evidence plan

The original user requirement is a **Russia-first institutional map with relevant recent paper/patent totals, people, corporate partners and influence context**, capable of withstanding leadership questions.

The existing graph-derived `Recovered relevant corpus` is a strict lower bound, **not the requested complete output measure**.

Do not fill absent counts with zeros.

The next output-enrichment campaign should first establish a separate, auditable per-institution/team five-year snapshot:
- year window (e.g. 2021–2025 complete calendar years, with 2026 YTD in a separate column);
- exact technical inclusion/exclusion vocabulary;
- source search platform and query/date;
- DOI-level dedup of papers and patent publication/family-level dedup;
- inventor/author name disambiguation and institution affiliation at publication date;
- high-level aggregates plus exemplar original URLs;
- transparent coverage state: VERIFIED_COMPLETE / PARTIAL_QUERY / UNKNOWN;
- product/industrial collaboration distinguished from coauthorship and grant funding.

Do not make a percentage, league ranking, or Russia-China superiority claim from unequal search coverage.

## Project-goal regression

| Leadership question | Status | Remaining gap |
|---|---|---|
| Which Russian institutions/teams/key people exist? | IN_PROGRESS | 10 missing profiles; 2 key-person gaps; unknown institutions outside recovered graph |
| What can they actually do in hardware/adjacent research? | SUBSTANTIALLY_ANSWERED | classify new incoming nodes using frozen taxonomy; no new broad re-scan |
| How applicable to phone/tablet/wearable? | CLASSIFICATION_COMPLETE_FOR_CURRENT_GRAPH | DIRECT does not imply product value; all target-system packaging/budget boundaries remain explicit |
| What are relevant papers, patents, partner links and influence? | IN_PROGRESS / BIGGEST GAP | independent five-year bibliometric/patent-family snapshots; current linked corpus incomplete |
| Where is China stronger and what Russia residual is worth cooperating on? | SUBSTANTIALLY_ANSWERED | match new institution-specific claims to China only if portfolio-relevant |
| Could collaboration build internal capability/team? | IN_PROGRESS | partner/team fit, learning roadmap, IP and long-term capability ownership |
| Is leadership web/report ready? | STRUCTURALLY_READY | profile coverage and output comparability; final readability and ranking/mapping QA |

## Drift guard

Still Russia-first and hardware-led, with China as challenge/comparator, not as the primary research expansion.
No experiment demanded in this public-evidence phase.
No claim that lack of public evidence proves absence.
No generic university ranking or publication count upgraded a technical Direction.
No portfolio lane or P1/P2/P3 decision changed.
No external outreach authorized or executed.

## Next bounded round

Start a **five-year research output measurement pilot** on 3–4 institutions representing:
- Kutateladze (P1 mechanism research),
- MPEI (P2 long-calendar reliability),
- Thercon (industrial/patent-heavy comparator),
- optional NSU/MEPhI (underprofiled experimental-method node).

Before constructing totals, agree the dedup/search protocols by doing a primary-source feasibility audit.
Keep the other 10 missing profiles in a prioritized background queue; do not let them eclipse the output-completeness question.
