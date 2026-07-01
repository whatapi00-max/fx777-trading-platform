import PageLayout from '../../components/Layout/PageLayout'
import { DollarSign, Users, TrendingUp, Award } from 'lucide-react'

const Affiliate = () => {
  const benefits = [
    { icon: DollarSign, title: 'Generous Commissions', description: 'Earn competitive commissions on every referral' },
    { icon: Users, title: 'Unlimited Referrals', description: 'No limit on the number of clients you can refer' },
    { icon: TrendingUp, title: 'Recurring Income', description: 'Earn ongoing commissions from client trading' },
    { icon: Award, title: 'Marketing Support', description: 'Professional marketing materials and support' },
  ]

  return (
    <PageLayout
      title="Become an Agent / Affiliate"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }, { name: 'Affiliate' }]}
      description="Join our affiliate program and earn generous commissions by referring clients to FX777."
    >
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </section>

        <section className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-200">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">How It Works</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <ol className="space-y-4">
              <li><strong>Sign Up:</strong> Register for our affiliate program in minutes</li>
              <li><strong>Promote:</strong> Share your unique referral link with your network</li>
              <li><strong>Earn:</strong> Receive commissions when your referrals trade</li>
              <li><strong>Grow:</strong> Scale your income with unlimited referrals</li>
            </ol>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">Ready to Start Earning?</h3>
            <p className="text-dark-800 mb-6 max-w-2xl mx-auto">Join our affiliate program today and start earning commissions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">Apply Now</button>
              <button className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">Learn More</button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default Affiliate
