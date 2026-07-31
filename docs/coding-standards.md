# Coding standards

- TypeScript strict mode is mandatory.
- Prefer explicit domain unions over unbounded strings.
- Avoid `any`; validate unknown external values at their boundary.
- Use Server Components unless browser capabilities are required.
- Keep modules focused and exports intentional.
- Model expected service failures as values, not thrown exceptions.
- Keep environment access centralized and provide safe local defaults only where
  a default is valid.
- Never commit secrets or production identifiers.
- Do not disable lint rules without documenting the reason at the narrowest scope.
- Apply the [RedForge design philosophy](./design-philosophy.md) to every visual
  change. Favor clarity, operational realism, and evidence over decorative UI.

Before committing, run:

```bash
npm run check
npm run storybook:build
npm run build
npm run test:e2e
```
