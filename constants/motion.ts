export const animationDurations = {
  instant: 0,
  fast: 150,
  standard: 250,
  deliberate: 400,
  enter: 600,
} as const;

export const animationEasings = {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  enter: "cubic-bezier(0.16, 1, 0.3, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
} as const;
