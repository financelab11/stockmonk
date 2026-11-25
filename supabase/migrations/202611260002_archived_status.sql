-- Allow archived coverage in the story freshness table.
alter table public.story_freshness
  drop constraint if exists story_freshness_status_check;

alter table public.story_freshness
  add constraint story_freshness_status_check
  check (status in ('current', 'rewrite-pending', 'data-stale', 'source-gap', 'archived'));
