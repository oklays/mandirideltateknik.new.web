create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role in ('admin', 'editor')
  );
$$;

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  description text not null,
  image_path text,
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  featured_image_path text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  category_id uuid references public.categories(id) on delete set null,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  tagline text not null,
  whatsapp text not null,
  email text not null,
  address text not null,
  hero_title text not null,
  hero_subtitle text not null,
  seo_defaults jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  full_name text,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists services_sort_order_idx on public.services (sort_order);
create index if not exists blog_posts_status_published_at_idx on public.blog_posts (status, published_at desc);
create index if not exists contacts_created_at_idx on public.contacts (created_at desc);

create trigger services_set_updated_at
before update on public.services
for each row
execute function public.set_updated_at();

create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at();

create trigger site_settings_set_updated_at
before update on public.site_settings
for each row
execute function public.set_updated_at();

alter table public.services enable row level security;
alter table public.categories enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contacts enable row level security;
alter table public.site_settings enable row level security;
alter table public.profiles enable row level security;

create policy "services_public_read"
on public.services
for select
using (true);

create policy "services_staff_write"
on public.services
for all
using (public.is_staff())
with check (public.is_staff());

create policy "categories_public_read"
on public.categories
for select
using (true);

create policy "categories_staff_write"
on public.categories
for all
using (public.is_staff())
with check (public.is_staff());

create policy "blog_posts_public_read_published"
on public.blog_posts
for select
using (status = 'published');

create policy "blog_posts_staff_write"
on public.blog_posts
for all
using (public.is_staff())
with check (public.is_staff());

create policy "contacts_public_insert"
on public.contacts
for insert
with check (true);

create policy "contacts_staff_read"
on public.contacts
for select
using (public.is_staff());

create policy "site_settings_public_read"
on public.site_settings
for select
using (true);

create policy "site_settings_staff_write"
on public.site_settings
for all
using (public.is_staff())
with check (public.is_staff());

create policy "profiles_staff_read"
on public.profiles
for select
using (public.is_staff() or auth.uid() = id);

create policy "profiles_staff_write"
on public.profiles
for all
using (public.is_staff())
with check (public.is_staff());

insert into storage.buckets (id, name, public)
values ('marketing-assets', 'marketing-assets', true)
on conflict (id) do nothing;

create policy "storage_public_read"
on storage.objects
for select
using (bucket_id = 'marketing-assets');

create policy "storage_staff_insert"
on storage.objects
for insert
with check (bucket_id = 'marketing-assets' and public.is_staff());

create policy "storage_staff_update"
on storage.objects
for update
using (bucket_id = 'marketing-assets' and public.is_staff())
with check (bucket_id = 'marketing-assets' and public.is_staff());

create policy "storage_staff_delete"
on storage.objects
for delete
using (bucket_id = 'marketing-assets' and public.is_staff());

