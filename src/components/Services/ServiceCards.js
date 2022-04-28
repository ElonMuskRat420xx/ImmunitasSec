import React from "react"
import Image from "next/image"
import { StyledCard, Content, ServiceCardText, ServiceCardTitle,CardImage } from "./ServiceCardStyles"

import NetworkSecurity from '../../../public/images/NetworkTesting.png'
import RedTeam from '../../../public/images/RedTeaming.png'
import SocialEngineering from '../../../public/images/SocialEngineering.png'
import Red1 from '../../../public/images/Redscan1.svg'




export const CalloutBanner1 = ({

  title,
  description,
  children,
}) => (


  <StyledCard>
    <Content>

    <CardImage>
    <Image
      src={Red1}
      alt="CardImage"
      width="500px"
      height="500px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner2 = ({
  title,
  description,
  children,
}) => (


  <StyledCard>
    <Content>
    
    <CardImage>
    <Image
      src={NetworkSecurity}
      alt="CardImage"
      width="500px"
      height="500px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner3 = ({

  title,
  description,
  children,
}) => (


  <StyledCard>
    <Content>
    
    <CardImage>
    <Image
      src={RedTeam}
      alt="CardImage"
      width="500px"
      height="500px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner4 = ({
  title,
  description,
  children,
}) => (


  <StyledCard>
    <Content>
    
    <CardImage>
    <Image
      src={SocialEngineering}
      alt="CardImage"
      width="500px"
      height="500px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)



export const CalloutBanner5 = ({
  title,
  description,
  children,

}) => (


  <StyledCard>
    <Content>
    
    <CardImage>
    <Image
      src={RedTeam}
      alt="CardImage"
      width="500px"
      height="500px"

    />
    </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)

