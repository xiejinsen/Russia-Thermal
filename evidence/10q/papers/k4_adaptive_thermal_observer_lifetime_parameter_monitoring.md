# K4 — Adaptive thermal observer for lifetime-varying parameters

> **10Q card:** K4 · **Evidence class:** Paper · **Track:** K. Round-9 observability

**[Real-Time Monitoring of Thermal Response and Life-Time Varying Parameters in Power Modules](https://doi.org/10.1109/TIA.2020.3001524)** — van der Broeck, Polom, Lorenz, De Doncker — 2020.

### Q1
Can a real-time observer combine sparse temperature sensing and an electrothermal model to estimate changing thermal parameters during normal operation?

### Q2
Decision relevance:
moves condition monitoring from passive thresholding toward adaptive state/parameter estimation.

### Q3
> Small-signal excitation plus an adaptive thermal observer can identify lifetime-varying thermal impedance and separate degradation effects without stopping normal operation.

### Q4
Competing route:
offline calibration or destructive reliability inspection.

### Q5
- temperature sensors;
- electrothermal model;
- adaptive parameter estimator;
- small-signal loss excitation;
- frequency-dependent thermal impedance.

### Q6
Observer + system-identification workflow applied to power modules.

### Q7
Strong embedded-monitoring analogy; hardware and failure physics differ from a phone VC.

### Q8
Proves:
practical online thermal system identification is possible in electronics.

Does not prove:
the same method can identify two-phase liquid inventory or dryout state.

### Q9
Supports an internally owned observer layer that can ingest partner-derived failure labels without giving away product control.

### Q10
Translate into a smartphone telemetry / excitation budget and compare against a no-special-state RC baseline.

**Decision:** KEEP / OBSERVER ARCHITECTURE ENABLER.

Evidence maturity: SYSTEM_VALUE in power electronics; STRUCTURAL_SIGNAL for phone VC  
Decision impact: strengthens internal control-loop feasibility  
Open question: excitation budget, sensor bandwidth, model mismatch  
Primary source: DOI above
