import Image from "@/components/AppImage";

const clients = [
  { src: "/images/clients/dtb.png", alt: "Diamond Trust Bank" },
  { src: "/images/clients/oriental-bank.png", alt: "M Oriental Bank" },
  { src: "/images/clients/nssf.png", alt: "NSSF Kenya" },
  { src: "/images/clients/deloitte.jpg", alt: "Deloitte Kenya" },
  { src: "/images/clients/parklane.jpg", alt: "Parklane Construction" },
  { src: "/images/clients/mohammed-muigai.png", alt: "Mohammed Muigai Advocates" },
];

export default function ClientsMarquee() {
  const track = [...clients, ...clients];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 py-4">
        {track.map((c, i) => (
          <div
            key={`${c.alt}-${i}`}
            className="relative h-14 w-36 shrink-0 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <Image src={c.src} alt={c.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
