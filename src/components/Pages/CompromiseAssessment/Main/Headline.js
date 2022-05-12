import React from 'react';
import Image from 'next/image';
import { BoxTitle, BlockFill, HeadlineTitleSection, HeadlineTextSection, HeadlineHero } from './MainStyles';
import { Section, SectionText, SectionTitle } from '../../../../styles/GlobalComponents/index';

import MainHero from '../../../../../public/images/HeadlineHeroImg.svg'

function HeadLine() {
    return (

        <>
            <Section>
                <HeadlineHero>
                    <HeadlineTitleSection>

                        <BlockFill />
                        <SectionTitle>
                            Compromise Assessment
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
                            A compromise assessment is a penetration test focused on identifying if undetected threat actors are currently or have ever been in your network. Testing includes both automated and manual inspection conducted across firewalls, endpoints, and servers to ensure a thorough examination of your IT infrastructure systems and applications. Our ethical hackers uncover threats like zero day malware, trojans, ransomware, and other anomolies that may go undetected in standard automated vulnerability scans.
                        </SectionText>
                    </HeadlineTextSection>
                </HeadlineHero>
            </Section>
        </>
    )
}

export default HeadLine