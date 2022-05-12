/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaChevronRight, FaPlusCircle, FaArrowAltCircleDown } from "react-icons/fa";
import { SectionTitle, SectionSubText, SectionSubTitle } from '../../../../../styles/GlobalComponents';
import { FaqTitle, FaqText, Grid } from './DropDownStyles';
import styled from 'styled-components'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DropDown1() {
  return (
    <Grid >

      <Menu>
        <>
          <Menu.Button>
            <FaqTitle className="">
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              What Does My Organization Gain From Security Testing Its Infrastructure?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        The simple answer is reassurance. Our team of consultants will ensure that we have done everything possible to evaluate the security defenses you have in place at your organization. It is impossible to assess how well an organization’s defensive measures are working, unless they have been tested to react the way a vendor has claimed they are intended to perform. Many of our clients have discovered that their defensive 24/7 Security Operations Centre awareness teams failed at discovering an intruder in a timely manner, or fail to identify a breach of security. In addition, many Anti-Virus and Intrusion Detection System frameworks have failed at detecting malware.
                      </p>
                      <br />
                      <p>
                        Unfortunately, other clients called us only after they experienced a breach. At that point, the damage had already been done, which lead to a forensic assessment to discover how the breach occurred. By taking a preventive strategy your organization will gain access to our comprehensive reports, which are among the most inclusive in the industry. Our reports detail findings in an easy-to-read layout for executives, but also provide the necessary results, guidelines and suggestions that can help the technical staff mitigate the exploitable vulnerabilities found going forward. This allows management to share results with all organizational stakeholders involved to address the weaknesses in all related operations, and to help focus on the costs needed for investing in securing your entire IT
                        architecture.
                      </p>
                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>

  )
}

export function DropDown2() {
  return (
    <Grid >

      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              What Is The Difference Between A Depth-Based Penetration Test And A Coverage-Based Penetration Test?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        Unlike depth-based penetration testing, coverage-based penetration testing has a broader, “let’s keep looking” focus. With this approach, testers look for multiple ways to compromise an environment and exploit its vulnerabilities. In fact, they look for as many ways in, not just the easy ones, and don’t simply stop after the first exploit. Depth-based, in contrast, focuses on finding the path of least resistance, or the easiest way in. This is the path attackers will often take, but it doesn’t consider that there are multiple other ways, which may be a little bit more challenging to exploit.
                      </p>
                    </FaqText>

                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>

  )
}

export function DropDown3() {
  return (
    <Grid >

      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              What Is The Difference Between Internal & External Security Infrastructure Testing?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        Both of these areas of assessment focus on different assumptions and attack surfaces. External infrastructure testing is concerned with what services, protocols, and applications are being exposed to the internet, e.g. web servers, log-in portals. These systems are considered the most vulnerable, as the constant bombardment of attacks from external threat actors create a high level of risk to all exposed areas. The systems that are exposed must have impeccable configurations focusing on hardening techniques, leaving no room for error, and must also be concerned with denial of service attacks.
                      </p>
                      <br />
                      <p>
                        The assumption with Internal infrastructure testing is that external threat actors have already penetrated external defenses to find a way inside or the threat is being sourced from an internal actor, which some consider a company’s greatest threat, or a vendor that has already been authorized for access. The primary focus areas for this type of testing are lateral movement and privilege escalation. The goal of this type of testing is to identify how difficult it is for an internal attacker to move around the internal network and to discover what type of sensitive data may be obtained in the process. This is also an effective way to test the awareness of the defensive team by identifying how quickly it takes for a defensive team to discover the presence of an intruder and if they were able to isolate how the intruder gained entry.
                      </p>

                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>

  )
}

export function DropDown4() {
  return (
    <Grid >
      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              Why Perform Security Testing On Infrastructure Already Protected By A Firewall?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        From our experience, we have found that intruders continuously find the weakest link and utilize the path of least resistance to enter an organization’s network. This path circumvents a firewall’s configuration and implementation. The purpose of a firewall is to only allow specified traffic in or out as authorized – but if an attacker can hide within permitted traffic, they can undoubtedly use it to enter and exit as required. Common examples can include utilizing web, DNS, or email traffic to keep from being discovered. In most cases, the common weakest link in organizations are the staff that fall victim to phishing-based attacks that can be used to gain a foothold into the internal network that may lead to an intruder exploring sensitive assets.
                      </p>
                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>

  )
}

export function DropDown5() {
  return (
    <Grid >
      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              Is It Necessary To Plant A Device Within The Test Network So You Can Have Access? Why Can’t You Just “Hack In”?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        Depending on the scope and size of the engagement, most security testing engagements fall between the range of weeks to months. In that time, the assessment of the network infrastructure involves testing all assets in scope, which can include a large number of services, applications and protocols being used by those assets. Given the budget of the client, time restrictions, and scope of allowable testing rules, in most cases the time and budget spent would be better utilized on the actual testing of the assets. Our team of consultants can spend the entire allocated time and budget on trying to bypass external defense mechanisms or create a sophisticated phishing campaign (as is done in objective-based penetration testing) until we gain entry, but by that time the budget may be well spent, leaving little opportunity for the actual security assessment. As such, in most situations, providing our consultants with VPN credentials or planting a device inside the network to ensure the network infrastructure can be thoroughly tested in its entirety will provide the most value.
                      </p>
                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>

  )
}

export function DropDown6() {
  return (
    <Grid >
      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              Should The Security Testing Be Performed In Production Or Pre-Production Environments?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        The advantage of performing security testing in production environments is that it allows the testing to be conducted within the actual network conditions using the latest developments the staff has configured. This also helps to discover how attacking certain parts of a network or individual systems may affect other areas of the architecture. In many of our engagements, we have found that there are multiple ways to successfully infiltrate a network or laterally move within a network based on how well the services were connected with each other. By performing a test in a production environment, these paths can be explored and provide a level of insight not possible in situations where pre-production isolated systems exist.
                      </p>
                      <br />
                      <p>
                        One of the small, possible disadvantages to full production environmental testing is that live systems may experience interference during normal operations. In most cases, this interference is minimal and is usually not even detected, but capturing relevant data can be absolutely critical to the result outcome. If special circumstances exist where these systems are inherently sensitive, it is possible to perform testing in pre-production environments. The difference being that the consultant would not have the opportunity to evaluate how the regular services accessed by this system would typically run for the organization’s users, customers or vendors. The pre-production test would simply focus on assessing the pre-production infrastructure integrity on its own.
                      </p>
                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>

  )
}

export function DropDown7() {
  return (
    <Grid >

      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              Is It Best Practice To Make Our Security Operations Team Aware Of The Penetration Test?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        If the intention of the test is to evaluate the ability of the defensive team, then it may be in the best interest of the organization to limit the knowledge of the testing. If the security team is aware of the testing well in advance, we find most teams will spend their time days in advance updating all operating systems and applications, and even disabling some services that are being used on a regular basis to avoid the chance of the test results being detrimental to their work performance. This may sway the outcome of testing results and not provide an accurate representation of your architecture, while also not providing the full value of the test. A typical attacker has the option to attack your networks on their schedules, waiting patiently until they feel you are the most vulnerable, not when you are the most prepared. If the intention is to work with the organization’s security team to identify and mitigate findings in real time, then it’s beneficial to have the team aware of our presence and we recommend sending start and stop notifications to all relevant parties so they’re aware of any interruption to services.
                      </p>
                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </  Grid>

  )
}

export function DropDown8() {
  return (
    <Grid >
      <Menu>
        <>
          <Menu.Button>
            <FaqTitle>
              <FaArrowAltCircleDown className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" color='white' />
              What Type Of Methodology Is Used For Infrastructure Security Testing?
            </FaqTitle>
          </Menu.Button>
        </>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <>
              <Menu.Item>
                {({ active }) => (
                  <Boxes>
                    <FaqText className='pl-[2rem]'>
                      <p>
                        Our consultants are trained to follow our own specialized security testing methodology based on industry standards primarily aligned with NIST SP800-115 to ensure compliance with most regulatory requirements, but are also fine-tuned to fulfill the needs of each individual client’s security concerns. The reason for this organizational-specific testing methodology is to create an effective attack plan that produces data results that are valuable, but also have a high-level of validity associated with them. False-positive results are a waste of time for everyone involved. Our consultants take the time to create POCs (proof of concepts) that are easy to understand and follow, but also show exactly how we came to the results, so our clients can use this information to mitigate the vulnerabilities and create a more secure infrastructure.
                      </p>
                      <br />
                      <p>
                        <ul>
                          <h1>Information Gathering</h1>
                          <>
                            <p>During this stage, our consultants will take the time to do reconnaissance on your organization to discover every possible detail that can be utilized. This can include online services, exposed portal systems, published documents, social media, identifying valid employee accounts and more. Collecting this information can be used to help create a custom phishing attack as most attackers will use this information to boost their attack efforts.
                            </p>
                          </>
                          <h1>Discovery and Vulnerability Scanning</h1>
                          <>
                            <p>Next, a comprehensive manual and automated testing process will occur utilizing various commercial automated scanning tools & technologies while combining manual custom vulnerability testing techniques to identify, fingerprint and validate findings. Multiple attack areas and vulnerabilities will be evaluated in the stage. Our consultants are not satisfied until every potential attack path has been considered.
                            </p>
                          </>
                          <h1>Exploitation</h1>
                          <>
                            <p>Once the vulnerabilities have been identified, the consultant will utilize this opportunity to exploit them. This requires the testing team to creatively circumvent defensive measures that may try to prevent the exploitation from being successful (e.g. Anti-virus). Our consultant will test the areas of confidentiality, integrity, and in some cases, availability to verify that the vulnerability is actually exploitable. Attempts to escalate privileges, gain unauthorized access, and laterally move across the network will be explored.
                            </p>
                          </>
                          <h1>Reporting</h1>
                          <>
                            <p>After all the results and data have been collected, our team will create an industry-leading comprehensive report that is custom tailored to our clients. The report contains an executive summary with a high-level overview of the critical issues identified, the methodologies we used to conduct the test, the scope of the assessment, a technical finding section that describes each of the findings, with steps to reproduce, evidence where required, and steps on how to remediate the vulnerability. Finally, the report is concluded with a unique list of strategic and tactical security recommendations, and appendices are included when necessary.
                            </p>
                          </>
                        </ul>
                      </p>
                    </FaqText>
                  </Boxes>
                )}
              </Menu.Item>
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </Grid>
  )
};

export const Boxes = styled.div`
        width: 100%;
        height:100%;
        display:flex;

        @media ${props => props.theme.breakpoints.md}{

        }

        @media ${props => props.theme.breakpoints.sm}{
        max-width: 500px;
  }
        @media ${props => props.theme.breakpoints.xs}{
          display: flex;
        gap: 10px;
        max-width: 80%;
        margin-bottom:20rem;
  }


        `
