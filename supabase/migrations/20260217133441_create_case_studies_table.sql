/*
  # Create case_studies table

  1. New Tables
    - `case_studies`
      - `id` (uuid, primary key)
      - `slug` (text, unique, not null) - URL-friendly identifier
      - `title` (text, not null) - internal reference title
      - `industry_label` (text, not null) - uppercase label shown above headline
      - `headline` (text, not null) - main hero headline
      - `description` (text, not null) - hero supporting text
      - `hero_media_url` (text, not null) - URL to hero video or image
      - `hero_media_type` (text, not null, default 'video') - 'video' or 'image'
      - `background_color` (text, not null, default '#0D1E21') - dynamic hero left panel color
      - `overlay_color` (text, not null, default '#0D1E21') - overlay color on media
      - `overlay_opacity` (numeric, not null, default 0.3) - overlay opacity (0-1)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `case_studies` table
    - Add SELECT policy for anonymous/public read access (case studies are public content)
*/

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  industry_label text NOT NULL,
  headline text NOT NULL,
  description text NOT NULL,
  hero_media_url text NOT NULL,
  hero_media_type text NOT NULL DEFAULT 'video',
  background_color text NOT NULL DEFAULT '#0D1E21',
  overlay_color text NOT NULL DEFAULT '#0D1E21',
  overlay_opacity numeric NOT NULL DEFAULT 0.3,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published case studies"
  ON case_studies
  FOR SELECT
  TO anon, authenticated
  USING (true);
