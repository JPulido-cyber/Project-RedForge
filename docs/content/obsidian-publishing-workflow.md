# Obsidian publishing workflow

Project RedForge treats documentation as engineering evidence. Obsidian is an authoring workspace, not a production content source.

## Publishing path

1. **Obsidian draft** — write the engineering log, milestone log, ADR, guide, SOP, troubleshooting note, lesson, or validation record.
2. **Technical review** — confirm the procedure, decision, status language, dependencies, and links against the work actually performed.
3. **Security and privacy review** — remove credentials, tokens, private addresses, administrative URLs, device identifiers, personal data, sensitive military information, and unnecessary operational detail.
4. **Evidence review** — ensure screenshots and measurements have provenance. Mark missing proof as `Evidence Pending`; never replace it with representative content.
5. **Repository content** — run the allowlisted local synchronization command for supported records. It maps reviewed Markdown into `content/documentation/generated.ts`, classifies evidence, and records public redactions. Unsupported record types remain manually curated until an approved adapter exists.
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

## Current synchronization boundary

The website never watches or reads the vault at runtime. Local synchronization currently imports the allowlisted ADR collection and verified `ENG-NNN` records. Generated TypeScript is committed so Vercel builds exclusively from repository content. Milestones remain backward-compatible manual records until their source format and adapter receive a separate review. All other notes remain private until their directories, filename patterns, adapters, and review requirements are explicitly approved.
