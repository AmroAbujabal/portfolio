import { ImageResponse } from "next/og";
import { hero } from "@/data/content";

export const alt = "Amr Abujabal — CS Student & Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: "-2px" }}>
          {hero.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "#52525b",
          }}
        >
          Computer Science · Cloud &amp; Backend · Computer Vision
        </div>
      </div>
    ),
    size
  );
}
