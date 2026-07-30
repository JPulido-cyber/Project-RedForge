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
        I am building a realistic enterprise environment to understand the
        infrastructure, identity, monitoring, detection, and operational
        workflows that modern offensive security professionals must understand.
        Every implementation is documented, validated, and preserved as
        engineering evidence throughout my progression toward Offensive
        Cybersecurity.
      </p>
      <HeroActions />
    </div>
  );
}
