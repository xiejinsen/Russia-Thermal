import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const base = '/Russia-Thermal/';
const errors = [];
let checked = 0;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function candidatesFor(routePath) {
  let clean = routePath;
  if (clean.startsWith(base)) clean = '/' + clean.slice(base.length);
  if (!clean.startsWith('/')) return [];
  clean = decodeURIComponent(clean.split('?')[0].split('#')[0]);
  const rel = clean.replace(/^\//, '');
  if (!rel) return [path.join(root, 'index.html')];
  if (rel.endsWith('.html')) return [path.join(root, rel)];
  return [path.join(root, rel, 'index.html'), path.join(root, rel), path.join(root, rel + '.html')];
}

function routeForFile(file) {
  const rel = path.relative(root, file).split(path.sep).join('/');
  if (rel === 'index.html') return base;
  if (rel.endsWith('/index.html')) return base + rel.slice(0, -'index.html'.length);
  return base + rel;
}

function idsIn(html) {
  return new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((m) => m[1]));
}

const files = walk(root).filter((file) => file.endsWith('.html'));

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const sourceRoute = routeForFile(file);
  if (sourceRoute.startsWith(base + 'fixtures/')) continue;

  const auditableHtml = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  const localIds = idsIn(auditableHtml);

  for (const match of auditableHtml.matchAll(/\shref=["']([^"']+)["']/g)) {
    const raw = match[1].trim();
    if (!raw || /^(https?:|mailto:|tel:|javascript:)/i.test(raw)) continue;

    if (raw.startsWith('#')) {
      const fragment = decodeURIComponent(raw.slice(1));
      if (fragment && !localIds.has(fragment)) errors.push(sourceRoute + ': missing local anchor #' + fragment);
      continue;
    }

    let url;
    try {
      url = new URL(raw, 'https://example.invalid' + sourceRoute);
    } catch {
      errors.push(sourceRoute + ': invalid href ' + raw);
      continue;
    }

    if (url.origin !== 'https://example.invalid') continue;
    if (!url.pathname.startsWith(base)) {
      errors.push(sourceRoute + ': internal href escapes configured base: ' + raw);
      continue;
    }

    const candidates = candidatesFor(url.pathname);
    const target = candidates.find((candidate) => fs.existsSync(candidate));
    if (!target) {
      errors.push(sourceRoute + ': missing target ' + raw);
      continue;
    }

    if (url.hash && target.endsWith('.html')) {
      const targetHtml = fs.readFileSync(target, 'utf8')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
      const fragment = decodeURIComponent(url.hash.slice(1));
      if (fragment && !idsIn(targetHtml).has(fragment)) {
        errors.push(sourceRoute + ': missing target anchor ' + raw);
        continue;
      }
    }

    checked += 1;
  }
}

if (errors.length) {
  console.error('INTERNAL LINK AUDIT FAIL');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}

console.log('INTERNAL LINK AUDIT PASS: ' + checked + ' internal links across ' + files.length + ' HTML pages');
