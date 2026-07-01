import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately
      gsap.set('.contact-card', { opacity: 0, y: 40 });
      
      // Animate to visible state immediately on load
      gsap.to('.contact-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.9,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 1800-XXX-XXXX',
      subdetails: 'Mon-Sat, 9 AM - 6 PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@fx777.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra',
      subdetails: 'India - 400001',
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-4">
            Contact Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you start your trading journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card group relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-primary-200 overflow-hidden"
            >
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Premium top accent */}
              <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${
                index === 0 ? 'from-blue-400 to-blue-600' : 
                index === 1 ? 'from-green-400 to-green-600' : 
                'from-purple-400 to-purple-600'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-400 to-blue-600' : 
                  index === 1 ? 'from-green-400 to-green-600' : 
                  'from-purple-400 to-purple-600'
                } rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{info.title}</h3>
                <p className="text-lg text-primary-600 font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{info.subdetails}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-card relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-1 border border-gray-200 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10">
            <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-8 text-center bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Open an Account in Minutes
            </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your trading experience..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Submit Request
              <Send size={20} />
            </button>

            <p className="text-sm text-dark-600 text-center">
              By submitting, you agree to our Terms & Conditions and Privacy Policy
            </p>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
