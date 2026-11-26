# Tooltip

A short description shown when a control is hovered or focused. It contains no interactive controls.

Platform: web
Terminology: Platform pattern
Aliases: hover hint, help bubble

## Descriptions people use

- tiny label when mouse sits on icon
- text above a button on hover

## Anatomy

- **Trigger** (aria-describedby): The control being explained.
- **Description** (role="tooltip"): Supplemental text rather than the sole accessible name.

## Behavior

Show the description on keyboard focus as well as hover. Let Escape dismiss it. Keep essential information available without relying on hover.

## Build prompt

Implement a tooltip for the current project. Show the description on keyboard focus as well as hover. Let Escape dismiss it. Keep essential information available without relying on hover. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: role="tooltip" · aria-describedby. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check focus access, touch-only discovery, tooltip content that includes links, and icon buttons with no accessible name.

## In code

- HTML / CSS: role="tooltip" · aria-describedby

## Related entries

popover, form-field

## Sources

- [WAI-ARIA tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
