import React from 'react';
import { Section, SectionTitle, SectionSubTitle, SectionDivider } from '../../../styles/GlobalComponents';
import { DropDown1, DropDown2, DropDown3, DropDown4, DropDown5, DropDown6, DropDown7, DropDown8 } from './DropDown/DropDown';
import { FaqGrid } from '../Main/MainStyles';
import { FaqBtn } from '../../../styles/GlobalComponents/PrimaryBtn';

const InfrastructurePenTestFaq = (props) => (
  <>
    <Section>

      <SectionTitle>
        Frequently Asked
        Questions
      </SectionTitle>

      <br />

      <FaqGrid>
        <DropDown1 />
        <DropDown2 />
        <DropDown3 />
        <DropDown4 />
        <DropDown5 />
        <DropDown6 />
        <DropDown7 />
        <DropDown8 />
        <div></div >
        <FaqBtn />
      </FaqGrid>

    </Section>
  </>
);

export default InfrastructurePenTestFaq;

