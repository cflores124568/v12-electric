export interface ServiceAreaCity {
  slug: string;
  city: string;
  headlineLead: string;
  headlineAccent: string;
  heroImage: string;
  heroAlt: string;
  projectCta: string;
  localNote: string;
  serviceSlugs: readonly string[];
  coords: { lat: number; lng: number };
  tier: "primary" | "secondary";
  focus: string;
  fieldNote: string;
  utility: string;
  permitAuthority: string;
  permitUrl: string;
  localFaq: { question: string; answer: string };
}

/**
 * Valley coverage and city notes adapted from the source business research.
 * Coordinates are intentionally kept in one place so the map, contact form, and future city
 * pages cannot drift apart.
 */
export const serviceAreaCities: ServiceAreaCity[] = [
  {
    slug: "palm-springs-electrician",
    city: "Palm Springs",
    headlineLead: "Power, planned for",
    headlineAccent: "Palm Springs.",
    heroImage: "/images/cities/palm-springs-hero.webp",
    heroAlt:
      "Palm Springs mid-century home at dusk with architectural lighting, an electric vehicle, and a wall charger",
    projectCta: "Start a Palm Springs project",
    localNote: "SCE service area • Palm Springs permits • Desert-local planning",
    serviceSlugs: [
      "ev-charger-installation",
      "panel-service-upgrades",
      "lutron-lighting-controls",
      "residential-electrical",
    ],
    coords: { lat: 33.8303, lng: -116.5453 },
    tier: "primary",
    focus: "Mid-century remodels, EV charging, architectural lighting, and panel modernization.",
    fieldNote:
      "Before adding a charger or new lighting, check the load behind the walls. Remodeled rooms can look brand-new while the panel feeding them is decades behind.",
    utility: "Southern California Edison (SCE)",
    permitAuthority: "City of Palm Springs Building Department",
    permitUrl: "https://www.palmspringsca.gov/government/departments/building/permits",
    localFaq: {
      question: "Can you install an EV charger at a Palm Springs home?",
      answer:
        "Yes. We review panel capacity, charger location, conductor routing, permits, and inspection needs before installing a Tesla Wall Connector or universal Level 2 charger.",
    },
  },
  {
    slug: "cathedral-city-electrician",
    city: "Cathedral City",
    headlineLead: "Clear answers for",
    headlineAccent: "Cathedral City.",
    heroImage: "/images/cities/cathedral-city-hero.webp",
    heroAlt:
      "Cathedral City desert home at dusk with a neatly installed service panel and exterior lighting",
    projectCta: "Start a Cathedral City project",
    localNote: "SCE service area • Cathedral City permits • Diagnosis before replacement",
    serviceSlugs: [
      "troubleshooting-repairs",
      "residential-electrical",
      "commercial-electrical",
      "panel-service-upgrades",
    ],
    coords: { lat: 33.7797, lng: -116.4653 },
    tier: "primary",
    focus: "Troubleshooting, rental-turnover repairs, small-business service calls, and dedicated circuits.",
    fieldNote:
      "When a breaker keeps tripping, replacing it is not a diagnosis. Trace the load, devices, and wiring so the repair addresses the fault.",
    utility: "Southern California Edison (SCE)",
    permitAuthority: "Cathedral City Building and Safety Division",
    permitUrl:
      "https://www.cathedralcity.gov/departments/community-economic-development-department/building-and-safety",
    localFaq: {
      question: "Can you troubleshoot breakers that keep tripping?",
      answer:
        "Yes. We track down overloads, failing breakers, bad devices, damaged wiring, and equipment issues so the fix is based on the real cause.",
    },
  },
  {
    slug: "desert-hot-springs-electrician",
    city: "Desert Hot Springs",
    headlineLead: "Built for",
    headlineAccent: "Desert Hot Springs.",
    heroImage: "/images/cities/desert-hot-springs-hero.webp",
    heroAlt:
      "Desert Hot Springs residence at dusk with pool, spa, landscape lighting, and weatherproof electrical equipment",
    projectCta: "Start a Desert Hot Springs project",
    localNote:
      "SCE service area • Desert Hot Springs permits • Exterior work built for desert exposure",
    serviceSlugs: [
      "residential-electrical",
      "electrical-inspections",
      "panel-service-upgrades",
      "ev-charger-installation",
    ],
    coords: { lat: 33.9611, lng: -116.5017 },
    tier: "secondary",
    focus: "Outdoor electrical, older-panel safety work, spa circuits, cooling loads, and EV charging.",
    fieldNote:
      "Exterior devices take the full desert afternoon. Outdoor electrical work needs the right enclosure, seal, mounting, and protection—not just a device labeled for exterior use.",
    utility: "Southern California Edison (SCE)",
    permitAuthority: "City of Desert Hot Springs Building Division",
    permitUrl: "https://www.cityofdhs.org/building-and-safety/",
    localFaq: {
      question: "Can you inspect older electrical systems in Desert Hot Springs?",
      answer:
        "Yes. We inspect panels, breakers, grounding, GFCI protection, outlets, visible wiring, and common safety issues so you know what needs attention.",
    },
  },
  {
    slug: "rancho-mirage-electrician",
    city: "Rancho Mirage",
    headlineLead: "Finished work for",
    headlineAccent: "Rancho Mirage.",
    heroImage: "/images/cities/rancho-mirage-hero.webp",
    heroAlt:
      "Rancho Mirage estate at dusk with architectural lighting, an electric vehicle, and a discreet charger",
    projectCta: "Start a Rancho Mirage project",
    localNote:
      "SCE + IID vary by property • Rancho Mirage permits • Clean routes through finished spaces",
    serviceSlugs: [
      "lutron-lighting-controls",
      "ev-charger-installation",
      "design-planning",
      "panel-service-upgrades",
    ],
    coords: { lat: 33.7397, lng: -116.4127 },
    tier: "primary",
    focus: "Luxury lighting, discreet EV charger routing, estate-home capacity reviews, and controls.",
    fieldNote:
      "The cleanest route is rarely the most obvious one. Plan access, mounting, switching, and protection before tools touch a finished room.",
    utility: "Confirm from the property: SCE and IID both serve parts of the city.",
    permitAuthority: "Rancho Mirage Building and Safety Division",
    permitUrl:
      "https://ranchomirageca.gov/Building%20Plan%20Review%20Submittal%20Requirements%20March%202025.pdf",
    localFaq: {
      question: "Can you work around gated-community access and finished interiors?",
      answer:
        "Yes. We can coordinate service windows, access requirements, fixture protection, and clean finish work for homes and professional spaces.",
    },
  },
  {
    slug: "palm-desert-electrician",
    city: "Palm Desert",
    headlineLead: "Designed for",
    headlineAccent: "Palm Desert.",
    heroImage: "/images/cities/palm-desert-hero.webp",
    heroAlt:
      "Palm Desert design gallery and residences at dusk with display lighting and EV charging",
    projectCta: "Start a Palm Desert project",
    localNote:
      "IID east of Washington • SCE west • Palm Desert permits • Lighting with visual discipline",
    serviceSlugs: [
      "commercial-electrical",
      "lutron-lighting-controls",
      "ev-charger-installation",
      "residential-electrical",
    ],
    coords: { lat: 33.7222, lng: -116.3744 },
    tier: "primary",
    focus: "Gallery and retail lighting, EV charging, condo-aware upgrades, and commercial maintenance.",
    fieldNote:
      "In a display space, electrical work becomes part of what customers see. Beam spread, color, glare, control, and fixture alignment matter as much as whether the light turns on.",
    utility: "Confirm from the property: IID east of Washington Street, SCE west.",
    permitAuthority: "City of Palm Desert Building & Safety Division",
    permitUrl: "https://www.palmdesert.gov/build-develop/building-and-safety",
    localFaq: {
      question: "Can you work on Palm Desert retail or gallery spaces?",
      answer:
        "Yes. We support commercial spaces with lighting, outlets, service repairs, maintenance, and code-compliance updates.",
    },
  },
  {
    slug: "indian-wells-electrician",
    city: "Indian Wells",
    headlineLead: "Quiet confidence for",
    headlineAccent: "Indian Wells.",
    heroImage: "/images/cities/indian-wells-hero.webp",
    heroAlt:
      "Indian Wells seasonal residence at dusk with pathway lighting, an electric vehicle, and a guest charger",
    projectCta: "Start an Indian Wells project",
    localNote:
      "SCE serves most properties • Indian Wells permits • Systems checked before the season ends",
    serviceSlugs: [
      "electrical-inspections",
      "lutron-lighting-controls",
      "ev-charger-installation",
      "smart-home-wiring",
    ],
    coords: { lat: 33.7175, lng: -116.341 },
    tier: "primary",
    focus: "Seasonal-home checks, finished-interior lighting, guest-property charging, and dedicated circuits.",
    fieldNote:
      "A seasonal home needs more than a quick switch test. Check panel condition, exterior devices, controls, idle equipment, and the circuits expected to work while the house is quiet.",
    utility: "Confirm from the meter or bill; SCE serves most of the city.",
    permitAuthority: "City of Indian Wells Building Department",
    permitUrl: "https://www.cityofindianwells.org/city-hall/departments/building",
    localFaq: {
      question: "What should be checked before an Indian Wells home sits empty?",
      answer:
        "Verify GFCI and AFCI protection, check panel condition and surge protection, and confirm exterior lighting, timers, and controls work before the season ends.",
    },
  },
  {
    slug: "la-quinta-electrician",
    city: "La Quinta",
    headlineLead: "Every load, planned for",
    headlineAccent: "La Quinta.",
    heroImage: "/images/cities/la-quinta-hero.webp",
    heroAlt:
      "La Quinta home at dusk with pool, spa, outdoor living, electrical service equipment, and EV charging",
    projectCta: "Start a La Quinta project",
    localNote: "IID service area • La Quinta permits • Combined-load planning before installation",
    serviceSlugs: [
      "ev-charger-installation",
      "residential-electrical",
      "panel-service-upgrades",
      "design-planning",
    ],
    coords: { lat: 33.6634, lng: -116.31 },
    tier: "primary",
    focus: "EV charging, pool and spa electrical, outdoor living, remodel circuits, and IID coordination.",
    fieldNote:
      "Air conditioning, pool equipment, outdoor living, appliances, and an EV charger all meet at the same service. Review the combined load before treating one upgrade as isolated.",
    utility: "Imperial Irrigation District (IID) across most of the city.",
    permitAuthority: "City of La Quinta Building Division",
    permitUrl: "https://www.laquintaca.gov/business/design-and-development/building-division",
    localFaq: {
      question: "Do I need a panel check before installing an EV charger in La Quinta?",
      answer:
        "Usually, yes. A panel and load review helps confirm whether the charger can be added safely or whether upgrades or load management are needed.",
    },
  },
  {
    slug: "indio-electrician",
    city: "Indio",
    headlineLead: "Ready for what",
    headlineAccent: "Indio adds next.",
    heroImage: "/images/cities/indio-hero.webp",
    heroAlt:
      "Contemporary Indio home at dusk with an EV charger, service panel, and illuminated kitchen and office",
    projectCta: "Start an Indio project",
    localNote: "IID Energy • Indio permits • Real diagnosis before a fast repair",
    serviceSlugs: [
      "troubleshooting-repairs",
      "ev-charger-installation",
      "commercial-electrical",
      "residential-electrical",
    ],
    coords: { lat: 33.7206, lng: -116.2156 },
    tier: "primary",
    focus: "Fast troubleshooting, newer-home EV and appliance loads, remodel wiring, and commercial service.",
    fieldNote:
      "A fast repair still starts with a real diagnosis. Isolate the failed device, overloaded circuit, damaged connection, or upstream problem before returning the system to service.",
    utility: "Imperial Irrigation District (IID) Energy.",
    permitAuthority: "City of Indio Building & Safety Division",
    permitUrl:
      "https://www.indio.org/departments/community-development-department/building-safety-division/permits",
    localFaq: {
      question: "Can you install EV chargers in Indio?",
      answer:
        "Yes. We install Tesla and universal Level 2 EV chargers, including dedicated circuits, load checks, routing, and permit or inspection coordination when needed.",
    },
  },
  {
    slug: "coachella-electrician",
    city: "Coachella",
    headlineLead: "Working power for",
    headlineAccent: "Coachella.",
    heroImage: "/images/cities/coachella-hero.webp",
    heroAlt:
      "Coachella family property and small workshop at dusk with dedicated circuits and service panels",
    projectCta: "Start a Coachella project",
    localNote:
      "IID serves much of the city • Coachella permits • Equipment circuits planned for real duty",
    serviceSlugs: [
      "commercial-electrical",
      "troubleshooting-repairs",
      "residential-electrical",
      "panel-service-upgrades",
    ],
    coords: { lat: 33.6803, lng: -116.1739 },
    tier: "secondary",
    focus: "Equipment circuits, family-home repairs, small-commercial service, and panel planning.",
    fieldNote:
      "Equipment circuits do not forgive guesswork. Conductor size, protection, disconnects, routing, and the real duty cycle all matter when a circuit works every day.",
    utility: "Confirm the serving utility for the property; IID is primary across much of the city.",
    permitAuthority: "City of Coachella Building & Safety Division",
    permitUrl: "https://www.coachella.org/departments/development-services/building-division",
    localFaq: {
      question: "Can you fix outlets or lights that stopped working in Coachella?",
      answer:
        "Yes. We troubleshoot outlets, switches, lights, breakers, GFCI devices, and circuit issues so the repair targets the actual fault.",
    },
  },
] as const;

export const serviceAreaNames = serviceAreaCities.map((area) => area.city);

export const serviceAreaBySlug = Object.fromEntries(
  serviceAreaCities.map((area) => [area.slug, area]),
) as Record<string, ServiceAreaCity>;
