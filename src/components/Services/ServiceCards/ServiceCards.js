import React from "react"
import Image from "next/image"
import { StyledCard, Content, ServiceCardText, ServiceCardTitle, CardImage } from "./ServiceCardStyles"

export const CalloutBanner1 = ({

  title,
  description,
  children,
}) => (


  <StyledCard>
    <Content>
      <CardImage>
        <h1>Image</h1>
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
        <h1>Image</h1>
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
        <h1>Image</h1>
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
        <h1>Image</h1>
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
        <h1>Image</h1>
      </CardImage>
      <ServiceCardTitle>{title}</ServiceCardTitle>
      <ServiceCardText>{description}</ServiceCardText>
      {children}
    </Content>
  </StyledCard>
)

