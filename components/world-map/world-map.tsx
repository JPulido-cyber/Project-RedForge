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
        sizes="(max-width: 1120px) 96vw, (min-width: 1800px) 1320px, 82vw"
      />
      <MapOverlay />
      <LocationMarkers />
      <ConnectionLines />
      <StatusIndicators />
    </div>
  );
}
