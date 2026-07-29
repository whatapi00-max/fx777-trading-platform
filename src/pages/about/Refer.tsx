import PageLayout from '../../components/Layout/PageLayout'
import { Gift, Users, DollarSign, Share2 } from 'lucide-react'

const Refer = () => {
  const rewards = [
    { icon: Gift, title: 'Referral Bonus', description: 'Earn bonus for each successful referral' },
    { icon: Users, title: 'Friend Benefits', description: 'Your friends get special signup bonuses' },
    { icon: DollarSign, title: 'Cash Rewards', description: 'Get cash rewards credited to your account' },
    { icon: Share2, title: 'Easy Sharing', description: 'Share via email, social media, or direct link' },
  ]

  return (
    <PageLayout
      title="Refer a Friend"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }, { name: 'Refer' }]}
      description="Refer your friends to FX777 and earn rewards for both you and your friends."
    >
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => {
            const Icon = reward.icon
            return (
              <div key={index} className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{reward.title}</h3>
                <p className="text-gray-600">{reward.description}</p>
              </div>
            )
          })}
        </section>

        <section className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-200">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">How Referral Works</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <ol className="space-y-4">
              <li><strong>Get Your Link:</strong> Log in and get your unique referral link</li>
              <li><strong>Share:</strong> Share the link with friends and family</li>
              <li><strong>They Sign Up:</strong> Your friend creates an account using your link</li>
              <li><strong>Both Earn:</strong> You both receive rewards when they start trading</li>
            </ol>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">Start Referring Today</h3>
            <p className="text-dark-800 mb-6 max-w-2xl mx-auto">Share the benefits of FX777 with your friends and earn rewards</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://fx777crm.theplatformapi.com/auth-pages/login" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-center">Get Referral Link</a>
              <a href="/legal/terms-conditions" className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-center">View Terms</a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default Refer
