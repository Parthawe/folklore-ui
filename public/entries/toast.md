# Toast

A brief status message that appears after an action without taking focus away from the task.

Platform: web
Terminology: Platform pattern
Aliases: snackbar, status notification

## Descriptions people use

- saved message at bottom disappears
- small success notification

## Anatomy

- **Status text** (role="status"): Announces an update politely.
- **Dismiss action** (<button>): Lets a person close a persistent notification.

## Behavior

Announce routine updates politely without moving focus. Keep essential information available elsewhere and give actionable notifications enough time to use.

## Build prompt

Implement a toast for the current project. Announce routine updates politely without moving focus. Keep essential information available elsewhere and give actionable notifications enough time to use. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: role="status". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check a live region created too late to announce, repeated announcements, focus stolen on display, and essential errors disappearing on a timer.

## In code

- HTML / CSS: role="status"

## Related entries

dialog, spinner

## Sources

- [ARIA status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
