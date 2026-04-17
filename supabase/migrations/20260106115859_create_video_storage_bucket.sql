/*
  # Video Storage Setup

  1. Storage Bucket
    - Creates a public `videos` bucket for video uploads
    - Videos will be publicly accessible via direct URLs
  
  2. Security Policies
    - Anyone can view/download videos (public bucket)
    - Authenticated users can upload videos
    - Authenticated users can update/delete their own uploads
  
  3. Usage
    - Upload videos programmatically or via Supabase dashboard
    - Access videos at: `{SUPABASE_URL}/storage/v1/object/public/videos/{filename}`
*/

-- Create the videos storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  524288000, -- 500MB limit per file
  ARRAY['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime', 'video/x-msvideo']
)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to read videos (public bucket)
CREATE POLICY "Public video access"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'videos');

-- Allow authenticated users to upload videos
CREATE POLICY "Authenticated users can upload videos"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'videos');

-- Allow authenticated users to update their own videos
CREATE POLICY "Users can update own videos"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'videos' AND auth.uid()::text = owner::text)
  WITH CHECK (bucket_id = 'videos');

-- Allow authenticated users to delete their own videos
CREATE POLICY "Users can delete own videos"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'videos' AND auth.uid()::text = owner::text);