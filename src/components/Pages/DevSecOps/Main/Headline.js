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
                            Development Secuirty Operations
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
                            Our recurring testing service helps discover vulnerabilities in a client’s application development lifecycle. DevSecOpsis integrated early in your development cycle and can act as an extension of your development team to find and flag vulnerabilities within your existing detected management systems before User Acceptance Testing (UAT).
                        </SectionText>
                    </HeadlineTextSection>
                </HeadlineHero>
            </Section>
        </>
    )
}

export default HeadLine