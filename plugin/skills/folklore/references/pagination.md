# Pagination

Controls that move through discrete pages of a collection.

Platform: web
Terminology: Platform pattern
Aliases: page navigation, page numbers

## Descriptions people use

- numbers below search results
- previous next pages

## Anatomy

- **Current page** (aria-current="page"): Identifies the active page.
- **Page link** (<a>): Navigates to an addressable page.
- **Previous / next** (<a> or <button>): Moves one page at a time.

## Behavior

Name the navigation region, indicate the current page, use real URLs when changing routes, and make boundary states unavailable. Keep keyboard focus predictable after changes.

## Build prompt

Implement a pagination for the current project. Name the navigation region, indicate the current page, use real URLs when changing routes, and make boundary states unavailable. Keep keyboard focus predictable after changes. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <nav> · aria-current="page". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check off-by-one ranges, previous links on the first page, stale URL state, and focus resetting to the document top after an in-place update.

## In code

- HTML / CSS: <nav> · aria-current="page"

## Related entries

data-table, carousel

## Sources

- [ARIA current attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
