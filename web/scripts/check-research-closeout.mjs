import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const generated = JSON.parse(read('data/generated/questionCloseouts.json'));
const records = generated.records;
assert.equal(generated.schemaVersion, '1.0', 'unexpected closeout dataset schema');
assert.equal(records.length, 10, 'expected ten final research questions');
assert.equal(new Set(records.map((r) => r.id)).size, 10, 'duplicate question ID');
for (let i = 1; i <= 10; i++) {
  const id = `Q${String(i).padStart(2, '0')}`;
  const row = records.find((r) => r.id === id);
  assert.ok(row, `missing ${id}`);
  for (const field of ['questionShort', 'answer', 'confidence', 'remainingLimit', 'sourcePath', 'ledgerPath']) {
    assert.ok(row[field]?.trim(), `${id}: missing ${field}`);
  }
}
assert.equal(records.filter((r) => r.disposition === 'ACCEPTED_PUBLIC_EVIDENCE').length, 3);
assert.equal(records.filter((r) => r.disposition === 'ACCEPTED_WITH_DISCLOSED_LIMITATION').length, 7);

const home = read('src/pages/index.astro');
const header = read('src/components/SiteHeader.astro');
const questions = read('src/pages/research-questions.astro');
const partners = read('src/pages/partners.astro');
const action = read('src/view-models/action-boundary.ts');
assert.ok(home.includes("href('/research-questions')"), 'homepage missing research closeout link');
assert.ok(header.includes("path: '/research-questions'"), 'navigation missing research closeout link');
assert.ok(questions.includes('questionCloseouts.map('), 'question route does not render generated records');
assert.ok(home.includes('currentActionBoundary.titleZh'), 'homepage not using approval boundary');
assert.ok(partners.includes('currentActionBoundary.detailZh'), 'partners not using approval boundary');
assert.ok(action.includes('对外接洽须另行授权'), 'external outreach permission boundary missing');
assert.ok(!home.includes('批准 P1 前期合作可行性接洽？'), 'ambiguous approval CTA reintroduced');
assert.ok(!home.includes('Laser processing / wettability'), 'TPU experiments improperly conflated');
console.log('Research closeout integration PASS: Q01-Q10, statuses 3/7, route/navigation and approval wording');
