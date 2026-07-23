const operatorStats = [
  ["OPERATOR", "Jose Pulido"],
  ["STATUS", "Active"],
  ["BACKGROUND", "U.S. Army Leadership"],
  ["EXPERIENCE", "13 Years"],
  ["CURRENT OBJECTIVE", "Cybersecurity Engineer"],
  ["EDUCATION", "B.S. Cyber Security"],
] as const;

export function OperatorStats() {
  return (
    <div className="dossier-grid">
      {operatorStats.map(([label, value]) => (
        <div className="dossier-item" key={label}>
          <span className="item-label">{label}</span>
          <strong className={label === "STATUS" ? "active-text" : undefined}>
            {value}
          </strong>
        </div>
      ))}
    </div>
  );
}
