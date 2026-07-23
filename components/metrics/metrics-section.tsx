import { Section } from "@/components/layout";
import { homepageContent } from "@/content/homepage";

import { MetricGrid } from "./metric-grid";

export function MetricsSection() {
  return (
    <Section className="hero-metrics" aria-label="RedForge project metrics">
      <MetricGrid metrics={homepageContent.metrics} />
    </Section>
  );
}
