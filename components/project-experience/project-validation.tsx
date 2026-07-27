import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

const validationSymbols = { verified: "✓", pending: "○", planned: "◇" } as const;

export function ProjectValidation({ items }: { items: Project["validation"] }) {
  return (
    <ProjectSection id="validation" label="06 / Verification" title="Implementation Validation" description="Status-qualified checks documenting what has been verified and what remains pending.">
      <ul className="project-validation-list">
        {items.map((item) => <li key={item.label} data-status={item.status}><span aria-hidden>{validationSymbols[item.status]}</span><p>{item.label}</p><strong>{item.status}</strong></li>)}
      </ul>
    </ProjectSection>
  );
}
