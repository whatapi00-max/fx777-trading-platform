import PageLayout from '../../components/Layout/PageLayout'
import SEO from '../../components/SEO'
import { getMetadata } from '../../data/seoMetadata'
import { TrendingUp, Shield, Globe, Zap } from 'lucide-react'

const COMEX = () => {
  const metadata = getMetadata('comex')

  const features = [
    { icon: Globe, title: 'Global Markets', description: 'Access international commodity exchanges' },
    { icon: Shield, title: 'Precious Metals', description: 'Trade gold, silver, platinum, and palladium' },
    { icon: TrendingUp, title: 'Energy Futures', description: 'Oil, natural gas, and energy commodities' },
    { icon: Zap, title: 'Fast Execution', description: 'Lightning-fast order execution' },
  ]

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
      title="COMEX Trading"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Markets' }, { name: 'COMEX' }]}
      description="Trade on the Commodity Exchange with access to precious metals and energy futures."
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
          <h2 className="text-3xl font-bold text-dark-900 mb-6">International Commodity Trading</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Trade on COMEX, the world's premier commodity exchange. Access precious metals like gold and silver, along with energy futures and other international commodities with competitive pricing and professional tools.</p>
          </div>
        </section>
        <section>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">Start COMEX Trading</h3>
            <p className="text-dark-800 mb-6 max-w-2xl mx-auto">Access global commodity markets</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://fx777crm.theplatformapi.com/auth-pages/create-account/step1?accountType=real" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-center">Open Account</a>
              <a href="/support/trading-guide" className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-center">Learn More</a>
            </div>
          </div>
        </section>
      </div>
      </PageLayout>
    </>
  )
}

export default COMEX
