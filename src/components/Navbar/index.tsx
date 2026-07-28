import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { navigationItems } from './navigationData'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    // Check initial scroll position
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg md:text-xl">FX</span>
                </div>
                <span className="text-xl md:text-2xl font-bold text-dark-900">
                  FX<span className="text-primary-500">777</span>
                </span>
              </Link>
            </div>

            <DesktopNav items={navigationItems} />

            <div className="hidden lg:flex items-center space-x-3">
              <a href="https://fx777crm.theplatformapi.com/auth-pages/login" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm border-2 border-primary-500">
                Login
              </a>
              <a href="https://fx777crm.theplatformapi.com/auth-pages/create-account/step1?accountType=real" target="_blank" rel="noopener noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm">
                Register
              </a>
            </div>

            {/* Hamburger — plain flex item, no position:fixed to avoid backdrop-filter containing-block bug */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-lg text-dark-900 hover:text-primary-500 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>

      <MobileNav
        id="mobile-menu"
        items={navigationItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default Navbar
