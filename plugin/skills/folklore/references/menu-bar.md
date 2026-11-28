# Menu bar

The system-managed strip of application menus at the top of the Mac display.

Platform: macos
Terminology: Platform pattern
Aliases: application menu, main menu

## Descriptions people use

- file edit view at top of screen
- menus outside mac app window

## Anatomy

- **Menu title** (NSMenuItem): Opens a group of commands.
- **Command** (NSMenuItem.action): Connects an item to an action.
- **Shortcut** (keyEquivalent): Shows and invokes a keyboard equivalent.

## Behavior

Organize commands in native application menus, use expected names and shortcuts, and enable commands only when valid for the current context.

## Build prompt

Implement a menu bar for the current project. Organize commands in native application menus, use expected names and shortcuts, and enable commands only when valid for the current context. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSApplication.mainMenu; SwiftUI: commands(content:). Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check commands targeting the wrong window, shortcuts colliding with system conventions, and menu enabled state diverging from available actions.

## In code

- AppKit: NSApplication.mainMenu
- SwiftUI: commands(content:)

## Related entries

status-item, dropdown-menu, window

## Sources

- [NSApplication mainMenu](https://developer.apple.com/documentation/appkit/nsapplication/mainmenu)
- [SwiftUI commands](https://developer.apple.com/documentation/swiftui/scene/commands(content:))

Updated 2026-11-23. Folklore 1.2.0. Original content licensed MIT.
