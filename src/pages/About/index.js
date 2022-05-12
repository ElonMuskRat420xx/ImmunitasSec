import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import AboutSection from '../../components/Pages/About/About'
import Footer from '../../components/Home/Footer/Footer'

export default function About({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>

          <AboutSection>

          </AboutSection>


          <Footer />

        </Layout>


      </Theme>
    </>
  );
}


