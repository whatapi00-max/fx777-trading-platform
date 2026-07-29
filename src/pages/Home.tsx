import SEO from '../components/SEO'
import { getMetadata } from '../data/seoMetadata'
import Hero from '../components/Hero'
import FeaturesHighlight from '../components/FeaturesHighlight'
import Features from '../components/Features'
import WhyChooseUs from '../components/WhyChooseUs'
import TradingPartners from '../components/TradingPartners'
import AppDownload from '../components/AppDownload'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const Home = () => {
  const metadata = getMetadata('home')

  return (
    <>
      <SEO {...metadata} />
      <Hero />
      <FeaturesHighlight />
      <Features />
      <WhyChooseUs />
      <TradingPartners />
      <AppDownload />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
