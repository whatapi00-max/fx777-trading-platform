import PageLayout from '../../components/Layout/PageLayout'
import FeatureGrid from '../../components/Content/FeatureGrid'
import ContentSection from '../../components/Content/ContentSection'
import FAQSection from '../../components/Content/FAQSection'
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
