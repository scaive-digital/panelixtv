import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "İstanbul TV Ekran Tamiri ve Panel Değişimi | Panelix 2026",
  description: "Türkiye ve İstanbul genelinde garantili TV panel değişimi, orijinal yedek parça, kırık ekran tamiri. Hızlı teslimat ve ikame TV hizmetiyle tanışın.",
  keywords: ["tv tamiri istanbul", "tv panel değişimi", "kırık tv ekran tamiri", "orijinal yedek parça", "televizyon tamircisi", "garantili tv servisi", "ikame tv hizmeti"],
  openGraph: {
    title: "İstanbul TV Ekran Tamiri ve Panel Değişimi | Panelix 2026",
    description: "Türkiye ve İstanbul genelinde garantili TV panel değişimi, orijinal yedek parça, kırık ekran tamiri. Hızlı teslimat ve ikame TV hizmetiyle tanışın.",
    url: "https://panelixtv.com",
    siteName: "Panelix",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul TV Ekran Tamiri ve Panel Değişimi | Panelix",
    description: "Garantili TV panel değişimi, orijinal yedek parça, kırık ekran tamiri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
