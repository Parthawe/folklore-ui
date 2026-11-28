---
name: design-slop-audit
description: Audit interface screens for generic template choices, weak hierarchy, filler copy, unsupported claims, and incomplete interaction states. Use when a user asks to find AI slop in a design, critique a screen, or make a bland interface more specific.
---

# Design slop audit

Review visible design decisions, not suspected authorship. A screenshot cannot establish whether AI made a screen. Do not assign an AI probability or an arbitrary slop score.

## Understand the task first

Establish the intended user, their main action, and an observable outcome. Use the project or supplied context before asking. Identify whether this screen primarily helps someone complete a task, compare information, make a decision, understand content, or explore creative work. Do not prescribe a category template. Preserve brand decisions and expressive choices that serve this task.

For a task-aware checklist before screen inspection, run the bundled local planner:

```bash
node scripts/review.mjs --task "Help a customer review their order and pay" --screen "An animated background, fake testimonials, and no error state" --markdown
```

It matches reported English phrases and task keywords. It does not inspect screens, invoke a model, measure accessibility, or verify a defect. Treat its task inference as editable and all reported details as unverified. A clean match list is not evidence that the design has no problems. Use the planner to prepare an inspection, not to replace one.

Read [the research and decision guide](references/research.md) when preparing sourced recommendations or distinguishing task risks from taste. Source links support principles; Folklore’s judgments about generic styling are editorial. Do not present those judgments as accessibility standards or claim endorsement.

## Ground the review

Use the supplied screen or current project. Inspect the product's task, audience, content, approved brand, and existing components before judging it. If no screen, URL, or project is available, ask for one. For a screenshot-only review, distinguish what is visible from behavior that needs testing. Do not claim responsive, keyboard, or error-state checks from a static image.

For live projects, inspect a representative desktop and phone view and follow the primary action when tools permit. Report any verification limits. Read project instructions and design tokens; preserve an explicit brand or chosen style.

## Look for evidence

- **Substitutable composition:** a hero, card grid, or bento arrangement that could fit an unrelated product without changing its hierarchy. Identify the actual content relationship it obscures.
- **Decoration without a job:** orbs, gradients, glass, shadows, sparkle icons, pill shapes, or motion that compete with the task. An effect is not a defect merely because it is common. Preserve it when the subject, brand, or interaction needs it.
- **Weak hierarchy:** display type overwhelms the working content; metadata competes with actions; labels are too small; unrelated items receive identical emphasis. Point to the affected region and consequence.
- **Filler and false proof:** vague slogans, repeated claims, invented metrics, testimonials, logos, or example data presented as real. Quote the actual text. Do not invent stronger replacement claims.
- **Incomplete product states:** dead controls, unclear selection, missing feedback, loading, empty, error, success, dismissal, or recovery behavior relevant to the task. Test before declaring a state absent.
- **Poor adaptation:** clipped labels, cramped controls, horizontal page overflow, illegible contrast, keyboard traps, or motion that ignores reduced-motion preferences. Describe the observed state and viewport.
- **Unclear provenance:** assets, fonts, or copy with missing attribution or license records. Check repository notices when available. Do not infer infringement from visual similarity or add an all-rights-reserved claim over MIT code.

## Return useful findings

For each finding, give the location, visible evidence, user consequence, and smallest concrete fix. Separate task-blocking problems from polish. Distinguish user-reported details, screen-observed facts, measured checks, and untested hypotheses. Include a preservation note and a test for each proposed change. Lead with the few changes that would make the largest difference. Include what should stay when it protects a useful product decision.

Do not force every screen into the same quiet serif-and-green aesthetic. More character can come from real content, stronger typography, a product-specific interaction, or an original asset; it does not require extra ornament.

An audit request authorizes review. If the user also asks for changes, implement within that scope, inspect the resulting views and states, and distinguish verified fixes from remaining work. Installing this skill does not authorize publication, downloading assets, changing licenses, or unrelated edits.
