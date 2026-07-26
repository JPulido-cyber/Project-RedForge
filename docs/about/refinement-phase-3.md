# About page refinement — Phase 3

## Reference implementation

The approved reference drives the About page composition:

- fixed-width professional profile rail on desktop;
- immediate content below global navigation with no oversized route hero;
- linear narrative sections separated by whitespace and subtle rules;
- horizontally scannable engineering principles;
- four equal knowledge-domain cards at wide desktop;
- one evidence-focused call-to-action rail.

The existing RedForge platform shell, typography, colors, tokens, navigation, footer, metadata, focus behavior, and reduced-motion behavior remain unchanged.

## Semantic structure

“Jose Pulido” is the visible page-level `h1`, matching the dominant profile identity in the reference. Main narrative sections use `h2` headings in this order:

1. How I Got Here
2. Why Offensive Security
3. How I Approach the Work
4. The Knowledge I’m Building Intentionally

## Responsive differences

The reference depicts a wide desktop composition. The production implementation deliberately reflows:

- at narrower desktop widths, domain cards use two columns;
- at tablet widths, the profile precedes the narrative and details form a compact row;
- on mobile, profile details, principles, domain cards, and the CTA stack into one column;
- the CTA becomes full-width on mobile.

These changes preserve reading order, touch targets, and prevent horizontal overflow.

## Content tightening

No new narrative concepts were introduced. Existing Phase 2 copy was shortened to match the reference density. The four approved principles and four knowledge domains remain data-driven.
