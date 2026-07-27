# V12 Electric image-to-code analysis

## Sources

- Primary desktop reference: `mockups/v12-electric-landing-03-editorial-field.png`
- Responsive extraction reference: `design-references/mobile-hero-reference.png`
- Brand colors: Deep Navy `#0D1B2A`, Electric Blue `#0066FF`, White `#FFFFFF`, Charcoal `#1F2937`
- Display type target: Bebas Neue Pro Italic character
- UI and body type target: Montserrat

## Direction lock

- Theme paradigm: Pristine Light Mode
- Background character: pure solid white with very subtle cool-blue section tints
- Typography character: compressed statement typography
- Hero architecture: asymmetric split hero
- Section system: alternating editorial blocks
- Signature components:
  1. layered diagonal image crop frames
  2. off-grid editorial layout
  3. vertical rhythm lines
  4. split testimonial quote wall
- Motion-implied cues:
  1. staggered float-up energy
  2. parallax image drift energy

## Page hierarchy

1. Compact navigation
2. Asymmetric hero
3. Power, Lighting, Design proof band
4. Manifesto split with conduit photography
5. Three-image services gallery
6. Full-width featured lighting project
7. Panel-upgrade story
8. Three-part process
9. Split testimonial
10. Electric-blue closing CTA
11. Multi-column footer

## Layout extraction

- Desktop frame uses a 12-column editorial grid and a maximum content width near 1440 px.
- Header height is approximately 72 px with generous left and right gutters.
- Hero is a 40/60 split. Copy occupies the left side and the image occupies the right.
- The hero image has a strong diagonal leading edge plus a thin parallel Electric Blue rule.
- Hero copy stays within three display lines at large desktop sizes. Supporting copy is no more than four short lines.
- Primary and secondary CTAs sit together beneath the supporting copy.
- The proof band spans edge to edge and has three evenly distributed service names separated by vertical blue rules.
- Manifesto section uses text on the left and a large 4:3 construction image on the right.
- Services use three equal media widths, but the section is not card-heavy. Images sit directly over labels and short descriptions.
- Featured project is a full-bleed panoramic image with no overlaid text.
- Panel story returns to a two-column composition, with the image smaller than the copy block.
- Process is a horizontal three-part sequence with large italic blue numerals and angular separators.
- Testimonial is a 50/50 split between quote and finished-room photography.
- CTA is a flat Electric Blue band with a large italic statement, concise support line, and white button.
- Footer returns to white and uses four restrained columns.

## Typography extraction

- Display headings are condensed, heavy, italic, uppercase, and Deep Navy.
- Display tracking is tight, with line-height between 0.88 and 0.95.
- Hero scale should clamp from roughly 3.8rem on mobile to 7.5rem on large desktop.
- Section headlines should clamp from roughly 2.6rem to 5rem.
- Body copy uses Montserrat at 16-18 px with 1.65 line-height and Charcoal at reduced opacity.
- Navigation and buttons use Montserrat Bold at 12-14 px.
- Small section labels are rare and use Electric Blue.

## Color and material extraction

- White is the dominant canvas.
- Deep Navy is reserved for display type, navigation, and footer emphasis.
- Electric Blue is the only accent. It appears in CTAs, rules, process numerals, icons, and the closing band.
- Cool-blue tints may be used for the proof band and testimonial copy panel.
- Shadows are minimal. Depth comes from photography, cropping, and spacing.
- Borders are thin, cool, and functional.

## Component extraction

- Primary button: Electric Blue fill, white label, compact pill radius, 46-52 px height.
- Secondary button: white fill, Electric Blue 1.5 px stroke, Electric Blue label.
- Image frames: mostly sharp with 0-4 px radius.
- Navigation: logo left, five links centered/right, primary CTA at far right.
- Mobile navigation: logo left, three-line menu button right, modal-style menu reveal.
- Mobile hero: stacked copy, full-width CTAs, then a large diagonal-cropped image.

## Spacing extraction

- Desktop side gutters: clamp from 28 px to 72 px.
- Hero gap between headline and body: 24-32 px.
- Hero gap between body and buttons: 28-36 px.
- Major section vertical spacing: 96-144 px.
- Gallery gaps: 18-24 px.
- Text column line length: approximately 42-58 characters.
- Mobile side gutter: 20-24 px.
- Mobile section spacing: 72-96 px.

## Responsive behavior

- At widths below 900 px, split sections become single-column.
- Mobile hero retains text-first order and places photography after CTAs.
- The proof band becomes a stacked or horizontally scrollable list without tiny text.
- Service gallery becomes a vertical stack with fixed 4:3 images.
- Process becomes a vertical sequence with a left-side blue rule.
- Testimonial shows quote first, then image.
- Closing CTA stacks copy and button.
- Navigation collapses to an accessible menu.

## Interaction translation

- Hero copy and nav receive a restrained staggered reveal on first load.
- Section groups reveal with `IntersectionObserver`, moving only opacity and transform.
- Featured project and large images receive subtle transform-only drift.
- Buttons use a physical 1-2 px press and directional arrow movement.
- All motion is disabled under `prefers-reduced-motion`.

## Implementation safeguards

- Preserve the exact section order and editorial rhythm from mockup #3.
- Keep the hero readable on a 1366 x 768 laptop.
- Do not introduce generic cards, gradient text, glass panels, fake statistics, fake client logos, or decorative badges.
- Generated contact details, license numbers, testimonials, and project names from the concept are placeholders and must not be represented as verified facts.
- The supplied raster logo is temporary until a production vector master is delivered.
