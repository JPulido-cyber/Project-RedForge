# RedForge

RedForge is an engineering platform built with the Next.js App Router, React,
strict TypeScript, and Tailwind CSS.

## Repository map

```text
.github/workflows/       Continuous integration
.storybook/              Isolated component development
app/                     Routes, layouts, metadata, and error boundaries
components/
  ui/                    Product-agnostic primitives
  icons/                 Central SVG icon system
  templates/             Reusable content-page structures
  <feature>/             Domain-specific compositions
config/                  Typed design configuration
constants/               Routes, layout, motion, theme, and app metadata
content/                 Structured authored content by domain
data/                    Future retrieval and mapping logic
deployment/              Platform-specific deployment guidance
docs/                    Engineering and contribution documentation
hooks/                   Shared client hooks
lib/                     Framework-light utilities, motion, and SEO
services/                Typed infrastructure ports; no backend implementation
styles/                  Design tokens and global motion
tests/e2e/               Playwright behavior contracts
types/                   Shared application contracts
public/                  Static assets
```

See [the engineering documentation](./docs/README.md) for architecture, component,
design-system, coding, naming, deployment, and contribution guidance.

## Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality

```bash
npm run check
npm run storybook:build
npm run build
npx playwright install chromium
npm run test:e2e
```

`check` runs ESLint with zero warnings and strict TypeScript validation.

## Storybook

```bash
npm run storybook
```

Stories are grouped by foundation, UI category, feedback state, and page template.

## Design system

`styles/tokens.css` is the semantic source of truth for color, typography,
spacing, radii, shadows, and motion. Tailwind aliases expose those values to
components. `config/design-tokens.ts` and `lib/motion` support code-driven uses.
