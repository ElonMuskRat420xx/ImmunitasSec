import React from 'react';
import Image from 'next/image';
import { Section, SectionTitle, SectionText, SectionSubTitle, SectionDivider, SectionSubText } from '../../../styles/GlobalComponents/index';
import { Grid, Card, Title, Text, HeroLeft, HeroRight, LeftColumnContent, LeftSection, RightSection } from './AboutStyles';

import AboutHero from '../../../../public/images/RedscanHero.svg'


function AboutSection() {
  return (

    <Section   >
      <SectionTitle>
        Immunitas is 100% Dedicated to Cybersecurity
      </SectionTitle>
      <SectionText>
        We are a trusted provider of innovative cyber security and people-powered solutions. Our cyber security services are the best way to stay one step ahead of the hackers, take control of your infrastructure and protect business-critical data.
      </SectionText>
      <SectionText>
        We make cyber security accessible for everyone. With our combined industry knowledge and pioneering technology, we are confident in providing our customers with valuable cyber security solutions to strengthen their cyber resilience.
      </SectionText>

      <SectionTitle>Our Mission and Values</SectionTitle>

      <Grid>
        <Card>
          <Title>An adversarial mindset</Title>
          <Text>We harness the latest cyberoffensive intelligence to help identify and address security risks sooner.</Text>
        </Card>

        <Card>
          <Title>Outcome-focused</Title>
          <Text>We work closely with our clients to better understand and address their needs.</Text>
        </Card>

        <Card>
          <Title>High-quality service</Title>
          <Text>We strive to continually deliver the highest standards of customer support and exceed expectations.</Text>
        </Card>

        <Card>
          <Title>Technology-agnostic</Title>
          <Text>We’re not constrained by one set of technologies so select the best tools for each client.</Text>
        </Card>

        <SectionDivider />
      </Grid>

      <HeroRight>
        <LeftColumnContent>
          <SectionTitle>
            Detecting Threats By Adversarial Thinking
          </SectionTitle>

          <SectionText>
            Defending against the latest cyber threats requires a deep understanding of how attackers operate.
            <br />
            Our extensive experience of conducting ethical hacking engagements means that we have first-hand knowledge of the latest adversarial tactics and wide-ranging insight into how to safeguard against them.
            <br />
            Continuous collaboration between our offensive and defensive security teams means we are always ready to defend your organisation against current and emerging threats.
          </SectionText>
        </LeftColumnContent>

        <RightSection>

          <Image
            src={AboutHero}
            alt="Card Image"
            width="1000px"
            height="1000px"
          ></Image>
        </RightSection>

      </HeroRight>


      <HeroLeft>
        <LeftSection>
          <SectionTitle>
            Our award-winning security services
          </SectionTitle>
          <SectionText>
            Redscan’s security services are designed to provide the vital assistance needed to make tangible improvements to your organisation’s cyber security posture.
          </SectionText>

        </LeftSection>

        <RightSection>
          <Image
            src={AboutHero}
            alt="Card Image"
            width="1000px"
            height="1000px"
          ></Image>
        </RightSection>
      </HeroLeft>


    </Section>
  )
};

export default AboutSection;

