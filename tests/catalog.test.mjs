import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync,spawnSync} from 'node:child_process';
import {readFile,mkdtemp,cp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {catalog} from '../content/catalog.mjs';
import {search} from '../src/lib/search.mjs';
import {markdown} from '../src/lib/markdown.mjs';

test('informal phrases resolve to useful top matches',()=>{for(const [q,id] of [['dark layer behind popup','scrim'],['the three dots menu','dropdown-menu'],['gray shapes before content loads','skeleton'],['soft embossed buttons','neumorphism'],['chrome and bubblegum','y2k'],['tiny app icon by clock','status-item'],['pictures with dots underneath','carousel'],['scrmm','scrim'],['modl dialog','dialog']]){const results=search(catalog,q);assert.ok(results.slice(0,3).some(r=>r.entry.id===id),`${q} => ${results.slice(0,3).map(r=>r.entry.id)}`);}});
test('platform, kind, no-match, and empty queries',()=>{assert.equal(search(catalog,'',{platform:'macos'}).length,10);assert.equal(search(catalog,'',{kind:'style'}).length,10);assert.equal(search(catalog,'unrecognizablequuxxyz').length,0);assert.equal(search(catalog,'the and it').length,0);assert.ok(search(catalog,'popover',{platform:'macos'}).every(r=>r.entry.platform==='macos'));});
test('anatomy is searchable independently of the parent',()=>{const r=search(catalog,'placeholder')[0];assert.equal(r.entry.id,'form-field');assert.equal(r.part?.name,'Placeholder');});
test('Markdown exports preserve prompt, sources, and exact API symbols',()=>{for(const e of catalog){const md=markdown(e);assert.ok(md.includes(e.prompt));assert.ok(md.includes(e.sources[0].url));for(const a of e.api)assert.ok(md.includes(a.symbol));}});
test('generation keeps browser and skill catalogs identical',async()=>{execFileSync(process.execPath,['scripts/generate.mjs']);const web=JSON.parse(await readFile('public/data/catalog.json','utf8')),skill=JSON.parse(await readFile('plugin/skills/folklore/references/catalog.json','utf8'));assert.deepEqual(web.map(({url,...e})=>e),skill);});
test('skill works from an isolated install without project dependencies',async()=>{execFileSync(process.execPath,['scripts/generate.mjs']);const temp=await mkdtemp(join(tmpdir(),'folklore-test-'));try{await cp('plugin/skills/folklore',join(temp,'folklore'),{recursive:true});const cli=join(temp,'folklore/scripts/lookup.mjs');const query=JSON.parse(execFileSync(process.execPath,[cli,'search','dark layer behind popup'],{cwd:temp,encoding:'utf8'}));assert.equal(query[0].id,'scrim');const get=JSON.parse(execFileSync(process.execPath,[cli,'get','dialog'],{cwd:temp,encoding:'utf8'}));assert.equal(get.id,'dialog');const cmp=JSON.parse(execFileSync(process.execPath,[cli,'compare','skeleton','spinner'],{cwd:temp,encoding:'utf8'}));assert.equal(cmp.entries.length,2);assert.equal(spawnSync(process.execPath,[cli,'get','missing'],{cwd:temp}).status,1);}finally{await rm(temp,{recursive:true,force:true});}});
