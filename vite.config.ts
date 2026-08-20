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

function metaPixelNoscript() {
  return {
    name: 'meta-pixel-noscript',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string) {
        // Inject noscript into head after build validation
        const noscriptTag = `<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1092174352632868&ev=PageView&noscript=1" /></noscript>`
        return html.replace('</head>', `    ${noscriptTag}\n  </head>`)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), googleSiteVerification(), metaPixelNoscript()],
  server: {
    port: 3000,
    open: true
  }
})
