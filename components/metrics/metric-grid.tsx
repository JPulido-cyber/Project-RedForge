import type { MetricItem } from "@/content/types";

import { MetricCard } from "./metric-card";

interface MetricGridProps {
  metrics: readonly MetricItem[];
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="metric-grid">
      {metrics.map((metric) => (
        <MetricCard {...metric} key={metric.label} />
      ))}
    </div>
  );
}
