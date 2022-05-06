import React from "react"
import Link from "next/link"
import Image from 'next/image';
import { withRouter } from "next/router"

import { TabHead, TabContainer, TabBody, Tab, TabGrid, TabBox, HeroLeft, HeroRight, LeftSection, RightSection } from "./ServiceTabStyles"
import { SectionTitle, SectionText, SectionSubText, SectionSubTitle, SecondaryBtn } from "../../../styles/GlobalComponents";

import TabImage from '../../../../public/images/RedscanHero.svg'


const Tabs = ({ router }) => {
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
      <SectionTitle>
        Services
      </SectionTitle>
      <TabGrid>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Infrastructure Penetration Testing" } }}>
          <TabBox selected={isTabOne}>
            Infrastructure Penetration Testing
          </TabBox>
        </Link>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Objective-Based Penetration Testing" } }}>
          <TabBox selected={isTabTwo}>
            Objective-Based Penetration Testing
          </TabBox>
        </Link>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Application Security Testing" } }}>
          <TabBox selected={isTabThree}>
            Application Security Testing
          </TabBox>
        </Link>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Development SecOps" } }}>
          <TabBox selected={isTabFour}>
            Development SecOps
          </TabBox>
        </Link>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Cyber Maturity Assessment" } }}>
          <TabBox selected={isTabFive}>
            Cyber Maturity Assessment
          </TabBox>
        </Link>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Compromise Assessment" } }}>
          <TabBox selected={isTabSix}>
            Compromise Assessment
          </TabBox>
        </Link>

        <Link scroll={false} href={{ pathname: "/", query: { Services: "Purple Teaming" } }}>
          <TabBox selected={isTabSeven}>
            Purple Teaming
          </TabBox>
        </Link>
      </TabGrid >


      <TabBody>
        {isTabOne &&

          <React.Fragment>
            <SectionTitle>
              Infrastructure
              <br />
              Penetration Testing
            </SectionTitle>
            <HeroLeft>

              <LeftSection>

                <SectionSubTitle>
                  Find Weaknesses Others Overlook
                </SectionSubTitle>
                <SectionText>
                  An infrastructure penetration testing assessment uncovers vulnerabilities residing in your IT and network systems and provides a tailored approach to each environment.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  Infrastructure Penetration Testing Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Reduce the risk of a breach within system infrastructure</li>
                    <li>Identify gaps in processes and procedures</li>
                    <li>Strengthen your cybersecurity posture</li>
                    <li>Protect your data from ransomware, trojans, and phishing attacks</li>
                    <li>Highlight how a vulnerability can lead to compromise</li>
                    <li>Explain to key stakeholders or board members where vulnerabilities lie and what to do about it</li>
                  </ul>

                  <Link href="/InfrastructureTesting">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>



              </RightSection>
            </HeroLeft>

          </React.Fragment>}

        {isTabTwo &&
          <React.Fragment>
            <SectionTitle>
              Objective-Based
              <br />
              Penetration Testing
            </SectionTitle>
            <HeroLeft>

              <LeftSection>

                <SectionSubTitle>
                  Simulate Real-World Covert Goal-Oriented Attacks
                </SectionSubTitle>
                <SectionText>
                  What happens if one of your users is phished? Could an attacker gain access to your intellectual property with a phish? Before an attacker can compromise your business, our objective-based penetration test layers on and simulates an active attacker’s objective. Following a preliminary penetration test, objective-based testing conducts a more advanced simulated cybersecurity attack. The test is conducted by persistent ethical hackers who deploy multiphase attacks in an effort to gain access to your organization's data so that you can discover gaps and vulnerabilities unique to your organization and test your ability to detect and respond to threat actors.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  Objective-Based Penetration Testing Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Uncover vulnerabilities within specific people, processes, and technology company goals</li>
                    <li>Gain in-depth insight into the vulnerabilities specific to goal-based objectives in addition to a regular penetration testing offering</li>
                    <li>Tackle specific objective oriented tasks to reduce the risk of a breach</li>
                    <li>Initiate real-world attack scenarios to discover the strength in your current security posture</li>
                  </ul>

                  <Link href="/ObjectiveTesting">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>

              </RightSection>
            </HeroLeft>
          </React.Fragment>
        }



        {isTabThree &&

          <React.Fragment>
            <SectionTitle>
              Application
              <br />
              Security Testing
            </SectionTitle>

            <HeroLeft>
              <LeftSection>
                <SectionSubTitle>
                  Reduce The Risk Of A Breach Within Your Application
                </SectionSubTitle>
                <SectionText>
                  More targeted in scope than a regular pentest, application security testing uncovers vulnerabilities residing in your web and mobile apps. Application Security Testing actively explores your application from an attacker’s perspective.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  Application Security Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Determine your app’s security posture</li>
                    <li>Find other vulnerabilities that may be missed in automation testing alone using a customized methodology based on OWASP</li>
                    <li>Gain a realistic simulation of how an attacker would target an application</li>
                  </ul>

                  <Link href="/ApplicationSecurity">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>

              </RightSection>
            </HeroLeft>
          </React.Fragment>}



        {isTabFour &&

          <>
            <SectionTitle>
              DevSecOps
            </SectionTitle>

            <HeroLeft>
              <LeftSection>
                <SectionSubTitle>
                  Discover Vulnerabilities In Your Development Lifecycle
                </SectionSubTitle>
                <SectionText>
                  DevSecOps is integrated early in your development cycle and can act as an extension of your development team to find and flag vulnerabilities within your existing detected management systems.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  DevSecOps Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Map and integrate into the existing development lifecycle</li>
                    <li>Find and flag vulnerabilities prior to User Acceptance Testing or BETA, Application or End-user testing</li>
                    <li>Ensure continuous vulnerability assessment and monitoring</li>
                    <li>Reduce operating expenses</li>
                  </ul>

                  <Link href="/DevSecOps">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>

              </RightSection>
            </HeroLeft>
          </>
        }

        {isTabFive &&

          <>
            <SectionTitle>
              Cyber Maturity
              <br />
              Assessment
            </SectionTitle>

            <HeroLeft>
              <LeftSection>
                <SectionSubTitle>
                  A Cybersecurity Health Check For Your Organization
                </SectionSubTitle>
                <SectionText>
                  A Cybersecurity Maturity Assessment supports the tactical direction for your cybersecurity strategy. As the first step in strengthening your security posture, this assessment generates the roadmap to strengthen your overall security program.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  Cyber Maturity Assessments Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Reduce the risk of a breach within your cybersecurity strategy or mature IT framework</li>
                    <li>Ensure cybersecurity is compliant with contractual requirements</li>
                    <li>Identify gaps and areas for improvement across the security program</li>
                    <li>Optimize cybersecurity posture to meet government regulations</li>
                  </ul>

                  <Link href="/MaturityAssessment">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>

              </RightSection>
            </HeroLeft>
          </>
        }


        {isTabSix &&

          <>
            <SectionTitle>
              Compromise
              <br />
              Security Assessment
            </SectionTitle>

            <HeroLeft>
              <LeftSection>
                <SectionSubTitle>
                  Who’ve You Let In Lately?
                </SectionSubTitle>
                <SectionText>
                  A Compromise Assessment uncovers past or present threats like zero-day malware, trojans, ransomware, and other anomalies that may go unnoticed in standard automated vulnerability scans.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  Compromise Assessments Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Prove security effectiveness to customers and other stakeholders</li>
                    <li>Avoid unnecessary risks or expenses before a Merger & Acquisition transaction</li>
                    <li>Identify any past breaches that may have gone undetected</li>
                    <li>Flag security gaps and determine the efficiency of current security processes</li>
                  </ul>
                  <Link href="/CompromiseAssessment">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>

              </RightSection>
            </HeroLeft>
          </>
        }


        {isTabSeven &&

          <>
            <SectionTitle>
              Purple
              <br />
              Teaming
            </SectionTitle>

            <HeroLeft>
              <LeftSection>
                <SectionSubTitle>
                  Assess Your Cybersecurity Team’s Defensive Response
                </SectionSubTitle>
                <SectionText>
                  Purple Teaming is our collaborative testing exercise where Packetlabs’ red team works with your internal security operations team (or blue team) to bridge the gap between offensive techniques and response efforts.
                </SectionText>
              </LeftSection>

              <RightSection>
                <SectionSubTitle>
                  Purple Teaming Can Help You
                </SectionSubTitle>
                <SectionText>
                  <ul>
                    <li>Create an action-oriented project plan with internal blue team to assess gaps within IT infrastructure</li>
                    <li>Optimize threat intelligence and strengthen offensive and defensive strategies</li>
                    <li>Assess internal blue teams defensive response</li>
                    <li>Refine and tune existing cybersecurity techniques alerts and responses</li>
                  </ul>
                  <Link href="/PurpleTeaming">
                    <SecondaryBtn>Explore Service</SecondaryBtn>
                  </Link>
                </SectionText>

              </RightSection>
            </HeroLeft>
          </>
        }

      </TabBody>
    </>

  )
}
export default withRouter(Tabs)