import { serviceAreaCities } from "../data/service-areas";
import { services } from "../data/site";

export function GET() {
  const serviceLinks = services
    .map(
      (service) =>
        `- [${service.title}](https://v12electric.com/services/${service.slug}/): ${service.summary}`,
    )
    .join("\n");
  const areaLinks = serviceAreaCities
    .map(
      (area) =>
        `- [${area.city} electrician](https://v12electric.com/service-areas/${area.slug}/): ${area.focus}`,
    )
    .join("\n");

  const body = `# V12 Electric

> V12 Electric provides electrical service for homes and businesses across California's Coachella Valley. Call or text (760) 567-6593.

V12 Electric plans and performs EV charger installations, panel and service upgrades, residential and commercial electrical work, inspections, troubleshooting and repairs, smart-home wiring, Lutron lighting controls, and electrical design coordination.

## Primary pages

- [Home](https://v12electric.com/): Overview, project proof, reviews, and service-area coverage.
- [Electrical services](https://v12electric.com/services/): Complete service directory.
- [Service areas](https://v12electric.com/service-areas/): Coachella Valley coverage, city by city.
- [Projects](https://v12electric.com/projects/): Selected completed electrical work.
- [Process](https://v12electric.com/process/): Discovery, coordination, installation, and verification.
- [Contact](https://v12electric.com/contact/): Request a quote or call V12 Electric.

## Services

${serviceLinks}

## Service areas

${areaLinks}

## Business facts

- Business name: V12 Electric
- Phone: (760) 567-6593
- Region served: Coachella Valley, California
- Communities served: ${serviceAreaCities.map((area) => area.city).join(", ")}
- Website: https://v12electric.com/

For permits, availability, pricing, scheduling, and property-specific recommendations, contact V12 Electric directly. This website does not publish a street address, business hours, or guaranteed emergency availability.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
