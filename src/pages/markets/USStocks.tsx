import PageLayout from '../../components/Layout/PageLayout'
import FeatureGrid from '../../components/Content/FeatureGrid'
import ContentSection from '../../components/Content/ContentSection'
import TradingExample from '../../components/Content/TradingExample'
import BenefitsList from '../../components/Content/BenefitsList'
import HowItWorks from '../../components/Content/HowItWorks'
import FAQSection from '../../components/Content/FAQSection'
import RiskWarning from '../../components/Content/RiskWarning'
import CTASection from '../../components/Content/CTASection'
import { TrendingUp, Shield, Globe, DollarSign } from 'lucide-react'

const USStocks = () => {
  const features = [
    { icon: Globe, title: 'NYSE & NASDAQ Access', description: 'Trade stocks from the world\'s largest stock exchanges directly from India' },
    { icon: Shield, title: 'Blue-Chip Companies', description: 'Invest in Apple, Microsoft, Tesla, Amazon, Google, and Fortune 500 companies' },
    { icon: TrendingUp, title: 'US Indices', description: 'Trade S&P 500, Dow Jones, NASDAQ 100, and Russell 2000 indices' },
    { icon: DollarSign, title: 'Fractional Shares', description: 'Start investing with small amounts - buy fractional shares of expensive stocks' },
  ]

  const howItWorksSteps = [
    { number: 1, title: 'Open Account', description: 'Complete KYC and open your international trading account' },
    { number: 2, title: 'Fund Account', description: 'Transfer funds in INR - we handle USD conversion' },
    { number: 3, title: 'Select Stocks', description: 'Browse and select from 5000+ US stocks and ETFs' },
    { number: 4, title: 'Place Orders', description: 'Buy/sell during US market hours (7:00 PM - 1:30 AM IST)' },
  ]

  const whyFX777Benefits = [
    'Access to 5000+ US stocks and ETFs from India',
    'Trade during US market hours with real-time quotes',
    'Fractional shares - invest in expensive stocks with small amounts',
    'Competitive currency conversion rates',
    'No account maintenance fees',
    'Advanced research tools and stock screeners',
    'Dividend reinvestment options available',
    'Tax-efficient investing with proper documentation',
  ]

  const faqs = [
    {
      question: 'Can I trade US stocks from India?',
      answer: 'Yes! FX777 provides access to US stock markets under the RBI\'s Liberalized Remittance Scheme (LRS). You can invest up to $250,000 per financial year in international markets. We handle all compliance and regulatory requirements.',
    },
    {
      question: 'What are US market trading hours in IST?',
      answer: 'US markets (NYSE and NASDAQ) operate from 9:30 AM to 4:00 PM EST, which translates to 7:00 PM to 1:30 AM IST (during standard time) or 6:30 PM to 1:00 AM IST (during daylight saving time). Pre-market and after-hours trading is also available.',
    },
    {
      question: 'How do I fund my US stocks account?',
      answer: 'You can transfer funds in INR from your Indian bank account. We automatically convert INR to USD at competitive rates. The conversion happens seamlessly, and you can start trading once funds are credited to your account.',
    },
    {
      question: 'What are fractional shares?',
      answer: 'Fractional shares allow you to buy a portion of a stock instead of a full share. For example, if Tesla costs $800 and you have $100, you can buy 0.125 shares. This makes expensive stocks accessible to everyone.',
    },
    {
      question: 'Do I need to pay taxes on US stock profits?',
      answer: 'Yes, profits from US stocks are taxable in India. Capital gains are taxed based on your holding period. You may also need to file taxes in the US for dividends. We provide detailed tax reports to help with filing. Consult a tax advisor for specific guidance.',
    },
    {
      question: 'Can I invest in US index funds and ETFs?',
      answer: 'Absolutely! You can invest in popular ETFs like SPY (S&P 500), QQQ (NASDAQ 100), DIA (Dow Jones), and sector-specific ETFs. ETFs offer diversification and are a great way to invest in the overall US market.',
    },
    {
      question: 'What happens to my dividends?',
      answer: 'Dividends from US stocks are credited to your account in USD. You can either withdraw them (converted to INR) or reinvest them in more stocks. US dividends are subject to 25% withholding tax, which can be claimed as foreign tax credit in India.',
    },
    {
      question: 'Are US stocks riskier than Indian stocks?',
      answer: 'All stock investments carry risk. US stocks offer exposure to global companies and diversification benefits. However, you face currency risk (USD/INR fluctuations) and geopolitical risks. Diversifying across markets can actually reduce overall portfolio risk.',
    },
  ]

  const riskPoints = [
    'Currency risk - USD/INR exchange rate fluctuations can impact returns',
    'Market risk - US stock prices can be volatile and decline significantly',
    'Geopolitical risk - US-India relations and global events affect markets',
    'Time zone difference - US market hours are late night in India',
    'Tax complexity - need to understand both US and Indian tax implications',
    'Limited investor protection - different regulatory framework than India',
  ]

  return (
    <PageLayout
      title="US Stocks & Indices"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Markets' }, { name: 'US Stocks' }]}
      description="Invest in US stocks and indices from India. Trade Apple, Tesla, Amazon, and 5000+ US companies on NYSE and NASDAQ with fractional shares."
    >
      <div className="space-y-16">
        <FeatureGrid features={features} />

        <ContentSection heading="Why Invest in US Stocks?" variant="highlight">
          <p>
            The United States hosts the world's largest and most liquid stock market, with a combined market capitalization exceeding $50 trillion. Investing in US stocks gives you access to global technology leaders, innovative companies, and diversification beyond the Indian market.
          </p>
          <p>
            From tech giants like Apple, Microsoft, and Google to consumer brands like Nike, Starbucks, and Coca-Cola, US markets offer investment opportunities across every sector. Many of these companies generate revenue globally, providing exposure to worldwide economic growth.
          </p>
          <p>
            With FX777, Indian investors can easily access US markets, trade during US hours, and build a globally diversified portfolio. Whether you're interested in growth stocks, dividend stocks, or index funds, we provide the tools and support you need.
          </p>
        </ContentSection>

        <HowItWorks title="How to Start Trading US Stocks" steps={howItWorksSteps} />

        <div className="grid md:grid-cols-2 gap-8">
          <TradingExample
            title="US Stock Investment Example"
            description="Investing in a US tech stock:"
            rows={[
              { label: 'Stock', value: 'Apple Inc. (AAPL)' },
              { label: 'Buy Price', value: '$180.00' },
              { label: 'Shares Purchased', value: '10 shares' },
              { label: 'Total Investment', value: '$1,800' },
              { label: 'INR Equivalent (₹83/$)', value: '₹1,49,400' },
              { label: 'Sell Price (after 6 months)', value: '$200.00' },
              { label: 'Total Value', value: '$2,000' },
              { label: 'Profit in USD', value: '$200', highlight: true },
              { label: 'Profit in INR', value: '₹16,600', highlight: true },
            ]}
            disclaimer="This is an educational example. Stock prices and exchange rates fluctuate. Past performance does not guarantee future results."
          />

          <TradingExample
            title="Fractional Shares Example"
            description="Investing with limited capital:"
            rows={[
              { label: 'Stock', value: 'Tesla Inc. (TSLA)' },
              { label: 'Current Price', value: '$800 per share' },
              { label: 'Your Investment', value: '$100' },
              { label: 'Shares Purchased', value: '0.125 shares' },
              { label: 'Price Increase', value: '+10% to $880' },
              { label: 'New Value', value: '$110' },
              { label: 'Your Profit', value: '$10', highlight: true },
              { label: 'Return', value: '10%', highlight: true },
            ]}
            disclaimer="Fractional shares allow you to invest in expensive stocks with small amounts. Returns are proportional to your investment."
          />
        </div>

        <BenefitsList
          title="Why Trade US Stocks with FX777?"
          benefits={whyFX777Benefits}
        />

        <ContentSection heading="Popular US Stocks to Consider">
          <h4 className="text-xl font-bold text-dark-900 mb-3">Top Categories:</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-dark-900 mb-1">Technology Giants (FAANG+)</h5>
              <p>Apple (AAPL), Microsoft (MSFT), Amazon (AMZN), Netflix (NFLX), Google (GOOGL), Meta (META), Tesla (TSLA)</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">Financial Services</h5>
              <p>JPMorgan Chase (JPM), Bank of America (BAC), Visa (V), Mastercard (MA), Berkshire Hathaway (BRK.B)</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">Healthcare & Pharma</h5>
              <p>Johnson & Johnson (JNJ), Pfizer (PFE), UnitedHealth (UNH), Moderna (MRNA)</p>
            </div>
            <div>
              <h5 className="font-bold text-dark-900 mb-1">Index ETFs</h5>
              <p>SPDR S&P 500 (SPY), Invesco QQQ (QQQ), Vanguard Total Market (VTI)</p>
            </div>
          </div>
        </ContentSection>

        <RiskWarning points={riskPoints} />

        <FAQSection faqs={faqs} />

        <CTASection
          heading="Start Investing in US Stocks Today"
          description="Open your international trading account and access the world's largest stock market from India"
        />
      </div>
    </PageLayout>
  )
}

export default USStocks
