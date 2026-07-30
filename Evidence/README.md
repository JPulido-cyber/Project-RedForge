# RedForge evidence publishing

This directory is the governed intake and publication record for authentic
engineering images.

## Flow

1. `Raw/` is a local-only intake area. Image files are ignored by Git.
2. `Reviewed/` contains the canonical, owner-reviewable evidence that passed
   privacy, security, relevance, and provenance review.
3. `Published/manifest.json` records every asset approved for publication and
   its website destination.
4. `Website/` documents how reviewed assets are presented by the application.
5. `public/evidence/` is generated from the reviewed copies and is the only
   browser-addressable evidence location.

The publishing validator requires every browser-addressable evidence image to
match its reviewed source byte-for-byte. An image must never be copied directly
from `Raw/` into `public/`.

See [review-report.md](./review-report.md) for the complete repository and
engineering-evidence review.
