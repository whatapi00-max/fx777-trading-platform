import { Download, Smartphone, Monitor } from 'lucide-react'

const AppDownload = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 rounded-full px-4 py-2 text-sm font-medium w-fit">
              <Smartphone className="w-4 h-4" />
              Download Our App
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Trade Anywhere,<br />Anytime
            </h2>

            <p className="text-lg text-white/90 max-w-md">
              Access FX777 on any device. Trade instantly from your browser, download the desktop app for a powerful workstation experience, or take the markets with you on mobile.
            </p>

            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>Real-time market data and charts</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>One-tap trading and order management</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>Push notifications for market alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>Secure biometric login</span>
              </li>
            </ul>
          </div>

          {/* Right side - Download buttons */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Android */}
            <a
              href="https://play.google.com/store/apps/details?id=com.osensetrader.osensetrader"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-50 text-dark-900 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border border-gray-200 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 512 512">
                  <path fill="#00D2FF" d="M99.617 8.057c-3.089 6.078-4.756 14.267-4.756 24.078v423.73c0 9.812 1.667 18.001 4.756 24.078l.933.925L332.766 256v-2.005L100.55 7.132z"/>
                  <path fill="#00F076" d="M409.803 333.61l-77.037-77.037V256v-2.005l77.038-77.037.918.523 91.243 51.848c26.058 14.833 26.058 39.087 0 53.92l-91.243 51.848z"/>
                  <path fill="#FF3A44" d="M411.007 332.85L332.766 254.6 99.617 487.665c8.5 8.907 21.988 10.008 37.436.7l273.954-155.515"/>
                  <path fill="#FFD227" d="M411.007 176.35L137.053 20.833c-15.448-8.815-28.936-7.714-37.436.7L332.766 254.6l78.241-78.25z"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium">Get it on</p>
                <p className="text-lg md:text-2xl font-bold">Android</p>
              </div>
              <Download className="hidden md:block w-5 h-5 md:w-6 md:h-6 text-primary-500 group-hover:translate-y-1 transition-transform flex-shrink-0" />
            </a>

            {/* Desktop App */}
            <a
              href="/fx777.exe"
              download="fx777.exe"
              className="group bg-white hover:bg-gray-50 text-dark-900 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-dark-900 to-dark-700 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium">Download for</p>
                <p className="text-lg md:text-2xl font-bold">Desktop</p>
              </div>
              <Download className="hidden md:block w-5 h-5 md:w-6 md:h-6 text-primary-500 group-hover:translate-y-1 transition-transform flex-shrink-0" />
            </a>

            {/* iOS */}
            <a
              href="https://apps.apple.com/jo/app/osense-trader/id6741929487"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-50 text-dark-900 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium">Download on</p>
                <p className="text-lg md:text-2xl font-bold">iOS</p>
              </div>
              <Download className="hidden md:block w-5 h-5 md:w-6 md:h-6 text-primary-500 group-hover:translate-y-1 transition-transform flex-shrink-0" />
            </a>

            {/* Web Trader Login */}
            <a
              href="https://web.theplatformapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-50 text-dark-900 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium">Login to</p>
                <p className="text-lg md:text-2xl font-bold">Web Trader</p>
              </div>
              <Download className="hidden md:block w-5 h-5 md:w-6 md:h-6 text-primary-500 group-hover:translate-y-1 transition-transform flex-shrink-0" />
            </a>

            {/* Web Trader Demo */}
            <a
              href="https://web.theplatformapi.com/create-company-user?companyName=FX777&isDemo=true&parentId=29102"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-50 text-dark-900 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z"/>
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-2H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V5H4a1 1 0 110-2h1V2a2 2 0 012-2h2V1a1 1 0 010-2zm9 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium">Try Demo</p>
                <p className="text-lg md:text-2xl font-bold">Web Trader</p>
              </div>
              <Download className="hidden md:block w-5 h-5 md:w-6 md:h-6 text-primary-500 group-hover:translate-y-1 transition-transform flex-shrink-0" />
            </a>

            {/* Web Trader Register */}
            <a
              href="https://web.theplatformapi.com/create-company-user?companyName=FX777&isDemo=false&parentId=29103"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gray-50 text-dark-900 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z"/>
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-2H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V5H4a1 1 0 110-2h1V2a2 2 0 012-2h2V1a1 1 0 010-2zm9 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs md:text-sm text-gray-600 font-medium">Register</p>
                <p className="text-lg md:text-2xl font-bold">Web Trader</p>
              </div>
              <Download className="hidden md:block w-5 h-5 md:w-6 md:h-6 text-primary-500 group-hover:translate-y-1 transition-transform flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
