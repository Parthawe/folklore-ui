---
name: Folklore
description: A searchable specimen desk for interface vocabulary.
colors:
  canvas: "#000"
  surface: "#282828"
  surface-raised: "#383838"
  ink: "#eeeee5"
  muted: "#b0afa8"
  line: "#41413e"
  accent: "#9ac4ff"
  stage: "#191919"
  control-bg: "#343436"
  control-selected: "#56565a"
  control-field: "#1c1c1e"
  control-border: "#737378"
  control-blue: "#0964d2"
  control-blue-hover: "#0758bd"
  control-selection: "#244e7c"
  control-selection-text: "#fff"
  light-control-bg: "#e2e2de"
  light-control-selected: "#fafaf7"
  light-control-field: "#fafaf7"
  light-control-border: "#858580"
  light-control-selection: "#d4e6fb"
  light-control-selection-text: "#173e67"
  light-canvas: "#f5f5ef"
  light-surface: "#e9e9e3"
  light-surface-raised: "#dcdcd5"
  light-ink: "#20211f"
  light-muted: "#61615c"
  light-line: "#ccccc4"
  light-accent: "#005dbb"
typography:
  display:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "48px"
    fontWeight: 360
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  anatomy-title:
    fontSize: "14px"
    fontWeight: 450
    letterSpacing: "0"
  anatomy-description:
    fontSize: "13px"
    lineHeight: 1.4
  label:
    fontSize: "14px"
  caption:
    fontSize: "12px"
  code:
    fontSize: "11px"
  navigation:
    fontSize: "17px"
  prose-display-max:
    fontSize: "64px"
  specimen-avatar:
    fontSize: "8px"
  scene-meta:
    fontSize: "10px"
  scene-caption:
    fontSize: "11px"
  scene-collection:
    fontSize: "26px"
  scene-mobile-heading:
    fontSize: "22px"
  scene-short-heading:
    fontSize: "21px"
  review-risk-title:
    fontSize: "18px"
  review-source-title:
    fontSize: "20px"
  control:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  review-task-title:
    fontSize: "26px"
    fontWeight: 600
  review-working-title:
    fontSize: "17px"
    fontWeight: 600
  download:
    fontSize: "19px"
  mobile-title:
    fontSize: "28px"
  narrow-display:
    fontSize: "40px"
  mobile-display:
    fontSize: "42px"
rounded:
  control: "4px"
  field: "5px"
  editor: "12px"
  control-group: "8px"
  control-selection: "6px"
spacing:
  compact: "8px"
  control-gap: "12px"
  panel: "14px"
  stage-block: "16px"
  stage-inline: "18px"
  section: "24px"
  intro-gap: "32px"
components:
  install-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.control}"
    padding: "9px 13px"
  install-button-hover:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.canvas}"
  search:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
  editor:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.editor}"
  catalog-selected:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
---

# Design System: Folklore

## Overview

Folklore uses [Paper](https://paper.design/) as its current visual reference: a black page, warm ivory type, and one connected graphite editor. Its searchable index, working specimen, and clickable anatomy share the same workspace. Folklore keeps its own name, catalog, copy, and artwork.

The reference-library specimen uses a dark editorial canvas with original poster studies and a charcoal native dialog. Other visual-style specimens retain their own materials and palettes. These are examples users inspect, so their distinctive typography, glass, gradients, and shadows belong inside the examples.

## Colors

The dark shell uses the canvas, surface, raised surface, ink, muted, and line tokens above. Blue accents identify focus and selection. Selected catalog entries and anatomy controls use a subdued blue surface with readable text. The stage has its own darker graphite ground.

The light theme maps the shell to the corresponding light tokens. The editorial scene retains its dark surfaces. Poster color stays inside the artwork: the three studies combine cobalt and ivory, ivory and charcoal, and pale green with forest green.

## Typography

Self-hosted Figtree Variable replaces DM Sans after a rendered comparison with Paper’s Matter lettering. Figtree is a licensed open-font approximation, not the original Matter font. The interface imports Fontsource’s variable family with swap loading; browser unicode-range selection fetches the needed subset. Its OFL notice is copied into public/fonts/Figtree-LICENSE.txt during generation.

Use one interface family and five semantic roles: 48px display, 24px specimen title, 16px body/search, 14px working labels, and 12px supporting metadata. The desktop display holds 48px at both 1280px and 1440px, weight 360, line height 1.02, tracking −0.02em. Navigation uses 17px with −0.01em tracking. Anatomy names use 14px/1.4 at weight 450; descriptions use 13px/1.4. Code remains 11px monospace. Numbers use the interface family. Outer text sizes are declared through role variables, rather than repeated incidental sizes.

Prose stays at 16px with a comfortable measure. Introductory notes use 16px/1.45 and a maximum 40ch; specimen descriptions use 14px/1.5 and 60ch. Narrow layouts reduce only display type. The phone introduction uses 42px and 14px supporting copy. All controls retain visible keyboard focus and browser zoom.

## Layout

Header, desk, and footer share a 1280px maximum and calc(100% - 192px) width, yielding 96px gutters at a 1280px viewport. The desktop header is 64px. The intro uses a flexible title column, a 31% note column, 30px gap, and 18px/26px vertical padding. At desktop heights up to 760px, intro padding becomes 14px/20px.

The editor combines a 32px title bar, a horizontal search row, and three connected panels. Search has a 42px minimum height, with a flexible input and adjacent example queries. Matching-count announcements are visually hidden because the count is already visible in the catalog; fetch, clipboard and storage failures remain visible. The desktop index is 182px and inspector 268px. The index scrolls independently. Catalog labels use 14px and may wrap rather than clip.

The stage uses 16px/18px/12px padding. Its live canvas is clamp(280px, calc(100dvh - 480px), 420px). At desktop heights up to 760px it becomes 260px, with reduced control/readout spacing. This preserves the larger font sizes and fits search, the entire example, anatomy controls, and the selected-part readout at 1280×720. The standard height applies at 1440×900. Test empty and populated queries on both catalog routes.

From 981px to 1200px, gutters become 40px, the index is 176px, inspector 250px, display 40px, and intro note 14px. At 980px the inspector moves below the specimen, the index becomes 175px, search examples move below the field, and canvas height is 370px. At 700px use 16px gutters, a 65px header, stacked panels, horizontal catalog, a 46px search field, and a 350px canvas. Phone anatomy descriptions use 14px/1.5.

## Elevation & Depth

Keep the shell flat. The specimen is a broad editorial canvas with a thin application bar and no duplicate sidebar or surrounding floating-window shadow. Posters fill the available scene. The native dialog uses its own 0 18px 50px #0007 shadow to explain real layering. Its backdrop defaults to translucent black; anatomy can deepen the dim layer, apply 7px blur, or outline the protected dialog surface.

## Shapes

The editor has 12px corners, fields and controls 4px, and the native dialog 8px. Poster edges stay nearly square. Thin neutral rules join the panels. Avoid adding another card frame around the specimen canvas.

## Components

### Search and catalog

Search uses a black field with a neutral border and lavender focus-within outline. Clear is a small graphite control. Keep query examples close to the field on desktop. Preserve result status, empty states, platform filters, and keyboard access. Clearing with the control or Escape preserves the current specimen; edits that retain the same result should retain its iframe. Platform filtering selects a matching specimen when necessary. Catalog selection scrolls within its own rail.

### Anatomy inspector

Use compact numbered buttons, graphite selected surfaces, and lavender selected numbers. Names and descriptions stay readable at their documented sizes. The active part updates the real specimen and its readout. Keep aliases behind the disclosure and sources available beneath the controls.

### Editorial specimen

The live scrim example is an inset reference-library workspace with a thin title bar and three original SVG poster studies: “Form & feeling.”, “The shape of a thought.”, and “In good company.” Artwork uses code-native geometry and typography. It is original illustrative content; the collection labels and counts are example data.

The scene uses a charcoal native `dialog` with a collection destination, Cancel, and Save idea. Its form uses native dialog submission. Dim, blur, and dismiss anatomy inspection operate on the actual dialog layers. At specimen widths of 450px or less, the third poster disappears, leaving two columns. Compact scene text must not become a default for outer product controls.

### Buttons and supporting pages

Installation and copy-brief actions use ivory fills with dark text; hover uses the muted tone. Secondary actions remain quiet and bordered where appropriate. Installation downloads use padded neutral containers, and code panels use graphite backgrounds, fine borders, 5px corners, and 20px padding. Preserve local saves, copy feedback, export/download behavior, error recovery, source references, copyright, and policy links.

## Do's and Don'ts

- Do keep search, the working example, and anatomy close together on desktop.
- Do retain light typography, restrained tracking, neutral panel divisions, and the documented responsive changes.
- Do preserve the defining palettes and effects of other style specimens.
- Do keep the shell flat and reserve stronger depth for demonstrated layers.
- Don't reuse Paper’s branding, commercial font files, or reference artwork.
- Don't add promotional filler, invented proof, or decorative grids across the shell.
- Don't treat specimen-only microcopy, small labels, or poster headings as reusable product typography.

## Task-aware design review

The review route extends the established black, graphite, ivory and Figtree system. Its 48px introduction leads into one connected input/result workbench. Desktop columns allocate 36% to context and the rest to the report, with a 320px input minimum. Fields use 14px working text, results use 14–16px prose, risk titles 18px, and supporting metadata 12px. Task type is the result heading; priority sits beside a risk title. Directional icons use authored 15px stroke SVGs.

Inputs cover task, audience, screen description, and an editable task lens. The initial context is explicitly an example. Editing makes the existing report stale and disables exports until rebuilt. Empty inputs, missing task, no matched risks, clipboard refusal, and clear actions have explicit feedback. Tabs support arrow keys, Home, and End. Report details disclose evidence, change, verification, exception, and source. Downloaded context is serialized in JSON code blocks.

At 900px the panels stack; at 700px use 16px gutters and 40px introductory type. Main navigation becomes a two-row header on phones so every destination remains available. The source library uses a linear bibliography with publisher, source type, purpose, and direct link. Review input stays local; recommendations are reported-description matches, not measured screen defects. Existing specimen-desk geometry requirements remain unchanged.


## Apple-informed controls

The user requested Apple UI conventions alongside the Paper-inspired shell. Keep Figtree for the identity, introductions, specimen titles, and reading surfaces. Use the platform system UI stack inside the operational index, inspector, and review workbench. On Apple devices this resolves to an installed system face; no Apple font files or SF Symbols are redistributed.

`apple-ui.css` refines controls after the existing styles. Its semantic tokens above define dark and light fields, borders, selection surfaces, and blue primary actions. Primary review and copy buttons use white text on #0964d2; selected rows use #244e7c in dark mode and #d4e6fb in light mode. The page retains its existing theme and original specimen artwork.

The inspector uses a two-choice segmented group. Left/Right and Home/End switch its existing pressed-button states without scrolling. Review tabs retain ARIA tab semantics and keyboard behavior, with equal-width segments, distinct selected surfaces, and 34px desktop/38px phone minimum heights. Search and fields use 8px corners, selected rows 6px, and the connected editor retains 12px corners. These are web adaptations informed by Apple HIG, not native controls.

Sources: Apple HIG [Layout](https://developer.apple.com/design/human-interface-guidelines/layout), [Segmented controls](https://developer.apple.com/design/human-interface-guidelines/segmented-controls), and [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars). The review library identifies these as platform guidance, distinct from WCAG requirements. Exported briefs preserve target-platform conventions and do not treat familiar controls as defects merely because they are common. Native material, font, and control guidance must be interpreted for the actual target platform.
