import PageLayout from '../../components/Layout/PageLayout'

const Terms = () => {
  return (
    <PageLayout
      title="Terms & Conditions"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Trading' }, { name: 'Terms' }]}
      description="Read our trading terms and conditions carefully before you start trading."
    >
      <div className="space-y-8">
        <section className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">1. General Terms</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>By using our trading platform, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully before using our services.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Trading Risks</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Trading in financial markets involves substantial risk of loss. You should only trade with money you can afford to lose. Past performance is not indicative of future results.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Margin Requirements</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Margin trading amplifies both gains and losses. You must maintain minimum margin requirements at all times. Failure to do so may result in automatic position liquidation.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Account Security</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Fees and Charges</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>While we offer zero brokerage on many instruments, other charges such as exchange fees, regulatory fees, and taxes may apply as per applicable regulations.</p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl border border-primary-200">
          <h3 className="text-xl font-bold text-dark-900 mb-4">Questions about our terms?</h3>
          <p className="text-gray-700 mb-4">Contact our support team for clarification on any terms and conditions.</p>
          <button className="bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md">
            Contact Support
          </button>
        </section>
      </div>
    </PageLayout>
  )
}

export default Terms
