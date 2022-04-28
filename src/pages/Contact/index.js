import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Footer from '../../components/Footer/Footer'
import React from "react";
import ContactForm from '../../components/ContactForm/ContactForm.js'
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import styled from 'styled-components';
import HeroGrid from '../../components/ContactForm/HeroGrid';

export default function Contact ({ Component, pageProps }) {
  return (
    <>
      <Theme>
<Layout>

<Section>
<HeroGrid/>
</Section>

<Footer/>

</Layout>


</Theme>
    </>
  );
}


