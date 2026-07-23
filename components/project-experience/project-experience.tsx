import type { Project } from "@/content/projects";
import { EngineeringChallenges } from "./engineering-challenges";
import { FutureRoadmap } from "./future-roadmap";
import { LessonsLearned } from "./lessons-learned";
import { ProjectArchitecture } from "./project-architecture";
import { ProjectEvidence } from "./project-evidence";
import { ProjectFooter } from "./project-footer";
import { ProjectHero } from "./project-hero";
import { ProjectNavigation } from "./project-navigation";
import { ProjectObjectives } from "./project-objectives";
import { ProjectOverview } from "./project-overview";
import { ProjectTimeline } from "./project-timeline";
import { RelatedProjects } from "./related-projects";
import { TechnologyStack } from "./technology-stack";

export function ProjectExperience({ project }: { project: Project }) {
  return (
    <div className="project-experience">
      <ProjectHero project={project} />
      <ProjectNavigation />
      <div className="project-experience-main">
        <ProjectOverview project={project} />
        <ProjectObjectives objectives={project.objectives} />
        <ProjectArchitecture architecture={project.architecture} />
        <TechnologyStack technologies={project.technologies} />
        <ProjectTimeline events={project.timeline} />
        <EngineeringChallenges challenges={project.challenges} />
        <LessonsLearned lessons={project.lessonsLearned} />
        <ProjectEvidence project={project} />
        <FutureRoadmap items={project.futureRoadmap} />
        <RelatedProjects slugs={project.relatedProjectSlugs} />
      </div>
      <ProjectFooter />
    </div>
  );
}
