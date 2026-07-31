# Project RedForge

**A living cybersecurity engineering platform documenting progression toward Offensive Cybersecurity through enterprise implementation, validation, operation, and evidence.**

[Live Platform](https://projectredforge.com/) · [Engineering Documentation](./docs/README.md) · [Project Records](./content)

## Why This Project Exists

Project RedForge is where I turn cybersecurity study into reviewable work. The platform documents how projects are planned, built, tested, and improved so that a recruiter or technical reviewer can see both the result and the reasoning behind it.

The goal is not to present a list of tools. It is to demonstrate:

- Structured problem solving and technical documentation
- Enterprise-lab design and implementation
- Security-focused research and authorized testing
- Repeatable workflows, change control, and lessons learned
- Clear communication for both technical and nontechnical audiences

## Current Evidence

- **Enterprise Home Lab:** architecture, implementation records, and sanitized project reporting
- **Engineering Records:** documented decisions, constraints, outcomes, and follow-up work
- **Quality Controls:** linting, strict TypeScript validation, automated builds, Storybook, and Playwright tests
- **Deployment:** container and platform deployment scaffolding with continuous-integration workflows
- **Public Platform:** an evidence-first presentation of completed engineering work and professional development

> Security exercises and offensive techniques documented through this project are performed only in owned or explicitly authorized lab environments.

## Technical Stack

- Next.js App Router and React
- TypeScript with strict validation
- Tailwind CSS and a reusable design system
- Docker and deployment configuration
- GitHub Actions continuous integration
- Storybook component development
- Playwright end-to-end testing

## Repository Map

```text
.github/workflows/  Continuous integration
app/                Routes, layouts, metadata, and error boundaries
components/         UI primitives, templates, and domain components
config/             Typed design configuration
content/            Project reports and engineering records
deployment/         Deployment guidance and scaffolding
docs/               Architecture and contribution documentation
lib/                Shared utilities, motion, and SEO
public/             Static assets and published project artifacts
scripts/            Documentation and project automation
services/           Typed infrastructure ports
tests/e2e/          Playwright behavior contracts
```

## Run Locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run check
npm run storybook:build
npm run build
npx playwright install chromium
npm run test:e2e
```

`npm run check` runs ESLint with zero-warning enforcement and strict TypeScript validation.

## Documentation Standards

Project records are written to show:

1. The problem or learning objective
2. The environment and constraints
3. The implementation approach
4. Validation and evidence
5. Findings, limitations, and lessons learned
6. The next improvement to make

Sensitive information, credentials, private identifiers, and operational data are excluded or sanitized before publication.

## Status

Project RedForge is under active development. New lab evidence and security projects are published as they reach a reviewable state.

## Contact

- Platform: [projectredforge.com](https://projectredforge.com/)
- LinkedIn: [Jose Pulido](https://www.linkedin.com/in/jose-pulido-5887723a5/)
- GitHub: [JPulido-cyber](https://github.com/JPulido-cyber)
