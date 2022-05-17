import React from 'react';
import Image from 'next/image';
import { SectionSubTitle } from '../../../../../styles/GlobalComponents';
import { DropDown1, DropDown2, DropDown3, DropDown4, DropDown5, DropDown6, DropDown7, DropDown8 } from './DropDown/DropDown';
import { HeroRight, LeftSectionFaq, RightSectionFaq } from '../Main/MainStyles';

import ContactHero from '../../../../../../public/images/Headline/ApplicationHeadlineHero.svg'

const InfrastructurePenTestFaq = (props) => (
  <>
    <>
      <SectionSubTitle>
        Frequently Asked Questions
      </SectionSubTitle>

      <HeroRight>

        <LeftSectionFaq>
          <DropDown1 />
          <DropDown2 />
          <DropDown3 />
          <DropDown4 />
          <DropDown5 />
          <DropDown6 />
          <DropDown7 />
          <DropDown8 />
        </LeftSectionFaq>

        <RightSectionFaq>
          <Image
            src={ContactHero}
            layout="responsive"
          />
        </RightSectionFaq>

      </HeroRight>


    </>
  </>
);

export default InfrastructurePenTestFaq;

