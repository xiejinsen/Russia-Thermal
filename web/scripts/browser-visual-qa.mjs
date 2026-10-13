import {chromium} from 'playwright-core';
import {spawn,execFileSync} from 'node:child_process';
import {existsSync,mkdirSync,writeFileSync,symlinkSync} from 'node:fs';
import path from 'node:path';

const host='http://127.0.0.1:4173/Russia-Thermal';
const pages=[
 ['home','/'],['russia-map','/research-map/russia/'],['china-map','/research-map/china/'],
 ['questions','/research-questions/'],['institute','/institutions/ACT-KUTATELADZE/'],
 ['scholar','/scholars/PERSON-SURTAEV/'],['papers','/papers/'],
 ['evidence','/evidence/'],['claim','/claims/CLM-PAV-002/'],
 ['patent','/patents/PATENT-GLOBAL-DRYOUT-OBS-001/'],
 ['capability','/capabilities/CAP-KUT-L13-DRYOUT-DIAGNOSTICS/'],
 ['compare','/landscape/'],['directory','/site-directory/']
];
const sizes=[['desktop',1440,900],['tablet',768,940],['mobile',390,844]];
const outputDir='visual-audit';
const serverRoot='visual-audit-site';
mkdirSync(serverRoot,{recursive:true});
if(!existsSync(serverRoot+'/Russia-Thermal'))symlinkSync('../dist',serverRoot+'/Russia-Thermal','dir');
mkdirSync(outputDir,{recursive:true});
const server=spawn('python3',['-m','http.server','4173','--bind','127.0.0.1','--directory',serverRoot],{stdio:['ignore','pipe','pipe']});
let execPath;
for(const p of ['/usr/bin/google-chrome','/usr/bin/chromium','/opt/google/chrome/chrome','/usr/bin/google-chrome-stable']){
 if(existsSync(p)){execPath=p;break;}
}
if(!execPath){try{execPath=execFileSync('which',['google-chrome'],{encoding:'utf8'}).trim()}catch{}}
if(!execPath)throw new Error('Chromium/Chrome executable unavailable on runner');
const results=[];let fatal=[];
try{
 let loaded=false;
 for(let i=0;i<35;i++){
  try{const res=await fetch(host+'/');if(res.ok){loaded=true;break}}catch{}
  await new Promise(r=>setTimeout(r,250));
 }
 if(!loaded)throw new Error('Local site did not start');
 const browser=await chromium.launch({executablePath:execPath,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 try{
  for(const [view,width,height] of sizes){
   const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,locale:'zh-CN',reducedMotion:'reduce'});
   const page=await context.newPage();
   const scriptErrors=[];
   page.on('pageerror',e=>scriptErrors.push(String(e.message).slice(0,150)));
   for(const [slug,route] of pages){
    const url=host+route;
    let status=0;let error='';
    try{
     const res=await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});status=res?.status()??0;
     await page.locator('h1').first().waitFor({timeout:7000});
     await page.waitForTimeout(350);
    }catch(e){error=String(e).slice(0,180)}
    const layout=await page.evaluate(()=>{
     const root=document.documentElement;
     const images=[...document.images];
     return {
       scrollWidth:root.scrollWidth,clientWidth:root.clientWidth,
       h1:[...document.querySelectorAll('h1')].map(e=>e.textContent?.trim().slice(0,70)),
       imageCount:images.length,
       brokenImages:images.filter(i=>i.complete&&i.naturalWidth===0).map(i=>(i.currentSrc||i.src).slice(0,160)).slice(0,9),
       bodyText:(document.body?.innerText||'').slice(0,120),
       emptyLinks:[...document.querySelectorAll('a[href]')].filter(a=>!a.textContent?.trim()&&!a.querySelector('img[alt],svg[aria-label]')).length,
       toolbarScroll:[...document.querySelectorAll('.explorer-toolbar')].map(e=>({width:e.clientWidth,scroll:e.scrollWidth})),
       importantSource:[...document.querySelectorAll('.source-priority,.essential-item')].length
     };
    });
    const item={view,slug,route,status,...layout,error,jsErrors:scriptErrors.splice(0)};
    results.push(item);
    if(status!==200||error||layout.scrollWidth>width+10)fatal.push(item);
    const target=path.join(outputDir,view+'-'+slug+'.png');
    await page.screenshot({path:target,fullPage:true,animations:'disabled',timeout:25000});
    // Inspectable above-fold browser captures encoded into Actions logs; no mockups.
    if(view==='desktop'&&['home','evidence','papers'].includes(slug)){
      const shot=await page.screenshot({type:'jpeg',quality:38,fullPage:false});
      console.log('QA_IMAGE_BEGIN '+slug+' '+shot.toString('base64')+' QA_IMAGE_END');
    }
   }
   await context.close();
  }
 } finally{await browser.close()}
}finally{server.kill('SIGTERM')}
writeFileSync(path.join(outputDir,'results.json'),JSON.stringify(results,null,2));
const report={total:results.length,failures:fatal.map(x=>({view:x.view,page:x.slug,status:x.status,overflow:x.scrollWidth-x.clientWidth,error:x.error})),broken:results.filter(x=>x.brokenImages.length).map(x=>({view:x.view,page:x.slug,images:x.brokenImages})),issues:results.filter(x=>x.h1.length!==1||x.jsErrors.length||x.emptyLinks>0).map(x=>({view:x.view,page:x.slug,h1:x.h1,jsErrors:x.jsErrors,emptyLinks:x.emptyLinks})),sourceCount:results.filter(x=>x.slug==='evidence').map(x=>({view:x.view,important:x.importantSource}))};
writeFileSync(path.join(outputDir,'summary.json'),JSON.stringify(report,null,2));
console.log('BROWSER_QA_SUMMARY '+JSON.stringify(report));
if(fatal.length)process.exitCode=1;
