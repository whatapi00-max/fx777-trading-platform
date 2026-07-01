import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface PageLayoutProps {
  children: ReactNode
  title: string
  breadcrumbs: BreadcrumbItem[]
  description?: string
}

const PageLayout = ({ children, title, breadcrumbs, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-dark-900 font-medium">{item.name}</span>
                )}
              </div>
            ))}
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-900 mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
                {description}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default PageLayout
