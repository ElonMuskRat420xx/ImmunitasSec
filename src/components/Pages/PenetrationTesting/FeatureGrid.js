import React from 'react'
import styled from 'styled-components'
import { Section, SectionDivider, SectionTitle } from '../../../styles/GlobalComponents';
import Link from 'next/link';
import { FcBusinessContact, FcInspection } from "react-icons/fc";


function FeatureGrid() {
  return (

    <Grid>

      <Box>
        <GridTitle>Competitive Pen Test Prices</GridTitle>
        <GridText>
          <IconText>
            <FcBusinessContact size="10rem" />
          </IconText>
          We offer highly affordable penetration testing services to ensure companies of all sizes can protect themselves from cybersecurity threats.
        </GridText>
      </Box>

      <Box>
        <GridTitle>Comprehensive Reporting</GridTitle>
        <GridText>
          <IconText>
            <FcInspection size="10rem" />
          </IconText>
          You’ll receive a comprehensive report complete with remediation advice and guidance. As well as a full debrief call to run through the findings.
        </GridText>
      </Box>

      <Box>
        <GridTitle>Competitive Pen Test Prices</GridTitle>
        <GridText>
          <IconText>
            <FcBusinessContact size="10rem" />
          </IconText>
          We offer highly affordable penetration testing services to ensure companies of all sizes can protect themselves from cybersecurity threats.
        </GridText>
      </Box>

      <Box>
        <GridTitle>Competitive Pen Test Prices</GridTitle>
        <GridText>
          <IconText>
            <FcBusinessContact size="10rem" />
          </IconText>
          We offer highly affordable penetration testing services to ensure companies of all sizes can protect themselves from cybersecurity threats.
        </GridText>
      </Box>

    </Grid>



  )
}

export default FeatureGrid


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap:1rem;
    margin: 2rem 2rem 0px;
    border-radius: 2px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
 
  }
`
const Box = styled.div`
    
position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    margin-bottom:5rem;


  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
 
  }
`


export const IconText = styled.div`
padding-right:2.5rem;
padding-top:2.5rem;  
  @media ${props => props.theme.breakpoints.md}{
   
  }

  @media ${props => props.theme.breakpoints.sm}{
 
  }
`

export const GridText = styled.h2`
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

export const GridTitle = styled.h2`
  font-weight: 800;
  font-size: 37px;
  width:90%;
  line-height: ${(props) => props.main ? '72px' : '48px'};
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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