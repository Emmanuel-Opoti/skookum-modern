"use client";

import Image from "@/components/AppImage";
import Link from "@/components/AppLink";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero/home-1.jpg",
    title: "Window Blinds & Interior Solutions in Nairobi",
    subtitle: "Premium Window Treatments by Skookum",
  },
  {
    src: "/images/hero/home-2.jpg",
    title: "Stunning window blinds",
    subtitle: "To transform your spaces",
  },
  {
    src: "/images/hero/home-3.jpg",
    title: "Made to measure",
    subtitle: "Curtain tracks and accessories",
  },
  {
    src: "/images/hero/home-4.jpg",
    title: "Decorative window films",
    subtitle: "For privacy and aesthetic appeal",
  },
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-gold">
                Nairobi &middot; Since 2015
              </p>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
                {slides[index].title}
              </h1>
              <p className="mt-6 text-lg text-white/80 md:text-xl">{slides[index].subtitle}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
            >
              Get a Free Quote
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/window-blinds"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-gold" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-2 md:right-12 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1"
        >
          <span className="h-1.5 w-1 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
