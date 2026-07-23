import type { MetricItem } from "@/content/types";

import { MetricIcon } from "./metric-icon";
import { MetricValue } from "./metric-value";

export function MetricCard({ icon, label, value }: MetricItem) {
  return (
    <div className="metric">
      <MetricIcon icon={icon} />
      <MetricValue label={label} value={value} />
    </div>
  );
}
