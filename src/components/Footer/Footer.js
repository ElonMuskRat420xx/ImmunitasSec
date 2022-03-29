import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import styled from "styled-components"
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';


const Footer = () => {
  return (
    <FooterWrapper>
      {/* <LinkList>
        
        
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn>
       

      </LinkList> */}


      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>

        <LinkRow>
          <LinkItemRow href="">Privacy Notice</LinkItemRow>
          <LinkItemRow href="">Legal Notice </LinkItemRow>
          <LinkItemRow href="">Company Policies </LinkItemRow>

        </LinkRow>
 


        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="/Faq">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;



export const LinkRow = styled.div`
	display: flex;
	flex-direction: row;
	
	width: 100%;


  @media ${props => props.theme.breakpoints.md} {

    place-content:center;
    

	}
`

export const LinkItemRow = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
  padding-inline:10px;
  

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
    

	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		place-content:center;
	}
`
