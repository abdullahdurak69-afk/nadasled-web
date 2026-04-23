"use client";

const items = ["LED Modül", "LED Şerit", "Neon LED", "Trafo & Sürücü", "Power LED", "Pergole LED", "Kablo", "Point LED", "Light Box LED", "Aksesuar"];

export default function Ticker() {
  return (
    <div
      className="relative z-[2] overflow-hidden"
      style={{
        background: "var(--nadas-orange)",
        color: "var(--nadas-orange-ink)",
        padding: "22px 0",
        transform: "rotate(-1deg)",
        margin: "0 -4vw",
        boxShadow: "0 0 60px rgba(255, 107, 26, 0.25)",
        borderTop: "1px solid rgba(0,0,0,0.15)",
        borderBottom: "1px solid rgba(0,0,0,0.15)",
      }}
    >
      <div className="flex gap-12 whitespace-nowrap w-max nadas-ticker-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12"
            style={{ fontFamily: "var(--font-display)", fontSize: "32px", letterSpacing: "0.04em" }}
          >
            {item}
            <span style={{ opacity: 0.6, fontSize: "18px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
