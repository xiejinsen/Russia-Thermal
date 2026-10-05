# M1 — Transient heat-pipe dryout temperature signature

**[Heat pipe dryout and temperature hysteresis in response to transient heat pulses exceeding the capillary limit](https://doi.org/10.1016/j.ijheatmasstransfer.2019.119135)** — K. Baraya, J.A. Weibel, S.V. Garimella — *International Journal of Heat and Mass Transfer*, 2020.

## Background
Electronics workloads are transient; short power bursts can exceed a heat pipe's steady capillary limit without immediately causing dryout.

## Technical method
Controlled power pulses were applied above the steady capillary limit while temperature response and recovery were measured.

## Main conclusion
Dryout has a characteristic time-to-dryout, produces identifiable temperature signatures, and can create post-event thermal hysteresis.

## What this changes for this project
A phone thermal controller should not reason only from instantaneous temperature or steady TDP. Workload duration, recovery and thermal history may contain two-phase failure information.

## Boundary
The paper does not prove that sparse phone sensors can predict dryout before it happens in a sub-mm vapor chamber.
