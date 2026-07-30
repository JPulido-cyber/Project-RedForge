import { BackgroundLayer } from "@/components/layout";
import { WorldMap } from "@/components/world-map";

import { HeroGlow } from "./hero-glow";
import { HeroGrid } from "./hero-grid";
import { HeroOverlay } from "./hero-overlay";
import { HeroTelemetry } from "./hero-telemetry";

export function HeroBackground() {
  return (
    <BackgroundLayer className="hero-background">
      <HeroGrid />
      <HeroGlow />
      <WorldMap />
      <HeroTelemetry />
      <HeroOverlay />
    </BackgroundLayer>
  );
}
