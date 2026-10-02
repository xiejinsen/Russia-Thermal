# SPbU Smartphone DVFS / Software Thermal-Adjacent Line

Status: real mobile-software capability found; direct thermal-aware active-cooling research not yet established.

## Core 2023 paper

M. Pelogeiko, S. Sartasov, O. Granichin:
**On Stochastic Optimization for Smartphone CPU Energy Consumption Decrease**
Informatics and Automation 22(5), 2023.

DOI:
https://doi.org/10.15622/ia.22.5.3

Primary / journal:
https://journals.rcsi.science/2713-3192/article/view/265828

Affiliation:
- St. Petersburg State University
- O. Granichin also linked with Institute for Problems in Mechanical Engineering.

## What they actually did

The work studies Android smartphone CPU energy optimization through:
- DVFS;
- SPSA stochastic optimization;
- heterogeneous CPU scheduling context;
- Android Energy-Aware Scheduling (EAS);
- online frequency selection;
- hardware frequency-change latency.

The paper reports experiments on actual Android-phone behavior and discusses Xiaomi Redmi Note 8 Pro CPU frequency transition behavior.

This is more relevant than a generic control-theory paper because it touches:
- Android OS;
- ARM heterogeneous CPU architecture;
- DVFS;
- EAS;
- real smartphone energy measurement.

## Research lineage

Earlier related work:
**Dynamic Voltage-Frequency Optimization using Simultaneous Perturbation Stochastic Approximation**
IEEE CDC 2021.
DOI:
https://doi.org/10.1109/CDC45484.2021.9683064

The 2023 paper explicitly extends this line.

SPbU portal:
https://pureportal.spbu.ru/en/publications/on-stochastic-optimization-for-smartphone-cpu-energy-consumption-decrease%28ec5b4e2c-c537-483f-a193-343f464dfb7f%29.html

## Important limitation

The objective is mainly **energy / performance optimization**, not:
- predicting skin temperature;
- hotspot migration;
- fan/pump control;
- active-cooling co-optimization;
- thermal comfort.

Therefore this is **thermal-adjacent**, not yet a proven smartphone thermal-control lab.

## Potential collaboration bridge

Hypothesis:

> Combine SPbU's online stochastic DVFS optimization with a predictive thermal model and an active cooling actuator.

Possible control vector:
```
CPU/GPU/NPU placement
+ DVFS
+ task scheduling
+ pump/fan setpoint
```

Objective:
```
maximize sustained workload utility
subject to:
skin temperature
junction temperature
cooling power
noise
battery energy
```

## Research questions

1. Can SPSA adapt online to phone-to-phone thermal parameter variation without an expensive calibrated model?
2. Can it optimize a multi-actuator system rather than CPU frequency alone?
3. Can the optimizer use thermal prediction / workload forecast?
4. Is convergence fast enough under gaming/camera/AI workload transitions?
5. Can it reduce peak fan/pump activation and therefore acoustic annoyance?

## Team-status caution

SPbU portal marks Stanislav Sartasov as former/expired affiliation on a current profile page.

Therefore current personnel continuity must be re-verified before this becomes a collaboration target.

## Current classification

**Capability:** Android DVFS / stochastic online optimization  
**Mobile relevance:** high  
**Thermal specificity:** medium-low  
**Collaboration maturity:** exploratory
