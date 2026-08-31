import Link from "@/components/AppLink";
import Image from "@/components/AppImage";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Skookum Investments Ltd logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40"
              />
              <span className="font-display text-sm uppercase tracking-[0.2em] text-white">
                Skookum
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Bespoke window blinds, films, and motorized curtain tracks for
              homes and businesses across Nairobi since 2015.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gold transition-colors hover:border-gold hover:bg-gold/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.15em] text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.15em] text-gold">
              Our Office
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.15em] text-gold">
              Business Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-white/50">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} Skookum Investments Ltd. All rights reserved.</span>
          <span>Made by Emmanuel Opoti</span>
        </div>
      </div>
    </footer>
  );
}
