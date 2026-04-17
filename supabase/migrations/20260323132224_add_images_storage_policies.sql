/*
  # Add storage policies for images bucket

  1. Security Changes
    - Add policy for public read access to images
    - Add policy for anonymous users to upload images (needed for website assets)
    - Add policy for anonymous users to update images
    - Add policy for anonymous users to delete images

  2. Notes
    - The images bucket is public so images can be served directly
    - Anonymous upload is allowed for website asset management
*/

CREATE POLICY "Public images access"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'images');

CREATE POLICY "Anyone can upload images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'images');

CREATE POLICY "Anyone can update images"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'images')
  WITH CHECK (bucket_id = 'images');

CREATE POLICY "Anyone can delete images"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'images');