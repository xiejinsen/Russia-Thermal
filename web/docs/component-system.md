# Component System

status: W2_IMPLEMENTING
scope: reusable UI boundaries and composition

## 1. Component tiers

### Tier 0 — primitives

Examples:
- Heading
- Text
- Link
- Badge
- Divider
- Icon
- Avatar
- Image

Rule:
no domain knowledge.

Current baseline:
- `Badge`

### Tier 1 — domain atoms

Examples:
- ConfidenceBadge
- MaturityBadge
- DecisionBadge
- EvidenceTypeBadge
- CountryTag
- ActorLink

Rule:
one domain concept per component.

Current baseline:
- `DecisionBadge`
- `MetricPair`

### Tier 2 — cards

Examples:
- InstitutionCard
- ScholarCard
- EvidenceCard
- CapabilityCard
- DirectionCard
- VenueCard

Rule:
cards accept typed view-model props and do not query data.

Current baseline:
- `InstitutionCard`
- `ScholarCard`
- `DirectionCard`

### Tier 3 — compound views

Examples:
- PartnerComparisonTable
- CapabilityHeatmap
- CollaborationMatrix
- EvidenceFilterPanel
- DecisionTimeline
- RelationshipGraph

Rule:
compound views may coordinate several components but own no canonical truth.

### Tier 4 — page sections

Examples:
- ExecutiveDecisionSection
- PriorityPartnersSection
- ChinaBaselineSection
- SupportingNodesSection

Rule:
compose domain components for one page narrative.

## 2. Component API rule

Every component:
- receives explicit typed props;
- has no repository/file access;
- has no hidden singleton/global domain state;
- documents required vs optional props through TypeScript interfaces.

## 3. View-model boundary

Tier 1–4 components consume presentation view models from `src/types/view-models.ts`.

Dependency direction:

`normalized W1 data -> VM builder -> typed component prop -> Astro render`

Components do not import canonical Markdown, exporter parsing helpers or strategic decision logic.

## 4. Fixture rule

The `/fixtures` page uses synthetic data only.

Current required states:
- standard;
- long text;
- sparse / missing optional metadata.

Future interactive components additionally require keyboard/focus fixtures.

## 5. Avoid universal mega-components

Forbidden:
- one generic `EntityCard` with many optional props;
- one `DetailsPage` branching across unrelated entity types;
- one global dashboard component owning all filters.

Prefer:
small, purpose-specific components sharing primitives.

## 6. Variant policy

Variants are acceptable only for genuine presentation variants:
- compact / full;
- leadership / technical;
- light / emphasized.

Do not use variants to hide unrelated component responsibilities.

## 7. Interactive islands

Candidate islands:
- EvidenceExplorer;
- CapabilityHeatmap controls;
- RelationshipGraph;
- comparison filters.

Everything else renders static HTML by default.

## 8. Next implementation gate

Before W3 real feature pages:
- finish core card contracts;
- create Overview/PartnerPortfolio VM builders;
- prove generated-data integration without canonical parsing in `src/`;
- keep Astro check/build green.
