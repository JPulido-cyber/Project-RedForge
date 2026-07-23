# Obsidian publishing workflow

Project RedForge treats documentation as engineering evidence. Obsidian is an authoring workspace, not a production content source.

## Publishing path

1. **Obsidian draft** — write the engineering log, milestone log, ADR, guide, SOP, troubleshooting note, lesson, or validation record.
2. **Technical review** — confirm the procedure, decision, status language, dependencies, and links against the work actually performed.
3. **Security and privacy review** — remove credentials, tokens, private addresses, administrative URLs, device identifiers, personal data, sensitive military information, and unnecessary operational detail.
4. **Evidence review** — ensure screenshots and measurements have provenance. Mark missing proof as `Evidence Pending`; never replace it with representative content.
5. **Repository content** — create a typed `DocumentationEntry` in `content/documentation/entries.ts` and add the reviewed body through the approved repository content format.
6. **Validation** — run ESLint, strict TypeScript, the production build, Storybook, Playwright, link checks, and a responsive visual review.
7. **Deployment** — commit the reviewed record with a content-focused message and allow the existing deployment pipeline to publish it.

## Required front matter

When the body-content pipeline is introduced, every reviewed document should provide:

```yaml
title: Descriptive engineering title
slug: stable-kebab-case-slug
category: Engineering Log
state: review-ready
projectSlug: enterprise-home-lab
tags:
  - Networking
summary: One evidence-safe sentence.
```

Allowed categories and states are defined in `content/documentation/types.ts`. Dates, metrics, completion claims, and validation results must come from reviewed evidence.

## Current limitation

Sprint 7 establishes the import-ready index and governance model. It intentionally does not copy or watch an Obsidian vault, parse arbitrary Markdown, or automate deployment of drafts. A future content pipeline should be added only after schema validation, asset handling, redaction checks, and preview workflow are approved.
