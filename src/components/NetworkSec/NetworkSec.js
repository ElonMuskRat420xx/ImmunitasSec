import React from 'react';
import styled from 'styled-components'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from '../Hero/HeroStyles';
import {DropDown1, DropDown2, DropDown3, DropDown4, DropDown5} from './DropDown';





const NetworkSec = (props) => (
  <>


<Section>
<div class="max-w-screen-lg mx-auto p-5 rounded-xl mt-10 ">
  <div class="bg-transparent rounded-xl flex flex-col xs:flex-row ">
    <div class=" h-[30rem] w-[45%] md:col-span-4 p-10 text-white rounded-xl">
      <p class="mt-4">
     
    <SectionTitle>
    Comprehensive Security Testing 
    </SectionTitle>
      </p>
      
    
  <div class="flex items-center mt-10 mb-10">

  <p class="">

  <SectionText>
    Identify vulnerabilities and exploits that threat actors could leverage to gain access to sensitive data and mission critical systems.
    </SectionText>
  </p>    
  </div>

    </div>
      <form class="md:col-span-8 p-10">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block tracking-wide text-gray-700 text-xl font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none bg-transparent border-b border-[#9cc9e3] w-full text-white mr-3 p-4 leading-tight focus:outline-none hover:bg-transparent" type="text" placeholder="Enter First Name" aria-label="Full name"/>
      
      {/* <p class="text-red-500 text-xs italic mt-1">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none bg-transparent border-b border-[#9cc9e3] w-full text-white mr-3 p-4 leading-tight focus:outline-none" type="text" placeholder="Enter Last Name" aria-label="Full name"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email Address
      </label>
      <input class="appearance-none bg-transparent border-b border-[#9cc9e3] w-full text-white mr-3 p-4 leading-tight focus:outline-none " type="email" placeholder="Enter Email Here" aria-label="Name Last"/>
    </div>
  </div>
    
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Your Message
      </label>
      <textarea rows="3" class=" my-10 appearance-none bg-transparent border-b border-[#9cc9e3] w-full text-white mr-3 p-4  leading-tight focus:outline-none" type="email" placeholder="Enter Your Message Here" aria-label="Text">

      </textarea>
    </div>
    <div class="flex justify-between w-full px-3">
      <div class="md:flex md:items-center">
       
      </div>


      
      <button class="shadow hover:bg-[#212D50] focus:shadow-outline focus:outline-none text-[rgba(255,255,255,0.66)]-bold py-2 px-6 rounded-xl" type="submit">
      <h3 class="text-3xl sm:text-4xl leading-normal font-bold tracking-tight">

        Get In Touch
        
        {/* <span class="text-[#9cc9e3]"> Now</span> */}
      </h3>
      </button>
    </div>
      
  </div>
    
</form>
    
  </div>
</div>
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




const PageBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`




//Section Styled Components

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
const SectionFaq = styled.section`
 
  margin-left: 2rem;
  
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {

    width: calc(100vw - 32px);
    flex-direction: column;
    
  }

`




//Title Styled Components

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


const FaqTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '55px' : '46px'};
  width: max-content;
  max-width: 100%;
  margin-top:2rem;
  margin-bottom:4rem;
  margin-left:20%;

  @media ${props => props.theme.breakpoints.md}{
    line-height: ${(props) => props.main ? '56px' : '48px'};
    font-size:32px;
    margin-left:10%;

  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 24px;
    line-height: 40px;
    max-width: 100%;
    margin-left:0%;
    padding-top:1.25rem;
    
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