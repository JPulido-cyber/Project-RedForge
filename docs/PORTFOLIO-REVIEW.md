# Project RedForge public platform review checklist

Use this checklist before publishing any new engineering evidence, project
milestone, documentation record, or website release.

## Evidence provenance

- [ ] The screenshot comes from authentic RedForge engineering work.
- [ ] The raw source is retained outside the public website pipeline.
- [ ] The image has a documented owner, source record, and capture context.
- [ ] The image is classified as APPROVED, REDACTED, REPLACEMENT, or REMOVE.
- [ ] Every public image originates from `Evidence/Reviewed`.
- [ ] GitHub and the website use the same approved evidence.

## Personal and sensitive information

- [ ] No personal names are visible unless publication is intentional and approved.
- [ ] No personal Windows usernames are visible.
- [ ] No personal email addresses are visible.
- [ ] No browser profiles, bookmarks, or unrelated tabs are visible.
- [ ] No desktop notifications or unrelated personal documents are visible.
- [ ] No passwords, license keys, API keys, tokens, secrets, session cookies, or private keys are visible.
- [ ] Redaction, when required, affects only the sensitive value and preserves engineering context.

## Engineering integrity

- [ ] Fictional enterprise hostnames, directory structure, private lab addressing, logs, and configuration remain visible when they support the evidence.
- [ ] The screenshot matches the current documented state of the lab.
- [ ] Implemented, validated, planned, and conceptual states are clearly distinguished.
- [ ] Captions describe only what the image visibly supports.
- [ ] Conceptual diagrams are not presented as implementation evidence.
- [ ] Related Engineering Logs, ADRs, and Milestones remain consistent.

## Presentation quality

- [ ] Screenshots are clear, sharp, and readable at their intended size.
- [ ] Images use descriptive filenames and alternative text.
- [ ] Captions explain the engineering relevance.
- [ ] Original-size evidence links open correctly.
- [ ] Desktop, tablet, and mobile layouts remain balanced.
- [ ] Images do not introduce horizontal overflow or layout shift.

## Required validation

- [ ] `npm run evidence:validate`
- [ ] `npm run content:sync`
- [ ] Public-content security scan
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run storybook:build`
- [ ] Playwright desktop and mobile tests
- [ ] Git working tree contains only intentional changes

## Approval record

- Review date:
- Reviewer:
- Engineering records covered:
- Evidence assets added or replaced:
- Outstanding replacement recommendations:
- Approved for push:
- Approved for deployment:
