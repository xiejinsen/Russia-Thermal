# AH. Round 9 — Dryout / Thermal-Health Observability Evidence — 2026-10-05

## Role

Focused provenance module for Round 9. This is not a new broad-search stream.

## Primary / official sources

1. **Heat pipe dryout and temperature hysteresis in response to transient heat pulses exceeding the capillary limit** — K. Baraya, J.A. Weibel, S.V. Garimella — *International Journal of Heat and Mass Transfer*, 2020.  
   https://doi.org/10.1016/j.ijheatmasstransfer.2019.119135  
   Decision use: temperature signatures, time-to-dryout, thermal hysteresis.

2. **Transient recovery from heat pipe dryout by power throttling** — K. Baraya, J.A. Weibel, S.V. Garimella — *International Journal of Heat and Mass Transfer*, 2024.  
   https://doi.org/10.1016/j.ijheatmasstransfer.2023.125104  
   Decision use: time-to-rewet, recovery power/time dependence.

3. **A transient heat pipe model considering wick saturation effects that predicts dynamic evaporator dryout and recovery** — K. Baraya, J.A. Weibel, S.V. Garimella — *International Journal of Heat and Mass Transfer*, 2025.  
   https://doi.org/10.1016/j.ijheatmasstransfer.2025.126837  
   Decision use: latent wick-saturation state, predictive time-to-dryout / time-to-rewet model.

4. **Online Condition Monitoring Methodology for Power Electronics Package Reliability Assessment** — Henry A. Martin, Edsger C.P. Smits, René H. Poelma, W.D. van Driel, GuoQi Zhang — *IEEE Transactions on Power Electronics*, 2024.  
   https://doi.org/10.1109/TPEL.2024.3352747  
   Decision use: transient pulse + Zth(t,Tamb) as an online degradation observable.

5. **Real-Time Monitoring of Thermal Response and Life-Time Varying Parameters in Power Modules** — Christoph H. van der Broeck, Timothy A. Polom, Robert D. Lorenz, Rik W. De Doncker — *IEEE Transactions on Industry Applications*, 2020.  
   https://doi.org/10.1109/TIA.2020.3001524  
   Decision use: adaptive thermal observer + in-situ thermal-impedance identification.

6. **Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649** — Anton Surtaev, Ivan Malakhov, Pavel Perminov, Matvey Polovnikov, Aleksandr N. Pavlenko — *International Journal of Heat and Mass Transfer*, 2026.  
   https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855  
   Decision use: Russian dry-spot / crisis ground truth and ML-assisted diagnostic depth.

7. **Android Thermal APIs — thermal headroom** — Android Developers — official platform documentation.  
   https://developer.android.com/ndk/reference/group/thermal  
   Decision use: product precedent for normalized thermal headroom; documentation states headroom tracks slow-moving sensors such as skin temperature and severe-throttling proximity.

## Scope interpretation

- Sources 1–3 are the closest public evidence that dryout/recovery can produce a dynamic temperature signature and that latent wick state can be modeled.
- Sources 4–5 are **method analogies**, not two-phase-phone proof.
- Source 6 supplies Russian laboratory ground truth, not a phone sensor solution.
- Source 7 shows an existing phone-level headroom abstraction, not internal VC-state observability.
