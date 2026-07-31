# Project RedForge design philosophy

> **Project RedForge is a cybersecurity engineering platform, not a portfolio.
> Every design decision must reinforce technical credibility, operational
> realism, and the long-term progression toward Offensive Cybersecurity. Favor
> clarity over complexity, restraint over decoration, and engineering over
> marketing.**

## Design North Star

Every page should make a technical interviewer think:

> “This person didn't just learn cybersecurity—they engineered the environment
> to learn it.”

## Platform identity

Project RedForge is a living engineering platform documenting progression
toward Offensive Cybersecurity through the design, implementation, validation,
and operation of a realistic enterprise environment.

The experience should feel like an enterprise operations center, SOC dashboard,
engineering documentation portal, and mission-control interface. It must not
feel like a startup landing page, résumé, blog, conventional personal portfolio,
hacker-themed site, or cyberpunk concept.

Every visual decision must reinforce Discipline, Precision, Progress, Evidence,
technical credibility, engineering maturity, and Restraint.

## Core principles

### Discipline

Layouts are intentional. Nothing exists without purpose.

### Precision

Every element aligns to a grid. Spacing is consistent and typography is
deliberate.

### Progress

The platform evolves because the engineering evolves; the interface remains
stable.

### Evidence

Claims are supported. Screenshots, logs, architecture, decisions, and validation
are first-class content.

### Restraint

Decorative UI is permitted only when it strengthens the operational narrative.

## Page hierarchy

Every page should establish this order:

1. Primary message
2. Operational visualization
3. Supporting content
4. Supporting documentation
5. Footer

Heroes should occupy approximately 70% of the initial viewport and contain a
section identifier, strong headline, supporting explanation, primary and
secondary actions, and an operational visualization. The visualization is the
centerpiece; the text supports it.

## Visual system rules

### Spacing

New layout work uses the 8px system: `8`, `16`, `24`, `32`, `48`, `64`, and
`96`. Prefer semantic spacing tokens. Existing four-pixel legacy tokens remain
available for backward compatibility, but new design work must not introduce
additional arbitrary spacing values.

### Typography

Maintain four levels: Hero, Section Heading, Supporting Text, and Label. Labels
remain small, operational, and consistent. Supporting text must stay readable
and must never compete with the primary message.

### Color

- Orange: active engineering, telemetry, and interaction
- Green: verified operational state
- White: primary information
- Gray: secondary information

Do not introduce additional accent colors.

### Cards and widgets

Cards should feel connected to the surrounding system through subtle borders,
restrained shadows, and minimal transparency. Avoid excessive blur and floating
rectangle treatments. Operational widgets should resemble instrumentation and
use low-opacity connector lines where they clarify infrastructure relationships.

### Maps

Maps represent operational infrastructure rather than decoration. They may show
active nodes, telemetry, routing, and infrastructure relationships, but must
avoid visual noise and unsupported activity claims.

### Metrics

Metrics communicate what has been built. They must be immediately readable and
must never exist merely to look impressive.

### Motion and interaction

Motion communicates state. Use fades, subtle elevation, telemetry pulses, and
node glow. Avoid bouncing, spinning, scaling, or flashy transitions. Hover states
should communicate only that an element is interactive. All motion must respect
reduced-motion preferences.

## Domain priorities

- Documentation pages prioritize readability.
- Engineering pages prioritize evidence.
- Architecture pages prioritize reasoning.
- Lab pages prioritize implementation.

## Premium quality gate

Before approving a page, confirm:

- It feels engineered and communicates confidence.
- Its visual hierarchy is immediately obvious.
- Every component serves a purpose.
- It is cleaner than the previous version.
- It aligns with the rest of the platform.
- It favors clarity over complexity and restraint over decoration.

If any answer is no, continue refining without expanding the page's scope.
