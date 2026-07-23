# Sprint 8 — Engineering Evidence Platform

## Outcome

Sprint 8 extends the approved Sprint 7 presentation system with a typed, review-gated documentation platform. It publishes two curated records from the RedForge knowledge base, adds recent engineering activity to the homepage, and updates the lab experience with verified identity-infrastructure progress.

No direct connection to the private Obsidian vault is included. No new runtime dependency was added.

## Published reports

| Route | Source record | Publication state |
| --- | --- | --- |
| `/documentation/server-establishment-log` | `ENG-002 - Active Directory Deployment.md.md` | Published after technical, privacy, and evidence review |
| `/documentation/milestone-001-enterprise-blueprint` | `Milestone-001 - Enterprise Blueprint Complete.md` | Published after technical, privacy, and evidence review |

The server record confirms RF-DC01, Windows Server 2025 Standard Evaluation, Active Directory Domain Services, and internal DNS. Internal IPv4 addresses, account identifiers, and administrative-group detail were excluded. Screenshot evidence remains pending because no reviewed public screenshot asset is available.

## Publishing architecture

```text
Obsidian draft
  -> technical review
  -> security and privacy redaction
  -> evidence review
  -> typed repository record
  -> runtime validation
  -> static route generation
  -> production deployment
```

The content model supports engineering logs, milestone logs, architecture decision records, build guides, standard operating procedures, troubleshooting notes, lessons learned, and validation records. Every published record requires a reviewed source, lifecycle state, objective, summary, decisions, lessons, evidence, and next steps.

The validator rejects duplicate or malformed slugs, invalid dates, incomplete published records, unreviewed sources, evidence assets without alternative text, IPv4 addresses, likely credentials, and private administrative URLs.

## Component tree

```text
DocumentationIndex
├── DocumentationCategoryDirectory
└── DocumentationRecordCard

DocumentationReport
├── EvidenceStatusBadge
├── EngineeringSummary
├── TechnicalDecisions
├── LessonsLearned
├── EvidenceRenderer
│   ├── TerminalOutput
│   ├── ConfigurationSnippet
│   ├── ValidationChecklist
│   ├── ArchitectureEvidence
│   └── ScreenshotEvidenceGallery
└── NextSteps

Home
└── EngineeringActivityFeed
    └── DocumentationRecordCard
```

## Lab integration

The Enterprise Home Lab data now distinguishes implemented RF-DC01 identity and DNS work from planned target-state infrastructure. VMware Workstation Pro, Windows Server 2025, AD DS, and internal DNS are marked implemented. DHCP, member servers, managed endpoints, telemetry, backup validation, resilience, and network segmentation retain explicit planned, in-progress, future, or pending-validation states.

Sensitive addressing and account identifiers are not published.

## Storybook coverage

- Evidence renderer: terminal, configuration, validation, conceptual architecture, and pending screenshot states
- Documentation report: server establishment and milestone variants

Evidence status is communicated by text and icon treatment in addition to color.

## Performance and accessibility

- Reports are statically generated from typed local content.
- No client-side content-fetching layer or runtime package was introduced.
- Native semantic headings, lists, figures, code blocks, and links are used.
- Mobile layouts prevent horizontal overflow; code and terminal evidence scroll within their containers.
- Focus styles, minimum touch targets, descriptive alternative text, and reduced-motion behavior inherit the established platform baseline.

## Truthful content gaps

- No reviewed screenshot evidence is currently publishable.
- The remaining knowledge-base records require the same manual review and redaction process.
- Several lab services remain target-state architecture, not implementation evidence.
- Runtime validation is a guardrail, not a substitute for owner and security review.

## Recommended next work

1. Review and publish the next engineering and milestone logs in chronological order.
2. Add a repository-side intake command that validates a reviewed JSON or TypeScript record without reading the private vault.
3. Establish an owner-approved evidence manifest for screenshots, hashes, captions, redactions, and capture dates.
4. Add visual-regression baselines for the documentation index and report templates.
5. Introduce ADR and validation-record examples only when real reviewed source material is available.

