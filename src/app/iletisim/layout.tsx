import type { Metadata } from "next";
import { orgRef } from "@/lib/schema";

export const metadata: Metadata = {
  title: "İletişim — Toptan Fiyat Teklifi Alın",
  description:
    "Nadasled iletişim: Ümraniye / İstanbul. Telefon, WhatsApp veya e-posta ile ulaşın, tabela malzemeleri için toptan fiyat teklifi alın. Türkiye geneli kargo.",
  alternates: { canonical: "https://www.nadasled.com.tr/iletisim/" },
};

// Adres, telefon ve çalışma saatleri artık root layout'taki tek işletme
// düğümünde (bkz. lib/schema.ts). Burada sayfa yalnızca "bu, o işletmenin
// iletişim sayfası" diyor; bilgiyi ikinci kez tekrarlamıyor.
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://www.nadasled.com.tr/iletisim/",
  name: "İletişim — Nadasled",
  inLanguage: "tr-TR",
  mainEntity: orgRef,
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
