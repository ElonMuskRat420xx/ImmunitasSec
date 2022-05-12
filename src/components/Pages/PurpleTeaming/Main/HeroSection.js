import React from 'react';
import Image from 'next/image';
import { HeroLeft, HeroRight, LeftHeroSection, RightHeroSection, RightHeroSectionTable, LeftHeroSectionTable, ContactRightSection, List, ListItem, ListContainer, ListTitle, ListParagraph, FeatureGrid, Box, BoxText, BoxTitle, Grid, BlockFill, HeadlineTitleSection, HeadlineTextSection, HeadlineHero, FlexGrid, LeftSection } from './MainStyles';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle, SectionSubTitle } from '../../../../styles/GlobalComponents/index';
import { ContactUsBtn, LearnMoreBtn } from '../../../../styles/GlobalComponents/PrimaryBtn';
import Table from './Table';

import { FaCheckSquare, FaSearchPlus, FaUserLock, FaHdd } from "react-icons/fa";

import HeroImage1 from '../../../../../public/images/CyberHero.svg'
import HeroImage2 from '../../../../../public/images/CyberHero2.svg'


function HeroSection() {
    return (
        <>

            <HeroRight>
                <LeftSection>
                    <SectionSubTitle>
                        Penetration Testing Isn't What We Do, It's All We Do
                    </SectionSubTitle>
                    <SectionText>
                        Our penetration testing is more than just a vulnerability scan. Automated testing accounts for only 5% of what we do. The other 95% consists of manually simulated real-life attacks conducted by  Security Professionals to uncover your network vulnerabilities and protect your future.
                        <br />
                    </SectionText>
                </LeftSection>

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
            </HeroRight>

            < HeroRight>
                <RightHeroSectionTable>
                    <Image
                        src={HeroImage2}
                        layout="responsive"
                    />
                </RightHeroSectionTable>

                <LeftHeroSectionTable>
                    <BoxTitle>
                        Why Your Organisation Needs A Pen Test
                    </BoxTitle>
                    <SectionText>
                        With threats constantly evolving, it’s recommended that every organisation commissions penetration testing at least once a year, but more frequently when:
                    </SectionText>
                </LeftHeroSectionTable>
            </HeroRight>

            < HeroLeft>
                <RightHeroSection>
                    <Image
                        src={HeroImage1}
                        layout="responsive"
                    />
                </RightHeroSection>

                <LeftHeroSection>
                    <BoxTitle>
                        Discover Our Custom Tailored Approach To Each Environment
                    </BoxTitle>
                    <SectionText>
                        We deliver a detailed penetration test report outlining our findings and offer tactical and strategic recommendations to enhance your security posture.
                    </SectionText>

                    <BoxTitle>
                        Find vulnerabilities residing in IT systems, applications, or network components
                    </BoxTitle>

                    <SectionText>
                        Each finding is documented with screenshots, and an attack narrative to illustrate the potential risk.
                    </SectionText>

                    <BoxTitle>
                        Protect access to sensitive information by finding weaknesses others overlook
                    </BoxTitle>
                    <SectionText>
                        Find out where gaps exist in modern networks and technology.
                    </SectionText>
                </LeftHeroSection>
            </HeroLeft >
        </>


    )
}

export default HeroSection
