# Final Report Visual Storyboard v0.1

Last reviewed: 2026-10-04

Status: **presentation specification — not final figures**

## Principle

Every major visual must answer a decision question.

Do not create charts merely because data exists.

The final report should use visuals to compress:
- capability;
- evidence;
- comparison;
- elimination;
- collaboration;
- roadmap.

---

## Visual 1 — Smartphone Thermal Problem Stack

### Decision question
What are the actual constraints future phone thermal innovation must solve simultaneously?

### Recommended form
Layered system diagram:

Workload / hotspot
↓
SoC + memory/package
↓
TIM/interface
↓
VC/wick / routing
↓
frame / back cover
↓
user hand / ambient

Side constraints:
- battery
- camera
- board
- acoustics
- ingress
- reliability
- cooling power

### Data source
- ../01_global-baseline/
- ../08_opportunities-transfer/smartphone_constraint_model_v01.md

### Avoid
Do not turn this into a generic heat-transfer textbook figure.

---

## Visual 2 — Mobile Thermal Technology Map

### Decision question
Which technology categories are mature, crowded, promising, or killed?

### Recommended form
2D map.

X-axis:
**phone integration maturity**
mechanism only -> component -> device -> shipping product

Y-axis:
**potential frontier shift**
low -> high

Marker encoding:
- China/global maturity
- Russia-specific signal
- current disposition

Labels:
- Tier A
- Tier A-
- Tier B+
- Tier B
- killed/reframed

### Data source
- ../02_technology-landscape/technology_map.md
- ../08_opportunities-transfer/direction_decision_gate_v01.md

### Avoid
Do not use publication count as bubble size.

---

## Visual 3 — Russia Thermal Capability Atlas

### Decision question
Where does relevant Russian capability actually sit?

### Recommended form
Capability-first structured hierarchy:

Capability domain
→ Institution / lab
→ Researcher
→ Representative evidence
→ Mobile/chip transfer state
→ Current Russia status

The diagram must include both universities and non-university institutes such as RAS institutes / TsAGI where relevant.

For each promoted node show small metadata:
- current activity 2023–2026
- university domestic/global ranking context
- top relevant venue metadata
- partner readiness

### Data source
- ../03_russia-institutions/russia_thermal_capability_atlas_v01.md
- ../03_russia-institutions/
- ../04_researchers-labs/
- ../evidence/russia_domestic_ranking_register.md
- ../evidence/journal_ranking_register.md

### Foundational layer inside Visual 3

Add a lower foundation band under the capability atlas:

**Mathematical physics / stability / exact models**
→
**failure mechanisms**
→
**thermal technologies**
→
**smartphone PoC**

Current example:
ICM SB RAS / Lavrentyev
→ exact/stability modeling
→ film instability / dry spot
→ Kabov/Chinnov mechanism route.

Do not imply this foundation supports every Russia candidate equally.

### Capability-network overlay

Where a collaboration capability crosses institutions, show a **network edge**, not duplicate isolated boxes.

Current verified example:
- Kutateladze ↔ Lavrentyev — current model/mechanism link;
- Kutateladze ↔ NSU — current execution/talent/diagnostic bridge;
- ICM/Altai ↔ Kutateladze — historical theory–experiment lineage + current methodological continuity, but current formal project unverified.

Label this:
**Siberian modular capability network**
rather than:
**integrated consortium**.

### Completeness-audit freeze status

Institution/capability completeness audit:
../03_russia-institutions/capability_map_completeness_audit_v01.md

Result:
**Visual 3 / management capability structure is now a FREEZE CANDIDATE.**

Add supporting nodes without elevating them:
- JIHT RAS — MPEI-adjacent microchannel/boiling;
- SPbPU — gradient heatmetry / two-phase immersion diagnostics.

Keep the strategic core visually dominant.

### Current first-draft artifact

The first management synthesis now exists:
[Management Capability System Map](management_capability_map_v01.md)

It already contains:
- full Russia capability panorama;
- 3 + 1 strategic core;
- Siberian modular-network overlay;
- China strong-baseline overlay;
- Stage-0 / Reserve / Watch / Kill states.

The final visual should preserve this logic while simplifying text density.

### Avoid
Do not imply university rank = technology rank.

---

## Visual 4 — Russia × China Academic Capability Heatmap

### Decision question
Why collaborate with a Russian team instead of solving the problem using existing China/global capability?

### Recommended form
Rows:
the same capability taxonomy used in the Russia atlas.

Columns:
- Russia representative institutions / capability;
- China representative academic institutions / capability;
- strongest current public comparator;
- Russia residual differentiation;
- verdict: differentiated candidate / complementary / China-baseline dominant / unresolved / kill generic thesis.

### Highlight
Only after this comparison add an "our/team capability" overlay and collaboration opportunity.

### Data source
- ../07_china-benchmark/china_academic_capability_mirror_v01.md
- ../07_china-benchmark/china_foundational_math_physics_mirror_v01.md
- ../08_opportunities-transfer/russia_china_academic_capability_heatmap_v01.md
- ../08_opportunities-transfer/foundational_math_physics_china_pressure_test_v01.md
- ../08_opportunities-transfer/direct_comparisons_v01.md

### Avoid
No "Russia vs China winner" score.

---

## Visual 5 — Opportunity Funnel / Kill Map

### Decision question
How did the research eliminate attractive but non-strategic directions?

### Recommended form

Broad technology search
↓
current Russia evidence
↓
strong China/global comparator
↓
phone constraint
↓
IP/prior art
↓
engineering feasibility
↓
Stage-0 / PoC
↓
Strategic Bets

Show killed/reframed branches at each gate.

Examples:
- generic LHP miniaturization -> killed as Russia-specific thesis
- generic synthetic jet -> killed
- generic biphilic / laser surface -> reframed
- Pavlenko surface -> generic dryout/rewetting killed -> narrowed to dielectric reversible→irreversible dry-spot / crisis diagnostics

### Data source
- ../CHANGELOG.md
- ../08_opportunities-transfer/direction_decision_gate_v01.md
- ../05_papers-patents/

### Decision value
This is a key credibility visual. It proves the project did not cherry-pick positive evidence.

---

## Visual 6 — Collaboration Opportunity Map

### Decision question
Which collaboration should receive resources first?

### Recommended form
Portfolio matrix.

X-axis:
**phone-transfer readiness**
low -> high

Y-axis:
**strategic differentiation / control-point value**
low -> high

Bubble outline:
- IP clarity

Bubble fill/state:
- partner readiness

Bubble label:
- partner + technical hypothesis

Current provisional examples:
- Pavlenko / irreversible-dryout boundary control
- TPU / biphilic pattern
- MPEI Ivanov / hierarchical coating
- MPEI ordered wick
- film/droplet
- SPbU adaptive control

### Data source
- ../09_collaboration-roadmap/
- final_report_readiness_gate.md

### Avoid
Do not call the top-right bubble "winner" until PoC gate passes.

---

## Visual 7 — Strategic Bet Card

### Decision question
What exactly are we betting on?

### One-page card layout

Top:
**Bet + user problem + decision state**

Left:
- Russia-specific capability
- evidence
- China/global baseline

Center:
- technical mechanism / architecture diagram
- phone integration

Right:
- PoC
- success/kill
- IP thesis
- partner
- confidence

Bottom:
0–6 / 6–18 / 18–36 month path

### Data source
- strategic_bets_v01.md
- collaboration_portfolio_v01.md
- three_year_roadmap_v01.md

Each final Primary/Reserve Bet should use the same layout.

---

## Visual 8 — Three-Year Roadmap

### Decision question
What gets done when, and what decision unlocks the next phase?

### Recommended form
Swimlanes:

- Technical proof
- Partner
- IP
- Product/package integration
- Reliability/manufacturing

Columns:
- 0–6 months
- 6–18 months
- 18–36 months

Use explicit **gate diamonds** between phases:
- Stage-0 pass
- Stage-1 frontier shift
- product-integration pass

### Data source
- three_year_roadmap_v01.md

### Avoid
Do not show a smooth linear timeline if continuation is conditional.

---

## Presentation hierarchy

Management version:
1. Executive decision — what Russia is and is not strategically good at
2. Russia thermal capability atlas
3. Russia × China academic capability heatmap
4. Smartphone problem / product boundary
5. Opportunity funnel / killed broad theses
6. 2–4 Strategic Bet cards
7. Collaboration portfolio + Stage-0
8. 0–36 month roadmap
9. Key risks / asks

Full technical report:
adds evidence detail, comparator tables, patent maps and limitations.

Evidence appendix:
keeps bibliography/claim/ranking detail out of the main narrative.

## Style rule

Final visuals should be:
- analytical, not decorative;
- sparse enough to read in presentation form;
- consistent in status labels;
- explicit about evidence vs inference;
- explicit about killed paths;
- free of unsupported precision.


### Leadership decision cards now available

The content structure for the leadership presentation is now frozen enough to visualize.

Canonical:
- [Leadership Decision Package](leadership_decision_package_v01.md)

Four equal-format cards:
- [Pavlenko](leadership_card_pavlenko_v01.md)
- [MPEI](leadership_card_mpei_v01.md)
- [Kabov](leadership_card_kabov_v01.md)
- [Foundational Reserve](leadership_card_foundational_v01.md)

Visual rule:
do not turn each card into a dense academic slide.

Each presentation card should visually foreground only:
1. product failure question;
2. Why Russia;
3. China already strong where;
4. residual Russia control point;
5. PoC;
6. Kill gate;
7. decision ask.

Detailed evidence remains in notes/appendix.


### Evidence-to-presentation freeze

Canonical visual hierarchy:
[Leadership Presentation Freeze Specification](leadership_presentation_freeze_spec_v01.md)

Claim control:
[Leadership Claim Traceability Matrix](leadership_claim_traceability_matrix_v01.md)

Confidence control:
[Leadership Confidence Matrix](leadership_confidence_matrix_v01.md)

Current storyboard state:
**CONTENT HIERARCHY FREEZE CANDIDATE.**

Visual design may simplify wording, but must not:
- change decision rank;
- hide low phone-transfer confidence;
- convert hypotheses into source facts;
- remove Kill gates;
- promote TPU into the 3+1 core;
- present supporting/watch institutions as strategic bets.
