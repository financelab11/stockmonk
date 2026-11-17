-- Stockmonk database schema
-- Covers US, India and GCC coverage, prices, statements, consensus, reports,
-- news, watchlists and the forward-growth ranker.
--
-- Idempotent: safe to run against a fresh Supabase project or an existing one.

create extension if not exists pgcrypto;
create extension if not exists pg_cron;

-- ---------------------------------------------------------------------------
-- Core reference data
-- ---------------------------------------------------------------------------

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  market text not null check (market in ('US', 'IN', 'GCC')),
  ticker text not null,
  name text not null,
  legal_name text,
  description text,
  sector text,
  industry text,
  employees integer,
  isin text,
  cik text,
  website text,
  hq text,
  founded text,
  currency text not null default 'USD',
  quote_currency text,
  exchange text,
  is_research boolean not null default false,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (market, ticker)
);

create table if not exists public.company_aliases (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  alias text not null,
  source text,
  created_at timestamptz not null default now(),
  unique (company_id, alias)
);

create table if not exists public.coverage_groups (
  id text primary key,
  name text not null,
  short_name text,
  market text,
  blurb text,
  sort_order integer not null default 0
);

create table if not exists public.coverage_group_members (
  group_id text not null references public.coverage_groups(id) on delete cascade,
  company_id uuid not null references public.companies(id) on delete cascade,
  primary key (group_id, company_id)
);

-- ---------------------------------------------------------------------------
-- Market data
-- ---------------------------------------------------------------------------

create table if not exists public.prices_daily (
  company_id uuid not null references public.companies(id) on delete cascade,
  price_date date not null,
  close numeric(20, 4) not null,
  open numeric(20, 4),
  high numeric(20, 4),
  low numeric(20, 4),
  volume bigint,
  prev_close numeric(20, 4),
  change_pct numeric(12, 6),
  market_cap numeric(24, 2),
  shares_outstanding numeric(24, 2),
  dividend_yield numeric(12, 6),
  currency text,
  source text,
  ingested_at timestamptz not null default now(),
  primary key (company_id, price_date)
);

create table if not exists public.financial_periods (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  period_type text not null check (period_type in ('annual', 'quarterly', 'ttm')),
  fiscal_year integer,
  period text,
  report_date date,
  publish_date date,
  currency text,
  revenue numeric(24, 2),
  gross_profit numeric(24, 2),
  operating_income numeric(24, 2),
  ebitda numeric(24, 2),
  net_income numeric(24, 2),
  eps_diluted numeric(20, 6),
  eps_basic numeric(20, 6),
  interest_expense numeric(24, 2),
  pretax_income numeric(24, 2),
  income_tax numeric(24, 2),
  total_assets numeric(24, 2),
  total_equity numeric(24, 2),
  total_debt numeric(24, 2),
  cash_and_investments numeric(24, 2),
  inventory numeric(24, 2),
  receivables numeric(24, 2),
  cfo numeric(24, 2),
  capex numeric(24, 2),
  free_cash_flow numeric(24, 2),
  depreciation_amortization numeric(24, 2),
  dividends_paid numeric(24, 2),
  buybacks numeric(24, 2),
  operating_margin numeric(12, 6),
  net_margin numeric(12, 6),
  fcf_margin numeric(12, 6),
  roic numeric(12, 6),
  roe numeric(12, 6),
  net_debt numeric(24, 2),
  net_debt_to_ebitda numeric(12, 6),
  source text,
  ingested_at timestamptz not null default now(),
  unique (company_id, period_type, fiscal_year, period)
);

create table if not exists public.financial_metrics (
  company_id uuid not null references public.companies(id) on delete cascade,
  as_of date not null,
  revenue_ttm numeric(24, 2),
  revenue_growth_ttm numeric(12, 6),
  revenue_growth_latest_q numeric(12, 6),
  eps_ttm numeric(20, 6),
  gross_margin numeric(12, 6),
  operating_margin numeric(12, 6),
  net_margin numeric(12, 6),
  fcf_margin numeric(12, 6),
  roic numeric(12, 6),
  roe numeric(12, 6),
  net_debt numeric(24, 2),
  net_debt_to_ebitda numeric(12, 6),
  interest_cover numeric(12, 6),
  free_cash_flow_ttm numeric(24, 2),
  ebitda_ttm numeric(24, 2),
  pe numeric(12, 6),
  forward_pe numeric(12, 6),
  ev_ebitda numeric(12, 6),
  ev_sales numeric(12, 6),
  peg numeric(12, 6),
  pfcf numeric(12, 6),
  fcf_yield numeric(12, 6),
  return_1y numeric(12, 6),
  return_ytd numeric(12, 6),
  return_5y numeric(12, 6),
  factor_chips jsonb not null default '[]'::jsonb,
  multiples_history jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (company_id, as_of)
);

create table if not exists public.segments (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  fiscal_year integer,
  segment_label text,
  segment_name text not null,
  geography text not null default 'consolidated',
  revenue numeric(24, 2),
  share numeric(12, 6),
  source_url text,
  as_of date,
  unique (company_id, fiscal_year, segment_label, segment_name, geography)
);

create table if not exists public.fx_rates (
  pair text not null,
  rate_date date not null,
  rate numeric(18, 8) not null,
  source text,
  fetched_at timestamptz not null default now(),
  primary key (pair, rate_date)
);

-- ---------------------------------------------------------------------------
-- Consensus and forward estimates
-- ---------------------------------------------------------------------------

create table if not exists public.consensus_estimates (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  provider text not null,
  as_of date not null,
  period text not null,
  end_date date,
  revenue_avg numeric(24, 2),
  revenue_high numeric(24, 2),
  revenue_low numeric(24, 2),
  eps_avg numeric(20, 6),
  eps_growth numeric(12, 6),
  revenue_growth numeric(12, 6),
  analyst_count integer,
  source_url text,
  ingested_at timestamptz not null default now(),
  unique (company_id, provider, period, end_date)
);

create table if not exists public.consensus_targets (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  provider text not null,
  as_of date not null,
  target_mean numeric(20, 4),
  target_high numeric(20, 4),
  target_low numeric(20, 4),
  recommendation_key text,
  analyst_count integer,
  distribution jsonb,
  source_url text,
  ingested_at timestamptz not null default now(),
  unique (company_id, provider, as_of)
);

create table if not exists public.forward_estimates (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null unique references public.companies(id) on delete cascade,
  ticker text not null,
  name text not null,
  sector text,
  fiscal_year_end date,
  market_cap_inr numeric(24, 2),
  market_cap_as_of date,
  base_year text,
  base_revenue_inr numeric(24, 2),
  fy1_base numeric(24, 2),
  fy1_bear numeric(24, 2),
  fy1_bull numeric(24, 2),
  fy2_base numeric(24, 2),
  fy2_bear numeric(24, 2),
  fy2_bull numeric(24, 2),
  fy3_base numeric(24, 2),
  fy3_bear numeric(24, 2),
  fy3_bull numeric(24, 2),
  cagr_base numeric(12, 6),
  cagr_bear numeric(12, 6),
  cagr_bull numeric(12, 6),
  method text not null,
  confidence text,
  valuation jsonb not null default '{}'::jsonb,
  quality jsonb not null default '{}'::jsonb,
  scores jsonb not null default '{}'::jsonb,
  consensus_check jsonb not null default '{}'::jsonb,
  evidence jsonb not null default '[]'::jsonb,
  assumptions text[] not null default '{}',
  risks text[] not null default '{}',
  historical_reference jsonb not null default '[]'::jsonb,
  segment_context jsonb not null default '[]'::jsonb,
  generated_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Editorial, news and user data
-- ---------------------------------------------------------------------------

create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete set null,
  market text not null,
  ticker text not null,
  slug text not null,
  kicker text,
  title text not null,
  dek text,
  reading_minutes integer,
  filing_url text,
  ir_url text,
  sections jsonb not null default '[]'::jsonb,
  sources jsonb not null default '[]'::jsonb,
  is_published boolean not null default false,
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (market, slug)
);

create table if not exists public.news_items (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete set null,
  market text,
  ticker text,
  tag text,
  title text not null,
  href text not null unique,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.watchlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null default 'My watchlist',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, name)
);

create table if not exists public.watchlist_items (
  watchlist_id uuid not null references public.watchlists(id) on delete cascade,
  company_id uuid not null references public.companies(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (watchlist_id, company_id)
);

-- ---------------------------------------------------------------------------
-- Operational tables
-- ---------------------------------------------------------------------------

create table if not exists public.company_snapshots (
  company_id uuid primary key references public.companies(id) on delete cascade,
  market text not null,
  ticker text not null,
  name text not null,
  sector text,
  price numeric(20, 4),
  market_cap numeric(24, 2),
  pe numeric(12, 6),
  forward_pe numeric(12, 6),
  ev_ebitda numeric(12, 6),
  peg numeric(12, 6),
  pfcf numeric(12, 6),
  roce numeric(12, 6),
  roe numeric(12, 6),
  revenue_ttm numeric(24, 2),
  revenue_growth_ttm numeric(12, 6),
  forward_cagr_3y numeric(12, 6),
  composite_score numeric(8, 2),
  as_of date,
  updated_at timestamptz not null default now()
);

create table if not exists public.ingestion_runs (
  id uuid primary key default gen_random_uuid(),
  pipeline text not null,
  status text not null check (status in ('running', 'succeeded', 'failed')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  rows_written bigint,
  error text,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.data_freshness (
  dataset text primary key,
  as_of date,
  row_count bigint,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Indexes
-- ---------------------------------------------------------------------------

create index if not exists companies_market_sector_idx on public.companies (market, sector);
create index if not exists companies_ticker_lower_idx on public.companies (lower(ticker));
create index if not exists prices_daily_date_idx on public.prices_daily (price_date desc);
create index if not exists financial_periods_company_date_idx on public.financial_periods (company_id, report_date desc);
create index if not exists consensus_estimates_company_date_idx on public.consensus_estimates (company_id, end_date);
create index if not exists forward_estimates_growth_idx on public.forward_estimates (cagr_base desc nulls last);
create index if not exists forward_estimates_score_idx on public.forward_estimates ((((scores ->> 'composite')::numeric)) desc nulls last);
create index if not exists news_items_published_idx on public.news_items (published_at desc);
create index if not exists stories_market_ticker_idx on public.stories (market, ticker);

-- ---------------------------------------------------------------------------
-- Updated-at triggers
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
declare
  target text;
begin
  foreach target in array array['companies', 'stories', 'profiles', 'watchlists', 'forward_estimates']
  loop
    execute format('drop trigger if exists %I_set_updated_at on public.%I', target, target);
    execute format(
      'create trigger %I_set_updated_at before update on public.%I for each row execute function public.set_updated_at()',
      target,
      target
    );
  end loop;
end;
$$;

-- Create a profile row for every new auth user.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Daily refresh functions
-- ---------------------------------------------------------------------------

create or replace function public.refresh_company_snapshots()
returns void
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.company_snapshots (
    company_id, market, ticker, name, sector, price, market_cap, pe, forward_pe,
    ev_ebitda, peg, pfcf, roce, roe, revenue_ttm, revenue_growth_ttm,
    forward_cagr_3y, composite_score, as_of, updated_at
  )
  select
    c.id,
    c.market,
    c.ticker,
    c.name,
    c.sector,
    lp.close,
    lp.market_cap,
    fm.pe,
    fm.forward_pe,
    fm.ev_ebitda,
    fm.peg,
    fm.pfcf,
    (fe.quality ->> 'roce')::numeric,
    coalesce(fm.roe, (fe.quality ->> 'roe')::numeric),
    fm.revenue_ttm,
    fm.revenue_growth_ttm,
    fe.cagr_base,
    (fe.scores ->> 'composite')::numeric,
    nullif(greatest(
      coalesce(lp.price_date, '1970-01-01'::date),
      coalesce(fm.as_of, '1970-01-01'::date),
      coalesce(fe.generated_at::date, '1970-01-01'::date)
    ), '1970-01-01'::date),
    now()
  from public.companies c
  left join lateral (
    select p.price_date, p.close, p.market_cap
    from public.prices_daily p
    where p.company_id = c.id
    order by p.price_date desc
    limit 1
  ) lp on true
  left join lateral (
    select m.*
    from public.financial_metrics m
    where m.company_id = c.id
    order by m.as_of desc
    limit 1
  ) fm on true
  left join public.forward_estimates fe on fe.company_id = c.id
  on conflict (company_id) do update set
    market = excluded.market,
    ticker = excluded.ticker,
    name = excluded.name,
    sector = excluded.sector,
    price = excluded.price,
    market_cap = excluded.market_cap,
    pe = excluded.pe,
    forward_pe = excluded.forward_pe,
    ev_ebitda = excluded.ev_ebitda,
    peg = excluded.peg,
    pfcf = excluded.pfcf,
    roce = excluded.roce,
    roe = excluded.roe,
    revenue_ttm = excluded.revenue_ttm,
    revenue_growth_ttm = excluded.revenue_growth_ttm,
    forward_cagr_3y = excluded.forward_cagr_3y,
    composite_score = excluded.composite_score,
    as_of = excluded.as_of,
    updated_at = now();
end;
$$;

create or replace function public.refresh_data_freshness()
returns void
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.data_freshness (dataset, as_of, row_count, updated_at)
  values
    ('companies', (select max(updated_at)::date from public.companies), (select count(*) from public.companies), now()),
    ('prices', (select max(price_date) from public.prices_daily), (select count(*) from public.prices_daily), now()),
    ('financials', (select max(report_date) from public.financial_periods), (select count(*) from public.financial_periods), now()),
    ('consensus', (select max(as_of) from public.consensus_estimates), (select count(*) from public.consensus_estimates), now()),
    ('forward_estimates', (select max(generated_at)::date from public.forward_estimates), (select count(*) from public.forward_estimates), now()),
    ('news', (select max(published_at)::date from public.news_items), (select count(*) from public.news_items), now())
  on conflict (dataset) do update set
    as_of = excluded.as_of,
    row_count = excluded.row_count,
    updated_at = now();
end;
$$;

-- ---------------------------------------------------------------------------
-- Read models
-- ---------------------------------------------------------------------------

create or replace view public.forward_growth_ranking
with (security_invoker = true)
as
select
  fe.company_id,
  fe.ticker,
  fe.name,
  fe.sector,
  fe.method,
  fe.confidence,
  fe.base_year,
  fe.base_revenue_inr,
  fe.cagr_base,
  fe.cagr_bear,
  fe.cagr_bull,
  (fe.scores ->> 'growth')::numeric as growth_score,
  (fe.scores ->> 'valuation')::numeric as valuation_score,
  (fe.scores ->> 'quality')::numeric as quality_score,
  (fe.scores ->> 'composite')::numeric as composite_score,
  (fe.valuation ->> 'pe')::numeric as pe,
  (fe.valuation ->> 'forwardPe')::numeric as forward_pe,
  (fe.valuation ->> 'evEbitda')::numeric as ev_ebitda,
  (fe.valuation ->> 'peg')::numeric as peg,
  (fe.valuation ->> 'pFcf')::numeric as pfcf,
  (fe.quality ->> 'roce')::numeric as roce,
  (fe.quality ->> 'roe')::numeric as roe,
  (fe.quality ->> 'ebitMargin')::numeric as ebit_margin,
  (fe.quality ->> 'ebitGrowth')::numeric as ebit_growth,
  (fe.quality ->> 'operatingLeverage')::numeric as operating_leverage,
  fe.generated_at
from public.forward_estimates fe
order by (fe.scores ->> 'composite')::numeric desc nulls last;

-- ---------------------------------------------------------------------------
-- Row-level security
-- ---------------------------------------------------------------------------

do $$
declare
  target text;
begin
  foreach target in array array[
    'companies', 'company_aliases', 'coverage_groups', 'coverage_group_members',
    'prices_daily', 'financial_periods', 'financial_metrics', 'segments', 'fx_rates',
    'consensus_estimates', 'consensus_targets', 'forward_estimates', 'stories',
    'news_items', 'profiles', 'watchlists', 'watchlist_items', 'company_snapshots',
    'ingestion_runs', 'data_freshness'
  ]
  loop
    execute format('alter table public.%I enable row level security', target);
  end loop;
end;
$$;

do $$
declare
  target text;
begin
  foreach target in array array[
    'companies', 'company_aliases', 'coverage_groups', 'coverage_group_members',
    'prices_daily', 'financial_periods', 'financial_metrics', 'segments', 'fx_rates',
    'consensus_estimates', 'consensus_targets', 'forward_estimates', 'stories',
    'news_items', 'company_snapshots', 'data_freshness'
  ]
  loop
    execute format('drop policy if exists "public read %s" on public.%I', target, target);
    execute format('create policy "public read %s" on public.%I for select using (true)', target, target);
  end loop;
end;
$$;

drop policy if exists "profiles are self readable" on public.profiles;
create policy "profiles are self readable" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles are self writable" on public.profiles;
create policy "profiles are self writable" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "watchlists are owner only" on public.watchlists;
create policy "watchlists are owner only" on public.watchlists
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "watchlist items are owner only" on public.watchlist_items;
create policy "watchlist items are owner only" on public.watchlist_items
  for all using (
    exists (
      select 1 from public.watchlists w
      where w.id = watchlist_id and w.user_id = auth.uid()
    )
  ) with check (
    exists (
      select 1 from public.watchlists w
      where w.id = watchlist_id and w.user_id = auth.uid()
    )
  );

-- ---------------------------------------------------------------------------
-- API grants (RLS still applies)
-- ---------------------------------------------------------------------------

grant usage on schema public to anon, authenticated, service_role;
grant select on all tables in schema public to anon, authenticated;
grant all privileges on all tables in schema public to service_role;
grant usage, select on all sequences in schema public to anon, authenticated, service_role;
grant select on public.forward_growth_ranking to anon, authenticated;

revoke execute on function public.refresh_company_snapshots() from public, anon, authenticated;
revoke execute on function public.refresh_data_freshness() from public, anon, authenticated;
grant execute on function public.refresh_company_snapshots() to service_role;
grant execute on function public.refresh_data_freshness() to service_role;

-- ---------------------------------------------------------------------------
-- Realtime
-- ---------------------------------------------------------------------------

alter table public.company_snapshots replica identity full;
alter table public.news_items replica identity full;
alter table public.forward_estimates replica identity full;
alter table public.data_freshness replica identity full;
alter table public.consensus_targets replica identity full;
alter table public.watchlists replica identity full;
alter table public.watchlist_items replica identity full;

do $$
declare
  target text;
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    foreach target in array array[
      'companies', 'company_aliases', 'coverage_groups', 'coverage_group_members',
      'prices_daily', 'financial_periods', 'financial_metrics', 'segments', 'fx_rates',
      'consensus_estimates', 'consensus_targets', 'forward_estimates', 'stories',
      'news_items', 'profiles', 'watchlists', 'watchlist_items', 'company_snapshots',
      'ingestion_runs', 'data_freshness'
    ]
    loop
      if not exists (
        select 1 from pg_publication_tables
        where pubname = 'supabase_realtime'
          and schemaname = 'public'
          and tablename = target
      ) then
        execute format('alter publication supabase_realtime add table public.%I', target);
      end if;
    end loop;
  end if;
end;
$$;

-- ---------------------------------------------------------------------------
-- Daily schedules (UTC)
-- ---------------------------------------------------------------------------

do $$
begin
  perform cron.unschedule('stockmonk-company-snapshots');
exception when others then
  null;
end;
$$;

do $$
begin
  perform cron.unschedule('stockmonk-data-freshness');
exception when others then
  null;
end;
$$;

select cron.schedule(
  'stockmonk-company-snapshots',
  '15 2 * * *',
  $$select public.refresh_company_snapshots();$$
);

select cron.schedule(
  'stockmonk-data-freshness',
  '30 2 * * *',
  $$select public.refresh_data_freshness();$$
);

-- Initial materialisation.
select public.refresh_company_snapshots();
select public.refresh_data_freshness();
