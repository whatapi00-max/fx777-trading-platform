import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { seoPlugin } from './vite-seo-plugin'

export default defineConfig({
  plugins: [react(), seoPlugin()],
  server: {
    port: 3000,
    open: true
  }
})
