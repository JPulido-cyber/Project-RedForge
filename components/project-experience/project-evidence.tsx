import type { Project } from "@/content/projects";
import { CodeExamples } from "./code-examples";
import { Downloads } from "./downloads";
import { ProjectSection } from "./project-section";
import { ScreenshotsGallery } from "./screenshots-gallery";
import { VideoSection } from "./video-section";

export function ProjectEvidence({ project }: { project: Project }) {
  return (
    <ProjectSection id="evidence" label="08 / Artifacts" title="Implementation Evidence">
      <ScreenshotsGallery images={project.gallery} />
      <VideoSection videos={project.videos} />
      <CodeExamples examples={project.codeExamples} />
      <Downloads assets={project.downloads} />
    </ProjectSection>
  );
}
