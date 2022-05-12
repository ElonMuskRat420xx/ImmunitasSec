import React from 'react'
import { SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { HeroLeft, HeroRight, LeftSection, RightSection, LowerLeftSection, LowerRightSection } from "./FooterHeroStyles";
import Image from 'next/image';

import { ContactUsBtn } from '../../../styles/GlobalComponents/PrimaryBtn';
import FooterHeroImg from '../../../../public/images/RedscanHero.svg'


function FooterHero() {
  return (
    <>

      <HeroRight>
        <LeftSection>
          <SectionTitle>
            Providing Support To Uncover & Address Hidden Gaps In Your Security
          </SectionTitle>
          <SectionText>
            <p>
              Our cyber security assessment services are designed to uncover vulnerabilities across your organisation, validate the effectiveness of security controls and processes, and provide the support and advice required to address security risks.
            </p>
            <br />
            <p>
              All our assessments are conducted by professional ethical hackers with the skills and experience to deliver them in line with the most rigorous legal, ethical and technical standards.
            </p>

          </SectionText>
        </LeftSection>

        <RightSection>
          <Image
            src={FooterHeroImg}
            alt="Image"
            width="1000px"
            height="1000px"
          >
          </Image>
        </RightSection>
      </HeroRight>

      <HeroLeft>
        <LowerLeftSection>
          <SectionTitle>
            Ready to Get Started?
          </SectionTitle>
          <SectionText>
            We’re here to help. Reach out to schedule an introductory call with one of our team members and learn more about how Arctic Wolf can benefit your organization.
          </SectionText>
          <ContactUsBtn />
        </LowerLeftSection>

        <LowerRightSection>
          <Image
            src={FooterHeroImg}
            alt="Image"
            width="1000px"
            height="1000px"
          >
          </Image>
        </LowerRightSection>
      </HeroLeft>


    </>

  )
}

export default FooterHero;