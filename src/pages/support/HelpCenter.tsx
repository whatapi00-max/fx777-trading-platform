import { Link } from 'react-router-dom'
import {
  BookOpen,
  CreditCard,
  BarChart2,
  Shield,
  Smartphone,
  HelpCircle,
  ChevronRight,
  Phone,
  MessageSquare,
} from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const categories = [
  {
    Icon: CreditCard,
    title: 'Account & Funds',
    description: 'Opening accounts, deposits, withdrawals, and account management.',
    articles: [
      'How to open a trading account',
      'KYC verification process',
      'How to deposit funds',
      'Withdrawal process and timelines',
      'Account types explained',
    ],
  },
  {
    Icon: BarChart2,
    title: 'Trading',
    description: 'Order types, execution, positions, and trading strategies.',
    articles: [
      'How to place your first trade',
      'Understanding order types (Market, Limit, Stop)',
      'Margin and leverage explained',
      'How to read market depth',
      'Square-off timings',
    ],
  },
  {
    Icon: Shield,
    title: 'Security & Safety',
    description: 'Keeping your account safe and secure.',
    articles: [
      'Setting up two-factor authentication',
      'What to do if account is compromised',
      'Trusted device management',
      'Login activity monitoring',
    ],
  },
  {
    Icon: Smartphone,
    title: 'Mobile App',
    description: 'Installation, features, and troubleshooting the mobile app.',
    articles: [
      'Downloading and installing the app',
      'Biometric login setup',
      'App notification settings',
      'Troubleshooting connectivity issues',
    ],
  },
  {
    Icon: BookOpen,
    title: 'Platform Features',
    description: 'Charts, indicators, watchlists, and platform tools.',
    articles: [
      'Setting up your watchlist',
      'Using TradingView charts',
      'Adding technical indicators',
      'Creating price alerts',
      'Portfolio analysis tools',
    ],
  },
  {
    Icon: HelpCircle,
    title: 'General FAQs',
    description: 'Common questions about FX777 services.',
    articles: [
      'What markets can I trade?',
      'What are the trading hours?',
      'How is brokerage calculated?',
      'Tax implications of trading',
    ],
  },
]

const HelpCenter = () => {
  return (
    <PageLayout
      title="Help Center"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Support' }, { name: 'Help Center' }]}
      description="Find answers to your questions and learn how to make the most of FX777."
    >
      <div className="space-y-10">
        {/* Quick actions */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            to="/contact"
            className="flex items-center gap-3 bg-primary-50 border border-primary-200 rounded-xl p-4 hover:bg-primary-100 transition-colors group"
          >
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-dark-900 text-sm">Live Chat</p>
              <p className="text-xs text-gray-500">Avg. response: 2 min</p>
            </div>
            <ChevronRight className="w-4 h-4 text-primary-500 ml-auto group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:support@fx777.com"
            className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:bg-primary-50 transition-colors group"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-dark-900 text-sm">Email Support</p>
              <p className="text-xs text-gray-500">support@fx777.com</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-primary-200 hover:bg-primary-50 transition-colors group"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-dark-900 text-sm">Call Us</p>
              <p className="text-xs text-gray-500">Mon-Sat, 9am–6pm</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Browse by Topic</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(({ Icon, title, description, articles }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-dark-900 text-sm">{title}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {articles.map((article, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-primary-600 hover:text-primary-700 cursor-pointer">
                      <ChevronRight className="w-3 h-3 flex-shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Link to FAQ */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-primary-100 mb-6 text-sm">Browse our comprehensive FAQ or reach out to our support team.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/support/faq" className="bg-white text-primary-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors">
              View All FAQs
            </Link>
            <Link to="/contact" className="bg-dark-900 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-dark-800 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default HelpCenter
