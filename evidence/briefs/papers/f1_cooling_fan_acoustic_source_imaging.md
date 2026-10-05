# F1. Cooling-fan acoustic source imaging

> **Brief ID:** F1 · **Track:** F. China — electronics cooling-fan aeroacoustics
>
> Navigation: [Paper Brief Index](README.md) · [Paper 10Q Index](../../10q/papers/README.md)


**[Experimental Analysis of Cooling Fan Noise by Wavelet-Based Beamforming and Proper Orthogonal Decomposition](https://doi.org/10.1109/ACCESS.2020.3006483)** — Sicong Liang, Wangqiao Chen, Rhea P. Liem, Xun Huang — *IEEE Access*, 2020.

**Review status:** OPEN-ACCESS / TECHNICAL REVIEW.

**Background / problem**  
Acoustic-source imaging becomes difficult as cooling fans become small and their important tones/high-frequency sources approach array-resolution limits.

**Technical method**  
A practical CPU cooling fan is measured in an anechoic environment. The authors combine wavelet-based beamforming with proper orthogonal decomposition (POD) to separate acoustic-image modes. The public experiment uses a **90 mm** AMD CPU fan at 2650 and 3960 rpm.

**Main conclusion**  
The method can decompose cooling-fan acoustic source modes and improve interpretation beyond conventional beamforming. The measured spectra include BPF/harmonics, subharmonic tones and broadband/high-frequency turbulence contributions.

**What we learn for our insight**  
China already has academic capability in **cooling-fan source imaging and modal decomposition**, so Russian aeroacoustic methods are not unique at category level.

But this test is still much larger/slower than a phone internal centrifugal fan. The phone-scale problem remains:
- ~18–25 mm class;
- ~20k rpm;
- highly confined inlet/outlet;
- close structural/acoustic coupling.

**Mobile relevance:** MEDIUM comparator; strong method relevance, weak direct phone-size match.

---
