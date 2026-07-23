# RedForge

RedForge is built with the Next.js App Router, React, TypeScript, and Tailwind CSS.

## Architecture

```text
app/                 Routes, layouts, and global application entry points
components/
  ui/                Reusable, product-agnostic primitives
  <feature>/         Domain-oriented composed interface sections
config/              Typed application configuration and design tokens
content/             Authored presentation copy
data/                Typed datasets and data-access adapters
hooks/               Shared client-side React hooks
lib/                 Framework-agnostic utilities
styles/              Global design tokens and shared styles
types/               Shared TypeScript contracts
public/              Static assets
```

Keep route-specific implementation close to its route. Promote code into the
top-level folders only when it is shared. Components are Server Components by
default; add `"use client"` at the smallest boundary that needs interactivity.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
npm run build
```

`check` runs ESLint with zero warnings allowed and verifies TypeScript without
emitting files.

## Design system

CSS custom properties in `styles/tokens.css` are the source of truth for color,
type, spacing, radius, shadow, and motion values. Tailwind theme aliases expose
the semantic color and shape tokens to components. `config/design-tokens.ts`
provides typed references for code-driven use cases.

Import reusable primitives from `@/components/ui`.
