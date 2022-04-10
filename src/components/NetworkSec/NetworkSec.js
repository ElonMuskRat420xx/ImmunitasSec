import React from 'react';
import styled from 'styled-components'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const NetworkSec = (props) => (
  <>

<Section>

<h1>Contact & Hero Section </h1>


</Section>

<Section>

<PageTitle>
Test Your Network Security &
<br/>
Simulate Various Types of Cyberattacks
</PageTitle>
    
<SectionText>
Your network security should combine multiple layers of defense, both at the edges and within the network. Each network security layer implements policies and controls that manages which authorized users can gain access to  network resources. Malicious actors need to be blocked from carrying out exploits and threats at every level to protect your assets from unauthorized access. Our services will allow you to get insight into how skilled adversaries could establish network access and put sensitive systems and data at risk.
</SectionText>
<SectionDivider>
</SectionDivider>
</Section> 

<ServiceSection>
<PageSubTitle>
What Is A Network Penetration Test
</PageSubTitle>

<SectionText>
Also known as infrastructure penetration testing, network pen testing is a proactive approach to cyber security. It discovers, critically assesses and exploits security vulnerabilities, weaknesses, technical misconfigurations that a cyber attacker would target in your network’s infrastructure.
<br/>
<br/>
The ramifications of a breach can be costly fiscally and reputationally. The number of cyber attacks on a business is on the rise so it isn’t a case of ‘if’ but ‘when’.
<br/>
<br/>
Our network pen testing experts will identify the risks posed to your business, and crucially, develop a comprehensive plan to strengthen your cyber resilience. In as little as 3 days and with minimal disruption to your business, you’ll know how to bulletproof your organisation.

</SectionText>
 {/* <PageBtn onClick={props.handleClick}>More About Network Pentesting</PageBtn> */}
<SectionDivider>

</SectionDivider>
</ServiceSection>

<ServiceSection>
<PageSubTitle>
Benefits of Network Penetration Testing
</PageSubTitle>


<SectionText>
Compromised data can lead to financial and reputational damage. Exploiting vulnerabilities in a controlled environment through pen testing allows you to see what you are doing well and what needs urgent attention. Today’s cyber criminals are more advanced than ever before. Bulletproof’s team of CREST accredited network pen testers perform robust tests that mimic those of the hackers, with little impact on your daily operations. We’ll protect your business now and for the future.
<br/>
<br/>
<li> ▫ Uncover vulnerabilities and poor security controls</li>
<li> ▫ Exploit network security flaws in order to understand the full risk</li>
<li> ▫ Expose insecure functionality in your networks and logic flaws</li>
<li> ▫ Form part software development lifecycle, to improve future development</li>

</SectionText>

<SectionDivider>
</SectionDivider>

</ServiceSection>

  </>
);

export default NetworkSec;

const ServiceSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
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

const PageTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }

`
const PageSubTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '42px' : '24px'};
  line-height: ${(props) => props.main ? '32px' : '32px'};
  width: max-content;
  max-width: 100%;
  
  margin-bottom: 2rem;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '24px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 24px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '24px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`