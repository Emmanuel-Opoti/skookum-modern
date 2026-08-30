import { Award, Building2, MapPin, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { icon: Award, label: "Trusted Since 2015" },
  { icon: MapPin, label: "Nairobi & Kenya-Wide" },
  { icon: Building2, label: "Trusted by Leading Institutions" },
  { icon: ShieldCheck, label: "Free Site Visits & Quotes" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex flex-col items-center gap-2.5 px-4 py-7 text-center sm:flex-row sm:justify-center sm:gap-3 sm:py-8">
                <s.icon size={20} className="shrink-0 text-gold" />
                <span className="text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
