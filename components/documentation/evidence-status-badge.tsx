import type { EvidenceStatus } from "@/content/documentation";

const labels: Record<EvidenceStatus, string> = {
  verified: "Verified evidence",
  reviewed: "Reviewed record",
  pending: "Evidence pending",
  conceptual: "Conceptual / target state",
};

export function EvidenceStatusBadge({ status }: { status: EvidenceStatus }) {
  return <span className={`evidence-status-badge ${status}`}>{labels[status]}</span>;
}
