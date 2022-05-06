import React, { useState } from "react";
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import Footer from '../components/Footer/Footer'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import ContactForm from '../components/ContactForm/ContactForm.js'
import Modal from '../components/ContactForm/Modal'
import { ChatButton, ContactButtonContainer } from '../components/ContactForm/ContactButton';
import { SiGooglemessages } from "react-icons/si";

import FooterHero from "../components/FooterHero/HomeHero/FooterHero";
import Tabs from "../components/Services/HomepageTabs/ServiceTabs";



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

