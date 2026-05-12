<!-- V1.0.3 -->

1. i want to add two floating button for click-to-chat whatsapp on the bottom right of the website, one for sales, and one for technical support, the sales button will open whatsapp chat with number +6282299059443 and the technical support button will open whatsapp chat with number +6281220311818

2. i want on the hero section is using an image background, and the text is on the left side, for the image you can use image on this link "https://banyumandirisejahtera.com/wp-content/uploads/2026/02/1-1.png"

3. please edit image used on the header logo icon to transparent background and the size must be appropriate for the header logo icon.

4. i want to add a new sections below the "Tentang Kami" section at the landing page. for the design layout you can refer to image on the folder "./images-reference/sections-references.png"

5. i want to add new sections for portfolio above of the "Insights" section at the landing page. i want to using a carousel card for the portfolio

6. on the contact screen, i want to change the contact detail with :
    - Sales : +62 822-9905-9443 (WhatsApp)
    - Technical Support : +62 812-2031-1818 (WhatsApp)
    - Our Office : (021) - 89095836
    - Email : banyumandirisejahtera@gmail.com

<!-- V1.0.2 -->

# INSTRUCTIONS

1. i want add a new menu on header, that's it "Produk"

2. And i want for the "Layanan" menu is have a mega menu that inside of the menu there is a list of services, for the layout and design you can refer to the image on "./images-reference/megamenu-layanan.png"

3. for the "Produk" menu, i want it to have a mega menu that inside of the menu there is a list of products, for the layout and design you can refer to the image on "./images-reference/megamenu-produk.png"

4. i want to chage the header logo to image, for the logo you can use image on the "./images-reference/logo-landscape.png"

5. i want when on mobile device, the menu is hidden and changed to a hamburger icon, when user click the hamburger icon, it will open the mobile menu and show all of menu.

6. i want to add new section on the landing page, it just below the header, that's it "Promo" section, i want to use slider for the promo, and the image of the promo you can use image on the "./images-reference/landingpage-banner.png"

<!-- V1.0.1 -->

You are a senior frontend engineer and UI designer.

I want you to refactor and restyle my existing website into a modern industrial company profile design for a water pump and hydrant business.

## Brand Identity

- Industry: Water pump supplier, fire hydrant systems, industrial services
- Style: Professional, industrial, clean, trustworthy

## Color Theme

Use the following design system consistently:

Primary: #2F5FA7 (deep blue)
Secondary: #4F79B9 (soft blue)
Accent (CTA): #F2B705 (golden yellow)

Backgrounds:

- Main: #FFFFFF
- Section: #F7F9FC
- Divider: #EDEDED

Text:

- Primary: #1F2A44
- Secondary: #4A5568
- Inverse: #FFFFFF

Buttons:

- Primary: #2F5FA7 (hover: #244C87)
- CTA: #F2B705 (hover: #D99E04)

## UI Guidelines

- Use TailwindCSS for styling
- Apply consistent spacing and layout
- Use rounded corners (8px–12px)
- Add subtle shadows for cards and sections
- Use blue tones for structure (navbar, footer, sections)
- Use yellow ONLY for call-to-action elements (buttons, highlights)

## Components to Update

- Navbar (clean, sticky, blue theme)
- Hero section (strong headline + CTA button)
- Services section (card-based layout)
- About section (split layout with image)
- Blog section (modern card grid)
- Contact form (clean and minimal)
- Footer (dark blue background)

## Additional Enhancements

- Add hover effects on buttons and cards
- Improve typography hierarchy
- Ensure mobile responsiveness
- Optimize for SEO (semantic HTML)

## Output

- Refactor existing components
- Show updated Tailwind classes
- Keep code clean and reusable

# EXTRA INSTRUCTIONS

- Use subtle gradient backgrounds using blue tones (e.g., linear-gradient from #2F5FA7 to #4F79B9) for hero sections.

- i want to have a hero sections on the first of page landing page

<!-- v1.0.0 -->

You are a senior full-stack engineer.

Before doing this instruction, please use your "ui-ux-pro-max", "frontend-design", "supabase-postgres-best-practices" and "brainstorming-" skills.

I want you to scaffold a production-ready monorepo project for a company profile website for a water pump business. The business includes:

- Water pump supplier
- Pump installation & maintenance services
- Fire hydrant systems
- Industrial fluid solutions

## Tech Stack Requirements

- Monorepo using Turborepo or Nx
- Frontend (public website): Next.js (App Router) + TypeScript + TailwindCSS
- Admin panel (CMS): Next.js (separate app) OR React + Vite
- Backend / CMS: Supabase (PostgreSQL + Auth + Storage)
- State management: Zustand (if needed)
- Form handling: React Hook Form
- Deployment target: Vercel (for web + admin)

## Monorepo Structure

- apps/web → public company profile website
- apps/admin → admin CMS dashboard
- packages/ui → shared UI components
- packages/config → shared configs (eslint, tsconfig, etc.)
- packages/lib → shared utilities (API clients, Supabase client)

## Features - Public Website (apps/web)

- Homepage (hero, services, CTA)
- About Us page
- Services page (dynamic from Supabase)
- Blog page (list + detail, SEO optimized)
- Contact page (form → stored in Supabase)
- Responsive design (mobile-first)
- SEO optimization (meta tags, sitemap, OpenGraph)

## Features - Admin Panel (apps/admin)

- Authentication (Supabase Auth)
- Dashboard
- CRUD:
  - Services
  - Blog posts
  - Categories
  - Contact submissions (read-only)
- Rich text editor for blog content
- Image upload (Supabase Storage)
- Role-based access (optional but preferred)

## Supabase Setup

Design database schema:

- services (id, title, description, image, created_at)
- blog_posts (id, title, slug, content, featured_image, created_at, category_id)
- categories (id, name)
- contacts (id, name, email, message, created_at)

Also:

- Generate Supabase client setup
- Include environment variable handling
- Use Row Level Security (RLS) policies

## Additional Requirements

- Clean, scalable folder structure
- Reusable components (cards, layout, buttons)
- Use server components where appropriate (Next.js)
- API abstraction layer for Supabase
- Basic loading and error states
- Code should be readable and well-structured

## Output

- Generate full project structure
- Include key files with code:
  - package.json (root + apps)
  - turbo.json or nx.json
  - Next.js configs
  - Supabase client setup
  - Example CRUD implementation
- Include setup instructions (step-by-step)
- Include environment variables example (.env)

Focus on best practices, scalability, and clean architecture.
