---
name: Folklore
description: A searchable specimen desk for interface vocabulary.
colors:
  canvas: "#000"
  surface: "#282828"
  surface-raised: "#363636"
  ink: "#eeeee5"
  muted: "#aaa9a4"
  line: "#3c3c3a"
  accent: "#c5c9f2"
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
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "clamp(40px, 3.35vw, 48px)"
    fontWeight: 360
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "25px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  anatomy-title:
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0"
  anatomy-description:
    fontSize: "12px"
    lineHeight: 1.5
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

Self-hosted DM Sans Variable supplies the interface typography as a licensed substitute for the reference’s commercial Matter font. Use lightweight headings and close tracking where the implementation defines them; body and compact labels retain their own spacing.

The desktop introduction follows the display token. The specimen title follows the title token. Introduction notes use 14px text at 1.5 line height; specimen descriptions use 13px at 1.6. Catalog names use 12px, weight 400. Anatomy names and descriptions follow their dedicated tokens; anatomy code uses 11px. Header navigation uses 17px. Monospace is reserved for code, keys, and small anatomy numbers.

The brand uses −0.035em tracking; prose-page headings use weight 360 and −0.04em tracking, with a 40–64px clamp on the installation page. The editorial specimen uses a 23px collection heading at weight 360 and a 23px dialog heading at weight 400. These smaller scene labels belong to the scaled demonstration, not the outer navigation.

## Layout

Header, desk, and footer share a centered container with a 1280px maximum width and `calc(100% - 192px)` width. At a 1280px viewport this produces 96px side gutters. The desktop header is 70px high. The introduction has a flexible heading column, a 34% note column, a 32px gap, and 18px/24px vertical padding.

The editor combines a 34px title bar, a compressed horizontal search row, and three connected workspace columns. The search row has a flexible input and adjacent examples, 14px gap, and 10px/14px padding. The field has a 40px minimum height. Search status occupies a full-width row when present.

The standard desktop index and inspector are 174px and 250px wide; the specimen fills the remaining space. The index scrolls independently, with a list maximum height of `calc(100dvh - 423px)`. The stage uses 16px/18px/12px padding. Its live canvas height is `clamp(280px, calc(100dvh - 430px), 470px)`, followed by controls and the selected-part readout. This density supports search, specimen, and anatomy together at laptop sizes; viewport fit still needs rendered verification when content changes.

At widths from 981px through 1200px, gutters shrink to 56px, columns become 160px/flexible/240px, and the introduction heading becomes 38px. Through 1100px, gutters shrink again to 24px and the inspector becomes 242px. At desktop heights of 760px or less, introduction and anatomy spacing compresses further.

At 980px and below, the index is 165px, the inspector moves under the specimen, search examples move under the field, the heading becomes 30px, and the canvas is 350px high. At 700px and below, use 16px gutters, a 65px header, stacked panels, a horizontally scrolling catalog, a 44px minimum search field, a 340px canvas, and a 42px introduction heading. Anatomy descriptions remain visible; aliases use a disclosure.

## Elevation & Depth

The outer editor is flat, with fine rules and tonal differences separating panels. It has no shadow. The scene inside the specimen uses a restrained workspace shadow (`0 12px 36px #0004`) and a stronger dialog shadow (`0 18px 50px #0007`) to explain actual layering.

The native dialog backdrop defaults to translucent black. Anatomy inspection can darken the backdrop, apply a 7px blur, or outline the dialog. Preserve reduced-motion support and visible keyboard focus.

## Shapes

Use the editor, control, and field radii above. Borders are thin and neutral. The editorial scene uses a 6px workspace corner, an 8px dialog corner, and nearly square poster edges (1px). Avoid turning connected editor panels into separate floating cards.

## Components

### Search and catalog

Search uses a black field with a neutral border and lavender focus-within outline. Clear is a small graphite control. Keep query examples close to the field on desktop. Preserve result status, empty states, platform filters, and keyboard access. Clearing with the control or Escape preserves the current specimen; edits that retain the same result should retain its iframe. Platform filtering selects a matching specimen when necessary. Catalog selection scrolls within its own rail.

### Anatomy inspector

Use compact numbered buttons, graphite selected surfaces, and lavender selected numbers. Names and descriptions stay readable at their documented sizes. The active part updates the real specimen and its readout. Keep aliases behind the disclosure and sources available beneath the controls.

### Editorial specimen

The live scrim example is an inset reference-library workspace with a title bar, a 94px sidebar, and three original SVG poster studies: “Form & feeling.”, “The shape of a thought.”, and “In good company.” Artwork uses code-native geometry and typography. It is original illustrative content; the collection labels and counts are example data.

The scene uses a charcoal native `dialog` with a collection destination, Cancel, and Save idea. Its form uses native dialog submission. Dim, blur, and dismiss anatomy inspection operate on the actual dialog layers. At specimen widths of 450px or less, the sidebar and third poster disappear, leaving two columns. Compact scene text must not become a default for outer product controls.

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
