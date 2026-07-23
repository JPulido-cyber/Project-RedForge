# Naming conventions

- Directories and non-component modules: `kebab-case`
- React component files: `kebab-case.tsx`
- React components and types: `PascalCase`
- Variables and functions: `camelCase`
- Constants: descriptive `camelCase` objects; reserve screaming snake case for
  environment variables
- CSS custom properties: `--rf-<category>-<semantic-name>`
- Story files: `<component>.stories.tsx`
- End-to-end tests: `<behavior>.spec.ts`
- Routes and content slugs: lowercase `kebab-case`

Name components for their responsibility (`MetricCard`), not their current
location or appearance (`RedBox`).
