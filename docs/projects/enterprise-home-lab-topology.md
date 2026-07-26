# Enterprise Home Lab topology authoring

The `/lab` topology is a public, evidence-backed view of verified RedForge infrastructure. Its source is `content/lab/enterprise-home-lab-topology.ts`; its contracts are in `content/lab/types.ts`.

## Lifecycle rules

- `operational` requires a reviewed Engineering Log or equivalent verified record.
- `in-progress` may describe active work but must not imply completed validation.
- `planned` is rendered in a separate planned-capabilities region.
- `retired` preserves historical context without implying current availability.
- Never publish IP addresses, domain names, credentials, account names, internal URLs, or unreviewed evidence.

## Adding a virtual machine or system

Add a stable, lowercase node `id`, public `name`, `type`, platform, lifecycle `status`, purpose, roles, services, and tooling. Use `parentId` to place a virtual machine inside a verified virtualization boundary. A node is not operational merely because it exists in a design diagram.

## Adding services and telemetry sources

Services describe verified capabilities provided by a node. Security tooling identifies installed and verified instrumentation. Add `telemetryState` only when the complete collection path has been validated.

## Adding connections

Every connection requires stable source and target node IDs, a relationship type, lifecycle status, label, and plain-language description. Hosting, identity, DNS, and telemetry relationships are independent records.

## Linking Engineering Logs and ADRs

Add reviewed records to `relatedEngineeringLogs` or `relatedArchitectureDecisions` with their stable public route. Engineering Logs establish implementation and validation history. Link ADRs only when they govern a durable architectural choice relevant to the node.

## Adding planned capabilities

Create a `planned-capability` node with `status: "planned"` and a non-vendor-specific platform unless a technology selection is documented. Planned connections must also use `status: "planned"`.

## Validation

Run content synchronization, the public-content safety scan, ESLint, strict TypeScript, the production and Storybook builds, and the lab, platform, and documentation Playwright suites in desktop Chromium and Pixel 7 projects.
