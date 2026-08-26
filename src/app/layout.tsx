import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Work_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
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
  authors: [{ name: "Skookum Investments Ltd" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Skookum Investments Ltd | Window Blinds, Films & Curtain Tracks in Nairobi",
    description:
      "Premium window treatment solutions in Nairobi, Kenya — blinds, curtain tracks, and window films.",
    url: "https://skookuminteriorcompany.co.ke",
    siteName: "Skookum Investments Ltd",
    images: ["/images/logo.jpg"],
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skookum Investments Ltd | Window Blinds, Films & Curtain Tracks in Nairobi",
    description:
      "Premium window treatment solutions in Nairobi, Kenya — blinds, curtain tracks, and window films.",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${workSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-white">
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
