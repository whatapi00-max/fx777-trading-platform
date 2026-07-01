interface ExampleRow {
  label: string
  value: string
  highlight?: boolean
}

interface TradingExampleProps {
  title: string
  description: string
  rows: ExampleRow[]
  disclaimer?: string
}

const TradingExample = ({ title, description, rows, disclaimer }: TradingExampleProps) => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-8 rounded-2xl border-2 border-primary-200">
      <h3 className="text-2xl font-bold text-dark-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="space-y-3">
          {rows.map((row, index) => (
            <div 
              key={index} 
              className={`flex justify-between items-center py-2 ${
                row.highlight ? 'border-t-2 border-primary-500 pt-4 mt-2' : ''
              }`}
            >
              <span className={`font-medium ${row.highlight ? 'text-dark-900 text-lg' : 'text-gray-700'}`}>
                {row.label}
              </span>
              <span className={`font-bold ${row.highlight ? 'text-primary-600 text-xl' : 'text-dark-900'}`}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {disclaimer && (
        <p className="text-sm text-gray-600 mt-4 italic">
          <span className="font-semibold">Note:</span> {disclaimer}
        </p>
      )}
    </div>
  )
}

export default TradingExample
