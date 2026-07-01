import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NSE from './pages/markets/NSE'
import Commodity from './pages/markets/Commodity'
import Forex from './pages/markets/Forex'
import USStocks from './pages/markets/USStocks'
import Crypto from './pages/markets/Crypto'
import COMEX from './pages/markets/COMEX'
import Intraday from './pages/trading/Intraday'
import Margin from './pages/trading/Margin'
import Terms from './pages/trading/Terms'
import WhyFX777 from './pages/about/WhyFX777'
import Regulations from './pages/about/Regulations'
import Affiliate from './pages/about/Affiliate'
import Refer from './pages/about/Refer'
import WhiteLabel from './pages/about/WhiteLabel'
import ContactPage from './pages/ContactPage'
// Legal pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsConditions from './pages/legal/TermsConditions'
import RiskDisclosure from './pages/legal/RiskDisclosure'
import AMLPolicy from './pages/legal/AMLPolicy'
import KYCPolicy from './pages/legal/KYCPolicy'
import CookiePolicy from './pages/legal/CookiePolicy'
import Disclaimer from './pages/legal/Disclaimer'
// Support pages
import HelpCenter from './pages/support/HelpCenter'
import FAQPage from './pages/support/FAQPage'
import TradingGuide from './pages/support/TradingGuide'

gsap.registerPlugin(ScrollTrigger)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Markets */}
          <Route path="/markets/nse"       element={<NSE />} />
          <Route path="/markets/commodity" element={<Commodity />} />
          <Route path="/markets/forex"     element={<Forex />} />
          <Route path="/markets/us-stocks" element={<USStocks />} />
          <Route path="/markets/crypto"    element={<Crypto />} />
          <Route path="/markets/comex"     element={<COMEX />} />

          {/* Trading */}
          <Route path="/trading/intraday" element={<Intraday />} />
          <Route path="/trading/margin"   element={<Margin />} />
          <Route path="/trading/terms"    element={<Terms />} />

          {/* About / Company */}
          <Route path="/about/why-fx777"   element={<WhyFX777 />} />
          <Route path="/about/regulations" element={<Regulations />} />
          <Route path="/about/affiliate"   element={<Affiliate />} />
          <Route path="/about/refer"       element={<Refer />} />
          <Route path="/about/white-label" element={<WhiteLabel />} />

          {/* Support */}
          <Route path="/contact"              element={<ContactPage />} />
          <Route path="/support/help-center"  element={<HelpCenter />} />
          <Route path="/support/faq"          element={<FAQPage />} />
          <Route path="/support/trading-guide" element={<TradingGuide />} />

          {/* Legal */}
          <Route path="/legal/privacy-policy"    element={<PrivacyPolicy />} />
          <Route path="/legal/terms-conditions"  element={<TermsConditions />} />
          <Route path="/legal/risk-disclosure"   element={<RiskDisclosure />} />
          <Route path="/legal/aml-policy"        element={<AMLPolicy />} />
          <Route path="/legal/kyc-policy"        element={<KYCPolicy />} />
          <Route path="/legal/cookie-policy"     element={<CookiePolicy />} />
          <Route path="/legal/disclaimer"        element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
