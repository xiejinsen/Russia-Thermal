# Capability Atlas Expansion Contract

status: DESIGN_FROZEN
date: 2026-10-08
scope: forward-compatible web/data architecture for Russia Capability Atlas expansion

## 1. Why this contract exists

The current web system was optimized for Phase-1 collaboration decisions:
- P1 / P2 / P3;
- Direction-level Russia-vs-China comparison;
- Claim / Evidence audit.

The next research stage expands the user goal:
- understand Russia's terminal-thermal capability landscape on its own;
- inspect institutions, labs, key people, technical domains, recent output, patents, collaboration history and influence signals;
- keep China as a challenge/comparator layer rather than the only organizing frame;
- support smartphone, tablet, wearable and transferable compact-electronics capability discovery.

The existing architecture remains valid:

Canonical objects -> Adapter -> Normalized data -> View Model -> UI.

Do not bypass this layering.

## 2. Non-goal

Do not turn Actor into a mutable dashboard record containing manually maintained:
- paperCount;
- patentCount;
- citationCount;
- collaborationCount;
- influenceScore.

These values depend on time window, search scope and evidence completeness and would become stale.

## 3. Future Atlas information model

### 3.1 Actor identity remains small and stable

Actor continues to own:
- identity;
- hierarchy;
- geography;
- official URL;
- current role / research relevance.

### 3.2 Capability owns demonstrable technical ability

Capability should eventually support controlled classifications in addition to free-text technicalScope:

- technicalDomainIds[]
- platformTransferTargets[]
- transferMaturityByTarget or equivalent bounded assessment

Target vocabulary should support at least:
- SMARTPHONE
- TABLET
- WEARABLE
- AR_VR
- LAPTOP
- COMPACT_ELECTRONICS
- ADJACENT_ELECTRONICS
- FOUNDATIONAL_ONLY

Technical-domain vocabulary should cover at least:
- PASSIVE_HEAT_SPREADING
- HEAT_PIPE_VC_LHP
- PHASE_CHANGE_BOILING
- MICROFLUIDICS_LIQUID
- ACTIVE_AIR_COOLING
- MEMS_MICROFAN
- THERMAL_MATERIALS
- SOLID_STATE_COOLING
- SOFTWARE_THERMAL_CONTROL
- SENSING_DIAGNOSTICS
- RELIABILITY_HEALTH
- MODELING_DIGITAL_TWIN
- MANUFACTURING_INTEGRATION
- AEROACOUSTICS

Do not use Direction as the only technical taxonomy.

### 3.3 Collaboration must be a typed, evidenced relationship

Future systematic collaboration history should not be represented only as free prose or untyped collaboratingActorIds.

Preferred future canonical/normalized relation:

CollaborationRecord
- id
- actorIds[]
- relationType
- startYear / endYear
- status if publicly knowable
- technicalScope
- evidenceSourceIds[]
- boundary
- confidence

Example relation types:
- INDUSTRY_RESEARCH
- CONSULTING
- JOINT_PROJECT
- MANUFACTURING_IMPLEMENTATION
- INTERNATIONAL_ACADEMIC
- GOVERNMENT_PROGRAM
- TECHNOLOGY_TRANSFER

No relation may imply product adoption unless the source says so.

### 3.4 Publication / patent output is a reproducible snapshot

Do not equate curated Evidence count with total publication output.

Use a separate derived or snapshot record with provenance:

ResearchOutputSnapshot
- actorId
- periodStart
- periodEnd
- queryScope
- paperCount
- patentCount
- yearlySeries[]
- corpusOrQueryReference
- assessedAt
- completeness / caveat

Web must label these distinctly from:
- curated evidence in the project;
- Deep Reads;
- total relevant output found by a systematic scan.

### 3.5 Influence is multi-signal, not one prestige score

Institution/person influence should be exposed as evidence-backed signals:
- institutional ranking context;
- journal/conference editorial/leadership roles;
- repeated international collaboration;
- industry collaboration;
- major grants/programs;
- citation/field-impact metrics only when source and time window are explicit.

Do not derive one opaque Russia partner score from these signals.

## 4. Institution lineage aggregation rule

Atlas views must aggregate through the institution hierarchy.

For an ORGANIZATION:
- own capabilities;
- child LAB/TEAM capabilities;
- people attached to the organization or descendant labs;
- linked evidence through all descendant capabilities;
- collaboration relations involving the organization or descendant labs;
- output snapshots attached to the organization and explicitly attributable descendants.

Institution detail may expose both:
- organization roll-up;
- per-lab breakdown.

This rule is intentionally broader than some current decision-detail pages.

## 5. New presentation view models

Future presentation layer should add dedicated Atlas view models rather than overloading Partner/Direction VMs.

Recommended:
- RussiaAtlasPageVM
- ChinaAtlasPageVM
- InstitutionAtlasVM
- TechnicalDomainAtlasVM
- CollaborationNetworkVM
- ResearchOutputTimelineVM

Existing:
- InstitutionPageVM
- PartnerPortfolioVM
- DirectionPageVM
- LandscapePageVM

remain valid for decision/audit journeys.

## 6. Future page architecture

Primary user journeys should become:

### A. Understand Russia
Overview -> Russia Capability Atlas -> Institution / Lab -> People / Capability / Output / Collaboration

### B. Challenge Russia with China
Russia Atlas / Technical Domain -> China Comparator -> Russia vs China

### C. Decide collaboration
Russia Atlas -> Partner Portfolio -> Direction -> Feasibility / Gate

### D. Audit
Any judgment -> Claim -> Source / Paper / Patent

The Russia Atlas should work without China being present on the screen.

## 7. Atlas page modules

Russia Capability Atlas should eventually support:
- geographic map;
- institution registry;
- technical-domain matrix;
- platform-transfer filters;
- papers/patents output timeline;
- collaboration-network signals;
- influence/context signals;
- capability maturity and evidence confidence;
- direct drill-down to institution/person/evidence.

Do not force all modules into one giant table.
Use:
- map for geography;
- dense table/rows for institution comparison;
- small multiples/timeline for output;
- detail pages for evidence.

## 8. Filter contract

Atlas filters should be URL-addressable and composable:
- country
- city/region
- technicalDomain
- platformTarget
- actorType
- evidenceConfidence
- maturity
- collaborationType
- outputPeriod

Existing ExplorerToolbar may be reused, but Atlas-specific filters should be configured in its own view model.

## 9. Compatibility strategy

The Atlas expansion should be additive:

1. Existing Actor / Capability / Evidence / Direction datasets remain readable.
2. Add new optional normalized datasets instead of breaking existing fields where possible.
3. View models opt in to Atlas data.
4. Existing Overview / Partner / Direction / Audit pages must continue to build without Atlas datasets until the first Atlas dataset is ready.
5. Only controlled Capability classification may justify a shared-schema version bump.

## 10. Implementation sequence

### A0 — now
- freeze this contract;
- update information architecture / roadmap;
- do not add empty visible Atlas UI.

### A1 — taxonomy + canonical modeling
- define technical-domain vocabulary;
- define platform-transfer vocabulary;
- decide CollaborationRecord ownership;
- decide ResearchOutputSnapshot generation method.

### A2 — normalized data
- export new additive datasets;
- validate relation IDs and snapshot provenance;
- implement organization-lineage roll-up helpers.

### A3 — Russia Atlas
- build RussiaAtlasPageVM;
- add institution comparison/registry;
- enrich Russia map with domain/output/collaboration summaries;
- enrich Institution detail with roll-up sections.

### A4 — China comparator
- reuse the same contracts where data is available;
- do not require identical evidence depth.

### A5 — leadership integration
- update homepage to expose two first-class entry paths:
  Russia capability landscape and Collaboration decision;
- preserve existing P1/P2/P3 decision path.

## 11. Acceptance test

The architecture is ready when adding a newly researched Russian institution with:
- one lab;
- two capabilities;
- five years of publication output;
- two patents;
- three collaboration relations;
- one influence signal;
- multiple platform-transfer targets

requires:
- canonical/data additions;
- regenerated normalized data;

and **does not require page-local hardcoded edits**.

That is the forward-compatibility target.
