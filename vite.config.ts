import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicDirExcludingSpaceFiles() {
  return {
    name: 'copy-public-safe',
    apply: 'build' as const,
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'public');
      const destDir = path.resolve(__dirname, 'dist');

      function copyRecursive(src: string, dest: string) {
        const entries = fs.readdirSync(src);
        for (const entry of entries) {
          if (entry.includes(' ')) continue; // skip filenames with spaces
          const srcPath = path.join(src, entry);
          const destPath = path.join(dest, entry);
          try {
            const stat = fs.statSync(srcPath);
            if (stat.isDirectory()) {
              fs.mkdirSync(destPath, { recursive: true });
              copyRecursive(srcPath, destPath);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          } catch {
            // skip inaccessible files
          }
        }
      }

      copyRecursive(srcDir, destDir);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicDirExcludingSpaceFiles()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: false,
  },
});
