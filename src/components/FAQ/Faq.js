import {React} from 'react';
import styled from 'styled-components';
import { Section, SectionSubTitle, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import SearchBar from './Search';
import GeneralQuestions from './Accordions/General.js';
import DeliverableQuestions from './Accordions/Deliverables';
import ScopingQuestions from './Accordions/Scoping';

import FAQData from "./Data/MainData.json";
import Link from 'next/link';

const data = [
  { text1: '.01 ', text2: 'Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.'},
  { text1: '.02 Reconnaissance & Intelligence Gathering ', text2: 'Our network penetration testers use the latest intelligence gathering techniques to uncover security and technical information that could be used to help them access your network.', },
  { text1: '.03 Active Scanning & Vulnerability Analaysis', text2: 'Using a combination of manual and automated tools, out testers identify security weaknesses and develop a strategy to exploit them.', },
  { text1: '.04 Explotation', text2: 'To obtain initial access to your network, our experienced network penetration testers exploit all identified vulnerabilities, but in a safe way that avoids damage and disruption.', },
  { text1: '.05 Reporting', text2: 'Once a network assessment is complete, our testers document key findings and supply prioritised remediation guidance to help address any identified exposures.', },

];


function Faq() {
    return (

<Section>

<SectionTitle>
Frequently Asked Questions
</SectionTitle>

<HeaderFaqText>
Do you have more questions?
<ContactText>
<Link 
href="/Contact" >Contact Us
</Link>
</ContactText>
</HeaderFaqText>

<SearchBar placeholder="Search For Answers..." data={FAQData} />

<br/>

<br/>

<SectionSubTitle>
General
</SectionSubTitle>

<GeneralQuestions>
  
</GeneralQuestions>

<SectionSubTitle>
Scoping & Testing
</SectionSubTitle>


<ScopingQuestions>

</ScopingQuestions>


<SectionSubTitle>
Deliverables & Reporting
</SectionSubTitle>

<DeliverableQuestions>

</DeliverableQuestions>

</Section>



)
} 

export default Faq;


export const GridContainerFAQ = styled.section`
display: inline-flex;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
padding: 2.5rem;

align-items: -webkit-center;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
}

`
const ContactText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 1.5rem;
  color: #9cc9e3;
  --tw-text-opacity: 1;
  
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`
const HeaderFaqText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`


export const FaqGridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
padding: 3rem;
column-gap: 0rem;
row-gap: 7rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
}

`
