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
                        Reduce The Risk Of A Breach With An Objective Based Approach
                    </SectionSubTitle>
                    <SectionText>
                        Our penetration testing is more than just a vulnerability scan. Automated testing accounts for only 5% of what we do. The other 95% consists of manually simulated real-life attacks conducted by Security Professionals to uncover your network vulnerabilities and protect your future.
                        <br />
                    </SectionText>
                </LeftSection>

                <LeftSection>
                    <FeatureGrid>
                        <Box>
                            <BoxTitle  >
                                Secure Information
                            </BoxTitle>
                            <BoxText>
                                Approach an objective from all angles to ensure that information remains secure.
                            </BoxText>
                        </Box>

                        <Box>
                            <BoxTitle>
                                Accurate Simulation
                            </BoxTitle>
                            <BoxText>
                                We simulate the attacks launched by a malicious party, both internally and externally.
                            </BoxText>
                        </Box>

                        <Box>
                            <BoxTitle>
                                Detailed Report After Testing Period
                            </BoxTitle>
                            <BoxText>
                                Attack narratives outline how a particular objective was obtained.
                            </BoxText>
                        </Box>

                        <Box>
                            <BoxTitle>
                                Strategic Security Recommendations
                            </BoxTitle>
                            <BoxText>
                                High-level assessment with recommendations to improve security posture.
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
                        Why Conduct Objective-Based Penetration  Testing?
                    </BoxTitle>
                    <br />

                    <SectionText>
                        <BoxTitle>
                            Coverage Based Approach
                        </BoxTitle>
                        <ul>
                            <li className='list-none'   >
                                - Test user awareness and your last line of defence.
                            </li>
                            <li className='list-none'>
                                - Identify threats to a single compromised password or internal end-point.
                            </li>
                            <li className='list-none'>
                                - Test end-point anti-malware capability against ransomware propagation techniques.
                            </li>
                        </ul>
                        <BoxTitle>
                            Attack Narrative
                        </BoxTitle>
                        Each objective is thoroughly documented with an attack narrative to illustrate how it was achieved with a timeline of events.
                        <BoxTitle>
                            Tactical recommendations
                        </BoxTitle>
                        <li className='list-none'>
                            - Thorough pentest combined with adversary simulation goals
                        </li>
                        <li className='list-none'>
                            - Set specific goals you would like the ethical hacker to target within your environment (including people)
                        </li>

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
