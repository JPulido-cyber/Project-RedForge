import { Section } from "@/components/layout";
import {
  activeDirectoryEvidence,
  securityMonitoringEvidence,
} from "@/content/evidence";
import { homepageContent } from "@/content/homepage";

import { MetricGrid } from "./metric-grid";

export function MetricsSection() {
  const evidenceAssetCount =
    activeDirectoryEvidence.length + securityMonitoringEvidence.length;
  const metrics = homepageContent.metrics.map((metric) =>
    metric.label === "PUBLISHED EVIDENCE ASSETS"
      ? { ...metric, value: String(evidenceAssetCount) }
      : metric,
  );

  return (
    <Section className="hero-metrics" aria-label="RedForge project metrics">
      <MetricGrid metrics={metrics} />
    </Section>
  );
}
