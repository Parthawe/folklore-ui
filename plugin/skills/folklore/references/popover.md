# Popover

An anchored surface with supporting content or controls. Opening one does not inherently make the page modal.

Platform: web
Terminology: Platform pattern
Aliases: anchored panel, floating panel

## Descriptions people use

- little box attached to a button
- floating bubble with settings

## Anatomy

- **Invoker** (popovertarget): The control tied to the popup.
- **Surface** (popover): The content displayed in the top layer.
- **Anchor** (positioning): The visible relationship with its trigger.

## Behavior

Use a real button to invoke the surface. For auto popovers, preserve light dismissal and Escape. Label contained controls and keep the panel within the viewport.

## Build prompt

Implement a popover for the current project. Use a real button to invoke the surface. For auto popovers, preserve light dismissal and Escape. Label contained controls and keep the panel within the viewport. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: popover · popovertarget. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check clipping, lost trigger relationships, viewport overflow, and accidental use of menu roles for arbitrary form content.

## In code

- HTML / CSS: popover · popovertarget

## Related entries

tooltip, dropdown-menu, mac-popover

## Sources

- [HTML Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
