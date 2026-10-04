# Evidence Standard

Last reviewed: 2026-10-04

## Core rule

**Any evidence that materially supports a technology decision, partner decision, GO/NO-GO, China benchmark, IP conclusion or PoC choice must be directly traceable to the original source.**

A source name without a working original-source link is not sufficient for a high-value decision.

## Claim classes

1. **Source fact**  
   Directly stated in a primary paper, official institution page, patent, standard, product documentation or measured teardown.

2. **Author/company claim**  
   Interpretation, benefit or performance claim made by an author/vendor; not independently verified.

3. **Cross-source observation**  
   Pattern visible only after comparing multiple sources.

4. **Analyst inference**  
   Our interpretation of what the evidence implies.

5. **Hypothesis**  
   A falsifiable proposition to test through research or PoC.

## Source priority

Preferred order:
1. **Primary paper** — DOI / publisher / journal page
2. **Official patent text** — patent-office/institute PDF or Google Patents mirror when needed for accessibility
3. **Official institution / lab / project page**
4. **OEM / supplier official technical or support page**
5. **Independent measurement / teardown**
6. Secondary reporting
7. Aggregator/profile page only when primary evidence is unavailable

### Important
- ResearchGate, Semantic Scholar, Exa snippets, news aggregators and profile pages are discovery aids, not preferred final evidence.
- If a DOI or publisher page exists, store that instead of a secondary mirror.
- For patents, keep both the patent number and a direct patent-text link whenever available.
- For OEM claims, explicitly mark them as **vendor claims** unless independently measured.

## Required metadata for high-value evidence

Every decision-grade item should record:
- evidence ID;
- claim supported;
- source title;
- direct URL / DOI / patent text;
- year/date;
- authors / inventors where relevant;
- institution / assignee;
- evidence type;
- target technical track;
- mobile relevance;
- directness;
- verification status;
- caveats.

## Decision-file traceability rule

A document in folders:
- `07_china-benchmark/`
- `08_opportunities-transfer/`
- `09_collaboration-roadmap/`

must include **local evidence links next to or below the decision they support**.

It is not enough to rely only on `evidence/source_register.md`.

Examples:
- a GO decision for a surface PoC must link the exact Pavlenko papers plus the Chinese UTVC comparator;
- a NO-GO for film/droplet phone integration must link the experiments/patents that expose gas/liquid handling requirements;
- a productization claim must link the official OEM page.

## Minimum evidence package for a major conclusion

A major conclusion should normally have:
1. at least one primary/official source for the Russian capability;
2. at least one primary/official comparator for China/global baseline;
3. a direct source for any patent/IP statement;
4. a caveat explaining non-comparability when test conditions differ.

## Comparison discipline

Normalize, where possible:
- heat load / heat flux;
- heater area;
- device thickness / volume;
- thermal resistance / temperature reduction;
- ambient / condenser boundary;
- orientation;
- working fluid;
- cooling power;
- airflow / static pressure;
- noise spectrum / SPL;
- vibration;
- test duration / cycling;
- manufacturing process;
- system-level benefit.

Mark comparisons:
- directly comparable;
- approximately comparable;
- non-comparable.

## Verification labels

Use:
- **VERIFIED-PRIMARY** — DOI/publisher, official patent, official institution/OEM page
- **VERIFIED-OFFICIAL** — official institution, project, facility or product page
- **SECONDARY-ONLY** — primary source not yet recovered
- **PENDING** — discovered but not yet verified

Decision-critical sources should not remain SECONDARY-ONLY or PENDING without an explicit warning.

## Rule

**Do not turn “interesting physics” into “mobile opportunity” until a mobile-transfer constraint check has passed.**

## Ranking / bibliometric metadata

University and journal rankings are retained as **context metadata**.

For university rankings:
- record ranking system;
- edition/year;
- overall rank/band;
- relevant subject rank/band;
- exact subject;
- original ranking URL.

For journal rankings:
- record ranking source;
- edition/year;
- subject category;
- quartile;
- metric value only with its year/source.

Never store ambiguous statements such as:
- "top university";
- "top-100";
- "Q1 journal";

without the ranking system/category/year/source.

Rankings are never sufficient evidence for technical capability or collaboration priority.

See:
- `ranking_metadata_standard.md`
- `../03_russia-institutions/major_university_coverage_matrix.md`



## Human-readable citation rule

Human-facing research files must **not** present a bare DOI / URL as the primary citation display.

### Paper format

Preferred inline format:

**[Paper title](original DOI / publisher URL)** — Author 1, Author 2, Author 3 *et al.* — *Journal / Conference*, Year.

Example:

**[Experimental Investigation on Ultra-Thin Vapor Chamber with Composite Wick for Electronics Thermal Management](https://doi.org/10.3390/mi15050627)** — Shiwei Zhang, Hao-Yi Huang, Jingjing Bai *et al.* — *Micromachines*, 2024.

Author rule:
- <=4 authors: list all;
- >4 authors: first 3 + *et al.*;
- where partner identity matters, list the relevant partner even if outside the first three.

### Patent format

Preferred inline format:

**[Patent title](direct patent URL)** — Inventor 1, Inventor 2 *et al.* — Patent No. — Assignee — Year.

If the English patent title is unavailable or uncertain:
- use the verified official/Russian title;
- do not invent a translation.

### Official page / product / lab format

**[Page title](official URL)** — Organization — current/year.

### Where raw links are allowed

Raw URLs may remain in:
- `source_register.md`;
- machine-oriented metadata fields;
- URL/DOI columns explicitly intended for indexing.

But in:
- 04 researcher/lab cards;
- 05 paper/patent analysis;
- 07 benchmark narratives;
- 08 decision files;
- 09 collaboration/PoC files;
- 10 final-report files;

citations should be human-readable.

### Citation quality rule

A readable citation must not hide source type.

The surrounding text or citation should make clear whether it is:
- primary paper;
- patent;
- official institution/OEM source;
- independent teardown/measurement;
- secondary bibliometric source.

### Migration rule

Existing high-priority decision files should be converted first.
Historical snapshots may retain older formatting if they are clearly marked non-authoritative.


## Decision-grade source brief requirement

Any paper or patent promoted to **decision-grade evidence** must have a human-readable brief.

### Paper brief minimum
- review status;
- background / problem;
- technical method;
- main conclusion;
- what we learn for mobile/chip thermal insight;
- mobile relevance / transfer caveat.

### Patent brief minimum
- review status;
- problem;
- core claim / control point;
- prior-art / crowding implication;
- what we learn for mobile/IP/PoC;
- legal/claim caveat where relevant.

Canonical libraries:
- `paper_briefs_decision_grade.md`
- `patent_briefs_decision_grade.md`

A decision-grade source is not fully archived until:
1. readable citation exists;
2. central source-register entry exists;
3. source brief exists;
4. the decision file links the source where used.


## Paper/Patent 10Q method

Decision-grade paper/patent interpretation should follow:
`mobile_thermal_insight_10q_method.md`.

### Paper records must go beyond summary

In addition to background/method/conclusion, a decision-grade paper record must capture:
- novelty versus the strongest relevant current baseline;
- the paper's explicit or reconstructed falsifiable hypothesis;
- related-work / researcher / lab capability lineage;
- normalized thermal test conditions;
- reproducibility/process openness;
- whether the evidence actually supports the hypothesis;
- partner/collaboration signal;
- mobile/chip transfer path;
- smallest discriminating PoC;
- success/kill condition;
- current decision state.

### Patent records must go beyond abstract summary

A decision-grade patent record must capture:
- target problem/product relevance;
- prior-art/crowding context;
- independent-claim control point;
- useful dependent-claim implementation bounds;
- embodiment/manufacturability signal;
- inventor/assignee capability lineage;
- overlap/design-around context;
- background vs potential foreground IP;
- next claim/legal/partner/PoC action.

This method is intended to turn literature review into **technology and collaboration insight**, not merely better summaries.
