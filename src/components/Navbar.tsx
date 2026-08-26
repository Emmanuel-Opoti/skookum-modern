"use client";

import Link from "next/link";
import Image from "@/components/AppImage";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.jpg"
            alt="Skookum Investments Ltd logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="font-display text-sm tracking-[0.2em] text-white uppercase leading-tight md:text-base">
            Skookum
            <span className="block text-[10px] tracking-[0.3em] text-gold/80 md:text-xs">
              Investments Ltd
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wide transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-white/90"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-gold"
          >
            <Phone size={16} className="text-gold" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-ink/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 text-base transition-colors ${
                    pathname === link.href
                      ? "bg-white/5 text-gold"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-gold/40 py-3 text-sm text-white"
                >
                  <Phone size={16} className="text-gold" /> Call {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="rounded-full bg-gold py-3 text-center text-sm font-medium text-ink"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
