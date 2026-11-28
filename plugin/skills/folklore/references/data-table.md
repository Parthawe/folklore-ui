# Data table

Related records arranged in rows and columns with explicit column headers.

Platform: web
Terminology: Platform pattern
Aliases: table view, records table

## Descriptions people use

- spreadsheet rows with sortable columns
- list of records in columns

## Anatomy

- **Header** (<th scope="col">): Names the values in a column.
- **Row** (<tr>): One record across columns.
- **Sort control** (aria-sort): Describes the active sort direction.

## Behavior

Use table semantics for tabular information, buttons for sorting, and aria-sort on the sorted header. Preserve readable content on small screens with a labeled scroll region when needed.

## Build prompt

Implement a data table for the current project. Use table semantics for tabular information, buttons for sorting, and aria-sort on the sorted header. Preserve readable content on small screens with a labeled scroll region when needed. Use the project's existing components and tokens. Relevant platform vocabulary: HTML / CSS: <table> · <th> · aria-sort. Verify keyboard access, readable focus, and the relevant empty or error states.

## Debug prompt

Check sort order versus displayed values, missing header associations, focus lost after sorting, and use of grid roles without grid keyboard behavior.

## In code

- HTML / CSS: <table> · <th> · aria-sort

## Related entries

pagination, skeleton

## Sources

- [WAI-ARIA table pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)

Updated 2026-11-23. Folklore 1.2.1. Original content licensed MIT.
