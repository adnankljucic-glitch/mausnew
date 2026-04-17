/*
  # Create images storage bucket

  1. New Storage Bucket
    - `images` bucket for storing profile pictures, testimonial photos, and other images
    - Public access enabled for direct URL access
    - Allowed MIME types: image formats (JPEG, PNG, WebP, GIF, SVG)
    - File size limit: 10MB per file
  
  Note: Since the bucket is public, files uploaded to it will be accessible via public URLs.
*/

-- Create the images storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images',
  'images',
  true,
  10485760, -- 10MB in bytes
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;