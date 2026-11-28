# Modal dialog

A focused task in a window above the page. The rest of the interface is temporarily unavailable.

Platform: web
Terminology: Platform pattern
Aliases: modal, popup

## Descriptions people use

- box in the middle that blocks everything
- popup with cancel and save

## Anatomy

- **Surface** (<dialog>): The container for the task.
- **Title** (aria-labelledby): The accessible name of the dialog.
- **Dismiss action** (close()): An explicit way to leave the task.

## Behavior

Open modally, move focus inside, keep background content inert, support Escape, and return focus to the opener when closed.

## Build prompt

Implement a modal dialog for the current project. Open modally, move focus inside, keep background content inert, support Escape, and return focus to the opener when closed. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <dialog> · showModal(). Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check showModal() versus show(), missing accessible title, focus escaping, and failure to restore focus.

## In code

- HTML / CSS: <dialog> · showModal()

## Related entries

scrim, drawer, sheet

## Sources

- [WAI-ARIA modal dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [HTML dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
