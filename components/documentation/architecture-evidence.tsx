import Image from "next/image";

import { EvidenceStatusBadge } from "./evidence-status-badge";

interface ArchitectureEvidenceProps {
  title: string;
  description: string;
  src: string;
  alt: string;
}

export function ArchitectureEvidence({ title, description, src, alt }: ArchitectureEvidenceProps) {
  return (
    <figure className="architecture-evidence">
      <figcaption><span>{title}</span><EvidenceStatusBadge status="conceptual" /></figcaption>
      <Image src={src} alt={alt} width={1200} height={675} />
      <p>{description}</p>
    </figure>
  );
}
