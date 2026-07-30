const telemetryPanels = [
  {
    className: "telemetry-panel-global",
    label: "GLOBAL INFRASTRUCTURE",
    detail: "REAL-TIME OVERVIEW",
    visualization: "wave",
  },
  {
    className: "telemetry-panel-intelligence",
    label: "THREAT INTELLIGENCE",
    detail: "SIGNAL ANALYSIS",
    visualization: "bars",
  },
  {
    className: "telemetry-panel-network",
    label: "NETWORK ACTIVITY",
    detail: "PACKET FLOW ACTIVE",
    visualization: "wave",
  },
] as const;

export function HeroTelemetry() {
  return (
    <div className="hero-telemetry" aria-hidden>
      {telemetryPanels.map((panel) => (
        <div
          className={`hero-telemetry-panel ${panel.className}`}
          key={panel.label}
        >
          <strong>{panel.label}</strong>
          <span>{panel.detail}</span>
          {panel.visualization === "bars" ? (
            <div className="telemetry-bars">
              {Array.from({ length: 12 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
          ) : (
            <svg className="telemetry-wave" viewBox="0 0 150 34">
              <path d="M1 23 10 21 17 10 27 26 38 13 48 21 58 8 68 25 79 18 88 22 99 7 109 25 119 12 130 20 139 16 149 23" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
