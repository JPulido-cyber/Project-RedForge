# End-to-end tests

Active tests cover behavior that exists today. `test.fixme` cases are executable
acceptance contracts for approved future features; enable them in the same change
that publishes the corresponding navigation or project route.

Install Chromium once with `npx playwright install chromium`, then run
`npm run test:e2e`.
