import type { MetricItem } from "@/content/types";

const paths: Record<MetricItem["icon"], React.ReactNode> = {
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="1.5" />
      <rect x="3" y="14" width="18" height="7" rx="1.5" />
      <path d="M7 6.5h.01M7 17.5h.01M11 6.5h7M11 17.5h7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 20 6v5.2c0 5-3.1 8.2-8 10.3-4.9-2.1-8-5.3-8-10.3V6l8-3.5Z" />
      <circle cx="12" cy="9" r="2" />
      <path d="M8.5 15c.6-1.7 1.8-2.6 3.5-2.6s2.9.9 3.5 2.6" />
    </>
  ),
  forest: (
    <>
      <rect x="9" y="2.5" width="6" height="5" rx="1" />
      <rect x="2.5" y="16.5" width="6" height="5" rx="1" />
      <rect x="9" y="16.5" width="6" height="5" rx="1" />
      <rect x="15.5" y="16.5" width="6" height="5" rx="1" />
      <path d="M12 7.5v4.5M5.5 16.5V12h13v4.5M12 12v4.5" />
    </>
  ),
  document: (
    <>
      <path d="M5 2.5h9l5 5V21.5H5v-19Z" />
      <path d="M14 2.5v5h5M8 12h8M8 16h8" />
    </>
  ),
  directory: (
    <>
      <rect x="7" y="2.5" width="10" height="15" rx="1.5" />
      <path d="M10 6h4M10 10h4M12 17.5v3M5 20.5h14" />
      <circle cx="10" cy="14" r=".65" />
      <circle cx="14" cy="14" r=".65" />
    </>
  ),
};

export function MetricIcon({ icon }: Pick<MetricItem, "icon">) {
  return (
    <span className="metric-icon" aria-hidden>
      <svg viewBox="0 0 24 24">{paths[icon]}</svg>
    </span>
  );
}
