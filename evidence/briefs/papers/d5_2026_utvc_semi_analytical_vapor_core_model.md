# D5. 2026 UTVC semi-analytical vapor-core / wick trade-off model

> **Brief ID:** D5 · **Track:** D. China / global — strong ultra-thin VC benchmark
>
> Navigation: [Paper Brief Index](README.md) · [Paper 10Q Index](../../10q/papers/README.md)

**[A semi-analytical model predicting thermal performance of ultra-thin vapor chambers](https://doi.org/10.1016/j.applthermaleng.2026.130498)** — Seokkan Ki, Duhyeon Lee, Junsang Kim *et al.*, Youngsuk Nam — *Applied Thermal Engineering*, 2026.

**Review status:** PUBLISHER ABSTRACT / DECISION-RELEVANT MODEL REVIEW.

## Why this paper matters here

Round 7 needs a quantitative guard against a common transfer mistake: making the wick/surface thinner or more structured while silently consuming the vapor-core flow budget.

## Public source facts

- target application: ultra-thin vapor chambers for mobile electronics;
- model explicitly predicts liquid and vapor pressure-drop contributions and Qmax;
- below about 150 μm vapor-core thickness, temperature-dependent vapor-density effects materially affect predicted vapor pressure drop;
- in the reported local-hotspot model, increasing vapor-core thickness from 50 μm to 90 μm increased Qmax by about 5.3× for a mesh wick;
- at the same footprint, a hybrid wick further increased Qmax to about 4.84 W;
- as vapor-core thickness fell from 250 μm to 70 μm, vapor-flow resistance became a much larger share of total thermal resistance;
- permeability and minimum pore radius were analyzed as separable design variables rather than one coupled wick metric.

## Project interpretation

This supports three Round-7 rules:
1. do not judge phone fit only by total VC thickness;
2. preserve vapor-flow clearance as a first-class metric;
3. do not homothetically shrink a wick and assume capillary improvement automatically compensates permeability loss.

## What it does NOT prove

- 150 μm is not a universal product minimum;
- the 5.3× Qmax change is model/geometry specific;
- it does not validate any Russian surface or wick;
- it does not replace partner/as-built or experiment evidence.

**Decision use:** quantitative transfer-envelope benchmark / geometry guardrail.