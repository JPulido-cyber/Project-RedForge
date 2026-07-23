import { OperatorTimeline } from "./operator-timeline";

export function OperatorCard() {
  return (
    <aside className="operator-identity">
      <div className="operator-emblem">
        <span className="emblem-project">PROJECT</span>
        <strong>RF</strong>
        <span className="emblem-name">REDFORGE</span>
      </div>
      <p className="operator-designation">OPERATOR</p>
      <h3>Jose Pulido</h3>
      <p className="operator-role">Cybersecurity Engineer</p>
      <div className="operator-active-status">
        <span className="status-dot" />
        <span>ACTIVE</span>
      </div>
      <div className="identity-divider" />
      <div className="identity-detail">
        <span>CURRENT MISSION</span>
        <strong>Project RedForge</strong>
      </div>
      <div className="identity-detail">
        <span>MOTTO</span>
        <strong>Discipline. Precision. Progress.</strong>
      </div>
      <OperatorTimeline />
    </aside>
  );
}
