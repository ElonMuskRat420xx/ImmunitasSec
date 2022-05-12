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
                            Cyber Maturity Assessment
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
                            A penetration test uncovers vulnerabilities residing in your IT and network systems and provides a tailored approach to each environment. Our ethical hackers evaluate the security of your IT systems through a simulated cyber-attack. With a manual focus, our services begin with the latest tools and technologies, and leverage them to bypass the security of corporate networks protected by even the most sophisticated security controls.
                        </SectionText>
                    </HeadlineTextSection>
                </HeadlineHero>
            </Section>
        </>
    )
}

export default HeadLine