import Theme from '../styles/theme';
import { Layout } from '../layout/Layout';
import { Section, SectionTitle, SectionText, SectionDivider,SectionSubText, LinkContainer  } from '../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle , ListIcon, ListIcon2} from '../components/Technologies/TechnologiesStyles';
import ContactFirebase from '../components/ContactForm/ContactForm.js'
import Footer from '../components/Footer/Footer'

  export default function Contact ({ Component, pageProps }) {
    return (
      <>
        <Theme>
<Layout>

<ContactFirebase>
  </ContactFirebase>



<Footer/>

</Layout>
  
  
</Theme>
      </>
    );
  }
  
  
  