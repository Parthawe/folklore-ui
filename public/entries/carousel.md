# Carousel

A sequence of slides displayed in a bounded region with controls to move between them.

Platform: web
Terminology: Platform pattern
Aliases: slideshow, image slider

## Descriptions people use

- pictures with dots underneath
- slides move left and right

## Anatomy

- **Slide** (role="group"): One item in the sequence.
- **Previous / next** (<button>): Moves through items.
- **Position** (aria-live): Reports the current slide after a user action.

## Behavior

Provide labeled navigation and position information. Keep inactive slides out of the tab sequence. Avoid automatic rotation, or provide a pause control and pause on focus and hover.

## Build prompt

Implement a carousel for the current project. Provide labeled navigation and position information. Keep inactive slides out of the tab sequence. Avoid automatic rotation, or provide a pause control and pause on focus and hover. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: aria-roledescription="carousel". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check focus on hidden slides, unlabeled dots, unwanted rotation after interaction, and slide movement that ignores reduced motion.

## In code

- HTML / CSS: aria-roledescription="carousel"

## Related entries

pagination, tabs

## Sources

- [WAI-ARIA carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)

Updated 2026-11-23. Folklore 1.0.0. Original content licensed MIT.
