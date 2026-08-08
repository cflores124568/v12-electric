import { serviceAreaCities } from "../data/service-areas";
import { services } from "../data/site";

const siteUrl = "https://v12electric.com";
const staticPaths = [
  "/",
  "/services/",
  "/projects/",
  "/about/",
  "/process/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

const paths = [
  ...staticPaths,
  ...services.map((service) => `/services/${service.slug}/`),
  ...serviceAreaCities.map((area) => `/service-areas/${area.slug}/`),
];

export function GET() {
  const urls = paths
    .map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
