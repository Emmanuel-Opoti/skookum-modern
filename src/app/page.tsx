import Image from "@/components/AppImage";
import Link from "@/components/AppLink";
import { CalendarCheck, ClipboardList, Hammer, PenTool, ArrowRight } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import ClientsMarquee from "@/components/ClientsMarquee";
import TrustBar from "@/components/TrustBar";
import AudienceSplit from "@/components/AudienceSplit";
import InfoTicker from "@/components/InfoTicker";
import StatsSection from "@/components/StatsSection";
import Spotlight from "@/components/Spotlight";
import { site } from "@/lib/site";
import { basePath } from "@/lib/basePath";

const services = [
  {
    href: "/window-blinds",
    image: "/images/services/window-blinds.jpg",
    title: "Window Blinds",
    description: "Zebra, Venetian, Vertical, Roller, Sunscreen & Blackout blinds.",
  },
  {
    href: "/window-films",
    image: "/images/services/window-films.jpg",
    title: "Window Films",
    description: "Decorative, solar control, security, and automotive films.",
  },
  {
    href: "/specialized-treatments",
    image: "/images/services/specialized.jpg",
    title: "Specialized Solutions",
    description: "Dream, skylight, outdoor, panel, roman & honeycomb blinds.",
  },
  {
    href: "/curtain-tracks",
    image: "/images/services/curtain-tracks.jpg",
    title: "Curtain Tracks",
    description: "Ordinary, ripple, bendable & corded tracks, plus curtain rods.",
  },
];

const gallery = [
  { src: "/images/gallery/automotive-tint.jpg", title: "Automotive Film" },
  { src: "/images/gallery/roller-blinds.jpg", title: "Roller Blinds" },
  { src: "/images/gallery/zebra-blinds.jpg", title: "Zebra Blinds" },
  { src: "/images/gallery/wooden-blinds.jpg", title: "Wooden Venetian Blinds" },
  { src: "/images/gallery/solar-blinds.jpg", title: "Solar Control Blinds" },
  { src: "/images/gallery/roman-blinds.jpg", title: "Roman Blinds" },
  { src: "/images/gallery/bespoke-wallpapers.webp", title: "Bespoke Wallpapers" },
  { src: "/images/gallery/outdoor-solutions.webp", title: "Outdoor Solutions" },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book a Site Visit",
    description:
      "We arrange a convenient time for one of our design consultants to come and discuss your needs.",
  },
  {
    icon: PenTool,
    title: "Get a Free Quote",
    description:
      "Once we understand your needs and take measurements, we share a detailed, no-obligation quote.",
  },
  {
    icon: ClipboardList,
    title: "Place Your Order",
    description: "Approve the quote and we schedule your made-to-measure order for production.",
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    description: "Our technicians install your window treatments cleanly, quickly, and precisely.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <InfoTicker />

      <TrustBar />

      {/* Who We Are */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src="/images/about-installation.jpg"
              alt="Skookum technician measuring a window for a made-to-measure fit"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Who We Are
          </p>
          <h2 className="mt-4 font-display text-3xl text-white text-balance sm:text-4xl">
            Nairobi&rsquo;s trusted name in bespoke window treatments since 2015
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Skookum Investments Limited provides high-quality and affordable window
            treatment solutions across Nairobi and Kenya for both commercial and
            residential clients. From custom window blinds and decorative window
            films to modern motorized curtain tracks, we offer bespoke interior
            design solutions tailored to suit your specific taste and privacy needs.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Book a Free Site Visit <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <StatsSection />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Our Products &amp; Services
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.href} {...s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <AudienceSplit />

      {/* Gallery */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Reveal className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Our Work
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">Gallery</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 0.06}>
                <Spotlight className="rounded-xl" tilt>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10">
                    <Image
                      src={g.src}
                      alt={g.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                    <p className="absolute bottom-4 left-4 font-display text-sm text-white">
                      {g.title}
                    </p>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={`${basePath}/video/cover.jpg`}
              className="aspect-video w-full object-cover"
            >
              <source src={`${basePath}/video/motorized-curtain.mp4`} type="video/mp4" />
            </video>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            In Motion
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            Our Motorized Curtain Tracks in Action
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Watch our motorized curtain tracks in action, effortlessly and quietly
            opening and closing at the touch of a button.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Contact Us for a Free Quote <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Clients */}
      <section className="border-y border-white/10 bg-black py-16">
        <Reveal className="mb-8 text-center">
          <h2 className="font-display text-2xl text-white">Our Esteemed Clients</h2>
        </Reveal>
        <ClientsMarquee />
      </section>

      {/* How it Works */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Our Process
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">How It Works</h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <span className="font-display text-4xl text-gold/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(208,173,85,0.12),transparent_60%)]" />
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[18vw] font-bold leading-none text-white/[0.03]"
        >
          SKOOKUM
        </p>
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Ready to transform your space?
            </h2>
            <p className="mt-4 text-white/70">
              Book a free site visit and let our design consultants help you find
              the perfect window treatment for your home or office.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                Contact Us
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
              >
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
