import { supabase } from './supabase';

const BUCKET_NAME = 'images';

export async function uploadImage(file: File, path: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    return getPublicUrl(data.path);
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

export function getPublicUrl(path: string): string {
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteImage(path: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([path]);

    if (error) {
      console.error('Error deleting image:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}

export async function listImages(folder?: string): Promise<string[]> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(folder);

    if (error) {
      console.error('Error listing images:', error);
      return [];
    }

    return data.map(file => file.name);
  } catch (error) {
    console.error('Error listing images:', error);
    return [];
  }
}
