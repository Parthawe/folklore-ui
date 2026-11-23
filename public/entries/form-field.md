# Form field

A labeled control with supporting guidance and an error message when its value needs attention.

Platform: web
Terminology: Platform pattern
Aliases: input field, text field

## Descriptions people use

- gray text inside box disappears
- label helper text error below input

## Anatomy

- **Label** (<label for>): The persistent name of the control.
- **Placeholder** (placeholder): An optional example, not a replacement for a label.
- **Helper or error** (aria-describedby): Explains requirements or a specific correction.

## Behavior

Keep a visible label, associate hints and errors with the control, preserve input on validation failure, and mark invalid values with aria-invalid.

## Build prompt

Implement a form field for the current project. Keep a visible label, associate hints and errors with the control, preserve input on validation failure, and mark invalid values with aria-invalid. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <label> · aria-describedby. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check label association, placeholder-only instructions, error text announced without context, and validation that clears the entered value.

## In code

- HTML / CSS: <label> · aria-describedby

## Related entries

combobox, toast

## Sources

- [WAI forms labeling tutorial](https://www.w3.org/WAI/tutorials/forms/labels/)

Updated 2026-11-23. Folklore 1.0.0. Original content licensed MIT.
