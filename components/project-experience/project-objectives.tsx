import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

export function ProjectObjectives({ objectives }: { objectives: Project["objectives"] }) {
  return (
    <ProjectSection id="objectives" label="02 / Requirements" title="Engineering Objectives">
      <ol className="project-objective-grid">
        {objectives.map((objective, index) => <li key={objective}><span>{String(index + 1).padStart(2, "0")}</span>{objective}</li>)}
      </ol>
    </ProjectSection>
  );
}
