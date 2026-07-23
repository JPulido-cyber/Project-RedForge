# Enterprise Home Lab maintenance guide

This guide governs updates to the flagship Enterprise Home Lab report. The report is a living engineering record, not a marketing page. Only publish claims that can be supported by a configuration record, sanitized evidence, or a recorded validation result.

## Status language

Every material statement must use one of these labels:

- **Implemented** — the documented artifact or configuration exists.
- **In Progress** — work has started, but acceptance criteria are not complete.
- **Planned** — the capability is approved or proposed but work has not started.
- **Future** — the capability is outside the current delivery horizon.
- **Validated** — the implementation has passed a documented test with retained evidence.

Do not treat a diagram, placeholder, or target-state inventory as proof of deployment. Metrics require a measurement source, collection window, and date.

## Source locations

- Project record: `content/projects/projects.ts`
- Project types: `content/projects/types.ts`
- Diagram sources: `public/projects/enterprise-home-lab/diagrams/`
- Screenshot evidence: `public/projects/enterprise-home-lab/screenshots/`
- End-to-end coverage: `tests/e2e/projects.spec.ts`

## Add or update a server

1. Add a typed `Technology` entry to the Enterprise Home Lab `technologies` array. Include the server name, responsibility, and current status.
2. Update the `SERVER INVENTORY` overview paragraph. Do not add hardware specifications until they are verified.
3. Add or update the server node in the relevant SVG diagrams. Keep the node identifier stable so reviews can trace changes.
4. Add a timeline event when deployment begins and another only after validation is complete.
5. Attach sanitized evidence through the gallery when available. Never publish secrets, internal addresses, serial numbers, user data, or unredacted console output.

## Add or update a VLAN

1. Record the VLAN purpose and status in the technology inventory.
2. Update `vlan-layout.svg`, `security-zones.svg`, `trust-boundaries.svg`, and `network-topology.svg`.
3. Document allowed traffic in `traffic-flow.svg`. Default-deny intent is not proof that a rule is active.
4. Add identifiers, subnets, and gateways only after the address plan is approved. Use `TBD` before approval.
5. Capture firewall configuration and connectivity-test evidence before changing the status to Validated.

## Add screenshots

1. Redact credentials, tokens, keys, personal data, internal addresses, device identifiers, and irrelevant browser or desktop chrome.
2. Store the optimized image under `public/projects/enterprise-home-lab/screenshots/`.
3. Add a `GalleryImage` record with a precise alt description, caption, category, and truthful status context.
4. Use the native resolution where practical and avoid upscaling. Prefer WebP for raster evidence.
5. Confirm keyboard access, responsive behavior, and meaningful alternative text in Storybook and the project page.

Until genuine evidence exists, retain the visible placeholder cards. Do not generate representative screenshots.

## Add engineering notes

Use the `challenges` collection for a decision or problem that needs collapsible detail. Record the context, the decision or response, the current outcome, and a truthful status. Use `lessonsLearned` only after the underlying observation has occurred; use the roadmap for expected learning.

## Add an architecture diagram

1. Copy an existing RedForge SVG as a structural baseline.
2. Use a `1200 675` view box, semantic group identifiers, editable text, a `<title>`, and a `<desc>`.
3. Preserve status labels in text; color must not be the only status signal.
4. Add the SVG to the project gallery with accurate alt text and a non-evidence disclaimer when it represents target state.
5. Validate the SVG at desktop and mobile widths. Keep labels readable when the image is expanded.

## Update the technology inventory

Use the established categories: `platform`, `infrastructure`, `security`, `observability`, and `cloud`. Put the lifecycle status in the visible name and describe the intended or verified responsibility without unsupported product claims. Remove an item only when the engineering record explains its replacement or retirement.

## Update the timeline

Timeline entries describe engineering milestones, not promotional dates. Use a specific date when known and a bounded label such as `Next` or `Future` otherwise. A complete status requires a retained deliverable; validation should name the test and evidence in the description.

## Review checklist

- Every implementation claim has sanitized evidence.
- Every metric has a source, time window, and collection date.
- Target-state diagrams remain labeled as design artifacts.
- Inventory, diagrams, timeline, and narrative agree.
- External references point to authoritative documentation.
- TypeScript, ESLint, Storybook, Playwright, and the production build pass.
