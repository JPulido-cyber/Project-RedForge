# Services

This directory defines ports for infrastructure that does not exist yet:

- `api`: future remote-data client contract
- `mock-data`: deterministic local and test fixtures
- `telemetry`: future event capture contract

There is deliberately no network client, telemetry vendor, or backend
implementation. Add an adapter only when a real consumer and operational
requirement exist.
