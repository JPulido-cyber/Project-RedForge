import type { EvidenceItem } from "@/content/documentation";

import { EvidenceStatusBadge } from "./evidence-status-badge";

export function ValidationChecklist({
  title,
  items,
}: {
  title: string;
  items: NonNullable<EvidenceItem["checklist"]>;
}) {
  return (
    <section className="validation-evidence" aria-labelledby={`validation-${title.replaceAll(" ", "-").toLowerCase()}`}>
      <div className="evidence-panel-heading">
        <h3 id={`validation-${title.replaceAll(" ", "-").toLowerCase()}`}>{title}</h3>
        <EvidenceStatusBadge status="verified" />
      </div>
      <ul>
        {items.map((item) => (
          <li data-state={item.state} key={item.label}>
            <span aria-hidden>{item.state === "pending" ? "○" : "✓"}</span>
            <span>{item.label}</span>
            <small>{item.state}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
