# Spinner

An indeterminate activity indicator used when the amount of work remaining is unknown.

Platform: web
Terminology: Platform pattern
Aliases: loading wheel, activity indicator

## Descriptions people use

- circle spinning while waiting
- loading circle with no percent

## Anatomy

- **Indicator** (aria-hidden="true"): Decorative movement that signals activity.
- **Status label** (role="status"): Names the operation that is in progress.

## Behavior

Describe the pending operation in text. Do not imply a percentage. Replace the wait state with a success result or a useful error and retry action. Respect reduced motion.

## Build prompt

Implement a spinner for the current project. Describe the pending operation in text. Do not imply a percentage. Replace the wait state with a success result or a useful error and retry action. Respect reduced motion. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: role="status" · animation. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check missing status text, repeated live announcements, fake progress, and a failed request that never leaves the waiting state.

## In code

- HTML / CSS: role="status" · animation

## Related entries

skeleton, toast

## Sources

- [ARIA status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)

Updated 2026-11-23. Folklore 1.2.0. Original content licensed MIT.
