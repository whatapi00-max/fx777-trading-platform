import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function googleSiteVerification() {
  return {
    name: 'google-site-verification',
    transformIndexHtml(html: string) {
      return html.replace(
        '<meta name="theme-color" content="#1F2937" />',
        '<meta name="theme-color" content="#1F2937" />\n    <meta name="google-site-verification" content="8F7BEvAEbMuOU-nrpQwySIURU0cIEumDFSFPnm3WENo" />'
      )
    }
  }
}

export default defineConfig({
  plugins: [react(), googleSiteVerification()],
  server: {
    port: 3000,
    open: true
  }
})
