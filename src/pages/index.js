import React, { useState } from "react";
import BgAnimation from '../components/Home/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Home/TopHero/Hero';
import Technologies from '../components/Home/Technologies/Technologies';
import Footer from '../components/Home/Footer/Footer'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import ContactForm from '../components/Home/ContactForm/ContactForm.js'
import Modal from '../components/Home/ContactForm/Modal'
import { ChatButton, ContactButtonContainer } from '../components/Home/ContactForm/ContactButton';
import { SiGooglemessages } from "react-icons/si";

import FooterHero from "../components/Home/LowerHero/FooterHero";
import Tabs from "../components/Home/Services/ServiceTabs";



export default function Home({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Layout>

        <Section nopadding grid>
          <Hero />
          <BgAnimation />
        </Section>

        <Tabs />

        <Technologies />

        <FooterHero />

        <ContactButtonContainer>

          <ChatButton onClick={() => setShowModal(true)}>
            <SiGooglemessages size="5rem" />
          </ChatButton>

        </ContactButtonContainer>

        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <ContactForm />

        </Modal>

        <Footer />
      </Layout>

    </>

  );
};

