# M4 — Adaptive thermal observer for lifetime-varying parameters

**[Real-Time Monitoring of Thermal Response and Life-Time Varying Parameters in Power Modules](https://doi.org/10.1109/TIA.2020.3001524)** — Christoph H. van der Broeck, Timothy A. Polom, Robert D. Lorenz, Rik W. De Doncker — *IEEE Transactions on Industry Applications*, 2020.

## Background
Online reliability control needs internal thermal state estimates from limited measurements rather than full lab instrumentation.

## Technical method
Temperature sensing, electrothermal modeling, an adaptive observer and small-signal excitation are combined to estimate thermal response and lifetime-varying parameters.

## Main conclusion
Thermal state / parameter monitoring can run during normal operation and provide information beyond a simple temperature threshold.

## What this changes for this project
It supports an internally owned observer layer into which Pavlenko failure labels and MPEI aging knowledge could later be translated.

## Boundary
The demonstrated system is power electronics, not a phone vapor chamber; two-phase-state identifiability remains open.
