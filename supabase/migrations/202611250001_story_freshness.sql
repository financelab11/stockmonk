-- ---------------------------------------------------------------------------
-- Story freshness and post-ingestion schedule
-- ---------------------------------------------------------------------------
-- The GitHub data refresh starts at 02:30 UTC. These jobs were originally at
-- 02:15/02:30, which meant they could run before the new data reached Supabase.
-- They now act as a fallback after the refresh has had time to sync.

create table if not exists public.story_freshness (
  ticker text primary key,
  market text not null default 'US',
  price_as_of date,
  latest_quarter text,
  latest_filing_form text,
  latest_filing_date date,
  latest_filing_accession text,
  earnings_filed date,
  earnings_accession text,
  consensus_as_of date,
  segments_as_of date,
  narrative_updated_at date,
  status text not null default 'current'
    check (status in ('current', 'rewrite-pending', 'data-stale', 'source-gap')),
  events jsonb not null default '[]'::jsonb,
  checked_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists story_freshness_status_idx
  on public.story_freshness (status);

alter table public.story_freshness enable row level security;

drop policy if exists "public read story_freshness" on public.story_freshness;
create policy "public read story_freshness" on public.story_freshness
  for select using (true);

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
    ('segments', (select max(as_of) from public.segments), (select count(*) from public.segments), now()),
    ('stories', (select max(updated_at)::date from public.stories), (select count(*) from public.stories), now()),
    ('story_narratives', (select max(narrative_updated_at) from public.story_freshness), (select count(*) from public.story_freshness where status = 'current'), now())
  on conflict (dataset) do update set
    as_of = excluded.as_of,
    row_count = excluded.row_count,
    updated_at = now();
end;
$$;

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
  '30 3 * * *',
  $$select public.refresh_company_snapshots();$$
);

select cron.schedule(
  'stockmonk-data-freshness',
  '45 3 * * *',
  $$select public.refresh_data_freshness();$$
);
