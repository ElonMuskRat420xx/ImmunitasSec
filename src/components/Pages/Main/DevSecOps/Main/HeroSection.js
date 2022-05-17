import React from 'react';
import Image from 'next/image';
import { HeroLeft, HeroRight, LeftHeroSection, RightHeroSection, RightHeroSectionTable, LeftHeroSectionTable, FeatureGrid, Box, BoxText, BoxTitle, Grid, LeftSection } from './MainStyles';
import { SectionText, SectionSubTitle } from '../../../../../styles/GlobalComponents/index';

import HeroImage1 from '../../../../../../public/images/Hero/CyberHero.svg'

import IconImg1 from '../../../../../../public/icons/Web_PL_Method.webp'
import IconImg2 from '../../../../../../public/icons/Infrastructure_Pentesting_Method.webp'
import IconImg3 from '../../../../../../public/icons/Mobile_PL_Method.webp'
import IconImg4 from '../../../../../../public/icons/Network_Security.webp'
import IconImg5 from '../../../../../../public/icons/Client-Side_Protection.webp'
import IconImg6 from '../../../../../../public/icons/System_Configuration.webp'
import IconImg7 from '../../../../../../public/icons/OS_and_Third_Party_Patching.webp'
import IconImg8 from '../../../../../../public/icons/Authentication.webp'
import IconImg9 from '../../../../../../public/icons/Database_Security.webp'
import IconImg10 from '../../../../../../public/icons/Web_Application_Security.webp'
import IconImg11 from '../../../../../../public/icons/Email_Phishing.webp'


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

            < HeroLeft>
                <RightHeroSectionTable>
                    <BoxTitle>
                        What Are The Risks?
                    </BoxTitle>
                    <br />
                    <SectionText>
                        <p>
                            IT Security and the associated terminology is a mainstream issue for all businesses due to the reliance business places on its IT systems combined with the prevalence of attacks.
                        </p>
                        <br />
                        <p>
                            IT Security issues have become commonplace in today’s society with almost weekly coverage in the news regarding the latest data breaches. With the larger attacks attracting substantial financial penalties.
                        </p>
                    </SectionText>
                </RightHeroSectionTable>

                <LeftHeroSectionTable>
                    <Image
                        src={HeroImage1}
                        layout="responsive"
                    />

                </LeftHeroSectionTable>
            </HeroLeft>

            <br />
            <br />

            < HeroLeft>
                <RightHeroSection>


                    <Grid>
                        <div>
                            <Image
                                src={IconImg1}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Web: OWASP Top 10
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg2}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Infra: NIST 800-53
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg3}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Mobile: OWASP Top 10
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg4}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Network Security
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg5}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Client-Side Protection
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg6}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                System Configuration
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg7}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                OS & Third Party Patching
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg8}
                                layout="responsive"
                            />
                            <BoxText className='text-center'>
                                Authentication
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg9}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Database Security
                            </BoxText>
                        </div>

                        <div>
                            <Image
                                src={IconImg10}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Web Application Security
                            </BoxText>
                        </div>


                        <div>
                            <Image
                                src={IconImg11}
                                layout="responsive"
                            />
                            <BoxText className='text-center	'>
                                Email Phishing
                            </BoxText>
                        </div>
                    </Grid>
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
