import React from 'react';
import Image from 'next/image';
import { HeroLeft, HeroRight, LeftSection, RightSection, ContactRightSection, List, ListItem, ListContainer, ListTitle, ListParagraph, FeatureGrid, Box, BoxText, BoxTitle, Grid } from './MainStyles';
import { Section, SectionDivider, SectionSubText, SectionSubTitle, SectionText, SectionTitle } from '../../../styles/GlobalComponents/index';
import { ContactUsBtn, LearnMoreBtn } from '../../../styles/GlobalComponents/PrimaryBtn';

import TestingApproach from '../Methodology/Methodology';
import InfrastructurePenTestFaq from '../Faqs/Faq';

import { FaCheckSquare, FaSearchPlus, FaUserLock } from "react-icons/fa";

import MainHero from '../../../../public/images/Img1.png'
import ContactHero from '../../../../public/images/RedscanHero.svg'

function Main() {
    return (

        <>
            <HeroRight>
                <RightSection>
                    <Image
                        src={MainHero}
                        alt="CardImage"
                        width="585px"
                        height="450px"
                    />
                </RightSection>

                <LeftSection>
                    <SectionTitle>
                        Infrastructure Penetration Testing
                    </SectionTitle>
                    <SectionSubTitle>
                        Overview
                    </SectionSubTitle>
                    <SectionText>
                        A penetration test uncovers vulnerabilities residing in your IT and network systems and provides a tailored approach to each environment. Our ethical hackers evaluate the security of your IT systems through a simulated cyber-attack. With a manual focus, our services begin with the latest tools and technologies, and leverage them to bypass the security of corporate networks protected by even the most sophisticated security controls.
                    </SectionText>
                </LeftSection>

            </HeroRight>

            <HeroRight>

                <LeftSection>
                    <FeatureGrid>
                        <Box>
                            <BoxTitle  >
                                Demonstrated Impact
                            </BoxTitle>
                            <BoxText>
                                Identify gaps in processes and procedures.
                            </BoxText>
                        </Box>

                        <Box>
                            <BoxTitle>
                                Adversary Simulation
                            </BoxTitle>
                            <BoxText>
                                Explore your network from an attacker's perspective.
                            </BoxText>
                        </Box>

                        <Box>
                            <BoxTitle>
                                Proactively Protect
                            </BoxTitle>
                            <BoxText>
                                Find your vulnerabilities before an attacker does.
                            </BoxText>
                        </Box>

                        <Box>
                            <BoxTitle>
                                Assess Your System
                            </BoxTitle>
                            <BoxText>
                                Find weaknesses others overlook in your IT infrastructure.
                            </BoxText>
                        </Box>
                    </FeatureGrid>
                </LeftSection>

                <RightSection>
                    <SectionTitle>
                        Penetration Testing Isn't What We Do, It's All We Do.
                    </SectionTitle>
                    <SectionText>
                        Our penetration testing is more than just a vulnerability scan. Automated testing accounts for only 5% of what we do. The other 95% consists of manually simulated real-life attacks conducted by  Security Professionals to uncover your network vulnerabilities and protect your future.
                        <br />
                    </SectionText>
                </RightSection>

            </HeroRight>

            <TestingApproach />

            <InfrastructurePenTestFaq />

            <HeroLeft>
                <LeftSection>
                    <Image
                        src={MainHero}
                        layout="responsive"
                    />
                </LeftSection>

                <ContactRightSection>
                    <SectionTitle>
                        Ready To Get Started?
                    </SectionTitle>

                    <SectionText>
                        There's simply no room for a compromise. We’re here to help. Our team works with yours to ensure you reach your full security potential.
                    </SectionText>

                    <ContactUsBtn />

                </ContactRightSection>

            </HeroLeft>


        </>


    )
}

export default Main