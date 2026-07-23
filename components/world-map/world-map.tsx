import Image from "next/image";

import { ConnectionLines } from "./connection-lines";
import { LocationMarkers } from "./location-markers";
import { MapOverlay } from "./map-overlay";
import { StatusIndicators } from "./status-indicators";

export function WorldMap() {
  return (
    <div className="world-map" aria-hidden>
      <Image
        className="world-map-image"
        src="/redforge-world-map-v2.png"
        alt=""
        fill
        priority
        sizes="(max-width: 760px) 132vw, 62vw"
      />
      <MapOverlay />
      <LocationMarkers />
      <ConnectionLines />
      <StatusIndicators />
    </div>
  );
}
