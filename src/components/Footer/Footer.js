import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import styled from "styled-components"
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';


const Footer = () => {
  return (
    <FooterWrapper>
  
      <SocialIconsContainer>

        <CompanyContainer>

          <Slogan>Innovating one project at a time</Slogan>

        <LinkRow>
        
          <LinkItemRow>    
          <Link href="/PrivacyNotice">Privacy Notice</Link>
          </LinkItemRow>

          <LinkItemRow>
          <Link href="/PrivacyNotice">Legal Notice</Link>
          </LinkItemRow>
          
          <LinkItemRow>
          <Link href="/CompanyPolicies">Company Policy</Link>
          </LinkItemRow>

          </LinkRow>        

        </CompanyContainer>

        <SocialContainer>
          <Link href="/Faq">
          <SocialIcons>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          </Link>

          <Link href="/Faq">
          <SocialIcons>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          </Link>

          <Link href="/Faq">
          <SocialIcons>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          </Link>
        
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
  padding-inline:15px;
  

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
