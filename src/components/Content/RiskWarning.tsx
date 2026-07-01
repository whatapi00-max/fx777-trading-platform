import { AlertTriangle } from 'lucide-react'

interface RiskWarningProps {
  title?: string
  points: string[]
}

const RiskWarning = ({ title = 'Risk Warning', points }: RiskWarningProps) => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 rounded-2xl border-2 border-red-200">
      <div className="flex items-start space-x-3 mb-4">
        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <h3 className="text-2xl font-bold text-red-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-red-600 font-bold flex-shrink-0">•</span>
            <span className="text-gray-800 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RiskWarning
