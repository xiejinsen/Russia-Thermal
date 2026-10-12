import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const compare = read('src/pages/landscape.astro');
const matrix = read('src/components/CapabilityMatrix.astro');
const transfer = read('src/pages/smartphone-transfer.astro');
const packages = read('src/pages/research-packages.astro');
const questions = read('src/pages/research-questions.astro');
const partners = read('src/pages/partners.astro');
const nav = read('src/components/SiteHeader.astro');
const builders = read('src/view-models/builders.ts');
const types = read('src/types/view-models.ts');

assert.ok(compare.includes('<CapabilityMatrix rows={vm.rows} />'), 'comparison matrix is missing');
assert.ok(!compare.includes('vm.rows.map('), 'landscape duplicated the matrix as row cards');
assert.ok(matrix.includes('row.chinaEvidence') && matrix.includes('row.internationalEvidence') && matrix.includes('row.russiaEvidence'), 'comparators are not split by source geography');
assert.ok(matrix.includes('row.claimIds') || matrix.includes('encodeURIComponent(row.direction.id)'), 'Claim deep-link is missing');
assert.ok(!matrix.includes('))}}'), 'stray Astro expression brace');
assert.ok(builders.includes("source.countryContext === 'CN'"), 'China evidence provenance filter absent');
assert.ok(builders.includes("source.countryContext === 'RU'"), 'Russian evidence provenance filter absent');
assert.ok(builders.includes("source.countryContext !== 'CN' && source.countryContext !== 'RU'"), 'International/unknown evidence bucket absent');
assert.ok(builders.includes("actor.country === 'RU'"), 'Russian institutions not geographically screened');
assert.ok(types.includes('internationalEvidence: LandscapeEvidenceRefVM[]'), 'comparative source field is not typed');
assert.ok(transfer.includes('transferItems.map(') && transfer.includes('d.promotionGate') && transfer.includes('d.killGate'), 'Q06 transfer gates are not data-linked');
assert.ok(transfer.includes('cap.transferBoundary'), 'Q06 must keep canonical capability boundary');
assert.ok(packages.includes('currentActionBoundary.titleZh') && packages.includes('currentActionBoundary.detailZh'), 'Q09 lacks centralized external authorization restriction');
const pathMatches=[...packages.matchAll(/file: '(reports\/collaboration-opportunities\/[^']+\.md)'/g)];
assert.equal(pathMatches.length,5, 'expected five already audited OPP report links');
for(const match of pathMatches) {
  assert.ok(existsSync(new URL('../../'+match[1],import.meta.url)), `missing OPP report: ${match[1]}`);
}
assert.ok(packages.includes('TPU-HOLD') && packages.includes('tpu-frumkin-2026-original-paper-identity-gate.md'), 'TPU HOLD boundary missing');
for(const route of ['/landscape','/smartphone-transfer','/research-packages']) {
  assert.ok(nav.includes(`path: '${route}'`), `top navigation missing ${route}`);
}
assert.ok(questions.includes("'/smartphone-transfer'") && questions.includes("'/research-packages'"), 'Q06/Q09 research-question drilldowns missing');
assert.ok(partners.includes("href('/research-packages')"), 'portfolio research package link missing');
console.log('Wave C source-contract PASS: single comparison matrix, 3 source provenance lanes, Q06 transfer and Q09 OPP/approval gates');
