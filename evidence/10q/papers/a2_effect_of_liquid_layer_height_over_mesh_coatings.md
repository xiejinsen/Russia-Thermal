# A2 — Effect of liquid-layer height over mesh coatings

> **10Q card:** A2 · **Evidence class:** Paper · **Track:** A. Pavlenko / Kutateladze
>
> Navigation: [Paper 10Q Index](README.md) · [10Q Method](../../mobile_thermal_insight_10q_method.md)

**[Effect of Layer Height on Heat Transfer during Boiling of Dielectric Liquid on Mesh Coatings](https://doi.org/10.1134/S0040601525700454)** — D.A. Shvetsov, V.I. Zhukov, A.N. Pavlenko — *Thermal Engineering*, 2025.

**Review status:** ABSTRACT + TECHNICAL METADATA REVIEW.

### Q1
Problem:
how liquid inventory / layer height interacts with mesh geometry during dielectric-fluid boiling.

Mobile mapping:
a phone VC is an extreme low-inventory confinement case.

### Q2
The paper is not novel because it uses “mesh boiling”; its value is the **confinement / liquid-height sensitivity**.

### Q3
**Analyst reconstruction:**
> boiling performance on a mesh is strongly coupled to liquid depth and mesh scale; a surface result measured in deep liquid cannot be assumed to survive thin confinement.

### Q4
Same Pavlenko/Shvetsov line; reinforces partner expertise in boundary-condition sensitivity.

### Q5
Control variables:
- HFE-7100 layer height;
- stainless mesh geometry;
- wire/cell dimensions.

Publicly recovered examples include ~100 μm and ~220 μm wire classes.

### Q6
Boiling curves are compared across different liquid heights and mesh geometries.

Important limitation:
the tested confinement is still much larger than the ~0.2 mm internal channel of a strong UTVC reference.

### Q7
Quantitative value for our project is primarily **geometry evidence**, not a headline HTC number.

Reproducibility:
MEDIUM for geometry interpretation; LOW for direct phone transfer.

### Q8
The evidence strongly supports:
- liquid height and mesh geometry matter.

It does not support:
- direct use of the demonstrated mesh in a 0.4 mm VC.

### Q9
Real contribution to our insight:
**falsification of naive geometry transfer.**

### Q10
Mobile transfer:
HIGH as a constraint, LOW as a direct solution.

Smallest next PoC:
repeat the surface mechanism on a ~60–100 μm structure under ~0.2 mm-class confinement.

Kill:
if the mechanism requires wire/pores comparable to the whole vapor channel.

Decision:
**KEEP — geometry-transfer gate.**

---
