# Change Isolation Contract

status: DESIGN
scope: prevent shotgun edits and global regressions

## 1. Core rule

Every change should have a predictable smallest ownership boundary.

If one content/UI request requires edits across many unrelated folders, treat that as an architecture smell.

## 2. Ownership matrix

| Change type | Primary owner | Expected secondary impact |
|---|---|---|
| canonical fact changes | canonical repo object | adapter regenerated data |
| canonical syntax changes | adapter | normalized schema/tests |
| normalized field added | schema + adapter | affected view model |
| page-specific summary changes | view model / derived content | one page/section |
| component appearance | component + token | component tests |
| global visual theme | token layer | visual regression only |
| navigation | information architecture / nav config | route tests |
| filter logic | interactive island | island tests |
| image change | image metadata/assets | affected card/page |
| partner priority | canonical Direction/derived management report | partner VM, affected views |

## 3. Forbidden coupling

### Components may not import canonical Markdown

Why:
one parser/schema change would break presentation globally.

### Pages may not construct domain relationships ad hoc

Why:
every page would implement slightly different logic.

### CSS selectors may not reach across component boundaries

Avoid:
`.page .card .person-name...`

Prefer:
component-scoped styles + tokens.

### No global event bus for filters

Each interactive island owns its state unless a deliberate shared-state requirement is proven.

### No manually copied scholar/institution metadata in multiple pages

Use generated data + view models.

## 4. Dependency rule

Allowed:
`Page → Section → Component → Primitive`

Not allowed:
`Primitive → Page`
`Component → Canonical file`
`Adapter → UI component`

## 5. Blast-radius budget

### Level 0
One file/component.

### Level 1
One feature module.

### Level 2
Shared schema/token change affecting multiple features.

### Level 3
Architecture-wide migration.

Routine content/display requests should stay Level 0–1.

Any Level 2+ change requires:
- explicit reason;
- affected-surface list;
- migration/test plan.

## 6. Feature folder rule

Interactive features should own:
- component;
- local styles;
- state logic;
- tests;
- optional adapter to view model.

Example:

```
features/evidence-explorer/
  EvidenceExplorer.tsx
  filters.ts
  types.ts
  test/
```

## 7. Page composition rule

A page imports:
- a page view model;
- reusable section/components.

Page files should remain small and declarative.

## 8. Regression containment

Required test categories later:
- adapter/schema validation;
- component snapshot/visual fixture;
- route build;
- broken-link/reference validation;
- accessibility checks;
- targeted interaction tests.

## 9. Architecture review trigger

Review architecture before adding:
- runtime backend;
- authentication;
- editable CMS;
- cross-page live shared state;
- large graph visualization;
- multi-language editing workflow.

Do not smuggle these into an MVP component.
