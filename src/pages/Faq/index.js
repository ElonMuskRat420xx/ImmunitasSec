import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import FAQSection from '../../components/Pages/FAQ/Faq'
import Footer from '../../components/Home/Footer/Footer'

export default function FaqPage({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>

          <FAQSection>

          </FAQSection>


          <Footer />

        </Layout>


      </Theme>
    </>
  );
}

