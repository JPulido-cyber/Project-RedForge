# Obsidian publishing workflow

Project RedForge treats documentation as engineering evidence. Obsidian is an authoring workspace, not a production content source.

## Publishing path

1. **Obsidian draft** — write the engineering log, milestone log, ADR, guide, SOP, troubleshooting note, lesson, or validation record.
2. **Technical review** — confirm the procedure, decision, status language, dependencies, and links against the work actually performed.
3. **Security and privacy review** — remove credentials, tokens, private addresses, administrative URLs, device identifiers, personal data, sensitive military information, and unnecessary operational detail.
4. **Evidence review** — ensure screenshots and measurements have provenance. Mark missing proof as `Evidence Pending`; never replace it with representative content.
5. **Repository content** — create a complete typed `DocumentationEntry` in `content/documentation/entries.ts`, classify every evidence item, and record all public redactions.
6. **Validation** — run ESLint, strict TypeScript, the production build, Storybook, Playwright, link checks, and a responsive visual review.
7. **Deployment** — commit the reviewed record with a content-focused message and allow the existing deployment pipeline to publish it.

## Required front matter

Every reviewed source is curated into the production `DocumentationEntry` model. Draft front matter should provide:

```yaml
title: Descriptive engineering title
slug: stable-kebab-case-slug
category: Engineering Log
publishingState: review-ready
projectSlug: enterprise-home-lab
tags:
  - Networking
summary: One evidence-safe sentence.
```

Allowed categories, lifecycle states, publishing states, and evidence states are defined in `content/documentation/types.ts`. Dates, metrics, completion claims, and validation results must come from reviewed evidence.

## Current limitation

Sprint 8 provides the typed production model, publishing validator, static report routes, category index, homepage activity feed, and evidence components. It intentionally does not copy or watch an Obsidian vault or deploy arbitrary Markdown. Curated records are rejected during development and production builds when required publishing fields are missing or evidence text contains common sensitive-data patterns.
