import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NavItem } from './types'

interface MobileNavProps {
  id?: string
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

const MobileNav = ({ id, items, isOpen, onClose }: MobileNavProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const location = useLocation()

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close drawer on route change
  useEffect(() => {
    onClose()
    setExpandedItems([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    )
  }

  const isActive = (href?: string) => href ? location.pathname === href : false

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 51 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        id={id}
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 52 }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header — logo only, no X button */}
        <div className="flex items-center px-5 border-b border-gray-100 flex-shrink-0" style={{ height: '4rem' }}>
          <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">FX</span>
            </div>
            <span className="text-xl font-bold text-dark-900">
              FX<span className="text-primary-500">777</span>
            </span>
          </Link>
        </div>

        {/* Scrollable nav list */}
        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
          <ul className="space-y-1" role="list">
            {items.map((item) => (
              <li key={item.name}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary-500 text-white'
                        : 'text-dark-700 hover:bg-gray-100'
                    }`}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm text-dark-700 hover:bg-gray-100 transition-colors"
                      aria-expanded={expandedItems.includes(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                          expandedItems.includes(item.name) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedItems.includes(item.name) && item.dropdown && (
                      <ul className="mt-1 ml-3 pl-3 border-l-2 border-primary-100 space-y-0.5">
                        {item.dropdown.map((dropdownItem, index) => (
                          <li key={index}>
                            <Link
                              to={dropdownItem.href}
                              className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                isActive(dropdownItem.href)
                                  ? 'text-primary-600 font-semibold bg-primary-50'
                                  : 'text-dark-600 hover:bg-gray-100 hover:text-dark-900'
                              }`}
                              onClick={onClose}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Sticky CTA footer */}
        <div className="px-4 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
          <button className="w-full border-2 border-primary-500 text-primary-600 font-bold py-3 rounded-xl hover:bg-primary-50 transition-colors text-sm">
            Login
          </button>
          <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
            Register Free
          </button>
        </div>
      </div>
    </>
  )
}

export default MobileNav
