# PoC Test Matrix v0.1

## Purpose
Provide one common bench so different cooling concepts cannot win by choosing favorable test conditions.

## Common thermal board

### Geometry
- phone-sized aluminum / composite chassis surrogate
- replaceable thermal stack
- configurable skin-side plates

### Heat sources
Five programmable heater zones:
1. CPU
2. GPU/NPU
3. camera/ISP
4. modem/RF
5. PMIC/charging

### Workload profiles
- 8 W steady
- 15 W steady
- 25 W 60–180 s burst
- alternating hotspot profile
- concurrent multi-source profile

## Environment
- 20°C
- 25°C
- 35°C ambient

Orientations:
- face up
- face down
- portrait
- landscape
- adverse gravity orientation

## Measurements

### Thermal
- heater junction proxies
- chassis internal map
- front/back skin map
- high-contact-zone sensors
- IR thermal imaging

### Power
- heater power
- cooling actuator power
- controller power

### Flow
- pressure-flow curve where applicable
- pump flow
- liquid inventory

### Acoustic
- overall SPL
- spectrum
- tonal prominence
- vibration

### Reliability
- startup success
- 100 h continuous
- 500 on/off cycles
- repeated orientation cycling

## Common reporting

Every prototype reports:
- thickness
- volume
- mass
- BOM proxy
- assembly complexity
- required openings / seals
- working fluid
- orientation dependence
- cooling power
- acoustic result
- peak skin temperature
- sustained heat limit

## Decision plots

Use at least:
1. sustained heat load vs skin temperature
2. thermal resistance vs cooling power
3. thermal performance vs module volume
4. thermal performance vs tonal prominence/noise
5. performance stability vs orientation
6. degradation vs operating cycles

## Why this matters

The purpose is to prevent misleading comparisons such as:
- comparing free-air fan flow against installed liquid cooling;
- comparing a high-power laboratory pump against a passive phone device;
- claiming temperature reduction without counting cooling electrical power;
- ignoring skin temperature while improving only hotspot temperature.
