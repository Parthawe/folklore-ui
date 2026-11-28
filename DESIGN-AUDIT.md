# Folklore screen audit

Reviewed with the bundled design-slop-audit skill on 26 November 2026. The user requested fixes and publication, with designwhich.works as the visual reference. This is an evidence-based interface review, not an AI-authorship assessment.

| Finding | Evidence and consequence | Applied fix |
|---|---|---|
| Weak hierarchy in supporting UI | The previous CSS used 9–11px for reset, sharing, source links, search, and mobile captions. Useful controls became fine print. | Supporting actions now use 12px or larger; descriptions use 14px on phones. Anatomy text has a clearer title, API, and explanation hierarchy. |
| Search constrained by navigation | The input shared a 235px rail with an icon and shortcut. Ordinary descriptions were clipped despite search being the primary task. | Search spans the page above the desk. Its placeholder is short, with working example queries below. |
| Generic repeated copy | “The thing you mean. The name you need.”, “Find it. Take it apart.”, and “A shared language for things we build.” repeated broad promises. | One introduction names the task. Footer and supporting copy describe actual vocabulary, examples, and catalog contents. |
| Visual direction missed the supplied reference | Chalk, forest green, a 58px wordmark, and a bordered three-panel box emphasized the shell. The user requested designwhich.works. | Warm dark surfaces, thinner display lettering, compact framed navigation, and an open desk layout adapt the observed reference to this product. |
| Search can lose focus to the example | Selecting a result loads an iframe that opens a native modal. Browser observation showed focus moving into the dialog after searching. | Capture search focus before navigation and restore it after the iframe loads. A browser regression assertion checks this behavior. |
| Selected item can sit outside the visible list | The default Scrim selection was far down an alphabetical scroll rail. | Scroll the selected item within its own rail without scrolling the page. |
| Sample dialog copy obscured the task | “A space for the task.” did not state what the example did. | The dialog now asks “Save this example?” and explicitly invites trying save or cancel. |

Preserved the working specimens, local search, anatomy inspection, platform filtering, source links, Codex installation, copyable briefs, bookmarks, comparisons, copyright notice, and MIT license. No portfolio metrics, logos, photographs, commercial claims, or proprietary font files were copied.

Verification uses desktop and phone renders, interaction tests, and automated WCAG checks. Automated checks do not replace user research. Tests cover all 40 entry routes, keyboard behavior, search focus, empty/error states, storage and clipboard behavior, downloads, and theme persistence.

## Reference-fidelity follow-up

The user requested closer fidelity in grid, typography, and specimen visuals. The follow-up uses one framed 1400px drawing surface with an 88px construction grid, centered navigation, refined DM Sans type, square specimen frames, and original annotated specimen scenes. The scrim example now contains a reference-library page, geometric cover studies, a shallow perspective, and a native dialog with a real destination row. The existing dim, blur, and dismissal interactions remain wired to anatomy. Sample counts are explicitly contained in the example workspace.

Eight browser tests passed locally, including all 40 entries, mobile and desktop accessibility checks, and one-viewport geometry at 1280×720 and 1440×900.

## Paper reference update

The latest request replaces the blue construction-grid direction with Paper’s black canvas, ivory text, graphite editor panels and quieter navigation. Search and all three product panels now share one rounded editor window with a compact title bar. The live scrim scene uses warm paper artboards and olive geometric studies. The native dialog, search, anatomy, saved entries, briefs, themes and policy links remain functional. All eight browser tests pass, including automated contrast checks and no-scroll anatomy geometry at 1280×720 and 1440×900. DM Sans Variable supplies the typography; the reference’s commercial Matter font is not redistributed.

## Refinement verification

Fixed legacy important color rules that overrode neutral specimen buttons. Removed the decorative dot grid and permanent dialog annotation. Increased anatomy readability, moved alternate query phrases into a disclosure, and refined download spacing on phones. Search has a separate Clear control, preserves the current entry when cleared, and keeps an existing specimen mounted as matching text changes. Automated checks cover search recovery and the native dialog’s complete visible bounds in addition to the canvas and anatomy bounds. All eight browser tests and Astro checks pass.

## Paper typography and specimen rebuild

Compared against Paper’s rendered 48px, weight-360, −0.02em display typography. The revised shell uses a 40–48px lightweight introduction, 17px navigation, aligned 96px gutters at 1280px, and a compressed horizontal search toolbar. Original editorial SVG posters now sit inside a graphite reference library behind the working charcoal dialog. Fixed the inherited light background and catalog-label wrapping identified by the independent finish review. The reviewer’s final disposition was ship: all three findings resolved, including updated design measurements. The mechanical detector returned no findings. All eight browser checks pass; laptop geometry checks include empty and populated search states and complete native-dialog bounds at 1280×720 and 1440×900.

## Figtree and readable type roles

Replaced DM Sans with self-hosted OFL Figtree after inspecting Paper’s 48px/360 display setting and comparing the rendered faces. Consolidated outer roles into 48px display, 24px title, 16px body/search, 14px labels, and 12px metadata; anatomy descriptions are 13px. Removed the specimen’s duplicate sidebar and increased poster/modal scale. The short-laptop layout reclaims height from the canvas and duplicate visual result counts, preserving text size. Geometry checks now include the selected-part readout in empty and searched states.

## Task-aware design review — 27 November 2026

Added a local review workbench that uses the task, audience, and described screen to suggest reported risks, potential consequences, task-specific fixes, preservation conditions, and untested checks. It distinguishes reported evidence from observed or measured findings. The English phrase rules do not inspect images, infer AI authorship, or certify accessibility. A research page and the downloadable 1.2.0 audit skill include 12 primary sources, with empirical research, usability guidance, and normative WCAG requirements identified separately.

The workbench follows the Figtree, graphite, and ivory system. The independent finish review returned ship after five findings were resolved: mobile navigation visibility, stale example guidance, redundant labels, directional icons, and product documentation. Changing context invalidates exports until the report is rebuilt. User text stays local and is rendered as text; exported context is fenced JSON. A separate skill test verified purposeful decoration, negated claims, and actionable error advice.

Validation passed: 15 unit tests, 10 browser tests, 40 catalog entries, skill metadata validation, and Astro checks across 38 files. The build produces 91 pages. Browser coverage includes review examples, manual task selection, keyboard tabs, clipboard failure, Markdown export, empty and stale states, text injection, mobile navigation, and automated accessibility checks in both themes. Theme changes now apply colors immediately to avoid transient low contrast. Existing search, complete specimen-dialog bounds, anatomy controls, and selected-part readout still fit at 1280×720 and 1440×900.
