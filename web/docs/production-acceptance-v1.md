# Web V1 Production Acceptance

record_state: CURRENT
accepted_at: 2026-10-06
scope: PRODUCTION_WEB_V1
status: PASS

## Decision

The Russia-Thermal web research-intelligence system is accepted as **V1 Production Complete**.

Production entry: https://xiejinsen.github.io/Russia-Thermal/

Web V1 is frozen as the derived presentation layer for the canonical V2.1 research graph. Future work should prioritize research-data enrichment instead of general visual redesign.

## Acceptance results

- Production Intelligence homepage: PASS
- Shared clustered navigation and route-context indicator: PASS
- Partner priority paths P1/P2/P3: PASS
- Institution / Scholar / Capability drill-down: PASS
- Direction -> Claim -> Paper -> Original Source traceability: PASS
- Reject -> Decision -> Trigger Claim -> Evidence path: PASS
- Russia Research Map navigation: PASS
- Frontier Watch conference/journal official links: PASS
- Astro / TypeScript check: PASS
- Static build: PASS
- Internal link and anchor audit: PASS
- Repository Health: PASS
- GitHub Pages deployment: PASS
- Responsive / density QA for primary production flows: PASS

## Representative traceability chains

- P1 -> ACT-KUT-LAB13 -> DIR-FAILURE-AWARE-UTVC -> CLM-PAV-003 -> PAPER-CN-DRY-001 -> DOI source
- P2 -> ACT-MPEI -> DIR-HEALTH-AWARE-UTVC -> CLM-MPEI-003 -> PAPER-CN-AGE-001 -> DOI source
- P3 -> ACT-TPU -> DIR-SURFACE-PROCESS-CHALLENGER -> CLM-TPU-005 -> PAPER-CN-TPU-001 -> DOI source

## Known bounded gap

### China Research Map

This is **not a Web V1 design blocker**.

The China map remains intentionally incomplete because the canonical China comparator Actor / Scholar / Capability / Geography graph is not yet symmetric with Russia. The next work is research-data enrichment, then rendering through the same ResearchMapVM contract.

## V1 freeze rule

- No broad visual redesign without a concrete usability failure.
- No second web-only truth layer.
- New research updates canonical objects first.
- New pages consume normalized canonical relations.
- Web changes are driven by broken user paths, new research needs, or measurable usability issues.

## Next phase

Enrich the China comparator Actor graph and complete the shared China Research Map without changing the frozen Web V1 presentation architecture.
