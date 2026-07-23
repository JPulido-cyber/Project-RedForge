# Engineering report authoring

Production documentation is curated typed content. The website does not read an Obsidian vault or publish arbitrary Markdown.

## Required report fields

Every published `DocumentationEntry` provides:

- stable slug;
- category;
- engineering lifecycle status;
- publishing state;
- date and review date;
- objective;
- engineering summary;
- technical decisions with rationale;
- lessons learned;
- evidence records;
- next steps;
- reviewed source and explicit redactions.

The model is defined in `content/documentation/types.ts`. Production records live in `content/documentation/entries.ts`.

## Evidence states

- **Verified evidence** — a recorded check passed and its reviewed result is publishable.
- **Reviewed record** — a configuration or source record was reviewed and sanitized, but it may not independently validate runtime behavior.
- **Evidence pending** — genuine evidence exists or is expected but has not completed review.
- **Conceptual / target state** — an architecture artifact communicates design intent and is never presented as implementation proof.

## Publishing validation

`assertValidDocumentationEntries` executes when the content module is evaluated during development and production builds. It rejects:

- duplicate or malformed slugs;
- non-ISO dates;
- incomplete published reports;
- unreviewed published sources;
- image evidence without alternative text;
- IPv4 addresses in evidence text;
- likely credential assignments;
- private administrative URLs.

This validation is intentionally conservative. A reviewer must still inspect screenshots, diagrams, terminal output, configuration snippets, prose, and metadata before publication.

## Adding a report

1. Complete the Obsidian review and redaction workflow.
2. Add one typed record to `documentationEntries`.
3. Store approved assets under a report-specific directory in `public/documentation/`.
4. Use evidence state accurately. Never use a conceptual diagram as validation evidence.
5. Run `npm run check`, `npm run build`, `npm run storybook:build`, and `npm run test:e2e`.
6. Review the documentation index, detail route, homepage activity feed, and related lab/project state at desktop and mobile widths.
7. Commit the report and its evidence together with a content-focused message.

New reports automatically appear in the documentation index, relevant category count, sitemap, and homepage activity feed when `publishingState` is `published`.
