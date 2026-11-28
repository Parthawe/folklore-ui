# Folklore

A field guide to interfaces. Describe an element or visual style, learn its name and parts, and take a useful brief into your coding agent.

**Website:** https://parthawe.github.io/folklore-ui

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

GitHub Pages hosts the website at `https://parthawe.github.io/folklore-ui/`. Astro’s `/folklore-ui` base and the shared URL helper keep links, scripts, search, and downloads inside that project path. GitHub Actions validates pushes and pull requests, deploys passing main-branch builds to Pages, and packages download archives on version tags. The former Sites deployment is retired after the Pages migration is verified.

## Privacy and license

Search runs locally. Bookmarks and theme preferences use browser localStorage. Queries appear in shareable URLs. There is no application telemetry, tracking, account system, or screenshot upload. Provider infrastructure may log ordinary network requests. The skill contains no network calls.

Original work is MIT licensed. Source Sans 3 is SIL OFL 1.1. See LICENSE and THIRD_PARTY_NOTICES.md. External documentation remains under its authors' licenses.

## Screen design audit

The Folklore plugin includes `$design-slop-audit`. Give it a screenshot, URL, or current project to review generic design choices, hierarchy, copy, and relevant interaction states. Findings cite evidence and propose specific fixes; they do not claim to identify AI authorship.

After an existing installation, refresh the marketplace and install the current version:

```sh
codex plugin marketplace upgrade folklore-local
codex plugin add folklore@folklore-local
```

## Task-aware design review

Open `/review/` on the GitHub Pages site to prepare a local design-review plan. Enter the user’s task and reported screen details, then inspect risks, untested checks, useful patterns, and a copyable Codex brief. The tool matches English phrases and keywords; it does not inspect images or URLs, run a model, or assign an AI-authorship score. The research route links to twelve primary sources.

The `design-slop-audit` skill in v1.2.0 includes the same planner:

```bash
node scripts/review.mjs --task "Help a customer review their order and pay" --screen "No error state after an unavailable payment method" --markdown
```

The planner prepares inspection questions. Use the resulting brief with the real project or screen in Codex before confirming defects.
