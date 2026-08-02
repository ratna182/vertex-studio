import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: "#3b82f6",
              letterSpacing: "-0.04em",
            }}
          >
            V
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 300,
              color: "#ffb000",
            }}
          >
            /
          </div>
        </div>
      </div>
    ),
    size
  );
}
