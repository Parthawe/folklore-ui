# Folklore

A field guide to interfaces. Describe an element or visual style, learn its name and parts, and take a useful brief into your coding agent.

**Website:** https://folklore-ui.pawar-d-parth.chatgpt.site

The initial catalog contains 20 web elements, 10 macOS elements, and 10 visual styles. The site and offline Codex skill are generated from one content source. No API key, database, or model service is required.

## Develop

Use Node.js 22.23.4 or newer for development.

```sh
npm ci
npm run dev
```

```sh
npm run validate
npm test
npm run check
npm run release
npm run build
npx playwright install chromium
npm run test:browser
```

`npm run release` creates versioned ZIPs in public/downloads. Run it before a production build. `npm run build` regenerates the public catalog, Markdown entries, and bundled skill references. Astro emits the static website to dist.

## Install the skill

Download the standalone skill ZIP from the website or GitHub Releases. Extract the `folklore` directory into `.agents/skills/` in a project, or `~/.agents/skills/` for personal use. Start a fresh Codex session and ask:

```text
Use $folklore to name the dark layer behind a popup and help me build it in this project.
```

The project source also contains the skill in `plugin/skills/folklore`. Copy that complete directory if installing from source. Node.js 18+ runs the dependency-free offline lookup commands. Without shell access, the skill can read the bundled Markdown catalog.

## Plugin distribution

The plugin ZIP contains a supported `.codex-plugin/plugin.json` compatibility manifest and the same skill. The portable root manifest is provided alongside it. Use a local or repo marketplace on supporting Codex surfaces; `examples/marketplace.json` shows the repository layout. This repository does not claim public plugin-directory approval.

Current packaging guidance: https://developers.openai.com/plugins/build/plugins

## Offline commands

From `plugin/skills/folklore`:

```sh
node scripts/lookup.mjs search "tiny app icon by clock" --platform macos
node scripts/lookup.mjs get status-item
node scripts/lookup.mjs compare dialog popover
node scripts/lookup.mjs search "frosted cards" --kind style
```

Commands print JSON. Search scores rank candidates and are not confidence percentages. Invalid commands and IDs exit nonzero with a JSON error on stderr.

## Contribute an entry

Edit `content/catalog.mjs`, add a corresponding specimen in `src/components/Specimen.astro`, and register its anatomy targets in `src/scripts/app.ts`. Each entry requires original writing, stable ID, informal search phrases, relevant source links, meaningful behavior and debug notes, and valid related-entry IDs. API mappings must be attached to a platform or framework. Style terminology must be labeled accurately.

Run validation, tests, type checks, release packaging, and the build. Test the main interaction by mouse and keyboard at desktop and mobile sizes. Browser macOS specimens are simulations; native API behavior requires native testing in the consuming project.

## Publication

`.openai/hosting.json` records the Sites project and static output. Deploy from an exact pushed source commit and its built artifact through the Sites workflow. GitHub Actions validates pushes and pull requests, and packages download archives on version tags. Website deployment is a separate explicit operation; GitHub releases do not silently deploy it.

## Privacy and license

Search runs locally. Bookmarks and theme preferences use browser localStorage. Queries appear in shareable URLs. There is no application telemetry, tracking, account system, or screenshot upload. Provider infrastructure may log ordinary network requests. The skill contains no network calls.

Original work is MIT licensed. Source Sans 3 is SIL OFL 1.1. See LICENSE and THIRD_PARTY_NOTICES.md. External documentation remains under its authors' licenses.
