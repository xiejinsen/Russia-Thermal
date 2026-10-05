# 10Q Evidence Cards

Last reviewed: 2026-10-05

## Purpose

This directory is the scalable deep-reading layer for decision-grade papers and patents.

The previous architecture stored all paper cards in one large Markdown file and all patent cards in another. That made per-source review, correction, linking and version history unnecessarily expensive.

The canonical rule is now:

> **one source → one 10Q card → one independently editable Markdown file**

## Structure

```
evidence/10q/
├── README.md
├── papers/
│   ├── README.md
│   ├── _TEMPLATE.md
│   ├── SYNTHESIS.md
│   └── <card-id>_<short-title>.md
└── patents/
    ├── README.md
    ├── _TEMPLATE.md
    ├── SYNTHESIS.md
    └── <card-id>_<short-title>.md
```

## Canonical entry points

- [Paper 10Q cards](papers/README.md)
- [Patent 10Q cards](patents/README.md)
- [10Q methodology](../mobile_thermal_insight_10q_method.md)
- [Human-readable bibliography](../bibliography/README.md)
- [Decision-grade source register](../sources/README.md)

## Editing rules

1. Keep one primary source per card.
2. Preserve the stable card ID when correcting or deepening an existing source.
3. Add a new card for a genuinely new source; do not append it to another source's file.
4. Keep source-specific interpretation in the card.
5. Put cross-source / portfolio conclusions in `SYNTHESIS.md` or the relevant 03–09 decision file.
6. Do not duplicate registry metadata that already belongs in the relevant `../sources/sections/` module.
7. When a card becomes decision-critical, keep its original-source links and Source Fact / Inference / Unknown boundaries explicit.

## Legacy aggregate status

The former monolithic 10Q aggregate files were **deleted on 2026-10-05** after backlink migration.

Only these live structures remain:
- per-source cards;
- paper/patent indexes;
- paper/patent synthesis files;
- the shared 10Q method.
