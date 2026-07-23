import { Section } from "@/components/layout";

import { OperatorActions } from "./operator-actions";
import { OperatorCard } from "./operator-card";
import { OperatorStats } from "./operator-stats";

interface OperatorSectionProps {
  hidden?: boolean;
}

export function OperatorSection({ hidden = true }: OperatorSectionProps) {
  return (
    <Section className="operator-section" id="operator" hidden={hidden}>
      <div className="section-heading">
        <p className="section-label">OPERATOR PROFILE</p>
        <h2>The Engineer Behind RedForge</h2>
        <p className="section-description">
          Military leadership, technical development, and a disciplined transition
          into cybersecurity engineering.
        </p>
      </div>
      <div className="operator-dashboard">
        <OperatorCard />
        <div className="operator-dossier">
          <div className="dossier-header">
            <span>PERSONNEL DOSSIER</span>
            <span>RF-001</span>
          </div>
          <OperatorStats />
          <OperatorActions />
          <div className="mission-statement">
            <span className="item-label">MISSION STATEMENT</span>
            <p>
              Project RedForge documents my transition from Army leadership to
              cybersecurity engineering. Every lab, automation, technical write-up,
              and project on this platform represents deliberate practice,
              continuous learning, and measurable progress.
            </p>
          </div>
        </div>
      </div>
      <div className="redforge-principle">
        <p>REDFORGE PRINCIPLE</p>
        <h3>
          Discipline forged in service.
          <span>Engineering forged through practice.</span>
        </h3>
      </div>
    </Section>
  );
}
