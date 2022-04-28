
import React from 'react'
import styled from 'styled-components';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import ContactForm from '../ContactForm/ContactForm';

function ContactHero() {
    return (
  
  <GridSection>

  <Grid>
  <LeftGridBox>
  <SectionTitle>Test</SectionTitle>
  <TextBox>Text</TextBox>
  <TextBox>Text</TextBox>
  <TextBox>Text</TextBox>
  <TextBox>Text</TextBox>

  </LeftGridBox>
  
  <RightGridBox>    
  <h1>Test Text</h1>
  </RightGridBox>
  </Grid>

  </GridSection>
  
  
    )
  }
  
  export default ContactHero
  


  
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
  width:100%;
  padding:1rem;
  
    @media ${props => props.theme.breakpoints.md}{
    }
  
    @media ${props => props.theme.breakpoints.sm}{
    
    }
    @media ${props => props.theme.breakpoints.xs}{
     
    }
  `
export const TextBox = styled.div`
width:100%;
padding:2rem;
margin-block:2rem;
background-color:#212D45;
border-radius:10px;
transition: all .5s ease;

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
  

