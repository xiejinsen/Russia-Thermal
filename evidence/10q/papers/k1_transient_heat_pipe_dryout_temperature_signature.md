# K1 — Transient heat-pipe dryout temperature signature

> **10Q card:** K1 · **Evidence class:** Paper · **Track:** K. Round-9 observability

**[Heat pipe dryout and temperature hysteresis in response to transient heat pulses exceeding the capillary limit](https://doi.org/10.1016/j.ijheatmasstransfer.2019.119135)** — Baraya, Weibel, Garimella — 2020.

### Q1 — problem + target mapping
Can a heat pipe briefly exceed its steady capillary limit, and can dryout be recognized from its transient thermal response?

Phone mapping: high at workload-transient level; indirect on geometry.

### Q2 — novelty / regime relevance
The important contribution is not another steady capillary-limit measurement. It explicitly characterizes pulse-load dryout and post-dryout hysteresis.

### Q3 — falsifiable hypothesis
> Pulse duration above the steady capillary limit has a characteristic time-to-dryout, and dryout leaves a detectable temperature signature and hysteresis.

### Q4 — competing route
Conventional protection uses steady-state limits / temperature thresholds. This paper shows history and pulse duration matter.

### Q5 — control point
- power amplitude;
- pulse duration;
- baseline load;
- evaporator temperature response;
- capillary limit;
- recovery power.

### Q6 — experiment
Controlled transient power pulses above the measured capillary limit on heat-pipe samples.

### Q7 — reproducibility
Strong controlled experiment; device geometry is not phone UTVC geometry.

### Q8 — evidence vs hypothesis
Measured:
- detectable temperature signature at dryout;
- time-to-dryout behavior;
- thermal hysteresis after dryout.

Not proven:
- reliable pre-dryout prediction from ordinary phone sensors;
- transfer to <0.5 mm VC.

### Q9 — decision contribution
Upgrades transient temperature history from a weak heuristic to a serious observability candidate.

### Q10 — next action
Use as the ground-truth pattern for a future phone-scale pulse-response identification test.

**Decision:** KEEP / PRIMARY OBSERVABILITY EVIDENCE.

Evidence maturity: SYSTEM_VALUE for heat-pipe dynamics; STRUCTURAL_SIGNAL for phone estimator  
Decision impact: supports C1 dynamic dryout-risk state  
Open questions: geometry transfer, sensor bandwidth, false positives under generic thermal saturation  
Primary source: DOI above
