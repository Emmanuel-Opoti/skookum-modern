import type { Metadata } from "next";
import Link from "@/components/AppLink";
import { ArrowRight, Eye, Flame, ShieldCheck, Sun } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductFeature, { type ProductItem } from "@/components/ProductFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Window Films in Nairobi",
  description:
    "Decorative, solar control, security, and automotive window films for residential, commercial, and vehicle applications in Nairobi.",
  alternates: { canonical: "/window-films" },
  openGraph: {
    title: "Window Films in Nairobi | Skookum Investments Ltd",
    description:
      "Decorative, solar control, security, and automotive window films in Nairobi, Kenya.",
    url: "/window-films",
    images: ["/images/page-heroes/window-films.jpg"],
  },
};

const features = [
  {
    icon: Sun,
    title: "UV Protection",
    description: "Blocks out harmful UV rays, protecting your skin and furniture from damage.",
  },
  {
    icon: Eye,
    title: "Privacy",
    description: "An added layer of privacy, making it difficult for outsiders to see inside.",
  },
  {
    icon: Flame,
    title: "Temperature Control",
    description: "Regulates the temperature in your home or office, reducing heating and cooling needs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description: "An added layer of safety, holding shattered glass together in the event of breakage.",
  },
];

const options: ProductItem[] = [
  {
    title: "Decorative Film",
    description:
      "Decorative window films are adhesive-backed films that can be applied to glass surfaces to enhance privacy, add decorative elements, or create a unique aesthetic.",
    images: ["/images/products/decorative-film.jpg"],
  },
  {
    title: "Solar Control Film",
    description:
      "Solar control film, also known as window tint, is a specialized film applied to glass surfaces to manage solar heat gain, glare, and UV radiation.",
    images: ["/images/products/solar-control-film.jpg"],
  },
  {
    title: "Security Film",
    description:
      "Reinforces the glass surface of the window, making it more resistant to impacts, breakage, and intrusion.",
    images: ["/images/products/security-film.jpg"],
  },
  {
    title: "Automotive Film",
    description:
      "Enhances the aesthetics of the vehicle while improving privacy, protecting the interior from harmful sun rays, and keeping your car cool on hot days.",
    images: ["/images/products/automotive-film.jpg"],
  },
];

export default function WindowFilmsPage() {
  return (
    <>
      <PageHero
        image="/images/page-heroes/window-films.jpg"
        eyebrow="Functional & Affordable"
        title="Window Films"
        description="Our window films can be used in residential and commercial spaces, functional and affordable depending on your needs."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8">
        <Reveal>
          <p className="text-white/70 leading-relaxed">
            From UV protection to privacy and safety, our range of films is
            engineered to enhance any space — indoors or on the road.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Request a Brochure <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <FeatureGrid heading="Features of Our Window Films" features={features} />

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
