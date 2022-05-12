import React from 'react';
import Image from 'next/image';
import { BoxTitle, BlockFill, HeadlineTitleSection, HeadlineTextSection, HeadlineHero } from './MainStyles';
import { Section, SectionText, SectionTitle } from '../../../../styles/GlobalComponents/index';

import MainHero from '../../../../../public/images/ApplicationHeadlineHeroImg.svg'

function HeadLine() {
    return (

        <>
            <Section>
                <HeadlineHero>
                    <HeadlineTitleSection>

                        <BlockFill />
                        <SectionTitle>
                            Application Security Testing
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
                            Application security testing evaluates the security of web and mobile applications to protect against cyber-attacks. From source-code, all the way up to the browser – an application security assessment measures the effectiveness of your in-house developed application. By simulating a hack, we assess the controls you currently have in place.
                        </SectionText>
                    </HeadlineTextSection>
                </HeadlineHero>
            </Section>
        </>
    )
}

export default HeadLine