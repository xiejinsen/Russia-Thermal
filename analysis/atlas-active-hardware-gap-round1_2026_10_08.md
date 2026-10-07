# Russia Capability Atlas — Active Hardware Gap Round 1

date: 2026-10-08
status: ROUND_1_CLOSED
scope: Russia active-hardware gap discovery after capability-family taxonomy freeze

## Research question

The pre-Atlas Russia capability baseline contained only 3 ACTIVE_HARDWARE Capability objects.

This round asked:

1. Is there current Russian capability in microfan / MEMS fan / micro air mover / synthetic-jet cooling for compact electronics?
2. Are there additional current Russian nodes in pump-driven liquid / microfluidic active cooling?
3. Are there credible device-oriented solid-state active-cooling nodes worth Atlas onboarding?

Software/system thermal management was intentionally excluded from expansion.

## Result

### New canonical active-hardware node

**Astrakhan State Technical University (ASTU)** is onboarded as an adjacent active electronics-cooling research node.

Current public evidence recovered:
- 2024 microprocessor liquid-cooling modeling / experimental work;
- 2025 experimental transient microprocessor-cooling study;
- Intel Core i7-13700K stress-load experiment;
- distilled-water loop;
- pump;
- microchannel heat exchanger;
- mini refrigeration compressor;
- transient cooling-control analysis.

Canonical objects added:
- ACT-ASTU
- PERSON-ANDREEV-AI-ASTU
- PERSON-SEMENOV-AE-ASTU
- PAPER-RU-ASTU-ACTIVE-001
- PAPER-RU-ASTU-ACTIVE-002
- CLM-ASTU-ACTIVE-001
- CAP-ASTU-ACTIVE-MICROPROCESSOR-COOLING

Classification:
- family: ACTIVE_HARDWARE
- topics: PUMPED_LIQUID / MICROFLUIDIC_COOLING / ACTIVE_FLOW_CONTROL
- target fit: ADJACENT
- portfolio disposition: SUPPORT_ONLY

Boundary:
the system is processor / onboard-computing class, not phone/tablet/wearable scale.
It does not establish acceptable mobile-system volume, acoustic, parasitic-power, mass, reliability or manufacturing behavior.

### MEMS / microfan result

A bounded public search did **not recover a sufficiently strong current Russia-based terminal-class MEMS fan / micro air mover capability** for canonical onboarding.

The search did recover:
- Russian general MEMS fabrication capability;
- aeroacoustic expertise already represented by TsAGI / PNRPU;
- strong non-Russian compact MEMS-air-cooling work.

Do not transform this into:
"Russia has no MEMS-fan capability."

Correct interpretation:
**no decision-grade/current direct Russian compact-electronics MEMS-air-cooling node was recovered in this first bounded pass.**

This remains an explicit coverage gap and can receive one more authority-guided / Russian-language targeted pass.

### Solid-state active cooling

Current Russian thermoelectric signals were recovered, including sustained modeling/material work.

However the first pass did not yet justify a new terminal-device ACTIVE_HARDWARE Capability beyond existing materials/context nodes.

Follow-up candidate:
- ICM SB RAS thermoelectric cooling line / E.N. Vasil'ev and related work.

Required qualification before onboarding:
- current organizational ownership;
- sustained 2024-2026 continuity;
- device/system evidence rather than only modeling;
- credible compact-electronics transfer relevance.

## Atlas state after round

Pre-round Russia baseline:
- PASSIVE_HARDWARE = 11
- ACTIVE_HARDWARE = 3
- ENABLING = 16
- SOFTWARE_SYSTEM = 1
- total = 31

After ASTU onboarding:
- PASSIVE_HARDWARE = 11
- ACTIVE_HARDWARE = 4
- ENABLING = 16
- SOFTWARE_SYSTEM = 1
- total = 32

These are canonical-graph counts, not national capability shares.

## Strategic impact

No Phase-1 Direction or P1/P2/P3 partner decision changes.

ASTU is an Atlas capability expansion, not a new collaboration thesis.

## Next smallest useful step

Continue ACTIVE_HARDWARE gap closure in this order:

1. one deeper Russia/Russian-language pass for compact air movers / microfan / piezoelectric fan / synthetic jet;
2. qualify the ICM thermoelectric-cooling continuity/device boundary;
3. search pump-driven / refrigeration / microfluidic active cooling via Russian thermal/refrigeration engineering venues and university groups;
4. begin platform-transfer tagging for qualified hardware Capabilities.

Keep SOFTWARE_SYSTEM LIMITED_SCAN.
