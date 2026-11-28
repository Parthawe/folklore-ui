# Drawer

A panel that enters from an edge to hold navigation or a secondary task. It can be modal or non-modal.

Platform: web
Terminology: Platform pattern
Aliases: side panel, navigation drawer

## Descriptions people use

- panel slides in from right
- menu comes from side

## Anatomy

- **Panel** (position: fixed): The edge-aligned surface.
- **Trigger** (<button>): The control that opens the panel.
- **Close action** (close()): A reachable exit inside the panel.

## Behavior

Choose modal behavior for a blocking task or a non-modal region for supporting content. Align to an edge, keep the close action reachable, and restore focus when dismissed.

## Build prompt

Implement a drawer for the current project. Choose modal behavior for a blocking task or a non-modal region for supporting content. Align to an edge, keep the close action reachable, and restore focus when dismissed. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <dialog> · position: fixed. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check whether the implementation incorrectly traps focus in a non-modal panel, covers its close action on a narrow screen, or leaves hidden controls tabbable.

## In code

- HTML / CSS: <dialog> · position: fixed

## Related entries

dialog, sheet, popover

## Sources

- [Dialog semantics for modal implementations](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [CSS fixed positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
