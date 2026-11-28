# Status item

An application-owned item on the right side of the system menu bar, opening a menu or supporting view.

Platform: macos
Terminology: Platform pattern
Aliases: menu bar extra, menu bar app icon

## Descriptions people use

- tiny app icon by clock
- mac icon at right opens small app

## Anatomy

- **Button** (NSStatusBarButton): The visible menu bar control.
- **Menu** (NSMenu): An optional list of commands.
- **Extra** (MenuBarExtra): The SwiftUI menu bar scene.

## Behavior

Keep the item compact and recognizable, give it an accessible label, and handle display constraints rather than assuming it is always visible.

## Build prompt

Implement a status item for the current project. Keep the item compact and recognizable, give it an accessible label, and handle display constraints rather than assuming it is always visible. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSStatusItem; SwiftUI: MenuBarExtra. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check missing item retention in AppKit, overly wide status content, unusable template images, and behavior that assumes a fixed menu-bar position.

## In code

- AppKit: NSStatusItem
- SwiftUI: MenuBarExtra

## Related entries

menu-bar, mac-popover, dock-badge

## Sources

- [NSStatusItem](https://developer.apple.com/documentation/appkit/nsstatusitem)
- [MenuBarExtra](https://developer.apple.com/documentation/swiftui/menubarextra)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
