import React from "react"
import styled from "styled-components"
import Image from "next/image"
import NetworkSecurity from '../../../public/images/NetworkTesting.png'
import RedTeam from '../../../public/images/RedTeaming.png'
import SmartDevices from '../../../public/images/SmartDevices.png'
import SocialEngineering from '../../../public/images/SocialEngineering.png'
import PenTesting from '../../../public/images/PenetrationTesting.png'
import Red1 from '../../../public/images/Redscan1.svg'


const StyledCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width:100%;
  background: rgb(33, 45, 69);
 
  padding: 3rem;
  margin: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 25px;

  @media ${(props) => props.theme.breakpoints.sm}  {
    flex-direction: column;
    margin-bottom: 2rem;
    margin-inline: -2%;
  }
  @media ${(props) => props.theme.breakpoints.xs}  {
    padding: 2rem;
  }
`

const Content = styled.div`
  padding-left: 0rem;
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 2rem;
    padding-left: 1rem;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-left: 0;
  }
`
const CardImage = styled.div`
  align-self: center; /* prevents crop */
  width: 100%;
  max-width: ${(props) => `${props.maxImageWidth}px`};
  margin-top: -6rem;
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 0rem;
    margin-top: -6rem;
  }
`



export const CalloutBanner1 = ({
  image,
  maxImageWidth,
  title,
  description,
  alt,
  children,
  className,
}) => (


  <StyledCard className={className}>
    <Content>
    
    <CardImage>
    <Image
      src={Red1}
      alt="CardImage"
      width="300px"
      height="300px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner2 = ({
  image,
  maxImageWidth,
  title,
  description,
  alt,
  children,
  className,
}) => (


  <StyledCard className={className}>
    <Content>
    
    <CardImage>
    <Image
      src={NetworkSecurity}
      alt="CardImage"
      width="300px"
      height="300px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner3 = ({
  image,
  maxImageWidth,
  title,
  description,
  alt,
  children,
  className,
}) => (


  <StyledCard className={className}>
    <Content>
    
    <CardImage>
    <Image
      src={RedTeam}
      alt="CardImage"
      width="300px"
      height="300px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner4 = ({
  image,
  maxImageWidth,
  title,
  description,
  alt,
  children,
  className,
}) => (


  <StyledCard className={className}>
    <Content>
    
    <CardImage>
    <Image
      src={SocialEngineering}
      alt="CardImage"
      width="300px"
      height="300px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner5 = ({
  image,
  maxImageWidth,
  title,
  description,
  alt,
  children,
  className,
}) => (


  <StyledCard className={className}>
    <Content>
    
    <CardImage>
    <Image
      src={RedTeam}
      alt="CardImage"
      width="300px"
      height="300px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)


const ServiceCardText = styled.p`
  max-width: 100%;
  height:35%;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 0rem;
  padding-top:1rem;
  color: rgba(255, 255, 255, 0.5);

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

export const ServiceCardTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: 100%;
  height:155px;
  
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 2px;
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
    height:25%
  }
`



