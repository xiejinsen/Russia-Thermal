# Q08 P1/P2 strongest external alternatives — batch 1

date: 2026-10-09
status: PUBLISHER_ABSTRACT_CHECKED / FIRST_PASS / Q08_OPEN
scope: smartphone-first; no experiments, internal resources assumed, or outreach
decision: P1 conditional primary, P2 reserve, TPU hold UNCHANGED

## Decision comparison

| Lane | External comparator and original link | Reported result under specific rig | What it rules out | Remaining Russia-only hypothesis |
| --- | --- | --- | --- | --- |
| P1 global | [Autonomous and online detection of dry areas on a boiling surface using deep learning and infrared thermometry](https://doi.org/10.1016/j.expthermflusci.2023.110879), Ravichandran, Kossolapov, Aguiar, Phillips, Bucci, Experimental Thermal and Fluid Science 145, 110879 (2023) | High-speed IR and U-Net with LED-phase ground truth; publisher abstract reports at least 90% accuracy on tested surfaces/pressure up to 2 bar, quasi-real-time segmentation | IR/U-Net dry spot segmentation and automated optical labels are not uniquely Russian | Distinct dynamic irreversible failure-mechanism labels which outperform matched existing baselines |
| P1 earlier global | [Automatic detection of bubble dry spots in infrared boiling heat transfer investigations using deep convolution neural networks](https://pure.kaist.ac.kr/en/publications/automatic-detection-of-bubble-dry-spots-in-infrared-boiling-heat-/), Abir, Galib, Seong, Bucci, conference (2019), institutional bibliography | Infrared dry-spot U-Net segmentation was already researched before current Russian work | Cannot claim first use of CNN dry spot recognition | Mechanistic distinction in morphology and irreversible transition, NOT first ML imaging |
| P1 Russia | [Investigation of heat transfer, critical heat flux and dry spots dynamics during boiling of dielectric fluids HFE-7100 and Novec 649](https://doi.org/10.1016/j.ijheatmasstransfer.2025.127855), Surtaev et al., IJHMT (2026), PAPER-RU-DRY-001 | Morphology and persistent dry area near irreversible crisis for tested dielectric pool boiling | Does not itself prove phone-scale VC benefit | Run-level reproducible, independently discriminating mechanism states, if accessible |
| P1 Russia update | [Infrared thermography and internal reflection visualization of the dry spots with machine learning-assisted analysis for elucidating two-phase heat transfer in spray cooling](https://doi.org/10.1016/j.expthermflusci.2026.111738), Surtaev et al., ETFS 175, 111738 (2026) | Publisher abstract confirms IR, internal reflection, ML on thin sapphire spray-boiling rig | Spray cooling is not sealed copper-water phone VC | Additional mechanism diagnostic cases if validated and usable |
| P2 China A | [Experimental study on the failure mechanism of the heat transfer performance under the action of oxygen of a copper–water vapour chamber without structural damage](https://doi.org/10.1016/j.applthermaleng.2025.125619), Guo et al., Applied Thermal Engineering 265,125619 (2025), PAPER-CN-AGE-001 | Publisher reports oxygen-driven wick oxidation, hydrophilic to hydrophobic and weakened capillary transport | Generic capillary degradation does not require Russian lab | Non-oxidative or multi-mechanism field-history contrast |
| P2 China B | [Research on a rapid prediction method for the service life of copper-water vapour chambers](https://doi.org/10.1016/j.applthermaleng.2026.131067), Guo et al., Applied Thermal Engineering (2026), PAPER-CN-AGE-002 | Publisher describes 150–200 C accelerated aging, oxygen-footprint lifetime proxy, reported within-study R2=0.98 and ~8% error | China offers closer material and a claimed prediction method, not only postmortem | Nonredundant latent precursor with time-series, repeats, held-out tests |
| P2 Russia | [Long-term operational stability of a hierarchical evaporator surface in a two-phase thermosyphon](https://doi.org/10.1016/j.pes.2026.100314), N.S. Ivanov, Progress in Engineering Science (2026), PAPER-RU-AGE-001 | 42 months calendar periodic R410A/stainless thermosyphon exposure, post-operation capillary imbibition loss while overall thermal resistance remains relatively stable | Neither 42 months nor an end-state measurement proves online early warning | Independently informative time-course or mechanism dataset if it exists and can be accessed |

## Build-vs-partner falsifiable gates

P1: Benchmark any Russian failure-mode labeling against 2023 MIT-linked IR/U-Net approaches and current internal models using SAME information and disjoint runs. Required: label definitions, raw/time-aligned runs, multiple repeats, rights and genuine model/design-decision gain, not only segmentation IoU. Phone integration must use accessible proxy or offline model calibration; do not invent optical sensors inside sealed VCs.

P2: Compare Russian latent state claims to Chinese copper-water oxygen/wick chemistry and 2026 accelerated-life baseline. Required: intermediate dated time-series (not just 42-month endpoint), controls, repeats, alternate mechanisms, oxygen chemistry controls and held-out predictive incremental value. Distinct fluids, apparatus size, duty cycles and phone geometry prohibit direct numerical life/performance ranking.

Internal-build: INTERNAL team capabilities, owned data, apparatus, engineering time and cost remain UNKNOWN. Internal alternatives are decision scenarios, not asserted facts. Keep device and manufacturing know-how internally owned. External publication does not imply data licensing or collaboration willingness.

## Evidence strength and omissions

New publisher abstracts and institutional article metadata checked 2026-10-09. No full-text independent methods reproduction; no independent replication of 2026 China model performance or 13-year lifetime extrapolation. P1 China-specific same-task strongest original comparator and P2 best global longitudinal study remain gaps. Search for these next before closing Q08. Do not create duplicate canonical Source for existing PAPER-CN-AGE-001/002 or Russian papers. Neither lane is uniquely Russian merely because it publishes the mechanism.

## Q08 checkpoint

Result: COUNTERFACTUAL_BASELINE_ESTABLISHED_WITH_GAPS / NOT_PROVEN_INCREMENTALITY. P1 and P2 portfolio frozen. Next: independent matched China/global alternative check and exact internal fact requirements.
