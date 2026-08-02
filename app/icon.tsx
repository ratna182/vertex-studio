import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
              fontSize: 300,
              fontWeight: 800,
              color: "#3b82f6",
              letterSpacing: "-0.04em",
            }}
          >
            V
          </div>
          <div
            style={{
              fontSize: 300,
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
