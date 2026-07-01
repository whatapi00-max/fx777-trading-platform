import { Check } from 'lucide-react'

interface BenefitsListProps {
  title: string
  benefits: string[]
  variant?: 'default' | 'compact'
}

const BenefitsList = ({ title, benefits, variant = 'default' }: BenefitsListProps) => {
  return (
    <div className={variant === 'compact' ? '' : 'bg-white p-6 md:p-8 rounded-2xl border border-gray-200'}>
      <h3 className="text-2xl font-bold text-dark-900 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700 leading-relaxed">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BenefitsList
