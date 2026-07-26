import { HeroActions } from "./hero-actions";

export function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-eyebrow">CYBERSECURITY ENGINEER</p>
      <h1>
        BUILDING &amp; DEFENDING
        <span>AN ENTERPRISE FROM</span>
        <span>THE GROUND UP</span>
      </h1>
      <p className="hero-description">
        Project RedForge is a living cybersecurity engineering platform
        documenting the design, implementation, validation, and evolution of an
        enterprise lab. Every system, decision, and result is grounded in
        reviewed engineering evidence.
      </p>
      <HeroActions />
      <a className="scroll-indicator" href="#engineering-activity">
        <span className="mouse-icon" aria-hidden>
          <span />
        </span>
        SCROLL TO EXPLORE
      </a>
    </div>
  );
}
