import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Day Trader',
      image: '👨‍💼',
      rating: 5,
      text: 'FX777 has completely changed my trading game. I save thousands every month on trading costs. The platform is fast and reliable.',
    },
    {
      name: 'Priya Sharma',
      role: 'Investor',
      image: '👩‍💼',
      rating: 5,
      text: 'Best trading platform I have used. The customer support is excellent and the mobile app makes trading so convenient.',
    },
    {
      name: 'Amit Patel',
      role: 'Swing Trader',
      image: '👨‍💻',
      rating: 5,
      text: 'The advanced charting tools and real-time data have helped me make better trading decisions. Highly recommended!',
    },
    {
      name: 'Sneha Reddy',
      role: 'Options Trader',
      image: '👩‍🎓',
      rating: 5,
      text: 'I love trading on FX777. The platform is user-friendly and perfect for beginners.',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied traders who trust us
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card w-full flex-shrink-0 px-2"
                >
                  <div className="relative bg-gradient-to-br from-white via-gray-50 to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-3xl mx-auto border border-gray-100 hover:border-primary-200 overflow-hidden">
                    {/* Premium gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Premium top accent */}
                    <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 opacity-80"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current drop-shadow-sm" size={24} />
                        ))}
                      </div>

                      <p className="text-xl text-gray-700 mb-10 leading-relaxed italic text-center font-medium">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center justify-center gap-6 pt-8 border-t border-gray-200">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                            {testimonial.image}
                          </div>
                          {/* Premium glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-xl opacity-30 -z-10"></div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-dark-900 text-lg">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-primary-500 text-dark-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-primary-500 text-dark-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-dark-900">Ready to Start Trading?</h3>
          <p className="text-lg md:text-xl mb-8 text-dark-800">
            Join thousands of traders worldwide and start your FX777 journey today
          </p>
          <a href="https://fx777crm.theplatformapi.com/auth-pages/create-account/step1?accountType=real" target="_blank" rel="noopener noreferrer" className="inline-block bg-dark-900 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-dark-800 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Open Free Account
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
