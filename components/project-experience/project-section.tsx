import type { ReactNode } from "react";

interface ProjectSectionProps {
  children: ReactNode;
  description?: string;
  id: string;
  label: string;
  title: string;
}

export function ProjectSection({ children, description, id, label, title }: ProjectSectionProps) {
  return (
    <section className="project-experience-section" id={id} aria-labelledby={`${id}-title`}>
      <header className="project-section-heading">
        <p>{label}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {description ? <span>{description}</span> : null}
      </header>
      {children}
    </section>
  );
}
