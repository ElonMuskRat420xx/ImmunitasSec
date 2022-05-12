import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Footer from '../../components/Footer/Footer'
import NetworkSec from '../../components/Pages/NetworkSecurity/NetworkSec';
import MessagingSection from '../../components/Home/ContactForm/ContactForm.js'
import TestingApproach from '../../components/Pages/NetworkSecurity/Methodology'
import NetworkSecFaq from '../../components/Pages/NetworkSecurity/Faq'

export default function NetworkSecurity({ Component, pageProps }) {
  return (
    <>

      <Theme>

        <Layout>

          <NetworkSec>

            <MessagingSection>

            </MessagingSection>

          </NetworkSec>

          <TestingApproach />

          <NetworkSecFaq>

          </NetworkSecFaq>

          <Footer />

        </Layout>


      </Theme>
    </>
  );
}

