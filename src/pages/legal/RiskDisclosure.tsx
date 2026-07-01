import { AlertTriangle, TrendingDown, BarChart2, Globe, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const riskCategories = [
  {
    Icon: TrendingDown,
    title: 'Market Risk',
    description: 'Financial markets are inherently volatile. Prices can move rapidly and unpredictably due to economic events, news, geopolitical developments, and market sentiment. You may lose all or more than your initial investment.',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600 bg-red-100',
  },
  {
    Icon: BarChart2,
    title: 'Leverage Risk',
    description: 'Trading on margin amplifies both potential gains and losses. A small adverse movement can result in losses exceeding your initial deposit. FX777 offers margin up to 500X, which significantly increases risk exposure.',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600 bg-orange-100',
  },
  {
    Icon: Globe,
    title: 'Liquidity Risk',
    description: 'In fast-moving markets or during off-hours, there may be insufficient liquidity to execute orders at desired prices. Slippage may occur, particularly in volatile conditions, commodity markets, and during major economic announcements.',
    color: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-700 bg-yellow-100',
  },
  {
    Icon: AlertTriangle,
    title: 'Technology Risk',
    description: 'Trading platforms may experience technical issues, outages, or connectivity problems. Orders may be delayed or not executed during such events. FX777 provides contingency options but cannot guarantee uninterrupted service.',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600 bg-blue-100',
  },
]

const stats = [
  { value: '70-80%', label: 'Retail traders lose money in F&O (per SEBI study)' },
  { value: '500X', label: 'Maximum leverage offered on certain instruments' },
  { value: '24/7', label: 'Risk management support available' },
]

const RiskDisclosure = () => {
  return (
    <PageLayout
      title="Risk Disclosure"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'Risk Disclosure' }]}
      description="Understanding the risks involved in trading financial instruments with FX777."
    >
      <div className="space-y-10">
        {/* Warning banner */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-red-800 mb-2">Important Risk Warning</h2>
              <p className="text-red-700 text-sm leading-relaxed">
                Trading in derivatives, forex, and leveraged products involves a high level of risk and may not be suitable for all investors.
                You should not invest money that you cannot afford to lose. Before trading, ensure you fully understand the risks and
                seek independent financial advice if needed. As per SEBI research, approximately 70-80% of retail individual traders in
                equity F&O segment incurred net losses.
              </p>
            </div>
          </div>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-extrabold text-dark-900 mb-1">{value}</p>
              <p className="text-xs text-gray-500 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Risk categories */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-dark-900">Types of Risks</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {riskCategories.map(({ Icon, title, description, color, iconColor }) => (
              <div key={title} className={`border rounded-xl p-6 ${color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-dark-900">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk management tips */}
        <div className="bg-white border border-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-dark-900 mb-4">Risk Management Best Practices</h2>
          <ul className="space-y-3">
            {[
              'Never risk more than 1-2% of your trading capital on a single trade',
              'Always use stop-loss orders to limit downside risk',
              'Diversify your portfolio across different asset classes and instruments',
              'Avoid over-leveraging — higher leverage means higher risk',
              'Keep a trading journal to track and analyse your performance',
              'Do not trade with borrowed money or funds needed for daily expenses',
              'Stay informed about market events and economic calendars',
              'Practice with a paper trading account before risking real capital',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export default RiskDisclosure
