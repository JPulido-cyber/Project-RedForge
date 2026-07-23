export function HeroStatus() {
  return (
    <aside className="network-status-panel" aria-label="Network status">
      <div className="status-row">
        <span>NETWORK STATUS</span>
        <strong className="live-status">
          <span /> LIVE
        </strong>
      </div>
      <div className="status-row">
        <span>DOMAIN CONTROLLERS</span>
        <strong>1</strong>
      </div>
      <div className="status-row">
        <span>SYSTEMS ONLINE</span>
        <strong>1</strong>
      </div>
    </aside>
  );
}
