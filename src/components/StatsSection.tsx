import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { value: 2015, suffix: "", label: "Founded" },
  { value: 400, suffix: "+", label: "Colours & Styles" },
  { value: 4, suffix: "", label: "Specialist Categories" },
  { value: 100, suffix: "%", label: "Made to Measure" },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(208,173,85,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-5xl text-gold sm:text-6xl">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60 sm:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
