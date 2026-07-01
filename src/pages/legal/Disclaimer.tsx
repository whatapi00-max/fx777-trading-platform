import { AlertTriangle, Info, ChevronRight } from 'lucide-react'
import PageLayout from '../../components/Layout/PageLayout'

const disclaimerSections = [
  {
    title: 'No Investment Advice',
    content: 'The information provided on the FX777 platform, including market data, analysis, articles, research reports, and trading signals, is for educational and informational purposes only. It does not constitute financial, investment, legal, or tax advice. FX777 does not recommend buying or selling any specific financial instrument.',
  },
  {
    title: 'Past Performance',
    content: 'Past performance of any financial instrument, trading strategy, or investment product is not indicative of future results. All examples shown on the Platform are for illustrative purposes only. Actual results may vary significantly.',
  },
  {
    title: 'Third-Party Content',
    content: 'The Platform may display content, research, or information from third-party sources. FX777 does not endorse or guarantee the accuracy of third-party content. Users should independently verify any information before making trading decisions.',
  },
  {
    title: 'Market Data Accuracy',
    content: 'While we strive to provide accurate real-time market data, FX777 does not guarantee the accuracy, completeness, or timeliness of market data. There may be occasional delays or inaccuracies due to factors beyond our control, including exchange delays or technical issues.',
  },
  {
    title: 'Availability of Service',
    content: 'FX777 does not guarantee uninterrupted access to the Platform. The service may be temporarily unavailable due to maintenance, technical issues, regulatory requirements, or force majeure events. We are not liable for losses arising from service interruptions.',
  },
  {
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law, FX777 shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Platform, including trading losses, loss of data, or business interruption.',
  },
]

const Disclaimer = () => {
  return (
    <PageLayout
      title="Disclaimer"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Legal' }, { name: 'Disclaimer' }]}
      description="Important disclaimers regarding FX777's services, content, and market information."
    >
      <div className="space-y-10">
        {/* Regulatory disclaimer */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-amber-900 mb-2">SEBI Mandatory Disclosure</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
                FX777 is a SEBI-registered broker. Registration does not imply a certain level of skill or training.
                As per a SEBI study, approximately 70-80% of individual traders in the equity F&O segment incurred net losses.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            This disclaimer should be read in conjunction with our <strong>Terms &amp; Conditions</strong>, <strong>Risk Disclosure</strong>, 
            and <strong>Privacy Policy</strong>. By using the FX777 Platform, you acknowledge that you have read and understood these disclaimers.
          </p>
        </div>

        <div className="space-y-5">
          {disclaimerSections.map(({ title, content }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-xl p-6">
              <h3 className="text-base font-bold text-dark-900 mb-3 flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">{content}</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-900 text-white rounded-xl p-6">
          <h2 className="font-bold text-lg mb-2">Grievance Redressal</h2>
          <p className="text-gray-300 text-sm mb-4">
            For any queries, grievances, or complaints, please contact our Grievance Officer. We are committed to resolving 
            all issues within 30 days as required by SEBI regulations.
          </p>
          <div className="text-sm text-gray-300 space-y-1">
            <p><strong className="text-white">Grievance Officer:</strong> [Name, Designation]</p>
            <p><strong className="text-white">Email:</strong> grievance@fx777.com</p>
            <p><strong className="text-white">Phone:</strong> +91 XXXX XXX XXX</p>
            <p className="mt-3 text-xs text-gray-400">
              If not resolved, you may escalate to SEBI SCORES at scores.gov.in
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Disclaimer
