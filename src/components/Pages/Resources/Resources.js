import React from 'react'
import { Section, SectionDivider, SectionSubText, SectionSubTitle, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { TopHeroContainer, TopHeroRowReverse, TopRightColumn, TopRightColContent, TopLeftColumn, TopLeftColContent, TopRightColImage, LeftSection, ServiceGrid, ServiceSection } from '../Services/ServicesStyle';
import CardFilter from './Cards/LoadMoreCards';
import LoadMoreCards from './Cards/LoadMoreCards';


function Resources() {
  return (
    <Section>
      <LeftSection>
        <SectionTitle>
          Resource Hub
        </SectionTitle>
        <SectionText>
          Stay informed about current and emerging issues in information security with in-depth insight and commentary from leading industry experts.
        </SectionText>
      </LeftSection>


      <LoadMoreCards />

    </Section>




  )
}

export default Resources