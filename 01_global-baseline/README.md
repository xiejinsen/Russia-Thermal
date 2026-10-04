# 01 — Global Smartphone Thermal Baseline

Last reviewed: 2026-10-04

## Role

Defines the real smartphone/user/system constraints that every Russian technology must survive.

## Authoritative files

- [Global Smartphone Thermal Baseline](mobile_thermal_baseline.md)
- [Phone Packaging & Teardown Reality Baseline](phone_packaging_teardown_baseline_v01.md)

## Current established constraints

- thermal experience is spatial and time-dependent;
- current flagship phone thickness is roughly 7.9–8.75 mm in representative examples;
- thermal architecture is co-designed with SoC/package, board, battery, VC and frame;
- a modern academic UTVC reference reaches ~0.39 mm total thickness with ~0.2 mm internal steam-channel height;
- active cooling can fit inside a phone but still carries skin-temperature, acoustic, packaging and reliability penalties;
- HFE-7100 is no longer treated as a future product-default fluid after 3M's end-2025 PFAS manufacturing exit.

## Main remaining gaps

1. more independent teardown geometry from Huawei/Chinese flagships;
2. measured sustained SoC/system power for representative workloads;
3. installed active-cooling power/noise measurements;
4. detailed battery/camera/mainboard/VC spatial conflicts;
5. foldable packaging constraints where relevant.

Research assumptions:
../08_opportunities-transfer/smartphone_constraint_model_v01.md

Do not treat internal screening targets as product facts.
