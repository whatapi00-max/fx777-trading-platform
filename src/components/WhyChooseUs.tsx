import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DollarSign, Zap, Wrench, TrendingUp, CreditCard, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    Icon: DollarSign,
    title: 'Zero Account Opening Charges',
    description: 'Open your trading and demat account absolutely free with no hidden charges.',
  },
  {
    Icon: Zap,
    title: 'Instant Account Activation',
    description: 'Get your account activated within 24 hours with our fully paperless process.',
  },
  {
    Icon: Wrench,
    title: 'Advanced Trading Tools',
    description: 'Access professional-grade analytics, screeners, and charting for smarter decisions.',
  },
  {
    Icon: TrendingUp,
    title: 'Multiple Asset Classes',
    description: 'Trade equity, F&O, commodities, currency, and mutual funds from one account.',
  },
  {
    Icon: CreditCard,
    title: 'Low Margin Requirements',
    description: 'Start trading with minimal capital and flexible margin options up to 500X.',
  },
]

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-card',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo('.why-image',
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Why FX777</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 mb-4">
            Built for <span className="text-primary-500">serious traders</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Join thousands of traders who trust FX777 for reliable execution, transparent pricing, and powerful tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Cards column */}
          <div className="space-y-4">
            {reasons.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="why-card group bg-white border border-gray-100 rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:border-primary-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-dark-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}

            <button className="mt-4 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm text-sm">
              Start Trading Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image column */}
          <div className="why-image relative hidden sm:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=700&fit=crop"
                alt="Professional trader using FX777 platform"
                className="w-full object-cover"
                style={{ maxHeight: '520px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <p className="text-sm font-bold text-dark-900 mb-0.5">Join 10 Lakh+ Active Traders</p>
                  <p className="text-xs text-gray-500">Trusted by traders across India since 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
