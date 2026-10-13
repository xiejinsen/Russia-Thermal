import fs from 'node:fs';
import path from 'node:path';

// This is a structural release gate, not a pixel/browser contrast audit.
// It protects editorial map intent, key routes, alt text and asset packaging.
const dist=path.resolve('dist');
const base='/Russia-Thermal/';
const failures=[];
const read=(rel)=>{const p=path.join(dist,rel);if(!fs.existsSync(p)){failures.push('Missing: '+rel);return '';}return fs.readFileSync(p,'utf8');};
const homepage=read('index.html');
const ru=read('research-map/russia/index.html');
const cn=read('research-map/china/index.html');
const hub=read('research-map/index.html');

for(const [name,body,asset] of [
 ['Russia infographic',ru,'russia-editorial-outline.svg'],
 ['China infographic',cn,'china-editorial-outline.svg']
]){
 if(!body.includes(asset))failures.push(name+' does not use the checked-in schematic vector');
 if(/leaflet(?:\.js|\.css)|tile\.openstreetmap\.org|L\.map\(/i.test(body))
   failures.push(name+' still contains a GIS/Leaflet implementation');
 if(/<iframe\b/i.test(body))failures.push(name+' has embedded map iframe');
 if(!body.includes('data-research-item'))failures.push(name+' lost institution evidence index');
 if(!body.includes('data-filter-search'))failures.push(name+' lost accessible search filtering');
 // Show geographic anchors and disambiguated, accessible institution callouts.
 const markers=[...body.matchAll(/class="feature-pin"/g)];
 const leaders=[...body.matchAll(/class="pin-leader"/g)];
 const anchorDots=[...body.matchAll(/class="true-location-dot"/g)];
 if(markers.length<4)failures.push(name+' shows fewer than four numbered institution location labels: '+markers.length);
 if(leaders.length<4||anchorDots.length<4)failures.push(name+' missing geographic anchor points or visible connector leaders');
 if(!body.includes('class="focus-list"'))failures.push(name+' lost institution information cards');
 for(const n of ['01','02','03','04']){
  if(!body.includes('id="atlas-feature-'+n+'"'))failures.push(name+' missing target for map label '+n);
  if(!body.includes('href="#atlas-feature-'+n+'"'))failures.push(name+' missing clickable map label '+n);
 }
 if(!body.includes('location-overlay'))failures.push(name+' missing SVG location overlay');
 if(body.includes('class="context-position"'))failures.push(name+' shows unlinked/unlabeled geographic points');
 if(body.includes('class="map-key"')||body.includes('class="cartography-note"'))
   failures.push(name+' contains explanatory legend/caption removed by design review');
 if(body.includes('点击地图编号定位介绍')||body.includes('引线从实际地理位置'))
   failures.push(name+' reintroduced tutorial-style instructions in map section');
}
for(const file of ['russia-editorial-outline.svg','china-editorial-outline.svg']){
 const svg=read('assets/'+file);
 if(!svg.includes('<svg')||!svg.includes('viewBox='))failures.push('Invalid packaged vector '+file);
}
for(const id of ['ACT-MPEI','ACT-KUTATELADZE','ACT-TPU','ACT-TSU']){
 const route='/institutions/'+id;
 if(!homepage.includes(route))failures.push('Homepage lacks direct institutional route '+route);
 if(!ru.includes(route))failures.push('Russian infographic lacks institutional route '+route);
 const institution=read('institutions/'+id+'/index.html');
 if(!institution.includes('institution-capabilities'))failures.push('Institution capabilities anchor missing '+id);
 if(!institution.includes('institution-people'))failures.push('Institution people anchor missing '+id);
}
// Chinese comparator organizations must receive the same photographic treatment as Russian organizations.
for(const photo of [
 'Peking%20University%20West%20Gate.jpg',
 'Southeast%20University.jpg',
 'Shanghai%20Jiao%20Tong%20University%20Gate.jpg',
 'South%20China%20University%20of%20Technology%20Building%20No.%208.jpg'
]) {
 if(!cn.includes(photo))failures.push('China infographic missing sourced campus photo: '+photo);
}
for(const id of ['ACT-PKU','ACT-SEU','ACT-SJTU','ACT-SCUT']){
 const start=cn.indexOf('id="atlas-feature-0'+(['ACT-PKU','ACT-SEU','ACT-SJTU','ACT-SCUT'].indexOf(id)+1)+'"');
 const block=cn.slice(start,start+2000);
 if(start<0||!block.includes('commons.wikimedia.org/wiki/Special:FilePath/'))
  failures.push('China featured card lacks a real Commons campus photo: '+id);
 if(start>=0&&!block.includes('原图与授权'))
  failures.push('China featured card lacks image source and credit: '+id);
}
// Homepage is a three-stage summary, not a duplicate technical directory.
for(const name of ['thesis','research-values','decision-section']){
 if(!homepage.includes('class="'+name+'"'))failures.push('Homepage narrative block missing: '+name);
}
if(homepage.includes('class="landscape-index"')||homepage.includes('class="actor-directory"'))
 failures.push('Homepage has regressed to a duplicate institution directory');
if(!homepage.includes('/papers/PAPER-RU-DRY-001')||!homepage.includes('/research-questions'))
 failures.push('Homepage lost primary paper or bounded research-question trail');

const kut=read('institutions/ACT-KUTATELADZE/index.html');
if(!kut.includes('class="kut-editorial"')||!kut.includes('id="kut-research-heading"'))
 failures.push('Kutateladze research-first profile section missing');
for(const id of ['institution-people','institution-capabilities','institution-evidence']){
 if(!kut.includes('id="'+id+'"')||!kut.includes('href="#'+id+'"'))
  failures.push('Kutateladze evidence jump not connected: '+id);
}
if(!kut.includes('10.1016/j.ijheatmasstransfer.2025.127855'))
 failures.push('Kutateladze flagship source paper missing');
const kutH1=[...kut.matchAll(/<h1\b/g)].length;
if(kutH1!==1) failures.push('Kutateladze should have one page H1, found '+kutH1);

if(!hub.includes('research-map/russia')||!hub.includes('research-map/china'))failures.push('Research infographic hub route missing');
if(!homepage.includes('俄罗斯热管理')||!homepage.includes('SCIENCE'))failures.push('Homepage scientific atlas hero unexpectedly absent');

const evidenceIndex=read('evidence/index.html'),paperIndex=read('papers/index.html');
const patentComparator=read('patents/PATENT-GLOBAL-DRYOUT-OBS-001/index.html');
const questionIndex=read('research-questions/index.html');
for(const id of ['PAPER-RU-DRY-001','PAPER-RU-AGE-001','PAPER-CN-UTVC-WP-001','PATENT-CN-VC-AGING-001','PATENT-GLOBAL-DRYOUT-OBS-001']){
 if(!evidenceIndex.includes(id))failures.push('Key original lost from featured evidence section: '+id);
}
if((evidenceIndex.match(/class="essential-item /g)||[]).length!==5)failures.push('Expected five distinctly highlighted decision/comparator originals');
if(!paperIndex.includes('核心结论原文')||!paperIndex.includes('关键中国对照'))
 failures.push('Paper index no longer distinguishes key conclusions from comparison originals');
if(!patentComparator.includes('关键专利对照'))failures.push('Patent prior-art page missing comparison emphasis');
for(const [p,html] of [['evidence',evidenceIndex],['papers',paperIndex],['questions',questionIndex]]){
 if(!html.includes('<html lang="zh-CN"'))failures.push(p+' document language not Chinese');
}
if(!paperIndex.includes('清除筛选')||!evidenceIndex.includes('国家／地区'))
 failures.push('Primary evidence navigation lost Chinese filtering labels');


for(const [name,html] of [['homepage',homepage],['Russia infographic',ru],['China infographic',cn]]){
 const images=[...html.matchAll(/<img\b[^>]*>/gi)];
 for(const img of images){
  if(!/\balt\s*=\s*(?:"[^"]*"|'[^']*')/i.test(img[0])){
   failures.push(name+' has image without alt text: '+img[0].slice(0,95));
  }
 }
 const emptyLinks=[...html.matchAll(/<a\b[^>]*href\s*=\s*(["'])\s*\1/gi)];
 if(emptyLinks.length)failures.push(name+' contains '+emptyLinks.length+' empty links');
}

// Enforce contrast pairs used by the immersive and reading surfaces.
// No CSS overrides can replace actual cross-viewport visual review.
const pairs=[
 {name:'primary reading text on light panel',text:'#172f46',bg:'#e8f3fb'},
 {name:'executive thesis on light panel',text:'#0a2841',bg:'#e8f3fb'},
 {name:'body text on light panel',text:'#263e53',bg:'#e8f3fb'},
 {name:'immersive text on navy',text:'#dceef9',bg:'#04192e'}
];
function rgb(hex){return [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=0.04045?v/12.92:Math.pow((v+0.055)/1.055,2.4));}
function lum(hex){const [r,g,b]=rgb(hex);return .2126*r+.7152*g+.0722*b;}
for(const pair of pairs){const a=lum(pair.text),b=lum(pair.bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);if(ratio<4.5)failures.push('Contrast target below AA: '+pair.name+' '+ratio.toFixed(2));}
if(failures.length){console.error('WEB RELEASE QUALITY CONTRACT FAIL');for(const e of failures)console.error('- '+e);process.exit(1);}
console.log('WEB RELEASE QUALITY CONTRACT PASS: editorial maps, direct links, media alt, assets, contrast tokens.');
