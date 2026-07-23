import { ImageResponse } from "next/og";

import { applicationMetadata } from "@/constants";

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0a0a0a",
          color: "#ededed",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "96px",
          width: "100%",
        }}
      >
        <div
          style={{
            borderLeft: "12px solid #ef4444",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "48px",
          }}
        >
          <span style={{ color: "#ef4444", fontSize: 28, letterSpacing: "0.2em" }}>
            ENGINEERING PLATFORM
          </span>
          <span style={{ fontSize: 88, fontWeight: 700, marginTop: 20 }}>
            {applicationMetadata.name}
          </span>
          <span style={{ color: "#a1a1aa", fontSize: 32, marginTop: 20 }}>
            Systems. Infrastructure. Operations.
          </span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
