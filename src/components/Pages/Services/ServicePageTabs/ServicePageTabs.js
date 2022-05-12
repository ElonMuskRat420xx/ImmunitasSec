import React from "react"
import Link from "next/link"
import Image from 'next/image';
import { withRouter } from "next/router"

import { TabBox, HeroLeft, LeftSection, RightSection, TabsLeft, TabsRight } from "./ServicePageTabsStyle";
import { SectionTitle, SectionText, SectionSubText, SectionSubTitle, SecondaryBtn } from "../../../../styles/GlobalComponents";


const ServicePageTabs = ({ router }) => {
    const {
        query: { Services }
    } = router

    const isTabOne = Services === "Infrastructure Penetration Testing" || Services == null
    const isTabTwo = Services === "Objective-Based Penetration Testing"
    const isTabThree = Services === "Application Security Testing"
    const isTabFour = Services === "Development SecOps"
    const isTabFive = Services === "Cyber Maturity Assessment"
    const isTabSix = Services === "Compromise Assessment"
    const isTabSeven = Services === "Purple Teaming"


    return (
        <>

            <HeroLeft>

                <TabsLeft>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Infrastructure Penetration Testing" } }}>
                        <TabBox selected={isTabOne}>
                            Infrastructure Penetration Testing
                        </TabBox>
                    </Link>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Objective-Based Penetration Testing" } }}>
                        <TabBox selected={isTabTwo}>
                            Objective-Based Penetration Testing
                        </TabBox>
                    </Link>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Application Security Testing" } }}>
                        <TabBox selected={isTabThree}>
                            Application Security Testing
                        </TabBox>
                    </Link>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Development SecOps" } }}>
                        <TabBox selected={isTabFour}>
                            Development SecOps
                        </TabBox>
                    </Link>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Cyber Maturity Assessment" } }}>
                        <TabBox selected={isTabFive}>
                            Cyber Maturity Assessment
                        </TabBox>
                    </Link>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Compromise Assessment" } }}>
                        <TabBox selected={isTabSix}>
                            Compromise Assessment
                        </TabBox>
                    </Link>

                    <Link scroll={false} href={{ pathname: "/Services", query: { Services: "Purple Teaming" } }}>
                        <TabBox selected={isTabSeven}>
                            Purple Teaming
                        </TabBox>
                    </Link>
                </TabsLeft>

                <TabsRight>
                    {isTabOne &&
                        <>
                            <HeroLeft>
                                <RightSection>

                                    <SectionSubTitle>
                                        Infrastructure Penetration
                                        <br />
                                        Testing
                                    </SectionSubTitle>

                                    <SectionText>
                                        Our detailed penetration test assessment uncovers vulnerabilities residing in IT and network systems. During our debrief presentation, we work with our clients to ensure they take the best possible step forward in strengthening their security posture. By uncovering weaknesses that others overlook, we outline these findings and make both tactical and strategic recommendations to enhance your security posture.
                                    </SectionText>

                                    <Link href="/InfrastructureTesting">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>
                                </RightSection>

                            </HeroLeft>

                        </>
                    }
                    {isTabTwo &&
                        <>
                            <HeroLeft>
                                <RightSection>
                                    <SectionSubTitle>
                                        Objective-Based Penetration
                                        <br />
                                        Testing
                                    </SectionSubTitle>
                                    <SectionText>
                                        Reduce the risk of a breach within a specific objective-based goal. Our Objective-Based Penetration goes beyond uncovering basic infrastructure vulnerabilities and tackles specific objective oriented tasks to reduce the risk of a breach within specific people, processes and technology company goals.
                                    </SectionText>
                                    <Link href="/ObjectiveTesting">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>
                                </RightSection>
                            </HeroLeft>
                        </>
                    }

                    {isTabThree &&
                        <>
                            <HeroLeft>
                                <RightSection>
                                    <SectionSubTitle>
                                        Application Security
                                        <br />
                                        Testing
                                    </SectionSubTitle>
                                    <SectionText>
                                        From source-code, all the way up to the browser - our application security testing reduces the risk of a breach within a web or mobile application. We conduct a manual testing process in addition to automated testing to find other vulnerabilities that may be missed in automation alone. Our automated testing accounts for only 5% of the work we do, our ethical hackers with an attacker mindset dig deeper to uncover vulnerabilities that VA scanners may not detect.
                                    </SectionText>
                                    <Link href="/ApplicationSecurity">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>
                                </RightSection>
                            </HeroLeft>
                        </>}

                    {isTabFour &&
                        <>
                            <HeroLeft>
                                <RightSection>
                                    <SectionSubTitle>
                                        Development
                                        <br />
                                        SecOps
                                    </SectionSubTitle>
                                    <SectionText>
                                        With DevSecOps, we find and flag vulnerabilities within existing defect management systems prior to User Acceptance Testing or Integration Testing, Application or End user testing. Our continuous vulnerability assessment and monitoring is integrated early in your development cycle and serves as an extension of your development team.
                                    </SectionText>
                                    <Link href="/DevSecOps">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>
                                </RightSection>
                            </HeroLeft>
                        </>
                    }

                    {isTabFive &&
                        <>
                            <HeroLeft>
                                <RightSection>
                                    <SectionSubTitle>
                                        Cyber Maturity
                                        <br />
                                        Assessment
                                    </SectionSubTitle>
                                    <SectionText>
                                        As the first step in strengthening security posture, a Cybersecurity Maturity Assessment supports the tactical direction for your cybersecurity strategy. This offering is for organizations that already have a solid security foundation and are looking to conduct a health check for any unknown gaps. Our assessment generates a roadmap to strengthen your overall security program, align with your core business objectives and meet contractual requirements effectively.
                                    </SectionText>
                                    <Link href="/MaturityAssessment">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>
                                </RightSection>
                            </HeroLeft>
                        </>
                    }


                    {isTabSix &&
                        <>
                            <HeroLeft>
                                <RightSection>
                                    <SectionSubTitle>
                                        Compromise Assessment
                                    </SectionSubTitle>
                                    <SectionText>
                                        Know if there have been any past breaches that have gone undetected within the company’s system networks and infrastructure. Our Compromise Assessment determines the efficiency of current security processes and controls and provides recommendations to support proactive solutions for the future. When you’re looking to grow and partner up, avoid unnecessary risks or expenses with our Compromise Assessment before a crucial merger and acquisitions transaction is made.
                                    </SectionText>
                                    <Link href="/CompromiseAssessment">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>
                                </RightSection>
                            </HeroLeft>
                        </>
                    }

                    {isTabSeven &&
                        <>
                            <HeroLeft>
                                <RightSection>
                                    <SectionSubTitle>
                                        Purple Teaming
                                    </SectionSubTitle>
                                    <SectionText>
                                        Purple Teaming is a collaborative testing exercise where our red team works with your internal security operations team (or blue team) to bridge the gap between offensive techniques and response efforts. We create an action-oriented project plan with your internal blue team to assess any gaps in the IT infrastructure.
                                    </SectionText>
                                    <Link href="/PurpleTeaming">
                                        <SecondaryBtn>Explore Service</SecondaryBtn>
                                    </Link>

                                </RightSection>
                            </HeroLeft>
                        </>
                    }
                </TabsRight>
            </HeroLeft >
        </>

    )
}
export default withRouter(ServicePageTabs)