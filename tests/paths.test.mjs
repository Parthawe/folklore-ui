import test from 'node:test';
import assert from 'node:assert/strict';
import {withBase} from '../src/lib/paths.mjs';
test('GitHub Pages paths preserve base, query parameters, and external URLs',()=>{
 assert.equal(withBase('/'),'/folklore-ui/');
 assert.equal(withBase('/web/scrim/?part=0'),'/folklore-ui/web/scrim/?part=0');
 assert.equal(withBase('/folklore-ui/styles/'),'/folklore-ui/styles/');
 assert.equal(withBase('https://developer.mozilla.org/'),'https://developer.mozilla.org/');
});
