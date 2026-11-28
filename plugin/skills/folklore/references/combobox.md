# Combobox

A field paired with a popup of suggestions or options. An editable version filters choices as you type.

Platform: web
Terminology: Platform pattern
Aliases: autocomplete, typeahead

## Descriptions people use

- input suggests options while typing
- search box with matching choices

## Anatomy

- **Input** (role="combobox"): The editable value and popup state.
- **Suggestions** (role="listbox"): The available options.
- **Active option** (aria-activedescendant): The option currently navigated by keyboard.

## Behavior

Keep typing focus in the input, expose expanded state and the active suggestion, support arrow navigation, Enter to choose, and Escape to dismiss. Distinguish typed text from a committed choice.

## Build prompt

Implement a combobox for the current project. Keep typing focus in the input, expose expanded state and the active suggestion, support arrow navigation, Enter to choose, and Escape to dismiss. Distinguish typed text from a committed choice. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: role="combobox" · aria-controls. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check incorrect active-descendant IDs, lost input focus, unannounced result changes, and an Escape handler that erases the user’s query.

## In code

- HTML / CSS: role="combobox" · aria-controls

## Related entries

dropdown-menu, command-palette, form-field

## Sources

- [WAI-ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
