import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Footer from '../../components/Home/Footer/Footer'
import PenTest from '../../components/Pages/PenetrationTesting/PenTest';


export default function PenTesting({ Component, pageProps }) {
  return (
    <>

      <Theme>

        <Layout>

          <PenTest />

          <Footer />

        </Layout>

      </Theme>
    </>
  );
}

