# Glassmorphism

Translucent, blurred surfaces sit in front of visible background content, often edged by a thin highlight.

Platform: style
Terminology: Industry-coined trend
Aliases: frosted glass UI

## Descriptions people use

- frosted cards over colorful wallpaper
- transparent blurry panel

## Defining signals

- **Translucent surface** (Visual signal): The foreground surface lets background colors contribute.
- **Backdrop blur** (Visual signal): Blur softens the scene behind the panel.
- **Visible background** (Visual signal): Large background forms make the transparency legible.
- **Fine edge highlight** (Visual signal): A fine light outline distinguishes the material edge.

## Behavior

Use a background with enough variation to reveal the material. Keep text on a stable readable surface and supply an opaque fallback where transparency is unsupported or reduced.

## Build prompt

Create a glassmorphism visual direction for the current project. Use a background with enough variation to reveal the material. Keep text on a stable readable surface and supply an opaque fallback where transparency is unsupported or reduced. Preserve the existing task flow, content, accessible contrast, clear focus, and reduced-motion support.

## Debug prompt

Check blur applied to foreground content, weak contrast, missing opaque fallback, and excessive overlapping layers.

## In code

Visual style; no single framework API.

## Related entries

vibrancy, neumorphism, frutiger-aero

## Sources

- [Malewicz: first-person style explanation](https://www.youtube.com/watch?v=PFADyVTX97w)
- [CSS backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)

Updated 2026-11-23. Folklore 1.0.0. Original content licensed MIT.
