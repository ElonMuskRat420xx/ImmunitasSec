import React from 'react';
import Image from 'next/image';
import { BoxTitle, BlockFill, HeadlineTitleSection, HeadlineTextSection, HeadlineHero } from './MainStyles';
import { Section, SectionText, SectionTitle } from '../../../../styles/GlobalComponents/index';

import MainHero from '../../../../../public/images/ObjectiveTestingHeroImg.svg'

function HeadLine() {
    return (

        <>
            <Section>
                <HeadlineHero>
                    <HeadlineTitleSection>

                        <BlockFill />
                        <SectionTitle>
                            Objective Based Penetration Testing
                        </SectionTitle>

                        <Image
                            src={MainHero}
                            alt="CardImage"
                            layout='intrinsic'
                        />

                    </HeadlineTitleSection>

                    <HeadlineTextSection>
                        <BoxTitle>
                            Overview
                        </BoxTitle>
                        <SectionText>
                            The Objective-Based Penetration Test is a bundle that’s offered on top of our thorough Infrastructure Penetration Testing service offering. It adds context and specific testing that makes it much more comprehensive. You set objectives (such as access to your most critical data or domain admin), and our ethical hackers will provide the attack narrative of how it was achieved. It's a comprehensive penetration test that incorporates adversary simulation.
                            <BoxTitle>
                                What You'll Get
                            </BoxTitle>
                            <ul>
                                <li>
                                    Social engineering scoped to your preferences (phishing, vishing, tailgating, device drops)
                                </li>
                                <li>
                                    Active directory assessment to identify weaknesses in passwords and configurations
                                </li>
                                <li>
                                    Ransomware assessment that will identify potential impacts of a ransomware attack with the current configuration and security controls
                                </li>
                                <li>
                                    A thorough penetration test across your infrastructure
                                </li>
                            </ul>
                        </SectionText>
                    </HeadlineTextSection>
                </HeadlineHero>
            </Section>
        </>
    )
}

export default HeadLine