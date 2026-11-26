# Dropdown menu

A button opens a compact list of commands. Choosing a command performs an action.

Platform: web
Terminology: Platform pattern
Aliases: menu button, action menu, overflow menu

## Descriptions people use

- three dots that open actions
- button with rename and delete list

## Anatomy

- **Menu button** (aria-expanded): Announces whether commands are shown.
- **Menu** (role="menu"): Groups available commands.
- **Item** (role="menuitem"): One action in the menu.

## Behavior

Support arrow-key movement, Home and End, Escape to close, and focus return. For a simple list of destination links, use ordinary navigation instead of application menu semantics.

## Build prompt

Implement a dropdown menu for the current project. Support arrow-key movement, Home and End, Escape to close, and focus return. For a simple list of destination links, use ordinary navigation instead of application menu semantics. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: aria-haspopup="menu" · role="menu". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check Tab versus arrow-key behavior, stale aria-expanded, focus lost after commands, and menu roles attached to a plain link list.

## In code

- HTML / CSS: aria-haspopup="menu" · role="menu"

## Related entries

combobox, command-palette, menu-bar

## Sources

- [WAI-ARIA menu button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
