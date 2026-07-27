# V12 Electric

Responsive Astro site translated from the approved **Editorial Field** image mockup and the
slanted Electric Blue geometry of the **Precision Grid** direction.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

The static output is written to `dist/`.

## Routes

- `/` — Landing page
- `/services/` — Services overview
- `/services/electrical-systems/`
- `/services/lighting-solutions/`
- `/services/design-planning/`
- `/projects/`
- `/about/`
- `/process/`
- `/contact/`

## Brand implementation

- Deep Navy: `#0D1B2A`
- Electric Blue: `#0066FF`
- White: `#FFFFFF`
- Charcoal: `#1F2937`
- Display: Bebas Neue with a synthesized italic treatment to approximate the proposed Bebas Neue Pro Italic direction
- UI and body: Montserrat

## Project notes

- The current raster logo is treated as temporary source artwork. Replace `public/images/v12-electric-logo-source.png` with the approved vector export when it is ready.
- Contact details, license information, service area specifics, and testimonials were intentionally not invented.
- The contact form UI is scaffolded and validated in the browser, but still needs an email or CRM endpoint before launch.
- Optimized WebP project photography lives under `public/images/`; lossless source renders are retained under `design-references/source-assets/`.
- The design extraction and responsive decisions are documented in `design-references/DESIGN_ANALYSIS.md`.
