import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { HeroLeft, HeroRight, LeftSection, RightSection, LeftHero } from './ServicesStyle';
import { Section, SectionDivider, SectionSubText, SectionSubTitle, SectionText, SectionTitle } from '../../../styles/GlobalComponents';

import ServicePageTabs from './ServicePageTabs/ServicePageTabs';

function Services(props) {
  return (


    <>
      <Section>

        <LeftHero>
          <SectionTitle>
            Providing Support To Uncover & Address Hidden Gaps In Your Security
          </SectionTitle>
          <SectionText>
            Our cyber security assessment services are designed to uncover vulnerabilities across your organisation, validate the effectiveness of security controls and processes, and provide the support and advice required to address security risks.
            <br />
            All our assessments are conducted by professional ethical hackers with the skills and experience to deliver them in line with the most rigorous ethical and technical standards.
          </SectionText>

        </LeftHero>


        <SectionTitle>
          Cyber Security<br />
          Assessment Services
        </SectionTitle>

        <SectionText>
          Identify and manage your organisation’s security vulnerabilities with SecurePortal and Penetration Testing as a Service (PTaaS).
        </SectionText>

      </Section>
      <ServicePageTabs />

    </>

  )
};
export default Services;
