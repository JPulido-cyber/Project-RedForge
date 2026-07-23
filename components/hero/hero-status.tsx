export function HeroStatus() {
  return (
    <aside className="network-status-panel" aria-label="Engineering status">
      <div className="status-row">
        <span>ENGINEERING STATUS</span>
        <strong className="live-status">
          <span /> IN PROGRESS
        </strong>
      </div>
      <div className="status-row">
        <span>DOCUMENTATION BASELINE</span>
        <strong>IMPLEMENTED</strong>
      </div>
      <div className="status-row">
        <span>LAB ARCHITECTURE</span>
        <strong>TARGET STATE</strong>
      </div>
    </aside>
  );
}
