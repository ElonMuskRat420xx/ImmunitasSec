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
  
  <DropDown1>
  </DropDown1>
  
  <br/>
  <br/>

  <DropDown2>
  </DropDown2>
  
  <br/>
  <br/>

  <DropDown3>
  </DropDown3>
  

  <br/>
  <br/>

  <DropDown4>
  </DropDown4>
  
  <br/>
  <br/>

  <DropDown5>
  </DropDown5>
  
  </Section>
  
    </>
  );
  
  export default NetworkSecFaq;
  
  
  
  
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