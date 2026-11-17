/**
 * Supabase database types.
 *
 * The schema is defined in supabase/migrations. These types intentionally keep
 * row shapes permissive at the boundary; domain-level Zod schemas in lib/
 * remain the source of truth for application data.
 */

type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

type Table = {
  Row: Record<string, Json | undefined>;
  Insert: Record<string, Json | undefined>;
  Update: Record<string, Json | undefined>;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: Record<string, Table>;
    Views: Record<string, Table>;
    Functions: Record<string, { Args: Record<string, Json | undefined>; Returns: Json }>;
    Enums: Record<string, string>;
    CompositeTypes: Record<string, Record<string, Json | undefined>>;
  };
};
