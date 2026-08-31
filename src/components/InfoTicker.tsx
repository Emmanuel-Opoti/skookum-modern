const items = [
  "Made to Measure",
  "Free Site Visits",
  "Nairobi, Kenya",
  "Premium Window Treatments",
  "Professional Installation",
  "Trusted Since 2015",
];

export default function InfoTicker() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-gold py-3">
      <div className="flex w-max animate-marquee gap-0" style={{ animationDuration: "22s" }}>
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap px-8 font-display text-sm uppercase tracking-[0.2em] text-ink"
          >
            {item}
            <span className="text-ink/40">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
