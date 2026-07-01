import { Cookie, Settings, BarChart2, Shield, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const cookieTypes = [
  {
    Icon: Shield,
    name: 'Essential Cookies',
    required: true,
    description: 'These cookies are strictly necessary for the Platform to function. They enable core features such as login authentication, security, and session management.',
    examples: ['Session authentication token', 'CSRF protection cookie', 'Load balancer cookie'],
  },
  {
    Icon: BarChart2,
    name: 'Analytics Cookies',
    required: false,
    description: 'Help us understand how visitors interact with the Platform so we can improve performance and user experience. Data is aggregated and anonymised.',
    examples: ['Google Analytics (_ga, _gid)', 'Hotjar session recording', 'Page performance metrics'],
  },
  {
    Icon: Settings,
    name: 'Preference Cookies',
    required: false,
    description: 'Remember your settings and preferences so you have a personalised experience each time you visit.',
    examples: ['Language preference', 'Chart layout settings', 'Theme preference (light/dark)'],
  },
  {
    Icon: Cookie,
    name: 'Marketing Cookies',
    required: false,
    description: 'Used to deliver relevant advertisements and measure the effectiveness of marketing campaigns. You can opt out at any time.',
    examples: ['Google Ads remarketing', 'Facebook Pixel', 'Affiliate tracking'],
  },
]

const CookiePolicy = () => {
  return (
    <PageLayout
      title="Cookie Policy"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'Cookie Policy' }]}
      description="How FX777 uses cookies and similar tracking technologies."
    >
      <div className="space-y-10">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Last updated: January 1, 2026.</strong> FX777 uses cookies and similar technologies to enhance your 
            experience, analyse usage, and improve our services. This policy explains what cookies we use and how you can manage them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-2">What Are Cookies?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help websites remember your
            preferences, keep you logged in, and provide usage analytics. Cookies do not contain executable code and cannot
            access other files on your device.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-dark-900 mb-6">Types of Cookies We Use</h2>
          <div className="space-y-5">
            {cookieTypes.map(({ Icon, name, required, description, examples }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-dark-900">{name}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    required ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {required ? 'Required' : 'Optional'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {examples.map((ex, i) => (
                      <span key={i} className="text-xs bg-gray-50 text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-dark-900 mb-4">Managing Your Cookie Preferences</h2>
          <ul className="space-y-3">
            {[
              'You can control cookies through your browser settings at any time',
              'Most browsers allow you to block or delete cookies in their privacy settings',
              'Disabling essential cookies will affect Platform functionality',
              'You can opt out of Google Analytics via the Google Analytics Opt-out Browser Add-on',
              'For marketing cookies, you can opt out through the NAI opt-out tool',
              'Contact us at privacy@fx777.com to manage data preferences',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export default CookiePolicy
