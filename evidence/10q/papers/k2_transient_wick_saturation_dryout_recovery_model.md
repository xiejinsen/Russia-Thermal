# K2 — Transient wick-saturation model for dryout / recovery

> **10Q card:** K2 · **Evidence class:** Paper · **Track:** K. Round-9 observability

**[A transient heat pipe model considering wick saturation effects that predicts dynamic evaporator dryout and recovery](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837)** — Baraya, Weibel, Garimella — 2025.

### Q1
Can a latent wick liquid-saturation state explain and predict transient dryout and recovery?

### Q2
Decision-relevant novelty:
spatially and temporally varying wick saturation is coupled to wall/wick/vapor thermal response.

### Q3
> A partially saturated wick state is sufficient to predict time-to-dryout, thermal hysteresis and time-to-rewet over representative heat-pipe samples.

### Q4
Competing routes:
pure thermal RC models do not explicitly represent liquid inventory / saturation.

### Q5
- wick saturation;
- wick pressure drop;
- wall conduction;
- thermal capacity;
- vapor-core response;
- pulse / throttling trajectory.

### Q6
Physics model validated against experiments over multiple wick types, lengths and thicknesses.

### Q7
Good mechanistic validation for heat pipes; phone UTVC transfer remains unverified.

### Q8
Proves:
a physically meaningful hidden state can link workload history to dryout/recovery.

Does not prove:
that the state is observable uniquely from sparse phone temperatures.

### Q9
This card creates the key observability question:
**state predictability is not the same as state observability.**

### Q10
Round 10 must test whether sparse temperature/power outputs can identify this latent state better than a generic RC model.

**Decision:** KEEP / MODEL BASELINE.

Evidence maturity: SYSTEM_VALUE for model class; NOT_EVALUABLE for phone identifiability  
Decision impact: narrows "dryout margin" to model-estimated risk/time margin  
Open question: observability under sensor and model uncertainty  
Primary source: DOI above
