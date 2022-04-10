import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import ServiceButton from '../../styles/GlobalComponents/ServiceButton';
import HeroButton from '../../styles/GlobalComponents/HeroButton';
import {CalloutBanner1, CalloutBanner2, CalloutBanner3, CalloutBanner4, CalloutBanner5 } from './ServiceCards'

function Services(props) {
  return (


<ServiceSection>

<Section>
<HeroRow>
  

  <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ac7d2e5">
			<div class="elementor-column-wrap elementor-element-populated">
			
      <div class="elementor-widget-wrap">
				
			  <SectionSubText>
        We Are Secure
        </SectionSubText>
  
        <SectionTitle>
        Assessment Services
        </SectionTitle>

        <SectionText>
        To successfully protect your organisation against cyber threats, it’s imperative to begin by identifying where its security weaknesses lie. 
        </SectionText>
    
			</div>
			</div>
		  </div>

  <ImageHero>
  <img width="450" height="450" src="" alt="hero image" />											
  </ImageHero>	
  </HeroRow>

  <Link href="/Contact">

  <HeroButton onClick={props.handleClick}>
    Get A Quote
  </HeroButton>

  </Link>

</Section>

<LeftSection>
<SectionTitle>
Providing support to uncover and address hidden gaps in your security 
</SectionTitle>
<SectionText>
Redscan’s cyber security assessment services are designed to uncover vulnerabilities across your organisation, validate the effectiveness of security controls and processes, and provide the support and advice required to address security risks.
<br/>
All our assessments are conducted by professional ethical hackers with the skills and experience to deliver them in line with the most rigorous legal, ethical and technical standards.
</SectionText>
</LeftSection>

<SectionDivider/>

<br/>
<br/>

<SectionTitle>
Cyber Security Assessment Services
</SectionTitle>


<ServiceSection>

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
</ServiceSection>



</ServiceSection>
)
}

 export default Services;


// Service Page Hero Styled Components

const LeftSection = styled.div`
  width: 75%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

const HeroRow = styled.div`

  width: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    -ms-flex-wrap: wrap;
		flex-wrap: wrap
  }
  @media ${(props) => props.theme.breakpoints.md} {
    -ms-flex-wrap: wrap;
		flex-wrap: wrap
  }
`;

const ImageHero = styled.div`

display: inline-block;
text-align: center;
vertical-align: top;
width: 100%;
max-width: 100%;
margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 90%

  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 90%

  }
`;

//Services Styled Components

const ServiceGrid = styled.section`
display: grid;
grid-template-columns: repeat(2,50%);
grid-template-rows: repeat(1,3);
grid-column-gap: 42px;
grid-row-gap: 0px;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
}
`
const ServiceSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
  `





















// <SectionText>
// <FaArrowCircleRight size="1.25rem"/>
// <Link href="/SmartDevices" >
// Mobile Application Testing
// </Link> 

// <FaArrowCircleRight size="1.25rem"/>
// <Link href="/NetworkSecurity" >
//   Network Penetration Testing
// </Link> 
// </SectionText>
