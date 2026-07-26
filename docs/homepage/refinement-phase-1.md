# Homepage refinement — Phase 1

## Purpose

The homepage is the RedForge entry point. It answers two questions:

1. What is Project RedForge?
2. What has been engineered recently?

Dedicated routes remain the source of truth for personal background, lab infrastructure, projects, documentation, and contact information.

## Composition

The homepage now contains:

- the approved navigation and hero;
- the existing statistics bar;
- the evidence-backed Latest Engineering Activity feed;
- the approved footer.

The homepage no longer composes either project presentation, Current Operation, or the hidden operator section. Their reusable components remain available to Storybook and dedicated experiences.

## Copy decision

The headline remains unchanged because it still communicates the core RedForge mission. The supporting paragraph now describes RedForge as a living cybersecurity engineering platform and emphasizes reviewed engineering evidence. This reflects the platform’s current purpose more accurately than the earlier “lab and portfolio” description.

## Statistics review

The statistics bar remains useful as a compact credibility signal between the hero and recent activity. Its Engineering Log value was corrected to match the current public count.

The bar should eventually derive every metric from reviewed structured content. Until then, changes to systems, groups, forests, Engineering Logs, or domain controllers require an explicit content review so the metrics do not become stale.

## Validation expectations

Homepage changes must preserve:

- primary navigation and dedicated route behavior;
- desktop, tablet, and mobile layout;
- keyboard-visible controls and reduced-motion behavior;
- the generated engineering activity feed;
- production build and static generation;
- the absence of project, operation, and operator content from the homepage DOM.
