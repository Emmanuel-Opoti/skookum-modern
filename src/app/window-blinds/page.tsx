import type { Metadata } from "next";
import Link from "@/components/AppLink";
import { ArrowRight, Lightbulb, Lock, Shield, Wallet } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductFeature, { type ProductItem } from "@/components/ProductFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Window Blinds in Nairobi",
  description:
    "Explore custom window blinds in Nairobi — Zebra, Venetian, Vertical, Roller, Sunscreen, and Blackout blinds for homes and offices.",
  alternates: { canonical: "/window-blinds/" },
  openGraph: {
    title: "Window Blinds in Nairobi | Skookum Investments Ltd",
    description:
      "Custom-made blinds in Nairobi — Zebra, Roller, Venetian, and more. Enhance your space with Skookum's stylish window treatments.",
    url: "/window-blinds/",
    images: ["/images/page-heroes/window-blinds.jpg"],
  },
};

const features = [
  {
    icon: Lightbulb,
    title: "Energy Saving",
    description: "Our window blinds help keep a space warm, reducing the need for a heater.",
  },
  {
    icon: Shield,
    title: "Durability",
    description: "Built to last with high-quality materials and construction that withstands time.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Designed with security in mind, providing an added layer of protection.",
  },
  {
    icon: Wallet,
    title: "Affordability",
    description: "Priced to be affordable without compromising quality or functionality.",
  },
];

const options: ProductItem[] = [
  {
    title: "Vertical Blinds",
    description:
      "Vertical blinds are window treatments consisting of individual slats or vanes that hang vertically from a headrail at the top of a window. These slats can be adjusted to control light and privacy by rotating them or drawing them to the side.",
    images: ["/images/products/vertical-blinds-closed.jpg", "/images/products/vertical-blinds-open.jpg"],
  },
  {
    title: "Roller Blinds",
    description:
      "Roller blinds are window coverings made from a single piece of fabric that rolls up and down over a window via a mechanism usually operated by a cord, chain, or motor. They are a popular choice due to their simplicity, versatility, and effectiveness in controlling light and privacy.",
    images: ["/images/products/roller-blinds.jpg"],
  },
  {
    title: "Venetian Blinds",
    description:
      "Venetian blinds are a type of window covering made of horizontal slats that can be adjusted to control the amount of light and privacy in a room. Typically made from aluminum, wood, or faux wood, they're a popular choice for homes and offices due to their versatility and sleek appearance.",
    images: ["/images/products/venetian-blinds-1.jpg", "/images/products/venetian-blinds-2.jpg"],
  },
  {
    title: "Zebra Blinds",
    description:
      "Zebra blinds, also known as vision or day-and-night blinds, combine the features of roller blinds and venetian blinds. Alternating translucent and opaque fabric strips overlap to create flexible control of light and privacy.",
    images: ["/images/products/zebra-blinds-closed.jpg", "/images/products/zebra-blinds-open.jpg"],
  },
  {
    title: "Sunscreen Blinds",
    description:
      "These window coverings are made from specially engineered fabric that helps prevent glare, blocks out harmful UV rays, and offers unparalleled privacy without compromising on light.",
    images: ["/images/products/sunscreen-blinds.jpg"],
  },
  {
    title: "Blackout Blinds",
    description:
      "Great for boardrooms or meeting rooms because they block out light entirely, letting you make presentations without distractions — also popular in bedrooms.",
    images: ["/images/products/blackout-blinds.jpg"],
  },
];

export default function WindowBlindsPage() {
  return (
    <>
      <PageHero
        image="/images/page-heroes/window-blinds.jpg"
        eyebrow="Made to Measure"
        title="Window Blinds"
        description="Beauty, easy maintenance, and excellent light control with a rich variety of textures, patterns, and colours for today's window designs."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8">
        <Reveal>
          <p className="text-white/70 leading-relaxed">
            Our beautiful selection of over 400 colours and styles will let you
            create the exact look you want — from casual to formal, contemporary
            to traditional.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Request a Brochure <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <FeatureGrid heading="Features of Our Window Blinds" features={features} />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <Reveal className="mb-6 text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Our Available Options</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </Reveal>
        <div className="divide-y divide-white/10">
          {options.map((item, i) => (
            <ProductFeature key={item.title} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  );
}
