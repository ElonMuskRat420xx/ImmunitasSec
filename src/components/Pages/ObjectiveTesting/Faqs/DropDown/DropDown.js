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
              What Is An Objective-Based Penetration Test & At What Stage Is The Organization Ready For This Approach?
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
                        An objective-based penetration test begins with a comprehensive, coverage-based infrastructure penetration test. It layers on additional components to round off the assessment, and make it far more realistic and thorough to ensure we actually move the needle on security. The objective-based penetration test includes Infrastructure Penetration Testing, an Active Directory Password Audit, Active Directory Bloodhound Audit, e-mail phishing, advanced simulation of your top five objectives (e.g., obtain access to ERP, obtain administrative control over the target network, etc.) and more.
                      </p>
                      <br />
                      <p>
                        We recommend the objective-based penetration test as the initial approach for most organizations because it helps prioritize your path to low risk across people, processes and technology. It also helps evaluate the responsiveness of your blue team!
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
