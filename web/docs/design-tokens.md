# Design Tokens

status: DESIGN
scope: visual-system variables

## 1. Principle

Visual values are centralized into semantic tokens.

Pages/components do not invent arbitrary:
- colors;
- spacing;
- radii;
- shadows;
- typography scales.

This follows the design-system pattern of using constrained palettes of typography, spacing and color to improve consistency and reduce change cost.

## 2. Token layers

### Foundation tokens

Raw scales:
- spacing;
- font size;
- line height;
- radius;
- border width;
- elevation.

### Semantic tokens

Examples:
- `color.text.primary`
- `color.text.secondary`
- `color.surface.page`
- `color.surface.card`
- `color.border.default`
- `color.status.keep`
- `color.status.reserve`
- `color.status.watch`
- `color.status.kill`
- `color.confidence.high`

Components should consume semantic tokens.

## 3. Status semantics

Color is never the only carrier of meaning.

Every status also has:
- text label;
- icon/shape if useful;
- accessible contrast.

## 4. Typography

Recommended hierarchy:
- display: executive conclusion only;
- H1: page;
- H2: section;
- H3: subsection;
- body;
- small metadata.

Long-form evidence text should use a readable line length.

## 5. Spacing

Use a limited spacing scale.

Example:
`2, 4, 8, 12, 16, 24, 32, 48, 64`

Do not use arbitrary per-component spacing unless promoted into the token scale.

## 6. Layout tokens

Suggested:
- content narrow;
- content standard;
- content wide;
- dashboard wide.

Evidence prose should not use dashboard width.

## 7. Theme strategy

MVP:
single light theme.

Dark mode is not a Phase-1 requirement.

Reason:
avoid multiplying QA surface before content and interaction are stable.

## 8. Change isolation

Changing:
- brand accent → semantic color tokens;
- card radius → radius token;
- section spacing → layout tokens;
- type scale → typography tokens.

No page-level hunt-and-replace.
