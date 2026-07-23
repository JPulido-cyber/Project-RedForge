import type { ProjectItem } from "@/content/types";

export function ProjectStatus({
  status,
}: Pick<ProjectItem, "status">) {
  return <span className={`project-status ${status}`}>{status.toUpperCase()}</span>;
}
