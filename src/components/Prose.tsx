// Blok listelerini (paragraf / başlık / madde / tablo) sayfaya basar.
//
// Blog yazıları ve araç sayfaları aynı metin biçimini paylaşır; ikisi de
// buradan geçer. Paragraf ve madde metinlerinde "[metin](/yol)" biçimindeki
// iç linkler gerçek <Link>'e çevrilir.

import Link from "next/link";
import type { Block, FaqItem } from "@/data/content";

export function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return (
        <Link
          key={i}
          href={m[2]}
          style={{ color: "var(--nadas-orange)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          {m[1]}
        </Link>
      );
    }
    return part;
  });
}

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.1, letterSpacing: "0.01em", marginTop: "40px", marginBottom: "16px" }}
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p style={{ fontSize: "16px", color: "var(--nadas-ink2)", lineHeight: 1.8, marginBottom: "18px" }}>
          {renderInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="flex flex-col gap-3" style={{ marginBottom: "18px" }}>
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span style={{ color: "var(--nadas-orange)", flexShrink: 0, marginTop: "5px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.7 }}>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto" style={{ marginBottom: "24px", border: "1px solid var(--nadas-line2)", borderRadius: "2px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "var(--nadas-bg3)" }}>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    style={{ textAlign: "left", padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--nadas-orange)", borderBottom: "1px solid var(--nadas-line2)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{ padding: "12px 16px", color: j === 0 ? "var(--nadas-ink)" : "var(--nadas-ink2)", fontWeight: j === 0 ? 600 : 400, borderBottom: i < block.rows.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  );
}

/** Yazı/araç sonundaki SSS bloğu — FAQPage schema'sının görünen karşılığı. */
export function FaqList({ items, heading = "Sık sorulan sorular" }: { items: FaqItem[]; heading?: string }) {
  if (items.length === 0) return null;
  return (
    <section style={{ marginTop: "48px" }}>
      <h2
        style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.1, letterSpacing: "0.01em", marginBottom: "20px" }}
      >
        {heading}
      </h2>
      <div className="flex flex-col gap-0">
        {items.map((f, i) => (
          <div
            key={i}
            style={{ padding: "20px 0", borderTop: "1px solid var(--nadas-line2)", borderBottom: i === items.length - 1 ? "1px solid var(--nadas-line2)" : "none" }}
          >
            <h3 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "8px" }}>{f.q}</h3>
            <p style={{ fontSize: "15px", color: "var(--nadas-ink2)", lineHeight: 1.75 }}>{renderInline(f.a)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
