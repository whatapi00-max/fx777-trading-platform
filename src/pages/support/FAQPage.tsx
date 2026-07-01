import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, HelpCircle } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const faqCategories = [
  {
    category: 'Getting Started',
    items: [
      {
        question: 'What is FX777?',
        answer: 'FX777 is a premium global trading platform regulated by SEBI. We offer trading in NSE Futures & Options, MCX Commodities, Forex, US Stocks, Cryptocurrencies, and COMEX Commodities — all from a single account.',
      },
      {
        question: 'How do I open a trading account?',
        answer: 'Opening an account takes about 10 minutes. You need your PAN card, Aadhaar card, bank details, and a signature. The entire process is paperless. Your account is activated within 24 hours.',
      },
      {
        question: 'Is there a minimum deposit required?',
        answer: 'There is no minimum amount required to open an account. However, you need sufficient balance in your trading account to take positions. Margin requirements vary by instrument.',
      },
      {
        question: 'What documents do I need for KYC?',
        answer: 'You need a PAN card (mandatory), Aadhaar card or passport, a cancelled cheque or bank statement, and income proof (ITR or salary slip). Video KYC is available for quick activation.',
      },
    ],
  },
  {
    category: 'Trading & Products',
    items: [
      {
        question: 'What markets can I trade on FX777?',
        answer: 'You can trade NSE Equity, NSE Futures & Options, MCX Commodity Futures, Currency Futures, US Stocks and Indices, Major Cryptocurrencies, and COMEX Commodities.',
      },
      {
        question: 'What leverage do you offer?',
        answer: 'We offer up to 500X margin on NSE and MCX Futures, 200X on COMEX and Currency, and 10X on Option Buying. Leverage is subject to exchange regulations and may vary.',
      },
      {
        question: 'What are the trading hours?',
        answer: 'NSE Equity: 9:15 AM – 3:30 PM IST (Mon-Fri). MCX Commodities: 9:00 AM – 11:30 PM IST. Currency: 9:00 AM – 5:00 PM IST. Crypto: 24/7. US Markets: 6:30 PM – 1:00 AM IST.',
      },
      {
        question: 'Do you provide research or trading tips?',
        answer: 'Yes, we provide daily market analysis, sector reports, and educational content. However, this is for informational purposes only and does not constitute investment advice.',
      },
    ],
  },
  {
    category: 'Fees & Charges',
    items: [
      {
        question: 'What are the brokerage charges?',
        answer: 'For Intraday and F&O trades, we charge a flat fee of ₹20 per executed order or 0.03%, whichever is lower. There are no charges for account opening or maintenance.',
      },
      {
        question: 'Are there any hidden charges?',
        answer: 'No hidden charges. You only pay exchange transaction charges, STT, GST on brokerage, SEBI turnover fees, and stamp duty as applicable. All charges are transparently listed.',
      },
      {
        question: 'What are the DP charges?',
        answer: 'Depository Participant (DP) charges of ₹13.5 + GST per scrip per day apply when you sell equity shares held in your demat account. This is a NSDL/CDSL statutory charge.',
      },
    ],
  },
  {
    category: 'Funds & Withdrawals',
    items: [
      {
        question: 'How do I deposit funds?',
        answer: 'You can deposit funds via UPI, Net Banking, NEFT/RTGS, or IMPS. Deposits are processed instantly to immediately. Maximum UPI deposit is ₹1 lakh per transaction.',
      },
      {
        question: 'How long do withdrawals take?',
        answer: 'Withdrawals are processed within 24 hours on working days. Funds are credited to your registered bank account via NEFT/IMPS. There are no withdrawal charges.',
      },
      {
        question: 'Is my money safe with FX777?',
        answer: 'Yes. Client funds are held in segregated accounts with scheduled banks, completely separate from FX777\'s own funds. We are SEBI registered and subject to regular audits.',
      },
    ],
  },
  {
    category: 'Platform & Technology',
    items: [
      {
        question: 'Can I trade on mobile?',
        answer: 'Yes, our mobile app is available for both iOS and Android. It features live charts, advanced order types, market depth, portfolio management, and real-time P&L.',
      },
      {
        question: 'What happens if the platform goes down during trading?',
        answer: 'In case of technical issues, you can call our dealer desk to place or modify orders. All open positions are protected by our automatic risk management system.',
      },
      {
        question: 'Do you offer an API for algo trading?',
        answer: 'Yes, we offer a REST API and WebSocket API for algorithmic trading. Contact our support team for API documentation and partnership enquiries.',
      },
    ],
  },
]

const FAQPage = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggle = (key: string) => setOpenItem(prev => prev === key ? null : key)

  return (
    <PageLayout
      title="Frequently Asked Questions"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Support' }, { name: 'FAQ' }]}
      description="Answers to the most common questions about FX777's trading platform and services."
    >
      <div className="space-y-10">
        <div className="space-y-8">
          {faqCategories.map(({ category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-primary-500" />
                <h2 className="text-xl font-bold text-dark-900">{category}</h2>
              </div>
              <div className="space-y-3">
                {items.map(({ question, answer }, i) => {
                  const key = `${category}-${i}`
                  const isOpen = openItem === key
                  return (
                    <div key={key} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-dark-900 text-sm pr-4">{question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4">
                          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-2">Didn't find your answer?</h2>
          <p className="text-primary-100 text-sm mb-5">Our support team is available Monday–Saturday, 9am–6pm IST.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default FAQPage
