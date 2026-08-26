import { site } from "@/lib/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    image: "https://skookuminteriorcompany.co.ke/images/logo.jpg",
    logo: "https://skookuminteriorcompany.co.ke/images/logo.jpg",
    url: "https://skookuminteriorcompany.co.ke",
    telephone: "+254100720239",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 Addis Ababa Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2988579,
      longitude: 36.8399049,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Nairobi",
    },
    sameAs: [],
    description:
      "Premium window blinds, decorative films, and motorized curtain tracks for homes and offices in Nairobi, Kenya.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
