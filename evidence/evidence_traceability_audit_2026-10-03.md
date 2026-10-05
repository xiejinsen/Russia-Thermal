> **AUDIT SNAPSHOT / NON-AUTHORITATIVE**
>
> This file records evidence-traceability conditions found on 2026-10-03. It is not the live QA status source.
> Current QA authority: [Repository Completeness Matrix](qa/README.md); current project status: [PROGRESS](../PROGRESS.md).
>
# Evidence Traceability Audit — 2026-10-03

## Executive finding

The user's concern is valid.

The repository contains many original links in deep-dive files, but **decision-grade traceability was inconsistent**.

The main problems found:

1. `evidence/sources/README.md` lagged behind the actual research and contained only a fraction of the sources already used.
2. Several decision/convergence files summarized evidence without carrying the original links locally.
3. `09_collaboration-roadmap/poc01_surface_utvc_v01.md` had **zero external evidence links** even though it directly supported a GO decision.
4. Some prior analysis relied on secondary discovery pages during research; these should not be the stored evidence when a DOI/publisher/official page is available.
5. Patent numbers were sometimes discussed in narrative form without a patent-text link in the same decision file.

## Corrective action

### Completed in this audit
- expanded the central source register into a decision-grade evidence index;
- added explicit source-quality / verification-status rules;
- required local source links in folders 07/08/09;
- added primary evidence directly into PoC-1;
- added primary evidence into the partner/hypothesis decision map.

### Rule going forward
A technology/partner decision cannot move to GO / NO-GO / Tier A without:
- Russian primary/official evidence;
- China/global comparator evidence;
- patent source for IP claims;
- explicit caveat if conditions are not directly comparable.

## Current evidence quality

### Strong / traceable
- Kutateladze institution/lab/project evidence;
- Pavlenko surface papers;
- Kabov film/droplet paper and patent lineage;
- Ural LHP papers/proceedings;
- TsAGI/PNRPU official capability pages;
- SPbU Android DVFS primary paper;
- Chinese UTVC/LHP primary papers;
- Huawei/HONOR/Xiaomi/OPPO/vivo/REDMAGIC official product pages;
- PKU microfluidics primary paper;
- human-factor smartphone thermal papers.

### Needs further strengthening
- some Russia-wide candidate institutions still have only one source;
- several researcher-current-role cards need official current-profile verification;
- surface-related patent coverage is still weaker than paper coverage;
- independent measurements of OEM cooling claims are still sparse;
- phone teardown / internal volume evidence is not yet systematically stored.

## Important distinction

**Traceable does not mean directly comparable.**

Example:
- Pavlenko's 257% CHF uplift is traceable to a primary paper;
- but the experiment used 1.5–25 mm liquid-layer conditions, so it is not direct evidence of a 0.3–0.5 mm phone VC benefit.

The repository must preserve both:
1. the original source;
2. the transfer caveat.

## Next audit target

Before any outreach package is considered complete:
- check every file in `09_collaboration-roadmap/`;
- ensure every factual claim supporting partner selection has a local primary link;
- ensure all cited patents have direct patent text;
- ensure OEM/product claims are explicitly labeled vendor claims.
