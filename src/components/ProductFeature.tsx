import Image from "@/components/AppImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export type ProductItem = {
  title: string;
  description: string;
  images: string[];
};

export default function ProductFeature({
  item,
  reverse,
}: {
  item: ProductItem;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`grid items-center gap-10 py-14 first:pt-0 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div
          className={`grid gap-3 ${
            item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {item.images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <Image
                src={src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-2xl text-white sm:text-3xl">{item.title}</h3>
          <div className="mt-3 h-px w-12 bg-gold" />
          <p className="mt-5 text-white/70 leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
