---
name: Folklore
description: A working desk for naming and inspecting interface patterns.
colors:
  forest: "#285e4c"
  chalk: "#f1f3f0"
  surface: "#fafbf8"
  ink: "#202722"
  muted: "#5d685f"
  line: "#ced5cc"
typography:
  display:
    fontFamily: "Bodoni Moda, serif"
    fontWeight: 500
    fontSize: "clamp(40px, 4.2vw, 63px)"
    lineHeight: 1.13
    letterSpacing: "-.035em"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "14px"
    lineHeight: 1.7
rounded:
  control: "3px"
  workspace: "5px"
---

# Design System: Folklore

## Overview

The user selected an interactive specimen desk to replace the earlier editorial card library. The working example carries the page. A compact index supports browsing; an anatomy inspector connects names to component behavior.

## Colors

Forest marks selected controls and links. Chalk and near-white surfaces separate navigation from the active workspace. Ink carries primary text; muted green-gray carries descriptions. Thin gray-green rules divide regions. Dark mode switches the shell to forest surfaces with pale text and a lime accent. Specimens retain their own illustrative palettes.

## Typography

Bodoni Moda 500 identifies the brand and selected specimen. Work Sans carries search, navigation, descriptions, and controls. The specimen name scales from 40 to 63px; the mobile name is 48px. Desktop descriptions are 14px with 1.7 line height. API symbols use the existing system monospace stack.

## Layout

The desktop workspace has a 235px index, flexible specimen, and 295px inspector. Outer padding is 40px. At 900px the inspector moves below the specimen. At 640px the index becomes a horizontal scroll strip and all panels stack. Examples remain interactive in bounded iframes. Long lists scroll independently on desktop.

## Elevation & Depth

The shell uses borders and surface tones. Demonstrations may use shadows or blur when these explain the pattern itself. Avoid adding decorative depth to the surrounding desk.

## Shapes

Controls use 3px corners and the workspace uses 5px corners. Fine rules organize dense information. Anatomy numbers are circular markers.

## Components

Search accepts everyday descriptions and ranks entries locally. Selecting anatomy sends a message to the live specimen and updates the readout. The inspector switches between anatomy and a copyable agent brief. Save state persists locally and updates the header count. Reset restores the selected specimen. Empty results and catalog-load failure have explicit messages. Theme preference persists locally. Reduced-motion preferences disable animation through the global stylesheet.

## Do's and Don'ts

Do preserve the relationship between a name, its parts, and its working example. Do keep source attribution next to the inspector. Don't restore the rejected wall of preview cards or oversized marketing introduction. Don't apply the shell palette to a specimen whose subject requires its own visual style.
