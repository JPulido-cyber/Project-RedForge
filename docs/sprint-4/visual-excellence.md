# Sprint 4 visual excellence

## Scope

Sprint 4 refines the migrated homepage without adding sections or changing its
information architecture. Enhancements live in `styles/home-enhancements.css` so
the approved migration baseline remains easy to audit.

## Improvements

- Hero typography, spacing, ambient lighting, CTA depth, and entrance timing.
- World-map scan lighting, flowing route dashes, node atmosphere, and stronger
  layer separation.
- Interactive metric elevation, icon glow, and hierarchy.
- More deliberate operations-card depth, progress treatment, and detail-card
  feedback.
- Report-like project cards with restrained elevation, edge lighting, tags, and
  directional link feedback.
- Complete operator styling for its independent Storybook presentation while
  preserving its approved hidden homepage state.
- Consistent focus rings, border opacity, shadows, glow strength, easing, and
  section rhythm.

## Performance impact

- No runtime dependencies or client-side React state were added.
- Animation uses opacity and transforms where practical.
- Existing self-hosted fonts and optimized Next.js map image remain unchanged.
- Decorative effects are CSS-only and do not add network requests.
- Reduced-motion preferences collapse animations and transitions.

## Accessibility impact

- Keyboard focus is now clearly visible on links and menu summaries.
- Motion respects `prefers-reduced-motion`.
- Existing semantic headings, landmarks, labels, and link names are preserved.
- Contrast-sensitive supporting text was raised slightly without changing the
  RedForge palette.

## Remaining recommendations

- Establish automated screenshot-diff thresholds after visual approval.
- Validate on physical low-power mobile hardware before increasing map density.
- Keep the operator and footer publication decision separate from visual polish.
- Consider section entrance choreography only when a shared visibility utility is
  approved; this sprint intentionally avoids adding client-side observers.
