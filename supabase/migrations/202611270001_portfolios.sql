-- ---------------------------------------------------------------------------
-- Portfolio module
--
-- Relational persistence for model portfolios, constituents, methodology,
-- performance, reviews and bookmarks. The public site currently reads the
-- generated JSON artifacts under public/data/portfolios; these tables are the
-- durable shape for syncing that data and for user bookmarks.
-- ---------------------------------------------------------------------------

create table if not exists public.portfolio_categories (
  slug text primary key,
  name text not null,
  description text,
  icon text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

insert into public.portfolio_categories (slug, name, description, icon, sort_order)
values
  ('quantitative', 'Quantitative', 'Systematic factor and multi-variable models.', 'sigma', 1),
  ('thematic', 'Thematic', 'Structural themes built from direct company exposure.', 'sparkles', 2),
  ('sector', 'Sector', 'Sector-focused US equity baskets.', 'layers', 3),
  ('fundamental', 'Fundamental', 'Research-covered companies screened on reported economics.', 'badge-check', 4),
  ('technical', 'Technical', 'Trend, relative strength and momentum models.', 'trending-up', 5),
  ('single-factor', 'Single-Factor', 'Pure value, growth, quality, momentum and low volatility.', 'target', 6),
  ('multi-factor', 'Multi-Factor', 'Blended factor portfolios with explicit weights.', 'boxes', 7),
  ('growth', 'Growth', 'Growth-first strategies with quality controls.', 'rocket', 8),
  ('value', 'Value', 'Valuation-led strategies with quality and trend checks.', 'scale', 9),
  ('quality-dividend', 'Quality & Dividend', 'Cash-generative and income-oriented quality.', 'gauge', 10),
  ('defensive', 'Defensive', 'Lower-volatility and resilience-focused strategies.', 'shield', 11),
  ('small-mid-cap', 'Small & Mid Cap', 'Smaller-cap strategies with liquidity controls.', 'sprout', 12)
on conflict (slug) do nothing;

create table if not exists public.portfolios (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null unique,
  description text not null,
  primary_category text not null references public.portfolio_categories(slug),
  tags text[] not null default '{}'::text[],
  strategy_type text not null,
  investment_thesis text not null,
  focus text,
  risks text,
  benchmark_id text not null,
  minimum_investment numeric(14, 2) not null default 5000,
  volatility_level text not null default 'Medium'
    check (volatility_level in ('Low', 'Medium', 'High')),
  rebalance_frequency text not null default 'Quarterly'
    check (rebalance_frequency in ('Monthly', 'Quarterly')),
  number_of_holdings integer not null default 0,
  concentration_limit numeric(6, 3),
  max_sector_weight numeric(6, 3),
  status text not null default 'published'
    check (status in ('draft', 'published', 'archived')),
  methodology_version text not null,
  popularity integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.portfolio_methodology (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  methodology_version text not null,
  selection_criteria jsonb not null default '[]'::jsonb,
  growth_weight numeric(6, 3) not null default 0,
  quality_weight numeric(6, 3) not null default 0,
  valuation_weight numeric(6, 3) not null default 0,
  technical_weight numeric(6, 3) not null default 0,
  position_sizing_method text,
  concentration_limit numeric(6, 3),
  max_sector_weight numeric(6, 3),
  rebalance_rules jsonb not null default '{}'::jsonb,
  effective_date date not null default current_date,
  created_at timestamptz not null default now(),
  unique (portfolio_id, methodology_version)
);

create table if not exists public.portfolio_constituents (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  ticker text not null,
  company_name text not null,
  company_id uuid references public.companies(id) on delete set null,
  weight numeric(9, 6) not null check (weight > 0 and weight <= 1),
  sector text,
  market_cap numeric(24, 2),
  market_cap_category text,
  selection_rationale text,
  added_date date not null default current_date,
  status text not null default 'active'
    check (status in ('active', 'removed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (portfolio_id, ticker)
);

create table if not exists public.portfolio_performance (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  price_date date not null,
  portfolio_value numeric(18, 6),
  portfolio_return numeric(12, 6),
  benchmark_id text not null,
  benchmark_value numeric(18, 6),
  benchmark_return numeric(12, 6),
  data_source text,
  return_type text not null default 'simulated'
    check (return_type in ('actual', 'backtested', 'simulated', 'demo')),
  created_at timestamptz not null default now(),
  unique (portfolio_id, price_date, benchmark_id, return_type)
);

create table if not exists public.portfolio_rebalances (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  rebalance_date date not null,
  next_rebalance_date date,
  frequency text not null check (frequency in ('Monthly', 'Quarterly')),
  changes_summary text,
  status text not null default 'executed'
    check (status in ('proposed', 'executed', 'cancelled')),
  methodology_version text,
  created_at timestamptz not null default now(),
  unique (portfolio_id, rebalance_date, status)
);

create table if not exists public.portfolio_rebalance_changes (
  id uuid primary key default gen_random_uuid(),
  rebalance_id uuid not null references public.portfolio_rebalances(id) on delete cascade,
  ticker text not null,
  action text not null check (action in ('add', 'remove', 'increase', 'reduce')),
  previous_weight numeric(9, 6),
  new_weight numeric(9, 6),
  reason text,
  evidence jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (rebalance_id, ticker, action)
);

create table if not exists public.portfolio_reports (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  report_content jsonb not null,
  methodology_version text not null,
  generated_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (portfolio_id, methodology_version)
);

create table if not exists public.portfolio_universe_snapshots (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  universe_snapshot_date date not null,
  eligible_company_count integer,
  selected_company_count integer,
  coverage_universe_version text,
  methodology_version text not null,
  created_at timestamptz not null default now(),
  unique (portfolio_id, universe_snapshot_date, methodology_version)
);

create table if not exists public.portfolio_score_snapshots (
  id uuid primary key default gen_random_uuid(),
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  ticker text not null,
  snapshot_date date not null,
  growth_score numeric(6, 2),
  quality_score numeric(6, 2),
  valuation_score numeric(6, 2),
  technical_score numeric(6, 2),
  composite_score numeric(6, 2),
  rank integer,
  selected boolean not null default false,
  created_at timestamptz not null default now(),
  unique (portfolio_id, ticker, snapshot_date)
);

create table if not exists public.portfolio_bookmarks (
  user_id uuid not null references auth.users(id) on delete cascade,
  portfolio_id uuid not null references public.portfolios(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, portfolio_id)
);

create index if not exists portfolios_category_idx
  on public.portfolios (primary_category, popularity);
create index if not exists portfolio_constituents_portfolio_idx
  on public.portfolio_constituents (portfolio_id, weight desc);
create index if not exists portfolio_performance_portfolio_idx
  on public.portfolio_performance (portfolio_id, price_date);
create index if not exists portfolio_rebalances_portfolio_idx
  on public.portfolio_rebalances (portfolio_id, rebalance_date desc);
create index if not exists portfolio_score_snapshots_portfolio_idx
  on public.portfolio_score_snapshots (portfolio_id, snapshot_date desc);
create index if not exists portfolio_bookmarks_user_idx
  on public.portfolio_bookmarks (user_id, created_at desc);

-- Keep updated_at current. The initial schema defines public.set_updated_at().
do $$
declare
  target text;
begin
  foreach target in array array['portfolios', 'portfolio_constituents', 'portfolio_reports']
  loop
    execute format(
      'drop trigger if exists %I_set_updated_at on public.%I',
      target,
      target
    );
    execute format(
      'create trigger %I_set_updated_at before update on public.%I for each row execute function public.set_updated_at()',
      target,
      target
    );
  end loop;
end;
$$;

alter table public.portfolio_categories enable row level security;
alter table public.portfolios enable row level security;
alter table public.portfolio_methodology enable row level security;
alter table public.portfolio_constituents enable row level security;
alter table public.portfolio_performance enable row level security;
alter table public.portfolio_rebalances enable row level security;
alter table public.portfolio_rebalance_changes enable row level security;
alter table public.portfolio_reports enable row level security;
alter table public.portfolio_universe_snapshots enable row level security;
alter table public.portfolio_score_snapshots enable row level security;
alter table public.portfolio_bookmarks enable row level security;

drop policy if exists "public read portfolio_categories" on public.portfolio_categories;
create policy "public read portfolio_categories" on public.portfolio_categories
  for select using (true);

drop policy if exists "public read portfolios" on public.portfolios;
create policy "public read portfolios" on public.portfolios
  for select using (true);

drop policy if exists "public read portfolio_methodology" on public.portfolio_methodology;
create policy "public read portfolio_methodology" on public.portfolio_methodology
  for select using (true);

drop policy if exists "public read portfolio_constituents" on public.portfolio_constituents;
create policy "public read portfolio_constituents" on public.portfolio_constituents
  for select using (true);

drop policy if exists "public read portfolio_performance" on public.portfolio_performance;
create policy "public read portfolio_performance" on public.portfolio_performance
  for select using (true);

drop policy if exists "public read portfolio_rebalances" on public.portfolio_rebalances;
create policy "public read portfolio_rebalances" on public.portfolio_rebalances
  for select using (true);

drop policy if exists "public read portfolio_rebalance_changes" on public.portfolio_rebalance_changes;
create policy "public read portfolio_rebalance_changes" on public.portfolio_rebalance_changes
  for select using (true);

drop policy if exists "public read portfolio_reports" on public.portfolio_reports;
create policy "public read portfolio_reports" on public.portfolio_reports
  for select using (true);

drop policy if exists "public read portfolio_universe_snapshots" on public.portfolio_universe_snapshots;
create policy "public read portfolio_universe_snapshots" on public.portfolio_universe_snapshots
  for select using (true);

drop policy if exists "public read portfolio_score_snapshots" on public.portfolio_score_snapshots;
create policy "public read portfolio_score_snapshots" on public.portfolio_score_snapshots
  for select using (true);

drop policy if exists "portfolio bookmarks are owner only" on public.portfolio_bookmarks;
create policy "portfolio bookmarks are owner only" on public.portfolio_bookmarks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select on public.portfolio_categories to anon, authenticated;
grant select on public.portfolios to anon, authenticated;
grant select on public.portfolio_methodology to anon, authenticated;
grant select on public.portfolio_constituents to anon, authenticated;
grant select on public.portfolio_performance to anon, authenticated;
grant select on public.portfolio_rebalances to anon, authenticated;
grant select on public.portfolio_rebalance_changes to anon, authenticated;
grant select on public.portfolio_reports to anon, authenticated;
grant select on public.portfolio_universe_snapshots to anon, authenticated;
grant select on public.portfolio_score_snapshots to anon, authenticated;
grant select, insert, delete on public.portfolio_bookmarks to authenticated;
grant all privileges on public.portfolio_categories to service_role;
grant all privileges on public.portfolios to service_role;
grant all privileges on public.portfolio_methodology to service_role;
grant all privileges on public.portfolio_constituents to service_role;
grant all privileges on public.portfolio_performance to service_role;
grant all privileges on public.portfolio_rebalances to service_role;
grant all privileges on public.portfolio_rebalance_changes to service_role;
grant all privileges on public.portfolio_reports to service_role;
grant all privileges on public.portfolio_universe_snapshots to service_role;
grant all privileges on public.portfolio_score_snapshots to service_role;
grant all privileges on public.portfolio_bookmarks to service_role;
