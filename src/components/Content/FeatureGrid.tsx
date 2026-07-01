import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
}

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        )
      })}
    </section>
  )
}

export default FeatureGrid
