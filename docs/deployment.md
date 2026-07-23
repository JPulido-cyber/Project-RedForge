# Deployment guide

## Required checks

All targets must pass `npm ci`, `npm run check`, `npm run storybook:build`,
`npm run build`, and active Playwright tests.

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin. Do not expose secrets
with `NEXT_PUBLIC_`.

## Vercel

Vercel is the zero-adapter Next.js target. Import the repository, preserve the
detected Next.js settings, configure the canonical URL, and require the CI checks
before production promotion.

## Cloudflare

Cloudflare deployment is intentionally adapter-gated. The scaffold in
`deployment/cloudflare-pages/` records the intended build contract without adding
an adapter before runtime requirements are reviewed. Native Next.js server
features must not be deployed as a plain static Pages artifact.

## Docker

The root `Dockerfile` is a portable Node production scaffold. Build with
`docker build -t redforge .` and supply `NEXT_PUBLIC_SITE_URL` at build time when
producing a canonical release.

## Rollback

Deploy immutable Git commits. Roll back by promoting the last known-good artifact,
then diagnose forward; do not edit a production artifact in place.
