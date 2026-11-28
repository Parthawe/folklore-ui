# Vibrancy

A native material effect that combines translucency and appearance-aware rendering behind interface content.

Platform: macos
Terminology: Platform pattern
Aliases: visual effect material, frosted sidebar

## Descriptions people use

- wallpaper shows through mac sidebar
- translucent native mac panel

## Anatomy

- **Material** (NSVisualEffectView.Material): The semantic kind of background material.
- **Blending mode** (blendingMode): Chooses how surrounding content contributes.
- **Appearance** (NSAppearance): Adapts the rendering to system appearance.

## Behavior

Use semantic system materials and preserve readable foreground content. Respect Reduce Transparency. The browser specimen approximates the effect and is not a native material.

## Build prompt

Implement a vibrancy for the current project. Use semantic system materials and preserve readable foreground content. Respect Reduce Transparency. The browser specimen approximates the effect and is not a native material. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSVisualEffectView; SwiftUI: Material. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check text contrast over unpredictable backgrounds, incorrect blending mode, hard-coded colors across appearances, and ignored accessibility transparency settings.

## In code

- AppKit: NSVisualEffectView
- SwiftUI: Material

## Related entries

glassmorphism, sidebar, scrim

## Sources

- [NSVisualEffectView](https://developer.apple.com/documentation/appkit/nsvisualeffectview)
- [SwiftUI Material](https://developer.apple.com/documentation/swiftui/material)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
