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
        Project RedForge is a hands-on cybersecurity lab and portfolio that
        simulates a real-world enterprise environment. I engineer the
        infrastructure, secure it, monitor it, and continuously evolve it.
      </p>
      <HeroActions />
      <a className="scroll-indicator" href="#operations">
        <span className="mouse-icon" aria-hidden>
          <span />
        </span>
        SCROLL TO EXPLORE
      </a>
    </div>
  );
}
