import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import FloatWhatsapp from "@/components/FloatWhatsapp";
import ClickTracker from "@/components/ClickTracker";
import LlmSourceTag from "@/components/LlmSourceTag";

// Display: Clash Display (Fontshare) — self-hosted for a distinctive, premium feel.
const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

// Body: Satoshi (Fontshare) — clean, neutral, premium.
const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nadasled.com.tr"),
  title: {
    default: "Nadasled | Tabela Malzemeleri Toptan Tedarikçisi",
    template: "%s | Nadasled",
  },
  description: "LED modül, LED şerit, trafo, kablo ve tabela malzemelerinin toptan tedarikçisi. Türkiye geneli hızlı kargo. Tabelacılara özel toptan fiyatlar.",
  keywords: ["led modül", "led şerit", "tabela malzemeleri", "led trafo", "kablo toptan", "tabelacı malzemesi"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Nadasled",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Nadasled — Tabela Malzemeleri Toptan Tedarikçisi" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og.jpg"] },
  robots: { index: true, follow: true },
};

const GA_ID = "G-4VYW0MWY61";
const CLARITY_ID = "xzmxjjfaji";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${clashDisplay.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");` }} />
      </head>
      <body className="nadas-body-bg nadas-grid-texture min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
        <Nav />
        <main className="flex-1 relative z-[2]">{children}</main>
        <SiteFooter />
        <FloatWhatsapp />
        <ClickTracker />
        <LlmSourceTag />
      </body>
    </html>
  );
}
