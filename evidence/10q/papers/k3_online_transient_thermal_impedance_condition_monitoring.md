# K3 — Online transient thermal-impedance condition monitoring

> **10Q card:** K3 · **Evidence class:** Paper · **Track:** K. Round-9 observability

**[Online Condition Monitoring Methodology for Power Electronics Package Reliability Assessment](https://doi.org/10.1109/TPEL.2024.3352747)** — Martin, Smits, Poelma, van Driel, Zhang — 2024.

### Q1
Can hidden thermal-path degradation be detected online from a bounded heat pulse and temperature response?

Phone mapping:
method-adjacent, not two-phase-specific.

### Q2
The important contribution is use of temperature-dependent transient thermal impedance as an online degradation fingerprint.

### Q3
> A properly chosen transient heat pulse can expose degradation of a selected thermal-path region before relying on destructive inspection.

### Q4
Competing route:
steady Rth / threshold monitoring lacks localization and can miss early degradation.

### Q5
- pulse duration;
- temperature response;
- ambient temperature;
- Zth(t,Tamb);
- region-specific time scales.

### Q6
Thermal test chips monitored during thermomechanical cycling; changes verified by acoustic imaging / cross-section.

### Q7
Strong validation for package degradation.
Transfer to VC capillary state is a hypothesis.

### Q8
Proves:
hidden thermal degradation can be inferred from dynamic input-output behavior.

Does not prove:
wick saturation or wetting degradation has a separable phone telemetry signature.

### Q9
Promotes transient Zth-like identification to a core Round-9 candidate.

### Q10
Use a strong generic thermal-path degradation baseline in every future two-phase-health test.

**Decision:** KEEP / PROMOTE METHOD ANALOGY.

Evidence maturity: SYSTEM_VALUE in package reliability; STRUCTURAL_SIGNAL for VC health  
Decision impact: strengthens C2 thermal-health estimator  
Open question: two-phase-specific identifiability  
Primary source: DOI above
