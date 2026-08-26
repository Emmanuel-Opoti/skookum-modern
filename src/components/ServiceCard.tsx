import Image from "@/components/AppImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceCard({
  href,
  image,
  title,
  description,
  delay = 0,
}: {
  href: string;
  image: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="group relative block h-80 overflow-hidden rounded-2xl ring-1 ring-white/10"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 transition-colors group-hover:from-black/90" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl text-white">{title}</h3>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-gold transition-all group-hover:bg-gold group-hover:text-ink">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
