import { UserCheck, FileText, Camera, Clock, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const kycLevels = [
  {
    level: 'Level 1 — Basic KYC',
    description: 'Required for all account holders. Covers identity and address verification.',
    documents: ['PAN Card (mandatory)', 'Aadhaar Card or Passport or Voter ID', 'Recent passport-size photograph', 'Specimen signature'],
    limit: 'Allows trading up to ₹50,000 per day',
  },
  {
    level: 'Level 2 — Full KYC',
    description: 'Enables full access to all trading instruments and higher limits.',
    documents: [
      'All Level 1 documents',
      'Bank account statement or cancelled cheque',
      'Income proof (ITR, salary slip, or bank statement)',
      'In-person verification or video KYC',
    ],
    limit: 'Unlimited trading access across all instruments',
  },
]

const steps = [
  { Icon: FileText,  step: '01', title: 'Submit Documents',   desc: 'Upload your PAN, Aadhaar, and other required documents through our secure portal.' },
  { Icon: UserCheck, step: '02', title: 'Identity Verification', desc: 'Our team verifies your documents with the respective authorities within 24 hours.' },
  { Icon: Camera,    step: '03', title: 'Video KYC',            desc: 'Complete a quick video call with our KYC officer for full account activation.' },
  { Icon: Clock,     step: '04', title: 'Account Activation',   desc: 'Your account is activated within 24-48 hours after successful verification.' },
]

const KYCPolicy = () => {
  return (
    <PageLayout
      title="KYC Policy"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'KYC Policy' }]}
      description="Know Your Customer requirements and verification process at FX777."
    >
      <div className="space-y-10">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            FX777 is required by SEBI regulations and the Prevention of Money Laundering Act (PMLA) to verify
            the identity of all customers before they can trade. KYC (Know Your Customer) is a one-time process
            that protects you and ensures a safe trading environment for everyone.
          </p>
        </div>

        {/* KYC process steps */}
        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-6">KYC Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ Icon, step, title, desc }) => (
              <div key={step} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-extrabold text-primary-100">{step}</span>
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                </div>
                <h3 className="font-bold text-dark-900 mb-1.5 text-sm">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KYC levels */}
        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-6">KYC Levels</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {kycLevels.map(({ level, description, documents, limit }) => (
              <div key={level} className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-dark-900 mb-2">{level}</h3>
                <p className="text-sm text-gray-500 mb-4">{description}</p>
                <ul className="space-y-2 mb-4">
                  {documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-primary-700">{limit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-dark-900 mb-4">Data Security & Compliance</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'All KYC data is encrypted and stored securely',
              'Data is shared only with SEBI-mandated entities',
              'Regular audits by independent security firms',
              'Compliant with UIDAI guidelines for Aadhaar usage',
              'DigiLocker integration for paperless verification',
              'Video KYC compliant with RBI circular on V-CIP',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default KYCPolicy
