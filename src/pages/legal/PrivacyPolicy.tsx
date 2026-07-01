import { Link } from 'react-router-dom'
import { Shield, Eye, Database, Lock, UserCheck, Bell, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const sections = [
  {
    Icon: Database,
    title: 'Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number, date of birth)',
      'Financial information (bank account details, PAN card, Aadhaar card)',
      'Trading activity and transaction history',
      'Device information and IP address for security purposes',
      'KYC documents as required by regulatory authorities',
    ],
  },
  {
    Icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To open and maintain your trading and demat account',
      'To process transactions and provide trading services',
      'To comply with legal and regulatory requirements',
      'To send important account notifications and updates',
      'To improve our platform and customer service',
      'To detect and prevent fraud or unauthorised activity',
    ],
  },
  {
    Icon: Shield,
    title: 'Data Security',
    content: [
      'All data is encrypted using 256-bit SSL/TLS encryption',
      'We follow RBI and SEBI guidelines for data protection',
      'Regular security audits and penetration testing',
      'Two-factor authentication is available for all accounts',
      'Data stored on secure, ISO 27001 certified servers in India',
    ],
  },
  {
    Icon: UserCheck,
    title: 'Sharing of Information',
    content: [
      'We do not sell your personal information to third parties',
      'Information may be shared with SEBI, NSE, BSE, and other regulators as required by law',
      'We may share data with depository participants (NSDL/CDSL)',
      'Service providers who help operate our platform are bound by confidentiality agreements',
    ],
  },
  {
    Icon: Bell,
    title: 'Your Rights',
    content: [
      'Right to access the personal data we hold about you',
      'Right to correct inaccurate or incomplete data',
      'Right to request deletion of your data (subject to regulatory obligations)',
      'Right to opt out of marketing communications at any time',
      'Right to data portability where technically feasible',
    ],
  },
  {
    Icon: Lock,
    title: 'Cookies and Tracking',
    content: [
      'We use cookies to enhance your browsing experience and remember preferences',
      'Analytics cookies help us understand how users interact with our platform',
      'You can control cookie settings through your browser',
      'Disabling certain cookies may affect platform functionality',
    ],
  },
]

const PrivacyPolicy = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'Privacy Policy' }]}
      description="How FX777 collects, uses, and protects your personal information."
    >
      <div className="space-y-10">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-dark-900">Last updated: January 1, 2026.</strong> This Privacy Policy explains how FX777 
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and safeguards your personal information when you use our 
            trading platform. By using our services, you consent to the practices described in this policy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map(({ Icon, title, content }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-primary-200 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-lg font-bold text-dark-900">{title}</h2>
              </div>
              <ul className="space-y-2">
                {content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-dark-900 mb-3">Contact Us</h2>
          <p className="text-gray-600 text-sm mb-4">
            For any privacy-related queries or concerns, please contact our Data Protection Officer:
          </p>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Email:</strong> privacy@fx777.com</p>
            <p><strong>Address:</strong> FX777 Financial Services Pvt. Ltd., Mumbai, Maharashtra, India</p>
            <p><strong>Phone:</strong> +91 XXXX XXX XXX</p>
          </div>
          <div className="mt-5">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default PrivacyPolicy
