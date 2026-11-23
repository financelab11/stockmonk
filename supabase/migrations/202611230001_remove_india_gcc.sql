-- Stockmonk is US-only. Remove the India and GCC coverage from the database.

begin;

-- India-only forward-growth dataset and its read model.
drop view if exists public.forward_growth_ranking;
drop table if exists public.forward_estimates;

-- Market-scoped editorial rows. Aliases cascade from companies, but delete
-- them explicitly for databases without the cascade.
delete from public.stories where market in ('IN', 'GCC');
delete from public.company_aliases
where company_id in (select id from public.companies where market in ('IN', 'GCC'));
delete from public.coverage_groups where market in ('IN', 'GCC');

-- Cascades through prices, financials, consensus and watchlist items.
delete from public.companies where market in ('IN', 'GCC');

delete from public.data_freshness
where dataset ilike '%india%' or dataset ilike '%gcc%' or dataset = 'forward_estimates';

-- The application now accepts only the US market.
alter table public.companies drop constraint if exists companies_market_check;
alter table public.companies
  add constraint companies_market_check check (market = 'US');

-- Rebuild the read-model functions without the dropped forward-estimates table.
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
    null,
    fm.roe,
    fm.revenue_ttm,
    fm.revenue_growth_ttm,
    null,
    null,
    nullif(greatest(
      coalesce(lp.price_date, '1970-01-01'::date),
      coalesce(fm.as_of, '1970-01-01'::date)
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
    ('consensus', (select max(as_of) from public.consensus_estimates), (select count(*) from public.consensus_estimates), now())
  on conflict (dataset) do update set
    as_of = excluded.as_of,
    row_count = excluded.row_count,
    updated_at = now();
end;
$$;

commit;
