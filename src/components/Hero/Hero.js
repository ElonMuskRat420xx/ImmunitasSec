import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Because You Don’t Have All Day To Spend On Security
        </SectionTitle>
        <SectionText>
        Quickly find and fix the vulnerabilities that put your web applications at risk of attack. Enjoy more peace of mind – without investing more of your limited time.
        </SectionText>
        <Button onClick={props.handleClick}>Get A Quote</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;