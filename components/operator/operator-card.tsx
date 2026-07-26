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
      <p className="operator-role">Offensive Cybersecurity Engineering</p>
      <div className="operator-active-status">
        <span className="status-dot" />
        <span>ACTIVE</span>
      </div>
      <div className="identity-divider" />
      <div className="identity-detail">
        <span>CURRENT MISSION</span>
        <strong>Build enterprise depth for offensive security</strong>
      </div>
      <div className="identity-detail">
        <span>MOTTO</span>
        <strong>Discipline. Precision. Progress.</strong>
      </div>
      <p className="operator-summary">
        Military leader transitioning into offensive cybersecurity through
        evidence-backed enterprise engineering.
      </p>
      <nav className="operator-profile-links" aria-label="Professional profile actions">
        <a href="/contact#resume">Resume</a>
        <a href="https://github.com/JPulido-cyber" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jose-pulido-5887723a5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </aside>
  );
}
