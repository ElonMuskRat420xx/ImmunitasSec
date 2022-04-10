import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';;
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import  ReportHero  from '../components/FooterHero/ReportHero';
import ContactHero from '../components/FooterHero/ContactLowerHero';
import Footer from '../components/Footer/Footer'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />



      <Section grid>


      <ReportHero />


        <ContactHero />

        
        </Section>





      <Footer/>
    </Layout>
  );
};

export default Home;
