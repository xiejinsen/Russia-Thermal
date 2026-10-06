# Component System

status: DESIGN
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
- receives explicit props;
- has no repository/file access;
- has no hidden singleton/global domain state;
- documents required vs optional props.

## 3. Local change examples

### Add journal name to EvidenceCard

Change:
- EvidenceCard prop type;
- EvidenceCard rendering;
- relevant Evidence VM.

Do not change:
- InstitutionCard;
- PartnerComparison;
- navigation;
- page shell.

### Change P1/P2 visual emphasis

Change:
- decision/priority tokens;
- PartnerCard / PartnerComparison.

Do not change:
- canonical direction objects;
- evidence data.

### Add portrait to ScholarPage

Change:
- image metadata;
- ScholarPageVM;
- ScholarHero component.

No impact on:
- evidence explorer;
- institution card;
- capability heatmap.

## 4. Avoid universal mega-components

Forbidden:
- one generic `EntityCard` with 25 optional props;
- one `DetailsPage` branching on actor/evidence/capability types;
- one global dashboard component owning all filters.

Prefer:
small, purpose-specific components sharing primitives.

## 5. Variant policy

Variants are acceptable only for genuine presentation variants:
- compact / full;
- leadership / technical;
- light / emphasized.

Do not use variants to hide unrelated component responsibilities.

## 6. Interactive islands

Candidate islands:
- EvidenceExplorer;
- CapabilityHeatmap controls;
- RelationshipGraph;
- comparison filters.

Everything else should render static HTML by default.

## 7. Story / test fixture rule

Each Tier 1–3 component should eventually have:
- fixture data;
- empty state;
- long-text state;
- missing-image state;
- keyboard/focus test if interactive.
