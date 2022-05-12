import React from 'react';
import { Section, SectionTitle, SectionSubTitle, SectionDivider } from '../../../../styles/GlobalComponents';
import { DropDown1, DropDown2, DropDown3, DropDown4, DropDown5, DropDown6, DropDown7, DropDown8 } from './DropDown/DropDown';
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

    </>
  </>
);

export default InfrastructurePenTestFaq;

