import { Link } from 'react-router-dom'
import { FileText, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the FX777 trading platform ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of the Platform immediately. These terms apply to all users, including traders, guests, and third-party partners.`,
  },
  {
    title: '2. Eligibility',
    content: `To open an account and use our services, you must be at least 18 years of age, a resident of India, possess a valid PAN card, Aadhaar card, and bank account, and not be on any regulatory blacklist. We reserve the right to reject applications at our discretion.`,
  },
  {
    title: '3. Account Registration',
    content: `You are responsible for maintaining the confidentiality of your login credentials. Any activity conducted through your account is your responsibility. You must notify us immediately of any unauthorised access. FX777 shall not be liable for losses arising from unauthorised account access due to your negligence.`,
  },
  {
    title: '4. Trading Services',
    content: `FX777 provides access to markets including NSE, MCX, Forex, US Stocks, Cryptocurrencies, and COMEX. Trading involves substantial risk of loss. You should only trade with capital you can afford to lose. Past performance does not guarantee future results. Margin trading amplifies both profits and losses.`,
  },
  {
    title: '5. Fees and Charges',
    content: `Our fee schedule is published on the Platform and may be updated from time to time. You agree to pay all applicable brokerage, transaction, regulatory, and other charges. STT, exchange fees, GST, and SEBI turnover charges apply as per applicable law. Fees are non-refundable once a transaction is executed.`,
  },
  {
    title: '6. Fund Management',
    content: `Client funds are held separately from FX777's own funds in designated bank accounts with leading scheduled banks. We process withdrawals within 24 hours on business days. FX777 shall not be held responsible for delays caused by banking partners or regulatory holds.`,
  },
  {
    title: '7. Risk Disclosure',
    content: `Trading in financial instruments carries a high degree of risk. You acknowledge that you understand the risks involved and are financially and emotionally prepared to bear such risks. FX777 recommends that you seek independent financial advice before trading.`,
  },
  {
    title: '8. Prohibited Activities',
    content: `You may not use the Platform for money laundering, market manipulation, insider trading, front-running, or any other activity prohibited by law. Any such activity will result in immediate account termination and referral to regulatory authorities.`,
  },
  {
    title: '9. Termination',
    content: `FX777 reserves the right to suspend or terminate your account at any time, with or without notice, for violation of these terms, regulatory requirements, or at our sole discretion. Upon termination, any open positions may be squared off at market price.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India. FX777 is regulated by SEBI and complies with all applicable Indian financial regulations.`,
  },
]

const TermsConditions = () => {
  return (
    <PageLayout
      title="Terms & Conditions"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'Terms & Conditions' }]}
      description="Please read these terms carefully before using the FX777 trading platform."
    >
      <div className="space-y-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
          <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Last Updated: January 1, 2026.</strong> These Terms and Conditions form a legally binding agreement between you and FX777 Financial Services Pvt. Ltd. Please read them carefully.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-3">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Privacy Policy', href: '/legal/privacy-policy' },
            { label: 'Risk Disclosure', href: '/legal/risk-disclosure' },
            { label: 'AML Policy', href: '/legal/aml-policy' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="flex items-center justify-between bg-primary-50 border border-primary-200 rounded-xl p-4 hover:bg-primary-100 transition-colors group"
            >
              <span className="font-semibold text-sm text-primary-700">{label}</span>
              <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default TermsConditions
