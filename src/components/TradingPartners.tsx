import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Building2,
  TrendingUp,
  Coins,
  Wheat,
  ShieldCheck,
  FileText,
  Lock,
  Zap,
  Smartphone,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '₹0',      label: 'Brokerage' },
  { value: '24/7',    label: 'Support' },
  { value: '10 Lac+', label: 'Users' },
  { value: '₹50 Cr+', label: 'Daily Volume' },
]

const partners = [
  { name: 'NSE',   Icon: Building2 },
  { name: 'BSE',   Icon: TrendingUp },
  { name: 'MCX',   Icon: Coins },
  { name: 'NCDEX', Icon: Wheat },
  { name: 'SEBI',  Icon: ShieldCheck },
  { name: 'CDSL',  Icon: FileText },
]

const highlights = [
  { Icon: Lock,       label: 'Bank-Grade Security', sub: '256-bit SSL encryption',   accent: 'text-blue-400 group-hover:text-blue-300' },
  { Icon: Zap,        label: 'Lightning Fast',       sub: 'Millisecond execution',    accent: 'text-amber-400 group-hover:text-amber-300' },
  { Icon: Smartphone, label: 'Mobile First',          sub: 'Trade anywhere, anytime', accent: 'text-primary-400 group-hover:text-primary-300' },
]

const TradingPartners = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.partner-stat',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1,
          duration: 0.5,
          stagger: 0.08,
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
    <section id="partners" ref={sectionRef} className="relative py-20 md:py-28 bg-dark-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Trusted & Regulated</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            A Secure Trading Platform
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Trusted by millions of traders, regulated by India's top authorities.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="partner-stat bg-dark-800 border border-dark-700 rounded-xl p-5 text-center hover:border-primary-500/50 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Partners grid */}
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 md:p-10 mb-8">
          <h3 className="text-xl font-bold text-center mb-7 text-white">Exchanges &amp; Regulators</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {partners.map(({ name, Icon }) => (
              <div
                key={name}
                className="partner-stat group flex flex-col items-center gap-2 bg-dark-700 border border-dark-600 rounded-xl p-4 hover:border-primary-500/60 hover:bg-dark-600 transition-all duration-200"
              >
                <Icon className="w-7 h-7 text-gray-300 group-hover:text-primary-400 transition-colors" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid sm:grid-cols-3 gap-5">
          {highlights.map(({ Icon, label, sub, accent }) => (
            <div
              key={label}
              className="group bg-dark-800 border border-dark-700 rounded-xl p-6 text-center hover:border-primary-500/40 transition-all duration-200"
            >
              <Icon className={`w-10 h-10 mx-auto mb-3 transition-colors ${accent}`} strokeWidth={1.75} />
              <h4 className="font-bold text-white mb-1 text-base">{label}</h4>
              <p className="text-sm text-gray-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TradingPartners
