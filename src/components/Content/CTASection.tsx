interface CTASectionProps {
  heading: string
  description: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
}

const CTASection = ({ 
  heading, 
  description, 
  primaryButtonText = 'Open Account',
  secondaryButtonText = 'Learn More',
  primaryButtonLink = 'https://fx777crm.theplatformapi.com/auth-pages/create-account/step1?accountType=real',
  secondaryButtonLink = '#'
}: CTASectionProps) => {
  return (
    <section>
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12 rounded-2xl text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
          {heading}
        </h3>
        <p className="text-dark-800 mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${!secondaryButtonLink || secondaryButtonLink === '#' ? 'sm:flex-col' : ''}`}>
          <a href={primaryButtonLink} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-primary-600 font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-center">
            {primaryButtonText}
          </a>
          {secondaryButtonLink && secondaryButtonLink !== '#' && (
            <a href={secondaryButtonLink} className="bg-dark-900 hover:bg-dark-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-center">
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTASection
