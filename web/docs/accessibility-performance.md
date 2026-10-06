# Accessibility & Performance

status: DESIGN

## 1. Accessibility target

Target:
**WCAG 2.2 AA-oriented implementation**.

Core rules:
- semantic HTML;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- no color-only status encoding;
- text alternatives for images/diagrams;
- logical heading hierarchy;
- large enough interaction targets;
- no hover-only critical information.

## 2. Why accessibility belongs in architecture

Accessibility affects:
- components;
- tokens;
- content;
- interactive islands;
- test strategy.

It cannot be bolted on after visual implementation.

## 3. Interactive controls

Every filter/accordion/graph control must support:
- keyboard;
- focus order;
- labels;
- screen-reader name;
- visible state.

## 4. Graph fallback

Relationship graph is supplementary.

All graph information must also be accessible through:
- lists;
- links;
- tables.

The graph must never be the only way to understand relationships.

## 5. Performance strategy

Static-first:
- pages prerendered;
- no global hydration;
- interactive islands only where needed.

Images:
- responsive sizing;
- lazy loading below fold;
- explicit dimensions;
- optimized formats where permitted.

## 6. JavaScript budget

Default:
zero client JS for static content pages.

Client JS is justified only for:
- evidence filtering/search;
- controlled comparison;
- graph interactions;
- small disclosure widgets when native HTML is insufficient.

## 7. Testing later

Automated:
- schema validation;
- link checking;
- Axe/Pa11y-style accessibility scan;
- build failure on missing references.

Manual:
- keyboard-only;
- screen reader spot-check;
- zoom;
- mobile viewport;
- long content / missing images.
