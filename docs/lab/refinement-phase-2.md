# Lab Environment refinement — Phase 2

## Approved composition

The Lab Environment now follows the approved engineering-document sequence:

1. compact enterprise introduction;
2. purpose, approach, focus, and validation strip;
3. verified interactive topology;
4. selected-system evidence;
5. enterprise capability groups;
6. status-governed capability roadmap;
7. one Engineering Records action.

The previous status sidebar, milestone panels, secondary report action, and technology inventory were removed because they duplicated responsibilities now owned by the purpose strip, topology, capability model, roadmap, and Documentation route.

## Evidence boundary

The topology continues to consume `enterpriseHomeLabTopology`. It represents VMware Workstation, RF-DC01, RF-WIN11-01, Splunk Enterprise, and their verified relationships from synchronized engineering evidence.

The approved reference depicts additional named firewall and assessment hosts. Those systems were not added because the current public record does not verify them. The existing technology-neutral network segmentation capability remains visible as **Planned**. Roadmap items describe intent and are explicitly governed by `complete`, `in-progress`, `planned`, or `future` states.

The reference also shows illustrative capability counts and an in-progress network phase. Counts were omitted because the capability groups are conceptual boundaries rather than unique system inventories, and Network & Segmentation remains **Planned** to agree with the synchronized topology record.

## Interaction and responsive behavior

- Selecting a node updates the system-purpose, roles, services, telemetry, and related-record fields without navigation.
- Buttons preserve native keyboard activation, visible focus, `aria-pressed`, and the existing live region.
- Wide screens use the reference-led horizontal architecture.
- Tablet and mobile reflow the same content into linear architecture and roadmap sequences without horizontal scrolling.
- Reduced-motion behavior remains unchanged; the interaction does not depend on animation.
