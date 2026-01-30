-- Create a table to track daily usage per user
create table if not exists public.user_usage (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  date date not null default current_date,
  count int default 0,
  
  -- Create a composite unique constraint so each user has only one row per date
  unique(user_id, date)
);

-- Enable RLS
alter table public.user_usage enable row level security;

-- Policies
create policy "Users can view their own usage"
  on public.user_usage for select
  using (auth.uid() = user_id);

create policy "Users can update their own usage"
  on public.user_usage for update
  using (auth.uid() = user_id);

create policy "Users can insert their own usage"
  on public.user_usage for insert
  with check (auth.uid() = user_id);

-- Create an index for faster lookups
create index idx_user_usage_date on public.user_usage(user_id, date);
