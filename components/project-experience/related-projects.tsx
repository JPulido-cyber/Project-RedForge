import type { Project } from "@/content/projects";
import { getProject } from "@/content/projects";

export function RelatedProjects({ slugs }: { slugs: Project["relatedProjectSlugs"] }) {
  const related = slugs.map(getProject).filter((project): project is Project => Boolean(project));
  if (!related.length) return null;
  return (
    <section className="related-projects" aria-labelledby="related-projects-title"><p>CONTINUE EXPLORING</p><h2 id="related-projects-title">Related Projects</h2><div>{related.map((project) => <a href={`/projects/${project.slug}`} key={project.slug}><span>{project.status}</span><h3>{project.title}</h3><p>{project.subtitle}</p></a>)}</div></section>
  );
}
