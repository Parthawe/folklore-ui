import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {withBase} from '../../src/lib/paths.mjs';
import {catalog,entryPath} from '../../content/catalog.mjs';

test('desk search, platform filter, anatomy, and no-match recovery',async({page})=>{
 await page.goto('/folklore-ui/');await expect(page.locator('[data-desk-entry]:visible')).toHaveCount(30);
 await page.getByLabel('Platform',{exact:true}).selectOption('macos');await expect(page.locator('[data-desk-entry]:visible')).toHaveCount(10);
 await page.getByLabel('Platform',{exact:true}).selectOption('all');await page.getByRole('searchbox').fill('dark layer behind popup');await expect(page.locator('[data-desk-name]')).toHaveText('Scrim');await expect(page).toHaveURL(/entry=scrim/);await expect(page.frameLocator('#desk-frame').locator('.overlay-card')).toBeVisible();await expect(page.getByRole('searchbox')).toBeFocused();
 await page.locator('[data-desk-part="1"]').click();await expect(page.locator('[data-desk-readout]')).toContainText('Blur');await expect(page.frameLocator('#desk-frame').locator('.specimen')).toHaveAttribute('data-inspect','1');
 await page.getByRole('button',{name:'Clear search',exact:true}).click();await expect(page.getByRole('searchbox')).toHaveValue('');await expect(page.locator('[data-desk-name]')).toHaveText('Scrim');await expect(page.frameLocator('#desk-frame').locator('.specimen')).toHaveAttribute('data-inspect','1');
 await page.getByRole('button',{name:'Agent brief',exact:true}).click();await expect(page.locator('[data-desk-prompt]')).toContainText('Implement a scrim');
 await page.getByRole('searchbox').fill('unrecognizablequuxxyz');await expect(page.getByText('No close match.',{exact:true})).toBeVisible();await page.getByRole('button',{name:'Reset search and filters',exact:true}).click();await expect(page.locator('[data-desk-entry]:visible')).toHaveCount(30);
 await page.goto('/folklore-ui/styles/');await page.getByRole('searchbox').fill('soft embossed buttons');await expect(page.locator('[data-desk-name]')).toHaveText('Neumorphism');
 await page.goto('/folklore-ui/?q=placeholder');await expect(page.locator('[data-desk-name]')).toHaveText('Form field');
});

test('saved collection persists, comparison changes, and copy works',async({page,context})=>{
 await context.grantPermissions(['clipboard-read','clipboard-write']);await page.goto('/folklore-ui/web/dialog/');await page.getByRole('button',{name:'Save entry',exact:true}).click();await page.reload();await expect(page.getByRole('button',{name:'Saved to collection'})).toBeVisible();await page.goto('/folklore-ui/saved/');await expect(page.locator('.entry-card:visible')).toHaveCount(1);await page.goto('/folklore-ui/web/dialog/');await page.getByRole('button',{name:'Saved to collection'}).click();await page.goto('/folklore-ui/saved/');await expect(page.getByText('Your collection starts here.')).toBeVisible();
 await page.goto('/folklore-ui/compare/?a=skeleton&b=spinner');await expect(page.locator('.compare-column').first().getByRole('heading',{name:'Skeleton',exact:true})).toBeVisible();await page.locator('#compare-b').selectOption('skeleton');await expect(page.locator('.compare-warning')).toBeVisible();await page.locator('#compare-b').selectOption('dialog');await expect(page.locator('.compare-column').nth(1).getByRole('heading',{name:'Modal dialog'})).toBeVisible();
 await page.goto('/folklore-ui/web/dialog/');await page.getByRole('button',{name:'Copy brief',exact:true}).click();await expect(page.getByRole('button',{name:'Copied',exact:true})).toBeVisible();expect(await page.evaluate(()=>navigator.clipboard.readText())).toContain('Implement a modal dialog');
 await page.getByRole('button',{name:'Copy Markdown'}).click();await expect.poll(()=>page.evaluate(()=>navigator.clipboard.readText())).toContain('# Modal dialog');
});

test('overlay focus, menu keyboard, combobox, palette, tabs, and accordion',async({page})=>{
 await page.goto('/folklore-ui/web/dialog/');const opener=page.getByRole('button',{name:'Open modal dialog'});await opener.click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).not.toBeVisible();await expect(opener).toBeFocused();
 await page.goto('/folklore-ui/web/dropdown-menu/');await page.getByRole('button',{name:'Project actions'}).click();await page.keyboard.press('ArrowDown');await expect(page.getByRole('menuitem',{name:'Duplicate'})).toBeFocused();await page.keyboard.press('Enter');await expect(page.getByText('Duplicate selected in this example.')).toBeVisible();
 await page.goto('/folklore-ui/web/combobox/');await page.getByRole('combobox').fill('lin');await page.keyboard.press('Enter');await expect(page.getByRole('combobox')).toHaveValue('Linen');await page.getByRole('combobox').fill('quux');await expect(page.getByText('No matching options')).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('listbox')).not.toBeVisible();
 await page.goto('/folklore-ui/web/command-palette/');await page.getByRole('button',{name:'Open command palette'}).click();await page.getByRole('combobox').fill('library');await page.keyboard.press('Enter');await expect(page.getByText('Open the library selected. This is a demonstration.')).toBeVisible();
 await page.goto('/folklore-ui/web/tabs/');await page.getByRole('tab',{name:'Overview'}).focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:'Activity'})).toHaveAttribute('aria-selected','true');await expect(page.getByRole('tabpanel')).toContainText('Your project is up to date.');
 await page.goto('/folklore-ui/web/accordion/');await page.getByText('What is a pattern?',{exact:true}).click();await expect(page.getByText('A reusable solution to a recurring interface problem.',{exact:true})).toBeVisible();
});

test('status, form recovery, sorting, pagination, loaders, carousel, and values',async({page})=>{
 await page.goto('/folklore-ui/web/toast/');await page.getByRole('button',{name:'Save changes'}).click();await expect(page.locator('.sample-toast')).toBeVisible();await expect(page.locator('.sample-toast')).toHaveCSS('opacity','1');
 await page.goto('/folklore-ui/web/form-field/');await page.getByRole('button',{name:'Check address'}).click();await expect(page.getByLabel('Email address')).toHaveAttribute('aria-invalid','true');await page.getByLabel('Email address').fill('test@example.com');await page.getByRole('button',{name:'Check address'}).click();await expect(page.getByLabel('Email address')).toHaveAttribute('aria-invalid','false');
 await page.goto('/folklore-ui/web/data-table/');await page.getByRole('button',{name:'Project'}).click();await expect(page.locator('tbody tr').first()).toContainText('A quieter place');await page.getByRole('button',{name:'Project'}).click();await expect(page.locator('tbody tr').first()).toContainText('Good company');
 await page.goto('/folklore-ui/web/pagination/');await expect(page.getByRole('button',{name:'Previous',exact:true})).toBeDisabled();await page.getByRole('button',{name:'Page 3',exact:true}).click();await expect(page.getByRole('button',{name:'Next',exact:true})).toBeDisabled();
 for(const id of ['skeleton','spinner']){await page.goto(`/folklore-ui/web/${id}/`);await page.getByRole('button',{name:'Simulate error'}).click();await expect(page.getByText('Could not load content.',{exact:true})).toBeVisible();await page.getByRole('button',{name:id==='spinner'?'Finish loading':'Load content',exact:true}).click();await expect(page.getByText('The example content has loaded.')).toBeVisible();await page.getByRole('button',{name:'Reset',exact:true}).click();await expect(page.locator('[data-loading-area]')).toHaveAttribute('aria-busy','true');}
 await page.goto('/folklore-ui/web/carousel/');await page.getByRole('button',{name:'Next slide'}).click();await expect(page.locator('.slide-status')).toHaveText('2 / 3');await page.getByRole('button',{name:'Previous slide'}).click();await expect(page.locator('.slide-status')).toHaveText('1 / 3');
 await page.goto('/folklore-ui/web/segmented-control/');await page.getByText('Month',{exact:true}).click();await expect(page.getByText('Month view selected.',{exact:true})).toBeVisible();
});

test('all entry routes, anatomy selection, native simulations, and style feedback',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const e of catalog){await page.goto(withBase(entryPath(e)));await expect(page.locator('h1')).toContainText(e.name);await expect(page.locator('.detail-specimen')).toBeVisible();await page.locator('[data-part="0"]').click();await expect(page.locator('.specimen-highlight-label')).toBeVisible();if(e.kind==='style'){await page.locator('[data-style-action]').click();await expect(page.locator('.specimen-feedback')).not.toBeEmpty();}}
 await page.goto('/folklore-ui/macos/window/');await page.getByRole('button',{name:'Close example window'}).click();await page.getByRole('button',{name:'Restore example'}).click();await expect(page.getByRole('button',{name:'Close example window'})).toBeVisible();
 await page.goto('/folklore-ui/macos/dock-badge/');await page.getByRole('button',{name:'Clear unread count'}).click();await expect(page.locator('.dock-count')).not.toBeVisible();await page.getByRole('button',{name:'Restore unread count'}).click();await expect(page.locator('.dock-count')).toBeVisible();expect(errors).toEqual([]);
});

test('loading failure and blocked storage have useful recovery',async({page})=>{
 await page.route('**/data/catalog.json',route=>route.abort());await page.goto('/folklore-ui/');await expect(page.getByText('Search could not load. Reload this page to try again.')).toBeVisible();await page.unroute('**/data/catalog.json');
 await page.addInitScript(()=>{Storage.prototype.setItem=()=>{throw new Error('blocked');};});await page.goto('/folklore-ui/web/dialog/');await page.getByRole('button',{name:'Save entry',exact:true}).click();await expect(page.getByRole('button',{name:'Storage unavailable'})).toBeVisible();
});

test('desktop/mobile fit, accessibility, downloads, and screenshots',async({page,request})=>{
 const findings:unknown[]=[];
 for(const size of [{width:1440,height:1000},{width:390,height:844}]){
  await page.setViewportSize(size);for(const path of ['/','/styles/','/web/dialog/','/styles/glassmorphism/','/install/','/compare/']){await page.goto(withBase(path));await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${size.width}: ${path}`).toBeTruthy();const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();findings.push(...axe.violations.map(v=>({width:size.width,path,id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})));if(path==='/'||path==='/styles/'||path==='/web/dialog/')await page.screenshot({path:`artifacts/${size.width}-${path==='/'?'home':path==='/styles/'?'styles':'detail'}.png`,fullPage:path==='/styles/'});}
 }
 await page.goto('/folklore-ui/');await expect(page.locator('.desk-frame-loading')).toBeHidden();await page.getByRole('button',{name:'Switch color theme'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','light');await page.screenshot({path:'artifacts/mobile-light.png'});await page.getByRole('button',{name:'Switch color theme'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 expect(findings).toEqual([]);
 for(const path of ['/downloads/folklore-plugin-1.1.0.zip','/downloads/folklore-skill-1.1.0.zip','/privacy/','/license/','/entries/dialog.md'])expect((await request.get(withBase(path))).ok()).toBeTruthy();
});

test('desktop search, complete specimen, and anatomy fit in one viewport',async({page})=>{
 for(const size of [{width:1280,height:720},{width:1440,height:900}]){
  await page.setViewportSize(size);
  for(const path of ['/','/styles/']){
   await page.goto(withBase(path));await page.evaluate(()=>document.fonts.ready);
   await expect(page.locator('.desk-frame-loading')).toBeHidden();
   for(const selector of ['.desk-search','.desk-canvas','[data-desk-part]']){
    for(const box of await page.locator(selector).evaluateAll(els=>els.map(el=>{const r=el.getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right};}))){
     expect(box.top,`${size.width} ${path} ${selector}: top`).toBeGreaterThanOrEqual(0);
     expect(box.bottom,`${size.width} ${path} ${selector}: bottom`).toBeLessThanOrEqual(size.height);
    }
   }
   if(path==='/'){const dialog=await page.frameLocator('#desk-frame').locator('.overlay-card').evaluate(el=>{const r=el.getBoundingClientRect();return {top:r.top,bottom:r.bottom,height:innerHeight};});expect(dialog.top).toBeGreaterThanOrEqual(0);expect(dialog.bottom).toBeLessThanOrEqual(dialog.height);}
   expect(await page.evaluate(()=>scrollY)).toBe(0);
   await page.locator('[data-desk-part="1"]').click();
   await expect(page.frameLocator('#desk-frame').locator('.specimen')).toHaveAttribute('data-inspect','1');
   if(path==='/')await page.screenshot({path:`artifacts/${size.width}-compact-desktop.png`});
  }
 }
});
