import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'Why FX777',         href: '/about/why-fx777' },
      { label: 'Regulations',        href: '/about/regulations' },
      { label: 'Affiliate Program',  href: '/about/affiliate' },
      { label: 'White Label',        href: '/about/white-label' },
      { label: 'Refer a Friend',     href: '/about/refer' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'NSE Futures & Options', href: '/markets/nse' },
      { label: 'Indian Commodity',       href: '/markets/commodity' },
      { label: 'Forex',                  href: '/markets/forex' },
      { label: 'US Stocks',              href: '/markets/us-stocks' },
      { label: 'Cryptocurrencies',       href: '/markets/crypto' },
      { label: 'COMEX',                  href: '/markets/comex' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us',    href: '/contact' },
      { label: 'Help Center',   href: '/support/help-center' },
      { label: 'FAQ',           href: '/support/faq' },
      { label: 'Trading Guide', href: '/support/trading-guide' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',    href: '/legal/privacy-policy' },
      { label: 'Terms & Conditions',href: '/legal/terms-conditions' },
      { label: 'Risk Warning',      href: '/legal/risk-warning' },
      { label: 'Cookie Policy',     href: '/legal/cookie-policy' },
      { label: 'Disclaimer',        href: '/legal/disclaimer' },
    ],
  },
]

const socialLinks = [
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Twitter,   href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { Icon: Youtube,   href: '#', label: 'YouTube' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-5">
              <img src="/logo.png" alt="FX777 Logo" className="h-9 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              FX777 is a premium global trading platform. Trade forex, stocks, commodities, 
              and crypto with advanced tools and competitive pricing.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regulatory disclaimer */}
        <div className="border-t border-dark-800 pt-8 mb-6">
          <div className="text-xs text-gray-500 leading-relaxed">
            <p>Investments in securities market are subject to market risks. Read all related documents carefully before investing.
              As per SEBI research, ~70-80% of individual traders in equity F&amp;O incur net losses.</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-dark-800">
          <p className="text-gray-500 text-xs">
            © {currentYear} FX777 Financial Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link to="/legal/privacy-policy"     className="text-gray-500 hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms-conditions"   className="text-gray-500 hover:text-primary-400 transition-colors">Terms & Conditions</Link>
            <Link to="/legal/cookie-policy"      className="text-gray-500 hover:text-primary-400 transition-colors">Cookie Policy</Link>
            <Link to="/legal/disclaimer"         className="text-gray-500 hover:text-primary-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
