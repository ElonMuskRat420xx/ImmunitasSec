import React from 'react';
import Image from 'next/image';
import { HeroRight, BoxTitle, LeftSectionContact, RightSectionContact } from './MainStyles';
import { Section, SectionText } from '../../../../../styles/GlobalComponents/index';
import { ContactUsBtn } from '../../../../../styles/GlobalComponents/PrimaryBtn';

import InfrastructurePenTestFaq from '../Faqs/Faq';
import HeroSection from './HeroSection';

import ContactHero from '../../../../../../public/images/Hero/RedscanHero.svg'

import Table from './Table';
import HeadLine from './Headline';
import Resources from '../Resources/Resources';


function Main() {
    return (

        <>
            <HeadLine />

            <HeroSection />

            <Section >
                <Table />
                <br />
                <br />
                <Resources />
                <br />

                <InfrastructurePenTestFaq />
            </Section>

            <Section>
                <HeroRight>

                    <LeftSectionContact>
                        <Image
                            src={ContactHero}
                            layout="responsive"
                        />
                    </LeftSectionContact>

                    <RightSectionContact>
                        <BoxTitle>
                            Ready To Get Started?
                        </BoxTitle>
                        <SectionText>
                            There's simply no room for a compromise. We’re here to help. Our team works with yours to ensure you reach your full security potential.
                        </SectionText>
                        <ContactUsBtn />
                    </RightSectionContact>

                </HeroRight>
            </Section>
        </>
    )
}

export default Main