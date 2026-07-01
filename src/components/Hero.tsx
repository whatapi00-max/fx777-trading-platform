import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react'

const stats = [
  { value: '50K+',  label: 'Active Traders' },
  { value: '100%',  label: 'Secure Platform' },
  { value: '0%',    label: 'Brokerage Fee' },
]

const brokerageItems = [
  { label: 'NSE & MCX Futures',  sub: '500X Margin' },
  { label: 'Comex & Currency',   sub: '200X Margin' },
  { label: 'Option Buying',      sub: '10X Margin' },
]

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title',   { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
      gsap.fromTo('.hero-body',    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.25 })
      gsap.fromTo('.hero-cta',     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.4 })
      gsap.fromTo('.hero-stats',   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.55 })
      gsap.fromTo('.hero-image',   { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, delay: 0.2 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden bg-white"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text — first on desktop, second on mobile */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-4 py-1.5 text-sm font-medium">
              <Zap className="w-3.5 h-3.5" />
              India's Premium Trading Platform
            </div>

            {/* Heading */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-dark-900 leading-[1.05]">
              Trade Smarter<br />
              <span className="text-primary-500">with FX777</span>
            </h1>

            {/* Brokerage items */}
            <div className="hero-body space-y-3">
              {brokerageItems.map(({ label, sub }) => (
                <div key={label} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-dark-800 font-semibold text-sm sm:text-base">{label}</span>
                  <span className="text-gray-500 text-sm">— {sub}</span>
                </div>
              ))}
            </div>

            {/* Highlight box */}
            <div className="hero-body inline-flex items-center gap-4 bg-primary-50 border border-primary-200 rounded-xl px-5 py-3.5">
              <div>
                <p className="text-2xl font-extrabold text-primary-600 leading-none">99%</p>
                <p className="text-xs text-gray-500 mt-0.5">On-time</p>
              </div>
              <div className="w-px h-10 bg-primary-200" />
              <div>
                <p className="text-sm font-bold text-dark-900">Deposits & Withdrawals</p>
                <p className="text-xs text-gray-500">Processed same business day</p>
              </div>
            </div>

            {/* CTA */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-md text-base">
                Open Free Account
              </button>
              <button className="border-2 border-gray-200 text-dark-700 hover:border-primary-400 hover:text-primary-600 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-base">
                View Markets
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-3 gap-4 pt-2 border-t border-gray-100">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-dark-900">{value}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image — first on mobile, second on desktop */}
          <div className="hero-image order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
                  alt="FX777 Trading Platform"
                  className="w-full object-cover"
                  style={{ maxHeight: '480px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />

                {/* Floating card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-xl p-3.5 shadow-lg flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-900">Start Trading Today</p>
                      <p className="text-xs text-gray-500">FX777 · Advanced Tools · 24/7 Support</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-primary-500" />
                      <span className="text-xs text-primary-600 font-medium">Regulated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
