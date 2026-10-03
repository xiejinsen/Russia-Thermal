# Ranking & Reputation Metadata Standard

Last updated: 2026-10-03

Purpose: preserve university and journal-ranking context without allowing prestige metrics to substitute for technical evidence.

## Principle

Rankings are **context metadata**, not proof of technical relevance or collaboration value.

A highly ranked university may have no relevant thermal capability.
A niche institute or lower-ranked university may host a uniquely valuable lab.

Therefore rankings must never override:
- recent primary technical evidence;
- lab/PI capability;
- experimental facilities;
- IP;
- mobile-transfer feasibility;
- China/global differentiation.

## A. University ranking metadata

For every university in the major-coverage matrix, record where available:

- institution name;
- country / city;
- ranking system;
- ranking year;
- overall rank / band;
- relevant subject rank / band;
- relevant subject name;
- original ranking-page URL;
- access / verification date;
- notes / caveats.

Preferred ranking systems:
- QS World University Rankings
- QS Subject Rankings
- Times Higher Education World University Rankings
- THE Subject Rankings
- Academic Ranking of World Universities (ARWU)
- ShanghaiRanking Global Ranking of Academic Subjects

### Relevant subjects for this project
Depending on institution:
- Engineering & Technology
- Mechanical / Aeronautical / Manufacturing Engineering
- Materials Science
- Physics
- Chemical Engineering
- Electrical & Electronic Engineering
- Computer Science / AI
- Energy Science / Thermal Engineering where available

### Storage rule
Never store a rank without:
- ranking system;
- ranking edition/year;
- direct source URL.

Do not write simply:
> "University X is top-100."

Write:
> "QS 2026 overall: rank/band X; QS 2026 Mechanical Engineering: rank/band Y."

## B. Journal-ranking metadata

For every decision-relevant paper, record where available:

- journal title;
- publication year;
- journal ranking source;
- ranking edition/year;
- subject category;
- quartile (Q1/Q2/Q3/Q4) where applicable;
- impact factor / CiteScore / SJR only with year/source;
- direct source URL or verifiable source note;
- caveat when the journal spans multiple categories.

Preferred sources:
- Clarivate Journal Citation Reports (JCR)
- Scopus / CiteScore
- SCImago Journal Rank (SJR) as an accessible secondary bibliometric source when needed

### Important
Quartile is category-specific.

A journal may be:
- Q1 in one category;
- Q2 in another.

Therefore never store “Q1 journal” without category + year.

## C. Paper-quality metadata

For a decision-relevant paper, distinguish:

1. **Paper evidence quality**
   - primary / peer-reviewed / conference / review / preprint

2. **Journal venue metadata**
   - JCR/SJR/Scopus context

3. **Technical directness**
   - direct phone evidence
   - electronics-cooling evidence
   - mechanism-only evidence
   - adjacent-domain evidence

4. **Decision relevance**
   - critical
   - supporting
   - background

A paper in a top journal but unrelated geometry is not stronger decision evidence than a directly relevant paper in a specialized journal.

## D. Recommended institution table columns

| Institution | Status | Relevant lab | Key PI | 2023–26 evidence | QS overall | Relevant subject rank | THE/ARWU context | Technical relevance | Source links | Last verified |
|---|---|---|---|---|---|---|---|---|---|---|

## E. Recommended paper table columns

| Evidence ID | Paper | Year | Journal | Venue type | Ranking source/year/category | Quartile | Directness | Key result | DOI/original | Decision use |
|---|---|---:|---|---|---|---|---|---|---|---|

## F. Decision rule

University/journal rank may strengthen:
- credibility context;
- talent-density context;
- external reputation context.

It may **not** by itself promote:
- a university to HIGH-SIGNAL;
- a lab to Tier A;
- a paper to decision-critical;
- a collaboration recommendation.

Technical evidence remains primary.
