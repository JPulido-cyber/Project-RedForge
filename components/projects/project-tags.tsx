interface ProjectTagsProps {
  tags: readonly string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="project-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
