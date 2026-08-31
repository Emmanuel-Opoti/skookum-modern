import type { Metadata } from "next";
import Link from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductFeature, { type ProductItem } from "@/components/ProductFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Curtain Tracks & Rods in Nairobi",
  description:
    "Ordinary, ripple, bendable, and corded curtain tracks plus decorative curtain rods, made to measure in Nairobi, Kenya.",
  alternates: { canonical: "/curtain-tracks/" },
  openGraph: {
    title: "Curtain Tracks & Rods in Nairobi | Skookum Investments Ltd",
    description:
      "Made-to-measure curtain tracks and rods in Nairobi, Kenya — ordinary, ripple, bendable, and corded systems.",
    url: "/curtain-tracks/",
    images: ["/images/page-heroes/curtain-tracks.jpg"],
  },
};

const options: ProductItem[] = [
  {
    title: "Ordinary Curtain Tracks",
    description:
      "Ordinary curtain tracks, also referred to as standard curtain tracks, are basic systems used to hang curtains or draperies. Typically made from metal or plastic, they're available in various lengths and configurations to accommodate different window sizes and curtain styles.",
    images: ["/images/products/ordinary-tracks-1.jpg", "/images/products/ordinary-tracks-2.jpg"],
  },
  {
    title: "Ripple Curtain Tracks",
    description:
      "Ripple fold tracks are designed to create uniform, consistent waves in the curtain fabric when drawn closed — a sleek, streamlined look popular in modern interiors.\n\nSpecially designed carriers attach to the curtain fabric, spaced evenly along the track and inserted into small pockets sewn into the back of the panels. As the curtains are drawn, the carriers create gentle, uniform ripples in the fabric.",
    images: ["/images/products/ripple-tracks.jpg"],
  },
  {
    title: "Bendable Curtain Tracks",
    description:
      "Also known as flexible or curved curtain tracks, these are designed to be easily shaped to fit the contours of non-standard or irregularly shaped windows, such as bay or arched windows, without breaking.",
    images: ["/images/products/bendable-tracks.jpg"],
  },
  {
    title: "Corded Curtain Tracks",
    description:
      "Featuring a cord or pulley mechanism, corded tracks let you easily open and close your curtains with minimal effort — typically used for heavier curtains or when a more controlled movement is desired.",
    images: ["/images/products/corded-tracks.jpg"],
  },
  {
    title: "Curtain Rods",
    description:
      "Essential home decor elements that help hang and support curtains or drapes, in a variety of materials, styles, and sizes.\n\nStandard Rods — simple rods for lightweight to medium-weight fabric.\nDecorative Rods — attractive finishes with decorative finials for added style.\nTraverse Rods — a cord mechanism ideal for heavier or lined drapery.\nDouble Rods — for hanging a sheer and a heavier curtain separately, adding depth and layering.",
    images: ["/images/products/curtain-rods.jpg"],
  },
];

export default function CurtainTracksPage() {
  return (
    <>
      <PageHero
        image="/images/page-heroes/curtain-tracks.jpg"
        eyebrow="Style Meets Functionality"
        title="Curtain Tracks & Rods"
        description="From standard tracks to ripple fold systems and decorative rods — made to measure for every window."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8">
        <Reveal>
          <p className="text-white/70 leading-relaxed">
            Explore our wide range of curtain tracks and rods, designed to offer
            both style and functionality for every window. Whether you&rsquo;re
            looking for a simple solution or a more sophisticated system, we have
            options to suit your needs.
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
