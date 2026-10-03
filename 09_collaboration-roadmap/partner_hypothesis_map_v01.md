# Partner-to-Hypothesis Matching v0.2

Last updated: 2026-10-03

Status: provisional matching, not final collaboration recommendation.

| Hypothesis | Russian partner | Russian contribution | China / our-side complement | Immediate gate | State |
|---|---|---|---|---|---|
| Sub-mm phase-change surface | Kutateladze — Pavlenko line | dielectric boiling, CHF, porous/modified surfaces | sub-mm VC manufacturing, reliability, phone integration | Beat modern composite/wettability-engineered UTVC at fixed thickness | **Tier A** |
| Sealed adaptive film/droplet hybrid | Kutateladze — Kabov/Kochkin/Chinnov | gas-liquid film/droplet physics, channel instability, long patent lineage | miniaturized pump/actuator, package, VC, control, manufacturing | Close full loop within phone-class power/volume budget | **Tier A-** |
| Compute + cooling adaptive control | SPbU stochastic optimization line | SPSA / model-light online adaptation | Android hooks, thermal prediction, NPU/GPU control, fan/pump | Beat calibrated MPC/RL under boundary-condition changes | **Tier B+** |
| Multi-hotspot heat routing | ITP UB RAS — Maydanik/Chernysheva/Vershinin | LHP operating limits, capillary routing, multi-source experience | sub-mm fabrication, phone integration | Beat VC / Chinese UTLHP under moving hotspots | **Tier B** |
| Confined microfan aeroacoustics | TsAGI / PNRPU / CIAM | source physics, arrays, tonal/active control | phone blower/duct, UX metrics, product integration | Reduce tonal prominence at equal pressure-flow/power/volume | **Tier B** |

## Current preferred first PoC

### Phase-change surface PoC
Why first:
- smallest integration scope;
- shortest experimental loop;
- easy A/B comparison;
- directly exploits Russian surface physics and Chinese device manufacturing;
- avoids pump, sealing and acoustic confounders.

Russia side:
- surface selection;
- boiling / rewetting model;
- coating / microstructure parameters;
- dryout physics.

Our / China side:
- 0.3–0.5 mm VC baseline;
- manufacturing;
- standard heater / phone envelope;
- reliability cycling;
- metrology.

### Film/droplet feasibility bench
Run in parallel only as a **system budget study**, not yet a phone prototype.

Required outputs:
- gas flow requirement;
- liquid flow requirement;
- pressure drop;
- actuator power;
- separator/condenser volume;
- fluid inventory;
- 15 W steady / 25 W transient response.

If this budget fails, H1 is downgraded before a costly prototype.
