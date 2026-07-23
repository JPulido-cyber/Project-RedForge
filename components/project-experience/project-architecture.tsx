import type { Project } from "@/content/projects";
import { InfrastructureDiagram } from "./infrastructure-diagram";
import { ProjectSection } from "./project-section";

export function ProjectArchitecture({ architecture }: { architecture: Project["architecture"] }) {
  return (
    <ProjectSection id="architecture" label="03 / System Design" title="Project Architecture" description={architecture.summary}>
      <InfrastructureDiagram architecture={architecture} />
    </ProjectSection>
  );
}
