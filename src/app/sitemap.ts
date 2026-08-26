import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://skookuminteriorcompany.co.ke";

const routes = [
  "",
  "/window-blinds",
  "/window-films",
  "/curtain-tracks",
  "/specialized-treatments",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
