# Window

A top-level application surface that can be moved, resized, and managed independently.

Platform: macos
Terminology: Platform pattern
Aliases: app window, document window

## Descriptions people use

- mac app frame with traffic lights
- movable window with title bar

## Anatomy

- **Title bar** (NSWindow.title): Names the document or context.
- **Window controls** (standardWindowButton(_:)): The close, minimize, and zoom controls.
- **Content** (contentView): The application’s working area.

## Behavior

Use native window management and standard controls. Preserve keyboard shortcuts, resizing limits, and a meaningful window title. The web specimen is a simulation.

## Build prompt

Implement a window for the current project. Use native window management and standard controls. Preserve keyboard shortcuts, resizing limits, and a meaningful window title. The web specimen is a simulation. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSWindow; SwiftUI: WindowGroup. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check custom chrome blocking dragging, overwritten standard shortcuts, an unhelpful window title, and minimum sizes hiding required actions.

## In code

- AppKit: NSWindow
- SwiftUI: WindowGroup

## Related entries

toolbar, sidebar, mac-sheet

## Sources

- [NSWindow](https://developer.apple.com/documentation/appkit/nswindow)
- [WindowGroup](https://developer.apple.com/documentation/swiftui/windowgroup)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
