# Design system

The design system is semantic-first. Raw values live in `styles/tokens.css` with
the `--rf-` prefix. Tailwind aliases in `app/globals.css` expose values such as
`bg-surface`, `text-text-muted`, and `border-border`.

## Token groups

- Color: surfaces, text, borders, brand, and feedback states
- Typography: font sizes, line heights, and letter spacing
- Spacing: a four-pixel-based scale
- Shape: radii
- Depth: shadows
- Motion: durations and easing

Use semantic tokens instead of raw hex values or arbitrary spacing in reusable
components. Dark-mode values follow the user's system preference. Motion must
respect `prefers-reduced-motion`.

`config/design-tokens.ts` provides typed CSS-variable references for code-driven
use cases. `lib/motion` maps named behaviors to centralized CSS motion classes.
