import Link from "next/link";

export function HeroActions() {
  return (
    <div className="hero-actions">
      <Link className="primary-button" href={{ pathname: "/lab" }}>
        <span aria-hidden>↗</span>
        EXPLORE THE LAB
      </Link>
      <Link className="secondary-button" href={{ pathname: "/projects" }}>
        VIEW PROJECTS <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
