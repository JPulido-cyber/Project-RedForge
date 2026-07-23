# Cloudflare deployment scaffold

Cloudflare requires an adapter for Next.js server features. This repository does
not install one until the deployment runtime and feature requirements are
approved.

When approved:

1. Select the supported Cloudflare Next.js adapter.
2. replace the placeholder commands in `wrangler.example.jsonc`;
3. generate the adapter output in CI;
4. validate metadata images, error boundaries, and caching on a preview;
5. rename the example to the adapter's required active configuration filename.

Do not point Pages directly at `.next`.
