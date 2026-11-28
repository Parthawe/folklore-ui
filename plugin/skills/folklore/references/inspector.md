# Inspector

A supporting panel for viewing or changing properties of the current selection.

Platform: macos
Terminology: Platform pattern
Aliases: properties panel, details inspector

## Descriptions people use

- right sidebar with selected item settings
- panel editing fill border properties

## Anatomy

- **Selection context** (selection state): Names the item being inspected.
- **Property control** (Binding): Reads and edits one property.
- **Visibility** (inspector(isPresented:content:)): Opens or hides the supporting region.

## Behavior

Keep controls synchronized with selection. Provide clear empty and multi-selection states, preserve undo for changes, and allow the panel to close.

## Build prompt

Implement a inspector for the current project. Keep controls synchronized with selection. Provide clear empty and multi-selection states, preserve undo for changes, and allow the panel to close. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSViewController; SwiftUI: inspector(isPresented:content:). Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check stale values after selection changes, writes targeting an old selection, missing mixed-value state, and edits that bypass undo.

## In code

- AppKit: NSViewController
- SwiftUI: inspector(isPresented:content:)

## Related entries

sidebar, toolbar, window

## Sources

- [SwiftUI inspector](https://developer.apple.com/documentation/swiftui/view/inspector(ispresented:content:))

Updated 2026-11-23. Folklore 1.2.0. Original content licensed MIT.
