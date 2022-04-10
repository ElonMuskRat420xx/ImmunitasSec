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

Title
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
Text
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

Title
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


Text

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

Title        
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
  
Text


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

Title
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
  
Text

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

Title
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
  
Text


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