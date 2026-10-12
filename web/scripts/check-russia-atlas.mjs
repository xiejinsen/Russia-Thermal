import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const works = JSON.parse(read('data/generated/representativeWorks.json')).records;
const actors = JSON.parse(read('data/generated/actors.json')).records;
const canonicalSources = JSON.parse(read('data/generated/evidence.json')).records;
const actorIds = new Set(actors.map(r => r.id));
const sourceIds = new Set(canonicalSources.map(r => r.id));
const alias = actors.find(r => r.id === 'ACT-ICM-SBRAS');
assert.equal(alias?.recordState, 'HISTORICAL_ALIAS', 'ICM legacy record state lost');
assert.equal(alias?.identityAliasOf, 'ACT-ICM-KRASN', 'legacy alias not resolved to canonical ICM');
const required = ['ACT-KUT-LAB13', 'ACT-MPEI', 'ACT-ITP-UBRAS', 'ACT-TPU', 'ACT-TSU', 'ACT-ICM-KRASN'];
const groupIds = new Set(works.map(r => r.teamId));
for(const id of required) {
  assert.ok(actorIds.has(id), `missing actor ${id}`);
  assert.ok(groupIds.has(id), `missing representative research line ${id}`);
}
assert.equal(groupIds.size, required.length, 'unexpected extra representative-work owner');
assert.equal(works.length, 27, 'expected 10 KUT + 4 MPEI + 13 additional bounded works');
const seen = new Set();
for(const r of works) {
  assert.ok(!seen.has(r.id), `duplicate work selection ID ${r.id}`);
  seen.add(r.id);
  assert.ok(r.title && r.sourceUrl?.startsWith('https://'), `${r.id}: missing original reference`);
  assert.ok(r.selectionReason && r.selectionLimit, `${r.id}: evidence limitation missing`);
  if (r.sourceId) {
    assert.ok(sourceIds.has(r.sourceId), `${r.id}: unknown canonical paper`);
    assert.equal(r.evidenceState, 'CANONICAL', `${r.id}: canonical source state mismatch`);
  } else {
    assert.notEqual(r.evidenceState, 'CANONICAL', `${r.id}: uncatalogued paper masquerades as canonical`);
  }
}
const icm = works.filter(r=>r.teamId === 'ACT-ICM-KRASN');
assert.ok(icm.some(r=>r.researchLane.startsWith('TRACK_A_')) && icm.some(r=>r.researchLane.startsWith('TRACK_B_')), 'ICM experimental and theory groups were merged');
const conflicted = icm.find(r=>r.sourceId==='PAPER-RU-ICM-ELECTRONICS-001');
assert.ok(conflicted?.authors.includes('Dmitry A. Nesterov'), 'publisher author identity was overwritten');
assert.ok(!conflicted?.scholarRefs.some(ref=>ref.includes('PERSON-NESTEROV-DENIS')), 'Dmitry improperly merged with Denis');
const tpu = works.filter(r=>r.teamId==='ACT-TPU');
assert.equal(tpu.length,2,'TPU source distinction lost');
assert.ok(tpu.some(r=>r.sourceUrl.includes('128413')));
assert.ok(tpu.some(r=>r.sourceUrl.includes('109390')));
const atlas = read('src/pages/russia-atlas.astro');
const atlasModel = read('src/view-models/russia-atlas.ts');
const representative = read('src/pages/representative-works.astro');
const directory = read('src/pages/institutions.astro');
const institution = read('src/pages/institutions/[id].astro');
const builder = read('src/view-models/builders.ts');
const home = read('src/pages/index.astro');
const nav = read('src/components/SiteHeader.astro');
assert.ok(atlas.includes("russiaAtlas.map("), 'Russia Atlas must render the derived institution registry');
assert.ok(atlas.includes('id="atlas-search"') && atlas.includes('id="atlas-family"'), 'Atlas filtering controls missing');
assert.ok(atlasModel.includes('person.parentId && institutionIds.has(person.parentId)'), 'must use recorded parent affiliation for people');
assert.ok(atlasModel.includes('sourceType === \'PAPER\''), 'paper evidence filter not present');
assert.ok(atlas.includes('非机构发表总量'), 'linked papers are not authored-output counts');
assert.ok(representative.includes('const panels = [...new Set(records.map'), 'representative works no longer generates navigation from records');
assert.ok(representative.includes('Dmitry Nesterov') && representative.includes('Denis Nesterov'), 'ICM name collision warning missing');
assert.ok(institution.includes('reviewedTeams') && institution.includes('/representative-works#'), 'institution representative-work drill-down missing');
assert.ok(builder.includes('scholarCard(person, person.parentId ? actorById.get(person.parentId) : undefined)'), 'wrong displayed affiliation in institution view');
assert.ok(atlasModel.includes("actor.recordState !== 'HISTORICAL_ALIAS'"), 'Russia Atlas includes historical institute alias');
assert.ok(directory.includes("actor?.recordState !== 'HISTORICAL_ALIAS'"), 'institution directory shows historical alias as new institute');
assert.ok(nav.includes("path: '/russia-atlas'") && home.includes("href('/russia-atlas')"), 'Russia Atlas not discoverable');
console.log(`Russia Atlas integrity PASS: ${groupIds.size} reviewed groups, ${works.length} selections, identity disclaimers and deep links`);
