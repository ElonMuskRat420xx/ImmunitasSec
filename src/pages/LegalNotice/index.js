import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import LegalNotice from '../../components/T&CS/LegalNotice';
import Footer from '../../components/Footer/Footer'

  export default function LegalNotices ({ Component, pageProps }) {
    return (
      <>
        <Theme>
<Layout>

<LegalNotice/>

<Footer/>

</Layout>
  
  
</Theme>
      </>
    );
  }
  
  
  