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
import { TrendingUp, Shield, Globe, Zap } from 'lucide-react'

const COMEX = () => {
  const metadata = getMetadata('comex')

  const features = [
    { icon: Globe, title: 'Global Benchmarks', description: 'Trade on the world\'s largest metals futures exchange with global price discovery' },
    { icon: Shield, title: 'Precious Metals', description: 'Access gold, silver, platinum, and palladium futures contracts' },
    { icon: TrendingUp, title: 'Base Metals', description: 'Trade copper, aluminum, and other industrial metal futures' },
    { icon: Zap, title: 'Fast Execution', description: 'Lightning-fast order execution with real-time international prices' },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Account', description: 'Complete KYC verification and activate your international commodity trading account' },
    { number: 2, title: 'Fund Account', description: 'Deposit INR via UPI, bank transfer, or card for USD conversion' },
    { number: 3, title: 'Select Contract', description: 'Choose from gold, silver, copper, and other COMEX futures contracts' },
    { number: 4, title: 'Trade Global Metals', description: 'Buy or sell based on global price movements and hedging needs' },
  ]

  const whyFX777Benefits = [
    'Zero brokerage on all COMEX futures trades',
    'Access global benchmark prices for precious and base metals',
    'Trade gold, silver, copper, and other COMEX contracts',
    'Hedge against currency and commodity price risks',
    'Real-time international market data and charts',
    'Professional-grade trading platform for beginners and experts',
    'Low margin requirements with up to 200X leverage',
    'Hedge against rupee depreciation with USD-denominated assets',
  ]

  const tradingExampleData = {
    title: 'COMEX Gold Futures Example',
    description: 'Trading global gold prices from India:',
    rows: [
      { label: 'Contract', value: 'Gold Futures (COMEX)' },
      { label: 'Contract Size', value: '100 troy ounces' },
      { label: 'Entry Price', value: '$2,000 per ounce' },
      { label: 'Total Contract Value', value: '$2,00,000' },
      { label: 'Margin Required (100X)', value: '$2,000 (~₹1,66,000)' },
      { label: 'Exit Price', value: '$2,050 per ounce (+2.5%)' },
      { label: 'Profit per Ounce', value: '$50' },
      { label: 'Total Profit', value: '$5,000 (~₹4,15,000)', highlight: true },
    ],
  }

  const tradingExampleData2 = {
    title: 'COMEX Silver Futures Example',
    description: 'Capturing a silver price movement:',
    rows: [
      { label: 'Contract', value: 'Silver Futures (COMEX)' },
      { label: 'Contract Size', value: '5,000 troy ounces' },
      { label: 'Entry Price', value: '$25 per ounce' },
      { label: 'Total Contract Value', value: '$1,25,000' },
      { label: 'Margin Required (100X)', value: '$1,250 (~₹1,03,750)' },
      { label: 'Exit Price', value: '$26 per ounce (+4%)' },
      { label: 'Profit per Ounce', value: '$1' },
      { label: 'Total Profit', value: '$5,000 (~₹4,15,000)', highlight: true },
    ],
  }

  const faqs = [
    {
      question: 'What is COMEX?',
      answer: 'COMEX (Commodity Exchange) is a division of CME Group and the world\'s largest marketplace for trading metals futures and options. It sets global benchmark prices for gold, silver, copper, and aluminum used worldwide by traders, miners, and investors.',
    },
    {
      question: 'Which COMEX contracts can I trade on FX777?',
      answer: 'FX777 provides access to major COMEX contracts including gold futures, silver futures, copper futures, and platinum group metals. These contracts allow you to trade global metal prices without physical delivery.',
    },
    {
      question: 'How is COMEX different from MCX?',
      answer: 'COMEX is an international exchange based in New York with prices in US Dollars. MCX is India\'s domestic commodity exchange with prices in Indian Rupees. COMEX reflects global supply-demand, while MCX includes local factors like import duties and currency movements.',
    },
    {
      question: 'Why trade COMEX from India?',
      answer: 'Trading COMEX gives Indian investors access to global metal prices, hedging against rupee depreciation, and arbitrage opportunities between international and domestic markets. It is also useful for businesses that import or export commodities.',
    },
    {
      question: 'What are COMEX trading hours?',
      answer: 'COMEX metals trading operates nearly 24 hours on weekdays. The main trading session runs from 8:20 AM to 1:30 PM EST, with electronic trading available from 6:00 PM EST Sunday to 5:00 PM EST Friday.',
    },
    {
      question: 'How much margin do I need for COMEX trading?',
      answer: 'With FX777\'s leverage, you can trade COMEX contracts with a fraction of the total contract value. Margin requirements vary by contract and market volatility. For example, a $2,00,000 gold contract might require only $2,000-4,000 margin with 50-100X leverage.',
    },
    {
      question: 'Is COMEX trading risky?',
      answer: 'Yes, futures trading involves significant risk due to leverage and price volatility. Currency risk also exists because COMEX is USD-denominated. Prices can move rapidly, and losses can exceed your margin. Always use stop-losses and trade responsibly.',
    },
    {
      question: 'Who should trade COMEX?',
      answer: 'COMEX trading suits investors seeking global diversification, commodity hedgers, arbitrage traders, and those wanting exposure to USD-denominated assets. It is ideal for traders who understand futures markets and currency risk.',
    },
  ]

  const riskPoints = [
    'COMEX futures involve leverage that can amplify both profits and losses',
    'Currency risk - USD/INR fluctuations impact your returns',
    'Commodity prices can be volatile due to global events and supply-demand shifts',
    'Margin calls can lead to forced liquidation of positions',
    'Overnight positions in futures may carry additional risks',
    'Only trade with money you can afford to lose',
  ]

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
        title="COMEX Trading"
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Markets' }, { name: 'COMEX' }]}
        description="Trade COMEX gold, silver, copper, and metals futures from India with zero brokerage, global benchmark prices, and professional tools."
      >
        <div className="space-y-16">
          <FeatureGrid features={features} />

          <ContentSection heading="What is COMEX Trading?" variant="highlight">
            <p>
              COMEX, part of the CME Group, is the world\'s leading marketplace for trading metals futures and options. It serves as the global price discovery hub for gold, silver, copper, platinum, and palladium, with prices referenced by miners, jewelers, manufacturers, and investors worldwide.
            </p>
            <p>
              Trading COMEX from India gives you exposure to international commodity prices in US Dollars. This is valuable because global metal prices often differ from domestic MCX prices due to currency movements, import duties, freight costs, and local supply-demand dynamics. These price differences create both arbitrage and hedging opportunities.
            </p>
            <p>
              With FX777, you can trade COMEX futures with zero brokerage and leverage up to 200X. Our platform provides real-time international prices, advanced charting, and seamless execution for both speculative trading and commodity hedging.
            </p>
          </ContentSection>

          <HowItWorks title="How COMEX Trading Works" steps={howItWorksSteps} />

          <div className="grid md:grid-cols-2 gap-8">
            <TradingExample {...tradingExampleData} />
            <TradingExample {...tradingExampleData2} />
          </div>

          <BenefitsList
            title="Why Trade COMEX on FX777?"
            benefits={whyFX777Benefits}
          />

          <ContentSection heading="Popular COMEX Contracts">
            <h4 className="text-xl font-bold text-dark-900 mb-3">Top Contracts Available:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-dark-900 mb-1">Gold Futures (GC)</h5>
                <p>The most actively traded COMEX contract, with 100 troy ounces per contract. Gold futures serve as the global benchmark for gold pricing and are used for hedging and speculation.</p>
              </div>
              <div>
                <h5 className="font-bold text-dark-900 mb-1">Silver Futures (SI)</h5>
                <p>Each silver futures contract represents 5,000 troy ounces. Silver is more volatile than gold and offers larger percentage moves, attracting active traders.</p>
              </div>
              <div>
                <h5 className="font-bold text-dark-900 mb-1">Copper Futures (HG)</h5>
                <p>Copper is known as "Dr. Copper" because its price reflects global economic health. The HG contract represents 25,000 pounds of copper and is popular among macro traders.</p>
              </div>
            </div>
          </ContentSection>

          <RiskWarning
            title="COMEX Trading Risks"
            points={riskPoints}
          />

          <FAQSection faqs={faqs} />

          <CTASection
            heading="Access Global Commodity Markets Today"
            description="Open your FX777 account and start trading COMEX gold, silver, copper, and metals futures with zero brokerage and global benchmark prices."
          />
        </div>
      </PageLayout>
    </>
  )
}

export default COMEX
