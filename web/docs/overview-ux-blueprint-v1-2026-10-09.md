# Overview UX / Information Architecture Blueprint v1

status: DESIGN_SPECIFICATION / NOT_RENDERED / NOT_APPROVED_FOR_PRODUCTION
date: 2026-10-09
parent: [Web Design System v1](research-intelligence-design-system-v1-2026-10-09.md)
current_source: [Astro homepage](../src/pages/index.astro)
research_authority: [Phase-1 decision](../../reports/leadership-decision-brief.md); [Q01–Q10 acceptance](../../analysis/audits/final-q01-q10-public-evidence-acceptance-2026-10-09.md)

## The homepage's single job

In 5 minutes, a technically competent leader must answer: **What is Russia good at relative to the strongest Chinese/internal phone-thermal baseline, which specific academic people and experiments merit attention, what should we do, and what does the evidence *not* prove?** A technical reviewer must be able to follow a claim to its original study and scope in 1–2 clicks.

## Reading experience and section contract

### A. Above the fold — editorial research thesis, not a poster

**Left (7–8 columns, text):**
Small metadata: `THERMAL RESEARCH / RUSSIA / OCTOBER 2026`.
H1 (English): `Where Russian Thermal Science Can Add Value`.
Chinese executive line: `俄罗斯的潜在价值在于补充失效机理、长期退化证据与专项研究方法，而不是替代国内手机散热产品研发。`
English technical lead: `We assessed academic teams against Chinese and global device-facing prior art. Only narrow, falsifiable research increments survive; phone-scale advantages remain unproven.`
Do not add metrics or ungrounded visuals.

**Right (4–5 columns): Claim-to-Evidence rail**
- Chinese product baseline: `Ultra-thin VC / manufacturing / system integration`.
- Russia residual: `Mechanism-resolved boiling / long-calendar aging / specialized models`.
- Provenance links: Phase1 research finding; original P1/P2 papers; phone transfer caveat. It must read as **comparison of research roles**, NOT a directional workflow where RU builds the device and CN receives hardware.
- At bottom: understated text link `Inspect the evidence →` pointing to the first selected research thread.

### B. Research question / Selected study — long-form editorial block

An asymmetrical research article row (main 8 cols) + evidence footnote margin (4 cols).
Headline: `When is dryout actually irreversible?`
Scientific detail ~150–200 English words describing dielectric open-boiling experiments using fast IR and optical imaging, observed dryspot distribution and irreversible crisis under studied conditions. Avoid phone predictors claims.
Right rail: verified Surtaev/Pavlenko study link to [PAPER-RU-DRY-001](../../01-evidence/papers/PAPER-RU-DRY-001/README.md) and [CLM-PAV-002](../../02-claims/CLM-PAV-002.md); `Not a sealed smartphone UTVC test.` One cite title link to original DOI.
A small compact row directly below: `What would change a handset decision?` -> repeatable labels, internal sensor observability, improvement vs existing same-input models. No invented probability or sensitivity numbers.

### C. Comparative evidence — table, not card triptych

Section header `Where China leads — and where Russia may complement`. Below, a 4-row table with columns: Topic / China product or global baseline / Russian published capability / Phone transfer / Current disposition / Primary evidence.
Rows: UTVC/device manufacturing; dryout state diagnostics; reliability 42-mo endpoint; transient PCM/LHP modeling.
Distinguish **Global Korean KAIST** from China where applicable. Each cell links to the relevant existing landscape/evidence data; no numeric cross-rig heat-flux charts.

### D. People and institutions — indexed research threads

Compact directory-style table (not 3 equal-height marketing cards):
- Kutateladze Lab1.3 / Pavlenko + Surtaev / dielectric dryspots / P1 feasibility / `Can labels change validation decisions?`
- MPEI / N.S. Ivanov / R410A surface-aging endpoint / conditional reserve / `Any intermediate time-series?`
- TPU / Feoktistov / laser/wettability / HOLD / `Any device-matched process improvement?`
Name link goes to institution/person profile; study title link goes to paper; decision link goes to direction/partner. Reserve/watch method teams (TSU CHMT, ITP Ural LHP, ICM) appear as a compact second index, not new equal-ranked P1 panels.
Do not guess collaboration permission, person affiliation, project cost.

### E. Future directions — two-column short editorial notes

Title `2027–2029: unanswered thermal questions`; 4 threads: Failure-aware UTVC; Health-aware lifetime; Transient buffer reset; thin two-phase operating bounds. Explain English methods and Chinese decision implication. Show `Research question, not product forecast`.

### F. Management outcome and limits — narrow ending, not repeated summary

Strong plain text line: `Decision for discussion: authorize a P1 feasibility inquiry about labels and experimental conditions?`
Below: what is still unknown: phone transfer; datasets and rights; partner willingness; comparative incremental predictive benefit; HEAD CI. Two distinct links: `Read partner work packages` and `Audit supporting evidence`.
This ends the story; no homepage-long list of every frontend route.

## Wireframe, desktop 12-column (structural, not rendered)

```
┌─────────────────── slim nav / research search ───────────────────────────┐
│ [wide editorial thesis + technical lead       ] [CLAIM→EVIDENCE RAIL]    │
│                                                                      │
│   SELECTED STUDY: What would irreversible dryout mean?              │
│   long-form experiment interpretation      │ PAPER / CLAIM / LIMIT   │
│                                                                      │
│   COMPARATIVE EVIDENCE TABLE — China / Global / Russia / gate        │
│                                                                      │
│   RESEARCH DIRECTORY — Institutions / Scholars / status / paper     │
│                                                                      │
│   2027–29 research notes (2-column scientific annotations)          │
│                                                                      │
│   FINAL MANAGEMENT QUESTION + AUDIT LINKS                            │
└──────────────────────────────────────────────────────────────────────┘
```

## Mobile at 390px

- Lead first, evidence rail becomes inline `Evidence & limits` block immediately after thesis.
- Selected original-study citation follows its associated paragraph, no long disconnected right rail.
- Comparative table horizontal scroll with column labels/accessible description; offer topic-specific stacked row view if wider than screen.
- Academic directory becomes list with institution and linked source, not truncated name chips.
- Navigation: retain site search or menu, ensure 44px touch targets, keyboard focus and accessible disclosure.

## Existing Overview failures and remediation

| Existing index.astro treatment | Problem | Replacement |
| --- | --- | --- |
| One oversized all-Chinese H1 and lead | Technical register flattened, page reads as a speech | English scientific headline + concise Chinese decision line + technical English lead |
| Right-hand diagram with Russian output flowing to China | Implies a supplier handoff not proven by research | Evidence-comparison rail, no manufacturing/control arrow |
| Three equal-height partner marketing cards | Overweights HOLD and conditional reserve | Ranked directory-style research table |
| Four equal future-trend tiles | Future hypotheses visually look equally validated | Two-column editorial research notes, conditional tag |
| CTA buttons throughout | Encourages navigation over understanding the evidence | Sparse in-context citation links; one final management action |
| Sections numbered 01/02/03/04 | Implies a process where sections are not process steps | Meaningful scientific headers and evidence metadata |
| No direct source beside claim | Reader has to hunt for proof | Original study/claim/limitation in adjacent rail |

## Content approval and tests

**Content verification**: all scientific statements must map to normalized evidence and exact scope; do not fabricate metrics, academic titles or Russia-wide sampling counts. The Phase1 portfolio is unchanged. Avoid old TSU scout text where newer representative studies exist.

**Visual**: 1440, 1024, 390 viewport screenshots; typography, line wrapping, table responsiveness, evidence rail reading order; avoid repeated promotional cards.

**Functional**: production Astro build; valid route links; keyboard menu and focus visibility; mobile touch targets; no broken site reference; read-back actual current HEAD and CI logs.

This spec is the prerequisite for revising the Figma concepts. Figma files are for critique and editable mockups, not authority for factual claims.


## Implementation handoff — 2026-10-09

The bilingual editorial Homepage was implemented in [web/src/pages/index.astro](../src/pages/index.astro) at commit `92e836f9891e895e35c7e11dc9fe44fb5e2008dd`, grounded in Figma Desktop frame `6:2` and Mobile frame `6:82`. Main modules: editorial thesis, Claim/Provenance sidebar (inline on mobile), original-paper featured study, comparison table, indexed academic partners, future research notes, management feasibility question.

Code read-back confirms 3 section opening/closing pairs, evidence rail and mobile breakpoint present, 15 internal helper links authored. This is a **static source inspection only**, not an Astro TypeScript or visual rendering test.

**Deployment acceptance OPEN**: combined commit status API returned no statuses for `92e836f`; current Actions run not inspected, `npm run check`/`npm run build`/`npm run check:links` not executed. Browser screenshot comparison with Figma and accessibility inspection at 1440/1024/390 remain required. The older Figma concepts are still comparison sketches, not alternative deployed branches. Any new scientific factual edit must be source checked before approval.

## v2 amendment — Ten questions, five evidence-led web chapters (2026-10-09)

Design authority only; frozen Phase1 decisions unchanged. Replaces previous homepage section *order*, not its scientific truth. No public Q01–Q10 codes.

| Editorial chapter | Question coverage | Homepage display | Detailed route |
|---|---|---|---|
| Research Landscape | Q01 Q02 Q03 Q04 | Geolocated institution/academic group browser where coordinates verified; actor → scholar → method → original paper; no Russia-wide census claims | /research-map/russia, /institutions, /scholars, /representative-works |
| Capability Differentiation | Q05 Q06 | China/global baseline vs published Russian capability vs phone transfer evidence and restrictions, comparative table | /landscape, /capabilities, /claims |
| Research Outlook 2027–2029 | Q07 | Four conditional scientific questions in editorial annotations, not a predicted product timeline | /directions |
| Collaboration Value | Q08 | Explicit counterfactual table: Russia research increment / China or internal alternative / data and same-input falsification gate | /partners, /evidence |
| Partner Opportunities & Decision | Q09 Q10 | Name, PI, study, proposed narrow task, expected evidence, feasibility gate, PRIMARY/RESERVE/HOLD and leadership decision | /partners, /decisions |

### Landscape section specification

Use an institution-directory plus **actual verified geography** as an optional exploratory control, not a decorative Russia silhouette or location guess. Known 28 owner institutions and 34 annotated capabilities are corpus-specific, *not* comprehensive Russia counts. A narrow featured thread shows Kutateladze Lab1.3 / Pavlenko–Surtaev / 2026 dielectric dry-spot experiment; MPEI / Ivanov / thermosyphon exposure; TSU / Sheremet and colleagues / PCM modeling. Institution/person and original study each get specific clickable labels. A responsive mobile list precedes any map.

### Collaboration Value section specification

| Research thesis | Strong alternative | Unproven but testable incremental value / stop |
|---|---|---|
| Kutateladze mechanism labels | China handset dryout prior art; independent global segmentation and wick-mode science | Only proceed after legally shareable, repeated labels improve held-out phone validation or protection decision; otherwise no project |
| MPEI long-duration aging | Domestic oxidation grading, QA and accelerated VC aging | Require time-resolved intermediary capillary/surface evidence distinct from public endpoint; absent chronology means reserve |
| TPU generic wettability processing | Mature Chinese laser/wick/device production art | HOLD unless device-matched, reliable, new process effect passes benchmark |
| TSU/ITP/ICM academic methods | Internal numerical/thermal and existing global tools | WATCH until a specific technical problem and nonredundant deliverable are demonstrated |

All partner data access, willingness, IP arrangements, internal personnel cost and smartphone hardware outcomes remain UNKNOWN.

### Editorial and interaction rules

Each major English headline has a concise Chinese subtitle. Keep original paper titles, author names, DOI and technical language in English. No 10 cards for ten questions, no five equal rectangles and no invented heat maps. Distinct visual grammars by content: institution browser, readable evidence table, asymmetric research prose, counterfactual table, ranked decision directory. Critical claims must reveal original paper, author and phone transfer limitation within one or two clicks. Real desktop and mobile review required before shipping implementation.
