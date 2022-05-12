import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import CompanyPolicies from '../../components/Pages/T&CS/CompanyPolicies';
import Footer from '../../components/Home/Footer/Footer'

export default function CompanyPolicy({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>

          <CompanyPolicies />

          <Footer />

        </Layout>


      </Theme>
    </>
  );
}


