# Components

## Categories

- `components/ui`: dependency-light, product-agnostic primitives
- `components/icons`: centralized SVG components
- `components/templates`: consistent content-page structures
- Feature folders: RedForge-specific compositions grouped by domain

## Component contract

Each component should answer one UI responsibility, accept semantic props, forward
appropriate native HTML attributes, and remain accessible without consumer
workarounds. Avoid boolean prop collections that create invalid combinations; use
typed variants instead.

Every reusable visual component requires a Storybook story. Add interaction tests
only when the component has interaction. Route-level behavior belongs in
Playwright.

## Imports

Import from a folder's public `index.ts` outside that folder. Internal files may
use relative imports. Icons must come from `@/components/icons`.
