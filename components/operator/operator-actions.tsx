const focusAreas = [
  "Python",
  "Networking",
  "Windows",
  "Linux",
  "Active Directory",
  "Splunk",
  "Cloud Security",
] as const;

export function OperatorActions() {
  return (
    <div className="operator-focus">
      <span className="item-label">CURRENT FOCUS</span>
      <div className="focus-tags">
        {focusAreas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </div>
  );
}
