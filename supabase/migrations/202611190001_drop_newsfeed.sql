-- Remove the retired Newsfeed tables.
--
-- The Newsfeed page, its data files and the broker-report pipeline were
-- deleted from the application, so the backing table and its freshness row go
-- with them. Safe to run on databases where the table was never created.

drop table if exists public.news_items;

delete from public.data_freshness where dataset = 'news';
