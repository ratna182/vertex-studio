import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} - Studio desain grafis, 3D render, dan website custom Indonesia`;

async function loadFont(
  packageName: string,
  fileName: string
): Promise<ArrayBuffer | undefined> {
  try {
    const buffer = await readFile(
      join(
        process.cwd(),
        "node_modules",
        "@fontsource",
        packageName,
        "files",
        fileName
      )
    );
    return buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    ) as ArrayBuffer;
  } catch {
    return undefined;
  }
}

export default async function OpengraphImage() {
  const [sora700, sora400, mono500] = await Promise.all([
    loadFont("sora", "sora-latin-700-normal.woff"),
    loadFont("sora", "sora-latin-400-normal.woff"),
    loadFont(
      "jetbrains-mono",
      "jetbrains-mono-latin-500-normal.woff"
    ),
  ]);

  const fonts = [];
  if (sora700) fonts.push({ name: "Sora", data: sora700, weight: 700 as const });
  if (sora400) fonts.push({ name: "Sora", data: sora400, weight: 400 as const });
  if (mono500)
    fonts.push({
      name: "JetBrains Mono",
      data: mono500,
      weight: 500 as const,
    });

  const sora = `'Sora', sans-serif`;
  const mono = `'JetBrains Mono', monospace`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #0a0a0a 0%, #101013 55%, #141418 100%)",
          color: "#f5f5f0",
          fontFamily: sora,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "46%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 90,
              top: 110,
              width: 170,
              height: 170,
              background: "#3b82f6",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 205,
              top: 320,
              width: 170,
              height: 170,
              background: "#ffb000",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 55,
              top: 400,
              width: 170,
              height: 170,
              border: "3px solid rgba(245,245,240,0.28)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "62%",
            padding: "72px 0 56px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: mono,
              fontSize: 22,
              letterSpacing: "0.24em",
              color: "#a1a1a1",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 36, height: 8, background: "#3b82f6" }} />
            Studio Desain &amp; Digital
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 128,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#f5f5f0" }}>VERTEX</span>
              <span style={{ color: "#3b82f6" }}>/</span>
              <span style={{ color: "#f5f5f0" }}>STUDIO</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 30,
                fontWeight: 400,
                color: "#a1a1a1",
                maxWidth: 620,
              }}
            >
              Website, identitas visual &amp; 3D render yang membuat bisnis Anda
              ditemukan, dipercaya, dan dipilih.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              fontFamily: mono,
              fontSize: 24,
              letterSpacing: "0.12em",
              color: "#6b6b6b",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#ffb000" }}>{SITE.city}</span>
            <span style={{ fontSize: 18 }}>//</span>
            <span>Indonesia</span>
            <span style={{ fontSize: 18 }}>//</span>
            <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
