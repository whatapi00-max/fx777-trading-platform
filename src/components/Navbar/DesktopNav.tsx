import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NavItem } from './types'
import DesktopDropdown from './DesktopDropdown'

interface DesktopNavProps {
  items: NavItem[]
}

const DesktopNav = ({ items }: DesktopNavProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  const isActive = (href?: string, dropdown?: any[]) => {
    if (href) {
      return location.pathname === href
    }
    if (dropdown) {
      return dropdown.some(item => location.pathname.startsWith(item.href.split('/').slice(0, 2).join('/')))
    }
    return false
  }

  return (
    <div className="hidden lg:flex items-center space-x-1">
      {items.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.href ? (
            <Link
              to={item.href}
              className={`nav-item px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-dark-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              {item.name}
            </Link>
          ) : (
            <button
              className={`nav-item px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                isActive(undefined, item.dropdown)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-dark-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
              aria-expanded={openDropdown === item.name}
              aria-haspopup="true"
            >
              {item.name}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === item.name ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
          {item.dropdown && (
            <DesktopDropdown
              items={item.dropdown}
              isOpen={openDropdown === item.name}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default DesktopNav
