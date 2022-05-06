import React from 'react'
import { SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { HeroLeft, HeroRight, LeftSection, RightSection } from "../SampleReport/SampleReportStyles";
import Image from 'next/image';

import FooterHeroImg from '../../../../public/images/RedscanHero.svg'


function FooterHero() {
  return (
    <>

      <HeroRight>
        <LeftSection>
          <SectionTitle>
            Ready to Get Started?
          </SectionTitle>
          <SectionText>
            We’re here to help. Reach out to schedule an introductory call with one of our team members and learn more about how Arctic Wolf can benefit your organization.
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
        <LeftSection>
          <SectionTitle>
            Ready to Get Started?
          </SectionTitle>
          <SectionText>
            We’re here to help. Reach out to schedule an introductory call with one of our team members and learn more about how Arctic Wolf can benefit your organization.
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
      </HeroLeft>


    </>

  )
}

export default FooterHero;