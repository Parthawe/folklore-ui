# Sidebar

A navigation column that selects destinations or source collections within a window.

Platform: macos
Terminology: Platform pattern
Aliases: source list, navigation sidebar

## Descriptions people use

- left column in finder
- folders down left side of mac app

## Anatomy

- **Destination** (List selection): The selected source or location.
- **Group** (Section): A named collection of destinations.
- **Divider** (NSSplitView): The boundary between navigation and content.

## Behavior

Keep selection tied to the visible destination, use native split-view behavior, and support collapsing navigation without losing the current context.

## Build prompt

Implement a sidebar for the current project. Keep selection tied to the visible destination, use native split-view behavior, and support collapsing navigation without losing the current context. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSSplitViewController; SwiftUI: NavigationSplitView. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check selection and detail drifting apart, collapsed navigation with no recovery, and sidebar width that makes destination names unreadable.

## In code

- AppKit: NSSplitViewController
- SwiftUI: NavigationSplitView

## Related entries

window, inspector

## Sources

- [NavigationSplitView](https://developer.apple.com/documentation/swiftui/navigationsplitview)
- [NSSplitViewController](https://developer.apple.com/documentation/appkit/nssplitviewcontroller)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
