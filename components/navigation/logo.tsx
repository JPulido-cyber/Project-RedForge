import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Project RedForge home">
      <span className="brand-mark" aria-hidden>
        <svg viewBox="0 0 48 56">
          <path className="brand-shield" d="M24 2 43 12v19c0 11-7.5 18-19 23C12.5 49 5 42 5 31V12L24 2Z" />
          <path className="brand-forge" d="M15 17h9l-4 6 4 4-5 12m14-22h-8l4 6-4 4 5 12" />
          <path className="brand-spark" d="M24 11v7M20.5 14.5h7" />
        </svg>
      </span>
      <span className="brand-copy">
        <small>PROJECT</small>
        <strong>REDFORGE</strong>
        <em>DISCIPLINE. PRECISION. PROGRESS.</em>
      </span>
    </Link>
  );
}
