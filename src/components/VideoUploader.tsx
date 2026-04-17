import { useState } from 'react';
import { uploadVideo } from '../lib/videoStorage';

export default function VideoUploader() {
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const result = await uploadVideo(file);

    if (result) {
      setVideoUrl(result.url);
      console.log('Video uploaded:', result.url);
    }

    setUploading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">
          Upload Video
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={handleUpload}
          disabled={uploading}
          className="block w-full text-sm border rounded-lg cursor-pointer"
        />
      </div>

      {uploading && (
        <p className="text-sm text-gray-600">Uploader...</p>
      )}

      {videoUrl && (
        <div className="mt-4">
          <p className="text-sm text-green-600 mb-2">Video uploadet!</p>
          <video
            src={videoUrl}
            controls
            className="w-full rounded-lg"
          />
          <p className="text-xs text-gray-500 mt-2 break-all">{videoUrl}</p>
        </div>
      )}
    </div>
  );
}
