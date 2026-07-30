import { documentationEntries } from "@/content/documentation";

export function HeroStatus() {
  const publishedRecordCount = documentationEntries.filter(
    (entry) => entry.publishingState === "published",
  ).length;

  return (
    <aside className="network-status-panel" aria-label="Mission control">
      <div className="status-row">
        <span>MISSION CONTROL</span>
        <strong className="live-status">LIVE</strong>
      </div>
      <div className="status-row">
        <span>INFRASTRUCTURE</span>
        <strong className="live-status">ONLINE</strong>
      </div>
      <div className="status-row">
        <span>IDENTITY SERVICES</span>
        <strong className="live-status">ONLINE</strong>
      </div>
      <div className="status-row">
        <span>MONITORING</span>
        <strong className="live-status">ONLINE</strong>
      </div>
      <div className="status-row">
        <span>DOCUMENTATION</span>
        <strong className="live-status">{publishedRecordCount} RECORDS</strong>
      </div>
      <div className="status-row">
        <span>CURRENT PHASE</span>
        <strong>POLICY ENGINEERING</strong>
      </div>
      <div className="status-row">
        <span>OVERALL STATUS</span>
        <strong className="live-status">OPERATIONAL</strong>
      </div>
    </aside>
  );
}
