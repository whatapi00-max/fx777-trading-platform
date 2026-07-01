import { Shield, Search, AlertCircle, FileCheck, Ban, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const amlSteps = [
  {
    Icon: Search,
    title: 'Customer Due Diligence (CDD)',
    items: [
      'Mandatory KYC verification before account activation',
      'Collection and verification of government-issued identity documents',
      'Source of funds declaration for large deposits',
      'Enhanced due diligence for high-risk customers',
    ],
  },
  {
    Icon: AlertCircle,
    title: 'Transaction Monitoring',
    items: [
      'Automated real-time monitoring of all transactions',
      'Suspicious transaction reporting to Financial Intelligence Unit (FIU)',
      'Monitoring of unusual trading patterns and frequency',
      'Threshold-based alerts for large cash transactions',
    ],
  },
  {
    Icon: Ban,
    title: 'Prohibited Activities',
    items: [
      'Structuring transactions to avoid reporting thresholds',
      'Using third-party accounts to fund your trading account',
      'Round-tripping of funds through multiple accounts',
      'Any transaction linked to listed terrorist organisations or sanctioned entities',
    ],
  },
  {
    Icon: FileCheck,
    title: 'Reporting Obligations',
    items: [
      'Cash Transaction Reports (CTR) for transactions above ₹10 lakhs',
      'Suspicious Transaction Reports (STR) filed with FIU-IND',
      'Cross-Border Wire Transfer Reports as required',
      'Counterfeit Currency Reports when applicable',
    ],
  },
]

const AMLPolicy = () => {
  return (
    <PageLayout
      title="AML Policy"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'AML Policy' }]}
      description="FX777's Anti-Money Laundering and Counter-Terrorism Financing Policy."
    >
      <div className="space-y-10">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-dark-900 mb-2">Our Commitment</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                FX777 Financial Services Pvt. Ltd. is committed to the highest standards of Anti-Money Laundering
                (AML) and Counter-Terrorism Financing (CTF) compliance. We comply with the Prevention of Money
                Laundering Act (PMLA) 2002, SEBI AML/CFT guidelines, and all applicable Indian regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {amlSteps.map(({ Icon, title, items }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-bold text-dark-900">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-dark-900">Regulatory Framework</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our AML program is governed by the following Indian regulations and guidelines:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Prevention of Money Laundering Act (PMLA) 2002',
              'SEBI AML/CFT Guidelines for Intermediaries',
              'Financial Intelligence Unit India (FIU-IND) Reporting',
              'RBI Guidelines on KYC/AML for Financial Entities',
              'Prevention of Money Laundering Rules 2005',
              'Foreign Exchange Management Act (FEMA) 1999',
            ].map((reg, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                <FileCheck className="w-4 h-4 text-primary-500 flex-shrink-0" />
                {reg}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-900 text-white rounded-xl p-6">
          <h2 className="text-lg font-bold mb-3">Report Suspicious Activity</h2>
          <p className="text-sm text-gray-300 mb-4">
            If you suspect any AML-related activity or have concerns about transactions on your account,
            please contact our Compliance team immediately.
          </p>
          <div className="text-sm text-gray-300">
            <p>Email: compliance@fx777.com</p>
            <p>Phone: +91 XXXX XXX XXX (AML Helpline)</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AMLPolicy
