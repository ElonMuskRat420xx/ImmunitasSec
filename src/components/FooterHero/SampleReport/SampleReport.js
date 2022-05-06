import React from 'react';
import Image from 'next/image';
import {SectionText, SectionTitle } from '../../../styles/GlobalComponents';
import { HeroRight, LeftSection, RightSection } from "./SampleReportStyles";
import Report from '../../../../public/images/Report.svg'

function ReportHero() {
  return (
<>
<HeroRight>
<LeftSection>
<SectionTitle>
Ready to Get Started?
</SectionTitle>
<SectionText>
We’re here to help. Reach out to schedule an introductory call with one of our team members and learn more about how Arctic Wolf can benefit your organization.
</SectionText>
</LeftSection>

<RightSection>
<Image 
      src={Report}
      alt="Report"
      width="1000px"
      height="1000px"
    >
</Image>
</RightSection>
</HeroRight>
</>
  )}
export default ReportHero

