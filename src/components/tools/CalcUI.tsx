"use client";

/**
 * Hesaplama araçlarının ortak arayüz parçaları.
 *
 * Dört araç da aynı kutu, aynı alan ve aynı sonuç paneli biçimini kullanıyor;
 * stiller sitenin geri kalanıyla aynı token'lardan (--nadas-*) besleniyor.
 */

import type { ReactNode } from "react";
import { useId } from "react";

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  background: "var(--nadas-bg)",
  border: "1px solid var(--nadas-line2)",
  borderRadius: "2px",
  padding: "12px 14px",
  fontSize: "15px",
  color: "var(--nadas-ink)",
  fontFamily: "var(--font-mono)",
  outline: "none",
};

export function Panel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "var(--nadas-bg2)",
        border: "1px solid var(--nadas-line2)",
        borderRadius: "2px",
        padding: "clamp(20px, 4vw, 32px)",
      }}
    >
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--nadas-orange)",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: "16px",
      }}
    >
      {children}
    </div>
  );
}

export function Grid({ children, cols = 2 }: { children: ReactNode; cols?: 1 | 2 }) {
  return (
    <div className={cols === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 gap-4"}>{children}</div>
  );
}

function Label({ htmlFor, children }: { htmlFor?: string; children: ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "block",
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--nadas-ink)",
        marginBottom: "7px",
      }}
    >
      {children}
    </label>
  );
}

function Hint({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontSize: "12px", color: "var(--nadas-ink3)", marginTop: "6px", lineHeight: 1.5 }}>{children}</p>
  );
}

export function NumberField({
  label,
  value,
  onChange,
  suffix,
  placeholder,
  hint,
  min = 0,
  step = "any",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  placeholder?: string;
  hint?: ReactNode;
  min?: number;
  step?: string;
}) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...INPUT_STYLE, paddingRight: suffix ? "56px" : undefined }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--nadas-orange)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--nadas-line2)")}
        />
        {suffix && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ fontSize: "12px", color: "var(--nadas-ink3)", fontFamily: "var(--font-mono)" }}
          >
            {suffix}
          </span>
        )}
      </div>
      {hint && <Hint>{hint}</Hint>}
    </div>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  hint?: ReactNode;
}) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...INPUT_STYLE, appearance: "none", cursor: "pointer" }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {hint && <Hint>{hint}</Hint>}
    </div>
  );
}

export function Segmented({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  hint?: ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.value)}
              style={{
                flex: "1 1 auto",
                minWidth: "88px",
                padding: "11px 14px",
                borderRadius: "2px",
                fontSize: "14px",
                fontWeight: active ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.15s",
                background: active ? "var(--nadas-orange)" : "var(--nadas-bg)",
                color: active ? "var(--nadas-orange-ink)" : "var(--nadas-ink2)",
                border: `1px solid ${active ? "var(--nadas-orange)" : "var(--nadas-line2)"}`,
              }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {hint && <Hint>{hint}</Hint>}
    </div>
  );
}

export function Results({ children }: { children: ReactNode }) {
  return (
    <div
      aria-live="polite"
      className="grid grid-cols-2 lg:grid-cols-4 gap-px"
      style={{
        marginTop: "28px",
        background: "var(--nadas-line2)",
        border: "1px solid var(--nadas-line2)",
        borderRadius: "2px",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export function Result({
  label,
  value,
  unit,
  accent = false,
}: {
  label: string;
  value: string;
  unit?: string;
  accent?: boolean;
}) {
  return (
    <div style={{ background: accent ? "rgba(242, 96, 15, 0.06)" : "var(--nadas-bg2)", padding: "18px 16px" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: accent ? "var(--nadas-orange)" : "var(--nadas-ink3)",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(22px, 3vw, 30px)",
          lineHeight: 1,
          color: accent ? "var(--nadas-orange)" : "var(--nadas-ink)",
        }}
      >
        {value}
        {unit && (
          <span style={{ fontSize: "14px", fontWeight: 500, marginLeft: "4px", color: "var(--nadas-ink2)" }}>
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

/** Hesabın nasıl çıktığını satır satır gösterir — sayıya güven bunun üstüne kurulu. */
export function Steps({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ol
      className="flex flex-col gap-1.5"
      style={{
        marginTop: "20px",
        padding: "16px 18px",
        background: "var(--nadas-bg3)",
        borderRadius: "2px",
        listStyle: "none",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--nadas-ink2)",
        lineHeight: 1.6,
      }}
    >
      {items.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  );
}

export function Note({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warn" }) {
  const warn = tone === "warn";
  return (
    <div
      className="flex items-start gap-3"
      style={{
        marginTop: "16px",
        padding: "14px 16px",
        borderRadius: "2px",
        background: warn ? "rgba(242, 96, 15, 0.07)" : "var(--nadas-bg3)",
        border: `1px solid ${warn ? "var(--nadas-line)" : "var(--nadas-line2)"}`,
      }}
    >
      <span style={{ color: warn ? "var(--nadas-orange)" : "var(--nadas-ink3)", flexShrink: 0, marginTop: "2px" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="13" />
          <line x1="12" y1="16.5" x2="12" y2="16.5" />
        </svg>
      </span>
      <p style={{ fontSize: "13.5px", color: "var(--nadas-ink2)", lineHeight: 1.65 }}>{children}</p>
    </div>
  );
}

/**
 * Hesap sonucunu WhatsApp'a taşıyan buton.
 *
 * Araçların dönüşüme bağlandığı yer burası: kullanıcı sayıyı bulduğu anda
 * elinde hazır bir ihtiyaç listesi oluyor. Tıklama sayımı ClickTracker
 * tarafından data-track üzerinden yapılır, ayrıca gtag çağrılmaz.
 */
export function WhatsappResult({ message, disabled }: { message: string; disabled?: boolean }) {
  const href = `https://wa.me/905414696966?text=${encodeURIComponent(message)}`;
  if (disabled) {
    return (
      <span
        className="inline-flex items-center gap-2 font-semibold"
        style={{
          marginTop: "20px",
          background: "var(--nadas-bg3)",
          color: "var(--nadas-ink3)",
          padding: "14px 22px",
          borderRadius: "2px",
          fontSize: "14px",
          cursor: "not-allowed",
        }}
      >
        Sonucu WhatsApp&apos;tan gönder
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track="arac_sonuc"
      className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-px"
      style={{
        marginTop: "20px",
        background: "#1FAD56",
        color: "white",
        padding: "14px 22px",
        borderRadius: "2px",
        fontSize: "14px",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Sonucu WhatsApp&apos;tan gönder
    </a>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        marginTop: "28px",
        padding: "28px 20px",
        border: "1px dashed var(--nadas-line2)",
        borderRadius: "2px",
        textAlign: "center",
        fontSize: "14px",
        color: "var(--nadas-ink3)",
      }}
    >
      {children}
    </div>
  );
}
