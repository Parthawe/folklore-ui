import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {catalog} from '../content/catalog.mjs';
const specimen=await readFile('src/components/Specimen.astro','utf8');
assert.equal(catalog.length,40);assert.equal(catalog.filter(e=>e.platform==='web').length,20);assert.equal(catalog.filter(e=>e.platform==='macos').length,10);assert.equal(catalog.filter(e=>e.kind==='style').length,10);
assert.equal(new Set(catalog.map(e=>e.id)).size,catalog.length,'Duplicate IDs');
for(const e of catalog){assert.match(e.id,/^[a-z][a-z0-9-]+$/);for(const k of ['name','description','behavior','debug','prompt','status','demo','updated'])assert.ok(e[k]?.length,`${e.id}: missing ${k}`);assert.ok(e.anatomy.length>=2);assert.ok(e.phrases.length>=2);assert.ok(e.sources.length);for(const s of e.sources){assert.ok(s.title);assert.equal(new URL(s.url).protocol,'https:');}for(const id of e.related)assert.ok(catalog.some(c=>c.id===id),`${e.id}: unknown related ID ${id}`);assert.ok(specimen.includes(`'${e.id}'`),`${e.id}: missing demo`);if(e.kind==='element')assert.ok(e.api.length);else assert.ok(e.signals.length>=3);}
console.log('Validated 40 entries, sources, relationships, API mappings, and demo registrations.');
