import type { Metadata } from "next";
import { HOME_URL } from "@/lib/site-links";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ProductGrid from "@/components/ProductGrid";
import Applications from "@/components/Applications";
import Brands from "@/components/Brands";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import faqs from "@/data/faq.json";
import { orgRef } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nadasled | LED Modül, LED Şerit ve Tabela Malzemeleri Toptan",
  description: "Tabela yapımı için LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel fiyatlar için hemen arayın.",
  openGraph: {
    title: "Nadasled | Tabela Malzemeleri Toptan Tedarikçisi",
    description: "LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Tabelacılara özel fiyatlar.",
    url: HOME_URL,
    images: [{ url: "https://www.nadasled.com.tr/images/led-modul.webp", width: 800, height: 600, alt: "Nadasled Tabela Malzemeleri" }],
  },
  alternates: { canonical: HOME_URL },
};

// İşletme düğümü artık root layout'ta, tek kanonik tanım olarak duruyor
// (bkz. lib/schema.ts); burada yalnızca ona referans veriliyor.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  about: orgRef,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Ticker />
      <ProductGrid />
      <Applications />
      <Brands />
      <WhyUs />
      <CtaBand />
      <Faq />
    </>
  );
}
