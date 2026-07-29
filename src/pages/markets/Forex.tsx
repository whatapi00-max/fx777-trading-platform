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
import { getMetadata } from '../../data/seoMetadata'
import { TrendingUp, Shield, Globe, Clock } from 'lucide-react'

const Forex = () => {
  const metadata = getMetadata('forex')

  const features = [
    { icon: TrendingUp, title: '24/5 Trading', description: 'Trade forex 24 hours a day, 5 days a week across global markets' },
    { icon: Shield, title: 'Tight Spreads', description: 'Benefit from competitive spreads starting from 0.1 pips on major pairs' },
    { icon: Globe, title: '50+ Currency Pairs', description: 'Access majors, minors, and exotic currency pairs from around the world' },
    { icon: Clock, title: 'Instant Execution', description: 'Lightning-fast order execution with minimal slippage' },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Account', description: 'Complete KYC verification and activate your forex trading account' },
    { number: 2, title: 'Fund Account', description: 'Deposit funds via bank transfer, UPI, or card' },
    { number: 3, title: 'Choose Pair', description: 'Select from 50+ currency pairs including EUR/USD, GBP/USD, USD/JPY' },
    { number: 4, title: 'Start Trading', description: 'Execute trades with up to 200X leverage and real-time charts' },
  ]

  const whyFX777Benefits = [
    'Zero brokerage on all forex trades - keep 100% of your profits',
    'Up to 200X leverage for maximum capital efficiency',
    'Trade 50+ currency pairs including majors, minors, and exotics',
    '24/5 market access - trade anytime during weekdays',
    'Advanced charting with 100+ technical indicators',
    'Real-time market news and economic calendar',
    'Mobile app for trading on the go',
    'Dedicated forex specialists for support',
  ]

  const tradingExampleData = {
    title: 'EUR/USD Trading Example',
    description: 'You believe the Euro will strengthen against the US Dollar',
    rows: [
      { label: 'Currency Pair', value: 'EUR/USD' },
      { label: 'Entry Price', value: '1.1000' },
      { label: 'Position Size', value: '1 Standard Lot (€100,000)' },
      { label: 'Margin Required (200X)', value: '€500 (~₹45,000)' },
      { label: 'Exit Price', value: '1.1050' },
      { label: 'Profit', value: '50 pips = $500 (~₹42,000)', highlight: true },
    ],
  }

  const faqs = [
    {
      question: 'What is Forex trading?',
      answer: 'Forex (Foreign Exchange) trading involves buying and selling currency pairs to profit from exchange rate fluctuations. For example, if you think the Euro will strengthen against the Dollar, you buy EUR/USD. If the Euro rises, you profit. Forex is the world\'s largest financial market with $6+ trillion daily volume.',
    },
    {
      question: 'What are the major currency pairs?',
      answer: 'Major pairs include EUR/USD (Euro/Dollar), GBP/USD (Pound/Dollar), USD/JPY (Dollar/Yen), USD/CHF (Dollar/Swiss Franc), AUD/USD (Aussie/Dollar), USD/CAD (Dollar/Canadian Dollar), and NZD/USD (Kiwi/Dollar). These pairs have the highest liquidity and tightest spreads.',
    },
    {
      question: 'What is a pip in forex?',
      answer: 'A pip (percentage in point) is the smallest price movement in forex. For most pairs, 1 pip = 0.0001. For example, if EUR/USD moves from 1.1000 to 1.1001, that\'s a 1 pip movement. Pip value determines your profit/loss on each trade.',
    },
    {
      question: 'How much leverage can I use?',
      answer: 'FX777 offers up to 200X leverage on forex pairs. This means with ₹1,000 margin, you can control a position worth ₹2,00,000. While leverage amplifies profits, it also increases risk. Always use stop-losses and risk management.',
    },
    {
      question: 'What are forex trading hours?',
      answer: 'Forex markets operate 24/5, opening Sunday 5 PM EST and closing Friday 5 PM EST. Major trading sessions: Sydney (5:00 PM - 2:00 AM EST), Tokyo (7:00 PM - 4:00 AM EST), London (3:00 AM - 12:00 PM EST), New York (8:00 AM - 5:00 PM EST). Overlap periods have highest volatility.',
    },
    {
      question: 'What factors affect currency prices?',
      answer: 'Currency prices are influenced by: interest rates, economic data (GDP, employment, inflation), central bank policies, political events, trade balances, and market sentiment. Major news releases can cause significant volatility. Use our economic calendar to track important events.',
    },
    {
      question: 'Can I trade forex on mobile?',
      answer: 'Yes! Our mobile app provides full forex trading capabilities. Access real-time charts, place orders, manage positions, and monitor markets from anywhere. Available for iOS and Android with biometric login for security.',
    },
    {
      question: 'What is the minimum deposit for forex trading?',
      answer: 'You can start forex trading with as little as ₹5,000. However, we recommend starting with at least ₹25,000 for proper risk management. Remember to only trade with money you can afford to lose.',
    },
  ]

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
        title="Forex Trading"
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Markets' }, { name: 'Forex' }]}
        description="Trade 50+ currency pairs with zero brokerage, up to 200X leverage, and 24/5 market access"
      >
      <div className="space-y-16">
        <FeatureGrid features={features} />

        <ContentSection heading="What is Forex Trading?" variant="highlight">
          <p>
            The Foreign Exchange (Forex) market is the world's largest and most liquid financial market, with over $6 trillion traded daily. Forex trading involves buying one currency while simultaneously selling another, profiting from exchange rate fluctuations between currency pairs.
          </p>
          <p>
            Unlike stock markets, forex operates 24 hours a day, 5 days a week, allowing you to trade at your convenience. With FX777, you get access to 50+ currency pairs including majors (EUR/USD, GBP/USD), minors (EUR/GBP, AUD/NZD), and exotics (USD/TRY, EUR/ZAR) - all with zero brokerage and competitive spreads.
          </p>
          <p>
            Whether you're a day trader capitalizing on short-term movements or a swing trader holding positions for days, our platform provides the tools, leverage, and support you need to succeed in the forex market.
          </p>
        </ContentSection>

        <HowItWorks title="How to Start Forex Trading" steps={howItWorksSteps} />

        <TradingExample {...tradingExampleData} />
        
        <ContentSection heading="Important Disclaimer" variant="highlight">
          <p className="text-sm text-gray-600">
            This is a simplified example. Actual trading involves spreads, overnight charges, and market volatility. Forex trading carries significant risk. Past performance does not guarantee future results.
          </p>
        </ContentSection>

        <BenefitsList title="Why Trade Forex on FX777?" benefits={whyFX777Benefits} />

        <RiskWarning 
          title="Forex Trading Risks"
          points={[
            'Forex trading involves substantial risk of loss due to leverage and market volatility',
            'Currency prices can move rapidly, and losses can exceed your initial investment',
            'Only trade with money you can afford to lose',
            'Use stop-losses and manage position sizes carefully',
            'Never risk more than 2% of your capital on a single trade',
            'Past performance does not guarantee future results',
          ]}
        />

        <FAQSection faqs={faqs} />

        <CTASection 
          heading="Start Trading Forex Today"
          description="Join thousands of traders who trust FX777 for forex trading. Open your account in minutes and access global currency markets with zero brokerage."
        />
      </div>
      </PageLayout>
    </>
  )
}

export default Forex
