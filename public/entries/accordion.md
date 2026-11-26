# Accordion

Stacked headings that expand to reveal their own content. More than one section may be open.

Platform: web
Terminology: Platform pattern
Aliases: disclosure, expandable section

## Descriptions people use

- click heading to reveal answer
- faq rows that open

## Anatomy

- **Heading control** (<summary>): The always-visible toggle.
- **Content** (<details> contents): The expandable information.

## Behavior

Use native details and summary when appropriate. Keep the toggle keyboard operable and make the open state apparent. Decide whether sections can be opened independently.

## Build prompt

Implement a accordion for the current project. Use native details and summary when appropriate. Keep the toggle keyboard operable and make the open state apparent. Decide whether sections can be opened independently. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <details> · <summary>. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check nested interactive controls inside the toggle, invisible expanded content, and scripting that breaks native keyboard handling.

## In code

- HTML / CSS: <details> · <summary>

## Related entries

tabs, form-field

## Sources

- [HTML details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
