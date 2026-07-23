const routes = [
  "M307 192 Q358 155 410 205",
  "M410 205 Q505 105 598 164",
  "M598 164 Q614 150 631 181",
  "M410 205 Q420 315 451 386",
  "M451 386 Q555 440 652 392",
  "M598 164 Q685 128 773 235",
  "M652 392 Q700 280 773 235",
  "M773 235 Q808 220 841 289",
  "M841 289 Q878 205 920 194",
  "M841 289 Q905 310 938 389",
] as const;

export function ConnectionLines() {
  return (
    <svg
      className="network-routes"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id="signal-glow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {routes.map((path, index) => (
        <path id={`route-${index + 1}`} d={path} key={path} />
      ))}
      {routes.map((path, index) => (
        <circle
          className="route-signal"
          r={index % 3 === 0 ? "3.2" : "2.8"}
          filter="url(#signal-glow)"
          key={`signal-${path}`}
        >
          <animateMotion
            dur={`${8.5 + index * 0.37}s`}
            begin={`${-2.1 - index * 0.7}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#route-${index + 1}`} />
          </animateMotion>
        </circle>
      ))}
    </svg>
  );
}
