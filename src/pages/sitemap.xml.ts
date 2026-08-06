const siteUrl = "https://v12electric.com";
const paths = [
  "/",
  "/services/",
  "/services/electrical-systems/",
  "/services/ev-charger-installation/",
  "/services/panel-service-upgrades/",
  "/services/residential-electrical/",
  "/services/commercial-electrical/",
  "/services/electrical-inspections/",
  "/services/troubleshooting-repairs/",
  "/services/smart-home-wiring/",
  "/services/lutron-lighting-controls/",
  "/services/design-planning/",
  "/projects/",
  "/about/",
  "/process/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

export function GET() {
  const urls = paths
    .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
