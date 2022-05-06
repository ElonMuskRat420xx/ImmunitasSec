import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import styled from 'styled-components'

const data = [
  { text1: '.01 Scoping', text2: 'Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.' },
  { text1: '.02 Reconnaissance & Intelligence Gathering ', text2: 'Our network penetration testers use the latest intelligence gathering techniques to uncover security and technical information that could be used to help them access your network.', },
  { text1: '.03 Active Scanning & Vulnerability Analaysis', text2: 'Using a combination of manual and automated tools, out testers identify security weaknesses and develop a strategy to exploit them.', },
  { text1: '.04 Explotation', text2: 'To obtain initial access to your network, our experienced network penetration testers exploit all identified vulnerabilities, but in a safe way that avoids damage and disruption.', },
  { text1: '.05 Reporting', text2: 'Once a network assessment is complete, our testers document key findings and supply prioritised remediation guidance to help address any identified exposures.', },

];

const TestingApproach = () => {

  return (

    <Section>
      <SectionTitle>
        Our Approach To Network Testing
      </SectionTitle>

      <SectionText>
        An Immunitas network test follows a tried and tested methodology to identify, exploit and help address vulnerabilities. Here’s how we approach an external network assessment
      </SectionText>

      <ApproachBoxes>
        {data.map((card, index) => (
          <ApproachBox key={index}>
            <ApproachBoxNum>{`${card.text1}`}</ApproachBoxNum>
            <ApproachBoxText>{card.text2}</ApproachBoxText>
          </ApproachBox>
        ))}
      </ApproachBoxes>

    </Section>


  );
};

export default TestingApproach;

const ApproachBoxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 10px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: block;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 5px auto;
  }
`
const ApproachBox = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 100%;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 100%;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 100%;
    padding: 12px;
    margin-top:10px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
const ApproachBoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`
const ApproachBoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`