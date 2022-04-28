import React, { useState } from "react";
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import ServiceGrid from "../components/ServicesHome/Services";
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import  ReportHero  from '../components/FooterHero/SampleReportHero';
import Footer from '../components/Footer/Footer'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import ContactForm from '../components/ContactForm/ContactForm.js'
import Modal from '../components/ContactForm/Modal'
import { ChatButton , ContactButtonContainer } from '../components/ContactForm/ContactButton';
import { SiGooglemessages } from "react-icons/si";




export default function Home ({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      
  
    <Layout>
      
      <Section grid>

      <Hero />
      <BgAnimation />

      </Section>
            
      <ServiceGrid />

      <Technologies />

      <Timeline />

      <Acomplishments />
      
      <ReportHero />
    


<ContactButtonContainer>

<ChatButton onClick={() => setShowModal(true)}> 
<SiGooglemessages size="5rem" />
</ChatButton>

</ContactButtonContainer>

<Modal
  onClose={() => setShowModal(false)}
  show={showModal}
>
<ContactForm/>

</Modal>  
        


    <Footer/>
    </Layout>

    </>

  );
};

