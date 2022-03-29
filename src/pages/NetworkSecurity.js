import Theme from '../styles/theme';
import { Layout } from '../layout/Layout';
import Footer from '../components/Footer/Footer'
import NetworkSec from '../components/NetworkSec/NetworkSec';
import MessagingSection from '../components/ContactForm/ContactForm.js'
import TestingApproach from '../components/NetworkSec/Methodology'
import NetworkSecFaq from '../components/NetworkSec/Faq'
import { Section } from '../styles/GlobalComponents';
  
  export default function NetworkSecurity ({ Component, pageProps }) {
    return (
      <>

<Theme>

<Layout>

<NetworkSec>

<MessagingSection>

</MessagingSection>

</NetworkSec>

<TestingApproach/>

<NetworkSecFaq>

</NetworkSecFaq>

<Footer/>

</Layout>
  
  
</Theme>
      </>
    );
  }
  
  