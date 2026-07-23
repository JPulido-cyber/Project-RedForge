import { OperationStatus } from "./operation-status";
import { OperationTimeline } from "./operation-timeline";

const operationDetails = [
  ["OBJECTIVE", "Build Core Networking Skills"],
  ["CURRENT FOCUS", "Virtualization and Home Lab Design"],
  ["STARTED", "July 21, 2026"],
  ["STATUS", "In Progress"],
] as const;

export function OperationCard() {
  return (
    <div className="operation-card">
      <OperationStatus status="ACTIVE" />
      <div className="operation-grid">
        {operationDetails.map(([label, value]) => (
          <div className="operation-item" key={label}>
            <span className="item-label">{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <OperationTimeline progress={15} />
    </div>
  );
}
