-- ============================================================
-- Dauntless LLC — Applications Table Migration
-- Run once in: https://supabase.com/dashboard/project/ccjdazzuhfbdasyhaaxde/sql/new
-- ============================================================

CREATE TABLE IF NOT EXISTS public.dauntless_applications (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at   timestamptz NOT NULL    DEFAULT now(),
  first_name   text        NOT NULL,
  last_name    text,
  email        text        NOT NULL,
  phone        text        NOT NULL,
  city         text,
  state        text,
  situation    text,          -- student | employed | unemployed | entrepreneur | other
  why_apply    text,
  status       text        NOT NULL DEFAULT 'new',   -- new | contacted | booked | placed | rejected
  zoom_booked  boolean     NOT NULL DEFAULT false,
  notes        text                                   -- internal notes
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_dauntless_apps_created  ON public.dauntless_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_dauntless_apps_status   ON public.dauntless_applications (status);
CREATE INDEX IF NOT EXISTS idx_dauntless_apps_email    ON public.dauntless_applications (email);

-- RLS: service_role only (same pattern as leads table)
ALTER TABLE public.dauntless_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_all_dauntless_apps"
  ON public.dauntless_applications
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Confirm it worked
SELECT 'dauntless_applications table created ✓' AS result;
