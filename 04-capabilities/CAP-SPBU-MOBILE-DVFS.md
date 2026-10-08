# CAP-SPBU-MOBILE-DVFS

record_state: CURRENT
actor_id: ACT-SPBU-STOCHASTIC-LAB
key_people:
- PERSON-GRANICHIN
maturity: RESEARCH_ASSET
evidence_confidence: HIGH
target_fit: BACKGROUND
assessed_at: 2026-10-06
platform_transfer:
- SMARTPHONE=DIRECT
- TABLET=TRANSFERABLE
capability_family: SOFTWARE_SYSTEM
capability_topics:
- DVFS

Capability statement:
SPbU has real Android smartphone DVFS / stochastic online CPU energy-optimization capability.

evidence_claims:
- CLM-DVFS-001

Transfer boundary:
thermal-aware, skin-temperature, pump/fan or multi-actuator control remains unproven.

Original publication-time affiliation and actual method: [2023 *Informatics and Automation* 22(5):1004-1033](https://doi.org/10.15622/ia.22.5.3), Pelogeiko / Sartasov / Granichin at SPbU, two-noisy-measurement SPSA stochastic perturbation to adjust Android CPU DVFS frequency for **energy use**. Official SPbU [stochastic computing lab](https://oops.math.spbu.ru/SE/stochastic-laboratory?set_language=ru) names Granichin current head. No measured direct junction/skin temperature constraint, NPU coordination or thermal-aware DVFS gain. Keep software LIMITED_SCAN.
