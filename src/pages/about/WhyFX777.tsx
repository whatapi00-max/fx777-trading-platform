import PageLayout from '../../components/Layout/PageLayout'
import { Award, Shield, Users, TrendingUp, Clock, Zap } from 'lucide-react'

const WhyFX777 = () => {
  const reasons = [
    { icon: Award, title: 'Industry Leader', description: 'Over 10 years of excellence in trading services' },
    { icon: Shield, title: 'Regulated & Secure', description: 'Fully regulated with top-tier security measures' },
    { icon: Users, title: '50K+ Traders', description: 'Join thousands of satisfied active traders' },
    { icon: TrendingUp, title: 'Zero Brokerage', description: 'No brokerage fees on most instruments' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer support' },
    { icon: Zap, title: 'Fast Execution', description: 'Lightning-fast order execution technology' },
  ]

  return (
    <PageLayout
      title="Why FX777?"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }, { name: 'Why FX777?' }]}
      description="Discover what makes FX777 the preferred choice for traders worldwide."
    >
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </section>

        <section className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-200">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Our Commitment to Excellence</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>At FX777, we're committed to providing the best trading experience possible. Our platform combines cutting-edge technology with personalized service to help you achieve your trading goals.</p>
            <p>We believe in transparency, fair pricing, and putting our clients first. That's why we offer zero brokerage on most instruments, competitive spreads, and industry-leading leverage options.</p>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">Ready to Experience the Difference?</h3>
            <p className="text-dark-800 mb-6 max-w-2xl mx-auto">Join FX777 today and discover why we're the preferred choice for traders</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">Open Account</button>
              <button className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default WhyFX777
