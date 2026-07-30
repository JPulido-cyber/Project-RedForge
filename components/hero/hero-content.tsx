import { HeroActions } from "./hero-actions";

export function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-eyebrow">ENTERPRISE SECURITY ENGINEERING</p>
      <h1>
        BUILDING &amp; DEFENDING
        <span>AN ENTERPRISE FROM</span>
        <span>THE GROUND UP</span>
      </h1>
      <p className="hero-description">
        I am engineering a documented enterprise environment to understand how
        infrastructure, identity, and telemetry behave under real operational
        constraints. Project RedForge turns that work into reviewed evidence as
        I build the systems knowledge required for a long-term specialization in
        Offensive Security.
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
