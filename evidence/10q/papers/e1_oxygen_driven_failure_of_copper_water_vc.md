# E1 — Oxygen-driven failure of copper-water VC

> **10Q card:** E1 · **Evidence class:** Paper · **Track:** E. China VC reliability comparators
>
> Navigation: [Paper 10Q Index](README.md) · [10Q Method](../../mobile_thermal_insight_10q_method.md)

**[Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619)** — Xiaojun Guo, Yong Li, Wenjie Zhou, Rui Tang, Yue Tian, Ang Gao, Yang Yang — *Applied Thermal Engineering*, 2025.

**Review status:** PUBLISHER ABSTRACT/SUMMARY + DECISION REVIEW.

### Q1 — problem + mobile/chip mapping
How can a sealed copper-water VC lose thermal performance even when shell, seal and visible wick structure remain intact?

This maps directly to phone VC reliability because a chemically aged wick can fail before an obvious mechanical defect appears.

### Q2 — novelty vs strong baseline
For this project the novelty is not "VC reliability exists." It is a **mechanistic link from oxygen -> wick oxidation -> wetting reversal -> capillary collapse -> evaporation resistance increase** in a product-relevant copper-water system.

### Q3 — falsifiable hypothesis
> residual/internal oxygen can chemically age the copper wick enough to reverse wetting/capillary behavior and drive thermal failure without gross structural damage.

### Q4 — lineage
SCUT / Yong Li line:
ultra-thin heat pipe/VC design
→ vacuum/process studies
→ flexible/bent UTVC
→ failure mechanism
→ service-life prediction.

Industry-linked coauthors include China Mobile / Lenovo in the wider reliability line.

### Q5 — actual control variable
- copper-water sealed VC;
- oxygen level / oxidation state;
- wick-surface composition;
- wettability/capillary pressure;
- vacuum process quality.

### Q6 — experiment design
Normal and failed VCs are compared while checking:
- shell flatness / leakage / visible structure;
- wick surface composition;
- wetting/capillary state;
- thermal performance.

### Q7 — quantitative evidence + reproducibility
Public summary:
- wick oxygen fraction in failed devices increases by about **3 percentage points**;
- copper fraction decreases by about **3 percentage points**;
- wick transitions from hydrophilic toward hydrophobic;
- capillary pressure moves from positive toward negative.

Reproducibility is **MEDIUM-HIGH conceptually**, but exact production process details remain device-specific.

### Q8 — what it proves / does not prove
Proves:
- China has product-relevant VC chemical-aging/failure-mechanism research;
- vacuum/process oxygen control can be a first-order reliability variable.

Does not prove:
- equivalence to MPEI's hierarchical-surface aging;
- 42-month actual operation;
- phone-specific 0.3–0.4 mm VC lifetime.

### Q9 — contribution + partner/IP control point
For our project this is primarily a **comparator/control-point correction**:
surface reliability must include chemistry/vacuum state, not only morphology and thermal cycling.

Potential internal control points:
- oxygen budget;
- surface-state retention after degassing/sealing;
- capillary-pressure retention metric.

### Q10 — next action / PoC / kill
Use this paper to strengthen the MPEI Stage-0 process gate:
- XPS/EDS or equivalent surface chemistry before/after process/cycling;
- wetting/capillary change;
- vacuum-process record.

**Decision:** **PROMOTE AS DECISION-GRADE CHINA RELIABILITY COMPARATOR.**

---
