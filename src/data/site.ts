export const services = [
  {
    slug: "electrical-systems",
    icon: "power",
    title: "Electrical Systems",
    shortTitle: "Power",
    summary: "Panels, wiring, and complete electrical systems planned around the way your space works.",
    image: "/images/electrical-systems.webp",
    alt: "Electrician completing a carefully organized electrical panel installation",
    intro:
      "A dependable electrical system starts with clear planning. We coordinate loads, equipment, routing, and future needs before installation begins.",
    inclusions: [
      "Service and panel upgrades",
      "New construction wiring",
      "Remodel and addition wiring",
      "Dedicated equipment circuits",
      "Troubleshooting and corrections",
      "Whole-project electrical coordination",
    ],
    closing: "Power should feel effortless because the planning behind it was thorough.",
  },
  {
    slug: "lighting-solutions",
    icon: "lighting",
    title: "Lighting Solutions",
    shortTitle: "Lighting",
    summary: "Layered ambient, task, and architectural lighting that brings the whole space to life.",
    image: "/images/lighting-solutions.webp",
    alt: "Layered pendant and task lighting in a contemporary kitchen",
    intro:
      "Good lighting is both technical and emotional. We coordinate fixture locations, switching, controls, color temperature, and light levels as one complete system.",
    inclusions: [
      "Interior and exterior lighting",
      "Recessed and architectural lighting",
      "Decorative fixture installation",
      "Dimming and control systems",
      "Landscape and security lighting",
      "Lighting layout coordination",
    ],
    closing: "The right light makes the architecture, materials, and daily experience work together.",
  },
  {
    slug: "design-planning",
    icon: "design",
    title: "Design & Planning",
    shortTitle: "Design",
    summary: "Thoughtful electrical planning coordinated with owners, builders, and design teams from day one.",
    image: "/images/design-planning.webp",
    alt: "Electrical design being marked on an architectural plan",
    intro:
      "The best time to solve an electrical problem is before the walls close. We translate the way you will use the space into a coordinated, buildable plan.",
    inclusions: [
      "Plan and specification review",
      "Fixture and device coordination",
      "Load and equipment planning",
      "Builder and designer collaboration",
      "Pre-construction walkthroughs",
      "Future-ready infrastructure planning",
    ],
    closing: "Early coordination protects the design intent and keeps installation moving.",
  },
] as const;

export const projects = [
  {
    title: "Layered Kitchen Lighting",
    category: "Lighting + Controls",
    image: "/images/featured-kitchen.webp",
    alt: "Contemporary kitchen with layered architectural and task lighting",
    description: "Ambient, task, and decorative lighting coordinated as a single system.",
  },
  {
    title: "Service & Panel Modernization",
    category: "Electrical Systems",
    image: "/images/panel-upgrade.webp",
    alt: "Modern electrical panel with organized conductors",
    description: "A cleaner, safer electrical backbone designed for current and future demand.",
  },
  {
    title: "New-Build Coordination",
    category: "Design & Planning",
    image: "/images/conduit-installation.webp",
    alt: "Organized conduit installation inside a framed commercial wall",
    description: "Careful routing and trade coordination before the walls close.",
  },
] as const;

export const navItems = [
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/about/" },
  { label: "Process", href: "/process/" },
  { label: "Contact", href: "/contact/" },
] as const;
