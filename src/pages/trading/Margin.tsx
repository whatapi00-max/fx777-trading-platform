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
import { TrendingUp, Shield, Zap, DollarSign } from 'lucide-react'

const Margin = () => {
  const metadata = getMetadata('margin')

  const features = [
    { icon: TrendingUp, title: 'Up to 500X Leverage', description: 'Trade with maximum leverage on futures and options for amplified returns' },
    { icon: Shield, title: 'Margin Monitoring', description: 'Real-time margin tracking with automatic alerts and margin call protection' },
    { icon: Zap, title: 'Instant Funding', description: 'Quick margin top-up via UPI, net banking, or instant bank transfer' },
    { icon: DollarSign, title: 'Flexible Requirements', description: 'Different margin levels for stocks, futures, commodities, and forex' },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Deposit Margin', description: 'Add funds to your trading account as initial margin' },
    { number: 2, title: 'Select Instrument', description: 'Choose stocks, futures, or commodities to trade with leverage' },
    { number: 3, title: 'Place Order', description: 'Trade larger positions than your account balance allows' },
    { number: 4, title: 'Monitor & Manage', description: 'Track margin usage and maintain required levels to avoid liquidation' },
  ]

  const whyFX777Benefits = [
    'Leverage up to 500X on NSE futures for maximum capital efficiency',
    'Competitive margin rates across all instruments',
    'Real-time margin monitoring with instant alerts',
    'Automatic margin call notifications before liquidation',
    'Flexible margin requirements based on volatility',
    'No hidden margin charges or penalties',
    'Instant margin top-up via multiple payment methods',
    'Professional risk management tools included',
  ]

  const faqs = [
    {
      question: 'What is margin in trading?',
      answer: 'Margin is the amount of money you need to deposit to open a leveraged position. It acts as collateral that allows you to control a larger position than your account balance. For example, with 10X leverage, you need 10% margin - so ₹10,000 margin lets you control a ₹1 lakh position.',
    },
    {
      question: 'How much leverage can I get on FX777?',
      answer: 'Leverage varies by instrument: Up to 500X on NSE futures, 200X on commodities, 5-10X on stocks, and up to 100X on forex. The exact leverage depends on the instrument, market conditions, and regulatory requirements. Higher leverage means higher risk.',
    },
    {
      question: 'What is a margin call?',
      answer: 'A margin call occurs when your account balance falls below the required maintenance margin due to losses. When this happens, you must either deposit more funds or close some positions to bring your account back to the required margin level. FX777 provides real-time margin alerts to help you avoid margin calls.',
    },
    {
      question: 'What happens if I don\'t meet a margin call?',
      answer: 'If you don\'t add funds or close positions after a margin call, your positions may be automatically liquidated (force-closed) to prevent further losses. This protects both you and the broker from negative balances. Always maintain adequate margin and use stop-losses.',
    },
    {
      question: 'How is margin different from leverage?',
      answer: 'Margin and leverage are related but different. Margin is the amount you deposit (e.g., 10% of trade value), while leverage is the multiplier (e.g., 10X). If you have 10X leverage, you need 10% margin. Higher leverage means lower margin requirement but also higher risk of losses.',
    },
    {
      question: 'Can I lose more than my margin?',
      answer: 'Yes, in extreme market conditions with high leverage, losses can exceed your initial margin. For example, with 100X leverage, a 1% adverse price movement wipes out your entire margin. This is why we recommend using stop-losses and never risking more than you can afford to lose.',
    },
    {
      question: 'How do I calculate margin requirements?',
      answer: 'Margin requirement = (Position Value) ÷ (Leverage). For example, to trade ₹1 lakh worth of futures with 100X leverage, you need ₹1,000 margin. FX777 provides a margin calculator on the platform to help you calculate requirements before placing orders.',
    },
    {
      question: 'What are the risks of margin trading?',
      answer: 'Margin trading amplifies both profits and losses. You can lose your entire capital quickly if markets move against you. High leverage means small price movements result in large gains or losses. Always use stop-losses, maintain adequate margin, and never over-leverage your account.',
    },
  ]

  const riskPoints = [
    'Leverage amplifies both profits and losses - you can lose more than your initial investment',
    'Margin calls can force you to deposit more funds or face automatic liquidation',
    'In volatile markets, prices can gap beyond your stop-loss levels',
    'High leverage means small adverse price movements can wipe out your margin',
    'Interest charges may apply on overnight leveraged positions',
    'Never use borrowed money or funds you cannot afford to lose for margin trading',
  ]

  return (
    <>
      <SEO {...metadata} />
      <PageLayout
      title="Margin Trading"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Trading' }, { name: 'Margin' }]}
      description="Amplify your trading power with margin up to 500X. Trade larger positions with less capital using leverage on stocks, futures, and commodities."
    >
      <div className="space-y-16">
        <FeatureGrid features={features} />

        <ContentSection heading="Understanding Margin Trading" variant="highlight">
          <p>
            Margin trading allows you to trade with borrowed funds, amplifying your buying power. Instead of paying the full value of a trade, you only need to deposit a fraction (margin) while the broker finances the rest. This leverage can multiply both profits and losses.
          </p>
          <p>
            For example, with 10X leverage, you can control a ₹1 lakh position with just ₹10,000. If the position moves up 5%, you make ₹5,000 profit on your ₹10,000 investment - a 50% return. However, if it moves down 5%, you lose ₹5,000 - a 50% loss.
          </p>
          <p>
            FX777 offers margin trading across multiple asset classes including stocks, commodities, forex, and indices. Our platform provides up to 500X leverage on certain instruments, allowing you to maximize capital efficiency while managing risk with professional tools.
          </p>
        </ContentSection>

        <HowItWorks title="How Margin Trading Works" steps={howItWorksSteps} />

        <div className="grid md:grid-cols-2 gap-8">
          <TradingExample
            title="Margin Trading Example - Profit Scenario"
            description="See how leverage amplifies your returns:"
            rows={[
              { label: 'Your Capital', value: '₹10,000' },
              { label: 'Leverage', value: '10X' },
              { label: 'Position Size', value: '₹1,00,000' },
              { label: 'Entry Price', value: '₹100' },
              { label: 'Exit Price', value: '₹105' },
              { label: 'Price Change', value: '+5%' },
              { label: 'Profit', value: '₹5,000', highlight: true },
              { label: 'Return on Capital', value: '+50%', highlight: true },
            ]}
            disclaimer="This example shows potential profit. Markets can move against you, resulting in losses that exceed your margin."
          />

          <TradingExample
            title="Margin Trading Example - Loss Scenario"
            description="Understand the risk of leverage:"
            rows={[
              { label: 'Your Capital', value: '₹10,000' },
              { label: 'Leverage', value: '10X' },
              { label: 'Position Size', value: '₹1,00,000' },
              { label: 'Entry Price', value: '₹100' },
              { label: 'Exit Price', value: '₹95' },
              { label: 'Price Change', value: '-5%' },
              { label: 'Loss', value: '-₹5,000', highlight: true },
              { label: 'Return on Capital', value: '-50%', highlight: true },
            ]}
            disclaimer="This example illustrates how leverage amplifies losses. A 10% adverse move would wipe out your entire ₹10,000 capital."
          />
        </div>

        <BenefitsList
          title="Why Use Margin Trading on FX777?"
          benefits={whyFX777Benefits}
        />

        <ContentSection heading="Margin Trading Best Practices">
          <h4 className="text-xl font-bold text-dark-900 mb-3">Essential Tips for Margin Traders:</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-dark-900 mb-1">1. Start with Low Leverage</h5>
              <p>Begin with 2-3X leverage and gradually increase as you gain experience. High leverage is tempting but extremely risky for beginners.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">2. Always Use Stop-Losses</h5>
              <p>Set stop-loss orders on every trade to limit potential losses. Never trade without a predefined exit strategy.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">3. Maintain Adequate Margin</h5>
              <p>Keep extra funds in your account beyond minimum margin requirements to avoid margin calls during volatility.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">4. Monitor Positions Regularly</h5>
              <p>Check your margin usage and position P&L frequently. Set up margin alerts to get notified before reaching critical levels.</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">5. Never Over-Leverage</h5>
              <p>Just because you can use 500X leverage doesn\'t mean you should. Use leverage wisely based on your risk tolerance and market conditions.</p>
            </div>
          </div>
        </ContentSection>

        <RiskWarning points={riskPoints} />

        <FAQSection faqs={faqs} />

        <CTASection
          heading="Start Margin Trading with FX777"
          description="Open your account and access margin trading with leverage up to 500X across multiple markets"
        />
      </div>
      </PageLayout>
    </>
  )
}

export default Margin
