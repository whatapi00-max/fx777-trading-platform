import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Smartphone,
  LineChart,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Lock,
  Headphones,
  ArrowRight,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { Icon: Zap,         title: 'Competitive Pricing',   description: 'Flat-fee trading on all instruments — no hidden charges, no surprises.' },
  { Icon: Smartphone,  title: 'Mobile Trading',         description: 'Trade on the go with our advanced app for iOS and Android.' },
  { Icon: LineChart,   title: 'Advanced Charts',        description: 'Professional charting tools with 100+ technical indicators built in.' },
  { Icon: Shield,      title: 'Secure Platform',        description: 'Bank-grade 256-bit encryption and two-factor authentication on every account.' },
  { Icon: TrendingUp,  title: 'Real-time Data',         description: 'Live market data and sub-millisecond order execution across all markets.' },
  { Icon: Users,       title: 'Expert Support',         description: '24/7 dedicated support from professional trading specialists.' },
  { Icon: Award,       title: 'Award Winning',          description: 'Recognised as India\'s best trading platform multiple years running.' },
  { Icon: Lock,        title: 'SEBI Registered',        description: 'Fully compliant, SEBI-registered, and audit-ready at all times.' },
  { Icon: Headphones,  title: 'Dedicated RM',           description: 'Your own relationship manager to guide every step of your journey.' },
]

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="feature-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#22C55E" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#feature-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Platform Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 mb-4">
            Everything you need to <span className="text-primary-500">trade smarter</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            FX777 brings professional-grade tools, security, and support together in one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="feature-card group bg-white border border-gray-100 rounded-2xl p-6 md:p-7 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-bold text-dark-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

              <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
