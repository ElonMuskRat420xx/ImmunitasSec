import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { TopHeroContainer, TopHeroRowReverse, TopRightColumn, TopRightColContent, TopLeftColumn, TopLeftColContent, TopRightColImage, LeftSection, ServiceGrid, ServiceSection } from './ServicesStyle'; 
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import ServiceButton from '../../styles/GlobalComponents/ServiceButton';
import HeroButton from '../../styles/GlobalComponents/HeroButton';
import Button from '../../styles/GlobalComponents/Button';
import {CalloutBanner1, CalloutBanner2, CalloutBanner3, CalloutBanner4, CalloutBanner5 } from './ServiceCards'
import HeroImage from '../../../public/images/Redscan1.svg'

function Services(props) {
  return (


<ServiceSection>

<Section>

<TopHeroContainer>
<TopHeroRowReverse>

<TopRightColumn>
<TopRightColContent>
<TopRightColImage>
<Image
      src={HeroImage}
      alt="Card Image"
      width="1000px"
      height="1000px"

    />
</TopRightColImage>
</TopRightColContent>
</TopRightColumn>

<TopLeftColumn>
<TopLeftColContent>
<SectionSubText>
        We Are Secure
        </SectionSubText>
  
        <SectionTitle>
        Assessment Services
        </SectionTitle>

        <SectionText>
        To successfully protect your organisation against cyber threats, it’s imperative to begin by identifying where its security weaknesses lie. 
        </SectionText>

<Link href="/Contact">

<HeroButton onClick={props.handleClick}>
  Get A Quote
</HeroButton>
</Link>
</TopLeftColContent>
</TopLeftColumn>
</TopHeroRowReverse>
</TopHeroContainer>


<LeftSection>
<SectionTitle>
Providing Support To Uncover & Address Hidden Gaps In Your Security 
</SectionTitle>
<SectionText>
Our cyber security assessment services are designed to uncover vulnerabilities across your organisation, validate the effectiveness of security controls and processes, and provide the support and advice required to address security risks.
<br/>
All our assessments are conducted by professional ethical hackers with the skills and experience to deliver them in line with the most rigorous ethical and technical standards.
</SectionText>
</LeftSection>
<SectionDivider/>

</Section>

<Section>
<SectionTitle>
Cyber Security Assessment Services
</SectionTitle>

<ServiceGrid>

  <CalloutBanner1

    title={"Pentration Testing"}
    description={"As a CREST-accredited penetration testing company, trust our high-quality pen testing engagements to identify and address security vulnerabilities in your networks, infrastructure, and applications."}
  >


  <Link href="/PenetrationTesting">
  <ServiceButton onClick={props.handleClick}>
    Learn More
  </ServiceButton>
  </Link>
  </CalloutBanner1> 


  <CalloutBanner2

    title={"Application Testing"}
    description={"Our web application penetration testing service can be commissioned to assess the security of websites and applications developed in-house or by third-party vendors."}
  >
  <Link href="/ApplicationSecurity">
  <ServiceButton onClick={props.handleClick}>
    Learn More
  </ServiceButton>
  </Link>
  </CalloutBanner2> 


  <CalloutBanner3

    title={"Red Team Operations"}
    description={"With an intelligence-led Red Team Operation, test your organisation’s preparedness to prevent, detect and respond to a targeted cyber-attack simulation. "}
  >
  <Link href="/RedTeaming">
  <ServiceButton onClick={props.handleClick}>
    Learn More
  </ServiceButton>
  </Link>
  </CalloutBanner3> 


  <CalloutBanner4

    title={"Social Engineering"}
    description={"Assess the ability of your organisation’s systems and personnel to detect and respond to a real-life email phishing exercise."}
  >
  <Link href="/SocialEngineering">
  <ServiceButton onClick={props.handleClick}>
    Learn More
  </ServiceButton>
  </Link>
  </CalloutBanner4> 


  <CalloutBanner5

    title={"Vulnerability Assessment"}
    description={"With our vulnerability assessment service, you can better understand and manage your organisation’s cyber security risks by receiving help to identify, classify and mitigate them. "}
  >
  <Link href="/VulerabilityAssessment">
  <ServiceButton onClick={props.handleClick}>
    Learn More
  </ServiceButton>
  </Link>
  </CalloutBanner5> 

</ServiceGrid>
</Section>

</ServiceSection>

)
}
 export default Services;
