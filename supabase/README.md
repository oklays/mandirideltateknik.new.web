# Supabase Notes

## Local Workflow

```bash
supabase start
supabase db reset
```

The migration creates:

- core CMS tables
- indexes for slugs, publish filtering, and contact ordering
- RLS policies for public reads and staff writes
- a public storage bucket for marketing assets

## Admin Access

1. Create a user in Supabase Auth.
2. Copy the user UUID.
3. Insert a matching profile row:

```sql
insert into public.profiles (id, role, full_name)
values ('YOUR_AUTH_USER_ID', 'admin', 'Admin BMS');
```

## Buckets

The repo assumes the bucket name `marketing-assets`, which is also configurable through `SUPABASE_STORAGE_BUCKET`.

