-- Remove the last SimFin provenance from the database.
--
-- Fundamentals now come from SEC EDGAR and market data from Yahoo Finance.
-- Company metadata, story source lists, freshness rows and ingestion logs are
-- cleaned idempotently, so this migration is safe on a database that never
-- stored SimFin keys.

begin;

-- Company metadata: drop keys or values that mention the retired vendor.
update public.companies c
set metadata = coalesce(
  (
    select jsonb_object_agg(entry.key, entry.value)
    from jsonb_each(c.metadata) as entry
    where entry.key not ilike '%simfin%'
      and entry.value::text not ilike '%simfin%'
  ),
  '{}'::jsonb
)
where c.metadata::text ilike '%simfin%';

-- Story source lists are JSON arrays of source objects.
update public.stories
set sources = coalesce(
  (
    select jsonb_agg(source)
    from jsonb_array_elements(sources) as source
    where source::text not ilike '%simfin%'
  ),
  '[]'::jsonb
)
where sources::text ilike '%simfin%';

delete from public.data_freshness where dataset ilike '%simfin%';
delete from public.ingestion_runs where pipeline ilike '%simfin%';

-- Legacy objects from the retired pipeline. Both are already absent after the
-- India/GCC removal, so these statements are no-ops on the current database.
drop view if exists public.forward_growth_ranking;
drop table if exists public.forward_estimates;

commit;
