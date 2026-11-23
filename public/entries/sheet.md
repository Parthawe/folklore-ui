# Bottom sheet

An edge-attached surface, often at the bottom of a small screen, for a compact task or set of choices.

Platform: web
Terminology: Platform pattern
Aliases: bottom drawer, action sheet

## Descriptions people use

- panel slides up from bottom
- mobile popup attached to bottom

## Anatomy

- **Surface** (<dialog>): The task area attached to the lower edge.
- **Heading** (aria-labelledby): The task name.
- **Actions** (<button>): The choices and explicit dismissal.

## Behavior

For a modal sheet, use dialog focus behavior, support Escape and an explicit close action, and account for safe-area insets. Do not require dragging to dismiss.

## Build prompt

Implement a bottom sheet for the current project. For a modal sheet, use dialog focus behavior, support Escape and an explicit close action, and account for safe-area insets. Do not require dragging to dismiss. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <dialog> · inset-block-end: 0. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check hidden content behind the software keyboard, scroll chaining, unavailable dismiss controls, and missing safe-area padding.

## In code

- HTML / CSS: <dialog> · inset-block-end: 0

## Related entries

drawer, dialog, mac-sheet

## Sources

- [Dialog behavior](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [CSS environment variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env)

Updated 2026-11-23. Folklore 1.0.0. Original content licensed MIT.
