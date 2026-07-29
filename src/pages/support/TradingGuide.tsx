import { Link } from 'react-router-dom'
import { BookOpen, TrendingUp, BarChart2, Shield, Target, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const modules = [
  {
    Icon: BookOpen,
    number: '01',
    title: 'Introduction to Trading',
    level: 'Beginner',
    duration: '30 min',
    topics: [
      'What is financial trading?',
      'Different asset classes explained',
      'Understanding bull and bear markets',
      'How exchanges work',
      'Introduction to market participants',
    ],
  },
  {
    Icon: TrendingUp,
    number: '02',
    title: 'Technical Analysis Basics',
    level: 'Beginner',
    duration: '45 min',
    topics: [
      'Reading candlestick charts',
      'Support and resistance levels',
      'Moving averages (SMA, EMA)',
      'RSI, MACD, and Bollinger Bands',
      'Volume analysis',
    ],
  },
  {
    Icon: BarChart2,
    number: '03',
    title: 'Fundamental Analysis',
    level: 'Intermediate',
    duration: '40 min',
    topics: [
      'Understanding financial statements',
      'P/E ratio and valuation metrics',
      'Economic indicators and their impact',
      'Sector analysis',
      'Earnings reports and their effect',
    ],
  },
  {
    Icon: Shield,
    number: '04',
    title: 'Risk Management',
    level: 'Intermediate',
    duration: '35 min',
    topics: [
      'Position sizing fundamentals',
      'Stop-loss strategies',
      'Risk-reward ratio',
      'Diversification techniques',
      'Managing drawdowns',
    ],
  },
  {
    Icon: Target,
    number: '05',
    title: 'Advanced Trading Strategies',
    level: 'Advanced',
    duration: '60 min',
    topics: [
      'Scalping and day trading',
      'Swing trading strategies',
      'Options strategies (calls, puts)',
      'Futures trading mechanics',
      'Algorithmic trading overview',
    ],
  },
]

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-700',
  'Intermediate': 'bg-blue-100 text-blue-700',
  'Advanced': 'bg-purple-100 text-purple-700',
}

const TradingGuide = () => {
  return (
    <PageLayout
      title="Trading Guide"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Support' }, { name: 'Trading Guide' }]}
      description="A comprehensive guide to help beginners and experienced traders succeed on FX777."
    >
      <div className="space-y-10">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            Whether you're completely new to trading or looking to refine your skills, this guide covers everything
            from the basics of financial markets to advanced trading strategies. Work through each module at your own pace.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { count: '5', label: 'Learning Modules' },
            { count: '3.5h', label: 'Total Duration' },
            { count: 'Free', label: 'Always Free' },
          ].map(({ count, label }) => (
            <div key={label} className="bg-gray-50 rounded-xl py-4 px-3">
              <p className="text-2xl font-extrabold text-primary-600">{count}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-dark-900">Learning Modules</h2>
          {modules.map(({ Icon, number, title, level, duration, topics }) => (
            <div key={number} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-primary-200 hover:shadow-sm transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-extrabold text-gray-100 leading-none">{number}</span>
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-dark-900 text-lg">{title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${levelColors[level]}`}>{level}</span>
                    <span className="text-xs text-gray-400">{duration} read</span>
                  </div>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to put your knowledge to use?</h2>
          <p className="text-primary-100 mb-6 text-sm">Open a free account and start trading with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://fx777crm.theplatformapi.com/auth-pages/create-account/step1?accountType=real" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-700 font-bold px-7 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors text-center">
              Open Free Account
            </a>
            <Link to="/support/help-center" className="bg-dark-900/30 text-white border border-white/20 font-bold px-7 py-3 rounded-xl text-sm hover:bg-dark-900/50 transition-colors text-center">
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default TradingGuide
