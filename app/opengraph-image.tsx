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
          backgroundColor: "#FAF3E7",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(109,40,217,0.14), transparent 55%), radial-gradient(circle at 75% 85%, rgba(194,65,12,0.14), transparent 55%)",
          color: "#1C1917",
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
          <span style={{ color: "#6D28D9" }}>One&nbsp;</span>
          <span style={{ color: "#C2410C" }}>Beard.</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#57534E",
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
              "repeating-linear-gradient(-45deg, #E4353F 0 24px, #FFFDF8 24px 48px, #2F6BFF 48px 72px, #FFFDF8 72px 96px)",
          }}
        />
      </div>
    ),
    size,
  );
}
