import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

export function LessonsLearned({ lessons }: { lessons: Project["lessonsLearned"] }) {
  return (
    <ProjectSection id="lessons" label="07 / Retrospective" title="Lessons Learned">
      {lessons.length ? <div className="lesson-grid">{lessons.map((lesson) => <blockquote key={lesson.title}><h3>{lesson.title}</h3><p>{lesson.insight}</p></blockquote>)}</div> : <p className="project-empty-state">Lessons will be added after validated milestones.</p>}
    </ProjectSection>
  );
}
