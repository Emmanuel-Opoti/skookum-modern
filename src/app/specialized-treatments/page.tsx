import type { Metadata } from "next";
import Link from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductFeature, { type ProductItem } from "@/components/ProductFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Specialized Window Treatments in Nairobi",
  description:
    "Custom window solutions including Dream Blinds, Skylight Blinds, Outdoor Blinds, Panel Blinds, Roman Blinds, and Honeycomb Blinds in Nairobi, Kenya.",
  alternates: { canonical: "/specialized-treatments/" },
  openGraph: {
    title: "Specialized Window Treatments in Nairobi | Skookum Investments Ltd",
    description:
      "Custom window solutions in Nairobi, Kenya — Dream, Skylight, Outdoor, Panel, Roman, and Honeycomb blinds.",
    url: "/specialized-treatments/",
    images: ["/images/page-heroes/specialized.jpg"],
  },
};

const options: ProductItem[] = [
  {
    title: "Dream Blinds",
    description:
      "Also known as “Allusion Blinds,” dream blinds combine the features of sheer curtains and traditional horizontal blinds for an elegant, versatile look.\n\nMade from layers of sheer fabric with horizontal fabric vanes that move between the two layers, they create a soft, flowing appearance while allowing you to control light and privacy. The vanes tilt open or closed for a beautiful, layered effect.",
    images: ["/images/products/dream-blinds.jpg"],
  },
  {
    title: "Skylight Blinds",
    description:
      "Specifically made for windows set into a sloped or angled ceiling, skylight blinds fit snugly and securely over skylight windows, providing a stylish, functional way to control light, temperature, and privacy.",
    images: ["/images/products/skylight-blinds.jpg"],
  },
  {
    title: "Outdoor Blinds",
    description:
      "Made for exterior spaces — patios, porches, balconies, decks — outdoor blinds block the sun, protect against the elements, and create a private outdoor area. Built from durable, weather-resistant materials in various styles and mechanisms.",
    images: ["/images/products/outdoor-blinds.jpg"],
  },
  {
    title: "Panel Blinds",
    description:
      "Also known as panel track or sliding panel blinds, these are a stylish, practical option for covering large windows, sliding doors, and room dividers — adding elegance to modern, minimalist interiors.",
    images: ["/images/products/panel-blinds.jpg"],
  },
  {
    title: "Roman Blinds",
    description:
      "A popular, stylish window treatment that combines the functionality of traditional blinds with the elegance of fabric drapery — adding sophistication and warmth while providing effective light control and privacy.",
    images: ["/images/products/roman-blinds.jpg"],
  },
  {
    title: "Honeycomb Blinds",
    description:
      "Also known as cellular shades, honeycomb blinds stand out for their unique construction and practical benefits, offering superior insulation, energy efficiency, and light control.",
    images: ["/images/products/honeycomb-blinds.jpg"],
  },
];

export default function SpecializedTreatmentsPage() {
  return (
    <>
      <PageHero
        image="/images/page-heroes/specialized.jpg"
        eyebrow="Custom Solutions"
        title="Specialized Window Treatments"
        description="We also offer customized window products depending on your needs and requirements."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8">
        <Reveal>
          <p className="text-white/70 leading-relaxed">
            We refer to these bespoke, purpose-built requests as specialized
            window treatment solutions — built for unusual windows, tricky
            spaces, and unique design goals.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Request a Brochure <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

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
