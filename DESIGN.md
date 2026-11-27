---
name: Folklore
description: A dark specimen desk for naming and inspecting interface patterns.
colors:
  periwinkle: "#b7c5ff"
  canvas: "#111110"
  surface: "#191918"
  ink: "#eeece6"
  muted: "#aaa9a3"
  line: "#353532"
typography:
  display:
    fontFamily: "Bodoni Moda, serif"
    fontWeight: 400
    fontSize: "34px"
    lineHeight: 1.2
    letterSpacing: "-.04em"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "14px"
    lineHeight: 1.7
rounded:
  control: "8px"
  specimen: "16px"
---

# Design System: Folklore

## Overview

The user requested the visual language of designwhich.works on 26 November 2026. The implemented system pairs its dark, warm canvas and delicate display type with Folklore’s working specimen desk. The reference informs composition, spacing, contrast, and navigation; its portfolio content, commercial claims, proprietary fonts, and media are not included.

## Colors

Warm near-black forms the default canvas. Ivory carries headings and active text. Warm gray carries descriptions; pale periwinkle identifies API symbols and inspectable states. Thin neutral rules separate functional regions. Light mode uses a warm paper canvas, dark ink, and a deeper blue accent. Style specimens keep the palettes needed to demonstrate their subject.

## Typography

Bodoni Moda 400 provides delicate display lettering. The desktop introduction is a single-line 34px heading. The selected specimen uses 38–55px. Work Sans carries controls and explanations. Primary search is 16px on desktop and 14px on phones. Most supporting UI is 12–14px; the small anatomy number is 11px. Code uses the system monospace stack.

## Layout

On specimen-desk pages, a 72px desktop masthead leads into a compact two-column introduction. Search spans the available width above the specimen desk. At desktop widths above 980px, the live canvas scales with viewport height between 240 and 380px so search, the example, and anatomy can be used together on laptop screens. The desk has a 206px index, flexible example, and 280px inspector separated by 30px gaps. Its maximum outer width is 1520px with 42px side padding. At 980px the inspector moves below the specimen. At 700px all panels stack, side padding becomes 22px, and the index scrolls horizontally. The phone introduction drops the duplicate Codex link and keeps search examples in one scrolling row.

## Elevation & Depth

The surrounding interface uses tonal surfaces and thin borders. Shadows and blur belong inside live demonstrations when they explain layering. The default modal is an ivory surface on a graphite demo workspace; its shadow and scrim show which surface is active.

## Shapes

Navigation uses an 11px framed group with 7px selected items. Search uses 12px corners. The live canvas uses 16px corners, reduced to 14px on phones. These shapes separate navigation, input, and the interactive example.

## Components

Search ranks the local catalog from everyday descriptions. Example queries are working buttons. Results retain input focus when an iframe opens a modal, and the selected entry remains visible within its own scroll rail. Anatomy selection updates the specimen and readout. The inspector switches between anatomy and copyable build/debug briefs. Saved entries and theme preference persist locally. Empty results, fetch failure, clipboard failure, and blocked storage have explicit feedback. Reduced-motion preferences disable loading animation and control transitions.

## Do's and Don'ts

Do keep each pattern beside its anatomy and source. Do make sample interactions clearly identifiable as demonstrations. Do use the reference’s contrast and framing while preserving Folklore’s product task. Don't restore small 9–11px action labels, the sidebar-constrained search field, or repeated marketing slogans. Don't recolor style specimens into the shell palette.
