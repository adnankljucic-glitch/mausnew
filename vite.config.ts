import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicFilesPlugin() {
  return {
    name: 'copy-public-files',
    writeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');
      function copyDir(src: string, dest: string) {
        fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src)) {
          const srcPath = path.join(src, entry);
          const destPath = path.join(dest, entry);
          try {
            const stat = fs.statSync(srcPath);
            if (stat.isDirectory()) {
              copyDir(srcPath, destPath);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          } catch {
            // skip locked/unavailable files
          }
        }
      }
      copyDir(publicDir, distDir);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicFilesPlugin()],
  publicDir: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
