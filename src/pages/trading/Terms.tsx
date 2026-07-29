import { Link } from 'react-router-dom'
import { FileText, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'
import SEO from '../../components/SEO'
import { getMetadata } from '../../data/seoMetadata'

const sections = [
  {
    title: '1. Eligibility',
    content: `The FX777 Referral Bonus is available to all current FX777 clients who refer new users to our platform. Both the referring client (referrer) and the new client (referee) must meet the criteria outlined in this policy to be eligible for the bonus.`,
  },
  {
    title: '2. Referral Process',
    content: `To qualify for the referral bonus, the referrer must provide the unique referral link or code issued by FX777 to the referee. The referee must use this link or code during account registration. Referrals through other methods, such as word of mouth or social media, may not qualify for the bonus.`,
  },
  {
    title: '3. Bonus Amount',
    content: `The referral bonus amount may vary and will be detailed in the promotional offer or communicated to the referrer. The bonus amount credited to the referrer may differ based on the terms of the referral promotion.`,
  },
  {
    title: '4. Conditions for Bonus Withdrawal',
    content: `To withdraw the referral bonus, both the referrer and the referee must meet any trading volume requirements specified in the promotional offer. The required trading volume is based on the total value of closed trades (buy and sell) in the client's account.`,
  },
  {
    title: '5. Restrictions and Prohibited Activities',
    content: `Abuse of the referral bonus, including but not limited to creating multiple accounts to refer oneself, coordinating referrals among multiple accounts, and other manipulative actions, is strictly prohibited. FX777 reserves the right to revoke the referral bonus and take further action if abuse or violations are detected.`,
  },
  {
    title: '6. Bonus Expiry',
    content: `The referral bonus has an expiry date, specified in the promotional offer. If the trading volume requirements are not met by this date, the referral bonus and any associated profits may be forfeited.`,
  },
  {
    title: '7. Modification and Termination',
    content: `FX777 reserves the right to modify or terminate the referral bonus program at any time without prior notice. Any changes will take effect immediately upon posting on the FX777 website or notifying clients.`,
  },
  {
    title: '8. Client Responsibility',
    content: `Both the referrer and the referee are responsible for reviewing and understanding the terms and conditions of the referral bonus program. Participation in the program indicates agreement to comply with this policy and any additional terms in the promotional offer.`,
  },
  {
    title: '9. Contact Information',
    content: `For questions or concerns about the referral bonus program, clients can reach FX777 customer support via email at support@fx777.in or through our website's live chat feature.`,
  },
  {
    title: '10. Referral Requirements',
    content: `To earn the referral bonus, the referrer must use the unique referral link or code provided by FX777.`,
  },
  {
    title: '11. Account Maintenance',
    content: `To avoid liquidation and ensure positions are carried forward, traders must maintain sufficient balance in their account. The system will check for required margins and equity; accounts will automatically stop out if the required amount is not maintained.`,
  },
  {
    title: '12. Expiry Time',
    content: `The daily expiry time is 12:30 AM. On the expiry day, the intraday margin for NSE options will increase to ₹7,000 per lot.`,
  },
  {
    title: '13. Crypto Holding Time',
    content: `The minimum holding period for cryptocurrency to book profits is 5 minutes. Profits realized before this time will not be considered.`,
  },
  {
    title: '14. Order Execution',
    content: `Limit/Stop orders and SL/TP orders will be executed based on bid and ask prices, not the Last Traded Price (LTP). This may result in orders being executed at prices higher or lower than anticipated, or not executed at all depending on bid and ask conditions.`,
  },
  {
    title: '15. Account Restrictions',
    content: `Accounts involved in options selling only will be terminated after total payout. Scalping is prohibited, and any trades found to be scalping will be removed. Trading from multiple accounts using the same IP address or VPN will result in profit removal. Group trading is not permitted; accounts associated with group trading will be terminated, and profits will be removed.`,
  },
]

const Terms = () => {
  const metadata = getMetadata('terms')

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
      title="Terms & Conditions"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Trading' }, { name: 'Terms' }]}
      description="Please read these terms carefully before using the FX777 trading platform."
    >
      <div className="space-y-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
          <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Last Updated: January 1, 2026.</strong> These Terms and Conditions form a legally binding agreement between you and FX777 Financial Services Pvt. Ltd. Please read them carefully.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map(({ title, content }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-3">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Privacy Policy', href: '/legal/privacy-policy' },
            { label: 'Cookie Policy', href: '/legal/cookie-policy' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="flex items-center justify-between bg-primary-50 border border-primary-200 rounded-xl p-4 hover:bg-primary-100 transition-colors group"
            >
              <span className="font-semibold text-sm text-primary-700">{label}</span>
              <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
      </PageLayout>
    </>
  )
}

export default Terms
