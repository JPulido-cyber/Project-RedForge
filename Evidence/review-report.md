# Public evidence review

Review date: 2026-07-30  
Repositories reviewed:

- `Project-RedForge` (`redforge-next`) — 46 tracked image files
- `home-lab` — 19 tracked engineering screenshots

Original source images reviewed: 65.

The publication change adds 30 governed derivative paths to the website
repository: 15 canonical files under `Evidence/Reviewed` and 15 byte-identical
browser copies under `public/evidence`. Those derivatives inherit the 15
APPROVED source decisions and are continuously verified by SHA-256. The
post-change audit therefore covers 95 image-path instances while retaining 65
independent source decisions.

## Decision summary

| Status | Count | Publication decision |
| --- | ---: | --- |
| APPROVED | 56 | Safe in its documented context |
| REDACTED | 0 | No redacted derivative is required for the approved publication set |
| REPLACEMENT | 4 | Two resolved with reviewed substitutes; two require stronger future captures |
| REMOVE | 5 | Unused framework starter assets; remove in a separate cleanup change |

“Approved” does not make a conceptual diagram into implementation evidence.
Website QA captures remain historical design artifacts. Only images listed in
`Published/manifest.json` are approved engineering evidence for website use.

## Project-RedForge repository

### Application and public assets

| Image | Status | Review |
| --- | --- | --- |
| `app/favicon.ico` | APPROVED | Current RedForge favicon; no personal or sensitive content. |
| `public/redforge-world-map-v2.png` | APPROVED | Brand atmosphere asset; not presented as attack or implementation evidence. |
| `public/file.svg` | REMOVE | Unused Next.js starter asset with no RedForge purpose. |
| `public/globe.svg` | REMOVE | Unused Next.js starter asset with no RedForge purpose. |
| `public/next.svg` | REMOVE | Unused Next.js starter asset with no RedForge purpose. |
| `public/vercel.svg` | REMOVE | Unused Next.js starter asset with no RedForge purpose. |
| `public/window.svg` | REMOVE | Unused Next.js starter asset with no RedForge purpose. |

The five starter assets are intentionally not deleted in this work order. They
are harmless and can be removed in a dedicated cleanup commit after confirming
no downstream documentation relies on them.

### Architecture documentation

All architecture SVGs are APPROVED as editable design artifacts. Their embedded
labels already identify planned or conceptual state, and the website must
continue distinguishing them from verified screenshots.

| Image | Status | Review |
| --- | --- | --- |
| `public/projects/enterprise-home-lab/diagrams/hybrid-cloud.svg` | APPROVED | Conceptual future hybrid-cloud architecture. |
| `public/projects/enterprise-home-lab/diagrams/logical-architecture.svg` | APPROVED | Planned logical service-chain artifact. |
| `public/projects/enterprise-home-lab/diagrams/network-topology.svg` | APPROVED | Planned target-state network artifact. |
| `public/projects/enterprise-home-lab/diagrams/rack-elevation.svg` | APPROVED | Planned rack-layout artifact. |
| `public/projects/enterprise-home-lab/diagrams/security-zones.svg` | APPROVED | Planned security-zone artifact. |
| `public/projects/enterprise-home-lab/diagrams/traffic-flow.svg` | APPROVED | Planned traffic-flow artifact. |
| `public/projects/enterprise-home-lab/diagrams/trust-boundaries.svg` | APPROVED | Planned trust-boundary artifact. |
| `public/projects/enterprise-home-lab/diagrams/vlan-layout.svg` | APPROVED | Planned VLAN artifact; example addressing is design data. |

### Historical website QA captures

The following 31 images are APPROVED only as historical UI, responsive, and
delivery evidence. They contain no secrets, credentials, browser profiles,
private documents, or unrelated desktop content. They are not approved as
proof of infrastructure implementation and are not copied into the website
engineering-evidence library.

| Image | Status |
| --- | --- |
| `docs/about/screenshots/about-phase-3-desktop-1920.png` | APPROVED |
| `docs/about/screenshots/about-phase-3-mobile-pixel-7.png` | APPROVED |
| `docs/about/screenshots/about-phase-3-tablet-820.png` | APPROVED |
| `docs/contact/screenshots/contact-final-desktop-1920.png` | APPROVED |
| `docs/contact/screenshots/contact-final-mobile-pixel-7.png` | APPROVED |
| `docs/lab/screenshots/lab-phase-2-desktop-1920.png` | APPROVED |
| `docs/lab/screenshots/lab-phase-2-mobile-pixel-7.png` | APPROVED |
| `docs/lab/screenshots/lab-phase-2-tablet-820.png` | APPROVED |
| `docs/migration/screenshots/homepage-after-viewport.png` | APPROVED |
| `docs/migration/screenshots/homepage-after.png` | APPROVED |
| `docs/migration/screenshots/homepage-before-viewport.png` | APPROVED |
| `docs/migration/screenshots/homepage-before.png` | APPROVED |
| `docs/projects/screenshots/project-final-polish-desktop-1920.png` | APPROVED |
| `docs/projects/screenshots/project-final-polish-mobile-pixel-7.png` | APPROVED |
| `docs/sprint-4/screenshots/homepage-after.png` | APPROVED |
| `docs/sprint-4/screenshots/homepage-before.png` | APPROVED |
| `docs/sprint-5/screenshots/enterprise-home-lab.png` | APPROVED |
| `docs/sprint-6/enterprise-home-lab-desktop.png` | APPROVED |
| `docs/sprint-6/enterprise-home-lab-mobile.png` | APPROVED |
| `docs/sprint-6/network-topology.png` | APPROVED |
| `docs/sprint-7/screenshots/homepage-after.png` | APPROVED |
| `docs/sprint-7/screenshots/homepage-pixel7.png` | APPROVED |
| `docs/sprint-7/screenshots/lab-after.png` | APPROVED |
| `docs/sprint-7/screenshots/project-report-after.png` | APPROVED |
| `docs/sprint-7/screenshots/project-report-pixel7.png` | APPROVED |
| `docs/sprint-7/screenshots/projects-after.png` | APPROVED |
| `docs/sprint-8/screenshots/documentation-index.png` | APPROVED |
| `docs/sprint-8/screenshots/homepage-engineering-feed.png` | APPROVED |
| `docs/sprint-8/screenshots/milestone-report.png` | APPROVED |
| `docs/sprint-8/screenshots/server-establishment-mobile.png` | APPROVED |
| `docs/sprint-8/screenshots/server-establishment-report.png` | APPROVED |

The two contact captures include the deliberately published professional
contact address already present on the approved Contact page. It is necessary
to the documented interaction and is not treated as incidental personal data.

## home-lab engineering evidence

The fictional `corp.redforge.test` namespace, hostnames, private lab addresses,
Active Directory structure, Group Policy, DNS, indexes, event fields, hashes,
and Splunk configuration are legitimate engineering evidence and were not
redacted.

### Active Directory

| Source image | Status | Concern and recommendation |
| --- | --- | --- |
| `active-directory/screenshots/Screenshot 2026-07-30 093506.png` | APPROVED | Forest/domain configuration; publish as authentic identity evidence. |
| `active-directory/screenshots/Screenshot 2026-07-30 093628.png` | APPROVED | Domain and forest functional levels; publish. |
| `active-directory/screenshots/Screenshot 2026-07-30 093806.png` | APPROVED | RF-SPLUNK01 directory computer object; publish. |
| `active-directory/screenshots/Screenshot 2026-07-30 093900.png` | APPROVED | Organizational Unit structure; publish. |
| `active-directory/screenshots/Screenshot 2026-07-30 093949.png` | APPROVED | Administrative OU structure; useful supporting evidence. |
| `active-directory/screenshots/Screenshot 2026-07-30 094027.png` | APPROVED | RF-WIN11-01 directory computer object; publish. |
| `active-directory/screenshots/Screenshot 2026-07-30 094107.png` | REPLACEMENT | Displays the owner’s real name as a user object. The public Users/OU evidence slot uses the reviewed `organizational-unit-structure.png` capture instead. The authentic source remains preserved in `home-lab`; no engineering pixels were altered. |
| `active-directory/screenshots/Screenshot 2026-07-30 094132.png` | REPLACEMENT | Displays the same real-name account in the administrative OU. The public administrative-boundary evidence slot uses the reviewed `administrative-ou-structure.png` capture instead. |
| `active-directory/screenshots/Screenshot 2026-07-30 094140.png` | REPLACEMENT | Selected Groups container is empty. Capture a replacement showing the implemented role-based groups. |
| `active-directory/screenshots/Screenshot 2026-07-30 094200.png` | REPLACEMENT | Selected Service Accounts container is empty. Capture a replacement after a safe, representative service account exists. |
| `active-directory/screenshots/Screenshot 2026-07-30 094451.png` | APPROVED | Group Policy Objects and links; publish without suppressing legitimate policy evidence. |
| `active-directory/screenshots/Screenshot 2026-07-30 094705.png` | APPROVED | Workstation policy scope and enforcement; publish. |
| `active-directory/screenshots/Screenshot 2026-07-30 094935.png` | APPROVED | Integrated DNS records; publish as infrastructure evidence. |

### Enterprise Security Monitoring

| Source image | Status | Concern and recommendation |
| --- | --- | --- |
| `splunk/screenshots/homepage.png` | APPROVED | Operational Splunk Enterprise application view. |
| `splunk/screenshots/Splunk Indexes.png` | APPROVED | Enterprise index inventory and event counts. |
| `splunk/screenshots/splunk-data-inputs.png` | APPROVED | Reviewed data-input configuration. |
| `splunk/screenshots/splunk-forwarding-receiving.png` | APPROVED | Forwarding receiver configuration. |
| `splunk/screenshots/splunk-searches.png` | APPROVED | Real indexed Windows and Sysmon events. Visible hostnames, SIDs, process hashes, internal test domain, and event fields are engineering evidence—not credentials. |
| `splunk/screenshots/splunk-sysmon-process-search.png` | APPROVED | Validated Sysmon process-search evidence. |

The Splunk account label is the generic laboratory administrator role. No API
tokens, session cookies, passwords, license keys, authentication secrets, or
personal browser state are visible.

## Final publication decisions

1. The two name-bearing Active Directory captures remain preserved in the
   engineering repository but are not copied into the public pipeline. Existing
   reviewed OU captures provide stronger representative evidence without
   unnecessary personal identification.
2. Capture replacement images for the empty Groups and Service Accounts views
   when those objects can be demonstrated accurately.
3. Consider removing the five unused Next.js starter SVGs in a future cleanup
   change. They are not used or published as evidence.

No published engineering screenshot contains the owner’s personal name,
personal email address, browser profile, desktop notifications, license keys,
API keys, authentication tokens, passwords, secrets, or private keys.
