# Documentation

The public engineering record system has three core types:

- Engineering Logs are the primary chronological implementation and evidence record.
- Architecture Decision Records preserve durable rationale.
- Milestones aggregate verified program outcomes.

Deferred legacy category values remain typed for URL and content compatibility but are
not shown in the public taxonomy. Repository contributor and architecture documentation
belongs in `/docs`.

The documentation index accepts a linkable `type` query:

- `?type=engineering-logs`
- `?type=architecture-decisions`
- `?type=milestones`

Removing the query returns the complete reviewed record view. Counts always derive from
the synchronized and manually preserved published registry.
