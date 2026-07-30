import PageLayout from '../../components/Layout/PageLayout'
import FeatureGrid from '../../components/Content/FeatureGrid'
import ContentSection from '../../components/Content/ContentSection'
import TradingExample from '../../components/Content/TradingExample'
import BenefitsList from '../../components/Content/BenefitsList'
import HowItWorks from '../../components/Content/HowItWorks'
import FAQSection from '../../components/Content/FAQSection'
import RiskWarning from '../../components/Content/RiskWarning'
import CTASection from '../../components/Content/CTASection'
import SEO from '../../components/SEO'
import { marketPages } from '../../data/pageContent'
import { getMetadata } from '../../data/seoMetadata'
import { TrendingUp, Shield, Zap, Clock } from 'lucide-react'

const NSE = () => {
  const content = marketPages.nse
  const metadata = getMetadata('nse')

  const features = [
    { icon: TrendingUp, title: content.features[0].title, description: content.features[0].description },
    { icon: Shield, title: content.features[1].title, description: content.features[1].description },
    { icon: Zap, title: content.features[2].title, description: content.features[2].description },
    { icon: Clock, title: content.features[3].title, description: content.features[3].description },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Account', description: 'Complete KYC and activate your F&O trading account with FX777' },
    { number: 2, title: 'Add Funds', description: 'Deposit margin via UPI, bank transfer, or card to start trading' },
    { number: 3, title: 'Select Contract', description: 'Choose from Nifty, Bank Nifty, or stock F&O contracts' },
    { number: 4, title: 'Trade & Monitor', description: 'Place orders, set stop-losses, and square off before expiry' },
  ]

  const additionalBenefits = [
    'Access Nifty 50, Bank Nifty, and Fin Nifty indices',
    'Trade stock futures and options on top Indian companies',
    'Zero brokerage means more profits in every trade',
    'Hedge your equity portfolio with index options',
    'Weekly and monthly expiry contracts available',
    'Live market depth and order book for better execution',
    'One-click order placement for fast-moving markets',
    'Daily market analysis and trading insights',
  ]

  const riskPoints = [
    'F&O trading involves leverage and can result in losses exceeding margin',
    'Market volatility can cause rapid price movements against your position',
    'Options can expire worthless if the market does not move as expected',
    'Time decay (theta) erodes option premiums as expiry approaches',
    'Always use stop-losses and maintain adequate margin',
    'Never trade with borrowed money or funds you cannot afford to lose',
  ]

  const niftyExample = {
    title: 'Nifty Futures Trading Example',
    description: 'Profiting from index movement with leverage:',
    rows: [
      { label: 'Instrument', value: 'Nifty 50 Futures' },
      { label: 'Lot Size', value: '50 units' },
      { label: 'Buy Price', value: '₹19,500' },
      { label: 'Contract Value', value: '₹9,75,000' },
      { label: 'Margin Required (500X)', value: '₹1,950' },
      { label: 'Sell Price', value: '₹19,600' },
      { label: 'Points Gained', value: '100 points' },
      { label: 'Profit (50 × 100)', value: '₹5,000', highlight: true },
      { label: 'Return on Margin', value: '256%', highlight: true },
    ],
  }

  const bankNiftyExample = {
    title: 'Bank Nifty Options Example',
    description: 'Trading index options for limited risk:',
    rows: [
      { label: 'Instrument', value: 'Bank Nifty Call Option' },
      { label: 'Strike Price', value: '₹45,000' },
      { label: 'Premium Paid', value: '₹200 per unit' },
      { label: 'Lot Size', value: '15 units' },
      { label: 'Total Premium', value: '₹3,000' },
      { label: 'Bank Nifty Closes At', value: '₹45,500' },
      { label: 'Intrinsic Value', value: '₹500 per unit' },
      { label: 'Gross Profit', value: '₹4,500', highlight: true },
      { label: 'Return on Premium', value: '150%', highlight: true },
    ],
  }

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
        title={content.hero.title}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Markets', href: '/markets/nse' },
          { name: 'NSE' },
        ]}
        description={content.hero.description}
      >
        <div className="space-y-16">
          <FeatureGrid features={features} />

          <ContentSection heading={content.mainContent.heading} variant="highlight">
            {content.mainContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ContentSection>

          <ContentSection heading={content.whyFX777.heading}>
            <ul className="space-y-3">
              {content.whyFX777.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ContentSection>

          <HowItWorks title="How NSE F&O Trading Works" steps={howItWorksSteps} />

          <div className="grid md:grid-cols-2 gap-8">
            <TradingExample {...niftyExample} />
            <TradingExample {...bankNiftyExample} />
          </div>

          <BenefitsList
            title="More Reasons to Trade NSE F&O on FX777"
            benefits={additionalBenefits}
          />

          <RiskWarning
            title="NSE F&O Trading Risks"
            points={riskPoints}
          />

          <FAQSection faqs={content.faqs} />

          <CTASection 
            heading={content.cta.heading}
            description={content.cta.description}
          />
        </div>
      </PageLayout>
    </>
  )
}

export default NSE
