import React from 'react';
import Image from 'next/image';
import { HeroLeft, HeroRight, LeftSection, RightSection, ContactRightSection, List, ListItem, ListContainer, ListTitle, ListParagraph, FeatureGrid, Box, BoxText, BoxTitle, Grid, BlockFill, HeadlineTitleSection, HeadlineTextSection, HeadlineHero } from './MainStyles';
import { Section, SectionDivider, SectionSubText, SectionSubTitle, SectionText, SectionTitle } from '../../../../styles/GlobalComponents/index';
import { ContactUsBtn, LearnMoreBtn } from '../../../../styles/GlobalComponents/PrimaryBtn';

import TestingApproach from '../Methodology/Methodology';
import InfrastructurePenTestFaq from '../Faqs/Faq';
import HeroSection from './HeroSection';

import { FaCheckSquare, FaSearchPlus, FaUserLock } from "react-icons/fa";

import MainHero from '../../../../../public/images/HeadlineHeroImg.svg'
import ContactHero from '../../../../../public/images/Mail.svg'

import Table from './Table';
import HeadLine from './Headline';


function Main() {
    return (

        <>
            <HeadLine />

            <HeroSection />

            <InfrastructurePenTestFaq />

            <Section>
                <HeroLeft>

                    <LeftSection>
                        <Image
                            src={ContactHero}
                            layout="responsive"
                        />
                    </LeftSection>

                    <ContactRightSection>
                        <BoxTitle>
                            Ready To Get Started?
                        </BoxTitle>
                        <SectionText>
                            There's simply no room for a compromise. We’re here to help. Our team works with yours to ensure you reach your full security potential.
                        </SectionText>
                        <ContactUsBtn />
                    </ContactRightSection>

                </HeroLeft>
            </Section>
        </>
    )
}

export default Main