# Mac popover

A transient native surface anchored to another control, used for supporting information or a small task.

Platform: macos
Terminology: Platform pattern
Aliases: native popover, anchored bubble

## Descriptions people use

- mac floating panel with arrow
- small window points to toolbar button

## Anatomy

- **Content** (contentViewController): The controls or information in the popover.
- **Anchor** (positioningRect): The area the popover points toward.
- **Dismiss behavior** (NSPopover.Behavior): Controls how outside interaction closes it.

## Behavior

Attach to the invoking control, choose transient behavior deliberately, and avoid overloading a small anchored surface with a long workflow.

## Build prompt

Implement a mac popover for the current project. Attach to the invoking control, choose transient behavior deliberately, and avoid overloading a small anchored surface with a long workflow. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSPopover; SwiftUI: popover(isPresented:attachmentAnchor:arrowEdge:content:). Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check a stale positioning view, inappropriate application-defined dismissal, clipped content, and focus failing to return to the invoker.

## In code

- AppKit: NSPopover
- SwiftUI: popover(isPresented:attachmentAnchor:arrowEdge:content:)

## Related entries

popover, status-item, mac-sheet

## Sources

- [NSPopover](https://developer.apple.com/documentation/appkit/nspopover)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
