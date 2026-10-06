# Data Contracts

status: DESIGN
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
