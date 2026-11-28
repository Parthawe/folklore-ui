# Toolbar

A row of actions associated with the current window or document, often integrated with the title bar.

Platform: macos
Terminology: Platform pattern
Aliases: window toolbar, title bar actions

## Descriptions people use

- buttons across top of mac window
- new share view controls in titlebar

## Anatomy

- **Item** (NSToolbarItem): An action or control in the toolbar.
- **Item group** (NSToolbarItemGroup): Related controls presented together.
- **Customization** (allowsUserCustomization): Optional user arrangement of actions.

## Behavior

Use native toolbar placements, label actions, and account for overflow and narrow windows. Preserve toolbar customization when the product supports it.

## Build prompt

Implement a toolbar for the current project. Use native toolbar placements, label actions, and account for overflow and narrow windows. Preserve toolbar customization when the product supports it. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSToolbar; SwiftUI: toolbar(content:). Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check commands vanishing at narrow widths, ambiguous icon-only actions, duplicate primary actions, and misplaced items in unified title bars.

## In code

- AppKit: NSToolbar
- SwiftUI: toolbar(content:)

## Related entries

window, inspector, segmented-control

## Sources

- [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar)
- [SwiftUI toolbar](https://developer.apple.com/documentation/swiftui/view/toolbar(content:))

Updated 2026-11-23. Folklore 1.2.0. Original content licensed MIT.
