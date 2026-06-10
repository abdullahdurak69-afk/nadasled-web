import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Toptan Fiyat Teklifi Alın",
  description:
    "Nadasled iletişim: Ümraniye / İstanbul. Telefon, WhatsApp veya e-posta ile ulaşın, tabela malzemeleri için toptan fiyat teklifi alın. Türkiye geneli kargo.",
  alternates: { canonical: "https://www.nadasled.com.tr/iletisim" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Nadasled",
  description:
    "LED modül, LED şerit, trafo, neon LED ve tabela malzemelerinin toptan tedarikçisi.",
  url: "https://www.nadasled.com.tr",
  telephone: "+905414696966",
  email: "nadasled@gmail.com",
  image: "https://www.nadasled.com.tr/images/og.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çakmak, Yeşilbahar Sokağı No:15/A",
    addressLocality: "Ümraniye",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:30",
    closes: "19:00",
  },
  priceRange: "₺₺",
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
