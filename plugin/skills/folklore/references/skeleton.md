# Skeleton

A placeholder shaped like content whose layout is known while that content loads.

Platform: web
Terminology: Platform pattern
Aliases: loading placeholder, content placeholder

## Descriptions people use

- gray shapes before content loads
- shimmering fake text rows

## Anatomy

- **Content silhouette** (aria-hidden="true"): The temporary visual structure.
- **Loading region** (aria-busy): Marks the content being updated.

## Behavior

Match the expected layout without inventing loaded data, mark decorative shapes hidden from assistive technology, and provide a text loading status and an error recovery path.

## Build prompt

Implement a skeleton for the current project. Match the expected layout without inventing loaded data, mark decorative shapes hidden from assistive technology, and provide a text loading status and an error recovery path. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: aria-busy="true". Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check layout shift, endless loading with no error path, screen readers reading placeholder text, and animated shimmer ignoring reduced motion.

## In code

- HTML / CSS: aria-busy="true"

## Related entries

spinner, data-table

## Sources

- [ARIA busy attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

Updated 2026-11-23. Folklore 1.1.0. Original content licensed MIT.
