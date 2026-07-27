import type { Project } from "@/content/projects";
import Link from "next/link";
import { ProjectSection } from "./project-section";

export function RelatedEngineeringRecords({ records }: { records: Project["engineeringRecords"] }) {
  return (
    <ProjectSection id="records" label="10 / Traceability" title="Related Engineering Records" description="Implementation and validation records associated with this project.">
      {records.length ? (
        <div className="engineering-record-grid">
          {records.map((record) => <Link href={{ pathname: record.href }} key={record.href}><span>{record.id}</span><h3>{record.title}</h3><strong>Open record <span aria-hidden>→</span></strong></Link>)}
        </div>
      ) : <p className="project-empty-state">No engineering records are published because this project has not entered implementation.</p>}
    </ProjectSection>
  );
}
