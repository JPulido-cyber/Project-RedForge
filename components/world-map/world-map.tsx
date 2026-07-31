import { ConnectionLines } from "./connection-lines";
import { LocationMarkers } from "./location-markers";

export function WorldMap() {
  return (
    <div className="world-map" aria-hidden>
      <svg
        className="enterprise-network-canvas"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="network-land-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1b2022" stopOpacity="0.56" />
            <stop offset="1" stopColor="#090c0d" stopOpacity="0.18" />
          </linearGradient>
          <pattern id="network-grid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="currentColor" strokeOpacity="0.13" strokeWidth="0.6" />
          </pattern>
        </defs>

        <rect className="enterprise-network-grid" width="1440" height="720" fill="url(#network-grid)" />
        <g className="enterprise-land-framework">
          <path d="M152 208C206 152 286 128 360 147L433 182 501 176 548 216 512 258 468 267 438 318 374 334 329 380 271 361 246 312 193 291Z" />
          <path d="M448 374L508 391 535 450 568 489 548 570 506 620 480 557 448 505 431 436Z" />
          <path d="M691 217L731 181 775 187 799 211 841 189 904 202 938 238 922 268 872 278 850 318 792 332 754 306 708 302 678 265Z" />
          <path d="M899 225L970 178 1064 169 1150 194 1238 220 1315 269 1288 318 1222 326 1192 367 1131 350 1089 314 1024 307 978 280 925 277Z" />
          <path d="M1165 433L1218 409 1287 432 1310 479 1282 522 1218 531 1174 500Z" />
        </g>
        <g className="enterprise-contours">
          <ellipse cx="430" cy="300" rx="230" ry="150" />
          <ellipse cx="810" cy="286" rx="190" ry="128" />
          <ellipse cx="1155" cy="352" rx="206" ry="160" />
        </g>
        <ConnectionLines />
        <LocationMarkers />
      </svg>
    </div>
  );
}
