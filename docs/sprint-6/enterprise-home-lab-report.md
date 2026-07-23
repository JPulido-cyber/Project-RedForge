# Sprint 6 — Enterprise Home Lab engineering report

## Delivery

The Enterprise Home Lab now uses the existing Project Experience Platform as a consulting-style flagship report. The record covers the executive context, business goals, target environment, architecture, segmentation, infrastructure and service inventories, identity and network services, security and monitoring stacks, logging, backup, disaster recovery, challenges, lessons, roadmap, and authoritative references.

No new runtime dependency or project-framework component was introduced. The only shared component adjustment distinguishes external references from downloadable assets.

## Diagram package

The editable SVG package includes:

- Network topology
- Logical architecture
- Security zones
- Traffic flow
- VLAN layout
- Trust boundaries
- Rack elevation
- Future hybrid-cloud layout

Every diagram includes a text status, a title and description, reusable semantic groups, and an explicit target-state disclaimer. Together they represent the requested internet edge, firewall, DMZ, management, server, client and lab networks, identity and core services, Splunk/SIEM, Windows and Linux systems, Kali Linux, Windows 11, and a future cloud connection.

## Evidence policy

The report contains no fabricated screenshots, deployment evidence, performance figures, addresses, hardware specifications, recovery objectives, or security outcomes. Screenshot slots remain visibly marked as pending. Diagrammed systems are target-state design elements unless a statement explicitly says otherwise.

## Performance impact

The report adds static, cacheable SVG assets and typed build-time content. It adds no client-side framework, third-party script, animation runtime, or new package. SVG geometry is intentionally simple to keep transfer and render cost low.

## Accessibility impact

Diagrams have `<title>` and `<desc>` elements and gallery records provide contextual alternative text. Status is written in text rather than communicated only by color. Existing native disclosure controls, section navigation, focus treatment, and responsive gallery behavior remain in use.

## Known technical debt

- Infrastructure screenshots and configuration evidence do not exist yet.
- VLAN identifiers and address plans are intentionally TBD.
- Hardware inventory and capacity data await verified records.
- Backup retention, RTO, and RPO await workload classification and restore testing.
- Monitoring retention, ingestion, and detection coverage await a working logging pipeline.
- The diagrams are logical design artifacts and are not generated from source-of-truth infrastructure data.

## Recommended Sprint 7 sequence

1. Establish the firewall and virtualization baseline and retain sanitized configuration exports.
2. Approve the VLAN and address plan, then validate isolation and administrative access.
3. Deploy identity, DNS, and DHCP with recovery procedures before dependent workloads.
4. Onboard one telemetry source end to end before expanding the logging pipeline.
5. Define an evidence-redaction checklist and validation matrix before publishing implementation claims.
