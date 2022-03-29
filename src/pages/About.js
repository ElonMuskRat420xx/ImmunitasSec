import Theme from '../styles/theme';
import { Layout } from '../layout/Layout';
import { Section, SectionTitle, SectionText, SectionDivider,SectionSubText, LinkContainer  } from '../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle , ListIcon, ListIcon2} from '../components/Technologies/TechnologiesStyles';
import AboutSection from '../components/About/About'
import Footer from '../components/Footer/Footer'

  export default function About ({ Component, pageProps }) {
    return (
      <>
        <Theme>
<Layout>

<AboutSection>

</AboutSection>


<Footer/>

</Layout>
  
  
</Theme>
      </>
    );
  }
  
  
  