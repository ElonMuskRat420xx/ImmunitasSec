import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import PrivacyNotice from '../../components/Pages/T&CS/PrivacyNotice';
import Footer from '../../components/Home/Footer/Footer'

export default function PrivacyNotices({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>

          <PrivacyNotice />

          <Footer />

        </Layout>


      </Theme>
    </>
  );
}


