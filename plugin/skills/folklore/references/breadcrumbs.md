# Breadcrumbs

A trail of ancestors showing where the current page sits in a hierarchy.

Platform: web
Terminology: Platform pattern
Aliases: location trail, breadcrumb trail

## Descriptions people use

- home slash projects slash current page
- path of links above heading

## Anatomy

- **Ancestor** (<a>): Links to a parent location.
- **Separator** (aria-hidden): Visually separates levels.
- **Current location** (aria-current="page"): Names the current page.

## Behavior

Order the trail from broad to specific, give the navigation a name, and keep decorative separators out of the accessible names.

## Build prompt

Implement a breadcrumbs for the current project. Order the trail from broad to specific, give the navigation a name, and keep decorative separators out of the accessible names. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <nav aria-label="Breadcrumb">. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check incorrect hierarchy, separators read aloud as content, and a current-page label that is indistinguishable from ancestors.

## In code

- HTML / CSS: <nav aria-label="Breadcrumb">

## Related entries

tabs, pagination

## Sources

- [WAI-ARIA breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
