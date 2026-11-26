# Scrim

The dimming layer between a modal surface and the page behind it. Blur is optional.

Platform: web
Terminology: Platform pattern
Aliases: backdrop, modal overlay

## Descriptions people use

- dark layer behind popup
- page goes gray under the box
- dim see through background

## Anatomy

- **Dim layer** (::backdrop): Reduces the prominence of background content.
- **Blur** (backdrop-filter): Optionally softens what is behind the layer.
- **Dismiss area** (pointer event): May dismiss a non-destructive task when clicked.

## Behavior

Place the dim layer behind the active modal and above other content. Keep the page inert while the modal is open. Make outside-click dismissal a deliberate choice.

## Build prompt

Implement a scrim for the current project. Place the dim layer behind the active modal and above other content. Keep the page inert while the modal is open. Make outside-click dismissal a deliberate choice. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: ::backdrop. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check stacking contexts, invisible overlays intercepting clicks, body scrolling, and use of show() where showModal() was intended.

## In code

- HTML / CSS: ::backdrop

## Related entries

dialog, popover, vibrancy

## Sources

- [CSS backdrop pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::backdrop)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
