import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skookuminteriorcompany.co.ke"),
  title: {
    default: "Skookum Investments Ltd | Window Blinds, Films & Curtain Tracks in Nairobi",
    template: "%s | Skookum Investments Ltd",
  },
  description:
    "Premium window blinds, decorative films, and motorized curtain tracks for homes and offices in Nairobi, Kenya. Free site visits and quotes from Skookum Investments Ltd.",
  keywords: [
    "Window Blinds Nairobi",
    "Zebra Blinds Kenya",
    "Motorized Curtain Tracks",
    "Window Films Nairobi",
    "Skookum Investments",
  ],
  openGraph: {
    title: "Skookum Investments Ltd | Window Blinds, Films & Curtain Tracks in Nairobi",
    description:
      "Premium window treatment solutions in Nairobi, Kenya — blinds, curtain tracks, and window films.",
    url: "https://skookuminteriorcompany.co.ke",
    siteName: "Skookum Investments Ltd",
    images: ["/images/logo.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
