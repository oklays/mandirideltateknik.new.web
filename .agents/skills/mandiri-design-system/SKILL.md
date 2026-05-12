---
name: mandiri-design-system
description: Use this skill whenever working on the Mandiri Delta Teknik website design, layout, content, theme, service pages, landing page sections, cards, CTAs, or Indonesian copy. It preserves the Industrial Clean Mandiri design system for a B2B water pump supplier and keeps implementation aligned with the existing Next.js + Material UI v4 codebase.
---

# Mandiri Design System

Use this skill for future edits to the PT. Mandiri Delta Teknik website.

## Visual Direction

- Keep the site in the **Industrial Clean Mandiri** direction: professional B2B, technical, clear, and trustworthy.
- Use the code theme as the source of truth: `theme/appTheme.js`, `theme/palette.js`, and `theme/common.js`.
- **Font stack**: Display/headings → **Montserrat** (weights 700–900, uppercase with letter-spacing); Body/UI → **Plus Jakarta Sans** (weights 400–700). Both loaded via `next/font/google` in `layout.tsx` as `--font-display` and `--font-body` CSS variables.
- Prefer deep navy/steel surfaces, water-blue primary actions, safety amber CTAs, clean white cards, restrained borders, and real pump/project imagery.
- Avoid generic agency-template visuals, decorative clutter, purple gradients, oversized rounded blobs, and marketing copy that does not match a pump supplier.
- Do **not** reintroduce Bebas Neue or IBM Plex Sans — the new Montserrat + Plus Jakarta Sans pairing is the approved standard.

## Layout Rules

- Maintain the main landing flow: hero, brand trust logos, about, services, expertise, articles, clients/testimonials, documentation, CTA/contact, footer.
- Keep section spacing consistent and calm. B2B visitors should be able to scan services quickly.
- Cards use stable dimensions, fixed image ratios, short descriptions, and a clear action button.
- CTAs should lead to WhatsApp or a relevant detail page. Use direct labels such as `Konsultasi via WhatsApp`, `Lihat Detail`, and `Minta Penawaran`.
- Preserve existing routes, images, customer names, service categories, brand logos, and WhatsApp contacts unless the user explicitly changes them.

## Copy Tone

- Write visible content in natural Indonesian.
- Preserve the business facts: PT. Mandiri Delta Teknik supplies/distributes pompa air industri, sparepart, panel listrik, filter, elektrik motor, plumbing/installation, hydrant/booster/transfer pumps, and repair/maintenance services.
- Keep the tone practical and specific. Prefer clear benefits and service details over vague claims.
- Remove placeholder/template phrases such as `Luxiren`, `Cras`, `Sed`, generic English nav labels, or fake agency copy.

## Implementation Checks

- Keep using Next.js 11, React 17, and Material UI v4 patterns already present in the repo.
- Do not introduce a major design-system dependency for routine edits.
- When editing detail content, keep JSON values as clean article fragments, not full HTML documents.
- Style article/detail content from page styles, not inline HTML style blocks.
- After changes, run the project build and check that the landing page, service cards, article cards, detail pages, footer, and WhatsApp buttons still render.
