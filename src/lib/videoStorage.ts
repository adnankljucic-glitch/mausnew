import { supabase } from './supabase';

export async function uploadVideo(file: File, fileName?: string): Promise<{ url: string; path: string } | null> {
  const fileExt = file.name.split('.').pop();
  const filePath = `${fileName || Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Upload error:', error);
    return null;
  }

  const url = getVideoUrl(data.path);
  return { url, path: data.path };
}

export function getVideoUrl(path: string): string {
  const { data } = supabase.storage
    .from('videos')
    .getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteVideo(path: string): Promise<boolean> {
  const { error } = await supabase.storage
    .from('videos')
    .remove([path]);

  if (error) {
    console.error('Delete error:', error);
    return false;
  }

  return true;
}
