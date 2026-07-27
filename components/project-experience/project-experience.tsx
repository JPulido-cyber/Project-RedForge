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
import { ProjectSnapshot } from "./project-snapshot";
import { ProjectTimeline } from "./project-timeline";
import { ProjectValidation } from "./project-validation";
import { RelatedProjects } from "./related-projects";
import { RelatedEngineeringRecords } from "./related-engineering-records";
import { TechnologyStack } from "./technology-stack";

export function ProjectExperience({ project }: { project: Project }) {
  return (
    <div className="project-experience">
      <ProjectHero project={project} />
      <ProjectSnapshot project={project} />
      <ProjectNavigation />
      <div className="project-experience-main">
        <ProjectOverview project={project} />
        <ProjectObjectives objectives={project.objectives} />
        <ProjectArchitecture architecture={project.architecture} />
        <TechnologyStack technologies={project.technologies} />
        <ProjectTimeline events={project.timeline} />
        <ProjectValidation items={project.validation} />
        <EngineeringChallenges challenges={project.challenges} />
        <LessonsLearned lessons={project.lessonsLearned} retrospective={project.retrospective} />
        <ProjectEvidence project={project} />
        <RelatedEngineeringRecords records={project.engineeringRecords} />
        <FutureRoadmap items={project.futureRoadmap} />
        <RelatedProjects slugs={project.relatedProjectSlugs} />
      </div>
      <ProjectFooter />
    </div>
  );
}
