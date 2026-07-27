# Creating a RedForge project

Every project uses the shared `Project` contract, registry, route, and project
experience renderer. Do not create project-specific page layouts.

## Workflow

1. Add a record to `content/projects/projects.ts`.
2. Use a lowercase kebab-case slug.
3. Complete every required field. Use empty arrays or explicit planned copy when
   evidence does not exist; never invent results.
4. Add screenshots and downloads under `public/projects/<slug>/`.
5. Add related project slugs only after the target record exists.
6. Run lint, TypeScript, Storybook, Playwright, and the production build.

The dynamic route at `app/projects/[slug]/page.tsx` automatically prerenders
registered projects and generates project metadata.

## Required fields

- Identity: `slug`, `title`, `subtitle`, `summary`, `status`, `phase`
- Governance: `updatedAt`, `role`, optional `duration`, `snapshot`
- Engineering: `objectives`, `overview`, `technologies`, `timeline`,
  `architecture`
- Review: `challenges`, `lessonsLearned`, optional `retrospective`,
  `futureRoadmap`
- Evidence: `gallery`, `videos`, `codeExamples`, `downloads`
- Verification: `validation`
- Relationships: `engineeringRecords`, `certifications`,
  `relatedProjectSlugs`

See `content/projects/types.ts` for the authoritative types.

## Recommended evidence

- One architecture diagram with readable labels and an explanatory caption
- Three to six implementation screenshots showing configuration and validation
- Sanitized command output or code examples
- A short walkthrough video for multi-stage systems
- Versioned architecture brief, runbook, or validation checklist

Never publish secrets, credentials, private addresses, license keys, personal
information, or unredacted third-party data.

## Engineering write-up format

Write in this order:

1. Operational context and constraints
2. Measurable objectives
3. Architecture and decision rationale
4. Implementation timeline
5. Challenges and resolutions
6. Validation evidence and outcomes
7. Related Engineering Records
8. Lessons learned and retrospective
9. Future roadmap

Use direct technical language. Distinguish observed results from planned work.
Prefer reproducible evidence over claims.

## Naming conventions

- Slugs and asset folders: `lowercase-kebab-case`
- TypeScript records and fields: `camelCase`
- Components and exported types: `PascalCase`
- Screenshot files: `<sequence>-<subject>-<state>.webp`
- Downloads: `<project-slug>-<artifact>-v<major>.<extension>`
- Timeline dates: ISO dates where known; use `Current`, `Next`, or `Planned`
  only for intentionally unscheduled work.

## Content standards

- Alternative text must explain the engineering evidence shown.
- Captions must state why the evidence matters.
- Challenges must include both context and resolution.
- Snapshot counts and validation labels must be traceable to current project
  evidence.
- Engineering Records must link to existing public documentation routes.
- Validation items must use `verified`, `pending`, or `planned`; never convert
  implementation into validation without evidence.
- Code must be minimal, sanitized, and directly relevant.
- Roadmap items must describe future work, not imply completed capability.
