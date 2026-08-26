import Image from "@/components/AppImage";

export default function PageHero({
  image,
  title,
  eyebrow,
  description,
}: {
  image: string;
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <section className="relative flex h-[52vh] min-h-[380px] w-full items-center overflow-hidden bg-ink">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16 md:px-8">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl text-white sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-xl text-white/80">{description}</p>
        )}
      </div>
    </section>
  );
}
