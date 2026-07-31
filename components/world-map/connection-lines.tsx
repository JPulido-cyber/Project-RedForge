const routes = [
  { d: "M342 286 Q438 212 520 300", tier: "core" },
  { d: "M368 338 Q438 282 520 300", tier: "local" },
  { d: "M401 242 Q454 248 494 342", tier: "local" },
  { d: "M342 286 Q546 92 758 248", tier: "core" },
  { d: "M520 300 Q642 164 804 286", tier: "core" },
  { d: "M758 248 Q804 214 842 270", tier: "local" },
  { d: "M780 316 Q830 250 900 314", tier: "local" },
  { d: "M742 354 Q816 310 884 370", tier: "local" },
  { d: "M804 286 Q984 168 1138 320", tier: "core" },
  { d: "M842 270 Q1044 226 1216 352", tier: "core" },
  { d: "M900 314 Q1040 300 1168 396", tier: "secondary" },
  { d: "M1138 320 Q1182 292 1216 352", tier: "local" },
  { d: "M1138 320 Q1194 360 1168 396", tier: "local" },
  { d: "M1168 396 Q1214 430 1254 492", tier: "secondary" },
  { d: "M780 316 Q712 434 670 514", tier: "secondary" },
  { d: "M520 300 Q520 436 566 526", tier: "secondary" },
  { d: "M401 242 Q278 230 236 328", tier: "secondary" },
  { d: "M494 342 Q324 410 236 328", tier: "secondary" },
] as const;

const activeRoutes = new Set([0, 3, 4, 8, 9, 12]);

export function ConnectionLines() {
  return (
    <g className="enterprise-routes">
      {routes.map((route, index) => (
        <path
          className={`enterprise-route enterprise-route-${route.tier}`}
          id={`enterprise-route-${index + 1}`}
          d={route.d}
          key={route.d}
        />
      ))}
      {routes.map((route, index) =>
        activeRoutes.has(index) ? (
          <circle className="enterprise-route-signal" r="2.2" key={`signal-${route.d}`}>
            <animateMotion
              dur={`${13 + index * 0.55}s`}
              begin={`${-3 - index * 1.1}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#enterprise-route-${index + 1}`} />
            </animateMotion>
          </circle>
        ) : null,
      )}
    </g>
  );
}
