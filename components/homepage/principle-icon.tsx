const iconPaths = {
  "Discipline.": (
    <>
      <path d="M12 2.5 20 6v5.2c0 5-3.1 8.2-8 10.3-4.9-2.1-8-5.3-8-10.3V6l8-3.5Z" />
      <path d="m13.5 6-4 6h3l-2 6 5-7h-3l1-5Z" />
    </>
  ),
  "Precision.": (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v5M12 18v5M1 12h5M18 12h5" />
    </>
  ),
  "Progress.": (
    <>
      <path d="M3 20h18M5 17l5-5 3 3 7-9" />
      <path d="M15 6h5v5" />
    </>
  ),
} as const;

interface PrincipleIconProps {
  name: string;
}

export function PrincipleIcon({ name }: PrincipleIconProps) {
  const path =
    iconPaths[name as keyof typeof iconPaths] ?? iconPaths["Discipline."];

  return (
    <span className="engineering-principle-icon" aria-hidden>
      <svg viewBox="0 0 24 24">{path}</svg>
    </span>
  );
}
