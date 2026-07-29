import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "4873def8-5c9e-4e01-b341-8d52b5387309")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      console.log("Web3Forms response:", data)
      
      // Web3Forms returns success: true even if there are issues
      // Check if the response is successful based on status code
      if (response.ok) {
        setResult("Message sent successfully!")
        event.currentTarget.reset()
      } else {
        console.error("Web3Forms HTTP error:", response.status, data)
        setResult(data.message || "Error sending message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setResult("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
      details: 'support@fx777.in',
      subdetails: 'We reply within 24 hours',
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

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
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
                'from-green-400 to-green-600'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-400 to-blue-600' : 
                  'from-green-400 to-green-600'
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
            <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4 text-center bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Open an Account in Minutes
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Ready to start trading? Click below to open your free account or fill the form for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://fx777crm.theplatformapi.com/auth-pages/create-account/step1?accountType=real" target="_blank" rel="noopener noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-center">
                Open Account Now
              </a>
              <a href="https://fx777crm.theplatformapi.com/auth-pages/login" target="_blank" rel="noopener noreferrer" className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-bold px-8 py-3 rounded-xl transition-all duration-200 text-center">
                Login to Account
              </a>
            </div>
            <p className="text-center text-sm text-gray-500 mb-8 border-t pt-8">
              Or send us a message below for any questions
            </p>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
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
                  name="phone"
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
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your trading experience..."
              />
            </div>

            {result && (
              <div className={`p-4 rounded-lg text-center ${
                result.includes("success") 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {result}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
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
