# Design system

The [Project RedForge design philosophy](./design-philosophy.md) is the visual
authority for all new design work. It defines the platform identity, hierarchy,
restraint standard, and approval checklist.

The design system is semantic-first. Raw values live in `styles/tokens.css` with
the `--rf-` prefix. Tailwind aliases in `app/globals.css` expose values such as
`bg-surface`, `text-text-muted`, and `border-border`.

## Token groups

- Color: surfaces, text, borders, brand, and feedback states
- Typography: font sizes, line heights, and letter spacing
- Spacing: an 8px layout system with legacy four-pixel tokens retained for
  backward compatibility
- Shape: radii
- Depth: shadows
- Motion: durations and easing

Use semantic tokens instead of raw hex values or arbitrary spacing in reusable
components. Dark-mode values follow the user's system preference. Motion must
respect `prefers-reduced-motion`.

New layout spacing must use `8`, `16`, `24`, `32`, `48`, `64`, or `96` pixels
through semantic tokens. Do not introduce arbitrary local spacing values. Legacy
four-pixel increments may remain until the owning component is intentionally
refined and visually validated.

`config/design-tokens.ts` provides typed CSS-variable references for code-driven
use cases. `lib/motion` maps named behaviors to centralized CSS motion classes.
