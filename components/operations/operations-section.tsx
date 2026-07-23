import { Section } from "@/components/layout";

import { OperationCard } from "./operation-card";

export function OperationsSection() {
  return (
    <Section className="operations-section" id="operations">
      <div className="section-heading">
        <p className="section-label">CURRENT OPERATION</p>
        <h2>Operation Foundation</h2>
        <p className="section-description">
          Establishing the technical foundation for networking, systems
          administration, automation, and cybersecurity engineering.
        </p>
      </div>
      <OperationCard />
    </Section>
  );
}
