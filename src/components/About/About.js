import React from 'react';
import styled from 'styled-components';
import {SectionContact, Section, SectionTitle, SectionText, SectionSubTitle, SectionDivider, SectionSubText} from '../../styles/GlobalComponents/index';
import Image from 'next/image';
import Red1 from '../../../public/images/Redscan1.svg'


function AboutSection() {
    return (

<Section> 




<SectionTitle>
Immunitas is 100% Dedicated to Cybersecurity
</SectionTitle>

<SectionText>
We are a trusted provider of innovative cyber security and people-powered solutions. Our cyber security services are the best way to stay one step ahead of the hackers, take control of your infrastructure and protect business-critical data.
</SectionText>

<SectionText>
We make cyber security accessible for everyone. With our combined industry knowledge and pioneering technology, we are confident in providing our customers with valuable cyber security solutions to strengthen their cyber resilience.
</SectionText>

<SectionTitle>
Our Mission and Values
</SectionTitle>

<Grid>

<Card>
<Title>
An adversarial mindset
</Title>
<Text>
We harness the latest cyberoffensive intelligence to help identify and address security risks sooner.
</Text>
</Card>

<Card>
<Title>
Outcome-focused
</Title>
<Text>
We work closely with our clients to better understand and address their needs.
</Text>
</Card>

<Card>
<Title>
High-quality service
</Title>
<Text>
We strive to continually deliver the highest standards of customer support and exceed expectations.
</Text>
</Card>

<Card>
<Title>
Technology-agnostic
</Title>
<Text>
We’re not constrained by one set of technologies so select the best tools for each client.
</Text>
</Card>
<SectionDivider/>

</Grid>



<HeroContainer>
  <HeroContent>
  <SectionTitle>
  Detecting Threats By Adversarial Thinking
  </SectionTitle>

  <SectionText>
  Defending against the latest cyber threats requires a deep understanding of how attackers operate.
  <br/>
  Our extensive experience of conducting ethical hacking engagements means that we have first-hand knowledge of the latest adversarial tactics and wide-ranging insight into how to safeguard against them.
  <br/>
  Continuous collaboration between our offensive and defensive security teams means we are always ready to defend your organisation against current and emerging threats.
  </SectionText>

  </HeroContent>

<HeroImg className="fixed">
<Image className="relative"
      src={Red1}
      alt="Card Image"
      layout='fill'
      objectFit='contain'
    />
</HeroImg>

</HeroContainer>







</Section>



            
)
}

export default AboutSection;


export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Card = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;
  }
  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const Title = styled.h5`
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

export const Text = styled.p`
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


const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 0rem;
  padding: 0rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: ${(props) =>
      props.isReverse ? `column` : `column-reverse`};
    /* accounts for when we want image above or below text */
    padding: 0;
  }
`

const HeroContent = styled.div`
  max-width: 640px;
  padding: 8rem 0 8rem 2rem;
  margin-right: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 4rem 0;
    max-width: 100%;
  }
`

const HeroImg = styled.image`
  flex: 1 1 50%;
  background-size: cover;
  background-repeat: no-repeat;
  align-self: center;
  margin-top: 3rem;
  margin-left: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 0;
    margin-left: 0;
    max-width: 560px;
  }
`
