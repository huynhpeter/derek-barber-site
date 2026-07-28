import { ImageResponse } from "next/og";
import { seo } from "@/lib/site";

// Pre-render at build time — no runtime satori in the Cloudflare worker.
export const dynamic = "force-static";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#0E0B16",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.35), transparent 55%), radial-gradient(circle at 75% 85%, rgba(249,115,22,0.25), transparent 55%)",
          color: "#FAF5EF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          <span>Two Wheels.&nbsp;</span>
          <span style={{ color: "#8B5CF6" }}>One&nbsp;</span>
          <span style={{ color: "#F97316" }}>Beard.</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#9CA3AF",
            display: "flex",
          }}
        >
          Derek Beatty · Barber · Arizona
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 14,
            display: "flex",
            background:
              "repeating-linear-gradient(-45deg, #E4353F 0 24px, #FAF5EF 24px 48px, #2F6BFF 48px 72px, #FAF5EF 72px 96px)",
          }}
        />
      </div>
    ),
    size,
  );
}
