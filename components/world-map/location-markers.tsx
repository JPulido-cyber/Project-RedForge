const nodes = [
  { x: 236, y: 328, tier: "edge" }, { x: 294, y: 276, tier: "edge" },
  { x: 342, y: 286, tier: "primary" }, { x: 368, y: 338, tier: "secondary" },
  { x: 401, y: 242, tier: "secondary" }, { x: 438, y: 318, tier: "edge" },
  { x: 472, y: 272, tier: "edge" }, { x: 494, y: 342, tier: "secondary" },
  { x: 520, y: 300, tier: "primary" }, { x: 566, y: 526, tier: "edge" },
  { x: 670, y: 514, tier: "edge" }, { x: 716, y: 294, tier: "edge" },
  { x: 742, y: 354, tier: "secondary" }, { x: 758, y: 248, tier: "primary" },
  { x: 780, y: 316, tier: "primary" }, { x: 804, y: 286, tier: "primary" },
  { x: 828, y: 338, tier: "secondary" }, { x: 842, y: 270, tier: "primary" },
  { x: 864, y: 298, tier: "secondary" }, { x: 884, y: 370, tier: "edge" },
  { x: 900, y: 314, tier: "secondary" }, { x: 958, y: 282, tier: "edge" },
  { x: 1030, y: 330, tier: "edge" }, { x: 1092, y: 372, tier: "edge" },
  { x: 1138, y: 320, tier: "primary" }, { x: 1168, y: 396, tier: "secondary" },
  { x: 1216, y: 352, tier: "primary" }, { x: 1254, y: 492, tier: "secondary" },
] as const;

export function LocationMarkers() {
  return (
    <g className="enterprise-nodes">
      {nodes.map((node) => (
        <g
          className={`enterprise-node enterprise-node-${node.tier}`}
          key={`${node.x}-${node.y}`}
          transform={`translate(${node.x} ${node.y})`}
        >
          <circle className="enterprise-node-ring" r="8" />
          <circle className="enterprise-node-core" r={node.tier === "primary" ? 3.6 : 2.4} />
        </g>
      ))}
    </g>
  );
}
