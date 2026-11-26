import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Relative base (`./`) ensures assets resolve cleanly on GitHub Pages
// regardless of whether the site is hosted at a custom domain or `/<repo>/`.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
