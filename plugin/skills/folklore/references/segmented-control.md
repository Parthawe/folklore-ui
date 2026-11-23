# Segmented control

A connected group of compact, mutually exclusive choices for one value.

Platform: web
Terminology: Platform pattern
Aliases: toggle group, segmented buttons

## Descriptions people use

- joined buttons choose one option
- day week month joined buttons

## Anatomy

- **Group label** (<legend>): Names the value being chosen.
- **Segment** (<input type="radio">): One mutually exclusive choice.
- **Selected state** (:checked): Shows the committed value.

## Behavior

Use radio semantics when choosing a value and tab semantics only when switching panels. Keep each choice labeled and support native arrow navigation.

## Build prompt

Implement a segmented control for the current project. Use radio semantics when choosing a value and tab semantics only when switching panels. Keep each choice labeled and support native arrow navigation. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <fieldset> · <input type="radio">. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check multiple selected values, a selected style that differs from the submitted value, and tab roles used for an ordinary setting.

## In code

- HTML / CSS: <fieldset> · <input type="radio">

## Related entries

tabs, toolbar

## Sources

- [WAI-ARIA radio group pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

Updated 2026-11-23. Folklore 1.0.0. Original content licensed MIT.
