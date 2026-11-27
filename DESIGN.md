---
name: Folklore
description: A light, blue-accented specimen desk for inspecting interface patterns.
colors:
  blue: "#064bff"
  canvas: "#fcfdff"
  surface: "#ffffff"
  ink: "#1b2433"
  muted: "#59677c"
  line: "#e0e6f0"
typography:
  display:
    fontFamily: "DM Sans Variable, sans-serif"
    fontWeight: 400
    fontSize: "32px"
    lineHeight: 1.2
    letterSpacing: "-.055em"
  body:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "14px"
    lineHeight: 1.7
rounded:
  control: "7px"
  specimen: "8px"
---

# Design System: Folklore

## Overview

The latest user-supplied Glassly screenshot supersedes the earlier dark portfolio reference. Folklore adapts the screenshot’s light surfaces, strong blue, clean sans-serif hierarchy, fine structural lines, and aligned product panels. Its own working UI examples supply the product detail. Glassly’s branding, photography, claims, and long marketing layout are not included.

The desktop must keep search, a complete live example, and clickable anatomy together without page scrolling at the tested laptop sizes. Preserve this requirement when changing type, padding, or panel width.

## Colors

The default canvas is very pale blue-white with white input and panel surfaces. Dark navy carries text; blue identifies actions, selected patterns, API terms, and anatomy selection. Gray-blue rules organize the index, specimen, and inspector. Dark mode uses navy surfaces with a lighter blue accent. Style examples retain their own visual palettes.

## Typography

DM Sans Variable is used throughout the shell. The compact desktop heading is 32px, regular weight, with a blue emphasized phrase. Selected specimen names are 38px. Search uses 14px on desktop, descriptions use 13px, and supporting actions use 12px or larger. Phone display headings are 42px. Code and keyboard shortcuts retain the system monospace stack.

## Layout

A 64px desktop masthead leads into a compact title and description row. Search spans the width above a connected three-panel desk. At desktop widths above 980px, the index is 190px, the inspector is 270px, and the specimen takes the remaining space. Thin rules mark their boundaries. The outer drawing frame has a 1400px maximum width and 40px exterior gutters. Its 88px construction grid continues across the surrounding canvas and connects the masthead, title, search, and product panels.

The example height follows the viewport between 245 and 390px. Desktop inspector helper copy and repeated style “Visual signal” labels are hidden to preserve laptop fit; all controls and descriptions remain. At 980px the inspector moves below the specimen. At 700px all panels stack, side padding becomes 22px, and the index scrolls horizontally. Search, the complete specimen, and each anatomy control are tested at 1280×720 and 1440×900.

## Elevation & Depth

The shell relies on alignment, fine borders, and subtle surface contrast. The default scrim specimen is a detailed reference-library workspace, presented in shallow perspective on a 44px drawing grid. Its browser chrome, navigation, original geometric reference covers, destination row, and numbered dialog annotation are code-native assets. The foreground is a working native dialog. Dim, blur, and dismiss inspection alter the corresponding real layer. All sample counts and labels belong to this explicitly marked demonstration. Shadows and blur explain layering inside the example; avoid adding them to every shell panel.

## Shapes

Search uses 6px corners and primary controls use 7px corners; specimen frames use square corners. The surrounding desk panels are joined by straight structural borders. Selected index rows use 5px corners. The blue open-book mark is Folklore’s own existing icon.

## Components

Search ranks the offline catalog from everyday descriptions. Example queries are working buttons. Input focus is restored when a result opens an iframe modal. The active entry scrolls within its own rail. Anatomy selection updates the example and live readout. Build and debug briefs are copyable. Bookmarks and theme preference persist locally. Empty, fetch failure, clipboard failure, and storage failure states retain their feedback. Reduced-motion preferences disable animated feedback.

## Do's and Don'ts

Do preserve the compact desktop workflow. Do use blue consistently for actions and selected state. Do make panel boundaries explain the relationship between index, live example, and anatomy. Don't restore the oversized introductory hero. Don't copy the reference’s unrelated claims, logos, phone mockups, or photography. Don't recolor visual-style specimens into the shell palette.
