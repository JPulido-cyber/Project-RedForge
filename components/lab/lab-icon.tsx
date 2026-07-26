import type { ReactNode, SVGProps } from "react";

export type LabIconName = "calendar" | "crosshair" | "desktop" | "grid" | "layers" | "network" | "search" | "server" | "shield" | "target" | "terminal";

const paths: Record<LabIconName, ReactNode> = {
  calendar: <><path d="M5 3v3M19 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /><path d="M8 12h2M14 12h2M8 16h2M14 16h2" /></>,
  crosshair: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  desktop: <><rect x="3" y="4" width="18" height="13" rx="1" /><path d="M8 21h8M12 17v4" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
  network: <><rect x="9" y="3" width="6" height="5" /><rect x="3" y="16" width="6" height="5" /><rect x="15" y="16" width="6" height="5" /><path d="M12 8v4M6 16v-4h12v4" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="1" /><rect x="3" y="14" width="18" height="7" rx="1" /><path d="M7 6.5h.01M7 17.5h.01M11 6.5h7M11 17.5h7" /></>,
  shield: <path d="M12 2 20 5v6c0 5.2-3.3 9-8 11-4.7-2-8-5.8-8-11V5l8-3Z" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="m12 12 8-8M16 4h4v4" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
};

export function LabIcon({ name, ...props }: { name: LabIconName } & SVGProps<SVGSVGElement>) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>{paths[name]}</svg>;
}
