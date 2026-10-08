# Russia Capability Atlas — Institution Profile Round 1

date: 2026-10-08
status: ROUND_1_CLOSED
scope: first leadership-oriented institution-profile batch

## Goal

Turn the Russia Capability Atlas from a capability list into a leadership-usable institution map.

A useful institution page must answer:
1. what the institution can actually do;
2. which people/teams own that capability;
3. how close each capability is to smartphone / tablet / wearable / compact electronics;
4. what relevant papers/patents are already recovered in the canonical evidence graph;
5. what public collaboration / industrial / international signals exist;
6. what influence/context signals are useful;
7. what important evidence is still missing.

## Data-model decision

Institution identity remains in the Actor README.

Leadership interpretation is stored separately in:
`03-actors/organizations/<ACT-ID>/atlas-profile.md`

A frozen contract now governs these profiles:
`00-project/institution-atlas-profile-contract.md`

Publication/patent counts are **not manually stored**.

They are derived from:
Actor / child Lab -> Capability -> Claim -> Source.

The web label is:
**Recovered relevant corpus**

This explicitly means project-recovered relevant evidence, not complete Scopus / Web of Science / institutional bibliometrics.

## First batch

### 1. Kutateladze Institute of Thermophysics SB RAS

Leadership interpretation:
- strongest Russia-side mechanism/diagnostics institution in the current portfolio;
- contains the P1 Failure-aware UTVC mechanism-ground-truth line;
- adds extreme-confinement gas/liquid physics and current electronics-targeted active cooling IP;
- clearest directly evidenced Huawei collaboration precedent among the sampled institutions.

Collaboration signals:
- Huawei heat-transfer R&D agreement, 2021-2023;
- Bel Huawei consulting chain, publicly reported as 2024-2025 or 2024-2026 depending on institute page;
- current Pavlenko international cooperation with Xi'an Jiaotong University / RSF-NSFC;
- broader industry/grant collaboration lineage.

Influence/context:
- SB RAS institute;
- 2025 base organization for the world-class scientific center "Thermophysics and Energy";
- strong conference and RAS-scholar leadership context.

Main transfer boundary:
mechanism / lab-ground-truth value is stronger than direct phone-device maturity.

### 2. Moscow Power Engineering Institute

Leadership interpretation:
- broadest capability mix among university nodes in this first batch;
- long-duration capillary/surface aging;
- thermosyphon device work;
- ordered-wick modeling;
- current coated-microchannel research.

The most distinctive project value remains:
**long-calendar reliability / capillary-state knowledge**, not a unique phone cooling architecture.

Collaboration signals:
- joint additive-manufactured thermosyphon work with Skoltech;
- repeated Newfrost engineering/implementation chain.

Influence/context:
- National Research University;
- RAEX and QS context is available;
- strong heat-transfer / heat-pipe institutional continuity.

Main transfer boundary:
phone-scale copper-water geometry and current terminal/OEM collaboration remain unproven.

### 3. Tomsk Polytechnic University

Leadership interpretation:
- current laser / wettability heat-transfer surface-process capability;
- direct copper boiling evidence;
- process durability / field-exposure evidence;
- continuing Feoktistov / Orlova activity.

Strategic status remains HOLD:
China target-system evidence already crowds generic laser / wettability / patterned-surface differentiation.

Influence/context:
- RAEX-100 2026 #13 overall in Russia;
- strong engineering / energy / materials subject standing;
- QS context available.

Main transfer boundary:
sealed ultra-thin VC process retention, vacuum/outgassing and OEM deployment remain unproven.

### 4. Dagestan State Technical University

Leadership interpretation:
- focused Active-Hardware node rather than broad thermal-management center;
- sustained thermoelectric electronics-cooling line;
- 2022 electronic-board experiment;
- 2022 discrete-semiconductor device/system modeling;
- 2023 device experiment;
- 2023-2024 RSF-backed program continuation.

This round added:
- PAPER-RU-DGTU-TE-002
- PAPER-RU-DGTU-TE-003

The relevant canonical line now contains 3 direct electronics-oriented papers rather than one isolated 2023 paper.

Influence/context:
- regional technical-university context;
- RAEX 2026 North Caucasian Federal District local ranking #21.

Main transfer boundary:
team/program evidence is stronger than institution-level international influence; mobile-device power/thickness/hot-side budgets remain open.

## Platform-transfer implementation

Platform transfer is now stored on Capability objects, not institution profiles.

First-batch Capabilities now distinguish, for example:
- Kutateladze crisis diagnostics -> SMARTPHONE: FOUNDATIONAL;
- MPEI long-duration capillary aging -> SMARTPHONE: TRANSFERABLE;
- TPU laser/wettability process -> SMARTPHONE: TRANSFERABLE;
- DGTU thermoelectric electronics cooling -> SMARTPHONE: ADJACENT / ADJACENT_ELECTRONICS: DIRECT.

This prevents one coarse institution-level label from hiding large differences among technical lines.

## Web architecture change

Institution detail pages now:
- aggregate direct child Lab capabilities/people into the parent institution;
- show Capability platform-transfer badges;
- show leadership summary;
- show derived recovered-output snapshot;
- show collaboration signals with source links;
- show influence/context;
- show explicit public evidence gaps.

This is especially important for Kutateladze, whose core capabilities are owned by Lab 1.3 and Lab 6.6 rather than directly by the parent Actor.

## Research-data result

Current canonical corpus after this round:
- 55 Papers;
- 37 Paper Deep Reads;
- 17 Patents;
- 16 Patent Deep Reads;
- 34 Russia Capability objects;
- 4 first-batch institution Atlas Profiles.

## Strategic impact

No P1/P2/P3 or Direction lane changes.

This round improves leadership explainability and institution mapping rather than changing the collaboration portfolio.

## Next batch

Apply the same profile pattern to high-signal remaining Russia nodes, prioritizing:
1. ITP Ural Branch / LHP lab;
2. Ufa University (UUST);
3. Astrakhan State Technical University;
4. ITMO;
5. BMSTU;
6. NovSU.

For each, prioritize:
- platform transfer;
- recovered relevant output;
- patent lineage;
- collaboration/industry signals;
- influence context;
- explicit public gaps.

Do not expand SOFTWARE_SYSTEM beyond LIMITED_SCAN.

## Longer-term optional extension

A complete bibliometric campaign can be added later if leadership needs:
- total publications per institution;
- citation counts;
- complete patent-family counts;
- normalized 5-year output trends.

That should remain a separate database-backed metric and must not be confused with the current recovered relevant corpus.
