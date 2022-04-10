import React from 'react';
import styled from 'styled-components'
import { Section } from '../../styles/GlobalComponents';
import {DropDown1, DropDown2, DropDown3, DropDown4, DropDown5} from './DropDown';

const NetworkSecFaq = (props) => (
    <>

  <Section>

  <FaqTitle>
    Frequently Asked Questions  
  </FaqTitle>
  <DropDown1/>
    <br/>
    <br/>
  <DropDown2/>
    <br/>
    <br/>
  <DropDown3/>
    <br/>
    <br/>
  <DropDown4/>
    <br/>
    <br/>
  <DropDown5/>
  </Section>
  
    </>
  );
  
  export default NetworkSecFaq;
  
  const FaqTitle = styled.h2`
    font-weight: 800;
    font-size: ${(props) => props.main ? '55px' : '46px'};
    width: max-content;
    max-width: 100%;
    margin-top:2rem;
    margin-bottom:4rem;
    margin-left:0%;
  
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
  
  
