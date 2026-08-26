import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureGrid({
  heading,
  features,
}: {
  heading: string;
  features: Feature[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">{heading}</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" />
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-colors hover:border-gold/40">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <f.icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
