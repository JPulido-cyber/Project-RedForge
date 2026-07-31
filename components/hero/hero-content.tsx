import { HeroActions } from "./hero-actions";

export function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-eyebrow">ENTERPRISE SECURITY ENGINEERING</p>
      <h1>
        <span>BUILDING &amp; DEFENDING</span>
        <span>AN ENTERPRISE FROM</span>
        <span>THE GROUND UP</span>
      </h1>
      <p className="hero-description">
        <span>
          I build a realistic enterprise environment to understand the
          infrastructure, identity, monitoring, detection, and operational
          workflows that modern offensive security professionals must master.
        </span>
        <span>
          Every implementation is documented, validated, and preserved as
          engineering evidence throughout my progression toward Offensive
          Cybersecurity.
        </span>
      </p>
      <HeroActions />
    </div>
  );
}
