# Homepage refinement — Version 2.0

## Decision

The homepage remains a focused entry point rather than becoming a duplicate of
the Projects, Documentation, or Lab experiences. Version 2.0 adds the missing
platform narrative through compact, reusable presentation components.

## Narrative sequence

1. The hero identifies the work as enterprise security engineering and explains
   the progression toward Offensive Security.
2. Engineering Philosophy defines Discipline, Precision, and Progress as
   operating principles.
3. The verified metrics strip and engineering-status panel summarize the current
   enterprise state.
4. Latest Engineering Activity presents the four most recent synchronized public
   records in a compact feed.
5. Platform pathways direct visitors to Projects, Documentation, and the verified
   Lab Environment without duplicating those dedicated experiences.

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
stacks philosophy, activity, and pathway content without horizontal overflow.
