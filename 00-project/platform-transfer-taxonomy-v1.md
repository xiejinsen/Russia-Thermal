# Terminal Transfer Taxonomy v1.0

status: FROZEN
date: 2026-10-08
scope: platform relevance and transfer assessment for thermal Capabilities

## 1. Purpose

Separate:
- what a Capability is;
- where it has been demonstrated;
- where it may reasonably transfer.

Platform transfer is assessed on Capability, not duplicated on every Paper / Patent / Source.

## 2. Platform targets

### SMARTPHONE
Traditional smartphone, foldable phone and closely related handheld phone form factors.

### TABLET
Tablet and large-screen mobile terminal.

### WEARABLE
Smartwatch, wrist wearable, earbuds/ear-worn device and other body-worn compact electronics.

### AR_VR
AR / VR / MR glasses and head-mounted systems.

### LAPTOP
Notebook / ultrabook / portable PC.

### COMPACT_ELECTRONICS
Other compact electronics with relevant size / power / thermal constraints.

### ADJACENT_ELECTRONICS
Electronics whose thermal capability may transfer but whose product constraints differ materially:
- power electronics;
- embedded electronics;
- aerospace electronics;
- industrial electronics.

### FOUNDATIONAL_ONLY
Mechanism / model / method evidence with no responsible platform-transfer claim yet.

## 3. Transfer levels

### DIRECT
Public evidence directly demonstrates the Capability on the target platform.

### NEAR_DIRECT
System geometry, power level, packaging or operating context is close enough that only bounded adaptation is expected.

### TRANSFERABLE
Mechanism or engineering capability is clearly relevant, but meaningful product adaptation is required.

### ADJACENT
Useful technical source / analogy, but transfer distance is substantial.

### FOUNDATIONAL
Primarily mechanism, model or method value.

### NOT_SUPPORTED
Current public evidence is insufficient to make a positive transfer claim.

## 4. Evidence rule

Do not upgrade transfer level based only on plausibility.

Examples:
- aerospace LHP does not automatically become smartphone DIRECT;
- electronics cooling does not automatically become wearable evidence;
- a boiling mechanism paper may support FOUNDATIONAL or TRANSFERABLE relevance without proving a device.

Every DIRECT / NEAR_DIRECT claim should be traceable to explicit product/form-factor evidence.

## 5. Multi-target rule

One Capability may have different levels for different targets.

Example:

`CAP-X`
- SMARTPHONE: TRANSFERABLE
- TABLET: TRANSFERABLE
- AR_VR: NEAR_DIRECT
- LAPTOP: DIRECT

This is expected and should not be collapsed into one generic mobile-fit score.

## 6. Research prioritization

Discovery priority for this project:

1. SMARTPHONE
2. TABLET / WEARABLE
3. AR_VR / LAPTOP when technically transferable
4. COMPACT_ELECTRONICS
5. ADJACENT_ELECTRONICS as capability source
6. FOUNDATIONAL_ONLY as mechanism/method evidence

This is a discovery priority, not a value ranking.

## 7. Software scope guard

SOFTWARE_SYSTEM capabilities use the same platform vocabulary but are intentionally not exhaustively researched.

For software:
- record representative high-value nodes;
- retain strong directly relevant terminal examples;
- avoid broad expansion into compiler / scheduler / OS / runtime ecosystems.

## 8. Presentation rule

Leadership pages should not show a full transfer matrix by default.

Default:
- show strongest target relevance;
- show "Direct / Near-direct / Transferable / Adjacent" as concise badges;
- expose the full per-platform matrix only on Capability / Institution drill-down and Atlas filtering.
