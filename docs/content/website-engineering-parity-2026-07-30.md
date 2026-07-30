# Website engineering parity — 2026-07-30

The July 30 parity update synchronizes the public RedForge platform with the reviewed engineering state represented by ENG-001 through ENG-014, ADR-001 through ADR-006, and Milestone-001 through Milestone-004.

## Public state

- Enterprise Home Lab: active development; enterprise identity and security-monitoring foundation operational.
- Enterprise Active Directory: operational and validated through ENG-013.
- Enterprise Security Monitoring: operational and validated through ENG-014.
- Documentation registry: 14 Engineering Logs, 6 Architecture Decision Records, and 4 Milestones.
- Enterprise foundation: complete through Milestone-004.
- Future work: endpoint engineering, Group Policy engineering, detection engineering, threat hunting, attack simulation, purple-team operations, automation, and controlled cloud expansion.

## Publishing architecture

The local Obsidian synchronization allowlist now supports:

- `Enterprise Home Lab/Engineering Logs/ENG-NNN*.md*`
- `Enterprise Home Lab/Architecture Decisions/ADR-*.md*`
- `Enterprise Home Lab/Milestones/Milestone-NNN*.md*`

All three adapters emit the existing typed `DocumentationEntry` model. Production builds consume the committed generated module and never require vault access. The legacy server-establishment URL remains statically generated but is excluded from official Engineering Log counts.

## Evidence review

Active Directory and Splunk screenshots in the engineering repository were reviewed as contact sheets. They contain internal domain, identity, addressing, or operational interface details and were not copied into the public website.

The corresponding project galleries remain explicitly marked `EVIDENCE PENDING` until the owner approves redacted, provenance-reviewed assets. This preserves the distinction between verified implementation claims and publishable visual evidence.

## Lifecycle rules

- Implemented identity, DNS, monitoring, forwarding, indexing, SPL search, and dashboard capabilities are represented as operational.
- Detection engineering, Group Policy engineering, attack simulation, purple-team operations, automation, and cloud expansion remain planned or future.
- Historical Engineering Log next steps remain part of the dated record; current project and lab roadmaps begin after Milestone-004.
- No public content includes internal IPv4 addressing or the internal RedForge test domain.
