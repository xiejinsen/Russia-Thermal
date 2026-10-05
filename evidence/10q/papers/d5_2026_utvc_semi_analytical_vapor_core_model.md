# D5 — 2026 UTVC semi-analytical vapor-core / wick trade-off model

> **10Q card:** D5 · **Evidence class:** Paper · **Track:** D. China / global strong UTVC benchmark
>
> Navigation: [Paper 10Q Index](README.md) · [10Q Method](../../mobile_thermal_insight_10q_method.md)

**[A semi-analytical model predicting thermal performance of ultra-thin vapor chambers](https://doi.org/10.1016/j.applthermaleng.2026.130498)** — Seokkan Ki, Duhyeon Lee, Junsang Kim *et al.*, Youngsuk Nam — *Applied Thermal Engineering*, 2026.

### Q1 — problem + target mapping
Predict the performance ceiling of extremely thin vapor chambers when both liquid-return and vapor-flow pressure drops become highly geometry sensitive.

Direct target mapping: mobile electronics / UTVC.

### Q2 — novelty / relevance
The model treats vapor-property variation explicitly and separates wick permeability K from minimum capillary pore radius rc,min.

That separation is highly relevant to Russia-Thermal because Pavlenko and MPEI transfer concepts both risk improving capillary pressure while degrading permeability or vapor space.

### Q3 — falsifiable hypothesis
At extreme vapor-core confinement, constant-property / simple scaling models materially mis-predict vapor pressure drop and Qmax.

### Q4 — lineage / comparator
Use as a modern global comparator against any Russian transfer thesis that assumes the 0.2 mm-class internal volume can be filled with additional structure without a vapor-flow penalty.

### Q5 — mechanism / control point
Key controls:
- vapor-core thickness tv;
- wick permeability K;
- minimum pore radius rc,min;
- footprint / travel distance;
- cooling boundary.

### Q6 — quantitative results
- below ~150 μm tv, variable vapor density changes predicted vapor pressure drop by >10% versus the simpler model;
- 50→90 μm tv produced about 5.3× Qmax increase for the reported mesh-wick local-hotspot case;
- hybrid wick at the same footprint reached about 4.84 W in the cited model case;
- decreasing tv from 250→70 μm greatly increased the share of resistance associated with vapor flow.

### Q7 — data/model maturity
Semi-analytical model validated by regression / comparison with numerical and experimental datasets according to the paper.

Project use is comparative / screening, not product prediction.

### Q8 — evidence vs inference
**Evidence:** very-thin vapor cores create strong nonlinear flow-resistance sensitivity.

**Project inference:** Round-7 routes should preserve a vapor-space guard band and report peak feature intrusion, not only average roughness or coating thickness.

### Q9 — project decision impact
Raises the penalty for:
- Pavlenko routes that use 100–220 μm mesh directly;
- TPU regimes with extreme peak relief;
- any design that claims 'fits in 0.4 mm' while leaving very little clear vapor path.

For MPEI, groove depth and shell integration matter more than the 5–15 μm nanoparticle layer itself.

### Q10 — next action
Use this paper in the Round-7 quantitative transfer envelope.

Do not convert its ~150 μm transition or 5.3× result into a universal hard product specification.

**Decision:** KEEP AS KEY GLOBAL GEOMETRY / FLOW BENCHMARK.