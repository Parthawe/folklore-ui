# Release checks

## Coverage

- Search: informal phrase, misspelling, API term, anatomy part, platform filter, style filter, query URL, empty query, no match, failed catalog fetch.
- Collection: save, reload, saved page, unsave, blocked browser storage, cross-tab change.
- Export: copy brief, debug prompt, Markdown, share URL, clipboard-denied response, downloadable archives.
- Navigation: element/style indexes, detail URLs, comparison selectors and same-entry warning, source and policy links, 404.
- Specimens: modal focus and Escape, non-modal popover dismissal, menu arrows, combobox selection and no match, palette, tabs, accordion, toast, form error and success, table sorting, pagination boundaries, loading success/error/reset, carousel cycle, segmented choices, native simulation toggles, style control feedback, anatomy selection.
- Appearance: desktop 1440×1000 and mobile 390×844, dark and light, no horizontal overflow, visible focus, reduced motion; all 40 details have specimens and readable text.
- Offline package: isolated folder lookup, invalid command/ID, both archives extract, manifest validation, references consistent with website.

## Evidence

Unit tests cover search, anatomy retrieval, Markdown fidelity, generated catalog consistency, and dependency-free isolated lookup. Browser tests cover the site controls, sample interactions, all entry routes, accessibility scans, and desktop/mobile screenshots. Artifacts are ignored by Git. Native macOS behavior requires a native consumer project and is not claimed as tested here.

## Mechanical design review

The detector flagged CSS triangle borders in the flat-design specimen as accent borders. Those borders create a triangular shape; they are not panel accents. The style specimens intentionally demonstrate material effects excluded from the surrounding library interface.
