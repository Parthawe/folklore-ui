# Tabs

A row of choices that switches the content displayed in one shared region.

Platform: web
Terminology: Platform pattern
Aliases: tab bar, tabbed interface

## Descriptions people use

- labels across top changing same panel
- overview and settings tabs

## Anatomy

- **Tab list** (role="tablist"): Groups the choices.
- **Tab** (aria-selected): Names and selects one panel.
- **Panel** (role="tabpanel"): Contains the selected content.

## Behavior

Associate each tab with its panel, expose one selected tab, and support arrow keys plus Home and End. Choose automatic activation only when panel changes are immediate.

## Build prompt

Implement a tabs for the current project. Associate each tab with its panel, expose one selected tab, and support arrow keys plus Home and End. Choose automatic activation only when panel changes are immediate. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: role="tablist" · role="tabpanel". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check tab/panel IDs, hidden panels remaining focusable, selection conveyed only by color, and arrow navigation moving page scroll.

## In code

- HTML / CSS: role="tablist" · role="tabpanel"

## Related entries

segmented-control, accordion

## Sources

- [WAI-ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

Updated 2026-11-23. Folklore 1.2.0. Original content licensed MIT.
