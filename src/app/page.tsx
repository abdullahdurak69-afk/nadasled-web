import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ProductGrid from "@/components/ProductGrid";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import faqs from "@/data/faq.json";

export const metadata: Metadata = {
  title: "Nadasled | LED Modül, LED Şerit, Trafo — Tabela Malzemeleri Toptan",
  description: "Tabela yapımı için LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel fiyatlar için hemen arayın.",
  openGraph: {
    title: "Nadasled | Tabela Malzemeleri Toptan Tedarikçisi",
    description: "LED modül, LED şerit, trafo ve kablo toptan tedarikçisi. Tabelacılara özel fiyatlar.",
    url: "https://www.nadasled.com.tr",
    images: [{ url: "https://www.nadasled.com.tr/images/led-modul.jpg", width: 1200, height: 630, alt: "Nadasled Tabela Malzemeleri" }],
  },
  alternates: { canonical: "https://www.nadasled.com.tr" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nadasled",
  url: "https://www.nadasled.com.tr",
  description: "Tabela yapımı için LED modül, şerit, trafo ve kablo toptan tedarikçisi",
  telephone: "+90-541-469-6966",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çakmak, Yeşilbahar Sokağı No:15/A",
    addressLocality: "Ümraniye",
    addressRegion: "İstanbul",
    postalCode: "34774",
    addressCountry: "TR",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Ticker />
      <ProductGrid />
      <WhyUs />
      <CtaBand />
      <Faq />
    </>
  );
}
