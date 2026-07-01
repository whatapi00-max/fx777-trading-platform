import { ReactNode } from 'react'

interface ContentSectionProps {
  heading: string
  children: ReactNode
  variant?: 'default' | 'highlight'
}

const ContentSection = ({ heading, children, variant = 'default' }: ContentSectionProps) => {
  const bgClass = variant === 'highlight' 
    ? 'bg-gradient-to-br from-primary-50 to-white border border-primary-200' 
    : 'bg-white'

  return (
    <section className={`${bgClass} p-8 md:p-12 rounded-2xl`}>
      <h2 className="text-3xl font-bold text-dark-900 mb-6">{heading}</h2>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
        {children}
      </div>
    </section>
  )
}

export default ContentSection
