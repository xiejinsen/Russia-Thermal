# Round 9 — Dryout-Margin / Thermal-Health Observability — 2026-10-05

Status: **CLOSED AS FOCUSED DESK-RESEARCH ROUND**

Constraint:
- no direct Russian-university outreach;
- no physical experiment.

## Question

Can a phone-relevant system infer approach to dryout or thermal-health degradation from practical power / temperature observables strongly enough to create a useful control variable?

## Evidence added

- Baraya / Weibel / Garimella 2020 transient dryout temperature signatures;
- Baraya / Weibel / Garimella 2025 wick-saturation transient model;
- Martin et al. 2024 transient thermal-impedance condition monitoring;
- van der Broeck et al. 2020 adaptive thermal observer / in-situ identification;
- Android official thermal-headroom semantics;
- existing Pavlenko 2026 and MPEI 42-month evidence reused rather than duplicated.

## Main result

**KEEP / NARROW.**

Keep:
- Failure-Aware / Health-Aware architecture;
- transient response as a health observable;
- Pavlenko as failure-label / mechanism source;
- MPEI as aging-state source;
- internally owned observer / controller.

Narrow:
- absolute "remaining dryout margin" -> **estimated dryout-risk / time-to-dryout state under a calibrated model**;
- "surface-health sensor" -> **hidden-state estimator from dynamic thermal response**.

Kill:
- ordinary Android/device thermal headroom as a proxy for internal VC dryout margin;
- product dependence on IR / optical / direct saturation sensing.

## New hypothesis

**Opportunistic thermal system identification:**
use controlled or naturally occurring workload transitions to identify lifetime drift in the phone power->temperature transfer function.

## Evidence maturity

Architecture observability:
**STRUCTURAL_SIGNAL -> stronger PRE-PoC architecture hypothesis.**

No change to:
- public desk research: ~98%;
- overall research + validation: ~94%.

Reason:
no partner-returned data and no physical correlation between phone telemetry and hidden two-phase state.

## Current authority

[Round 9 observability synthesis](../../08_opportunities-transfer/dryout_thermal_health_observability_round9_v01.md)

## Next

**Round 10 — Observability Identifiability & Controller Falsification**

Test whether two-phase-specific state can be distinguished from a strong generic thermal RC / package-aging baseline using a practical phone telemetry and excitation budget.
