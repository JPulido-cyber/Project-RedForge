# Homepage refinement — Version 2.0

## Decision

The homepage remains a focused entry point rather than becoming a duplicate of
the Projects, Documentation, or Lab experiences. Version 2.0 adds the missing
platform narrative through compact, reusable presentation components.

## Version 2.1 composition

1. The hero identifies the work as enterprise security engineering and explains
   the progression toward Offensive Security.
2. The verified metrics strip and mission-control panel summarize the current
   enterprise state.
3. Engineering Philosophy presents Discipline, Precision, and Progress as three
   compact operating principles with one mission signature.
4. Latest Engineering Activity presents the four most recent synchronized public
   records as a compact horizontal feed without report summaries.

The final v4.0 direction removes Current Projects and the explicit evidence
strapline. Project discovery remains owned by Projects, Lab Environment, and the
primary navigation. The homepage therefore contains only Navigation, Hero,
Enterprise Metrics, the compact Philosophy transition, Latest Engineering
Activity, and Footer.

The enterprise is presented as the training ground for progression toward
Offensive Cybersecurity, not as the final destination.

## Truthfulness and data ownership

- Engineering record totals are derived from synchronized public content.
- Metrics remain sourced from `content/homepage.ts`.
- Operational identity and telemetry claims reflect the verified lab topology.
- Planned capabilities remain outside operational status claims.
- No dates, completion percentages, traffic, or attack activity were invented.

## Responsive and motion behavior

The existing world-map route flow, node pulse, scan, and reduced-motion handling
remain intact. The map is larger and shifted toward the hero copy on desktop.
Mobile preserves content readability, disables the dense status overlay, and
stacks philosophy and activity content without horizontal overflow.
