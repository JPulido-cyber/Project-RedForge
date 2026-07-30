import { documentationEntries } from "@/content/documentation";

export function HeroStatus() {
  const publishedRecordCount = documentationEntries.filter(
    (entry) => entry.publishingState === "published",
  ).length;

  return (
    <aside className="network-status-panel" aria-label="Engineering status">
      <div className="status-row">
        <span>ENGINEERING STATUS</span>
        <strong className="live-status">
          <span /> IN PROGRESS
        </strong>
      </div>
      <div className="status-row">
        <span>INFRASTRUCTURE</span>
        <strong className="live-status">OPERATIONAL</strong>
      </div>
      <div className="status-row">
        <span>IDENTITY SERVICES</span>
        <strong className="live-status">OPERATIONAL</strong>
      </div>
      <div className="status-row">
        <span>CENTRAL TELEMETRY</span>
        <strong className="live-status">ACTIVE</strong>
      </div>
      <div className="status-row">
        <span>CURRENT PHASE</span>
        <strong>POLICY ENGINEERING</strong>
      </div>
      <div className="status-row">
        <span>ENGINEERING RECORDS</span>
        <strong>{publishedRecordCount} PUBLISHED</strong>
      </div>
    </aside>
  );
}
