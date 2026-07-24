import type { EvidenceItem } from "@/content/documentation";

import { ArchitectureEvidence } from "./architecture-evidence";
import { ConfigurationSnippet } from "./configuration-snippet";
import { EvidenceStatusBadge } from "./evidence-status-badge";
import { ScreenshotEvidenceGallery } from "./screenshot-evidence-gallery";
import { TerminalOutput } from "./terminal-output";
import { ValidationChecklist } from "./validation-checklist";

export function EvidenceRenderer({ items }: { items: readonly EvidenceItem[] }) {
  return (
    <div className="engineering-evidence-grid">
      {items.map((item) => {
        if (item.kind === "configuration" && item.content && item.language) {
          return <ConfigurationSnippet content={item.content} description={item.description} key={item.id} language={item.language} title={item.title} />;
        }
        if (item.kind === "terminal" && item.content) {
          return <TerminalOutput content={item.content} key={item.id} title={item.title} />;
        }
        if (item.kind === "validation" && item.checklist) {
          return <ValidationChecklist items={item.checklist} key={item.id} title={item.title} />;
        }
        if (item.kind === "architecture" && item.src && item.alt) {
          return <ArchitectureEvidence alt={item.alt} description={item.description} key={item.id} src={item.src} title={item.title} />;
        }
        if (item.kind === "screenshot") {
          return <ScreenshotEvidenceGallery items={[item]} key={item.id} />;
        }
        return (
          <article className="evidence-record" key={item.id}>
            <EvidenceStatusBadge status={item.status} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
