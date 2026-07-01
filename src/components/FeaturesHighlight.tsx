import {
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Cpu,
  Headphones,
} from 'lucide-react'

const features = [
  { Icon: DollarSign,  label: 'Brokerage\nwithout Tax', bg: 'bg-amber-400' },
  { Icon: TrendingUp,  label: '500X\nMargin',           bg: 'bg-blue-500' },
  { Icon: Users,       label: 'Referral\nBonus',         bg: 'bg-emerald-500' },
  { Icon: Clock,       label: '24/7\nSupport',           bg: 'bg-violet-500' },
  { Icon: Shield,      label: 'Regulated\nBroker',       bg: 'bg-rose-500' },
  { Icon: Zap,         label: 'Instant\nExecution',      bg: 'bg-orange-500' },
  { Icon: BarChart3,   label: '500+\nProducts',          bg: 'bg-indigo-500' },
  { Icon: Cpu,         label: 'Unique\nTechnology',      bg: 'bg-pink-500' },
  { Icon: Headphones,  label: 'AI\nAssistant',           bg: 'bg-cyan-500' },
]

const FeaturesHighlight = () => {
  return (
    <section className="w-full bg-gradient-to-r from-primary-500 via-primary-500 to-primary-600 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 md:gap-10">
          {features.map(({ Icon, label, bg }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center w-16 sm:w-20 cursor-default"
            >
              <div className={`mb-3 p-3.5 sm:p-4 ${bg} rounded-2xl border-2 border-white/30 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-200`}>
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.75} />
              </div>
              <p className="text-white font-semibold text-xs sm:text-sm whitespace-pre-line leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesHighlight
