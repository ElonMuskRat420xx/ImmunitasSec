import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import PrivacyNotice from '../../components/T&CS/PrivacyNotice';
import Footer from '../../components/Footer/Footer'

  export default function PrivacyNotices ({ Component, pageProps }) {
    return (
      <>
        <Theme>
<Layout>

<PrivacyNotice/>

<Footer/>

</Layout>
  
  
</Theme>
      </>
    );
  }
  
  
  