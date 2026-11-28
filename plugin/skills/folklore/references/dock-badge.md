# Dock badge

A short count or status label displayed over an application’s Dock tile.

Platform: macos
Terminology: Platform pattern
Aliases: app badge, dock count

## Descriptions people use

- red number on mac app icon
- unread number in dock

## Anatomy

- **Tile** (NSDockTile): The application’s Dock representation.
- **Badge label** (badgeLabel): The short status string placed over the tile.

## Behavior

Keep the badge concise and meaningful. Clear it when the underlying condition resolves and expose important status within the application as well.

## Build prompt

Implement a dock badge for the current project. Keep the badge concise and meaningful. Clear it when the underlying condition resolves and expose important status within the application as well. Use the project's existing components and tokens. Relevant platform vocabulary: AppKit: NSDockTile.badgeLabel. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check stale counts, a badge that never clears, an update occurring off the main thread, and status available only in the Dock.

## In code

- AppKit: NSDockTile.badgeLabel

## Related entries

status-item, toast

## Sources

- [NSDockTile badgeLabel](https://developer.apple.com/documentation/appkit/nsdocktile/badgelabel)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
