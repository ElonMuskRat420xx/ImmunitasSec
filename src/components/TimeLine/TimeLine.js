import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { HeroRight, HeroLeft, LeftSection, RightSection } from './TimeLineStyles';
import SwiperSlider from '../CardSlider/CardSlider'


function TimeLine() {
  return (

    <>
      <HeroLeft>
        <LeftSection>

          <SectionTitle>Our Testing Methodology
          </SectionTitle>
          <SectionText>
            Our security testing services are based on a systematic approach to vulnerability identification and reporting. Our advanced methodology includes:
          </SectionText>
        </LeftSection>

        <RightSection>
          <SwiperSlider />
        </RightSection>
      </HeroLeft>


    </>
  )
}

export default TimeLine