# Mandiri Delta Teknik Monorepo

Monorepo company profile platform for PT Mandiri Delta Teknik built with Turborepo, Next.js, Tailwind CSS, and Supabase.

## Stack

- `apps/web`: public company profile site
- `apps/admin`: authenticated CMS dashboard
- `packages/ui`: shared UI primitives
- `packages/lib`: shared data layer, Supabase helpers, validation, and seed fallbacks
- `packages/config`: shared TypeScript and ESLint config

## Getting Started

1. Copy `.env.example` to `.env`.
2. Fill in your Supabase project keys and site URLs.
3. Install dependencies:

```bash
pnpm install
```

4. Apply the database migration and seed:

```bash
supabase db reset
```

5. Start the workspace:

```bash
pnpm dev
```

6. Open:
   - Web: `http://localhost:3000`
   - Admin: `http://localhost:3001`

## Useful Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Supabase Setup

- Create a new Supabase project.
- Add the keys from the project settings into `.env`.
- Create at least one auth user in Supabase Auth.
- Insert a matching row into `profiles` with role `admin`.
- Create the public storage bucket `marketing-assets` if you are not using the included migration flow.

## Deployment

- Deploy `apps/web` and `apps/admin` to separate Vercel projects.
- Reuse the same Supabase backend for both apps.
- Set the environment variables in both Vercel projects.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.

## Notes

- The repo ships with seed fallback content so the UI can render before Supabase is configured.
- In demo mode without Supabase credentials, the admin stays navigable but write actions that require storage will be unavailable.

