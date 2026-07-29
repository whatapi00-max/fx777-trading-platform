import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately
      gsap.set('.faq-item', { opacity: 0, x: -40 });
      
      // Animate to visible state immediately on load
      gsap.to('.faq-item', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const faqs = [
    {
      question: 'What is FX777?',
      answer: 'FX777 is a premium global trading platform offering competitive pricing on forex, stocks, commodities, and cryptocurrencies with advanced trading tools and 24/7 support.',
    },
    {
      question: 'How do I open a trading account?',
      answer: 'You can open a trading account online in just 10 minutes. You need your PAN card, Aadhaar card, bank details, and a signature. The entire process is paperless and digital.',
    },
    {
      question: 'Is my money safe with you?',
      answer: 'Yes, your funds are completely safe. We are SEBI registered and your funds are kept in a separate client account with leading banks. We use bank-grade 256-bit encryption for all transactions.',
    },
    {
      question: 'What are the charges for intraday and F&O trading?',
      answer: 'We charge a flat fee of ₹20 per executed order for intraday and F&O trades, or 0.03% (whichever is lower). There are no hidden charges.',
    },
    {
      question: 'Can I trade on mobile?',
      answer: 'Yes, we have advanced mobile apps for both iOS and Android. You can trade, view charts, check market depth, and manage your portfolio on the go.',
    },
    {
      question: 'What is the minimum amount required to start trading?',
      answer: 'There is no minimum amount required to open an account. However, you need sufficient funds in your trading account to buy stocks or take positions in F&O.',
    },
    {
      question: 'Do you provide research and tips?',
      answer: 'Yes, we provide daily market analysis, stock recommendations, and trading ideas. Our research team shares insights on stocks, commodities, and derivatives.',
    },
    {
      question: 'How long does account activation take?',
      answer: 'Account activation typically takes 24-48 hours after successful verification of your documents. You will receive your login credentials via email and SMS.',
    },
  ]

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-4">
            Quick Guides
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item group relative bg-gradient-to-r from-white via-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-primary-300"
            >
              {/* Premium gradient overlay for open state */}
              {openIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-transparent to-transparent transition-opacity duration-300"></div>
              )}
              
              {/* Premium accent line */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 transition-all duration-300 ${
                openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
              
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="relative z-10 w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-primary-50/50"
              >
                <span className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
                  openIndex === index ? 'text-primary-600' : 'text-dark-900'
                }`}>
                  {faq.question}
                </span>
                <div className="flex items-center gap-3">
                  {/* Premium indicator */}
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    openIndex === index ? 'bg-primary-500' : 'bg-gray-300'
                  }`}></div>
                  <ChevronDown
                    className={`flex-shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'text-primary-600 rotate-180' : 'text-primary-500'
                    }`}
                    size={28}
                  />
                </div>
              </button>
              
              {/* Premium answer section */}
              <div
                className={`relative z-10 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="bg-gradient-to-r from-primary-50 to-transparent rounded-xl p-6 border-l-4 border-primary-400">
                    <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-dark-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <a href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold px-10 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
