# Command palette

A searchable launcher for application actions, often opened with a keyboard shortcut.

Platform: web
Terminology: Platform pattern
Aliases: command menu, quick actions

## Descriptions people use

- command k search for actions
- spotlight inside a website

## Anatomy

- **Search** (<input>): Narrows available actions.
- **Results** (role="listbox"): The matching commands.
- **Shortcut** (<kbd>): Shows an available keyboard action.

## Behavior

Use dialog behavior for the launcher and combobox/listbox behavior for search. Open via a visible button as well as a shortcut. Announce empty results and return focus on exit.

## Build prompt

Implement a command palette for the current project. Use dialog behavior for the launcher and combobox/listbox behavior for search. Open via a visible button as well as a shortcut. Announce empty results and return focus on exit. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <dialog> · role="combobox". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check shortcut conflicts, input focus on open, commands matching text but unavailable in context, and inconsistent Enter behavior.

## In code

- HTML / CSS: <dialog> · role="combobox"

## Related entries

combobox, dialog, dropdown-menu

## Sources

- [Combobox interaction model](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Modal dialog interaction model](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

Updated 2026-11-23. Folklore 1.0.0. Original content licensed MIT.
