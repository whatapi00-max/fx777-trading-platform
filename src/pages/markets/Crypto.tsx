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
import { Bitcoin, Shield, TrendingUp, Clock } from 'lucide-react'

const Crypto = () => {
  const metadata = getMetadata('crypto')

  const features = [
    { icon: Bitcoin, title: 'Top Cryptocurrencies', description: 'Trade Bitcoin, Ethereum, and popular altcoins with zero brokerage' },
    { icon: Shield, title: 'Secure Trading', description: 'Bank-grade security for your crypto trades with multi-layer protection' },
    { icon: TrendingUp, title: 'High Volatility', description: 'Capitalize on crypto market movements and 24/7 trading opportunities' },
    { icon: Clock, title: '24/7 Trading', description: 'Trade cryptocurrencies around the clock, every day of the year' },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Account', description: 'Complete KYC verification and activate your crypto trading account' },
    { number: 2, title: 'Deposit Funds', description: 'Add INR via UPI, bank transfer, or card to fund your account' },
    { number: 3, title: 'Choose Crypto', description: 'Select from Bitcoin, Ethereum, and other popular cryptocurrencies' },
    { number: 4, title: 'Trade Anytime', description: 'Buy or sell instantly with real-time prices and charts' },
  ]

  const whyFX777Benefits = [
    'Zero brokerage on all cryptocurrency trades - keep 100% of profits',
    'Trade Bitcoin, Ethereum, and popular altcoins from India',
    '24/7 market access - trade anytime, even on weekends',
    'Real-time crypto price charts and technical indicators',
    'Instant INR deposits and withdrawals',
    'Secure platform with encryption and multi-layer protection',
    'Mobile app for trading on the go',
    'Low minimum investment to start crypto trading',
  ]

  const tradingExampleData = {
    title: 'Bitcoin Trading Example',
    description: 'You believe Bitcoin will rise in price:',
    rows: [
      { label: 'Cryptocurrency', value: 'Bitcoin (BTC)' },
      { label: 'Entry Price', value: '₹60,00,000 per BTC' },
      { label: 'Investment', value: '₹60,000' },
      { label: 'BTC Purchased', value: '0.01 BTC' },
      { label: 'Leverage (10X)', value: 'Position worth ₹6,00,000' },
      { label: 'Exit Price', value: '₹66,00,000 per BTC (+10%)' },
      { label: 'Gross Profit', value: '₹60,000', highlight: true },
      { label: 'Return on Investment', value: '100%', highlight: true },
    ],
  }

  const tradingExampleData2 = {
    title: 'Ethereum Swing Trade Example',
    description: 'Capturing a medium-term crypto move:',
    rows: [
      { label: 'Cryptocurrency', value: 'Ethereum (ETH)' },
      { label: 'Entry Price', value: '₹3,00,000 per ETH' },
      { label: 'Investment', value: '₹30,000' },
      { label: 'ETH Purchased', value: '0.10 ETH' },
      { label: 'Exit Price', value: '₹3,30,000 per ETH (+10%)' },
      { label: 'Gross Profit', value: '₹3,000', highlight: true },
      { label: 'Brokerage (FX777)', value: '₹0' },
      { label: 'Net Profit', value: '₹3,000', highlight: true },
    ],
  }

  const faqs = [
    {
      question: 'What is cryptocurrency?',
      answer: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks called blockchains. Bitcoin, created in 2009, was the first cryptocurrency.',
    },
    {
      question: 'Which cryptocurrencies can I trade on FX777?',
      answer: 'FX777 offers trading on major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and other popular altcoins. Our selection is regularly updated based on market demand and liquidity.',
    },
    {
      question: 'Is cryptocurrency trading risky?',
      answer: 'Yes, cryptocurrency markets are highly volatile. Prices can fluctuate 10-20% in a single day. While this creates profit opportunities, it also means significant losses are possible. Use stop-losses, start small, and only invest money you can afford to lose.',
    },
    {
      question: 'What are crypto trading hours?',
      answer: 'Cryptocurrency markets operate 24 hours a day, 7 days a week, 365 days a year. Unlike stock markets, there is no market close, so you can trade crypto anytime through our web platform or mobile app.',
    },
    {
      question: 'How much money do I need to start crypto trading?',
      answer: 'You can start crypto trading on FX777 with as little as ₹1,000. Thanks to fractional ownership, you can buy small portions of expensive cryptocurrencies like Bitcoin. We recommend starting small and learning the market before making larger investments.',
    },
    {
      question: 'What is the difference between Bitcoin and Ethereum?',
      answer: 'Bitcoin is primarily a digital store of value and payment system. Ethereum is a platform that enables smart contracts and decentralized applications (dApps). While both are cryptocurrencies, Ethereum has additional utility beyond being a digital currency.',
    },
    {
      question: 'Can I withdraw my cryptocurrency?',
      answer: 'FX777 allows you to trade cryptocurrencies with INR settlement. You can withdraw your profits in INR to your bank account. Our platform focuses on simplified crypto trading without the complexity of managing private keys.',
    },
    {
      question: 'What affects cryptocurrency prices?',
      answer: 'Crypto prices are influenced by supply and demand, regulatory news, technological developments, macroeconomic trends, institutional adoption, and market sentiment. Major news events can cause significant price movements in short periods.',
    },
  ]

  const riskPoints = [
    'Cryptocurrency markets are highly volatile - prices can drop rapidly',
    'High leverage can amplify both profits and losses significantly',
    'Regulatory changes can impact cryptocurrency prices and trading',
    'Crypto trading carries risk of losing your entire investment',
    'Liquidity can vary across different cryptocurrencies',
    'Only trade with money you can afford to lose',
  ]

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
        title="Cryptocurrency Trading"
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Markets' }, { name: 'Crypto' }]}
        description="Trade Bitcoin, Ethereum, and popular cryptocurrencies 24/7 with zero brokerage, advanced charts, and secure trading."
      >
        <div className="space-y-16">
          <FeatureGrid features={features} />

          <ContentSection heading="Why Trade Cryptocurrencies?" variant="highlight">
            <p>
              Cryptocurrencies represent one of the most exciting and fast-growing asset classes in modern finance. Built on blockchain technology, digital assets like Bitcoin and Ethereum offer unique opportunities for traders and investors seeking exposure outside traditional markets.
            </p>
            <p>
              Unlike stock markets that operate during fixed hours, cryptocurrency markets never close. This 24/7 availability means you can trade whenever opportunities arise, whether it is early morning or late at night. Crypto markets are also highly liquid, with billions of dollars traded daily across global exchanges.
            </p>
            <p>
              With FX777, you can trade popular cryptocurrencies with zero brokerage, real-time price charts, and secure INR transactions. Our platform simplifies crypto trading so you can focus on finding opportunities and managing risk effectively.
            </p>
          </ContentSection>

          <HowItWorks title="How to Start Crypto Trading" steps={howItWorksSteps} />

          <div className="grid md:grid-cols-2 gap-8">
            <TradingExample {...tradingExampleData} />
            <TradingExample {...tradingExampleData2} />
          </div>

          <BenefitsList
            title="Why Trade Crypto on FX777?"
            benefits={whyFX777Benefits}
          />

          <ContentSection heading="Popular Cryptocurrencies on FX777">
            <h4 className="text-xl font-bold text-dark-900 mb-3">Top Cryptos Available:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-dark-900 mb-1">Bitcoin (BTC)</h5>
                <p>The first and largest cryptocurrency by market cap, often called "digital gold." Bitcoin is widely used as a store of value and hedge against inflation.</p>
              </div>
              <div>
                <h5 className="font-bold text-dark-900 mb-1">Ethereum (ETH)</h5>
                <p>The leading smart contract platform powering decentralized finance (DeFi), NFTs, and thousands of applications. ETH is the second-largest cryptocurrency.</p>
              </div>
              <div>
                <h5 className="font-bold text-dark-900 mb-1">Altcoins</h5>
                <p>Trade Ripple (XRP), Litecoin (LTC), Cardano (ADA), Solana (SOL), and other emerging cryptocurrencies with strong use cases and active communities.</p>
              </div>
            </div>
          </ContentSection>

          <RiskWarning
            title="Crypto Trading Risks"
            points={riskPoints}
          />

          <FAQSection faqs={faqs} />

          <CTASection
            heading="Start Trading Cryptocurrencies Today"
            description="Join FX777 and trade Bitcoin, Ethereum, and popular altcoins with zero brokerage, 24/7 market access, and secure trading."
          />
        </div>
      </PageLayout>
    </>
  )
}

export default Crypto
