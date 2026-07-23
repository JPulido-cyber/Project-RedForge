import Link from "next/link";

export function HeroActions() {
  return (
    <div className="hero-actions">
      <Link className="primary-button" href="/coming-soon">
        <span aria-hidden>⌁</span>
        EXPLORE THE LAB
      </Link>
      <a className="secondary-button" href="#projects">
        VIEW PROJECTS <span aria-hidden>→</span>
      </a>
    </div>
  );
}
