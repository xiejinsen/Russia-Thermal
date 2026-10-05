# F1 — POD + wavelet beamforming for cooling-fan source imaging

> **10Q card:** F1 · **Evidence class:** Paper · **Track:** F. China electronics cooling-fan aeroacoustic comparators
>
> Navigation: [Paper 10Q Index](README.md) · [10Q Method](../../mobile_thermal_insight_10q_method.md)

**[Experimental Analysis of Cooling Fan Noise by Wavelet-Based Beamforming and Proper Orthogonal Decomposition](https://doi.org/10.1109/ACCESS.2020.3006483)** — Sicong Liang, Wangqiao Chen, Rhea P. Liem, Xun Huang — *IEEE Access*, 2020.

**Review status:** OPEN-ACCESS / TECHNICAL REVIEW.

### Q1
Problem:
small fan acoustic sources are hard to localize/separate with conventional array beamforming.

Mobile mapping:
phone microfans have even smaller apertures, higher rpm and stronger installed-condition coupling, making source separation difficult.

### Q2
Novelty:
combines wavelet beamforming with POD specifically demonstrated on a practical electronics cooling fan.

For our Russia comparison this closes the claim that advanced cooling-fan acoustic source imaging is absent in China.

### Q3
Hypothesis:
> modal decomposition of beamformed acoustic images can separate physically distinct cooling-fan source contributions better than conventional time-averaged imaging.

### Q4
Capability lineage:
PKU/HKUST aeroacoustic/acoustic-imaging work around wavelet beamforming and rotating sources.

### Q5
Control variables:
- fan rpm;
- frequency / BPF and harmonics;
- subharmonics;
- broadband/high-frequency turbulence noise;
- acoustic-image modes.

### Q6
Public setup:
- AMD Wraith Prism CPU fan;
- **D = 90 mm**;
- 2650 / 3960 rpm;
- anechoic/half-anechoic acoustic measurement;
- microphone array;
- wavelet beamforming + POD.

### Q7
Quantitative/reproducibility
The open paper reports clear spectra/source imaging and discusses BPF, subharmonic and high-frequency components.

External reproducibility:
**HIGH-MEDIUM**, because the signal-processing method and test architecture are public.

### Q8
Proves:
- Chinese academia has cooling-fan source-imaging capability.

Does not prove:
- direct smartphone-scale microfan source diagnosis;
- confined centrifugal fan at ~20k rpm;
- equal-cooling acoustic optimization.

### Q9
Implication
Russian aeroacoustic differentiation must be narrowed to:
- much smaller fan scale;
- confined ducts;
- installed tonal/source interaction;
- possibly psychoacoustic/user-perception constraints.

### Q10
Smallest comparison:
same ~18–25 mm phone-class centrifugal fan in identical duct/impedance condition, tested with a Chinese baseline method and Russian method.

Success for Russia collaboration:
- materially better source attribution or design guidance at same test cost/time;
- identifies a controllable noise mechanism not captured by domestic baseline.

Kill:
- domestic method resolves the same source modes equally well.

**Decision:** **PROMOTE AS COMPARATOR; DOWNGRADE broad Russia aeroacoustic differentiation.**

---
