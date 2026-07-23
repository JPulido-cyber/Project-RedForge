import Image from "next/image";

import type { EvidenceItem } from "@/content/documentation";

import { EvidenceStatusBadge } from "./evidence-status-badge";

export function ScreenshotEvidenceGallery({ items }: { items: readonly EvidenceItem[] }) {
  return (
    <div className="screenshot-evidence-gallery">
      {items.map((item) => (
        <figure key={item.id}>
          {item.src && item.alt ? (
            <Image src={item.src} alt={item.alt} width={1200} height={675} />
          ) : (
            <div className="evidence-placeholder" role="img" aria-label={`${item.title}: evidence pending`}>
              <span>Evidence pending review</span>
            </div>
          )}
          <figcaption><strong>{item.title}</strong><p>{item.description}</p><EvidenceStatusBadge status={item.status} /></figcaption>
        </figure>
      ))}
    </div>
  );
}
