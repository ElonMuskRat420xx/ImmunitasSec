import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Resources from '../../components/Pages/Resources/Resources';
import Footer from '../../components/Home/Footer/Footer'


export default function ResourcePage({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>


          <Resources />

          <Footer />

        </Layout>


      </Theme>
    </>
  );
}


