import styled from "styled-components"
import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import Link from "next/link";

function Hero() {
  return (
    <HeroContainer>
      <HeroRowReverse>

        <RightColumn>
          <RightColContent>

            <SideMenuBox>
              <Title>
                Resources
              </Title>
              <LinkText>
                <ul>
                  <li><Link href="/">Why Pentesting</Link></li>
                  <li><Link href="/">Types of Penetration Testing</Link></li>
                  <li><Link href="/">Common Vulnerabilities</Link></li>
                  <li><Link href="/">Reporting and Remediation</Link></li>
                  <li><Link href="/Faq">FAQs</Link></li>
                  <li><Link href="/">Methodology</Link></li>
                </ul>
              </LinkText>
            </SideMenuBox>

          </RightColContent>
        </RightColumn>

        <LeftColumn>
          <LeftColContent>
            <SectionTitle>
              What is penetration testing?
            </SectionTitle>
            <SectionText>
              Penetration testing, also known as pentesting, describes the assessment of computer networks, systems, and applications to identify and address security weaknesses.
              <br />
              <br />
              Redscan is an award-winning provider of penetration testing services. Our range of CREST penetration testing engagements help organisations to effectively manage cyber security risk by identifying, safely exploiting, and helping to remediate vulnerabilities that could otherwise lead to data and assets being compromised by malicious attackers.
            </SectionText>
          </LeftColContent>
        </LeftColumn>

      </HeroRowReverse>
    </HeroContainer>

  )
}

export default Hero


const HeroContainer = styled.div`

display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: row-reverse;
padding-left: 2rem;
width: 100%;
height: 100%;
margin-top: -1px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`

const HeroRowReverse = styled.div`

display: flex;
    flex-direction: row-reverse;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const RightColumn = styled.div`
padding: 0rem;
height: 100%;
width: 100%;
margin: 0px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const RightColContent = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`

const LeftColumn = styled.div`

padding-top: 2rem;
height: 100%;
width: 55%;
margin: 0px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const LeftColContent = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`
const SideMenuBox = styled.div`

background: #212D45 no-repeat bottom right;
padding-left:2rem;
padding-top:2rem;
height: 100%;
-webkit-box-sizing: border-box;
box-sizing: border-box;
border-radius:25px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`
export const LinkText = styled.h2`
display:inline-flex;
font-weight: 500;
font-size: 27px;
line-height: 3rem;  
width: 100%;
height:100%;
text-align:left;
background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`


const Title = styled.h2`
  font-size: ${(props) => props.main ? '42px' : '32px'};
  line-height: ${(props) => props.main ? '32px' : '32px'};
  font-weight:800;
  width: max-content;
  max-width: 100%;
  text-align:left;

  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '24px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 18px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '18px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 0.25rem;
    margin-left:1px;
    max-width: 75%;


    @media ${props => props.theme.breakpoints.xs}{
    font-size: 18px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '18px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 0.25rem;
    margin-left:0px;
    max-width: 40%;

  }
  
  }
`