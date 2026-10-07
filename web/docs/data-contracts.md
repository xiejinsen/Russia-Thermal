# Data Contracts

status: W2_IMPLEMENTED
scope: normalized data, schemas and ownership

## 1. Principle

Raw canonical Markdown syntax must not leak into UI components.

All web rendering consumes normalized typed records.

## 2. Core normalized entities

### ActorRecord

Required:
- `id`
- `type`
- `name`
- `country`
- `parentId`

Optional:
- `currentRole`
- `officialUrl`
- `publicContact`
- `researchRelevance`
- `city`
- `region`
- `latitude`
- `longitude`
- `locationVerifiedAt`
- `imageRef`

### EvidenceRecord

Required:
- `id`
- `sourceType`
- `title`
- `primaryUrl`

Optional:
- `year`
- `authors[]`
- `venue`
- `countryContext`
- `directFindings[]`
- `boundary`
- `imageRefs[]`

### ClaimRecord

Required:
- `id`
- `proposition`
- `status`
- `confidence`
- `supportingSourceIds[]`

Optional:
- `contradictingSourceIds[]`
- `boundary`

### CapabilityRecord

Required:
- `id`
- `actorId`
- `statement`
- `maturity`
- `evidenceConfidence`
- `targetFit`

Required relations:
- `keyPeopleIds[]`
- `claimIds[]`

Optional:
- `technicalScope[]`
- `transferBoundary`
- `strategicUse`

### DirectionRecord

Required:
- `id`
- `role`
- `investmentLane`
- `differentiationConfidence`
- `phoneTransferMaturity`

Optional:
- `capabilityIds[]`
- `claimIds[]`
- `strongestBaseline`
- `residualDifferentiation`
- `promotionGate`
- `killGate`

### PartnerPriorityRecord

Required:
- `id`
- `rank`
- `priorityClass`
- `targetActorIds[]`
- `relatedDirectionIds[]`

Optional:
- `collaborationReadiness`
- `recommendedAction`
- `rationale`

Semantics:
- partner priority is a management-decision dimension;
- it is independent of `DirectionRecord.investmentLane`;
- one priority package may reference one or more actors and directions;
- P1/P2/P3 must not be inferred from technical-lane labels.

### DecisionRecord

Required:
- `id`
- `eventType`
- `subjectId`
- `newState`

Optional:
- `triggerClaimIds[]`
- `triggerExperimentIds[]`
- `rationale`

## 3. Presentation-only records

Presentation data is allowed when it does not duplicate canonical truth.

Examples:
- `PartnerPriorityVM`
- `InstitutionPageVM`
- `ScholarPageVM`
- `CapabilityHeatmapVM`

These may own:
- ordering;
- labels;
- grouping;
- summary text;
- UI hints.

They must reference canonical IDs.

## 4. Schema versioning

Every generated dataset:

```json
{
  "schemaVersion": "1.0",
  "generatedAt": "...",
  "records": []
}
```

Breaking schema changes require:
- major version bump;
- adapter migration;
- view-model compatibility update;
- tests.

## 5. No silent defaults

For decision-critical fields:
- confidence;
- maturity;
- lane;
- country;
- actor type;

missing values must fail validation or render as explicitly unknown.

Do not silently convert missing data into a favorable assumption.

## 6. Relationship resolution

Adapters must validate:
- actor parent exists;
- person references resolve;
- capability actor exists;
- evidence links resolve;
- direction references resolve.

Broken relations fail build.

## 7. Derived summaries

Do not derive country superiority automatically from counts.

Country comparison requires explicit project comparison logic from Claims/Directions.

## 8. Images as data

Image records should contain:
- `id`
- `sourceUrl`
- `localAssetPath` if legally stored;
- `licenseStatus`
- `attribution`
- `altText`
- `subjectIds[]`

No component hardcodes external image URLs.

## 9. Adapter contract

Adapters are pure transformations:
input canonical file(s) → normalized record(s).

They may:
- parse;
- normalize;
- resolve;
- validate.

They may not:
- rank partners;
- create strategic claims;
- infer country advantage.


## SynthesisRecord

Purpose:
- expose a bounded canonical management conclusion to presentation layers;
- keep leadership wording out of frontend hardcoded constants;
- provide conclusion → implication → theory basis → evidence references → boundary.

Synthesis is a thin overlay. It does not replace Claim, Capability, Direction, Priority, or Decision.

Monthly behavior:
- ordinary new Source/Claim ingestion does not require Synthesis changes;
- update Synthesis only when the management conclusion or action implication materially changes.


## 10. Geographic presentation contract

Geographic views are derived from Actor identity/location and existing relations.

Rules:
- ORGANIZATION / LAB / COMPANY may own verified city / region / coordinates.
- PERSON should normally inherit map position from the canonical parent Actor instead of duplicating coordinates.
- maps must not infer strategic importance from geography, marker size, or density alone;
- map filters may derive Capability / Direction / Priority / Person relations;
- missing location is rendered as a coverage gap, never silently geocoded to an uncertain place;
- Russia and China research maps use the same view-model contract even if their evidence maturity differs.


## 11. Capability Atlas additive datasets

Status: PLANNED / DATA_PENDING

The Russia-first Capability Atlas must extend the normalized layer additively.

Do not add mutable aggregate fields such as `paperCount`, `patentCount` or `influenceScore` directly to ActorRecord.

Planned additive data contracts:

### CollaborationRecord

Purpose:
represent evidenced actor-to-actor collaboration with type, time and source provenance.

Minimum semantics:
- stable ID;
- actor IDs;
- relation type;
- time window when publicly known;
- technical scope;
- evidence source IDs;
- confidence / boundary.

### ResearchOutputSnapshot

Purpose:
represent a reproducible publication/patent output estimate for an Actor over an explicit period and query scope.

Minimum semantics:
- actor ID;
- period;
- query/search basis;
- yearly counts;
- paper/patent counts;
- assessed date;
- completeness caveat.

It must never be confused with curated Evidence count.

### InfluenceSignal

Purpose:
surface separately evidenced context such as ranking, major program, editorial/venue role, international network, industrial cooperation or explicit impact metric.

No opaque composite prestige score is required.

### Capability classification extension

Capability should gain controlled technical-domain and platform-transfer classifications only after the vocabulary is frozen.

This is the one Atlas change most likely to require a normalized schema-version update.

Compatibility rule:
existing decision/audit pages must continue to build when Atlas-specific datasets are absent.
