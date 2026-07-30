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

const Commodity = () => {
  const content = marketPages.commodity
  const metadata = getMetadata('commodity')

  const features = [
    { icon: TrendingUp, title: content.features[0].title, description: content.features[0].description },
    { icon: Shield, title: content.features[1].title, description: content.features[1].description },
    { icon: Zap, title: content.features[2].title, description: content.features[2].description },
    { icon: Clock, title: content.features[3].title, description: content.features[3].description },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Account', description: 'Complete KYC and activate your MCX commodity trading account' },
    { number: 2, title: 'Add Funds', description: 'Deposit margin via UPI, bank transfer, or card' },
    { number: 3, title: 'Choose Commodity', description: 'Select from gold, silver, crude oil, natural gas, and more' },
    { number: 4, title: 'Trade & Hedge', description: 'Buy or sell commodity futures based on market analysis' },
  ]

  const additionalBenefits = [
    'Trade precious metals like gold and silver for inflation hedging',
    'Energy commodities including crude oil and natural gas',
    'Base metals like copper, zinc, and aluminum for industrial exposure',
    'Agricultural commodities for portfolio diversification',
    'Zero brokerage on all commodity trades',
    'Extended trading hours to capture global price moves',
    'Real-time MCX prices and advanced commodity charts',
    'Low margin requirements with leverage up to 200X',
  ]

  const riskPoints = [
    'Commodity prices can be volatile due to global supply-demand shocks',
    'Leverage amplifies both profits and losses',
    'Weather, geopolitics, and currency movements affect commodity prices',
    'Overnight gaps can occur due to international market movements',
    'Always use stop-losses and maintain adequate margin',
    'Only trade with money you can afford to lose',
  ]

  const goldExample = {
    title: 'Gold Futures Trading Example',
    description: 'Hedging and profiting from gold price movement:',
    rows: [
      { label: 'Commodity', value: 'Gold Mini (MCX)' },
      { label: 'Contract Size', value: '100 grams' },
      { label: 'Buy Price', value: '₹60,000 per 10 grams' },
      { label: 'Contract Value', value: '₹6,00,000' },
      { label: 'Margin Required (200X)', value: '₹3,000' },
      { label: 'Sell Price', value: '₹61,000 per 10 grams' },
      { label: 'Price Difference', value: '₹1,000 per 10 grams' },
      { label: 'Total Profit', value: '₹10,000', highlight: true },
      { label: 'Return on Margin', value: '333%', highlight: true },
    ],
  }

  const crudeExample = {
    title: 'Crude Oil Futures Example',
    description: 'Trading energy commodity price movements:',
    rows: [
      { label: 'Commodity', value: 'Crude Oil (MCX)' },
      { label: 'Contract Size', value: '100 barrels' },
      { label: 'Buy Price', value: '₹5,500 per barrel' },
      { label: 'Contract Value', value: '₹5,50,000' },
      { label: 'Margin Required (200X)', value: '₹2,750' },
      { label: 'Sell Price', value: '₹5,600 per barrel' },
      { label: 'Price Difference', value: '₹100 per barrel' },
      { label: 'Total Profit', value: '₹10,000', highlight: true },
      { label: 'Return on Margin', value: '364%', highlight: true },
    ],
  }

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
      title={content.hero.title}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Markets', href: '/markets/commodity' },
        { name: 'Commodity' },
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

        <HowItWorks title="How Commodity Trading Works" steps={howItWorksSteps} />

        <div className="grid md:grid-cols-2 gap-8">
          <TradingExample {...goldExample} />
          <TradingExample {...crudeExample} />
        </div>

        <BenefitsList
          title="More Reasons to Trade Commodities on FX777"
          benefits={additionalBenefits}
        />

        <RiskWarning
          title="Commodity Trading Risks"
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

export default Commodity
