/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaChevronRight} from "react-icons/fa";
import styled from 'styled-components'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DropDown1() {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="">
        <QuestionTitle>
        <FaChevronRight className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" />

        What is the purpose of a network penetration test?
        </QuestionTitle>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="">
            <Menu.Item>
              {({ active }) => (

             
                

<Boxes>
<TextBox>
<p>Also known as infrastructure penetration testing, network pen testing is a proactive approach to cyber security. It discovers, critically assesses and exploits security vulnerabilities, weaknesses, technical misconfigurations that a cyber attacker would target in your network’s infrastructure.
<br/>
<br/>
The ramifications of a breach can be costly fiscally and reputationally. The number of cyber attacks on a business is on the rise so it isn’t a case of ‘if’ but ‘when’.
<br/>
<br/>
Our network pen testing experts will identify the risks posed to your business, and crucially, develop a comprehensive plan to strengthen your cyber resilience. In as little as 3 days and with minimal disruption to your business, you’ll know how to bulletproof your organisation.
</p>
</TextBox>
</Boxes>

                
              )}
            </Menu.Item>
      
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export function DropDown2() {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="">
        <QuestionTitle>
        <FaChevronRight className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" />

        What Does A Networking Test Report Contain?

        </QuestionTitle>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="">
            <Menu.Item>
              {({ active }) => (

<Boxes>

    <TextBox >
  <p>
After our team of experts complete the network penetration testing, you will receive a comprehensive report that will contain the following:
  </p>

<br/>

<ul>
    <li>
    - All risks based on the current server/ application setup/configuration
    </li>
    <li>
    - Vulnerabilities and running services for the servers and applications
    </li>
    <li>
     - What has been done to exploit each security issue
    </li>
    <li>
     - Remediation steps
    </li>
    <li>
    - Near-term and long-term actions
    </li>

  </ul>  
   
    </TextBox>
 
</Boxes>

              )}
            </Menu.Item>
      
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export function DropDown3() {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="">
        <QuestionTitle>
        <FaChevronRight className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" />

        Is An External Test Sufficient To Assess The Entire Company's Risk?
        </QuestionTitle>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                
<Boxes>
<TextBox>
  
<p>An external network pen test is aimed at internet exposed devices and/or systems only simulating a threat actor on the internet (unauthenticated). Threat actors in the real world vary in attack vectors aimed at people, processes and technology, therefore, internal network security is assessed differently with both unauthenticated and authenticated approaches.
</p>
</TextBox>
</Boxes>


                
              )}
            </Menu.Item>
      
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export function DropDown4() {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="">
        <QuestionTitle>
        <FaChevronRight className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" />

        Is a network security test disruptive to your environment?

        </QuestionTitle>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                

<Boxes>
<TextBox>
  
<p>
Communication plays an important role during security assessments. We always prompt customers to inform our network penetration testers about fragile components during project initiation meetings. With customer business operations as the highest priority, our technicians follow a mix of consulting and technical approaches to avoid every chance of risk of disruption (such as blind scanning, automated approaches, other low-level Layer 2 activities).<br/> <br/> Low-level attacks, Denial of Service attacks are explicitly deemed out of scope for all network and web application assessments.
</p>
</TextBox>
</Boxes>


              )}



            </Menu.Item>
      
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export function DropDown5() {
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="">
        <QuestionTitle>
        <FaChevronRight className="inline pr-3 h-10 w-10 pb-2" aria-hidden="true" />

        Do You Perform After Test Remediation?

        </QuestionTitle>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                
<Boxes>
<TextBox>
  
<p>
Network testing remediation is sometimes a complex process due to the specialist information security skill-set needed from IT teams. As part of our aftercare support, we provide help in preparing remediation plans to all our customers.
Optionally, we provide remediation consultancy to ensure all agreed findings are mitigated in line with best network security practices.
</p>
</TextBox>
</Boxes>

                
              )}
            </Menu.Item>




      
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const QuestionTitle = styled.h2`
  font-size: ${(props) => props.main ? '42px' : '32px'};
  line-height: ${(props) => props.main ? '32px' : '32px'};
  font-weight:800;
  width: max-content;
  max-width: 100%;
  text-align:left;

  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '24px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 18px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '18px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 0.25rem;
    margin-left:1px;
    max-width: 75%;


    @media ${props => props.theme.breakpoints.xs}{
    font-size: 18px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '18px' : '18px'};
    line-height: ${(props) => props.main ? '32px' : '32px'};
    margin-bottom: 0.25rem;
    margin-left:0px;
    max-width: 40%;

  }
  
  }
`

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 35%);
  margin-bottom:1rem;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
  }
  @media ${props => props.theme.breakpoints.xs}{
    display: flex;
    gap: 10px;
    max-width: 80%;
    margin-bottom:20rem;
  }


`
export const TextBox = styled.div`
  font-size:32px;
  font-weight:250;
  height: 100%;
  width:275%;
  padding: 2rem;
  margin-bottom:-4rem;

  
  @media ${props => props.theme.breakpoints.lg} {
    height: 200px;
    width:350px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 5px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 125px;
    padding: 5px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`