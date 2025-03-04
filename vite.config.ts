import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensures public directory is served correctly
  publicDir: 'public',
  // Allow imported assets to be resolved correctly
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
