import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Builds a single self-contained index.html (JS and CSS inlined) so the
// tracker can be dropped onto any static host with no build step.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: { target: 'es2019', cssCodeSplit: false, assetsInlineLimit: 100000000 },
});
