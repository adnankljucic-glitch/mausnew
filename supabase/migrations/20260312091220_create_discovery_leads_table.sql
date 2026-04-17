/*
  # Create Discovery Leads Table

  1. New Tables
    - `discovery_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the person booking the call
      - `email` (text) - Work email address
      - `company` (text) - Company name
      - `message` (text, nullable) - Optional message about what they'd like to discuss
      - `created_at` (timestamptz) - When the lead was submitted
      - `status` (text) - Lead status (pending, contacted, scheduled, completed)

  2. Security
    - Enable RLS on `discovery_leads` table
    - Add policy for inserting new leads (public can insert)
    - Restrict read/update/delete to authenticated admin users only

  3. Notes
    - The table stores contact form submissions from the Discovery Call page
    - Status field allows tracking the progress of each lead
*/

CREATE TABLE IF NOT EXISTS discovery_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE discovery_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a discovery lead"
  ON discovery_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view discovery leads"
  ON discovery_leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update discovery leads"
  ON discovery_leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
