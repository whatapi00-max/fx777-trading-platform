import PageLayout from '../../components/Layout/PageLayout'
import { Briefcase, Settings, Shield, TrendingUp } from 'lucide-react'

const WhiteLabel = () => {
  const features = [
    { icon: Briefcase, title: 'Your Brand', description: 'Fully customizable platform with your branding' },
    { icon: Settings, title: 'Complete Control', description: 'Full control over pricing and features' },
    { icon: Shield, title: 'Regulatory Support', description: 'Assistance with regulatory compliance' },
    { icon: TrendingUp, title: 'Revenue Sharing', description: 'Attractive revenue sharing models' },
  ]

  return (
    <PageLayout
      title="White Label Solutions"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }, { name: 'White Label' }]}
      description="Launch your own branded trading platform with our white label solutions."
    >
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </section>

        <section className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-200">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">White Label Platform</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Our white label solution allows you to launch your own branded trading platform quickly and cost-effectively. We provide the technology, infrastructure, and support while you focus on growing your business.</p>
            <p>Perfect for financial institutions, brokers, and entrepreneurs looking to enter the trading industry with a proven platform.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">What's Included</h2>
          <div className="space-y-4 text-gray-700">
            <p>• Fully branded trading platform (web and mobile)</p>
            <p>• Complete back-office and CRM system</p>
            <p>• Risk management tools</p>
            <p>• Payment gateway integration</p>
            <p>• Technical support and maintenance</p>
            <p>• Marketing materials and resources</p>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">Launch Your Trading Platform</h3>
            <p className="text-dark-800 mb-6 max-w-2xl mx-auto">Contact us to discuss your white label requirements</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">Request Demo</button>
              <button className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">Contact Sales</button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default WhiteLabel
