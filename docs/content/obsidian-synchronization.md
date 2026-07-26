# Obsidian documentation synchronization

The RedForge Obsidian vault is the authoring source for synchronized documentation. The website does not access the vault at runtime or during Vercel builds. A local publishing command converts only approved records into typed, validated repository content.

## Configure the vault

Choose one local configuration method:

1. Set `OBSIDIAN_VAULT_PATH` to the vault root before running the command.
2. Copy `.obsidian-publish.example.json` to `.obsidian-publish.json` and set `vaultPath`.

`.obsidian-publish.json` and `.env*` are excluded from Git. Never commit a workstation-specific absolute vault path.

PowerShell example:

```powershell
$env:OBSIDIAN_VAULT_PATH = "C:\path\to\your\Obsidian vault"
npm run content:sync
```

## Synchronize reviewed content

```text
Obsidian Markdown
  -> local discovery of approved directories and filenames
  -> Markdown/frontmatter parser
  -> document-type adapter
  -> DocumentationEntry mapping
  -> existing documentation validation
  -> deterministic generated TypeScript
  -> Git review, commit, and deployment
```

Run:

```bash
npm run content:sync
```

The synchronization allowlist currently processes:

```text
Enterprise Home Lab/Architecture Decisions/ADR-*.md*
Enterprise Home Lab/Engineering Logs/ENG-010*.md*
```

ADR records use the reusable ADR adapter. ENG-010 uses the verified Engineering Log adapter and is the first operational record approved from the Engineering Logs directory. Other ENG records are not imported implicitly. The command does not recursively scan the vault. Daily logs, personal notes, career material, credentials, and unrelated folders are outside the approved discovery boundary.

## Generated-file policy

`content/documentation/generated.ts` is generated and must be committed. It allows Vercel to build using repository files without access to the workstation or vault.

- Do not edit the file manually.
- Synchronization output is deterministically sorted by slug.
- Generated source labels contain record identifiers and titles, never absolute paths.
- Decider names are omitted from generated public content.
- Evidence represents the reviewed decision record only. It does not claim deployment or technical validation.
- ENG-010 validation evidence represents assertions in the verified engineering record; its private screenshots remain unpublished pending asset review.
- Existing manual entries remain in `content/documentation/entries.ts` and are merged with generated entries.
- Duplicate slugs are rejected when the combined registry initializes.
- Duplicate source IDs are rejected during synchronization.

ADR-001 predates the current frontmatter template. Its local source modification date supplies its schema-required date. New records must include an explicit ISO `date` in YAML frontmatter.

## Required ADR shape

New ADRs should define:

```yaml
---
id: ADR-006
title: Decision title
date: 2026-07-23
status: Accepted
deciders:
  - Private reviewer name
project: Project RedForge
tags:
  - architecture
summary: Public, reviewed summary.
---
```

Supported sections are:

- Status
- Context
- Decision
- Rationale
- Alternatives Considered
- Consequences
- Implementation
- Related Records

At minimum, the adapter requires a title, summary, Decision, and Rationale. Run the existing technical, security/privacy, and evidence reviews before synchronization.

## Adding future adapters

The pipeline separates configuration, allowlisted discovery, Markdown parsing, adapters, generation, and validation under `scripts/content-sync/`.

To add Engineering Logs, Milestones, Build Guides, SOPs, Lessons Learned, Validation Records, or Troubleshooting Notes:

1. Add an exact approved directory and filename pattern in `discovery.mjs`.
2. Add a focused adapter under `scripts/content-sync/adapters/`.
3. Register the adapter in `scripts/content-sync.mjs`.
4. Map the source into the existing `DocumentationEntry` interface.
5. Add fixtures and tests for missing fields, unsafe content, duplicate identifiers, and deterministic output.
6. Do not broaden discovery to the entire vault.

Engineering Logs now has a dedicated adapter. Additional ENG identifiers must be explicitly approved in the filename allowlist before synchronization. The adapter remains independent of the directory name if the knowledge-base structure changes.

## Publishing checklist

1. Complete technical review in Obsidian.
2. Remove or redact secrets, credentials, internal addressing, private administrative URLs, and unnecessary personal data.
3. Confirm that all evidence labels distinguish documentation, conceptual, implementation, and validation evidence.
4. Run `npm run content:sync`.
5. Review the generated diff.
6. Run lint, TypeScript, tests, and the production build.
7. Commit the reviewed generated file with the source-compatible application changes.
8. Push only after owner approval.
