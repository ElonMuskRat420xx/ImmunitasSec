import styled from "styled-components"
import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button'
import Link from "next/link";
import Image from 'next/image';
import Report from '../../../public/images/SampleReport.png'


function ReportHero() {
  return (

<GridSection>

<Grid>
<LeftGridBox>
<TitleBox>
<SectionTitle>
Clear Reports Helping You Achieve Compliance
 & Fix Your Vulnerabilities
</SectionTitle>
<SectionDivider/>

</TitleBox>
<SectionText>
    <p>Our reports present step-by-step recommendations to secure your organization from cyberattacks.</p>
    <h1>Executive Summary</h1>
    <p>Clear and concise summary of findings and recommendations, easily understood by non-technical stakeholders.</p>
    <h1>Detailed Vulnerabilities </h1>
    <p>Prioritized list and technical details of identified vulnerabilities, according to potential impact and ease of exploitation.</p>
    <h1>Solutions & Recommendations </h1>
    <p>Step-by-step recommendations and guidance to fix identified vulnerabilities, supported by external references.</p>
</SectionText>

</LeftGridBox>


<RightGridBox>    

<Image
      src={Report}
      alt="Sample Report Image"
      width="1500px"
      height="1500px"
    />

<DownloadBox>
<SectionText>
<h1>Sample Report</h1>
See The Results We Can Deliver To You. No Email Required.
</SectionText>
<Button>Download</Button>
</DownloadBox>

</RightGridBox>
</Grid>
</GridSection>


  )
}

export default ReportHero

export const Grid = styled.div`

display: grid;
grid-template-columns: repeat(2, 50%);
grid-template-rows: 1fr;
grid-column-gap: 10px;
grid-row-gap: px;
transform: scale(0.9);

  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  
  }
  @media ${props => props.theme.breakpoints.xs}{
   
  }
`
export const LeftGridBox = styled.div`

width:100%;
padding:1rem;

  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  
  }
  @media ${props => props.theme.breakpoints.xs}{
   
  }
`
export const RightGridBox = styled.div`
padding:1rem;
margin-left:0%;
margin-top:20%;
transform: scale(1.2);

  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  
  }
  @media ${props => props.theme.breakpoints.xs}{
   
  }
`
export const TitleBox = styled.div`
width:135%;
margin-bottom:2rem;

  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  
  }
  @media ${props => props.theme.breakpoints.xs}{
   
  }
`
export const DownloadBox = styled.div`
width:125%;
margin-inline:-10%;
margin-top:-12.5%;
transform: scale(0.6);
background-color: transparent;
padding: 1rem;


  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  
  }
  @media ${props => props.theme.breakpoints.xs}{
   
  }
`
export const GridSection = styled.section`
  position: relative;
  overflow: hidden;


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
