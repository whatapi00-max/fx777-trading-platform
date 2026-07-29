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
import { Zap, TrendingUp, Shield, Clock } from 'lucide-react'

const Intraday = () => {
  const metadata = getMetadata('intraday')

  const features = [
    { icon: Zap, title: 'Up to 500X Leverage', description: 'Maximize your intraday trading potential with high leverage on futures and options' },
    { icon: TrendingUp, title: 'Zero Brokerage', description: 'Keep 100% of your intraday profits - no commission fees on any trades' },
    { icon: Shield, title: 'Auto Square-Off', description: 'Automatic position closure before market close to prevent overnight risk' },
    { icon: Clock, title: 'Real-Time Execution', description: 'Lightning-fast order execution with live market data and advanced charts' },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Position', description: 'Buy or sell stocks/futures during market hours (9:15 AM - 3:30 PM)' },
    { number: 2, title: 'Monitor Market', description: 'Track price movements using real-time charts and technical indicators' },
    { number: 3, title: 'Set Stop-Loss', description: 'Protect your capital with automatic stop-loss orders' },
    { number: 4, title: 'Square Off', description: 'Close your position before 3:20 PM or let auto square-off handle it' },
  ]

  const whyFX777Benefits = [
    'Zero brokerage on all intraday trades - save thousands monthly',
    'Up to 500X leverage on NSE futures for maximum capital efficiency',
    'Advanced charting tools with 100+ technical indicators',
    'Real-time market scanners to identify trading opportunities',
    'Instant order execution with minimal slippage',
    'Auto square-off feature prevents overnight positions',
    'Mobile trading app for on-the-go access',
    'Dedicated support team available during market hours',
  ]

  const faqs = [
    {
      question: 'What is intraday trading?',
      answer: 'Intraday trading, also called day trading, means buying and selling stocks or futures within the same trading day. You must close all positions before the market closes at 3:30 PM. The main advantage is leverage - you can trade with much less capital than delivery trading.',
    },
    {
      question: 'How much leverage can I get for intraday trading?',
      answer: 'FX777 offers up to 500X leverage on NSE futures for intraday trading. For stocks, you typically get 5-10X leverage. This means with ₹10,000, you can take positions worth ₹50,000 to ₹5,00,000 depending on the instrument.',
    },
    {
      question: 'What happens if I don\'t close my intraday position?',
      answer: 'Our system automatically squares off all intraday positions around 3:20 PM to prevent overnight holdings. This auto square-off protects you from unintended delivery and overnight risk. We recommend closing positions manually to avoid last-minute price volatility.',
    },
    {
      question: 'Is intraday trading suitable for beginners?',
      answer: 'Intraday trading requires quick decision-making and market knowledge. Beginners should start with small positions, use stop-losses, and practice on paper trading first. Learn technical analysis basics and understand market volatility before committing significant capital.',
    },
    {
      question: 'How does zero brokerage benefit intraday traders?',
      answer: 'Intraday traders make multiple trades daily. Traditional brokers charge 0.03-0.05% per trade, which adds up quickly. With FX777\'s zero brokerage, you keep all your profits. For example, if you trade ₹10 lakh daily, you save ₹300-500 per day in brokerage fees.',
    },
    {
      question: 'What is the best time for intraday trading?',
      answer: 'The first hour (9:15-10:15 AM) and last hour (2:30-3:30 PM) typically see high volatility and volume. Many traders prefer 9:30-11:00 AM for momentum trades and 2:00-3:15 PM for trend reversals. Avoid trading during low-volume periods (12:00-1:30 PM).',
    },
    {
      question: 'Can I use technical indicators on FX777?',
      answer: 'Yes! Our platform provides 100+ technical indicators including Moving Averages, RSI, MACD, Bollinger Bands, Fibonacci retracements, and more. You can customize charts, save templates, and use multiple timeframes for better analysis.',
    },
    {
      question: 'What are the risks of intraday trading?',
      answer: 'Intraday trading is risky due to leverage and market volatility. You can lose your entire capital quickly if trades go against you. Always use stop-losses, never risk more than 2% per trade, avoid over-leveraging, and only trade with money you can afford to lose.',
    },
  ]

  const riskPoints = [
    'High leverage can amplify both profits and losses - you can lose more than your initial investment',
    'Market volatility can cause rapid price movements against your position',
    'Slippage during high volatility may result in execution at unfavorable prices',
    'Over-trading and emotional decisions can lead to significant losses',
    'Always use stop-loss orders and never risk more than 2% of capital per trade',
    'Intraday trading requires constant monitoring and quick decision-making',
  ]

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
      title="Intraday Trading"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Trading' }, { name: 'Intraday' }]}
      description="Master intraday trading with zero brokerage and up to 500X leverage. Trade stocks and futures within the same day with advanced tools and instant execution."
    >
      <div className="space-y-16">
        <FeatureGrid features={features} />

        <ContentSection heading="What is Intraday Trading?" variant="highlight">
          <p>
            Intraday trading is a popular trading style where you buy and sell financial instruments within the same trading day. Unlike delivery trading where you hold stocks for days or months, intraday positions must be closed before the market closes at 3:30 PM.
          </p>
          <p>
            The primary advantage of intraday trading is leverage. With FX777, you can control large positions with minimal capital - up to 500X on futures and 5-10X on stocks. This allows you to profit from small price movements throughout the day.
          </p>
          <p>
            Successful intraday traders use technical analysis, chart patterns, and market indicators to identify short-term trading opportunities. They make quick decisions based on price action, volume, and momentum.
          </p>
        </ContentSection>

        <HowItWorks title="How Intraday Trading Works" steps={howItWorksSteps} />

        <div className="grid md:grid-cols-2 gap-8">
          <TradingExample
            title="Intraday Stock Trading Example"
            description="Here's how you can profit from intraday stock trading:"
            rows={[
              { label: 'Stock', value: 'Reliance Industries' },
              { label: 'Buy Price', value: '₹2,500' },
              { label: 'Quantity', value: '100 shares' },
              { label: 'Total Investment', value: '₹2,50,000' },
              { label: 'Sell Price', value: '₹2,515' },
              { label: 'Price Difference', value: '₹15 per share' },
              { label: 'Gross Profit', value: '₹1,500', highlight: true },
              { label: 'Brokerage (FX777)', value: '₹0' },
              { label: 'Net Profit', value: '₹1,500', highlight: true },
            ]}
            disclaimer="This is an educational example. Actual trading results may vary. Markets are volatile and losses are possible."
          />

          <TradingExample
            title="Intraday Futures Trading Example"
            description="Leverage amplifies your profit potential:"
            rows={[
              { label: 'Instrument', value: 'Nifty Futures' },
              { label: 'Lot Size', value: '50 units' },
              { label: 'Buy Price', value: '₹19,500' },
              { label: 'Margin Required (500X)', value: '₹1,950' },
              { label: 'Sell Price', value: '₹19,550' },
              { label: 'Points Gained', value: '50 points' },
              { label: 'Profit (50 × 50)', value: '₹2,500', highlight: true },
              { label: 'Return on Margin', value: '128%', highlight: true },
            ]}
            disclaimer="High leverage increases both profit and loss potential. This example shows potential profit - losses can exceed your margin."
          />
        </div>

        <BenefitsList
          title="Why Choose FX777 for Intraday Trading?"
          benefits={whyFX777Benefits}
        />

        <ContentSection heading="Intraday Trading Strategies">
          <h4 className="text-xl font-bold text-dark-900 mb-3">Popular Intraday Strategies:</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-dark-900 mb-1">1. Momentum Trading</h5>
              <p>Trade in the direction of strong price movements. Buy when prices are rising with high volume, sell when momentum weakens.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">2. Breakout Trading</h5>
              <p>Enter positions when price breaks above resistance or below support levels with increased volume.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">3. Scalping</h5>
              <p>Make multiple small profits throughout the day by capturing minor price movements. Requires quick execution and tight stop-losses.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">4. Range Trading</h5>
              <p>Buy at support levels and sell at resistance when stocks trade in a defined range without clear trend.</p>
            </div>
          </div>
        </ContentSection>

        <RiskWarning points={riskPoints} />

        <FAQSection faqs={faqs} />

        <CTASection
          heading="Start Your Intraday Trading Journey"
          description="Open your FX777 account now and start day trading with zero brokerage and up to 500X leverage"
        />
      </div>
      </PageLayout>
    </>
  )
}

export default Intraday
