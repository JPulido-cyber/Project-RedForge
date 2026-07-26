import { aboutContent } from "@/content/about";

export function OperatorCard() {
  const { profile } = aboutContent;
  return (
    <aside className="operator-identity" aria-labelledby="professional-profile-name">
      <div className="operator-emblem">
        <span className="emblem-project">PROJECT</span>
        <strong>RF</strong>
        <span className="emblem-name">REDFORGE</span>
      </div>
      <p className="operator-designation">Professional snapshot</p>
      <h2 id="professional-profile-name">{profile.name}</h2>
      <p className="operator-role">{profile.identity}</p>
      <div className="identity-divider" />
      <dl className="operator-profile-details">
        {profile.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
      <p className="operator-statement" aria-label="Engineering statement">
        {profile.statement.map((line) => <span key={line}>{line}</span>)}
      </p>
    </aside>
  );
}
