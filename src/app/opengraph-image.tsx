import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Siddhartha Kumar — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0c18 0%, #13102a 50%, #0a0c18 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          <span style={{ color: "#a1a1aa", fontSize: "14px", letterSpacing: "0.15em" }}>
            AVAILABLE FOR FREELANCE
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Siddhartha Kumar
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            background: "linear-gradient(90deg, #a78bfa, #67e8f9, #e879f9)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "32px",
          }}
        >
          Full Stack Developer
        </div>

        {/* Company */}
        <div style={{ fontSize: "20px", color: "#71717a", marginBottom: "40px" }}>
          Jamtech Technologies Pvt. Ltd · Lucknow, India
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Next.js", "WordPress", "Laravel", "Node.js", "React", "SEO"].map((t) => (
            <div
              key={t}
              style={{
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: "999px",
                padding: "8px 20px",
                color: "#c4b5fd",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "#52525b",
          }}
        >
          siddharthakumar.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
