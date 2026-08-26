import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Skookum Investments Ltd for expert window blinds, curtain tracks, window films, and interior design solutions in Nairobi, Kenya.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Skookum Investments Ltd",
    description:
      "Contact Skookum Investments Ltd for a free site visit and quote in Nairobi, Kenya.",
    url: "/contact",
    images: ["/images/page-heroes/contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/page-heroes/contact.jpg"
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We'd love to hear from you — reach out for a free site visit and quote."
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            We&rsquo;d love to hear from you
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Get in touch to learn more about our quality window treatments and
            interior design solutions. Our team is ready to assist you with any
            inquiries about our products and services.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <MapPin size={20} />
              </span>
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-sm text-white/60">{site.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Phone size={20} />
              </span>
              <div>
                <p className="font-medium text-white">Phone</p>
                <a href={site.phoneHref} className="text-sm text-white/60 hover:text-gold">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Mail size={20} />
              </span>
              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-white/60 hover:text-gold"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock size={20} />
              </span>
              <div>
                <p className="font-medium text-white">Business Hours</p>
                {site.hours.map((h) => (
                  <p key={h.days} className="text-sm text-white/60">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              title="Skookum Investments Ltd Office Location in Nairobi"
              src={site.mapEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
