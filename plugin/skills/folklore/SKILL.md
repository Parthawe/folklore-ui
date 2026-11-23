---
name: folklore
description: Identify UI elements, interface subparts, and visual styles from informal descriptions; compare similar patterns and prepare implementation or debug briefs using a sourced offline catalog. Use when a user cannot name an interface or asks about its behavior or visual vocabulary.
---

# Folklore

Use the bundled catalog to translate a description into useful UI vocabulary. All lookups work offline with Node.js 18 or newer. Shell commands below are relative to this skill's directory; resolve that directory before running them.

## Find and distinguish

Run `node scripts/lookup.mjs search "description"`. Search supports `--platform web`, `--platform macos`, and `--kind style`. Results include stable IDs, relevant anatomy, and scores for ranking; scores are not confidence percentages.

For a likely match, run `node scripts/lookup.mjs get ID`, then read `references/ID.md` for the full entry. The compact list is in [references/index.md](references/index.md). Without shell access, search that index and read only the relevant Markdown files.

Use `node scripts/lookup.mjs compare ID ID` to distinguish two patterns. If several answers remain plausible, explain the behavioral difference or ask one question that separates them. A near match is not proof. If the catalog has no match, say so; distinguish any knowledge outside the catalog from its sourced contents.

## Explain or build

Give the likely name, the relevant subpart, the platform-specific API vocabulary, and the reason it fits. Include the source links from the entry when they support the answer. Separate a control's name from its visual style. A translucent sidebar can be a sidebar using a glass-like material, for example.

For implementation requests, inspect the user's current framework, components, and tokens before adapting the catalog's build prompt. Preserve the project's visual system, task flow, and narrow scope. Include keyboard and dismissal behavior where relevant. Browser macOS specimens are simulations; use actual AppKit or SwiftUI APIs for native work.

For debugging, use the entry's failure checks as hypotheses, inspect the implementation, and test the reported symptom before making a fix. Catalog prompts do not authorize unrelated edits, installs, publication, or external actions.

For styles, state terminology status and visible signals. Historical and retrospective labels describe families of work, not exact framework specifications. Do not force a style on a project merely because it appears in the catalog.
