# Russia-Thermal Research Intelligence — Web Design System v1

status: APPROVED_AS_DESIGN_DIRECTION / NOT_IMPLEMENTATION
date: 2026-10-09
product: Russia-based academic thermal management research intelligence for smartphone R&D; tablets secondary
users: (1) technical leadership in 5–10 min; (2) researchers who challenge claims; (3) collaboration planners
authority: design only; [Phase-1 decisions](../../reports/leadership-decision-brief.md) remain unchanged

## Distinctive identity and design signature

**Scientific field-notes + navigable evidence atlas**, not a corporate presentation, SaaS KPI dashboard, or investment pitch deck. A readable research article transitions organically into live Source→Claim→Capability→Partner exploration.

Signature visual: a **Claim-to-Evidence rail**, a thin vertical evidence trail aligned with editorial paragraphs, linking every decision-critical assertion to (a) source paper, (b) research group, (c) interpretation boundary. This is genuine content structure, not numbered decoration or fake schematic causality.

Do **not** use an oversized abstract hero, triple investor cards, fake counts, decorative heatmaps, four-color gradients, region flags as decorative proof, repetition of 01/02/03 on every section, or yellow/green/red status signaling as the only status cue.

## Language strategy

- Decision summary and executive implication: concise Chinese, no literal full translation of technical content.
- Navigation and scientific taxonomy: English — Overview, Research Landscape, Institutions, Scholars, Capabilities, Evidence, Decisions.
- Specialized terms preserve canonical English: UTVC, Dryout, Rewetting, Capillary Limit, LHP, PCM, CHF. Explain on first use where needed, not by artificial Chinese names.
- Technical explanation, experiments, comparison criteria and paper-level methods: primarily English sentences and actual original titles.
- Scientific affiliations: exact verified institution / scholar names. Preserve citation spelling and DOI; do not invent English names.
- Author-facing and governance content: Chinese or bilingual based on task, with an English scientific evidence anchor adjacent.
- Use language-specific text wrapping, semantic lang=zh-CN on Chinese paragraphs and lang=en on English portions; no browser translation of paper titles, DOI, IDs, institutional names.

## Visual system

Colors (blue-based, neutral-heavy; **statuses not color-only**):
- Ink Navy #142B40, Primary text
- Research Blue #236B99, links/evidence rail
- Annotation Blue #E8F2F8, methodological notes
- Paper White #FFFFFF, main reading canvas
- Archive Grey #F5F8FA, alternative table rows / background
- Hairline #D5E1E8, separators
Avoid a new green/teal/orange rainbow. Critical warnings use labeled text and accessible icons/shape, with restrained tone and contrast.

Typography roles:
- **Display/editorial**: Georgia (Latin high-emphasis research thesis) + system Chinese Song/serif fallback only if platform rendering remains sound. Reserved for one headline/section opener, not UI labels.
- **Reading body**: system sans stack with Inter, Segoe UI, Noto Sans CJK SC, PingFang SC, Microsoft YaHei as local fallback; 16–17px, line-height 1.7 for detailed prose.
- **Data/metadata**: Inter/system sans 12–14px and tabular figures; DOI and ID may use mono.
- Content first: H1 ~38–46 desktop / 28–32 mobile; H2 ~26–30 / 23–26; H3 18–21; footnote at least 12px with strong contrast. Avoid low-contrast light grey 11px paper evidence.

Layout:
- 12-column desktop canvas, max 1280px, document reading column 670–760px, ancillary evidence rail ~270–330px.
- 24–32px gaps to distinguish concepts, not every paragraph as a card.
- Landing: editorial thesis and unique claim rail; compare through tabular evidence, source snippets, directed links and publication metadata.
- Research Explorer: search/filter/table/drawer; institution/scholar profiles: informative editorial header, scoped publications, evidence-backed methods.
- One compact (44–56px) navigation header, skip-link, sticky behavior only if it does not obscure content; no extra location chip when redundant.
- Desktop 1440px, laptop 1024px, mobile 390px. Reading column becomes full width; evidence rail drops inline after the claim; tables scroll with readable headers; controls have 44px touch targets.

Components by meaning:
1. Editorial Lead / thesis, not a CTA-heavy hero.
2. **Research Evidence Rail**: Claim → primary paper → scope/limitations → counterpart link.
3. Comparison Table (Russia / China / Global + transfer risk), evidence-per-cell, sortable only when real data permits.
4. Research Thread (institution → verified lab/scholar → study → finding → device relevance).
5. Partner Decision Row (P1/P2/TPU text status, exact next question and gate). Not three full-height marketing cards.
6. Representative Paper Citation (linked original title; authors/year/journal/DOI; method, result, limitation, role).
7. Explore filters for institution, method, year, evidence state.
8. Scientific graph/atlas only where geometry is grounded in canonical actors; no imagined research-network links.

Interactions:
- A specific link on citation title, person name, DOI, and decision source; do not make entire cards into opaque click surfaces.
- Mobile document TOC, keyboard focus, Back/Forward preserving filter state, no hover-only explanatory content.
- No auto-animating statistics. Honor reduced motion.
- Source/claim/decision audit trails must be reachable in max two meaningful clicks from a central homepage research thread.
- Incomplete source coverage should be labeled, not rendered as false zero.

## Evidence / editorial acceptance

- P1 = feasibility contact hypothesis only; P2 = conditional reserve; TPU = HOLD.
- Chinese product experience is the baseline; Russia may contribute mechanism/datasets, NOT product superiority.
- Dryout dielectric open experiment != smartphone sealed UTVC.
- 42-month R410A thermosyphon != guaranteed long-life phone VC or time-resolved precursor.
- Each public claim's provenance and transfer boundary lives beside the claim; no invented figures.
- Q07 2027–29 themes are bounded conditional research questions, not forecasted phone products.

## Antitemplate critique before build

A standard generic scientific dashboard would start with 3 KPI cards, followed by a large equal-width row of team cards and four prediction tiles. **Reject**: the unique contribution of Russia-Thermal is its claim lineage and comparative falsification. Spend visual distinction on claim-to-evidence rail and editorial hierarchy instead; keep statistics and supporting links quiet.

## Implementation / acceptance order

1. [Overview blueprint](overview-ux-blueprint-v1-2026-10-09.md) fixes semantics and component order.
2. Figma editable design refines current exploratory concepts; prefer editorial direction A as base, observatory B as evidence drill-down, atlas C for institution navigation. Existing Figma exploration is not sign-off: https://www.figma.com/design/NAPiueDASYJpYLiiOyYBer
3. User/technical review of screenshot layouts with real texts, not placeholders.
4. Implement via existing Astro build and canonical view models, without duplicating manually maintained research objects.
5. Follow Vercel web interface acceptance: keyboard and focus, links and targets, language attributes, mobile reading widths, accurate headings, no dead ends. Ref: https://github.com/vercel-labs/web-interface-guidelines
6. Actual local/site build, desktop/mobile screenshots, user-visible comparison, latest-HEAD CI and broken-link audit before mark PRESENTATION_VERIFIED.

Method reference: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md — deliberate palette/typography/unique signature, real content before coding, critique before build. This is applied guidance, not claim an external plugin was executed.
