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
  accent: "#c6ceeb"
  stage: "#191919"
  light-canvas: "#f5f5ef"
  light-surface: "#e9e9e3"
  light-surface-raised: "#dcdcd5"
  light-ink: "#20211f"
  light-muted: "#61615c"
  light-line: "#ccccc4"
  light-accent: "#494b83"
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

The dark shell uses the canvas, surface, raised surface, ink, muted, and line tokens above. Lavender accents identify focus, anatomy code, and selected anatomy numbers. Selected catalog entries use raised graphite with a neutral border. The stage has its own darker graphite ground.

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
