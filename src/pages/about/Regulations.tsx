import PageLayout from '../../components/Layout/PageLayout'
import { Shield, FileCheck, Award, Lock } from 'lucide-react'

const Regulations = () => {
  const compliance = [
    { icon: Shield, title: 'Regulatory Compliance', description: 'Fully compliant with all applicable regulations' },
    { icon: FileCheck, title: 'Licensed Broker', description: 'Licensed and authorized by regulatory authorities' },
    { icon: Award, title: 'Industry Standards', description: 'Adhering to highest industry standards' },
    { icon: Lock, title: 'Client Protection', description: 'Client funds held in segregated accounts' },
  ]

  return (
    <PageLayout
      title="Regulations & Compliance"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }, { name: 'Regulations' }]}
      description="Learn about our regulatory compliance and commitment to maintaining the highest standards."
    >
      <div className="space-y-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {compliance.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </section>

        <section className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-200">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Our Regulatory Framework</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>FX777 operates under strict regulatory oversight to ensure the safety and security of our clients. We maintain full compliance with all applicable financial regulations and industry standards.</p>
            <p>Client funds are held in segregated accounts with tier-1 banks, ensuring your capital is protected. We undergo regular audits and maintain transparent reporting to regulatory authorities.</p>
          </div>
        </section>

      </div>
    </PageLayout>
  )
}

export default Regulations
