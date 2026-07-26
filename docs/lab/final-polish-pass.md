# Lab Environment final polish pass

The approved Lab Environment composition and section hierarchy remain unchanged.

## Infrastructure semantics

The topology node model now separates `hostname` from `platform`. Implemented systems consistently present the architecture identifier first and technology second:

- `RF-VMHOST01` — VMware Workstation
- `RF-DC01` — Windows Server 2025
- `RF-WIN11-01` — Windows 11
- `RF-SPLUNK01` — Splunk Enterprise

The planned segmentation capability uses `RF-NETWORK-01` and remains explicitly governed as planned. Its system details describe the planned state without presenting services or telemetry as operational.

## Interaction behavior

- The selected node stays fully illuminated while other nodes recede to 80% opacity.
- Hover uses the same 200 ms border, opacity, and elevation timing across nodes.
- Selecting a node remounts and briefly illuminates only connection paths whose typed source or target matches that node.
- The relationship response runs once for 250 ms with no loop or decorative glow.
- Selected-system content uses a restrained 200 ms opacity update.
- Reduced-motion users receive immediate state changes without animation.

## Future-ready service tiles

The existing Active Directory DS, DNS, and Sysmon tiles now render through a typed `ServiceTile` component. It accepts an optional future selection callback but renders non-interactively today, preserving the approved interface and avoiding placeholder behavior.
