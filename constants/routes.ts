export type AppRoute = `/${string}`;

export const routes = {
  home: "/",
  projects: "/projects",
  engineeringLog: "/engineering-log",
  documentation: "/documentation",
  operations: "/operations",
  certifications: "/certifications",
  timeline: "/timeline",
  lab: "/lab",
  commandCenter: "/command-center",
  maintenance: "/maintenance",
  comingSoon: "/coming-soon",
} as const satisfies Record<string, AppRoute>;
