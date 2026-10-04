# Thermal Technology Map — v0.2

Last reviewed: 2026-10-04

This is the canonical technology taxonomy and current disposition.
Detailed evidence and decision rationale live in Workstreams 05 and 08.

| Technology | Smartphone role | Current Russia signal | Current disposition |
|---|---|---|---|
| Ultra-thin VC / capillary surface | passive spreading + phase change | Pavlenko/Kutateladze dielectric boiling, modified mesh, dryout/rewetting physics | **Tier A, narrowed** |
| Generic VC / graphite / TIM | passive spreading/interfaces | several Russian signals | **not Russia-specific** |
| Loop heat pipe | remote / multi-source routing | Maydanik / ITP Ural | generic miniaturization rejected; routing physics retained |
| Microchannel / boiling | high-flux removal | Kutateladze + adjacent MPEI/TPU | mechanism source; phone integration unproven |
| Film/droplet hybrid | active high-flux removal | Kutateladze long paper/patent lineage | **Tier A- high risk** |
| Synthetic jet | local airflow | Kutateladze | generic route rejected as Russia-specific; benchmark only |
| Piezo/MEMS blower | compact airflow | Russia scan still thin | exploratory |
| Rotary microfan | forced convection | TsAGI/PNRPU/CIAM methods | generic fan rejected; aeroacoustic optimization retained |
| EHD / ionic wind | thin airflow actuation | SPbU electrophysics | exploratory |
| Pumped liquid / microfluidic loop | active transport/removal | Russian fluid/phase-change competence | generic route not differentiated |
| Thermoelectric | local heat pumping | limited Russia signals | low priority |
| Predictive/adaptive control | workload + cooler optimization | SPbU SPSA / Android DVFS | **Tier B+, narrowed** |
| Aeroacoustic optimization | noise-quality improvement | TsAGI / PNRPU / CIAM | **Tier B, narrow** |
| Thermal materials | spreading/interfaces | Skoltech / MISIS / MSU candidates | supporting unless unusual measurable advantage |

## Current key questions

### Tier A surface / wick
Can target-fluid dryout, rewetting and wetting-state retention beat a strong 0.39–0.4 mm-class modern UTVC at the same thickness and fluid budget?

### LHP
Can routing under moving/multiple hotspots create a benefit that a simpler modern VC or Chinese-style ultra-thin LHP cannot?

### Film / droplet
Can a fully closed loop fit phone power, volume, sealing and reliability limits?

### Active airflow
Can Russian aeroacoustic methods improve installed tonal/noise quality at equal useful cooling?

### Control
Can model-light online adaptation outperform a calibrated modern thermal controller under uncertain ambient/case/grip/workload conditions?

## Current authority

For Tier / KEEP / downgrade / rejection decisions, use:
`../08_opportunities-transfer/direction_decision_gate_v01.md`

For evidence:
- `../05_papers-patents/`
- `../07_china-benchmark/`
- `../evidence/source_register.md`

## Refresh trigger

Update this file whenever:
- a generic route is rejected or reframed;
- a new mechanism enters the active portfolio;
- China/global evidence materially changes the baseline;
- a Russia-specific value proposition changes.
