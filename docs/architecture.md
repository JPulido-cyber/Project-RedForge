# Architecture

RedForge uses the Next.js App Router with `app/` at the repository root. Routes
compose features; they do not own reusable infrastructure.

## Dependency direction

```text
app routes
  -> feature components and templates
    -> UI primitives, icons, motion
      -> utilities, constants, types, design tokens

app routes
  -> service interfaces
    -> future infrastructure adapters
```

Lower layers must not import routes or feature compositions. Services expose
typed boundaries and return modeled errors. Browser-only behavior belongs behind
the smallest practical `"use client"` boundary.

## Server and client components

Components are Server Components by default. Client Components are reserved for
state, effects, event handlers, and browser APIs. Data fetching should happen in
Server Components or service adapters rather than through internal route-handler
round trips.

## Content and data

`content/` contains authored records. `data/` will contain retrieval and mapping
logic when real consumers exist. Content schemas live near content; generic
application contracts live in `types/`.

## Architectural decisions

For a significant or difficult-to-reverse decision, add a short decision record
under `docs/decisions/` describing context, decision, consequences, and date.
