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
        I am a cybersecurity engineer building an enterprise environment to
        master the systems, detection, and security foundations behind Offensive
        Security. Every implementation is documented, validated, and supported
        by reviewed engineering evidence.
      </p>
      <HeroActions />
      <a className="scroll-indicator" href="#engineering-activity">
        <span className="mouse-icon" aria-hidden>
          <span />
        </span>
        EVERY SYSTEM. EVERY DECISION. EVERY MILESTONE. BACKED BY EVIDENCE.
      </a>
    </div>
  );
}
