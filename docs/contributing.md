# Contribution guide

1. Create a focused branch.
2. Make the smallest cohesive change.
3. Add or update types, stories, tests, and documentation with the implementation.
4. Run the full quality suite.
5. Use a conventional, imperative commit message.
6. Describe behavior, risk, verification, and intentionally deferred work in the
   pull request.

Do not mix homepage redesign work with platform infrastructure changes. Never
commit generated output from `.next`, Storybook, Playwright, or coverage.

## Design tickets

Every design ticket must begin with this rule:

> **Project RedForge is a cybersecurity engineering platform, not a portfolio.
> Every design decision must reinforce technical credibility, operational
> realism, and the long-term progression toward Offensive Cybersecurity. Favor
> clarity over complexity, restraint over decoration, and engineering over
> marketing.**

Review visual changes against the [design philosophy](./design-philosophy.md)
before implementation and again before approval.
