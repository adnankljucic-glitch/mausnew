import { useState } from 'react';
import { Upload } from 'lucide-react';
import { uploadImage } from '../lib/imageStorage';

export default function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setFileName('');
    setUploadedUrl(null);

    const path = `testimonials/${file.name}`;
    const url = await uploadImage(file, path);

    if (url) {
      setUploadedUrl(url);
      setFileName(file.name);
    } else {
      alert('Failed to upload image. Please try again.');
    }

    setUploading(false);
  };

  return (
    <div style={{
      padding: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Upload Testimonial Images
      </h2>

      <label
        htmlFor="image-upload"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          backgroundColor: uploading ? '#f5f5f5' : 'white'
        }}
      >
        <Upload size={48} color="#666" />
        <p style={{ marginTop: '16px', color: '#666' }}>
          {uploading ? 'Uploading...' : 'Click to upload image'}
        </p>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
          style={{ display: 'none' }}
        />
      </label>

      {uploadedUrl && (
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
            Upload Successful!
          </h3>
          <p style={{ marginBottom: '10px', color: '#666' }}>
            File: {fileName}
          </p>
          <div style={{
            padding: '12px',
            background: '#f5f5f5',
            borderRadius: '4px',
            wordBreak: 'break-all',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
            {uploadedUrl}
          </div>
          <img
            src={uploadedUrl}
            alt="Uploaded"
            style={{
              marginTop: '20px',
              maxWidth: '200px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '16px', background: '#f0f9ff', borderRadius: '8px' }}>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
          Instructions:
        </h4>
        <ol style={{ paddingLeft: '20px', color: '#666', lineHeight: '1.6' }}>
          <li>Upload your image using the button above</li>
          <li>Copy the generated URL</li>
          <li>Update the Testimonials.tsx file with the new URL</li>
        </ol>
      </div>
    </div>
  );
}
