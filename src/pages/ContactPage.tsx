import PageLayout from '../components/Layout/PageLayout'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us"
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]}
      description="Get in touch with our team. We're here to help you with any questions or concerns."
    >
      <Contact />
    </PageLayout>
  )
}

export default ContactPage
