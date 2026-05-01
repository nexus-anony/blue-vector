import { ImageResponse } from "next/og";

export const alt = "BLUE VECTOR — Defence & Security Consulting";
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
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a1f3d 0%, #13356b 60%, #1c4788 100%)",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: "56px",
              height: "1px",
              background: "rgba(255,255,255,0.4)",
            }}
          />
          Enabling a society that co-creates peace
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "120px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            BLUE VECTOR
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.1,
            }}
          >
            Vectoring the Future of Defense
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            fontWeight: 500,
          }}
        >
          <span>Defence · Security · Strategy</span>
          <span>blue-vector.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
