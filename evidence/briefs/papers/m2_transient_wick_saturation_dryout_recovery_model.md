# M2 — Transient wick-saturation dryout / recovery model

**[A transient heat pipe model considering wick saturation effects that predicts dynamic evaporator dryout and recovery](https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837)** — K. Baraya, J.A. Weibel, S.V. Garimella — *International Journal of Heat and Mass Transfer*, 2025.

## Background
Temperature signatures show when dryout/recovery occurs, but a product architecture needs a state model that explains why.

## Technical method
A transient physics model represents a partially saturated wick with spatially and temporally varying liquid saturation coupled to wall, wick and vapor-core transport.

## Main conclusion
The model predicts key dryout/recovery timing, including time-to-dryout and time-to-rewet, across multiple heat-pipe samples.

## What this changes for this project
It supplies a physically meaningful hidden state for a future estimator. The key unsolved problem becomes **observability from sparse phone signals**, not whether a hidden two-phase state exists.

## Boundary
Predictability with a calibrated physics model does not prove identifiability from phone telemetry.
