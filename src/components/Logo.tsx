type LogoProps = {
  /** Base font size in px for the wordmark. */
  size?: number;
  /** Show the pulsing "live" dot after the wordmark. */
  dot?: boolean;
};

/**
 * Crisp, vector wordmark — replaces the low-res logo.png that looked cramped
 * in the nav and broke (silhouette) when inverted in the footer.
 * "NADAS" wordmark + "LED" chip + optional pulse dot, all theme-aware.
 */
export default function Logo({ size = 24, dot = true }: LogoProps) {
  return (
    <span
      className="inline-flex items-center"
      style={{ fontFamily: "var(--font-display)", lineHeight: 1, letterSpacing: "0.04em" }}
      aria-label="Nadasled"
    >
      {/* Monogram tile echoing the brand mark */}
      <span
        className="inline-flex items-center justify-center flex-shrink-0"
        style={{
          width: size * 1.18,
          height: size * 1.18,
          marginRight: size * 0.34,
          borderRadius: size * 0.24,
          background: "linear-gradient(135deg, var(--nadas-orange2), var(--nadas-orange))",
          color: "var(--nadas-orange-ink)",
          fontSize: size * 0.92,
          boxShadow: "0 0 18px rgba(255, 107, 26, 0.45)",
        }}
      >
        N
      </span>
      <span style={{ fontSize: size, color: "var(--nadas-ink)" }}>NADAS</span>
      <span style={{ fontSize: size, color: "var(--nadas-orange)", marginLeft: size * 0.1 }}>LED</span>
      {dot && (
        <span
          className="rounded-full nadas-pulse-dot flex-shrink-0"
          style={{
            width: size * 0.26,
            height: size * 0.26,
            marginLeft: size * 0.36,
            marginBottom: size * 0.5,
            background: "var(--nadas-orange)",
            boxShadow: "0 0 14px var(--nadas-orange)",
          }}
        />
      )}
    </span>
  );
}
