# ADR 0001 — Engineering documentation taxonomy

- **Status:** Accepted
- **Date:** 2026-07-26
- **Scope:** RedForge knowledge base, synchronization pipeline, and public documentation experience

## Context

The original website taxonomy anticipated eight public document categories before the RedForge engineering workflow had matured. The implemented categories were Engineering Log, Milestone Log, Architecture Decision Record, Build Guide, Standard Operating Procedure, Troubleshooting Note, Lesson Learned, and Validation Record.

An audit of the active Obsidian vault found:

- ten verified Engineering Logs;
- five Architecture Decision Records;
- two Milestone records;
- no standalone Build Guide, SOP, Troubleshooting Note, Lesson Learned, or Validation Record collections;
- design and operational reference notes organized by engineering domain rather than by the website's speculative categories.

The verified ENG format already contains objective, background, engineering decisions, work completed, validation, challenges, lessons learned, evidence, result, next steps, and related records. Publishing those sections again as separate records would fragment a single engineering narrative and create duplicate maintenance.

## Decision

RedForge will use three core public record types:

1. **Engineering Log (ENG)** — the primary chronological engineering record. It owns implementation narrative, troubleshooting, validation, lessons, and evidence for a bounded body of work.
2. **Architecture Decision Record (ADR)** — a durable decision record. It exists independently because architectural rationale can govern many ENGs and needs an explicit accepted, superseded, or deprecated lifecycle.
3. **Milestone** — a program-level outcome. It aggregates several engineering records and decisions to establish that a phase or capability reached a reviewed state.

The public documentation taxonomy and category rail will show only these core types. Counts will be derived from published synchronized content rather than maintained manually.

The global navigation label remains **Documentation** because it accurately contains all three record types and preserves the established route.

## Deferred document types

- **Build Guide:** deferred. Implementation steps belong in the relevant ENG until a stable, reusable procedure exists.
- **Troubleshooting Note:** deferred. Troubleshooting context, diagnosis, remediation, and lessons belong in the ENG that records the incident.
- **Validation Record:** deferred. Validation evidence belongs in the ENG and its typed evidence collection.
- **Lesson Learned:** deferred. Lessons belong in the ENG and may later be aggregated through tags or views without creating duplicate source records.
- **Standard Operating Procedure:** deferred, but not rejected. An SOP has unique value when it defines a maintained current-state operational procedure used repeatedly after implementation. RedForge does not yet have a reviewed SOP corpus, so the public taxonomy will not advertise it prematurely.

## Consequences

### Positive

- The website reflects the documentation system RedForge actually uses.
- ENG becomes the clear primary record without losing architectural or program-level context.
- Empty categories and misleading zero counts disappear.
- New verified ENG records can scale through one adapter and one stable route model.
- Validation, troubleshooting, evidence, and lessons remain connected to the work that produced them.

### Tradeoffs

- The existing `DocumentationCategory` type retains deferred legacy values for backward compatibility even though the public taxonomy does not display them.
- A future SOP collection will require an explicit follow-up ADR, source standard, synchronization adapter, and public-taxonomy decision.
- Older manually curated records remain supported until they can be migrated to reviewed source records without changing their URLs.

## Migration impact

- Existing ENG, ADR, Milestone, manual entries, slugs, and `/documentation/[slug]` URLs remain unchanged.
- The synchronized ENG allowlist expands from ENG-010 to all verified `ENG-NNN` records in the approved Engineering Logs directory.
- The documentation index is sorted by verified update date and presents only the three core record types.
- No redirects, route removals, content deletions, or schema bypasses are introduced.

## Long-term rule

A new public document type must answer a recurring question that ENG, ADR, and Milestone cannot answer without duplication. It must also have a real reviewed source corpus—not merely anticipated future use—before it is added to the public taxonomy.

