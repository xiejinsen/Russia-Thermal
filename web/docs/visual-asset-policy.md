# Web Visual Asset Policy

status: W4_ACTIVE
date: 2026-10-06
scope: institution imagery, scholar portraits, original diagrams, research figures

## 1. Principle

Visuals must improve comprehension, credibility, or navigation.
Do not add imagery only to make the site look busier.

Priority order:

1. original project diagrams built from canonical / normalized data;
2. official institution or laboratory imagery with clear source provenance;
3. official scholar portraits when identity value is high;
4. paper figures only when reuse status is explicitly safe.

## 2. Allowed visual classes

### A. Original project diagrams — preferred

Examples:
- collaboration model;
- Russia-vs-China capability matrix;
- Direction / partner portfolio map;
- evidence-chain diagram.

Rules:
- derive labels and states from normalized data where practical;
- keep diagrams modular;
- prefer HTML/CSS/SVG components over opaque raster images;
- do not encode research facts only inside an image.

### B. Institution / laboratory imagery

Use only when:
- image comes from an official institution/lab source or a clearly reusable source;
- institution identity is useful to the page;
- provenance can be recorded.

Do not hotlink remote images in the production site.
Store an approved local copy only after reuse/provenance review.

### C. Scholar portraits

Use selectively for priority scholars.

Requirements:
- authoritative identity source;
- high confidence the photo matches the person;
- useful for collaboration planning;
- provenance recorded.

No decorative portrait gallery.

### D. Paper figures

Default: do not reuse.

Only include when:
- license/reuse permission is clear; or
- the figure is recreated as an original project diagram without copying protected expression.

## 3. Provenance

Every non-original external visual must record:
- source URL;
- source organization / publisher;
- retrieved date;
- reuse basis;
- local filename;
- page/component usage.

Recommended registry:
`web/assets/visual-sources.md`.

## 4. No second truth

A visual must not introduce:
- a new priority rank;
- a new country-superiority judgment;
- a new Direction state;
- a new actor relationship;

unless that statement already exists in canonical / normalized project data.

## 5. Leadership-page rule

Above-the-fold visuals must support one of:
- the executive thesis;
- P1/P2/P3 collaboration priority;
- Russia-vs-China comparator pressure;
- collaboration model.

Institution photos and portraits belong below the main decision layer.

## 6. Initial W4 decision

Before adding external photos, build two original reusable components:

1. Collaboration Model
   Russia mechanism/process depth × China device/manufacturing strength × internal smartphone integration/validation.

2. Russia-vs-China Capability Matrix
   Show comparator pressure and retained residual value without creating a country-score league table.

These should be data-backed UI components, not standalone manually edited images.
