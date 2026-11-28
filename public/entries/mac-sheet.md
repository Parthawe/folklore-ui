# Mac sheet

A modal dialog attached to a particular window. Its task belongs to that window’s document or context.

Platform: macos
Terminology: Platform pattern
Aliases: document modal sheet, window sheet

## Descriptions people use

- dialog attached to mac titlebar
- save confirmation blocks one window

## Anatomy

- **Parent window** (sheetParent): The window owning the task.
- **Sheet window** (NSWindow): The attached modal surface.
- **Completion** (endSheet(_:)): Ends the task and returns its result.

## Behavior

Present the sheet from its owning window and keep its scope clear. Provide cancellation and complete the presentation lifecycle without blocking unrelated windows.

## Build prompt

Implement a mac sheet for the current project. Present the sheet from its owning window and keep its scope clear. Provide cancellation and complete the presentation lifecycle without blocking unrelated windows. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSWindow.beginSheet(_:completionHandler:); SwiftUI: sheet(isPresented:onDismiss:content:). Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check presenting from the wrong window, stacking sheets unintentionally, lost cancellation results, and application-wide blocking where document modality was intended.

## In code

- AppKit: NSWindow.beginSheet(_:completionHandler:)
- SwiftUI: sheet(isPresented:onDismiss:content:)

## Related entries

sheet, window, dialog

## Sources

- [NSWindow beginSheet](https://developer.apple.com/documentation/appkit/nswindow/beginsheet(_:completionhandler:))

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
