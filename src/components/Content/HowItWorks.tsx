interface Step {
  number: number
  title: string
  description: string
}

interface HowItWorksProps {
  title: string
  steps: Step[]
}

const HowItWorks = ({ title, steps }: HowItWorksProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-dark-900 mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 h-full">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
            {step.number < steps.length && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
