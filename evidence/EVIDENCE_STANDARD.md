# Evidence Standard

Last reviewed: 2026-10-03

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

