import React from 'react';
import { Section, SectionTitle, SectionSubTitle, SectionDivider } from '../../../../styles/GlobalComponents';
import { DropDown1 } from './DropDown/DropDown';
import { BoxTitle, FaqGrid } from '../Main/MainStyles';
import { FaqBtn } from '../../../../styles/GlobalComponents/PrimaryBtn';

const InfrastructurePenTestFaq = (props) => (
  <>
    <>
      <SectionSubTitle>
        Frequently Asked
        <br />
        Questions
      </SectionSubTitle>

      <br />

      <FaqGrid>
        <DropDown1 />
        <div></div >
        <FaqBtn />
      </FaqGrid>

    </>
  </>
);

export default InfrastructurePenTestFaq;

