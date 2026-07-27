import type { Project } from "@/content/projects";

export function ProjectSnapshot({ project }: { project: Project }) {
  const items = [
    ["Status", project.status],
    ["Current phase", project.phase],
    ["Start date", project.snapshot.startDate],
    ["Last updated", project.updatedAt],
    ["Operational systems", project.snapshot.operationalSystems],
    ["Engineering records", `${project.engineeringRecords.length} published`],
    ["Validation status", project.snapshot.validationStatus],
  ] as const;

  return (
    <section className="project-snapshot" aria-labelledby="project-snapshot-title">
      <p id="project-snapshot-title">Project Snapshot</p>
      <dl>{items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd data-status={label === "Status" ? project.status : undefined}>{value}</dd></div>)}</dl>
    </section>
  );
}
