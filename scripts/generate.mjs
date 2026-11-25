import {mkdir,writeFile,copyFile} from 'node:fs/promises';
import {catalog,entryPath} from '../content/catalog.mjs';
import {markdown} from '../src/lib/markdown.mjs';
const skill='plugin/skills/folklore';
for(const dir of ['public/data','public/entries','public/fonts',`${skill}/references`,`${skill}/scripts`,`${skill}/agents`,'plugin/.codex-plugin']) await mkdir(dir,{recursive:true});
await copyFile('node_modules/@fontsource/source-sans-3/LICENSE','public/fonts/LICENSE.txt');
await copyFile('LICENSE',`${skill}/LICENSE`);
await writeFile('public/data/catalog.json',JSON.stringify(catalog.map(e=>({...e,url:entryPath(e)}))));
await writeFile(`${skill}/references/catalog.json`,JSON.stringify(catalog,null,2));
await copyFile('src/lib/search.mjs',`${skill}/scripts/search.mjs`);
for(const e of catalog){await writeFile(`public/entries/${e.id}.md`,markdown(e));await writeFile(`${skill}/references/${e.id}.md`,markdown(e));}
await writeFile(`${skill}/references/index.md`,'# Folklore catalog\n\n'+catalog.map(e=>`- [${e.name}](${e.id}.md) | ${e.platform} | ${e.description}`).join('\n'));
await writeFile('public/robots.txt','User-agent: *\nAllow: /\nSitemap: https://folklore-ui.pawar-d-parth.chatgpt.site/sitemap.xml\n');
const paths=['/','/styles/','/saved/','/compare/','/install/','/about/','/privacy/','/license/',...catalog.map(entryPath)];
await writeFile('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>https://folklore-ui.pawar-d-parth.chatgpt.site${p}</loc></url>`).join('')}</urlset>`);
console.log(`Generated ${catalog.length} entries for website and offline skill.`);
