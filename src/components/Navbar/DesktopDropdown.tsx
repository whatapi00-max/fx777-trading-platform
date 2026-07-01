import { Link } from 'react-router-dom'
import { DropdownItem } from './types'
import { ChevronRight } from 'lucide-react'

interface DesktopDropdownProps {
  items: DropdownItem[]
  isOpen: boolean
}

const DesktopDropdown = ({ items, isOpen }: DesktopDropdownProps) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-dropdown">
      <div className="py-2">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="block px-4 py-3 hover:bg-primary-50 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                  {item.name}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {item.description && (
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DesktopDropdown
