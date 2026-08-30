import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "@/components/AppImage";
import Reveal from "./Reveal";

const paths = [
  {
    title: "For Your Home",
    description:
      "From cosy bedrooms to sunlit living rooms, we help you find window treatments that balance privacy, light control, and style — fitted to your exact measurements.",
    image: "/images/hero/home-2.jpg",
    cta: "Explore Residential Solutions",
    href: "/window-blinds",
  },
  {
    title: "For Your Business",
    description:
      "Offices, banks, and institutions across Nairobi trust us for reliable, professional installations — from motorized boardroom curtains to privacy and solar-control films.",
    image: "/images/about-installation.jpg",
    cta: "Explore Commercial Solutions",
    href: "/contact",
  },
];

export default function AudienceSplit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <Reveal className="mb-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          A Solution for Every Space
        </p>
        <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
          Residential &amp; Commercial
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {paths.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="group relative h-[420px] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-display text-2xl text-white">{p.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                  {p.description}
                </p>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  {p.cta} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
