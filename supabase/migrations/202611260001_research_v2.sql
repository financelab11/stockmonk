-- ---------------------------------------------------------------------------
-- Normalized research-score entities
-- ---------------------------------------------------------------------------

create table if not exists public.research_scores (
  ticker text not null,
  methodology_version text not null,
  score_type text not null,
  score numeric,
  coverage numeric not null default 0,
  status text not null default 'provisional'
    check (status in ('complete', 'provisional', 'incomplete')),
  as_of date,
  updated_at timestamptz not null default now(),
  primary key (ticker, methodology_version, score_type)
);

create table if not exists public.research_evidence (
  ticker text not null,
  methodology_version text not null,
  score_type text not null,
  evidence_id text not null,
  label text not null,
  value text,
  unit text,
  period text,
  source text,
  formula text,
  max_points numeric not null default 0,
  points numeric,
  available boolean not null default false,
  reason text,
  updated_at timestamptz not null default now(),
  primary key (ticker, methodology_version, score_type, evidence_id)
);

create table if not exists public.company_kpis (
  ticker text not null,
  kpi_id text not null,
  group_label text,
  label text not null,
  value numeric,
  unit text,
  period text,
  source text,
  definition text,
  formula text,
  available boolean not null default false,
  reason text,
  updated_at timestamptz not null default now(),
  primary key (ticker, kpi_id)
);

create table if not exists public.research_articles (
  ticker text primary key,
  methodology_version text not null,
  market_data_as_of date,
  financial_data_as_of date,
  status text not null default 'validated'
    check (status in ('draft', 'data-incomplete', 'review-required', 'validated', 'published', 'stale')),
  generated_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists research_scores_type_idx
  on public.research_scores (score_type, score desc);
create index if not exists company_kpis_ticker_idx
  on public.company_kpis (ticker);

alter table public.research_scores enable row level security;
alter table public.research_evidence enable row level security;
alter table public.company_kpis enable row level security;
alter table public.research_articles enable row level security;

drop policy if exists "public read research_scores" on public.research_scores;
create policy "public read research_scores" on public.research_scores
  for select using (true);

drop policy if exists "public read research_evidence" on public.research_evidence;
create policy "public read research_evidence" on public.research_evidence
  for select using (true);

drop policy if exists "public read company_kpis" on public.company_kpis;
create policy "public read company_kpis" on public.company_kpis
  for select using (true);

drop policy if exists "public read research_articles" on public.research_articles;
create policy "public read research_articles" on public.research_articles
  for select using (true);
