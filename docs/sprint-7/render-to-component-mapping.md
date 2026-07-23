# Sprint 7 render-to-component mapping

Date: 2026-07-23  
Status: Approved implementation map  
Source of truth: nine owner-supplied concept renders

## Guardrails

The renders are authoritative for composition, density, hierarchy, typography, borders, lighting, and interaction affordances. They are not evidence. Any depicted IP address, service count, uptime, threat count, commit count, date, availability statement, infrastructure health, military detail, location, clearance, or contact detail must be omitted unless the repository already verifies it.

The implementation will preserve the App Router, typed project records, lifecycle language, static generation, SEO routes, Storybook, Playwright, reduced-motion behavior, and the existing Project Experience Platform. Presentation changes will be shared and data-driven.

## Render inventory

| Render | Target experience | Existing components to restyle | Composition changes | Missing presentation pieces |
| --- | --- | --- | --- | --- |
| `Generated image 1 (2).png` | Homepage | `Navbar`, `Logo`, `Hero*`, `WorldMap`, `MetricsSection`, `FeaturedProjects`, `OperationsSection`, `OperatorSection`, `Footer` | Compact global shell; split hero copy/map/status; metrics rail; denser project cards; stronger section rhythm | Truthful engineering-status panel, shared technical eyebrow, forged rail |
| `Generated image 1 (5).png` | Operator profile | `OperatorSection`, `OperatorCard`, `OperatorStats`, `OperatorTimeline`, `OperatorActions` | Promote hidden homepage section into `/about`; dossier grid; profile/mission split; skills rail | Route shell, dossier metadata cells, privacy-safe evidence notice |
| `Generated image 1 (6).png` | Lab environment | `InfrastructureDiagram`, Enterprise Home Lab architecture data, SVG diagrams | New `/lab` composition using current target-state architecture; diagram-first workspace; right status rail | Lab shell, diagram selector presentation, target-state inventory rail |
| `Generated image 1 (7).png` | Projects portfolio | `ProjectGrid`, `ProjectCard`, `ProjectStatus`, `ProjectTags` | New `/projects` route; program portfolio header; category/status summary; denser cards | Portfolio sidebar, non-interactive filter summary, lifecycle legend |
| `Generated image 1 (8).png` | Project report, editorial layout | `ProjectExperience` and all project sections | Recompose hero, sticky navigation, main/report/sidebar hierarchy; architecture and evidence frames | Report shell, lifecycle summary, evidence state rail |
| `Generated image 1 (9).png` | Documentation index | Existing documentation templates and content folders | New `/documentation` route; category rail; reviewed-content queue; import-ready cards | Typed documentation schema, documentation card, publishing-state legend |
| `Generated image 1 (10).png` | Contact/mission | `Footer`, `SocialLinks`, `OperatorActions` | New `/contact` route with safe actions and availability language | Privacy-safe contact panel; no server-backed form |
| `Generated image 1 (11).png` | Planned-project variants | Shared `ProjectExperience`, planned project records | One shared report layout adapts by status/content availability | Evidence-pending and planned-content states |
| `Generated image 2.png` | Diagram-first project report | `ProjectExperience`, `ProjectNavigation`, `InfrastructureDiagram`, `TechnologyStack`, `Downloads` | Use as the primary report composition: left section rail, central architecture/report canvas, right context rail | Architecture hero frame and quick-link treatment |

## Shared visual patterns

| Pattern | Implementation direction |
| --- | --- |
| Forged panel | Shared border, carbon-to-gunmetal gradient, restrained inset highlight, optional ember edge |
| Technical eyebrow | Uppercase Orbitron label, forge-orange, tracked lettering |
| Status rail | Text-first lifecycle label plus restrained semantic dot; never color-only |
| Dossier cell | Icon/label/value structure with no sensitive personal fields |
| Architecture frame | Grid-backed panel for existing editable SVGs, target-state disclaimer always visible |
| Evidence state | Implemented, In Progress, Validation Pending, Evidence Pending, Planned, or Future |
| Command action | Bordered compact action with visible focus, 44px minimum touch target |
| Timeline node | Orange rail with explicit milestone state and native text content |
| Metric treatment | Verified repository facts only; no uptime, traffic, attack, or performance simulation |

## Token changes

- Lock carbon black to `#0B0B0B`.
- Lock forge orange to `#FF5A1F` and ember red to `#C62828`.
- Add gunmetal, steel gray, titanium white, panel, grid, glow, and focus tokens.
- Use Orbitron for display and technical headings and Inter for body/interface copy.
- Extend existing spacing, radii, shadow, and duration tokens rather than introducing local magic values.
- Keep motion CSS-driven, subtle, and disabled or simplified under `prefers-reduced-motion`.

## Route map

| Route | Sprint 7 treatment |
| --- | --- |
| `/` | Full render-led homepage transformation |
| `/about` | Truthful operator dossier using existing profile narrative |
| `/lab` | Target-state Enterprise Home Lab presentation shell |
| `/projects` | Engineering program portfolio using typed project data |
| `/projects/[slug]` | Shared render-led engineering report for every project |
| `/documentation` | Import-ready documentation and engineering-log index |
| `/contact` | Privacy-safe contact and mission page |
| `/coming-soon` | Engineering lifecycle language and next milestone context |
| `/maintenance` | Preserve operational fallback and align visual shell |
| `/blog` | Intentional lifecycle page until reviewed content exists |

Existing project slugs and generated routes remain unchanged.

## Desktop, tablet, and mobile implications

- Desktop follows the supplied 1536×1024 density with a maximum shell width and multi-column rails.
- Laptop reduces side rails before reducing body text.
- Tablet stacks contextual rails below the primary canvas and keeps section navigation horizontally scrollable.
- Pixel 7/mobile uses one column, 44px actions, clamped display type, scrollable technical tabs, contained diagrams, and reduced decorative motion.
- No supplied render defines mobile composition; responsive behavior will be derived from the desktop hierarchy without inventing new content.

## Assets

Reuse:

- Existing code-native forged-shield logo.
- Existing code-native animated world map.
- Existing editable Enterprise Home Lab SVG package.
- Existing icon system.

No raster render is shipped as product UI. The renders remain review references only.

## Details that cannot be reproduced exactly

- The rendered logo artwork is a concept raster; the established code-native shield remains the production identity.
- The renders show unverified infrastructure, counts, dates, uptime, traffic, commit totals, public availability, IP addresses, and health states. These are replaced with truthful lifecycle and evidence states.
- The renders show potentially sensitive personnel and contact information. Only repository-approved professional narrative and actions are used.
- No direct-message form is added because there is no approved backend/API.
- Search, sorting, diagram mode switching, and content filters are presented only where they operate on current local data; no dead controls are created.
- The lab remains a target-state presentation shell. No live polling, fake traffic, fake attack animation, or infrastructure control is implemented.

## Component decision

Restyle before replacing. Compose existing components into route shells where their responsibility remains correct. Add small presentation components only for patterns shared by at least two experiences. Do not fork project layouts by slug and do not introduce a parallel content model.
